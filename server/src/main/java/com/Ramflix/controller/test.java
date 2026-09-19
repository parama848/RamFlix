package com.Ramflix.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api")
@RestController
public class test {

    @GetMapping("/hello")
    public String hello(){
        return "Welcome to Ramflix";
    }

}
