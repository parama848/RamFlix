package com.Ramflix.controller;

import com.Ramflix.dto.ApiResponse;
import com.Ramflix.dto.CreateEpisodeRequest;
import com.Ramflix.dto.EpisodeResponse;
import com.Ramflix.dto.UpdateEpisodeRequest;
import com.Ramflix.service.EpisodeService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EpisodeController {

    private final EpisodeService episodeService;

    public EpisodeController(EpisodeService episodeService) {
        this.episodeService = episodeService;
    }


    // =========================
    // CREATE
    // =========================

    @PostMapping(
            value = "/episode",
            consumes = "multipart/form-data"
    )
    public ApiResponse<EpisodeResponse> createEpisode(
            @Valid @ModelAttribute CreateEpisodeRequest request
    ) throws IOException {

        EpisodeResponse episodeResponse =
                episodeService.createEpisode(request);

        return new ApiResponse<>(
                201,
                "Episode created successfully",
                episodeResponse,
                LocalDateTime.now()
        );
    }


    // =========================
    // GET ALL
    // =========================

    @GetMapping("/episodes")
    public List<EpisodeResponse> getAllEpisodes() {

        return episodeService.getAllEpisodes();
    }


    // =========================
    // GET BY ID
    // =========================

    @GetMapping("/episode/{id}")
    public EpisodeResponse getEpisodeById(
            @PathVariable Integer id
    ) {

        return episodeService.getEpisodeById(id);
    }


    // =========================
    // UPDATE
    // =========================

    @PutMapping(
            value = "/update/{id}",
            consumes = "multipart/form-data"
    )
    public EpisodeResponse updateEpisode(
            @PathVariable Integer id,
            @Valid @ModelAttribute UpdateEpisodeRequest request
    ) throws IOException {

        return episodeService.updateEpisode(id, request);
    }


    // =========================
    // DELETE
    // =========================

    @DeleteMapping("/delete/{id}")
    public String deleteEpisodeById(
            @PathVariable Integer id
    ) {

        episodeService.deleteById(id);

        return "Deleted Successfully!";
    }
}