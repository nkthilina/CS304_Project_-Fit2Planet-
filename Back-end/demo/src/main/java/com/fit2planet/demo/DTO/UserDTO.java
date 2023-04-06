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
    private Integer userId;
    private String email;
    private String firstName;
    private String lastName;
    private Integer age;
    private String gender;
    private String password;
    private Integer mobileNumber;
    private String location;

}
