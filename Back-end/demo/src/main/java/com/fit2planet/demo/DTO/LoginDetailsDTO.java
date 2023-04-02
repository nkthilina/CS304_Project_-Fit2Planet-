package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDetailsDTO {

    private int loginId;
    private String email;
    private String password;
    private int userId;
    private int coachId;

    public LoginDetailsDTO (String email, String password) {
        this.email = email;
        this.password = password;
    }

}
