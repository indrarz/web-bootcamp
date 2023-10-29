import { createContext, useContext, useState } from 'react';
import Component from './ProductList';
const ProductContext = createContext({
    search: '',
    products: [],
    categories: [],
    setSearch() {},
    setProducts() {},
    setCategories() {},
});
export const useProductContext = () => useContext(ProductContext);
function ProductProvider({ children }) {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    return (
        <ProductContext.Provider
            value={{
                search,
                products,
                categories,
                setProducts,
                setSearch,
                setCategories,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export default function ProductList() {
    return (
        <ProductProvider>
            <Component />
        </ProductProvider>
    );
}