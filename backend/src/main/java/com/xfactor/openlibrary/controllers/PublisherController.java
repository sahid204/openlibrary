package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.publisher;

import java.util.ArrayList;
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

import com.xfactor.openlibrary.domain.publisher;
import com.xfactor.openlibrary.repositories.PublisherRepository;

@RestController
@RequestMapping("publisher")
public class PublisherController {
   private PublisherRepository publisherRepositories;

   public PublisherController(PublisherRepository publisherRepositories){
    this.publisherRepositories=publisherRepositories;
   }

    @PostMapping("/savePublisher")
    public publisher savePublisher(@RequestBody publisher Publisher){
        publisherRepositories.save(Publisher);
        return Publisher;
    }

@GetMapping("/getAll")
public List<publisher> getAllBooks(){
    return publisherRepositories.findAll();
}
@GetMapping("findById/{id}")
public publisher findById(@PathVariable int id) {
    Optional<publisher> optionalOfPublisher = publisherRepositories.findById(id);
    if (optionalOfPublisher.isPresent()) {
        return optionalOfPublisher.get();
    }
    return null;
}

@GetMapping("findTotal")
public Long findTotal() {
    return publisherRepositories.count();
}

@DeleteMapping("delete/{id}")
public void deleteBook(@PathVariable int id) {
    publisherRepositories.deleteById(id);
}
@GetMapping("/getPublisherByName/{name}")
    public List<publisher> findByName(@PathVariable String name) {
        List<publisher> listOfPublisherByName = publisherRepositories.findAll();
        return listOfPublisherByName;
    }

}
