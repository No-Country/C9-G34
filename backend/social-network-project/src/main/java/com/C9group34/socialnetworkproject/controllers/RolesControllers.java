package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.models.Role;
import com.C9group34.socialnetworkproject.service.RoleService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/role")
public class RolesControllers {

    @Autowired
    RoleService roleService;

    @PostMapping("/new")
    @Operation(

    )
    public ResponseEntity createRole(@RequestBody Role r){
        roleService.createRole(r);
        return new ResponseEntity(r, HttpStatus.CREATED);
    }
}
