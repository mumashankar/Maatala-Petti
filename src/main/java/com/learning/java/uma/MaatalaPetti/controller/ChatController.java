package com.learning.java.uma.MaatalaPetti.controller;

import com.learning.java.uma.MaatalaPetti.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @GetMapping("/hello")
    public Map<String, String> greeting(){
        return Map.of("h1", "Hello", "h2", "How are you?");
    }

    @GetMapping(value = "/fruits", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getFruits(){
        return ResponseEntity.ok(chatService.getFruits());
    }
}
