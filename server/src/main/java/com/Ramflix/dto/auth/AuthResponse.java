package com.Ramflix.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {

    private String message;

    private String token;

    private Integer userId;

    private String username;

    private String email;

    private String role;
}