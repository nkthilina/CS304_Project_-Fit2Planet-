package com.fit2planet.demo.Model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "loginDetails")
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

//    @OneToOne(cascade = CascadeType.ALL)
//    @PrimaryKeyJoinColumn
//    private User user;

    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;

    @OneToOne
    @JoinColumn(name = "coachId", referencedColumnName = "coachId")
    private Coach coach;

}
