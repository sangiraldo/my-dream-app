import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  name = "Santiago giraldo";
  imgURL = "https://ichef.bbci.co.uk/news/624/cpsprodpb/5D01/production/_95790832_gettyimages-516700094.jpg";
  imgRestURL = "https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg";

  constructor(public http: HttpClient) { }

  ngOnInit() { }

  cambiarNombre() {
    this.name = 'Santiago Giraldo Mejia';
  }

  getColor() {
    return 'blue';
  }

  getImg() {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random')
      .subscribe((json) => {
        this.imgRestURL = json.message;
      });
  }

}
