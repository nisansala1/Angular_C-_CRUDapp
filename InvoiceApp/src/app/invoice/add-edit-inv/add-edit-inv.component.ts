import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-add-edit-inv',
  templateUrl: './add-edit-inv.component.html',
  styleUrls: ['./add-edit-inv.component.css']
})
export class AddEditInvComponent implements OnInit {

  @Input() invoice:any;
  InvoiceId:string = "";
  CustomerName: string ="";
  
  TransactionDate: string ="";
  Products: string ="";
  Quantity: string ="";
  Discount: string ="";
  Total: string ="";
  

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.InvoiceId = this.invoice.InvocieId;
    this.CustomerName = this.invoice.CustomerName;
    this.TransactionDate = this.invoice.TransactionDate;
    this.Products=this.invoice.Products
    this.Quantity = this.invoice.Quantity;
    this.Discount = this.invoice.Discount
    this.Total = this.invoice.Total;
  }

  addInvoice(){
    var val = {
      CustomerName:this.CustomerName,
      TransactionDate:this.TransactionDate,
      Products:this.Products,
      Quantity : this.Quantity,
      Discount : this.Discount,
      Total : this.Total
      
     };
      this.service.addInvoice(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateInvoice(){
    var val = {InvoiceId:this.InvoiceId,
      CustomerName:this.CustomerName,
      TransactionDate:this.TransactionDate,
      Products:this.Products,
      Quantity : this.Quantity,
      Discount : this.Discount,
      Total : this.Total};
      this.service.updateInvoice(val).subscribe(res =>{
        alert(res.toString());
    })
  }

}
