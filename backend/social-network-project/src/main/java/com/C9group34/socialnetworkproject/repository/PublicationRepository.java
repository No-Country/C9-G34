package com.C9group34.socialnetworkproject.repository;

import com.C9group34.socialnetworkproject.models.Publication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PublicationRepository extends JpaRepository<Publication, Integer> {
    @Query(
            value = "SELECT * FROM PUBLICATIONS p WHERE p.category_id = :categoryId",
            nativeQuery = true)
    List<Publication> retrieveAllPublicationsByCategory(Integer categoryId);
}