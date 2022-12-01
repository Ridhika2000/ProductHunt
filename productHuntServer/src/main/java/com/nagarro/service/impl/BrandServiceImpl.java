package com.nagarro.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.model.product.Brand;
import com.nagarro.repo.BrandRepository;
import com.nagarro.service.BrandService;

@Service
public class BrandServiceImpl implements BrandService{

	@Autowired
	private BrandRepository brandRepository;
	
	@Override
	public Brand addBrand(Brand brand) {
		
		return this.brandRepository.save(brand);
	}

	@Override
	public Brand updateBrand(Brand brand) {
		
		return this.brandRepository.save(brand);
	}

	@Override
	public Set<Brand> getBrands() {
		
		return new LinkedHashSet<>(this.brandRepository.findAll());
	}

	@Override
	public Brand getBrand(Long brandId) {
		
		return this.brandRepository.findById(brandId).get();
	}

	@Override
	public void deleteBrand(Long brandId) {
		
		this.brandRepository.deleteById(brandId);
	}
	
	@Override
	public long countAllBrands() {
		return this.brandRepository.count();
	}
	
	

}
