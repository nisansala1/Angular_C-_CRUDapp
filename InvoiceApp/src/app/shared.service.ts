import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  readonly APIUrl = "https://localhost:44342/api/";
  
   
    constructor(private https: HttpClient) {}
    getInvoiceList(): Observable < any[] > {
        return this.https.get < any > (this.APIUrl + 'Invoice');
    }
    addInvoice(val: any) {
        return this.https.post (this.APIUrl + 'Invoice', val);
    }
    updateInvoice(val: any) {
        return this.https.put(this.APIUrl + 'Invoice', val);
    }
    deleteInvoice(id: any) {
        return this.https.delete(this.APIUrl + 'Invoice/' + id);
    }
   
   
}
