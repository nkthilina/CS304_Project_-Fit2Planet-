package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.LoginDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginDetailsRepository extends JpaRepository<LoginDetails, Integer> {

    LoginDetails findByEmail(String email);

}
