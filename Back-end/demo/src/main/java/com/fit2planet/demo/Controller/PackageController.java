package com.fit2planet.demo.Controller;

import com.fit2planet.demo.Service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin

public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping
    public void getPackage() {

    }

    @PostMapping
    public void addPackage() {

    }

}
