package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.LoginDTo;
import com.fit2planet.demo.Model.LoginDetails;
import com.fit2planet.demo.Repository.LoginRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    LoginRepository loginRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserService userService;

    public LoginDTo saveLogin(LoginDTo data){
        LoginDetails loginDetails = modelMapper.map(data,LoginDetails.class);
        LoginDetails loginDetails1 = loginRepository.save(loginDetails);
        return modelMapper.map(loginDetails1,new TypeToken<LoginDTo>(){}.getType());
    }


    public LoginDTo login(LoginDTo data) {
        LoginDetails login=loginRepository.login(data.getEmail(), data.getPassword());
        if(login!=null){
            System.out.println("user null");
//            return userService.getUserByUserId(login.getUser().getUserId());
        }
        return null;

    }


}
