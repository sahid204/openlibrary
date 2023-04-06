package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Admin;

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


import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.repositories.AdminRepository;

@RestController
@RequestMapping("admin")
public class AdmiinController{
    private AdminRepository adminRepository;
    public AdmiinController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/saveAdmin")
    public Admin saveAdmin(@RequestBody Admin admin){
        adminRepository.save(admin);
        return admin;
    }

    @GetMapping("/getAllAdmin")
    public List<Admin> getAllAdmin(){
        return adminRepository.findAll();
    }
    @GetMapping("findTotal")
    public Long findTotal() {
        return adminRepository.count();
    }
    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }
    @GetMapping("findByusername/{username}")
    public List<Admin> findByusername(@PathVariable String username) {
        List<Admin> admin = adminRepository.findByusername(username);
        return admin;
    }
    @PutMapping("/updateAdmin")
    public Admin updateBook(@RequestBody Admin admin) {
        if (admin.getId() != null) {
            Admin admin2 = adminRepository.save(admin);
            return admin2;
        }
        return null;

    }




}