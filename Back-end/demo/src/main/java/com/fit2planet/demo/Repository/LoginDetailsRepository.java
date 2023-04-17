package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.LoginDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginDetailsRepository extends JpaRepository<LoginDetails, Integer> {

    LoginDetails findByEmail(String email);

    @Query(value = "SELECT * FROM `fit2planet-db`.login_details WHERE email=?1 AND password=?2", nativeQuery = true)
    LoginDetails login(String email, String password);


}
