package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.CoachDTO;
import com.fit2planet.demo.DTO.LoginDetailsDTO;
import com.fit2planet.demo.DTO.LoginRequestDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Enums.TYPE;
import com.fit2planet.demo.Model.LoginDetails;
import com.fit2planet.demo.Repository.CoachRepository;
import com.fit2planet.demo.Repository.LoginDetailsRepository;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class LoginDetailsService {

    @Autowired
    private LoginDetailsRepository loginDetailsRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CoachRepository coachRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EntityManager entityManager;

    public LoginDetailsDTO addLoginDetails(LoginDetailsDTO data){
        try{
            LoginDetails l=modelMapper.map(data,LoginDetails.class);
            LoginDetails saved=loginDetailsRepository.save(l);
            if(saved!= null){
                return modelMapper.map(saved, new TypeToken<LoginDetailsDTO>(){}.getType());
            }
            return null;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Transactional
    public void deleteDetail(TYPE type,int id){
        loginDetailsRepository.delete(type,id);
    }

    public ResponseEntity<?> login(LoginRequestDTO data) {
        try{
            LoginDetails login=loginDetailsRepository.login(data.getEmail(), data.getPassword());
            if(login!=null){
                Map<String, Object> map = new LinkedHashMap<>();
                if(login.getType()== TYPE.COACH){
                    map.put("Role", TYPE.COACH);
                    map.put("data", modelMapper.map(coachRepository.getReferenceById(login.getId()),new TypeToken<CoachDTO>(){}.getType()));
                    return new ResponseEntity<>(map, HttpStatus.OK);
                }
                else{
                    map.put("Role", TYPE.USER);
                    map.put("data", modelMapper.map(userRepository.getReferenceById(login.getId()),new TypeToken<UserDTO>(){}.getType()));
                    return new ResponseEntity<>(map, HttpStatus.OK);
                }
            }
            return null;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
