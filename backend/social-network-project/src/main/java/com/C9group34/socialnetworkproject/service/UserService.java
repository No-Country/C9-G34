package com.C9group34.socialnetworkproject.service;

import com.C9group34.socialnetworkproject.dto.UserDto;
import com.C9group34.socialnetworkproject.exceptions.ExistingResourceException;
import com.C9group34.socialnetworkproject.exceptions.ResourceNotFoundException;
import com.C9group34.socialnetworkproject.models.User;
import com.C9group34.socialnetworkproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    /*
    private final UserRepository userRepository;
    private final PublicationService publicationService;
    private final FavoritePublicationService favoritePublicationService;*/


    // ------------cambio por autowired por simplicidad de codigo---------------


    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private  PublicationService publicationService;
    @Autowired
    private  FavoritePublicationService favoritePublicationService;


    public User register(UserDto userDto) {
        User user = mapToEntity(userDto);
        checkForExistingUser(user.getId());
        user = userRepository.save(user);
        return user;

    }

    public List<UserDto> retrieveAll() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> mapToDTO(user))
                .collect(Collectors.toList());
    }

    public Optional<UserDto> retrieveById(Integer userId) {
        Optional<User> user = userRepository.findById(userId);
        return Optional.of(mapToDTO(user.get()));
    }



    public Optional<UserDto> retrieveByIdWithFavoritePublications(Integer userId){
        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            throw new ResourceNotFoundException("El id del usuario que está buscando no existe.");
        }

        return mapToDTOWithFavoritePublications(user);
    }


    public void delete(Integer userId) {
        try {
            userRepository.deleteById(userId);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("No se pudo eliminar el usuario porque el id que está ingresando no existe.");
        }
    }

    public void replace(Integer userId, User userDTO) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(userId);
        // esta exception la controlaremos en el controller
        /*
        if (user.isEmpty()) {
            throw new ResourceNotFoundException();
        }*/
        User updatedUser;
        User userToReplace = user.get();
        new User();
        updatedUser = User.builder().id(userToReplace.getId())
                .name(userDTO.getName())
                .surname(userDTO.getSurname())
                .email(userDTO.getEmail())
                .phone(userDTO.getPhone())
                .password(userDTO.getPassword())
                .ratings(userDTO.getRatings()).build();
        userRepository.save(updatedUser);
    }

    public void modify(Integer userId, Map<String, Object> fieldsToModify) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException();
        }
        User userToModify = user.get();
        User userMofificated = User.builder()
                .id(userToModify.getId())
                .name(userToModify.getName())
                .surname(userToModify.getSurname())
                .email(userToModify.getEmail())
                .phone(userToModify.getPhone())
                .role(userToModify.getRole())
                .build();
        userRepository.save(userMofificated);
    }

    //estos serian para mapear
    private User mapToEntity(UserDto userDto) {

        new User();
        return User.builder().name(userDto.getName())
                .surname(userDto.getSurname())
                .email(userDto.getEmail())
                .phone(userDto.getPhone())
                .password(userDto.getPassword())
                .ratings(userDto.getRatings())
                .build();
    }

    private UserDto mapToDTO(User user) {

        return UserDto.builder().id(user.getId())
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .phone(user.getPhone())
                .password(user.getPassword())
                .ratings(user.getRatings())
                .build();
    }

    private Optional<UserDto> mapToDTOWithFavoritePublications(Optional<User> optionalUser) {
        if(optionalUser.isEmpty()){
            return Optional.empty();
        }
        User user = optionalUser.get();
        return Optional.ofNullable(UserDto.builder().id(user.getId())
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .phone(user.getPhone())
                .password(user.getPassword())
                .ratings(user.getRatings())
                .build());
    }

    //metodo para la exception
    private void checkForExistingUser(Integer userId) {
        if (userRepository.existsById(userId)) {
            throw new ExistingResourceException("El usuario que está intentando crear ya existe.");
        }
    }
}
