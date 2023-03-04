package com.C9group34.socialnetworkproject.service;


import com.C9group34.socialnetworkproject.dto.CategoryDto;
import com.C9group34.socialnetworkproject.dto.PublicationDto;
import com.C9group34.socialnetworkproject.models.Category;
import com.C9group34.socialnetworkproject.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    PublicationService publicationService;

    public CategoryDto create(Category c){

        return this.mapToDto(categoryRepository.save(c));
    }


    public List<CategoryDto> getAll(){

        List<CategoryDto> categoriesToReturn = new ArrayList<>();
        List<Category> categories = categoryRepository.findAll();
        categories.forEach(c -> categoriesToReturn.add(mapToDto(c)));
        return categoriesToReturn;
    }

    private CategoryDto mapToDto(Category c){
        List <PublicationDto> allPublicationsOfACategory = publicationService.retrieveAllPublicationsList();
        return new CategoryDto().builder()
                .id(c.getId())
                .publications(allPublicationsOfACategory)
                .description(c.getDescription())
                .title(c.getTitle())
                .build();
    }
}
