import {PRODUCT_LIST_REQUEIST, PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constant/productConstants";

import Axios from 'axios'

const listProducts = () => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_LIST_REQUEIST});
        const {data} = await Axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.massage});

    }

}

const detailsProduct = (productId) => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
        const {data} = await Axios.get("/api/products/"+productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS,payload: data});
    }
    catch (error){

        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.massage})

    }
}

export {listProducts, detailsProduct};

/*const{ PRODUCT_LIST_REQUEIST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constant/productConstants"); */
/*const { default: Axios } = require("axios");*/