package com.fit2planet.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class PackageDTO {

    private int packageId;
    private Time activatedTime;
    private Date activatedDate;
    private int userId;

}
