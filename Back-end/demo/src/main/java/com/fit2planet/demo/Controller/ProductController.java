package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.ProductDTO;
import com.fit2planet.demo.DTO.UserDTO;
import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Model.User;
import com.fit2planet.demo.Service.ProductService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    //with DTO package
    @PostMapping("/add")
    public String addProduct(@RequestBody ProductDTO productDTO){
        productService.addProduct(productDTO);
        return "Product is successfully added";
    }

    @GetMapping("/getAll")
    public List<ProductDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/get/{productId}")
    public Product getProductByProductId(@PathVariable Integer productId) {
        return productService.getProductByProductId(productId);
    }

    @DeleteMapping("/delete/{productId}")
    public String deleteProductByProductId(@PathVariable Integer productId){
        productService.deleteProductByProductId(productId);
        return "Product with productId "+productId+" is successfully removed";
    }

    @PutMapping("/update/{productId}")
    public String updateProduct(@PathVariable Integer productId, @RequestBody @NotNull ProductDTO productDTO) {
        productService.updateProduct(
                productId,
                productDTO.getProductName(),
                productDTO.getProductPrice(),
                productDTO.getProductDesc(),
                productDTO.getProductQuality()
        );
        return "Product with productId "+productId+" is successfully updated";
    }

}
