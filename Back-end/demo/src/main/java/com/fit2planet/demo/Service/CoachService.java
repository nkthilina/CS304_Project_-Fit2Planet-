package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.CoachDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.Coach;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.CoachRepository;
import com.fit2planet.demo.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CoachService {

    @Autowired
    private CoachRepository coachRepository;

    private final ModelMapper modelMapper = new ModelMapper();



    public void addCoach(CoachDTO coachDTO){
        Coach c = modelMapper.map(coachDTO,Coach.class);
        coachRepository.save(c);
    }

    public List<CoachDTO> getAllCoaches(){
        List<Coach> coachList = coachRepository.findAll();
        return modelMapper.map(coachList,new TypeToken<List<CoachDTO>>(){}.getType());
    }

    public Coach getCoachByCoachId(Integer coachId) {
        return coachRepository.getCoachByCoachId(coachId);
    }

    public Coach getCoachByLocation(String location) {
        return coachRepository.getCoachByLocation(location);
    }

    public void deleteCoachByCoachId(Integer coachId){
        coachRepository.deleteById(coachId);
    }



    public void updateCoach(Integer coachId,
                            String firstName,
                            String lastName, int age,
                            String gender, String email,
                            String password,
                            Integer mobileNumber,
                            String location,
                            int yearOfExperience,
                            String certificates) {

        Coach coach = coachRepository.getReferenceById(coachId);
        coach.setFirstName(firstName);
        coach.setLastName(lastName);
        coach.setAge(age);
        coach.setGender(gender);
        coach.setEmail(email);
        coach.setPassword(password);
        coach.setMobileNumber(mobileNumber);
        coach.setLocation(location);
        coach.setYearOfExperience(yearOfExperience);
        coach.setCertificates(certificates);
    }


}
