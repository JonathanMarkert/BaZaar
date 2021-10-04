import React, { useContext, createContext, useReducer, FC } from "react";
import productReducer, { ProductAction } from "../reducers/ProductReducer";
import mockData from "../assets/DummyData/ProductData"


export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUri: string;
    category: string;
    userId: string;  
    city: string;
    phone: string;
    email: string;
    latitude: number,
    longitude: number,
}

interface IContextValue {
    products: IProduct[];
    dispatch: React.Dispatch<ProductAction>
}


const productData: IProduct [] = mockData;

const ProductContext = createContext<IContextValue>({} as IContextValue)

const ProductProvider: FC = ({children}) => {
    const [products, dispatch] = useReducer(productReducer, productData);

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