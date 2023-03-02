package com.C9group34.socialnetworkproject.dto;


import lombok.*;


import java.io.File;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PublicationDto {

    private Integer id;
    private String title;
    private String description;
    private String img;
    private Double rating;
    private String userProfileImg;
    private List<CommentDto> comments;
    private Integer category;

}
