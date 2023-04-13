package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
//@AllArgsConstructor
//@NoArgsConstructor
public class LoginDetailsDTO {

    private Integer loginId;
    private String email;
    private String password;
    private Integer type;


    public LoginDetailsDTO() {

    }

    public LoginDetailsDTO(Integer loginId, String email, String password, Integer type) {
        this.loginId = loginId;
        this.email = email;
        this.password = password;
        this.type = type;
    }




//    private int userId;
//    private int coachId;
//
//    public LoginDetailsDTO (String email, String password) {
//        this.email = email;
//        this.password = password;
//    }

}
