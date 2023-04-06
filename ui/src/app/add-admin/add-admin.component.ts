import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  adminsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.adminsForm = this.formbuilder.group({
      name: ['', Validators.required],
      username: [],
      password: []
    })
   }

   ngOnInit(): void {
  }
  saveAdmin(){
    const adminData = this.adminsForm.value;
   this.http.post('http://localhost:8080/admin/saveAdmin',adminData).subscribe(
    response => {
      console.log('Admin Saved to DB' , response)
      this.router.navigateByUrl('/admin')
    }, error => {
      console.error("Error in Admin save")
    }
   );
  }
}
