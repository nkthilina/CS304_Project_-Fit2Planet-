package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.PackageDTO;
import com.fit2planet.demo.Model.Package;
import com.fit2planet.demo.Repository.PackageRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    public static void addPackage(PackageDTO packageDTO) {
//        Package package = new Package(PackageDTO.getPackageId(), PackageDTO.getActivatedTime(), PackageDTO.getActivatedDate(), PackageDTO.getUserId());
        PackageDTO packageDTO1 = new PackageDTO();
    }
}
