package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CoachDTO {

    private int coachId;
    private String firstName;
    private String lastName;
    private int age;
    private String gender;
    private String location;
    private int yearOfExperience;
    private String certificates;

}
