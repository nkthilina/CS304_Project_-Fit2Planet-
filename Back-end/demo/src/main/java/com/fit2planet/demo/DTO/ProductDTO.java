package com.fit2planet.demo.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private int productId;
    private String productName;
    private float productPrice;
    private String productDesc;
    private int productQuality;
    private int userId;
    private int coachId;

}
