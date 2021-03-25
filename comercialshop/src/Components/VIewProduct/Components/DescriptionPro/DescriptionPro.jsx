import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Divider } from "antd";
import React from "react";

const DescriptionPro = props => {
    
    return (
        <div>
             <Divider
                orientation="center"
                plain
                style={{ marginBottom: "30px" }}
              >
                <Box
                  style={{ fontSize: "15px", fontWeight: "400" }}
                  letterSpacing={1}
                >
                  {" "}
                  DESCRIPTION{" "}
                </Box>
              </Divider>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Divider
                orientation="center"
                plain
                style={{ marginBottom: "20px" }}
              ></Divider>
        </div>
    )
}

DescriptionPro.propTypes = {

}

export default DescriptionPro
