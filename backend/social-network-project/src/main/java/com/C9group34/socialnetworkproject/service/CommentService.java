package com.C9group34.socialnetworkproject.service;


import com.C9group34.socialnetworkproject.dto.CommentDto;
import com.C9group34.socialnetworkproject.dto.FavoritePublicationDto;
import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.exceptions.ExistingResourceException;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.models.Comment;
import com.C9group34.socialnetworkproject.models.FavoritePublication;
import com.C9group34.socialnetworkproject.models.Publication;
import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.repository.CommentRepository;
import com.C9group34.socialnetworkproject.repository.PublicationRepository;
import com.C9group34.socialnetworkproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    final UserRepository userRepository;
    @Autowired
    final PublicationRepository publicationRepository;
    @Autowired
    final CommentRepository commentRepository;

    public CommentService(UserRepository userRepository, PublicationRepository publicationRepository, CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.publicationRepository = publicationRepository;
        this.commentRepository = commentRepository;
    }

    public Comment create(Integer userId, Integer publicationId,CommentDto commentDto) throws ExistingResourceException, ResourceNotFoundException {
        Optional<User> u = userRepository.findById(userId);
        Optional<Publication> p = publicationRepository.findById(publicationId);
        System.out.println(p.get());
        if (u.isEmpty()) {
            throw new ResourceNotFoundException("usuario no encontrado");
        }
        Optional<Publication> publication = publicationRepository.findById(publicationId);
        if (p.isEmpty()) {
            throw new ResourceNotFoundException("publicacion no encontrada");
        }

        Comment comment = mapToEntity(commentDto);

        comment = commentRepository.save(comment);
        return comment;
    }



        /*Comment comment = new Comment().builder()
                .publication(p.get())
                .user(u.get()).build();
        comment = commentRepository.save(comment);
        return this.mapToDTO(comment);*/




    private CommentDto mapToDTO(Comment comment) {
        return new CommentDto().builder()
                .id(comment.getId())
                .content(comment.getContent()).build();
    }

    private Comment mapToEntity(CommentDto commentDto) {

        new Comment();
        return Comment.builder()
                .id(commentDto.getId())
                .content(commentDto.getContent())
                .build();
    }
}
