package com.nagarro.repo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.model.product.Brand;
import com.nagarro.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	public List<Product> findByBrand(Brand brand);

	@Query("SELECT p FROM Product p where "+"p.pName Like CONCAT('%',:query,'%')"+
	 "Or p.pCode Like CONCAT('%',:query,'%')")
	public List<Product> searchProducts(String query);
	
	
	public List<Product> findByActive(Boolean b);
	public List<Product> findByBrandAndActive(Brand brand,Boolean b);
	
	public long count();
}
