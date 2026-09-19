package com.Ramflix.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public CloudinaryService(Cloudinary cloudinary){
        this.cloudinary = cloudinary;
    }

    // image upload
    public String uploadImage(MultipartFile file) throws IOException {

        Map uploadResult = cloudinary.uploader().upload(
                file.getBytes(),
                ObjectUtils.asMap(
                "resource_type", "image"
                )
        );

        return uploadResult.get("secure_url").toString();
    }

    // video upload

    public String uploadVideo(MultipartFile file) throws IOException {

        Map uploadResult = cloudinary.uploader().upload(
                file.getBytes(),
                ObjectUtils.asMap(
                        "resource_type", "video"
                )

        );

        return uploadResult.get("secure_url").toString();
    }


}
