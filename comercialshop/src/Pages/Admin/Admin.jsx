import React, { useEffect, useState } from "react";
import productApi from "../../Api/SubApi/productApi";
import { Spin } from "antd";
import {
  Card,
  Container,
  Divider,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import { Table, Tag } from "antd";
import "./Admin.css";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";

const Admin = () => {
  const [stage, setStage] = useState("Manage");
  const [listPro, setListPro] = useState([]);
  const [opened, setOpened] = useState(false);
  const [changed, setChanged] = useState(false);
  const columns = [
    {
      title: "ProductId",
      dataIndex: "productId",
      key: "ProductId",
    },
    {
      title: "ProductName",
      dataIndex: "productName",
      key: "ProductName",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "Image",
      render: (Image) => <img style={{ width: "50%" }} src={Image} />,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "Quantiy",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
    },
    {
      title: "CategoryId",
      dataIndex: "categoryId",
      key: "CategoryId",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "Status",
      render: (Status) => (
        <span>
          <Tag color={Status === true ? "green" : "volcano"}>
            {Status.toString().toUpperCase()}
          </Tag>
        </span>
      ),
    },
    {
      title: "More",
      dataIndex: "productId",
      key: "ProductId",
      render: (ProductId) => (
        <>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(ProductId)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await productApi.manageProduct();
        console.log("respone", respone);
        setListPro(respone);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [changed]);

  const handleOpenAdd = (value) => {
    console.log("value", value);
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };
  const handleGetAll = () => {
    setChanged(!changed);
  };
  const handleDelete = (productId) => {
    // goi api to delete
    console.log("ProductId", productId);
    const deleteProduct = async () => {
      const params = {
        productId: productId,
      };
      const respone = await productApi.deleteProduct(params);
      console.log("respone:!2", respone);
    };
    deleteProduct();
    setChanged(!changed);
  };

  const handleChangeManage = () => {
    setStage("Manage");
  };

  if (listPro !== null) {
    return (
      <Container style={{ padding: "20px" }}>
        <Card>
          <CardContent>
            <Typography variant="h3" component="h3">
              Admin Page
            </Typography>
          </CardContent>
        </Card>
        <div
          style={{
            left: "0",
            margin: "20px 0",
          }}
        >
          <Button
            id="Add"
            variant="outlined"
            color="primary"
            onClick={handleOpenAdd}
          >
            Add
          </Button>
        </div>
        <Divider />
        <Table
          style={{ marign: "10px" }}
          bordered
          pagination={{ defaultPageSize: 5 }}
          columns={columns}
          dataSource={listPro}
        />
        <Add opened={opened}  event={handleGetAll} onClose={handleClose} />
      </Container>
    );
  }
};
export default Admin;
