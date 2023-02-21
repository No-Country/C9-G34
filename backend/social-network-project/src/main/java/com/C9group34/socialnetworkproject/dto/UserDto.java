package com.C9group34.socialnetworkproject.dto;

import com.C9group34.socialnetworkproject.models.Publication;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class UserDto {
    private Integer id;

    private String name;

    private String surname;

    private String email;

    private String phone;

    private String password;

    private Double ratings;

    private List<Publication> publications;


    public UserDto(){

    }

    public UserDto(Integer id, String name, String surname, String email, String phone, String password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
    public UserDto(Integer id, String name, String surname, String email, String phone,
                   String password, Double ratings, List<Publication> publications) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.ratings = ratings;
        this.publications = publications;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getRatings() {
        return ratings;
    }

    public void setRatings(Double ratings) {
        this.ratings = ratings;
    }


}
