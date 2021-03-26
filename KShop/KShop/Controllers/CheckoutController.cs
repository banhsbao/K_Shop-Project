
using KShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace KShop.Controllers {
    [Route("api/checkout")]
    [ApiController]
    public class CheckoutController: ControllerBase {

        SqlConnection connection = null;
        private readonly IConfiguration configuration;
        public CheckoutController(IConfiguration configuration) {
            this.configuration = configuration;
            connection = new SqlConnection(configuration.GetConnectionString("DefaultConnectionStrings"));
        }

        [HttpPost]
        public ActionResult Checkout([FromBody] Product[] products) {
            List<Product> listProduct = null;
            foreach(Product pro in products) {
                if(CheckConflictQuantity(pro)) {
                    if(listProduct == null) {
                        listProduct = new List<Product>();
                    }
                    listProduct.Add(pro);
                }
            }
            if(listProduct != null) {
                return BadRequest(JsonConvert.SerializeObject(listProduct));
            }
            double totalPrice = 0;
            int invoiceId = 0;
            int lastInvoiceId = GetLastInvoiceId();
            if(lastInvoiceId > -1) {
                invoiceId = lastInvoiceId;
            }
            foreach(Product pro in products) {
                totalPrice += pro.Price * pro.Quantity;
            }

            InsertInvoice(invoiceId, totalPrice);
            foreach(Product pro in products) {
                InsertInvoiceDetail(invoiceId, pro);
            }
            return Ok();
        }

        int GetLastInvoiceId() {
            int result = -1;
            try {
                connection.Open();
                #region
                SqlCommand command = new SqlCommand("sp_get_last_id_Invoice", connection);
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader reader = command.ExecuteReader();
                if(reader.Read()) {
                    result = reader.GetInt32("InvoiceId");
                }
                #endregion
                connection.Close();
            } catch(Exception) {
                throw;
            }
            return result;
        }

        bool CheckConflictQuantity(Product product) {
            bool isConflict = false;
            try {
                connection.Open();
                #region
                SqlCommand command = new SqlCommand("sp_get_productId_not_enough_quantity_Product", connection);
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add("@productId", SqlDbType.Int);
                command.Parameters.Add("@inputQuantity", SqlDbType.Int);
                command.Parameters["@productId"].Value = product.ProductId;
                command.Parameters["@inputQuantity"].Value = product.Quantity;

                SqlDataReader reader = command.ExecuteReader();
                if(reader.Read()) {
                    isConflict = true;
                }
                #endregion
                connection.Close();
            } catch(Exception) {
                throw;
            }
            return isConflict;
        }

        void InsertInvoice(int invoiceId, double totalPrice) {
            string currentUser = HttpContext.Session.GetString("user");
            Account user = (Account)JsonConvert.DeserializeObject(currentUser);
            try {
                connection.Open();
                #region
                SqlCommand command = new SqlCommand("sp_insert_Invoice", connection);
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add("@invoiceId", SqlDbType.Int);
                command.Parameters.Add("@totalPrice", SqlDbType.Float);
                command.Parameters.Add("@username", SqlDbType.VarChar);
                command.Parameters.Add("@address", SqlDbType.NVarChar);
                command.Parameters["@invoiceId"].Value = invoiceId;
                command.Parameters["@totalPrice"].Value = totalPrice;
                command.Parameters["@username"].Value = user.Username;
                command.Parameters["@address"].Value = user.Address;

                command.ExecuteNonQuery();
                #endregion
                connection.Close();
            } catch(Exception) {
                throw;
            }
        }

        void InsertInvoiceDetail(int invoiceId, Product pro) {
            try {
                connection.Open();
                #region
                SqlCommand command = new SqlCommand("sp_insert_InvoiceDetail", connection);
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add("@invoiceId", SqlDbType.Int);
                command.Parameters.Add("@productId", SqlDbType.Int);
                command.Parameters.Add("@quantity", SqlDbType.Int);
                command.Parameters.Add("@price", SqlDbType.Float);
                command.Parameters["@invoiceId"].Value = invoiceId;
                command.Parameters["@productId"].Value = pro.ProductId;
                command.Parameters["@quantity"].Value = pro.Quantity;
                command.Parameters["@price"].Value = pro.Price;

                command.ExecuteNonQuery();
                #endregion
                connection.Close();
            } catch(Exception) {
                throw;
            }
        }

    }
}
