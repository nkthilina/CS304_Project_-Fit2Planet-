package com.fit2planet.demo.Service;

import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Repository.PackageRepository;
import com.fit2planet.demo.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
    public List<Product> saveProducts(List<Product> product) {
        return productRepository.saveAll(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    public Product getByProductId(int productId) {
        return productRepository.findById(productId).orElse(null);
    }
    public Product getByProductName(String productName) {
        return productRepository.findByProductName(productName);
    }

    public String deleteProduct(int productId) {
        productRepository.deleteById(productId);
        return "Product "+productId+" removed successfully";
    }

    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getProductId()).orElse(null);
        existingProduct.setProductName(product.getProductName());
        existingProduct.setProductPrice(product.getProductPrice());
        existingProduct.setProductDesc(product.getProductDesc());
        existingProduct.setProductQuality(product.getProductQuality());
        return productRepository.save(existingProduct);
    }

}
