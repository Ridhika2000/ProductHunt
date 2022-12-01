package com.nagarro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.model.product.Brand;
import com.nagarro.service.BrandService;

@RestController
@RequestMapping("/brand")
@CrossOrigin("*")
public class BrandController {
	
	@Autowired
	private BrandService brandService;
	
	//add brand
	@PostMapping("/")
	public ResponseEntity<?> addBrand(@RequestBody Brand brand){
		Brand brand1 = this.brandService.addBrand(brand);
		return ResponseEntity.ok(brand1);
	}
	
	//get brand
	@GetMapping("/{brandId}")
	public Brand getBrand(@PathVariable("brandId") Long brandId) {
		return this.brandService.getBrand(brandId);
	}
	
	//get all brands
	@GetMapping("/")
	public ResponseEntity<?> getBrands(){
		return ResponseEntity.ok(this.brandService.getBrands());
	}
	
	//update brand
	@PutMapping("/")
	public Brand updateBrand(@RequestBody Brand brand) {
		return this.brandService.updateBrand(brand);
	}
	
	//delete brand
	@DeleteMapping("/{brandId}")
	public void deleteBrand(@PathVariable("brandId") Long brandId) {
		this.brandService.deleteBrand(brandId);
	}
	
	
	//count of all brands
	@GetMapping("/count")
	public long countBrands() {
		return this.brandService.countAllBrands();
	}
	
}
