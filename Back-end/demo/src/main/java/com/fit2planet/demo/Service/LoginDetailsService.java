package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.LoginDetailsDTO;
import com.fit2planet.demo.Model.LoginDetails;
import com.fit2planet.demo.Repository.LoginDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginDetailsService {

    @Autowired
    private LoginDetailsRepository loginDetailsRepository;

    @Autowired
    public LoginDetailsService(LoginDetailsRepository loginDetailsRepository) {
        this.loginDetailsRepository = loginDetailsRepository;
    }

    public LoginDetailsDTO saveLoginDetails(LoginDetailsDTO loginDetailsDTO) {
        LoginDetails loginDetails = new LoginDetails(loginDetailsDTO.getEmail(), loginDetailsDTO.getPassword(), loginDetailsDTO.getType());
        LoginDetails savedLoginDetails = loginDetailsRepository.save(loginDetails);
        return new LoginDetailsDTO(savedLoginDetails.getLoginId(), savedLoginDetails.getEmail(), savedLoginDetails.getPassword(), savedLoginDetails.getType());
    }

    public LoginDetailsDTO getLoginDetailsById(Integer loginId) {
        Optional<LoginDetails> optionalLoginDetails = loginDetailsRepository.findById(loginId);
        if (optionalLoginDetails.isPresent()) {
            LoginDetails loginDetails = optionalLoginDetails.get();
            return new LoginDetailsDTO(loginDetails.getLoginId(), loginDetails.getEmail(), loginDetails.getPassword(), loginDetails.getType());
        } else {
            throw new EntityNotFoundException("LoginDetails not found with ID " + loginId);
        }
    }
}


        // =======================================================================

//    public LoginDetailsDTO createLoginDetail(LoginDetailsDTO loginDetailsDTO) {
//        LoginDetailsDTO loginDetails = new loginDetails();
//        loginDetails.setEmail(loginDetailsDTO.getEmail());
//        loginDetails.setPassword(loginDetailsDTO.getPassword());
//        loginDetails.setType(loginDetailsDTO.getType());
//        loginDetails createLoginDetail = loginDetailsRepository.save(loginDetails);
//        return toDTO(createLoginDetail);
//    }
//
//    public LoginDetailsDTO getLoginDetailById(Integer loginId) {
//        Optional<LoginDetails> loginDetailOptional = loginDetailsRepository.findById(loginId);
//        if (!loginDetailOptional.isPresent()) {
//            return null;
//        }
//        LoginDetails loginDetail = loginDetailOptional.get();
//        return toDTO(new LoginDetails());
//    }
//
//    // Other methods...
//
//    private LoginDetailsDTO toDTO(LoginDetails loginDetails) {
//        LoginDetailsDTO loginDetailsDTO = new loginDetailsDTO();
//        loginDetailsDTO.setLoginId(loginDetails.getLoginId());
//        loginDetailsDTO.setEmail(loginDetails.getEmail());
//        loginDetailsDTO.setPassword(loginDetails.getPassword());
//        loginDetailsDTO.setType(loginDetails.getType());
//        return loginDetailsDTO;
 //   }

//}
