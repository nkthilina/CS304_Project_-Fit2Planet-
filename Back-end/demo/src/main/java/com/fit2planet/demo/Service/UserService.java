package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    public List<User> getUserOf(int id) {
//
//    }

//    public void addUser( UserDTO userDTO) {
//        User user = new User(
//                userDTO.getUserId(),
//                userDTO.getFirstName(),
//                userDTO.getLastName(),
//                userDTO.getAge(),
//                userDTO.getGender(),
//                userDTO.getLocation());
//        userRepository.save(user);
//    }

}
