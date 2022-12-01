package com.nagarro.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.model.product.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long>{
	public long count();
}
