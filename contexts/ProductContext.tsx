import React, { useContext, createContext, useReducer, FC } from "react";
import productReducer, { ProductAction } from "../reducers/ProductReducer";

export interface IProduct {
    name: string;
    price: number;
    location: string;
    userId: number;
}

interface IContextValue {
    products: IProduct[];
    dispatch: React.Dispatch<ProductAction>
}

const ProductContext = createContext<IContextValue>({} as any)

const ProductProvider: FC = ({children}) => {
    const [products, dispatch] = useReducer(productReducer, []);

    return (
        <ProductContext.Provider
        value= {{
            products,
            dispatch
        }}
        >
        {children}
        </ProductContext.Provider>
    )
    
}

export const useProductContext = () => useContext(ProductContext);
export default ProductProvider;