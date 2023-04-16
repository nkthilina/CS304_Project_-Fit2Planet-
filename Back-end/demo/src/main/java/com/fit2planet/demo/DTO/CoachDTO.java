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
    private int mobileNumber;
    private String location;
    private Integer yearOfExperience;
    private String certificates;

}
