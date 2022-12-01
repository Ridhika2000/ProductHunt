package com.nagarro.controller;

import java.util.List;

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


import com.nagarro.model.product.Product;
import com.nagarro.model.product.Review;
import com.nagarro.service.ReviewService;

@RestController
@CrossOrigin("*")
@RequestMapping("/review")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	// add review
	@PostMapping("/")
	public ResponseEntity<Review> addReview(@RequestBody Review review) {
		Review review1 = this.reviewService.addReview(review);
		return ResponseEntity.ok(review1);
	}

	// get non-approved reviews
	@GetMapping("/non-approve")
	public List<Review> getNonApprovedReviews() {
		return this.reviewService.getNonApprovedReviews();
	}

	// delete review
	@DeleteMapping("/{reviewId}")
	public void deleteReview(@PathVariable("reviewId") Long reviewId) {
		this.reviewService.deleteReview(reviewId);
	}

	// approve review
	@PutMapping("/{reviewId}")
	public int approveReview(@PathVariable("reviewId") Long reviewId) {
		return this.reviewService.approvedReview(reviewId);
	}

	// get approve reviews of product
	@GetMapping("/product/approve/{pid}")
	public List<Review> getReviewsByProduct(@PathVariable("pid") Long pid) {
		Product product = new Product();
		product.setpId(pid);
		return this.reviewService.getReviewsByProduct(product);

	}

	// get count of reviews by product id
	@GetMapping("/count/{productId}")
	public int countReviews(@PathVariable("productId") Long productId) {
		return this.reviewService.countReviews(productId);
	}
	
	
	// get count of approved reviews
	@GetMapping("/")
	public int numberOfReviews() {
		return this.reviewService.numberOfReviews();
	}

	// get average rating of all reviews of particular product
	@GetMapping("/avg/{productId}")
	public int avgRating(@PathVariable("productId") Long productId) {
		return this.reviewService.avgRating(productId);
	}

	// get review
		@GetMapping("/{reviewId}")
		public Review getReview(@PathVariable("reviewId") Long reviewId) {
			return this.reviewService.getReview(reviewId);
		}

}
