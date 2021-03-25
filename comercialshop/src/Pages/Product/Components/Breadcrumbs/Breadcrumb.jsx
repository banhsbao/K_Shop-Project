import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import React from 'react';
import '../Breadcrumbs/Breadcrumb.css';
const Breadcrumb = props => {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{height:'100px',display:'flex',alignItems:'center',fontSize:'20px',fontWeight:'300'}}>
        <Link color="inherit" href="/home">
          Home
        </Link>
        <Link href="/products"
          color="textPrimary"
          aria-current="page"
          style={{fontWeight:'400'}}
        >
            Products
        </Link>
      </Breadcrumbs>
    )
}

Breadcrumb.propTypes = {

}

export default Breadcrumb
