package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Exception.ResourceNotFoundException;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(value = "/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;


    //with DTO package
    @PostMapping("/add")
    public String addUser(@RequestBody UserDTO userDTO){
        userService.addUser(userDTO);
        return "User is successfully added";
    }

    @GetMapping("/getAll")
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/get/{userId}")
    public User getUserByUserId(@PathVariable int userId) {
        return userService.getUserByUserId(userId);
    }


    @DeleteMapping("/delete/{userId}")
    public String deleteUserByUserId(@PathVariable Integer userId){
        userService.deleteUserByUserId(userId);
        return "User with userId "+userId+" is successfully removed";
    }

    @PutMapping("/update/{userId}")
    public String updateUser(@PathVariable Integer userId, @RequestBody @NotNull UserDTO userDTO) {
        userService.updateUser(
                userId,
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getAge(),
                userDTO.getGender(),
                userDTO.getEmail(),
                userDTO.getPassword(),
                userDTO.getMobileNumber(),
                userDTO.getLocation()
        );
        return "User with userId "+userId+" is successfully updated";
    }

}
