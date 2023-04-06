import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
title='Authors Management';
authors:any=[]

isGreen=false  
  

constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAuthors()
  }
  addAuthor(){
    console.log("addAuthors button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('http://localhost:4200/add-author')
  }
  fetchAllAuthors(){
    this.http.get("http://localhost:8080/author/getAll")
    .subscribe(resp =>{
        this.authors = resp;
        console.log('Books retrived successfully : ',this.authors)
      }, error => { 
        console.error('Error Retrieving books :', error)
    });
  }
  deleteAuthor(authorId:Number){
    console.log(authorId)
    const url = 'http://localhost:8080/author/delete/' + authorId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Author deleted successfully');
      this.fetchAllAuthors()
    }, error => {
      console.error('Error Deleting Author : ', error);
    });
  }

}
