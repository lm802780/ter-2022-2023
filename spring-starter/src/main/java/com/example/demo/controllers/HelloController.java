package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/hello")
public class HelloController {

    private static List<String> loadTest() {
        List<String> result = new ArrayList<>();
        for (int i = 0; i < 6_000; i++) {
            result.add(UUID.randomUUID().toString());
        }
        Collections.shuffle(result);
        return result;
    }

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok(loadTest().toString());
    }

    // Scénario simple
    /*
    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello world");
    }
     */
}
