package com.C9group34.socialnetworkproject.service;


import com.C9group34.socialnetworkproject.dto.PublicationDto;
import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.models.Category;
import com.C9group34.socialnetworkproject.models.Publication;
import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.repository.CategoryRepository;
import com.C9group34.socialnetworkproject.repository.PublicationRepository;
import com.C9group34.socialnetworkproject.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PublicationService {


    // ------------cambio por autowired por simplicidad de codigo---------------
    @Autowired
    private  PublicationRepository publicationRepository;
    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Publication> getAll() {
        return publicationRepository.findAll();
    }


    public Publication create(PublicationDto publicationDTO, Integer userId) {
        Optional<Category> categoryOptional = categoryRepository.findById(publicationDTO.getCategory());
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            Category category = categoryOptional.get();
            Publication publication = mapToEntity(publicationDTO, user, category);
            user.addPublication(publication);
            category.addPublication(publication);
            Publication publicationCreade = publicationRepository.save(publication);
            
        return publicationCreade;
        }
        return null;

    }


    @Transactional
    public List<PublicationDto> retrieveAll() {
        List<Publication> publications = publicationRepository.findAll();
        return publications.stream()
                .map(publication -> mapToDTO(publication))
                .collect(Collectors.toList());
    }

    public List<PublicationDto> retrieveAll(Integer userId) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("El id del usuario que está ingresando no existe.");
        }
        List<Publication> publications = publicationRepository.findAll();
        return publications.stream()
                .map(publication -> {
                    try {
                        return mapToDTO(publication, userId);
                    } catch (ResourceNotFoundException e) {
                        throw new RuntimeException(e);
                    }
                })
                .collect(Collectors.toList());
    }

    public PublicationDto retrieveById(Integer publicationId, Integer userId) throws ResourceNotFoundException {
        Optional<Publication> publication = publicationRepository.findById(publicationId);

        if (publication.isEmpty()) {
            throw new ResourceNotFoundException("El id de la publicacion que está buscando no existe.");
        }
        return mapToDTO(publication.get(), userId);
    }


    public void delete(Integer publicationId) throws ResourceNotFoundException {
        try {
            publicationRepository.deleteById(publicationId);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException();
        }
    }

    public void replace(Integer userId, Integer publicationId , PublicationDto publicationDto) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("El id del usuario que está ingresando no existe.");
        }
        Optional<Publication> publication = publicationRepository.findById(publicationId);
        if (publication.isEmpty()) {
            throw new ResourceNotFoundException("El id de la publicacion que está ingresando no existe.");
        }

        Publication updatedPublication;
        Publication publicationToReplace = publication.get();
        updatedPublication = new Publication().builder().id(publicationToReplace.getId())
                .title(publicationDto.getTitle())
                .description(publicationDto.getDescription())
                .urlImg(publicationDto.getImg())
                .user(publicationToReplace.getUser())
                .build();
        publicationRepository.save(updatedPublication);

    }





    private Publication mapToEntity(PublicationDto publicationDto , User user, Category category) {
        Double ratings = 0.0;
        return new Publication().builder()
                .title(publicationDto.getTitle())
                .description(publicationDto.getDescription())
                .urlImg(publicationDto.getImg())
                .rating(ratings)
                .user(user)
                .category(category)
                .build();
    }
    

    private PublicationDto mapToDTO(Publication publication, Integer userId) throws ResourceNotFoundException {
        // agregado de prueba

        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()){
            throw new ResourceNotFoundException("Usuario no encontrado");
        }
        PublicationDto.PublicationDtoBuilder publicationDto = new PublicationDto().builder().id(publication.getId())
                .title(publication.getTitle())
                .description(publication.getDescription())
                .img(publication.getUrlImg())
                .userProfileImg(userOptional.get().getImgProfile())
                .rating(publication.getRating());
        return publicationDto.build();
    }

}