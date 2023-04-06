package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Book;

import java.util.*;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.xfactor.openlibrary.domain.Book;
import com.xfactor.openlibrary.repositories.BookRepository;


@RestController
@RequestMapping("book")
public class BookController {

    private BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    @PostMapping("/saveBook")
    public Book saveBook(@RequestBody Book book){
        bookRepository.save(book);
        return book;
        
    }
    
    @GetMapping("/getAll")
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    @GetMapping("findTotal")
    public Long findTotal() {
        return bookRepository.count();
    }
    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    @GetMapping("findByisbn/{isbn}")
    public List<Book> findByisbn(@PathVariable String isbn) {
        List<Book> books = bookRepository.findByIsbn(isbn);
        return books;
    }

@PutMapping("/updateBook")
    public Book updateBook(@RequestBody Book book) {
        if (book.getId() != null) {
            Book book2 = bookRepository.save(book);
            return book2;
        }
        return null;

    }

}
