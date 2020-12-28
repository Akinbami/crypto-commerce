import axios from "axios";
import { PRODUCT_LIST_REQUEST } from "../Constants/productConstants";

const listProducts = () => async (dispatch) =>{
    dispatch(PRODUCT_LIST_REQUEST);
    const { data } = await axios.get('/api/products');
            console.log("this is the data ", data)
}