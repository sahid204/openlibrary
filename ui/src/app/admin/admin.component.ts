import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title='Admins Management';
  admins:any=[]
  isGreen=false  
    
  
  constructor(private router : Router, private http: HttpClient) { }
  
    ngOnInit(): void {
      this.fetchAllAdmins()
    }
    addAdmin(){
      console.log("addAdmins button clicked!!")
      //Take user to /add-books url
      this.router.navigateByUrl("http://localhost:4200/add-admin")
    }
    fetchAllAdmins(){
      this.http.get("http://localhost:8080/admin/getAllAdmin")
      .subscribe(resp =>{
          this.admins = resp;
          console.log('Admins retrived successfully : ',this.admins)
        }, error => { 
          console.error('Error Retrieving books :', error)
      });
    }
    deleteAdmin(adminId:Number){
      console.log(adminId)
      const url = 'http://localhost:8080/admin/delete/' + adminId
      console.log(url)
      this.http.delete(url)
      .subscribe(resp => {
        console.log('Admin deleted successfully');
        this.fetchAllAdmins()
      }, error => {
        console.error('Error Deleting admin : ', error);
      });
    }

}
