package com.C9group34.socialnetworkproject.dto;

import com.C9group34.socialnetworkproject.models.Publication;
import com.C9group34.socialnetworkproject.models.User;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class FavoritePublicationDto {

    private int id;
    private User user;
    private Publication publication;

}
