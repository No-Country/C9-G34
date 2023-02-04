package com.C9group34.socialnetworkproject.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity(name = "publications")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "publication_id", nullable = false)
    private int id;


    @Column(name = "publication_title", nullable = false)
    private String title;

    @Column(name = "publication_description")
    private String description;

    @Column(name = "publication_url_imgs", nullable = false)
    private String urlImg;

    @Column(name = "publication_ratings", nullable = false, columnDefinition = "0")
    private Double rating;

    @Column(name = "publication_status", nullable = false)
    private String status;

}
