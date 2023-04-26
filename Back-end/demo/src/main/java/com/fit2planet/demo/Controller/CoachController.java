package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.CoachDTO;
import com.fit2planet.demo.DTO.SignUpCoachDTO;
import com.fit2planet.demo.Model.Coach;
import com.fit2planet.demo.Service.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/v1/coach")
public class CoachController {

    @Autowired
    private CoachService coachService;

    //with DTO package
    @PostMapping("/add")
    public ResponseEntity<?> addCoach(@RequestBody SignUpCoachDTO coachDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        CoachDTO c=coachService.addCoach(coachDTO);
        if (c!=null) {
            map.put("status", 1);
            map.put("data", c);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Registration failed");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }



    @GetMapping("/getAllCoaches")
    public ResponseEntity<?> getAllCoaches(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<CoachDTO> c=coachService.getAllCoaches();
        if (c!=null) {
            map.put("status", 1);
            map.put("data", c);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Coach list not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

//    @GetMapping("/get/{coachId}")
//    public ResponseEntity<?> getCoachByCoachId(@PathVariable Integer coachId) {
//        Map<String, Object> map = new LinkedHashMap<>();
//        CoachDTO coach = coachService.getCoachByCoachId(coachId);
//        if (coach != null) {
//            map.put("status", 1);
//            map.put("data", coach);
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        } else {
//            map.clear();
//            map.put("status", 0);
//            map.put("message", "Coach not found with id: " + coachId);
//            return new ResponseEntity<>(map, HttpStatus.OK);
//        }
//    }

    @GetMapping("/{id}")
    public Coach getCoachById(@PathVariable int id){
        return coachService.getCoachById(id);
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

}
