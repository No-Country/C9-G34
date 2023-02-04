package com.C9group34.socialnetworkproject.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name = "users")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private int id;

    @Column(name = "user_name", nullable = false)
    private String name;

    @Column(name = "user_surname", nullable = false)
    private String surname;

    @Column(name = "user_email", nullable = false)
    private String email;

    @Column(name = "user_phone")
    private String phone;

    @Column(name = "user_password", nullable = false)
    private String password;

    @Column(name = "user_ratings", nullable = false)
    private Double ratings;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<Publication> publications;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<Role> roles;

}
