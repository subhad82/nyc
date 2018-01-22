import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent     {
    posts : Post[];
    constructor(private http : HttpClient){

        this.http.get<Post[]>('https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=0246280c0e584c40818bfd1caf876ca1').subscribe(x =>{
            this.posts = x.results;
            console.log(this.posts);
        })

    }
}
interface Post {

    userId : number;
    id : number;
    title : string;
    body : string ;
}

