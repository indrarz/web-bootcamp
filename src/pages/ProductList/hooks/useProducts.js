import axios from 'axios';
import { useEffect } from 'react';
import { useProductContext } from '..';
const network = axios.create({
    baseURL: 'https://dummyjson.com/',
});
export default function useProducts() {
    const { setProducts, products } = useProductContext();
    const fetchProducts = async () => {
        try {
            const response = await network.get(`/products`);
            setProducts(response?.data?.products);
        } catch (error) {
            console.log('error > ', error);
        }
    };
    const fetchCategories = async () => {
        try {
            const response = await network.get('/products/categories');
            return response;
        } catch (error) {
            console.log('error > ', error);
        }
    };
    const fetchProductsByCategory = async (category) => {
        try {
            const response = await network.get(`/products/category/${category}`);
            setProducts(response?.data?.products);
        } catch (error) {
            console.log('error > ', error);
        }
    };
    const search = async (keyword) => {
        try {
            const response = await network.get(`/products/search`, {
                params: {
                    q: keyword,
                },
            });
            setProducts(response?.data?.products);
        } catch (error) {
            console.log('error > ', error);
        }
    };
    const detail = async () => {};
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);
    return {
        products,
        fetchProducts,
        search,
        fetchProductsByCategory,
    };
}