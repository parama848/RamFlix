package com.Ramflix.service;

import com.Ramflix.dto.ApiResponse;
import com.Ramflix.dto.CreateEpisodeRequest;
import com.Ramflix.dto.EpisodeResponse;
import com.Ramflix.dto.UpdateEpisodeRequest;
import com.Ramflix.entity.Episode;
import com.Ramflix.exception.EpisodeNotFoundException;
import com.Ramflix.repository.EpisodeRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class EpisodeService {

    private final EpisodeRepository episodeRepository;
    private final CloudinaryService cloudinaryService;

    public EpisodeService(
            EpisodeRepository episodeRepository,
            CloudinaryService cloudinaryService
    ) {
        this.episodeRepository = episodeRepository;
        this.cloudinaryService = cloudinaryService;
    }


    // =========================
    // CREATE
    // =========================

    public EpisodeResponse createEpisode(CreateEpisodeRequest request)
            throws IOException {

        // Upload thumbnail to Cloudinary
        String thumbnailUrl =
                cloudinaryService.uploadImage(
                        request.getThumbnail()
                );

        // Upload video to Cloudinary
        String videoUrl =
                cloudinaryService.uploadVideo(
                        request.getVideo()
                );

        // Create Episode entity
        Episode episode = new Episode();

        episode.setEpisodeNumber(
                request.getEpisodeNumber()
        );

        episode.setTitle(
                request.getTitle()
        );

        episode.setDescription(
                request.getDescription()
        );

        episode.setDuration(
                request.getDuration()
        );

        episode.setThumbnail(
                thumbnailUrl
        );

        episode.setVideo(
                videoUrl
        );

        // Save into database
        Episode savedEpisode =
                episodeRepository.save(episode);

        // Entity → Response DTO
        return toResponse(savedEpisode);
    }


    // =========================
    // GET ALL
    // =========================

    public List<EpisodeResponse> getAllEpisodes() {

        return episodeRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }


    // =========================
    // GET BY ID
    // =========================

    public EpisodeResponse getEpisodeById(Integer id) {

        Episode episode =
                episodeRepository.findById(id)
                        .orElseThrow(() ->
                                new EpisodeNotFoundException(id)
                        );

        return toResponse(episode);
    }


    // =========================
    // UPDATE
    // =========================

    public EpisodeResponse updateEpisode(
            Integer id,
            UpdateEpisodeRequest request
    ) throws IOException {

        Episode existingEpisode =
                episodeRepository.findById(id)
                        .orElseThrow(() ->
                                new EpisodeNotFoundException(id)
                        );

        existingEpisode.setEpisodeNumber(
                request.getEpisodeNumber()
        );

        existingEpisode.setTitle(
                request.getTitle()
        );

        existingEpisode.setDescription(
                request.getDescription()
        );

        existingEpisode.setDuration(
                request.getDuration()
        );

        // Upload new thumbnail if provided
        if (request.getThumbnail() != null &&
                !request.getThumbnail().isEmpty()) {

            String thumbnailUrl =
                    cloudinaryService.uploadImage(
                            request.getThumbnail()
                    );

            existingEpisode.setThumbnail(thumbnailUrl);
        }

        // Upload new video if provided
        if (request.getVideo() != null &&
                !request.getVideo().isEmpty()) {

            String videoUrl =
                    cloudinaryService.uploadVideo(
                            request.getVideo()
                    );

            existingEpisode.setVideo(videoUrl);
        }

        Episode savedEpisode =
                episodeRepository.save(existingEpisode);

        return toResponse(savedEpisode);
    }


    // =========================
    // DELETE
    // =========================

    public void deleteById(Integer id) {

        Episode episode =
                episodeRepository.findById(id)
                        .orElseThrow(() ->
                                new EpisodeNotFoundException(id)
                        );

        episodeRepository.delete(episode);
    }


    // =========================
    // ENTITY → RESPONSE DTO
    // =========================

    private EpisodeResponse toResponse(Episode episode) {

        return new EpisodeResponse(
                episode.getId(),
                episode.getEpisodeNumber(),
                episode.getTitle(),
                episode.getDescription(),
                episode.getDuration(),
                episode.getThumbnail(),
                episode.getVideo()
        );
    }
}