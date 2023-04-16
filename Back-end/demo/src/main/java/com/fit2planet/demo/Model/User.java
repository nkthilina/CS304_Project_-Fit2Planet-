package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
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

    @Column(name = "mobileNumber")
    private Integer mobileNumber;

    @Column(name = "location")
    private String location;


    @OneToMany(mappedBy = "user")
    private List<Product> product = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Payment> payment = new ArrayList<>();

}
