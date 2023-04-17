package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM fit2planet-db.user WHERE user_id = ?1 LIMIT 1",nativeQuery = true)
    User getUserById(@Param(value = "userId")Integer userId);

//    User getUserByUserId();
//    User getUserByEmail();

//    User getUserByUserId(int userId);

}
