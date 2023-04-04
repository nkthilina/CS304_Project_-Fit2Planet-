package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

//    @PostMapping(value = "/addUser")
//    public void addUser(@RequestBody UserDTO userDTO) {
////        userService.addUser(userDTO);
//
//    }
//
//    @GetMapping(value = "/getUser")
//    public String getUser() {
//        return "userDTO";
////        return "User is given";
//    }

    //with DTO package
    @PostMapping("/add")
    public boolean addUser(@RequestBody UserDTO userDTO){
        userService.addUser(userDTO);
        return true;
    }

    @GetMapping("/get-all")
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }


//    @DeleteMapping("/delete/{userId}")
//    public boolean deleteUserById(@PathVariable Integer userId){
//        userService.deleteUserById(userId);
//        return true;
//    }

}
