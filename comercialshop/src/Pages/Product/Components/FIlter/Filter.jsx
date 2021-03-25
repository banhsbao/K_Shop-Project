import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import $ from "jquery";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "../FIlter/Filter.css";
import InputSearchByName from "./InputSearchByName/InputSearchByName";
const Filter = (props) => {
  const { searchData, maxPrice, datalength } = props;
  const useStyles = makeStyles((theme) => ({
    input: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const PrettoSlider = withStyles({
    root: {
      color: "#c4bb99",
      height: 8,
      width: "60%",
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 4,
      borderRadius: 4,
    },
    rail: {
      height: 4,
      borderRadius: 4,
    },
  })(Slider);
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

  const classes = useStyles();
  const [Value, setValue] = useState({ min: 1, max: 0 });
  const max = maxPrice;
  const getValue = (e, data) => {
    const mins = data[0];
    const maxs = data[1];
    const value = { ...Value };
    value.min = mins;
    value.max = maxs;
    setValue(value);
    searchData(
      $("#txtSearch").val(),
      mins,
      maxs,
      $(".MuiSelect-nativeInput").val()
    );
  };
  const form = useForm({
    defaultValues: {
      txtSearch: "",
    },
  });
  const handleSubmit = (values) => {
    searchData(
      $("#txtSearch").val(),
      Value.min,
      Value.max === 0 ? maxPrice : Value.max,
      $(".MuiSelect-nativeInput").val()
    );
  };
  const changeTextValue = (e, data) => {
    $("#min").html("$" + data[0]);
    $("#max").html("$" + data[1]);
  };
  const [cate, setCate] = useState("All");

  const handleChange = (event) => {
    $(".MuiSelect-nativeInput").val(event.target.value);
    searchData(
      $("#txtSearch").val(),
      Value.min,
      Value.max === 0 ? maxPrice : Value.max,
      $(".MuiSelect-nativeInput").val()
    );
  };

  return (
    <div>
      {" "}
      <Grid container spacing={3} xs={12}>
        <Grid
          item
          xs={12}
          lg={4}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Paper
            style={{
              marginBottom: "40px",
              paddingLeft: "10px",
              fontSize: "15px",
            }}
            className={classes.paper}
          >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <InputSearchByName
                name="txtSearch"
                label="What do you want to buy?"
                form={form}
              ></InputSearchByName>
            </form>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper className={classes.paper} style={{width:'100%'}}>
            <Select onChange={handleChange} defaultValue={"All"} id="cate" style={{width:'50%',marginBottom:'14px'}}>
              <MenuItem value={"All"} selected width={300}>
                All
              </MenuItem>
              <MenuItem value={1}>Tee</MenuItem>
              <MenuItem value={2}>Pants</MenuItem>
              <MenuItem value={3}>Accessories</MenuItem>
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper} style={{marginTop:'15px'}}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography gutterBottom align="left">
                Price:{" "}
                <span id="min" style={{ marginLeft: "50px" }}>
                  ${Value.min}
                </span>{" "}
                - <span id="max">${Value.max < 1 ? maxPrice : Value.max}</span>
              </Typography>
            </div>
            <PrettoSlider
              ThumbComponent={AirbnbThumbComponent}
              valueLabelDisplay="on"
              max={maxPrice}
              min={1}
              onChangeCommitted={getValue}
              onChange={changeTextValue}
              defaultValue={[Value.min, Value.max < 1 ? maxPrice : Value.max]}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
