package com.nagarro.helper;

public class UserNotFoundException extends Exception{

	public UserNotFoundException() {
		super("User with this Username is not found in DB !! ");
		
	}

	public UserNotFoundException(String message) {
		super(message);
		
	}
	
	
}
