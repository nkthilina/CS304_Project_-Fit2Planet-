package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.LoginDTo;
import com.fit2planet.demo.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public LoginDTo save(@RequestBody LoginDTo loginDTo){
        return loginService.saveLogin(loginDTo);
    }

    @PostMapping("/user")
    public LoginDTo loginUser(@RequestBody LoginDTo data){
        return  loginService.login(data);
    }

    @PostMapping("/coach")
    public LoginDTo loginCoach(@RequestBody LoginDTo data){
        return  loginService.login(data);
    }

}
