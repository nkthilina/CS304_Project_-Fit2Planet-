package com.fit2planet.demo.Service;

import com.fit2planet.demo.DTO.ProductDTO;
import com.fit2planet.demo.Model.Product;
import com.fit2planet.demo.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public void addProduct(ProductDTO productDTO) {
        Product product = modelMapper.map(productDTO,Product.class);
        productRepository.save(product);
    }

    public List<ProductDTO> getAllProducts() {
        List<Product> productList = productRepository.findAll();
        return modelMapper.map(productList,new TypeToken<List<ProductDTO>>(){}.getType());
    }

    public Product getProductByProductId(Integer productId) {
        return productRepository.getProductByProductId(productId);
    }

    public void deleteProductByProductId(Integer productId) {
        productRepository.deleteById(productId);
    }

    public void updateProduct(Integer productId,
                              String productName,
                              float productPrice,
                              String productDesc,
                              int productQuality) {
        Product product = productRepository.getReferenceById(productId);
        product.setProductName(productName);
        product.setProductPrice(productPrice);
        product.setProductDesc(productDesc);
        product.setProductQuality(productQuality);
    }



}
