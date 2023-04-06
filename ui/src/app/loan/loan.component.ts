import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  title='Loans Management';
  loans:any=[]
  isGreen=false 
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllLoans()
  }
  addLoan(){
    console.log("addLoans button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('/add-loans')
  }
  fetchAllLoans(){
    this.http.get("http://localhost:8080/loan/getAllLoan")
    .subscribe(resp =>{
        this.loans = resp;
        console.log('Loans retrived successfully : ',this.loans)
      }, error => { 
        console.error('Error Retrieving loans :', error)
    });
  }
  deleteLoan(loanId:Number){
    console.log(loanId)
    const url = 'http://localhost:8080/loan/delete/' + loanId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Loan deleted successfully');
      this.fetchAllLoans()
    }, error => {
      console.error('Error Deleting loan : ', error);
    });
  }
 
}
