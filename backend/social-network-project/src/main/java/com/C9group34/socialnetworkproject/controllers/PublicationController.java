package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.dto.PublicationDto;
import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.service.PublicationService;
import com.C9group34.socialnetworkproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/users/{userid}/publications")

public class PublicationController {


    private final PublicationService publicationService;
    private final UserService userService;

    public PublicationController(PublicationService publicationService, UserService userService) {
        this.publicationService = publicationService;
        this.userService = userService;
    }


    @PostMapping
    public ResponseEntity create(@PathVariable Integer userId,
                                 @RequestBody PublicationDto publicationDTO) {

       publicationService.create(publicationDTO , userId);


        return new ResponseEntity<>(publicationDTO.getId(), HttpStatus.CREATED);
    }


}