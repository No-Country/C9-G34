package com.C9group34.socialnetworkproject.dto;

public class MessageDto {

    private int id;
    private String content;

    public MessageDto(String id, int content, int conversationCreatedId) {
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
