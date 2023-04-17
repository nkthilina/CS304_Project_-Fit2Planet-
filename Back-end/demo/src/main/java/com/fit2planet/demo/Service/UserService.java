package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.LoginDetailsDTO;
import com.fit2planet.demo.DTO.SignupUserDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Enums.TYPE;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.transaction.Transactional;
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

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private LoginDetailsService loginDetailsService;


    public UserDTO addUser(SignupUserDTO data){
        try{
            User newUser=modelMapper.map(data,User.class);
            User saveduser=userRepository.save(newUser);
            if(saveduser!=null){
                LoginDetailsDTO save=new LoginDetailsDTO();
                save.setEmail(data.getEmail());
                save.setPassword(data.getPassword());
                save.setType(TYPE.USER);
                save.setId(saveduser.getUserId());

                LoginDetailsDTO savedDetails=loginDetailsService.addLoginDetails(save);
                if(savedDetails!=null) {
                    return modelMapper.map(saveduser, new TypeToken<UserDTO>(){}.getType());
                }
                return null;
            }
            return null;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    public List<UserDTO> getAllUsers(){
        List<User> userList = userRepository.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }

//    public User getUserByUserId(Integer userId) {
//        return userRepository.getUserByUserId(userId);
//    }

//    public void deleteUserByUserId(Integer userId){
//        userRepository.deleteById(userId);
//    }

    public void updateUser(Integer userId,
                             String firstName,
                             String lastName,
                             Integer age,
                             String gender,
                             Integer mobileNumber,
                             String location) {
        User user = userRepository.getReferenceById(userId);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setAge(age);
        user.setGender(gender);
        user.setMobileNumber(mobileNumber);
        user.setLocation(location);
    }


//    public UserDTO getUserById(Integer userId) {
//        try {
//            User user = userRepository.getUserById(userId);
//            if(user == null) {
//                return null;
//            }else {
//                return modelMapper.map(user, new TypeToken<UserDTO>(){}.getType());
//            }
//        }
//        catch (Exception e) {
//            System.out.println(e.toString());
//            return null;
//        }
//    }

    public UserDTO updateUser(UserDTO userDTO) {
        userRepository.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public boolean deleteUser(UserDTO userDTO) {
        userRepository.delete(modelMapper.map(userDTO, User.class));
        return true;
    }


//    public UserDTO getUserById(Integer userId) {
//
//    }
}
