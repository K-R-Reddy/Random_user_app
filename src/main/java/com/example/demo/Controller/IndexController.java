package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.service.registry.ImportHttpServices.Container;

@Controller
public class IndexController {
    @GetMapping("/")
    public String index() {
        return "index.html";
    }
    
    @GetMapping("/login")
    public String login() {
        return "login.html";
    }
}