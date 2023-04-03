package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Integer> {

//    @Query("SELECT * FROM Coach c WHERE c.coachId = ?1")
//    List<Coach> getCoachByCoachId(int coachId);

}
