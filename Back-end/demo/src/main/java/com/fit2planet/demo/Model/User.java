package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Data
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    //1st
//    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
//    private List<Package> package = new ArrayList<>();

    //2nd
//    @OneToMany(cascade = CascadeType.REMOVE)
//    @JoinColumn(name = "fk_userId", referencedColumnName = "userID")
//    private List<Package> package;




    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer userId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender")
    private String gender;

//    @Column(name = "userName", unique = true, nullable = false)
//    private String username;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", unique = true, nullable = false)
    private String password;

    @Column(name = "mobileNumber")
    private Integer mobileNumber;

    @Column(name = "location")
    private String location;

//    public User() {
//
//    }

    public User(Integer userId,
                String firstName,
                String lastName,
                Integer age,
                String gender,
                String email,
                String password,
                Integer mobileNumber,
                String location) {

        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.location = location;
    }


    @OneToMany(mappedBy = "user")
    private List<Product> product = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Payment> payment = new ArrayList<>();

//    @ManyToOne
//    @JoinColumn(name = "package" , nullable = false)
//    private Package package;


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private LoginDetails loginDetails;

//    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//    @MapsId
//    @JoinColumn(name = "loginId", referencedColumnName = "loginId")
//    private LoginDetails loginDetails;

}
