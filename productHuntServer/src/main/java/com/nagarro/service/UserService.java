package com.nagarro.service;

import java.util.List;
import java.util.Set;

import com.nagarro.model.User;
import com.nagarro.model.UserRole;
import com.nagarro.model.product.Product;

public interface UserService {

	//creating user
	public User createUser(User user,Set<UserRole> userRoles) throws Exception; 
	
	//get user by username
	public User getUser(String username);
	
	//delete user by id
	public void deleteuser(Long userId);
	
	public long countAllUsers();
}
