package com.C9group34.socialnetworkproject.dto;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class PublicationDto {

    private Integer id;

    private String title;

    private String description;

    private String urlImg;

    private Double rating;

    private String status;

    private List<CommentDto> comments;

    public PublicationDto() {

    }

    public PublicationDto(Integer id, String title, String description, String urlImg, Double rating, String status, List<CommentDto> comments) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlImg = urlImg;
        this.rating = rating;
        this.status = status;
        this.comments = comments;
    }
}


