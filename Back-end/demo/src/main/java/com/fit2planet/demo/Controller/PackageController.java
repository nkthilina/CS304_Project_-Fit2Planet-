package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.PackageDTO;
import com.fit2planet.demo.Service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/package")
@CrossOrigin

public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping(value = "/get-package")
    public String getPackage() {
        return "Package is returned";
    }

    @PostMapping(value = "/add-package")
    public void addPackage(@RequestBody PackageDTO packageDTO) {
        PackageService.addPackage(packageDTO);
    }

}
