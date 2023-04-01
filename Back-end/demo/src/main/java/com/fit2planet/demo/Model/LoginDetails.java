package com.fit2planet.demo.Model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "login_details")
@Getter
@Setter
@AllArgsConstructor
@Builder
public class LoginDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loginId")
    private int loginId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_userId")
    private User user;

    @OneToOne
    @MapsId
    @JoinColumn(name = "coach_coachId")
    private Coach coach;

}
