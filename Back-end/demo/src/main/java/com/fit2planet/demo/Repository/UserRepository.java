package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM fit2planet-db.user WHERE user_id = ?1 LIMIT 1",nativeQuery = true)
    User getUserById(@Param(value = "userId")Integer userId);

    @Transactional
    @Modifying
    @Query("update User u set u.firstName = ?1, u.lastName = ?2, u.mobileNumber = ?3, u.location = ?4, u.age=?5, u.gender=?6 where u.userId = ?7")
    int updateUser(String firstName, String lastName, Integer mobileNumber, String location, Integer age, String gender, Integer userId);

//    int updateUser(String firstName, String lastName, Integer age, String gender, Integer mobileNumber, String location, Integer userId);

//    User getUserByUserId();
//    User getUserByEmail();

//    User getUserByUserId(int userId);

}
