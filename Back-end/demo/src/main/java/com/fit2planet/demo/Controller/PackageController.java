package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.PackageDTO;
import com.fit2planet.demo.Model.Package;
import com.fit2planet.demo.Service.PackageService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/package")
@CrossOrigin("*")
public class PackageController {

    @Autowired
    private PackageService packageService;

    //with DTO package
    @PostMapping("/add")
    public String addPackage(@RequestBody PackageDTO packageDTO){
        packageService.addPackage(packageDTO);
        return "Package is successfully added";
    }

    @GetMapping("/getAll")
    public List<PackageDTO> getAllPackages(){
        return packageService.getAllPackages();
    }

    @GetMapping("/get/{packageId}")
    public Package getPackageByPackageId(@PathVariable Integer packageId) {
        return packageService.getPackageByPackageId(packageId);
    }

    @DeleteMapping("/delete/{packageId}")
    public String deletePackageByPackageId(@PathVariable Integer packageId){
        packageService.deletePackageByPackageId(packageId);
        return "Package with packageId "+packageId+" is successfully removed";
    }

    @PutMapping("/update/{packageId}")
    public String updatePackage(@PathVariable Integer packageId, @RequestBody @NotNull PackageDTO packageDTO) {
        packageService.updatePackage(
                packageId,
                packageDTO.getActivatedDate(),
                packageDTO.getActivatedTime()
        );
        return "Package with packageId "+packageId+" is successfully updated";
    }

}
