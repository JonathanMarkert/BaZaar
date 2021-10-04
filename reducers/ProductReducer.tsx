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
            return {
                ...state,                              
                products: [...state, action.payload]
        }}
        case "remove-listing": {
            return {
                ...state,
                products: state.filter((item) => item.id !== action.payload.id)
        }}
        case "edit-listing": {
            return {
                ...state,                              
                products: [...state, action.payload]
        }}        
        default: {
        //    exhaustiveCheck(action);
            return state;
            }
    }
}

export default productReducer;

// function exhaustiveCheck(param: never) {}