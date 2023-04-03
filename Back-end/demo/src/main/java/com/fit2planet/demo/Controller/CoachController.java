package com.fit2planet.demo.Controller;

import com.fit2planet.demo.Service.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/coach")
public class CoachController {

    @Autowired
    private CoachService coachService;



}
