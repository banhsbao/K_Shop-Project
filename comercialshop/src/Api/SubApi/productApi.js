import axios from "axios";
import axiosClient from "../axiosClient";
import { FAKE_PRODUCT_LIST } from "../fake-data";
import {FAKE_PRODUCT_SEARCH} from "../fake-dataSearch"
const  productApi={
    getAll:()=>{
        const url='/api/Product/getAllProduct';
        return axiosClient.get(url);
    },
    // getAll:()=>{
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve(FAKE_PRODUCT_LIST);
    //         },250);
    //     });
    // },
    searchProduct:()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(FAKE_PRODUCT_SEARCH);
            },250);
        });
    },
    manageProduct:()=>{
        const url='/api/Product/manageproducts';
        return axiosClient.get(url);
    }
}

export default productApi;