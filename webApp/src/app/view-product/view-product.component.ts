import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { List } from '../models/List';



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {
  //lists propoerty which is an array of List type
  private lists: List[] = [];


  constructor(private listServ: ProductService) { }

  ngOnInit() {
  }

}
