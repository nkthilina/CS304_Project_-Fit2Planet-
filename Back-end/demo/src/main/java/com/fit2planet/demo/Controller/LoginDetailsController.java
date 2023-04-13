package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.LoginDetailsDTO;
import com.fit2planet.demo.Service.LoginDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/loginDetails")
public class LoginDetailsController {

    @Autowired
    private LoginDetailsService loginDetailsService;

    @Autowired
    public LoginDetailsController(LoginDetailsService loginDetailsService) {
        this.loginDetailsService = loginDetailsService;
    }

    @PostMapping
    public ResponseEntity<LoginDetailsDTO> saveLoginDetails(@RequestBody LoginDetailsDTO loginDetailsDTO) {
        LoginDetailsDTO savedLoginDetails = loginDetailsService.saveLoginDetails(loginDetailsDTO);
        return new ResponseEntity<>(savedLoginDetails, HttpStatus.CREATED);
    }

    @GetMapping("/{loginId}")
    public ResponseEntity<LoginDetailsDTO> getLoginDetailsById(@PathVariable Integer loginId) {
        LoginDetailsDTO loginDetailsDTO = loginDetailsService.getLoginDetailsById(loginId);
        return new ResponseEntity<>(loginDetailsDTO, HttpStatus.OK);
    }




//    private LoginDetailsDTO loginDetailsDTO;

//    @PostMapping
//    public ResponseEntity<LoginDetailsDTO> createLoginDetail(@RequestBody LoginDetailsDTO loginDetailsDTO) {
//        LoginDetailsDTO createLoginDetail = loginDetailsService.createLoginDetail(loginDetailsDTO);
//        return ResponseEntity.ok(createLoginDetail);
//    }
//
//    @GetMapping("/{loginId}")
//    public ResponseEntity<LoginDetailsDTO> getLoginDetail(@PathVariable Integer loginId) {
//        LoginDetailsDTO loginDetailDTO = loginDetailsService.getLoginDetailById(loginId);
//        if (loginDetailDTO == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(loginDetailDTO);
//    }

//    @PostMapping("/add")
//    public LoginDetailsDTO save(@RequestBody LoginDetailsDTO loginDetailsDTO){
//        return loginDetailsService.saveLogin(loginDetailsDTO);
//    }
//
//    @PostMapping("/user")
//    public LoginDTo loginUser(@RequestBody LoginDTo data){
//        return  loginService.login(data);
//    }
//
//    @PostMapping("/coach")
//    public LoginDTo loginCoach(@RequestBody LoginDTo data){
//        return  loginService.login(data);
//    }


}
