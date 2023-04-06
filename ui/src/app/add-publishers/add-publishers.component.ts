import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-publishers',
  templateUrl: './add-publishers.component.html',
  styleUrls: ['./add-publishers.component.css']
})
export class AddPublishersComponent implements OnInit {

  publishersForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.publishersForm = this.formbuilder.group({
      name: ['', Validators.required],
      address: [],
      phone: [],
      email: []
    })
  }

  ngOnInit(): void {
  }
  savePublisher(){
    const publisherData = this.publishersForm.value;
   this.http.post('http://localhost:8080/publisher/savePublisher',publisherData).subscribe(
    response => {
      console.log('publisher Saved to DB' , response)
      this.router.navigateByUrl('/publishers')
    }, error => {
      console.error("Error in publisher save")
    }
   );
  }

}
