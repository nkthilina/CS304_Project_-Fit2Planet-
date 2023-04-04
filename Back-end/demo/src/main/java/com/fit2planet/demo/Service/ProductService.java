package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.ProductDTO;
import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

//    @Autowired
//    private ModelMapper modelMapper;

    private final ModelMapper modelMapper = new ModelMapper();

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



    //with DTO package
    public List<ProductDTO> getDTOProducts() {
        List<Product> productList = productRepository.findAll();
        return modelMapper.map(productList, new TypeToken<List<ProductDTO>>(){}.getType());
    }

    public void addProduct(ProductDTO productDTO) {
        try {
            Product p = modelMapper.map(productDTO, Product.class);
            productRepository.save(p);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
