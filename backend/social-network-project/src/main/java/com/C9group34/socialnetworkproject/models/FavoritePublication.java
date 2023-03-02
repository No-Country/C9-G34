package com.C9group34.socialnetworkproject.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "favorite_publications")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class FavoritePublication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name = "publication_id")
    private Publication publication;

    public User getUser() {
        return user;
    }
    public void setUser(User u) {
        this.user = u;
    }
    public Publication getPublication() {
        return publication;
    }

    public void setPublication(Publication p) {
        this.publication = p;

    }

}
