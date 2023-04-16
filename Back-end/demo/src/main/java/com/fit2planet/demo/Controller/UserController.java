package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.SignupUserDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;


    //with DTO package
    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody SignupUserDTO data){
        Map<String, Object> map = new LinkedHashMap<>();
        UserDTO c=userService.addUser(data);
        if (c!=null) {
            map.put("status", 1);
            map.put("data", c);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Registration failed");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    @GetMapping("/getallusers")
    public ResponseEntity<?> getAllUsers(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<UserDTO> c=userService.getAllUsers();
        if (c!=null) {
            map.put("status", 1);
            map.put("data", c);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Coach list not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

//    @GetMapping("/getAll")
//    public List<UserDTO> getAllUsers(){
//        return userService.getAllUsers();
//    }
//
//    @GetMapping("/get/{userId}")
//    public User getUserByUserId(@PathVariable int userId) {
//        return userService.getUserByUserId(userId);
//    }
//
//
//    @DeleteMapping("/delete/{userId}")
//    public String deleteUserByUserId(@PathVariable Integer userId){
//        userService.deleteUserByUserId(userId);
//        return "User with userId "+userId+" is successfully removed";
//    }



}
