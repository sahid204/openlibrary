import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  studentsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.studentsForm = this.formbuilder.group({
      name: ['', Validators.required],
      dept: [],
      rollno: ['', Validators.required],
      birthDate: [],
      mobileNumber: []
    })
  }

  ngOnInit(): void {
  }
  saveStudent(){
    const studentsData = this.studentsForm.value;
   this.http.post('http://localhost:8080/student/saveStudent',studentsData).subscribe(
    response => {
      console.log('Student Saved to DB' , response)
      this.router.navigateByUrl('/students')
    }, error => {
      console.error("Error in Student save")
    }
   );
  }

}
