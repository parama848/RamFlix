package com.Ramflix.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EpisodeResponse {

    private int id;

    private int episodeNumber;

    private String title;

    private String description;

    private String duration;

    private String thumbnail;

    private String video;
}