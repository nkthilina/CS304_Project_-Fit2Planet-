package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepository extends JpaRepository<Package, Integer> {

}
