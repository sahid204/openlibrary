package com.xfactor.openlibrary.controllers;

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

import com.xfactor.openlibrary.domain.Student;
import com.xfactor.openlibrary.repositories.StudentRepository;

@RestController
@RequestMapping("student")
public class StudentContoller {

private StudentRepository studentRepository;

public StudentContoller(StudentRepository studentRepository){
    this.studentRepository=studentRepository;
}

@PostMapping("/saveStudent")
public Student saveStudent(@RequestBody Student stud) {
    studentRepository.save(stud);
    return stud;
} 
    
        
        @GetMapping("/getAll")
        public List<Student> getAllBooks(){
            return studentRepository.findAll();
        }
        @GetMapping("findTotal")
    public Long findTotal() {
        return studentRepository.count();
    }
    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable int id) {
        studentRepository.deleteById(id);
    }
    @GetMapping("/getStudentById/{id}")
    public Student findById(@PathVariable int id) {
        Optional<Student> optionalOfStudent = studentRepository.findById(id);
        if (optionalOfStudent.isPresent()){
            return optionalOfStudent.get();
        }
        return null;
    }

    @GetMapping("findByname/{name}")
    public List<Student> findByname(@PathVariable String name) {
        List<Student> students = studentRepository.findByname(name);
        return students;
    }
        
}
