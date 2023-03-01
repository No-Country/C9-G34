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


    @PostMapping("/new/{idPublication}")
    @Operation(
            summary = "Create new comment",
            description = "With endpoint can you created a new comment",
            responses = {
                    @ApiResponse(responseCode = "201",ref = "created"),
                    @ApiResponse(responseCode = "400",ref = "badRequest")
            }
    )
    public ResponseEntity register (@RequestHeader(value = "Authorization") String token,
                                    @PathVariable Integer publicationId
            , @io.swagger.v3.oas.annotations.parameters.RequestBody(
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
                comment = commentService.register(dto, publicationId);
            } catch (ExistingResourceException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity(HttpStatus.NOT_IMPLEMENTED);
            }

            return new ResponseEntity(comment, HttpStatus.CREATED);

        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);

    }

    @GetMapping("/all/{publicationId}")
    @Operation(
            summary = "Get all users",
            description = "This endpoint is for get all users",
            responses = {
                    @ApiResponse(responseCode = "200",ref = "getAll"),
                    @ApiResponse(responseCode = "400",ref = "badRequest")
            }
    )
    public ResponseEntity retrieve(@RequestHeader(value = "Authorization") String token,
                                   @PathVariable Integer publicationId){

        if (jwt.verifyToken(token)) return new ResponseEntity(commentService.retrieveAll(publicationId), HttpStatus.OK);
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<CommentDto> retrieveComment(@RequestHeader(value = "Authorization") String token,
                                                      @PathVariable Integer commentId){

        if (jwt.verifyToken(token)) {
            CommentDto commentDto = null;
            try {
                commentDto = commentService.retrieveById(Integer.valueOf(commentId));
            } catch (ResourceNotFoundException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity("el comentario no ha sido encontrado", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity(commentDto, HttpStatus.OK);
        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/{commentId}/{publicationId}")
    public ResponseEntity delete(@RequestHeader(value = "Authorization") String token,
                                 @PathVariable Integer publicationId,
                                 @PathVariable Integer commentId) {

        if (jwt.verifyToken(token)) {
            try {
                commentService.delete(Integer.valueOf(commentId), publicationId);
                return new ResponseEntity(HttpStatus.OK);
            } catch (ResourceNotFoundException e) {
                System.out.println(e.getMessage());
                return new ResponseEntity("accion no realizada", HttpStatus.NOT_IMPLEMENTED);
            }
        }
        return new ResponseEntity("Acceso denegado", HttpStatus.UNAUTHORIZED);

    }

    @PutMapping("/{commentId}")
    public ResponseEntity replace(@RequestHeader(value = "Authorization") String token,@io.swagger.v3.oas.annotations.parameters.RequestBody(

            content = @Content(
                    mediaType = "application/json",
                    examples = @ExampleObject(
                            value = "{\"content\" : \"String\",}"
                    )
            )
    ) @RequestBody CommentDto dto, @PathVariable Integer commentId) {

        try {
            if(jwt.verifyToken(token)){
                commentService.replace(Integer.valueOf(commentId), dto);
                return new ResponseEntity<>("datos actualizados", HttpStatus.OK);
            }
        } catch (ResourceNotFoundException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(HttpStatus.NOT_MODIFIED);
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }
}
