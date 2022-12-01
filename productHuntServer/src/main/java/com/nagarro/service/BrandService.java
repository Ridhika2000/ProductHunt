package com.nagarro.service;

import java.util.Set;

import com.nagarro.model.product.Brand;

public interface BrandService {
	
	public Brand addBrand(Brand brand);
	public Brand updateBrand(Brand brand);
	public Set<Brand> getBrands();
	public Brand getBrand(Long brandId);
	public void deleteBrand(Long brandId);
	public long countAllBrands();
}
