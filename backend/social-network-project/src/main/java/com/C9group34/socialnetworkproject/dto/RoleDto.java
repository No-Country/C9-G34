package com.C9group34.socialnetworkproject.dto;

import jakarta.persistence.Column;

public class RoleDto {

    private int id;

    private String description;

    public RoleDto(){

    }

    public RoleDto(int id, String description) {
        this.id = id;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
