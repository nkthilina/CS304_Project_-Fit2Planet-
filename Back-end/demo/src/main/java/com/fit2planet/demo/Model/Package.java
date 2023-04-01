package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "package")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Package {

//    @ManyToOne
//    @JoinColumn(name = "userId", nullable = false)
//    private User user;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "packageId")
    private int packageId;


    private LocalTime activatedTime;

    private LocalDate activatedDate;

//    from user class
//    @OneToMany(mappedBy = "package")
//    private List<User> user;


}
