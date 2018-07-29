import { Component, OnInit ,Input, Output} from '@angular/core';
import { ProductService } from '../services/product.service';
import { List } from '../models/List';
import {  EventEmitter} from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-product',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
  

export class PlaceOrderComponent implements OnInit {
  private newList :List;
  @Output() purchase: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ProductService) { }
 
  ngOnInit() {
  	this.newList = {		
      product: '',
      inStock: '',
      productId : '',
      Product :'',
      quantityRequested:'',
      status:'',
      customerName:''
  	}
  }

  public onSubmit() {
  	console.log(this.newList.product);
  	this.listServ.purchase(this.newList).subscribe(
  		response=> {
  			
        if(response.success== true)
  				this.purchase.emit(this.newList);
  		},
	);

	}
}

//export class AddProductComponent {  name = 'addproduct';}