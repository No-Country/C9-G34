package com.C9group34.socialnetworkproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class firebaseController {

    @Autowired
    private FirebaseStorageUtil firebaseFileService;

    @PostMapping("/api/v1/test")
    public ResponseEntity create(@RequestParam(name = "file") MultipartFile file) {
        try {
            //String fileName = firebaseFileService.saveTest(file);
            // do whatever you want with that
        } catch (Exception e) {
            //  throw internal error;
        }
        return ResponseEntity.ok().build();
    }
}
