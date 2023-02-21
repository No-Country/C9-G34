package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path = "/users")

public class UserController {


    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity register(@RequestBody UserDto userDto) {

        userService.register(userDto);

        return new ResponseEntity(userDto.getId(), HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity retrieve() {

        return new ResponseEntity(userService.retrieveAll(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity retrieveByIdWithFavoritePublications(@PathVariable Integer userId) {

        UserDto userDTO = userService.retrieveByIdWithFavoritePublications(userId);

        return new ResponseEntity(userDTO, HttpStatus.OK);

    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable Integer userId) {
        userService.delete(userId);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{userId}")
    public ResponseEntity replace(@PathVariable Integer userId,
                                  @RequestBody UserDto userDTO) {

        userService.replace(userId, userDTO);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/{userId}")
    public ResponseEntity modify(@PathVariable Integer userId,
                                 @RequestBody Map<String, Object> fieldsToModify) {
        userService.modify(userId, fieldsToModify);

        return new ResponseEntity(HttpStatus.OK);
    }

}
