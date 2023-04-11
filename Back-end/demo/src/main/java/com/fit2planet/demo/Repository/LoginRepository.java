package com.fit2planet.demo.Repository;

import com.fit2planet.demo.DTO.LoginDTo;
import com.fit2planet.demo.Model.LoginDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<LoginDetails,Integer> {

    @Query(value = "SELECT * FROM login_table WHERE email=?1 AND password=?2 LIMIT 1", nativeQuery = true)
    LoginDetails login(String email, String pw);

    @Query(value = "SELECT * FROM login_table WHERE userId=?1",nativeQuery = true)
    LoginDetails getDetailsByUserId(int id);


}
