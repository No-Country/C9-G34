package com.C9group34.socialnetworkproject.util;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.StorageClient;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.UUID;
import java.util.HashMap;
import java.util.Map;

@Component
public class FirebaseStorageUtil {
    /*
    private Storage storage;

    @EventListener
    public void init(ApplicationReadyEvent event) {
        // Load Firebase options from configuration file
        InputStream serviceAccount = getClass().getResourceAsStream("/firebase-config.json");
        FirebaseOptions options = null;
        try {
            options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        // Initialize Firebase app
        FirebaseApp.initializeApp(options);

        // Initialize Firebase Storage
        Storage storage = StorageClient.getInstance().bucket().getStorage();
        // ...
    }

    public String saveTest(MultipartFile file) throws IOException{
        String imageName = generateFileName(file.getOriginalFilename());
        Map<String, String> map = new HashMap<>();
        map.put("353123629187", imageName);
        BlobId blobId = BlobId.of(
                "project-353123629187", imageName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                .setMetadata(map)
                .setContentType(file.getContentType())
                .build();
        storage.create(blobInfo, file.getInputStream());
        return imageName;
    }

    public void uploadFile(String base64JsonData, String fileName){
        byte[] jsonData = Base64.getDecoder().decode(base64JsonData);
        Storage storage = StorageClient.getInstance().bucket().getStorage();
        BlobId blobId = BlobId.of("project-353123629187", fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("application/json").build();
        ByteArrayInputStream inputStream = new ByteArrayInputStream(jsonData);
        Blob blob = storage.create(blobInfo, inputStream);
    }

    private String generateFileName(String originalFileName) {
        return UUID.randomUUID().toString() + "." + getExtension(originalFileName);
    }

    private String getExtension(String originalFileName) {
        return StringUtils.getFilenameExtension(originalFileName);
    }*/
}
