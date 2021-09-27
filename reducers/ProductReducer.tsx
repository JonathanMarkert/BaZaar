import { IProduct } from "../contexts/ProductContext";


interface createListing {
    type: "create-listing";
    payload: IProduct
}
interface removeListing {
    type: "remove-listing"
    payload: IProduct
}

export type ProductAction = createListing | removeListing;

function productReducer (state: IProduct[], action: ProductAction) {
    switch (action.type) {
        case "create-listing":{
         //logik för att skapa nytt objekt
            return state;
        }
        case "remove-listing": {
            //ta bort objekt i fråga
            return state;
        }
//cases
        // default: {
        //     exhaustiveCheck(action);
        //     return state;
        //     }
    }
    return;
}

export default productReducer;

//function exhaustiveCheck(param: never) {}