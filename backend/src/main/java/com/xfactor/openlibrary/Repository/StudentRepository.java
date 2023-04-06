package com.xfactor.openlibrary.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Student;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    
    List<Student> findByname(String name);
}
