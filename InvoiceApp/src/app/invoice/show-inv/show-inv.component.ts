import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-inv',
  templateUrl: './show-inv.component.html',
  styleUrls: ['./show-inv.component.css']
})
export class ShowInvComponent implements OnInit {

  invoiceList:any = [];
  modalTitle:any;
  activateAddEditInvCom:boolean = false;
  invoice:any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshInvoiceList();
  }

  refreshInvoiceList() {
    this.sharedService.getInvoiceList().subscribe(data =>{
      this.invoiceList = data;
    });
  }

  AddInvoice(){
    this.invoice={
      InvoiceId:0,
      CustomerName:"",
      TransactionDate:"",
      Products:"",
      Discount:0,
      Quantity:0,
      Total:0
    }
    this.modalTitle = "Add Invoice";
    this.activateAddEditInvCom = true;
    this.refreshInvoiceList();
  }

  EditInvoice(item: any){
    this.invoice = item;
    this.activateAddEditInvCom = true;
    this.modalTitle = "Update Invoice";
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.sharedService.deleteInvoice(item.InvoiceId).subscribe(data =>{
        alert(data.toString());
        this.refreshInvoiceList();
      })
    }
  }

  closeClick(){
    this.activateAddEditInvCom=false;
    this.refreshInvoiceList();
  }

}
