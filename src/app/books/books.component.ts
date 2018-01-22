import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

    postys : Posty[];
    constructor(private http : HttpClient){

        this.http.get<Posty[]>('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=0246280c0e584c40818bfd1caf876ca1').subscribe(x =>{
            this.postys = x.results;
            console.log(this.postys);
        })

    }




}
interface Posty {

    userId : number;
    id : number;
    title : string;
    body : string ;
}