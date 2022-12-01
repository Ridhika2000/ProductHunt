package com.nagarro.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.helper.UserFoundException;
import com.nagarro.model.User;
import com.nagarro.model.UserRole;
import com.nagarro.repo.RoleRepository;
import com.nagarro.repo.UserRepository;
import com.nagarro.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	//creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findByUsername(user.getUsername());
		
		if(local!=null) {
			System.out.println("user is already there!!");

			throw new UserFoundException();
		}else {
			//user create
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	//getting user by username
	@Override
	public User getUser(String username) {
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteuser(Long userId) {
		this.userRepository.deleteById(userId);
		
	}
	
	@Override
	public long countAllUsers() {
		return this.userRepository.count();
	}

	
	
}
