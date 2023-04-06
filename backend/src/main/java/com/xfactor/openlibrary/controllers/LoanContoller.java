package com.xfactor.openlibrary.controllers;

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

import com.xfactor.openlibrary.domain.Loan;
import com.xfactor.openlibrary.repositories.LoanRepository;

@RestController
@RequestMapping("loan")
public class LoanContoller{

    private LoanRepository loanRepositories;

     public LoanContoller(LoanRepository loanRepositories){
        this.loanRepositories=loanRepositories;
     }
    

    @PostMapping("/saveLoan")
    public Loan saveLoan(@RequestBody Loan loan){
        loanRepositories.save(loan);
        return loan;
    }

    @GetMapping("/getAllLoan")
    public List<Loan> getAllLoan(){
        return loanRepositories.findAll();
    }
    @GetMapping("findTotal")
    public Long findTotal() {
        return loanRepositories.count();
    }
    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
         loanRepositories.deleteById(id);
    }

}

