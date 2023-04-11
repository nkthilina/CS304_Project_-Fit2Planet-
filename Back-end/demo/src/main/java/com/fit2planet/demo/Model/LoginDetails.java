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
@NoArgsConstructor
public class LoginDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loginId")
    public int loginId;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;

//    @OneToOne(cascade = CascadeType.ALL)
//    @PrimaryKeyJoinColumn
//    private User user;

    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    public User user;

    @OneToOne
    @JoinColumn(name = "coachId", referencedColumnName = "coachId")
    public Coach coach;

}
