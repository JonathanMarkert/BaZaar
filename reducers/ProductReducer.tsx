import { IProduct } from "../contexts/ProductContext";


interface createListing {
    type: "create-listing";
    payload: IProduct
}
interface removeListing {
    type: "remove-listing";
    payload: IProduct
}
interface editListing {
    type: "edit-listing";
    payload: IProduct
}

export type ProductAction = createListing | removeListing | editListing;

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
        case "edit-listing": {
            //ändra kopia av state och skicka tillbaka
            return state;  //new state
        }

        default: {
        //    exhaustiveCheck(action);
            return state;
            }
    }
    return;
}

export default productReducer;

// function exhaustiveCheck(param: never) {}