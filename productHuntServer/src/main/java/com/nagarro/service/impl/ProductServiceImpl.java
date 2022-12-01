package com.nagarro.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.model.product.Brand;
import com.nagarro.model.product.Product;
import com.nagarro.repo.ProductRepository;
import com.nagarro.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product addProduct(Product product) {
		
		return this.productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product) {
		
		return this.productRepository.save(product);
	}

	@Override
	public Set<Product> getProducts() {
		
		return new HashSet<>(this.productRepository.findAll());
	}

	@Override
	public Product getProduct(Long productId) {
		
		return this.productRepository.findById(productId).get();
	}

	@Override
	public void deleteProduct(Long productId) {
		
		this.productRepository.deleteById(productId);
	}

	@Override
	public List<Product> getProductsOfBrand(Brand brand) {
		
		return this.productRepository.findByBrand(brand);
	}

	
	
	public List<Product> searchProduct(String query){
		List<Product> list = this.productRepository.searchProducts(query);
		return list;
	}

	@Override
	public List<Product> getActiveProducts() {
		
		return this.productRepository.findByActive(true);
	}

	@Override
	public List<Product> getActiveProductsOfBrand(Brand b) {
		return this.productRepository.findByBrandAndActive(b, true);
	}

	@Override
	public long countAllProducts() {
		
		return this.productRepository.count();
	}
	
	
	
	
	

}
