package com.Ramflix.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@Getter
@Setter
public class CreateEpisodeRequest {

    @Positive(message = "Episode Number must be positive")
    private int episodeNumber;

    @NotBlank(message = "title is required")
    private String title;

    @NotBlank(message = "description is required")
    private String description;

    @NotBlank(message = "duration is required")
    private String duration;

    private MultipartFile thumbnail;

    private MultipartFile video;


}
