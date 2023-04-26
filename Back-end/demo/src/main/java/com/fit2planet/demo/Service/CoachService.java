package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.CoachDTO;
import com.fit2planet.demo.DTO.LoginDetailsDTO;
import com.fit2planet.demo.DTO.SignUpCoachDTO;
import com.fit2planet.demo.Enums.TYPE;
import com.fit2planet.demo.Model.Coach;
import com.fit2planet.demo.Repository.CoachRepository;
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
    @Autowired
    private LoginDetailsService loginDetailsService;
    @Autowired
    private ModelMapper modelMapper;



    public CoachDTO addCoach(SignUpCoachDTO data){
        try{
            Coach newUser=modelMapper.map(data,Coach.class);
            Coach saveduser=coachRepository.save(newUser);
            if(saveduser!=null){
                LoginDetailsDTO save=new LoginDetailsDTO();
                save.setEmail(data.getEmail());
                save.setPassword(data.getPassword());
                save.setType(TYPE.COACH);
                save.setId(saveduser.getCoachId());

                LoginDetailsDTO savedDetails=loginDetailsService.addLoginDetails(save);
                if(savedDetails!=null) {
                    return modelMapper.map(saveduser, new TypeToken<CoachDTO>(){}.getType());
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

    public List<CoachDTO> getAllCoaches(){
        try{
            List<Coach> coachList = coachRepository.findAll();
            if(coachList==null){
                return null;
            }
            return modelMapper.map(coachList,new TypeToken<List<CoachDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }

    }


    public Coach getCoachByLocation(String location) {
        return coachRepository.getCoachByLocation(location);
    }

    public void deleteCoachByCoachId(Integer coachId){
        coachRepository.deleteById(coachId);
    }



//    public void updateCoach(Integer coachId,
//                            String firstName,
//                            String lastName, int age,
//                            String gender, String email,
//                            String password,
//                            Integer mobileNumber,
//                            String location,
//                            int yearOfExperience,
//                            String certificates) {
//
//        Coach coach = coachRepository.getReferenceById(coachId);
//        coach.setFirstName(firstName);
//        coach.setLastName(lastName);
//        coach.setAge(age);
//        coach.setGender(gender);
////        coach.setEmail(email);
////        coach.setPassword(password);
//        coach.setMobileNumber(mobileNumber);
//        coach.setLocation(location);
//        coach.setYearOfExperience(yearOfExperience);
//        coach.setCertificates(certificates);
//    }

    public Coach getCoachById(int id){
        return coachRepository.getReferenceById(id);
    }

//    public CoachDTO getCoachByCoachId(Integer coachId) {
//        Optional<Coach> coachOptional = coachRepository.findById(coachId);
//        return coachOptional.map(coach -> modelMapper.map(coach, CoachDTO.class)).orElse(null);
//    }
}
