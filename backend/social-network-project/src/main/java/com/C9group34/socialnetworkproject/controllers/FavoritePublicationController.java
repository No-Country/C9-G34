package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.dto.Favorite;
import com.C9group34.socialnetworkproject.dto.FavoritePublicationDto;
import com.C9group34.socialnetworkproject.exceptions.ExistingResourceException;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.service.FavoritePublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "users/{userId}/favoritePublications")
public class FavoritePublicationController {

    @Autowired
    private FavoritePublicationService favoritePService;



    @PostMapping
    public ResponseEntity create(@PathVariable Integer userId,
                                 @RequestBody FavoritePublicationDto favoritePublicationDto) throws ExistingResourceException, ResourceNotFoundException {

        favoritePService.create(favoritePublicationDto);
        return new ResponseEntity<>(favoritePublicationDto.getUserId(), HttpStatus.CREATED);
    }
}
