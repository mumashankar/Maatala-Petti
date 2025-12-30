package com.learning.java.uma.MaatalaPetti.controller;

import com.learning.java.uma.MaatalaPetti.service.ChatService;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api")
public class ChatController {
    @Autowired
    private ChatService chatService;

    private String apiUrl;
    private String apikey;

    public ChatController() {
        Dotenv dotenv = Dotenv.load();
        this.apiUrl = dotenv.get("API_URL");
        this.apikey = dotenv.get("API_ANSWER1") + "-" + dotenv.get("API_ANSWER2") + "-" + dotenv.get("API_ANSWER3");
    }

    @GetMapping("/hello")
    public Map<String, String> greeting(){
        return Map.of("h1", "Hello", "h2", "How are you?");
    }

    @GetMapping(value = "/fruits", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getFruits(){
        return ResponseEntity.ok(chatService.getFruits());
    }

    @PostMapping("/sendMsg")
    public String sendMessage(@RequestParam String userMessage) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        System.out.println("Calling sendMessage with "+userMessage);
        String payload = String.format("""
               {
                "model": "gpt-4.1-mini",
                "messages": [
                    {
                        "role": "user",
                        "content": "%s"
                    }
                ]
               }
               """, userMessage);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .header("Authorization", "Bearer " + apikey)
                .header("content-type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(payload))
                .build()
                ;

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
