import React, { useContext, createContext, useReducer, FC } from "react";
import productReducer, { ProductAction } from "../reducers/ProductReducer";
import mockData from "../assets/DummyData/ProductData"

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
    category: string;
    userId: number;  
    city: string;
}

interface IContextValue {
    products: IProduct[];
    dispatch: React.Dispatch<ProductAction>
}

export const productData: IProduct [] = mockData;

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