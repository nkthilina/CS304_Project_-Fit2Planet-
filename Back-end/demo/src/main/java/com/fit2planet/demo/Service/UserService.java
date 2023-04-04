package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private ModelMapper modelMapper;

    private final ModelMapper modelMapper = new ModelMapper();

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


//    public void addDriver(UserDTO userDTO){
//        try {
//            User u = modelMapper.map(userDTO,User.class);
//            userRepository.save(u);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

    public void addUser(UserDTO userDTO){
        User u = modelMapper.map(userDTO,User.class);
        userRepository.save(u);
    }

    public List<UserDTO> getAllUsers(){
        List<User> userList = userRepository.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }

    public void deleteUserById(Integer userId){
        userRepository.deleteById(userId);
    }

//    public void updateDUser(String firstName,
//                            String lastName,
//                            int age,
//                            String gender,
//                            String email,
//                            String password,
//                            int mobileNumber,
//                            String location) {
//
//        User user = userRepository.getUserByUserId(u);
//
//        user.setFirstName(firstName);
//        user.setLastName(lastName);
//        user.setAge(age);
//        user.setGender(gender);
//        user.setEmail(email);
//        user.setPassword(password);
//        user.setMobileNumber(mobileNumber);
//        user.setLocation(location);
//
//    }


}
