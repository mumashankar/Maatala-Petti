package com.learning.java.uma.MaatalaPetti.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ChatController {

    @GetMapping("/hello")
    public String greeting(){
        return "<h1>Hello</h1><h2>How are you doing today?</h2>";
    }
}
