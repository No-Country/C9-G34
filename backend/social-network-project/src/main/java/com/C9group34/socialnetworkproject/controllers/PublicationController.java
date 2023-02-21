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
import java.util.Map;

@RestController
@RequestMapping(path = "/users/{userId}/publications")

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

    @GetMapping
    public ResponseEntity retrieve(@PathVariable Integer userId){

        return new ResponseEntity(publicationService.retrieveAll(userId), HttpStatus.OK);
    }


    @GetMapping("/{publicationId}")
    public ResponseEntity retrieveById(@PathVariable Integer publicationId){

        PublicationDto publicationDto = publicationService.retrieveById(publicationId);

        return new ResponseEntity(publicationDto, HttpStatus.OK);

    }


    @DeleteMapping("/{publicationId}")
    public ResponseEntity delete(@PathVariable Integer publicationId){
        publicationService.delete(publicationId);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{publicationId}")
    public ResponseEntity replace(@PathVariable Integer userId,
                                  @PathVariable Integer publicationId,
                                  @RequestBody PublicationDto publicationDTO) {
        publicationService.replace(userId, publicationId, publicationDTO);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/{publicationId}")
    public ResponseEntity modify(@PathVariable Integer userId,
                                 @PathVariable Integer publicationId,
                                 @RequestBody Map<String, Object> fieldsToModify) {

        publicationService.modify(userId,publicationId, fieldsToModify);

        return new ResponseEntity(HttpStatus.OK);
    }


}