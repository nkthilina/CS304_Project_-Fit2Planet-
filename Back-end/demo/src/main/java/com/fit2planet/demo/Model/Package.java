package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "package")
@Getter
@Setter
//@AllArgsConstructor
//@NoArgsConstructor

public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "packageId")
    private int packageId;

    @Column(name = "activatedTime")
    private Time activatedTime;

    @Column(name = "activatedDate")
    private Date activatedDate;

    public Package() {
    }

    public Package(int packageId, Time activatedTime, Date activatedDate, List<User> user) {
        this.packageId = packageId;
        this.activatedTime = activatedTime;
        this.activatedDate = activatedDate;
        this.user = user;
    }

    @OneToMany
    @JoinColumn(name = "packageId", referencedColumnName = "packageId")
    private List<User> user = new ArrayList<>();


}
