package com.C9group34.socialnetworkproject.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PublicationDto {

    private int id;

    private String title;

    private String description;

    private String urlImg;

    private Double rating;

    private String status;

    private List<CommentDto> comments;

}
