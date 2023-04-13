package com.fit2planet.demo.Model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "loginDetails")
@Getter
@Setter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
public class LoginDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loginId")
    private Integer loginId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "type", nullable = false)
    private Integer type;

    public LoginDetails() {

    }

    public LoginDetails( String email, String password, Integer type) {
//        this.loginId = loginId;
        this.email = email;
        this.password = password;
        this.type = type;
    }

//    public LoginDetails(String email, String password, Integer type) {
//    }


//    @OneToOne(cascade = CascadeType.ALL)
//    @PrimaryKeyJoinColumn
//    private User user;

//    @OneToOne
//    @JoinColumn(name = "userId", referencedColumnName = "userId")
//    public User user;
//
//    @OneToOne
//    @JoinColumn(name = "coachId", referencedColumnName = "coachId")
//    public Coach coach;

}
