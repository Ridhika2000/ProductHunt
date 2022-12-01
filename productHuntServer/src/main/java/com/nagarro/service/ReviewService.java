package com.nagarro.service;

import java.util.List;

import com.nagarro.model.product.Product;
import com.nagarro.model.product.Review;

public interface ReviewService {

	public List<Review> getReviewsByProduct(Product p);
	
	public List<Review> getNonApprovedReviews();
	
	public int avgRating(Long pId);
	
	public int countReviews(Long pId);
	
	public Review addReview(Review review);
	
	public void deleteReview(Long reviewId);
	
	public int numberOfReviews();
	
	public int approvedReview(Long reviewId);
			
	public Review getReview(Long reviewId);

}
