package com.nagarro.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.model.product.Product;
import com.nagarro.model.product.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	public List<Review> findByIsApprove(Boolean b);
	
	public List<Review> findByProductAndIsApprove(Product product,Boolean b);
	
	@Query("select avg(r.rating) from Review r where r.isApprove=true and r.product.pId=?1")
	int avgRating(Long pId);
//
	@Query("select count(r.reviewId) from Review r where r.isApprove=true and r.product.pId=?1")
	int countReview(Long pId);
	
	@Query("select count(r.reviewId) from Review r where r.isApprove=true")
	int approvedReviewCount();


}
