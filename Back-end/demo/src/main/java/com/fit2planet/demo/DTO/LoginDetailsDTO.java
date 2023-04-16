package com.fit2planet.demo.DTO;

import com.fit2planet.demo.Enums.TYPE;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDetailsDTO {
    private Integer loginId;
    private String email;
    private String password;
    private TYPE type;

    private int id;
}
