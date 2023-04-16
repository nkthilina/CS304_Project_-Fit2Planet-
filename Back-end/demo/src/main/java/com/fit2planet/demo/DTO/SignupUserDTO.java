package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignupUserDTO {
    private Integer userId;
    private String firstName;
    private String lastName;
    private Integer age;
    private String gender;
    private Integer mobileNumber;
    private String location;
    private String email;
    private String password;
}
