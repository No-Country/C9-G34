package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.dto.CommentDto;
import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.exceptions.ExistingResourceException;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.models.Comment;
import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.service.CommentService;
import com.C9group34.socialnetworkproject.service.UserService;
import com.C9group34.socialnetworkproject.util.JWTutil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    private JWTutil jwt;


    @PostMapping("/new")
    @Operation(
            summary = "Create new comment",
            description = "With endpoint can you created a new comment",
            responses = {
                    @ApiResponse(responseCode = "201",ref = "created"),
                    @ApiResponse(responseCode = "400",ref = "badRequest")
            }
    )
    public ResponseEntity register (@RequestHeader(value = "Authorization") String token, @io.swagger.v3.oas.annotations.parameters.RequestBody(
            content = @Content(
                    mediaType = "application/json",
                    examples = @ExampleObject(
                            value = "{\"content\" : \"hello world\" }"
                    )
            )
    ) @RequestBody CommentDto dto){

        if (jwt.verifyToken(token)){
            Comment comment = null;
            try {
                comment = commentService.register(dto);
            } catch (ExistingResourceException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity(HttpStatus.NOT_IMPLEMENTED);
            }

            return new ResponseEntity(comment, HttpStatus.CREATED);

        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);

    }

    @GetMapping("/all")
    @Operation(
            summary = "Get all users",
            description = "This endpoint is for get all users",
            responses = {
                    @ApiResponse(responseCode = "200",ref = "getAll"),
                    @ApiResponse(responseCode = "400",ref = "badRequest")
            }
    )
    public ResponseEntity retrieve(@RequestHeader(value = "Authorization") String token{

        if (jwt.verifyToken(token)) return new ResponseEntity(commentService.retrieveAll(), HttpStatus.OK);
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/get")
    public ResponseEntity<UserDto> retrieveUser(@RequestHeader(value = "Authorization") String token){

        String id = jwt.getKey(token);
        if (jwt.verifyToken(token)) {
            CommentDto commentDto = null;
            try {
                commentDto = commentService.retrieveById(Integer.valueOf(id));
            } catch (ResourceNotFoundException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity("el comentario no ha sido encontrado", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity(commentDto, HttpStatus.OK);
        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/delete")
    public ResponseEntity delete(@RequestHeader(value = "Authorization") String token) {

        String id = jwt.getKey(token);
        if (jwt.verifyToken(token)) {
            try {
                userService.delete(Integer.valueOf(id));
                return new ResponseEntity(HttpStatus.OK);
            } catch (ResourceNotFoundException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity("accion no realizada", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);

    }

    @PutMapping("/edit")
    public ResponseEntity replace(@RequestHeader(value = "Authorization") String token,@io.swagger.v3.oas.annotations.parameters.RequestBody(

            content = @Content(
                    mediaType = "application/json",
                    examples = @ExampleObject(
                            value = "{\"name\" : \"String\", \"surname\" : \"String\", \"email\" : \"String\", \"password\" : \"String\", \"phone\" : \"String\", \"ratings\" : 0.0 }"
                    )
            )
    ) @RequestBody UserDto user) {
        String id = jwt.getKey(token);
        try {
            if(jwt.verifyToken(token)){
                userService.replace(Integer.valueOf(id), user);
                return new ResponseEntity<>("datos actualizados", HttpStatus.OK);
            }
        } catch (ResourceNotFoundException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(HttpStatus.NOT_MODIFIED);
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }
}
