package com.C9group34.socialnetworkproject.dto;

import jakarta.persistence.Column;

public class MessageDto {

    private int id;
    private String content;

    public MessageDto(){

    }

    public MessageDto(int id, String content) {
        this.id = id;
        this.content = content;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
