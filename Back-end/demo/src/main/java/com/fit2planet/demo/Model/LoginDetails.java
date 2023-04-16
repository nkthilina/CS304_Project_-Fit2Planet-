package com.fit2planet.demo.Model;


import com.fit2planet.demo.Enums.TYPE;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "loginDetails")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loginId")
    private Integer loginId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TYPE type;

    private int id;
}
