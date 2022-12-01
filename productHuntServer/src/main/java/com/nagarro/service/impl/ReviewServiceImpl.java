package com.nagarro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.model.product.Product;
import com.nagarro.model.product.Review;
import com.nagarro.repo.ProductRepository;
import com.nagarro.repo.ReviewRepository;
import com.nagarro.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService{

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Review addReview(Review review) {
		
		return this.reviewRepository.save(review);
	}
	
	@Override
	public void deleteReview(Long reviewId) {
		
		this.reviewRepository.deleteById(reviewId);
	}

	@Override
	public int numberOfReviews() {
		return this.reviewRepository.approvedReviewCount();
	}
	
	@Override
	public int countReviews(Long pId) {
		
		return this.reviewRepository.countReview(pId);
	}
	
	@Override
	public int avgRating(Long pId) {
		
		return this.reviewRepository.avgRating(pId);
	}
	
	@Override
	public List<Review> getReviewsByProduct(Product p) {
		
		return this.reviewRepository.findByProductAndIsApprove(p,true);
	}

	
	@Override
	public List<Review> getNonApprovedReviews() {
		
		return this.reviewRepository.findByIsApprove(false);
		
	}

	@Override
	public int approvedReview(Long reviewId) {
		Review review = this.reviewRepository.findById(reviewId).get();
		review.setApprove(true);
		this.reviewRepository.save(review);
		Product p = this.productRepository.getById(review.getProduct().getpId());
		p.setNumberOfReviews(this.reviewRepository.countReview(p.getpId()));
		p.setRating(this.reviewRepository.avgRating(p.getpId()));
		this.productRepository.save(p);
		return 1;
		
	}


	@Override
	public Review getReview(Long reviewId) {
		
		return this.reviewRepository.findById(reviewId).get();
	}
	
}
