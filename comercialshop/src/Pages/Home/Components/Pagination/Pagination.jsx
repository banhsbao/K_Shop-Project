import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import '../Pagination/Pagination.css'
const Paginations = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  const { datalength,changeData } = props;
  const handleChange = (event, value) => {
    changeData(value);
  };
 

  return (
    <div
      className={classes.root}
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <Pagination
        count={datalength}
        variant="text"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

Paginations.propTypes = {
  changeData: PropTypes.func,
};

export default Paginations;
