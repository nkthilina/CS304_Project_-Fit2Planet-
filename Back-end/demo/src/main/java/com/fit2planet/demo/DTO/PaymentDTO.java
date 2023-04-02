package com.fit2planet.demo.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDTO {

    private int paymentId;
    private double paymentAmount;
    private Time paymentTime;
    private Date paymentDate;
    private int userId;
    private int coachId;
}
