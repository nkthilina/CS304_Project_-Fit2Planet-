package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
@NoArgsConstructor

public class UserDTO {

    private int userId;

    private String firstName;

    private String lastName;

    private int age;

    private String gender;

    private String username;

    private String email;

    private String password;

    private int mobileNumber;

    private String location;

    public UserDTO(int userId, String firstName, String lastName, int age) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
