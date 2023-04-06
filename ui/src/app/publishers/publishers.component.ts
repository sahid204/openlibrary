import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  title='Publishers Management';
  publishers:any=[]
  isGreen=false
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublishers()
  }
  addPublishers(){
    console.log("addPublishers button clicked!!")
    //Take user to /add-publishers url
    this.router.navigateByUrl('/add-publishers')
  }
  fetchAllPublishers(){
    this.http.get("http://localhost:8080/publisher/getAll")
    .subscribe(resp =>{
        this.publishers = resp;
        console.log('Publishers retrived successfully : ',this.publishers)
      }, error => { 
        console.error('Error Retrieving publishers :', error)
    });
  }
  deletePublisher(publisherId:Number){
    console.log(publisherId)
    const url = 'http://localhost:8080/publisher/delete/' + publisherId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Publisher deleted successfully');
      this.fetchAllPublishers()
    }, error => {
      console.error('Error Deleting publisher : ', error);
    });
  }


}
