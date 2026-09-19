package com.Ramflix.controller;

import com.Ramflix.dto.AuthResponse;
import com.Ramflix.dto.auth.LoginRequest;
import com.Ramflix.dto.auth.RegisterRequest;
import com.Ramflix.service.AuthService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // ==================================================
    // REGISTER
    // ==================================================

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(
            @Valid @RequestBody RegisterRequest request
    ) {
        return authService.register(request);
    }

    // ==================================================
    // LOGIN
    // ==================================================

    @PostMapping("/login")
    public AuthResponse login(
            @Valid @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}