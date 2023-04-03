package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {

//    @Query()
//    List<Package> getPackages(int packageId);
//
//    @Query("DELETE FROM Package p WHERE p.packageId = ?1")
//    int deletePackageByCoachId(int coachId);
//
//    int deletePackageByUserId(int userId);
}
