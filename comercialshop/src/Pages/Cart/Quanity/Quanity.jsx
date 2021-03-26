import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import React, { useState,useEffect } from "react";
import PropTypes from 'prop-types';
const Quanity = (props) => {
  const { Quanity, MaxQuanity,index,setQuanity } = props;
  const [counter, setcounter] = useState(Quanity);
  const handleIncrement = () => {
    setcounter(parseInt(counter)+new Number(1));
    setQuanity(parseInt(counter)+new Number(1),index);
  };
  const handleDecrement = () => {
    setcounter(parseInt(counter)-new Number(1));
    setQuanity(parseInt(counter)-new Number(1),index)
  };
  
  const displayIncrease = parseInt(counter)>=parseInt(MaxQuanity)?false:true;
  const displayDecrease = counter > 1;
  return (
    <div>
      <Typography component="div">
        <ButtonGroup size="small" aria-label="small outlined button group">
          {displayDecrease && <Button onClick={handleDecrement}>-</Button>}
          {!displayDecrease && 
            <Button
              disabled
              onClick={handleDecrement}
              style={{ color: "grey !important" }}
            >
              -
            </Button>
          }
          <Button disabled>
            <Typography
              id="couterDisabled"
              variant="button"
              style={{ fontWeight: "500" }}
            >
              {counter}
            </Typography>
          </Button>
          {!displayIncrease && 
            <Button disabled >
              +
            </Button>
          }
          {displayIncrease && <Button onClick={handleIncrement}>+</Button>}
        </ButtonGroup>
      </Typography>
    </div>
  );
};

Quanity.propTypes = {
    counter:PropTypes.string,
    MaxQuanity:PropTypes.string,
};

export default Quanity;
