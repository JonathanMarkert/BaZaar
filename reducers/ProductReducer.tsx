import { IProduct } from "../contexts/ProductContext";
import uuid from 'react-native-uuid';


interface createListing {
    type: "create-listing";
    payload: IProduct
}
interface removeListing {
    type: "remove-listing";
    payload:IProduct
}
interface editListing {
    type: "edit-listing";
    payload: IProduct
}

export type ProductAction = createListing | removeListing | editListing;

function productReducer (state: IProduct[], action: ProductAction) {
    switch (action.type) {
        case "create-listing":{
            const id = uuid.v4().toString();
            const newProduct = {  ...action.payload, id: id }
            const updatedProducts = [...state, newProduct];
            return updatedProducts
        }
        case "remove-listing": {
            const newProducts = [...state];
            const updatedProducts = newProducts.filter((item) => item.id !== action.payload.id);
            return updatedProducts
        }
        case "edit-listing": {
            //logik för att editera data, om vi så önskar
            return state
        }        
        default: 
            return state;
    }
}

export default productReducer;
