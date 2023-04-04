package com.fit2planet.demo.Controller;

import com.fit2planet.demo.DTO.ProductDTO;
import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
    @PostMapping("/addProducts")
    public List<Product> addProducts(@RequestBody List<Product> product) {
        return productService.saveProducts(product);
    }

    @GetMapping("/getProductById/{productId}")
    public Product findProductByProductId(@PathVariable int productId) {
        return productService.getByProductId(productId);
    }
    @GetMapping("/getProducts")
    public List<Product> findAllProducts() {
        return productService.getProducts();
    }

//    public List<ProductDTO> findAllProducts() {
//        return productService.getProducts();
//    }
    @GetMapping("/getProductByName/{productName}")
    public Product findByProductName(@PathVariable String productName) {
        return productService.getByProductName(productName);
    }

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

    @DeleteMapping("/delete/{productId}")
    public String deleteProduct(@PathVariable int productId) {
        return productService.deleteProduct(productId);
    }



    //with DTO package
    @GetMapping("/getPAll")
    public List<ProductDTO> getDTOProducts() {
        return productService.getDTOProducts();
    }

    @PostMapping("/add")
    public boolean addProduct(@RequestBody ProductDTO productDTO) {
        productService.addProduct(productDTO);
        return true;

    }

}
