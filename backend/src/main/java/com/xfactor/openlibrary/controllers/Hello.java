/*package com.xfactor.openlibrary.controllers;

import java.io.ObjectOutputStream.PutField;
import java.util.HashMap;

import javax.print.DocFlavor.STRING;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Hello {

    @GetMapping("/hello")
    public String hello(@RequestParam String name) {
        return "Hello World!! "+name;
    }
    @GetMapping("/hi/{name}/{college}/{age}")
        public String hi(@PathVariable String name,@PathVariable String college,@PathVariable int age,@RequestParam int balance){
            return "hello "+name+" your college name is "+college+" your age is "+ age+" your balance is "+balance;

        }
        @GetMapping("/maza/{name}/{age}")
        public HashMap<String,Object> maza(@PathVariable String name,@PathVariable int age){
            HashMap<String,Object> respHashMap=new HashMap<>();
            respHashMap.put("name", name);
            respHashMap.put("age",age);
            return respHashMap;
            

        }
    }    */
