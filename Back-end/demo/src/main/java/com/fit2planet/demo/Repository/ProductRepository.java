package com.fit2planet.demo.Repository;

import com.fit2planet.demo.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Product findByProductName(String productName);

    Product getProductByProductId(Integer productId);
}
