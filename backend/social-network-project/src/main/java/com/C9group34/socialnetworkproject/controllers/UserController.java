package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class UserController {
    public ResponseEntity<User> getUser(){
        return null;
    }
    
}
