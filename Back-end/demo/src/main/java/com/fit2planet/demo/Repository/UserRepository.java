package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.userId = ?1")
    User getUserByUserId(int userId);

//    User getUserByUserId();
//    User getUserByEmail();

    User getUserByUserId(Integer userId);

}
