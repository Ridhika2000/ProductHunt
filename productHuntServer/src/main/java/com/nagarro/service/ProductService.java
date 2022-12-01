package com.nagarro.service;

import java.util.List;
import java.util.Set;

import com.nagarro.model.product.Brand;
import com.nagarro.model.product.Product;

public interface ProductService {

	public Product addProduct(Product product);

	public Product updateProduct(Product product);

	public Set<Product> getProducts();

	public Product getProduct(Long productId);

	public void deleteProduct(Long productId);

	public List<Product> getProductsOfBrand(Brand brand);

	public List<Product> searchProduct(String query);

	public List<Product> getActiveProducts();

	public List<Product> getActiveProductsOfBrand(Brand b);
	
	public long countAllProducts();

}
