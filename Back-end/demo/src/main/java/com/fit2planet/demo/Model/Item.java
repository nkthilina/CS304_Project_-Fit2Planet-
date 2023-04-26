package com.fit2planet.demo.Model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "item")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "itemId")
    private int itemId;

    @Column(name = "name")
    private String name;
    @Column(name = "contactNumber")
    private int contactNumber;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "zip")
    private int zip;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "activatedTime")
    private Time activatedTime;
    @Column(name = "activatedDate")
    private Date activatedDate;

}
