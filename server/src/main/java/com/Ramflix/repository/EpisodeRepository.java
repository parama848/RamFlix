package com.Ramflix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Ramflix.entity.Episode;
import org.springframework.stereotype.Repository;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Integer> {
}
