package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private int age;
    private String gender;
    private String location;

}
