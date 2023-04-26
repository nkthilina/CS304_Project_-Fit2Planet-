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

    @GetMapping("/getAllUsers")
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

//    @GetMapping("/get/{userId}")
//    public ResponseEntity<?>  getUserById(@PathVariable Integer userId) {
//        Map<String, Object> map = new LinkedHashMap<String, Object>();
//        UserDTO user = userService.getUserById(userId);
//        if (user != null) {
//            map.put("status", 1);
//            map.put("data", user);
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        } else {
//            map.clear();
//            map.put("status", 0);
//            map.put("message", "User not found");
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        }
//    }

    @PutMapping("/updateUser")
    public ResponseEntity<?>  updateUser(@RequestBody UserDTO userdata) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        UserDTO user = userService.updateUser(userdata);
        if (user != null) {
            map.put("status", 1);
            map.put("data", user);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Update failed");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
//
//    @DeleteMapping("/deleteUser/{userId}")
//    public ResponseEntity<?>  deleteUser(@PathVariable Integer userId) {
//        Map<String, Object> map = new LinkedHashMap<String, Object>();
//        boolean deleted = userService.deleteUser(userId);;
//        if (deleted) {
//            map.put("status", 1);
//            map.put("data", deleted);
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        } else {
//            map.clear();
//            map.put("status", 0);
//            map.put("message", "User not deleted");
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        }
//    }

//    @PutMapping("/updateUser")
//    public UserDTO updateUser(@RequestBody UserDTO userDTO){
//        return userService.updateUser(userDTO);
//    }

    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUserById(@PathVariable Integer userId){
        return userService.deleteUserById(userId);
    }

}
