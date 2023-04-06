import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  title='Students Management';
  students:any=[]
  
  isGreen=false  
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudents()
  }
  addStudents(){
    console.log("addStudents button clicked!!")
    //Take user to /add-students url
    this.router.navigateByUrl('/add-students')
  }
  fetchAllStudents(){
    this.http.get("http://localhost:8080/student/getAll")
    .subscribe(resp =>{
        this.students = resp;
        console.log('Studens retrived successfully : ',this.students)
      }, error => { 
        console.error('Error Retrieving students :', error)
    });
  }
  deleteStudent(studentsId:Number){
    console.log(studentsId)
    const url = 'http://localhost:8080/student/delete/' + studentsId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Student deleted successfully');
      this.fetchAllStudents()
    }, error => {
      console.error('Error Deleting Student : ', error);
    });

}
}
