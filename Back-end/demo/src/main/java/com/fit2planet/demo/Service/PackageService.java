package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.PackageDTO;
import com.fit2planet.demo.DTO.ProductDTO;
import com.fit2planet.demo.Model.Package;
import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Repository.PackageRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public void addPackage(PackageDTO packageDTO) {
        Package aPackage = modelMapper.map(packageDTO,Package.class);
        packageRepository.save(aPackage);
    }

    public List<PackageDTO> getAllPackages() {
        List<Package> packageList = packageRepository.findAll();
        return modelMapper.map(packageList,new TypeToken<List<PackageDTO>>(){}.getType());
    }

    public Package getPackageByPackageId(Integer packageId) {
        return packageRepository.getPackageByPackageId(packageId);
    }

    public void deletePackageByPackageId(Integer packageId) {
        packageRepository.deleteById(packageId);
    }

    public void updatePackage(Integer packageId,
                              Date activatedDate,
                              Time activatedTime) {
        Package aPackage = packageRepository.getReferenceById(packageId);
        aPackage.setActivatedTime(activatedTime);
        //aPackage.setActivatedDate(activatedDate);
    }

}
