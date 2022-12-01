package com.nagarro.controller;

import java.util.List;
import java.util.Set;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.model.product.Brand;
import com.nagarro.model.product.Product;
import com.nagarro.service.BrandService;
import com.nagarro.service.ProductService;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productService;

	// add product
	@PostMapping("/")
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
		Product product1 = this.productService.addProduct(product);
		return ResponseEntity.ok(product1);
	}

	// get product
	@GetMapping("/{productId}")
	public Product getProduct(@PathVariable("productId") Long productId) {
		return this.productService.getProduct(productId);
	}

	// get all products
	@GetMapping("/")
	public ResponseEntity<?> getProducts() {
		return ResponseEntity.ok(this.productService.getProducts());
	}

	// get all products by brand
	@GetMapping("/brand/{bid}")
	public ResponseEntity<?> getProductsByBrand(@PathVariable("bid") Long bid) {
		Brand brand = new Brand();
		brand.setBid(bid);
		
		List<Product> productsOfBrand = this.productService.getProductsOfBrand(brand);
		return ResponseEntity.ok(productsOfBrand);
	}

	// update product
	@PutMapping("/")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
		return ResponseEntity.ok(this.productService.updateProduct(product));
	}

	// delete product
	@DeleteMapping("/{pid}")
	public void deleteProduct(@PathVariable("pid") Long pid) {
		this.productService.deleteProduct(pid);
	}
	
	//search product
	@GetMapping("/search")
	public ResponseEntity<List<Product>> searchProduct(@RequestParam("query")String query){
		System.out.println("hey asdfghjcvb");
		return ResponseEntity.ok(this.productService.searchProduct(query));
	}
	
	//get active products
	@GetMapping("/active")
	public List<Product> getActiveProducts(){
		return this.productService.getActiveProducts();
	}
	
	//get active products of brand
	@GetMapping("/brand/active/{bid}")
	public List<Product> getActiveProducts(@PathVariable("bid") Long bid){
		Brand brand = new Brand();
		brand.setBid(bid);
		return this.productService.getActiveProductsOfBrand(brand);
	}
	
	//count of all products
	@GetMapping("/count")
	public long countProducts() {
		return this.productService.countAllProducts();
	}
	
}
