package com.fit2planet.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentId")
    private int paymentId;

    @Column(name = "paymentAmount")
    private double paymentAmount;

    @Column(name = "paymentTime")
    private Time paymentTime;

    @Column(name = "paymentDate")
    private Date paymentDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId" ,referencedColumnName = "userId",nullable = false)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coachI" ,referencedColumnName = "coachId",nullable = false)
    @JsonIgnore
    private Coach coach;

}
