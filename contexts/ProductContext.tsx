import React, { useContext, createContext, FC, useReducer } from "react";
import productReducer, { ProductAction } from "../reducers/ProductReducer";

export interface IProduct {
    name: string;
    price: number;
    location: string;
}

interface IContextValue {
    listing: IProduct;
    dispatch: React.Dispatch<ProductAction>
}

const ProductContext = createContext<IContextValue>({} as any)

const ProductProvider: FC = ({children}) => {
    const [listing, dispatch] = useReducer(productReducer, {});

    return (
        <ProductContext.Provider
        value= {{
            listing,
            dispatch
        }}
        >
        {children}
        </ProductContext.Provider>
    )
    
}

export const useProductContext = () => useContext(ProductContext);
export default ProductProvider;