import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import "./Filter.css";
const Filter = (props) => {
  const UseStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom: "45px",
    },
  });

  const classes = UseStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#DFD6AF",
            color: "#000",
          },
        }}
        left
      >
        <Tab label="ALL" />
        <Tab label="BESTSELLER" />
        <Tabs label="NEW IN" />
      </Tabs>
    </Paper>
  );
};

Filter.propTypes = {};

export default Filter;
