import React, { useEffect, useState } from "react";
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
import Update from './components/Update/Update';
const fakeList = [
  {
    ProductId: 1,
    ProductName: "Khoa",
    Image:
      "data:image/jpeg;base64,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",
    Quantity: 112,
    Price: 123,
    CategoryId: 1,
    Status: true,
  },
  {
    ProductId: 2,
    ProductName: "Duy",
    Image: "image",
    Quantity: "1221",
    Price: "1200",
    CategoryId: 1,
    Status: false,
  },
];
const Admin = () => {
  const [stage, setStage] = useState("Manage");
  const [listPro, setListPro] = useState([]);
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);
  const columns = [
    {
      title: "ProductId",
      dataIndex: "ProductId",
      key: "ProductId",
    },
    {
      title: "ProductName",
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: "Image",
      dataIndex: "Image",
      key: "Image",
      render: (Image) => <img style={{ width: '50%' }} src={Image} />,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantiy",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "CategoryId",
      dataIndex: "CategoryId",
      key: "CategoryId",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (Status) => (
        <span>
          <Tag
            color={Status === true ? "green" : "volcano"}
          >
            {Status.toString().toUpperCase()}
          </Tag>
        </span>
      ),
    },
    {
      title: "More",
      dataIndex: "ProductId",
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



  const handleOpenAdd = (value) => {
    console.log("value", value);
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleDelete = (productId) => {
    // goi api to delete
  }

  const handleChangeUpdate = (productId) => {
    setStage("Update");
    console.log('sa', productId);
    fakeList.forEach((elements) => {
      if (elements.ProductId === productId) {
        setSelectedValue(elements);
      }
    });


  };
  const handleChangeManage = () => {
    setStage("Manage");
  };

  if (stage === "Manage") {
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
          dataSource={fakeList}
          pagination={{ defaultPageSize: 5 }}
          columns={columns}
        />
        <Add opened={opened} onClose={handleClose} />
      </Container>
    );
  } else {
    return (
      <Container style={{ padding: "20px" }}>
        <Button
          id="Add"
          variant="outlined"
          color="primary"
          onClick={handleChangeManage}
        >
          Back
        </Button>
        <Update product={selectedValue} />
      </Container>
    );
  }
};
export default Admin;
