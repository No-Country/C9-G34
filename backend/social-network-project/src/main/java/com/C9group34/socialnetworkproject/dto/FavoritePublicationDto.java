package com.C9group34.socialnetworkproject.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class FavoritePublicationDto {

    @JsonAlias("user")
    private Integer userId;

    @JsonAlias("Publications")
    private Integer publicationId;
}
