import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
CopyRight.propTypes = {

};

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                KShop FPT_University
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default CopyRight;