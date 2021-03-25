import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import React from 'react';
const ColorButton = props => {
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(grey[900]),
            backgroundColor: grey[900],
            "&:hover": {
                backgroundColor: grey[800]
            },
            borderRadius: '0px'

        }
    }))(Button);
    const {label}=props;
    const style={
        button:{fontWeight: '300'}
    }
    return (
        <ColorButton variant="contained" color="primary" >
            <Box letterSpacing={3} style={style.button}>
               {label}
                    </Box>
        </ColorButton>
    )
}

ColorButton.propTypes = {

}

export default ColorButton
