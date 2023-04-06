package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.CoachDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.Coach;
import com.fit2planet.demo.Service.CoachService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/coach")
public class CoachController {

    @Autowired
    private CoachService coachService;

    //with DTO package
    @PostMapping("/add")
    public String addCoach(@RequestBody CoachDTO coachDTO){
        coachService.addCoach(coachDTO);
        return "Coach is successfully added";
    }

    @GetMapping("/getAll")
    public List<CoachDTO> getAllCoaches(){
        return coachService.getAllCoaches();
    }

    @GetMapping("/get/{coachId}")
    public Coach getCoachByCoachId(@PathVariable Integer coachId) {
        return coachService.getCoachByCoachId(coachId);
    }

    @GetMapping("/get/{location}")
    public Coach getCoachByLocation(@PathVariable String location) {
        return coachService.getCoachByLocation(location);
    }

    @DeleteMapping("/delete/{coachId}")
    public String deleteCoachByCoachId(@PathVariable Integer coachId){
        coachService.deleteCoachByCoachId(coachId);
        return "Coach with coachId "+coachId+" is successfully removed";
    }

    @PutMapping("/update/{coachId}")
    public String updateCoach(@PathVariable Integer coachId, @RequestBody @NotNull CoachDTO coachDTO) {
        coachService.updateCoach(
                coachId,
                coachDTO.getFirstName(),
                coachDTO.getLastName(),
                coachDTO.getAge(),
                coachDTO.getGender(),
                coachDTO.getEmail(),
                coachDTO.getPassword(),
                coachDTO.getMobileNumber(),
                coachDTO.getLocation(),
                coachDTO.getYearOfExperience(),
                coachDTO.getCertificates());
        return "Coach with coachId "+coachId+" is successfully updated";
    }


}
