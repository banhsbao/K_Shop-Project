import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Header from "../../Components/Navbar/Navbar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Quanity from "./Quanity/Quanity";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import productApi from "../../Api/SubApi/productApi";
import ColorButton from "../Home/Components/ItemCaroursel/Components/ColorButton/ColorButton";
const Cart = (props) => {
  const style = {
    homeBody: {
      margin: "0 60px 0 60px",
    },
    title: {
      backgroundColor: "#E5DFCA",
      height: "500px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    product: { fontSize: "50px", color: "#fff" },
    title2: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "80px 0 0 0",
    },
    cart: {
      width: "90%",
    },
    title3: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "80px 0 0 0",
      paddingBottom:'80px'
    },
  };
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  const classes1 = useStyles1();
  const [data, setdata] = useState(
    localStorage.getItem('CART')
  );
  const [dataTmp, setdataTmp] = useState([]);
  useEffect(() => {
    const fectProductList = async () => {
      try {
        const response = await productApi.getAll();
        setdataTmp(response);
      } catch (error) {
        console.log("fail: ", error);
      }
    };

    fectProductList();
  }, []);
  const classes = useStyles();
  const setQuanity = (newQuanity, index) => {
    let newArr = [...data];
    newArr[index].Quanity = newQuanity;
    setdata(newArr);
  };
  const deleteProdcutCart = (index) => {
    let newArr = [...data];
    newArr.splice(index, 1);
    setdata(newArr);
  };
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div style={{ height: "150px" }}></div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography component="div" style={style.title}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              style={style.product}
            >
              CART
            </Typography>
          </Typography>
          {/* Table-Cart */}
          {data.length > 0 && (
            <Typography component="div" style={style.title2}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={style.cart}
              >
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ fontSize: "18px", fontWeight: "300" }}
                        >
                          Product
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "18px", fontWeight: "300" }}
                        >
                          Price
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "18px", fontWeight: "300" }}
                        >
                          Quanity
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "18px", fontWeight: "300" }}
                        >
                          Total
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "18px", fontWeight: "300" }}
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row, index) => (
                        <TableRow key={row.ProductId}>
                          <TableCell component="th" scope="row">
                            <div style={{ width: "" }}>
                              <img
                                alt=""
                                style={{
                                  minHeight: "231px",
                                  maxHeight: "231px",
                                  minWidth: "185px",
                                  maxWidth: "185px",
                                  objectFit: "cover",
                                  float: "left",
                                }}
                                src={row.Image}
                              ></img>
                              <div
                                style={{
                                  float: "left",
                                  margin: "20px 0 0 20px",
                                  fontSize: "large",
                                }}
                              >
                                {row.ProductName}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            ${row.Price}
                          </TableCell>
                          <TableCell align="center">
                            <Quanity
                              Quanity={row.Quanity}
                              index={index}
                              setQuanity={setQuanity}
                              MaxQuanity={
                                dataTmp.length > 0
                                  ? dataTmp[row.ProductId - 1].Quanity
                                  : 100
                              }
                            ></Quanity>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            ${Math.round(row.Price * row.Quanity * 10) / 10}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              aria-label="Delete Product"
                              component="span"
                              onClick={() => deleteProdcutCart(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </Typography>
          )}
          {data.length <= 0 && (
            <Typography component="div" style={style.title2}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                style={{ fontSize: "25px", fontWeight: "300" }}
              >
                CART EMPTY
              </Typography>
            </Typography>
          )}
          {/* End-Table-Cart */}
          <Typography component="div" style={style.title3}>
          <Typography component="div" style={{width:'20%'}}>
              <div className={classes1.root} style={{width:'100%'}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes1.paper} style={{fontSize:'18px'}}>
                      Total: <span style={{fontWeight:'bold'}}>$
                      {data
                        .map((product) => product.Price * product.Quanity)
                        .reduce((a, b) => a + b)}</span>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes1.paper}>
                    <ColorButton label={"CHECK OUT"}></ColorButton>
                    </Paper>
                  </Grid>      
                </Grid>
              </div>
              </Typography>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
