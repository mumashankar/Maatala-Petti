package com.learning.java.uma.MaatalaPetti.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {
    public String getFruits(){
        String resultArrStr;
        resultArrStr = "{\"fruits\": [" +
                "{\"name\": \"Apple\"}," +
                "{\"name\": \"Orange\"}," +
                "{\"name\": \"Banana\"}," +
                "{\"name\": \"Mango\"}," +
                "{\"name\": \"Straw Berry\"}" +
                "]}";
        return resultArrStr;
    }
}
