import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
}) 
export class AddAuthorComponent implements OnInit {
  authorsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.authorsForm = this.formbuilder.group({
      name: ['', Validators.required],
      birthDate: [],
      nationality: []
    })
  }
  ngOnInit(): void {
  }
  saveAuthor(){
    const authorData = this.authorsForm.value;
   this.http.post('http://localhost:8080/author/saveAuthor',authorData).subscribe(
    response => {
      console.log('Author Saved to DB' , response)
      this.router.navigateByUrl('/authors')
    }, error => {
      console.error("Error in Author save")
    }
   );
  }
  

}
