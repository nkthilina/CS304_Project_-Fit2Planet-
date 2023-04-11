package com.fit2planet.demo.DTO;

import com.fit2planet.demo.Model.LoginDetails;
import com.fit2planet.demo.Repository.LoginRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginDTo {

    private String email;
    private String password;




}
