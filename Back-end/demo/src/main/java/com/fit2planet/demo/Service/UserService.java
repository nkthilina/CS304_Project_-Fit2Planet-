package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final ModelMapper modelMapper = new ModelMapper();



    public void addUser(UserDTO userDTO){
        User u = modelMapper.map(userDTO,User.class);
        userRepository.save(u);
    }

    public List<UserDTO> getAllUsers(){
        List<User> userList = userRepository.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }

    public User getUserByUserId(Integer userId) {
        return userRepository.getUserByUserId(userId);
    }

    public void deleteUserByUserId(Integer userId){
        userRepository.deleteById(userId);
    }

    public void updateUser(Integer userId,
                             String firstName,
                             String lastName,
                             Integer age,
                             String gender,
                             String email,
                             String password,
                             Integer mobileNumber,
                             String location) {
        User user = userRepository.getReferenceById(userId);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setAge(age);
        user.setGender(gender);
        user.setEmail(email);
        user.setPassword(password);
        user.setMobileNumber(mobileNumber);
        user.setLocation(location);
    }

//----------------------------------------------------
//    public Optional<Object> findById(Integer userId) {
//        return true;
//    }
//
//    public void save(UserDTO updateUser) {
//    }
}
