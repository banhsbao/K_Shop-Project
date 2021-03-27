import axiosClient from "../axiosClient";
import { FAKE_PRODUCT_LIST } from "../fake-data";
import {FAKE_PRODUCT_SEARCH} from "../fake-dataSearch"
const  productApi={
    // getAll:()=>{
    //     const url='/products';
    //     return axiosClient.get(url);
    // }
    getAll:()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(FAKE_PRODUCT_LIST);
            },250);
        });
    },
    searchProduct:()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(FAKE_PRODUCT_SEARCH);
            },250);
        });
    },
    manageProduct:()=>{
        const url='/api/Product/manageproducts';
        return axiosClient.get(url, );
    },
    deleteProduct:(params)=>{
        const url="/api/Delete/delete-product";
      
        return  axiosClient.get(url,  params);
    },
    addProduct:(params)=>{
        const url="/api/uploadImageProduct";
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axiosClient.post(url,params,config);
    }
}   

export default productApi;