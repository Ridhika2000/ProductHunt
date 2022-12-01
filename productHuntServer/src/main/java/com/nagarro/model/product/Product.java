package com.nagarro.model.product;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pId;
	
	private String pName;
	
	@Column(length=1000)
	private String description;
	
	private String pImage;
	
	private boolean active = false;
	private String pCode;
	
	private int numberOfReviews = 0;
	
	private int rating =0;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Brand brand;
	
	
	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Review> reviews=new LinkedHashSet<>();

	
	public Product() {
		
	}
	
	public Product(String pName, String description, String pImage, boolean active, String pCode,
			int numberOfReviews, int rating, Brand brand, Set<Review> reviews) {
		this.pName = pName;
		this.description = description;
		this.pImage = pImage;
		this.active = active;
		this.pCode = pCode;
		this.numberOfReviews = numberOfReviews;
		this.rating = rating;
		this.brand = brand;
		this.reviews = reviews;
	}

	

	public Long getpId() {
		return pId;
	}

	public void setpId(Long pId) {
		this.pId = pId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getpImage() {
		return pImage;
	}

	public void setpImage(String pImage) {
		this.pImage = pImage;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public Set<Review> getReviews() {
		return reviews;
	}


	public void setReviews(Set<Review> reviews) {
		this.reviews = reviews;
	}


	public int getNumberOfReviews() {
		return numberOfReviews;
	}


	public void setNumberOfReviews(int numberOfReviews) {
		this.numberOfReviews = numberOfReviews;
	}


	public int getRating() {
		return rating;
	}


	public void setRating(int rating) {
		this.rating = rating;
	}


}
