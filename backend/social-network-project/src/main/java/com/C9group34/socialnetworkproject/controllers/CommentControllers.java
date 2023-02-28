package com.C9group34.socialnetworkproject.controllers;

import com.C9group34.socialnetworkproject.dto.CommentDto;
import com.C9group34.socialnetworkproject.dto.FavoritePublicationDto;
import com.C9group34.socialnetworkproject.dto.PublicationDto;
import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.exceptions.ExistingResourceException;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.models.Comment;
import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.service.CommentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path ="/comments")
public class CommentControllers {

    @Autowired
    private CommentService commentService;

    @PostMapping("/{userId}/publicationId")
    @Transactional
    public ResponseEntity create(@PathVariable Integer userId,
                                 @PathVariable Integer publicationId,
                                 @RequestBody CommentDto commentDto ) {

        Comment comment = null;
        try {
            comment = commentService.create( userId, publicationId , commentDto);
        } catch (ExistingResourceException e) {
            System.out.println(e.getMessage());
        } catch (ResourceNotFoundException e) {
            System.out.println(e.getMessage());
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
