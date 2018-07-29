import { Component, OnInit ,Input, Output} from '@angular/core';
import { ProductService } from '../services/product.service';
import { List } from '../models/List';
import {  EventEmitter} from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
  

export class AddProductComponent implements OnInit {
  private newList :List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
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
  	this.listServ.addList(this.newList).subscribe(
  		response=> {
  			
        if(response.success== true)
        swal("Good job!", "You clicked the button!", "success");
  				this.addList.emit(this.newList);
  		},
	);

	}
}

//export class AddProductComponent {  name = 'addproduct';}