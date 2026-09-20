//package com.Ramflix.service;
//
//import com.Ramflix.dto.AuthResponse;
//import com.Ramflix.dto.auth.LoginRequest;
//import com.Ramflix.dto.auth.RegisterRequest;
//import com.Ramflix.entity.User;
//import com.Ramflix.enums.Role;
//import com.Ramflix.repository.UserRepository;
//import com.Ramflix.security.JwtService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtService jwtService;
//
//    public AuthService(
//            UserRepository userRepository,
//            PasswordEncoder passwordEncoder,
//            JwtService jwtService
//    ) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//        this.jwtService = jwtService;
//    }
//
//    // ==================================================
//    // REGISTER
//    // ==================================================
//
//    public AuthResponse register(RegisterRequest request) {
//
//        // 1. Check whether email already exists
//        if (userRepository.existsByEmail(request.getEmail())) {
//            throw new RuntimeException("Email already registered");
//        }
//
//        // 2. Create new user
//        User user = new User();
//
//        user.setUsername(request.getUsername());
//        user.setEmail(request.getEmail());
//
//        // 3. Hash password before storing it
//        user.setPassword(
//                passwordEncoder.encode(request.getPassword())
//        );
//
//        // 4. New users are USER by default
//        user.setRole(Role.USER);
//
//        // 5. Save user
//        User savedUser = userRepository.save(user);
//
//        // 6. Return response
//        return new AuthResponse(
//                "Registration successful",
//                null,
//                savedUser.getId(),
//                savedUser.getUsername(),
//                savedUser.getEmail(),
//                savedUser.getRole().name()
//        );
//    }
//
//    // ==================================================
//    // LOGIN
//    // ==================================================
//
//    public AuthResponse login(LoginRequest request) {
//
//        // 1. Find user using email
//        User user = userRepository
//                .findByEmail(request.getEmail())
//                .orElseThrow(() ->
//                        new RuntimeException(
//                                "Invalid email or password"
//                        )
//                );
//
//        // 2. Compare entered password
//        //    with the encrypted password stored in database
//        boolean passwordMatches = passwordEncoder.matches(
//                request.getPassword(),
//                user.getPassword()
//        );
//
//        if (!passwordMatches) {
//            throw new RuntimeException(
//                    "Invalid email or password"
//            );
//        }
//
//        // 3. Generate JWT token
//        String token = jwtService.generateToken(
//                user.getEmail(),
//                user.getRole().name()
//        );
//
//        // 4. Return login response
//        return new AuthResponse(
//                "Login successful",
//                token,
//                user.getId(),
//                user.getUsername(),
//                user.getEmail(),
//                user.getRole().name()
//        );
//    }
//}

package com.Ramflix.service;

import com.Ramflix.dto.auth.AuthResponse;
import com.Ramflix.dto.auth.LoginRequest;
import com.Ramflix.dto.auth.RegisterRequest;
import com.Ramflix.entity.User;
import com.Ramflix.enums.Role;
import com.Ramflix.exception.DuplicateResourceException;
import com.Ramflix.exception.InvalidCredentialsException;
import com.Ramflix.repository.UserRepository;
import com.Ramflix.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // ==================================================
    // REGISTER
    // ==================================================

    public AuthResponse register(RegisterRequest request) {

        // 1. Check whether email already exists
        if (userRepository.existsByEmail(request.getEmail())) {

            throw new DuplicateResourceException(
                    "Email already registered"
            );
        }

        // 2. Create new user
        User user = new User();

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        // 3. Hash password before storing it
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        // 4. New users are USER by default
        user.setRole(Role.USER);

        // 5. Save user
        User savedUser = userRepository.save(user);

        // 6. Return response
        return new AuthResponse(
                "Registration successful",
                null,
                savedUser.getId(),
                savedUser.getUsername(),
                savedUser.getEmail(),
                savedUser.getRole().name()
        );
    }


    // ==================================================
    // LOGIN
    // ==================================================

    public AuthResponse login(LoginRequest request) {

        // 1. Find user using email
        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new InvalidCredentialsException(
                                "Invalid email or password"
                        )
                );

        // 2. Compare entered password
        //    with encrypted password stored in database
        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        // 3. Wrong password
        if (!passwordMatches) {

            throw new InvalidCredentialsException(
                    "Invalid email or password"
            );
        }

        // 4. Generate JWT token
        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole().name()
        );

        // 5. Return login response
        return new AuthResponse(
                "Login successful",
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole().name()
        );
    }
}