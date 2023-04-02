package com.fit2planet.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productId")
    private int productId;

    @Column(name = "productName")
    private String productName;

    @Column(name = "productPrice")
    private float productPrice;

    @Column(name = "productDesc")
    private String productDesc;

    @Column(name = "productQuality")
    private int productQuality;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId" , nullable = false)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coachId" , nullable = false)
    @JsonIgnore
    private Coach coach;

}
