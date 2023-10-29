import React from 'react';
import { Select } from '@mantine/core';
import useProducts from './hooks/useProducts';

export default function ProductCategory() {
  const { fetchProductsByCategory, fetchProducts } = useProducts();

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

  const options = [
    { value: '', label: 'Semua Kategori' },
    ...categories.map((category) => ({
      value: category,
      label: category,
    })),
  ];

  const handleCategoryChange = (category) => {
    if (category === '') {
      fetchProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  return (
    <Select
      data={options}
      placeholder="Semua Kategori"
      onChange={(value) => handleCategoryChange(value)}
    />
  );
}
