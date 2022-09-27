import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
 public title : string;
 public list : Product[];

  constructor() { }

  ngOnInit(): void {
    this.title="MyStore App"
    this.list=[
      {
        id:12,
        name: 'T-Shirt 1',
        description: 'nice T-shirt',
        price: 90 , 
        nbrLike:23,
        picture: 'https://w7.pngwing.com/pngs/712/583/png-transparent-poster-t-shirt-rock-music-punk-rock-rock-posters.png',
        quantity:3
      },
      {
        id:13,
        name: 'T-Shirt 2',
        description: 'https://ae01.alicdn.com/kf/HTB1dSkhKpXXXXX2XpXXq6xXFXXXU/camisetas-masculinas-Mens-t-shirts-fashion-tshirts-Punk-Style-Man-t-shirts-Rock-Band-tee-shirts.jpg',
        price: 80 , 
        nbrLike:0,
        picture: 'hhhhh',
        quantity:0
      }
    ]
  }
incrementLike(product:Product):void {
  let i = this.list.indexOf(product); 
  if(i!=-1) {
    this.list[i].nbrLike++
    //cnx to backend side
  }
}
buyproduct(product:Product):void {
  let i = this.list.indexOf(product); 
  if(i!=-1) {
    this.list[i].quantity--
    //cnx to backend side
}
}
}
