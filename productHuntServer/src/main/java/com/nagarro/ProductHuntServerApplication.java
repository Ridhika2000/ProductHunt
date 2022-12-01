package com.nagarro;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.nagarro.model.Role;
import com.nagarro.model.User;
import com.nagarro.model.UserRole;
import com.nagarro.service.UserService;

@SpringBootApplication
public class ProductHuntServerApplication implements CommandLineRunner{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(ProductHuntServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//	User user = new User();
//		
//		user.setFirstName("Ridhika");
//		user.setLastName("Garg");
//		user.setUsername("ridhikagarg8");
//		user.setPassword(this.bCryptPasswordEncoder.encode("qwer"));
//		user.setEmail("ridhikagarg8@gmail.com");
//		
//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		Set<UserRole> userRoleSet = new HashSet<>();
//		
//		UserRole userRole = new UserRole();
//		
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//		
//		User user1 = this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());
//		
	}

}
