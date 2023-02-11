package com.C9group34.socialnetworkproject.service;

import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private final UserRepository uRepository;

    public UserService(UserRepository uRepository) {
        this.uRepository = uRepository;
    }

    public User createUser(User u) {
        return uRepository.save(u);
    }

    public User getUser(int id) {
        return uRepository.findById(id).orElse(null);
    }
}
