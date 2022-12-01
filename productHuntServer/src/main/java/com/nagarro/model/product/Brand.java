package com.nagarro.model.product;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "brand")
public class Brand {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bId;
	
	private String title;
	
	@OneToMany(mappedBy = "brand",cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<Product> products = new LinkedHashSet<>();

	

	public Brand() {
		
	}

	public Brand(String title) {
		this.title = title;
	}

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}
	
	public Long getBId() {
		return bId;
	}

	public void setBid(Long bId) {
		this.bId = bId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	
	
}
