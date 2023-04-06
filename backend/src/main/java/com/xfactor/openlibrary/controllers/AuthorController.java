package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Author;

import java.util.*;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repositories.AuthorRepository;

@RestController
@RequestMapping("author")
public class AuthorController {
   private AuthorRepository authorRepositories;

   public AuthorController(AuthorRepository authorRepositories) {
    this.authorRepositories = authorRepositories;
}
@PostMapping("/saveAuthor")
public Author saveAuthor(@RequestBody Author author) {
    authorRepositories.save(author);
    return author;
    

}

@GetMapping("/getAll")
public List<Author> getAllAuthor(){
    return authorRepositories.findAll();
}
@GetMapping("findTotal")
    public Long findTotal() {
        return authorRepositories.count();
    }
    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        authorRepositories.deleteById(id);
    }
    @GetMapping("findByName/{name}")
    public List<Author> findByName(@PathVariable String name) {
        List<Author> authors = authorRepositories.findByName(name);
        return authors;
    }

}

