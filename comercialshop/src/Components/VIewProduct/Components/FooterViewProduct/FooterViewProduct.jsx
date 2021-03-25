import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React,{useState} from "react";
import ColorButton from "../../../../Pages/Home/Components/ItemCaroursel/Components/ColorButton/ColorButton";
import '../FooterViewProduct/FooterViewProduct.css'
const FooterViewProduct = props => {
    const [counter, setcounter] = useState(1);
    const {Quanity,Price}=props;
    const handleIncrement = () => {
      setcounter(counter + 1);
    };
 
    const handleDecrement = () => {
      setcounter(counter - 1);
    };
    const displayIncrease = counter >= Quanity;
    const displayDecrease = counter > 1;
    return (
        <Typography component="div">
                <Grid container spacing={3} style={{ marginBottom: "20px" }}>
                  <Grid
                    item
                    xs
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="overline"
                      display="block"
                      gutterBottom
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                    >
                      <Box letterSpacing={4}>QUANITY</Box>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="div">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        {displayDecrease && (
                          <Button onClick={handleDecrement}>-</Button>
                        )}
                        {!displayDecrease && (
                          <Button disabled onClick={handleDecrement} style={{color:'grey !important'}}>-</Button>
                        )}
                        <Button disabled >
                            <Typography id="couterDisabled" variant="button" style={{fontWeight:'500'}}>{counter}</Typography>
                        </Button>
                        {displayIncrease && (
                          <Button disabled onClick={handleIncrement}>+</Button>
                        )}
                        {!displayIncrease && (
                          <Button onClick={handleIncrement}>+</Button>
                        )}
                      </ButtonGroup>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <Typography
                      variant="overline"
                      display="block"
                      gutterBottom
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      <Box letterSpacing={0}>${Math.round(Price * counter * 10) / 10}</Box>
                    </Typography>
                  </Grid>
                </Grid>
                <ColorButton label={"ADD TO BAG"}></ColorButton>
              </Typography>
    )
}

FooterViewProduct.propTypes = {

}

export default FooterViewProduct
