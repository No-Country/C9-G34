package com.C9group34.socialnetworkproject.models;

import com.C9group34.socialnetworkproject.dto.CommentDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name = "publications")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "url_imgs", nullable = false)
    private String urlImg;

    @Column(name = "ratings", nullable = false, columnDefinition = "0")
    private Double rating;

    @Column(name = "status", nullable = false)
    private String status;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "publication_id")
    private List<CommentDto> comments;

}
