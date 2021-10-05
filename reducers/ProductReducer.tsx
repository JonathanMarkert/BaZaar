import { IProduct } from "../contexts/ProductContext";


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
            const id = (state.length+1).toString(); //uuid
            
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
