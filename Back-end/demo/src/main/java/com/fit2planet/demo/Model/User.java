package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

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
    private int userId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "age")
    private int age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "userName")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "mobileNumber")
    private int mobileNumber;

    @Column(name = "location")
    private String location;

//    public User() {
//
//    }

    public User(int userId,
                String firstName,
                String lastName,
                int age,
                String gender,
                String username,
                String email,
                String password,
                int mobileNumber,
                String location) {

        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.location = location;
    }


    @OneToMany(mappedBy = "user")
    private List<Product> product;

    //from package class
//    @ManyToOne
//    @JoinColumn(name = "package" , nullable = false)
//    private Package package;


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private LoginDetails loginDetails;

}
