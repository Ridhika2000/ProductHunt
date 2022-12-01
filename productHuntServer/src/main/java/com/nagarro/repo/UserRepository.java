package com.nagarro.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	
	public User findByUsername(String username);
	public long count();
}
