package com.Ramflix.exception;

public class EpisodeNotFoundException extends RuntimeException {

    public EpisodeNotFoundException(Integer id){
        super("Episode Not Found! " + id);
    }

}
