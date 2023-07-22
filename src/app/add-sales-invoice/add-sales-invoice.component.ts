import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypesAddedModel } from '../models/invoice/TypesAddedModel';
import { GenericService } from '../service-layer/generic.service';
import { Client } from '../models/client.model';
import { Envoice } from '../models/envoice.model';
import { EnvoiceService } from '../service-layer/envoice.service';


declare function paggnation(): any;
declare function sidebarToggling(): any
@Component({
  selector: 'app-add-sales-invoice',
  templateUrl: './add-sales-invoice.component.html',
  styleUrls: ['./add-sales-invoice.component.css']
})
export class AddSalesInvoiceComponent implements OnInit {
  addedTypesList = []

  envoiceTypes = ["I"]
  envoiceModel: Envoice = new Envoice();
  envoicesList: Array<Envoice> = [];
  clientsList: Array<Client> = [];
  constructor(private apiCall: EnvoiceService, public router: Router) { }

  ngOnInit(): void {
    // this.getAllBranches()
    // this.getAllTypes()
    // this.getAllUser()
    // this.getCountries() 
    sidebarToggling();
  }

  getAllBranches() {

  }
  getAllUser() {

  }

  getAllTypes() {

  }

  createInvocieType() {

  }
  calculateFinalEnvoice() {

  }
  setBranch() {
    // this.branchId = this.selectedBranch.branch_code
  }
  setUser() {
    // this.client_id = this.selectedUser.tax_number
  }
  setType() {
    // this.typeCode = this.selectedType.type_code
    // this.typePercentage = this.selectedType.tax_percentage
    // this.typeName = this.selectedType.type_name
    // this.typeUnit = this.selectedType.unit_of_measurment
    // this.typePrice = this.selectedType.price
    // this.accountTypeCode = this.selectedType.account_type_code
  }
  calculatePriceAndTotalPrice() {
    //this.price = this.amount*this.typePrice
    //this.price = this.typePrice
    //this.totalPrice = this.price - this.price*this.typePercentage/100
    // this.typeCommRatioValue = this.amount * this.typePrice * this.typeCommDisc / 100
    // this.totalPrice = (this.amount * this.typePrice) - (this.amount * this.typePrice) * this.typeCommDisc / 100
  }
  deleteType(type: any, index: any) {
    //for (let i = 0; i < this.addedTypesList.length; i++) {
    // if(this.addedTypesList[i].typeCode == type.typeCode){
    // this.addedTypesList.splice(index, 1);
    // // }
    // console.log(type)
    // if (Number(this.typesCounter) != 0) {
    //   this.typesCounter = this.typesCounter - 1;
    //   this.finalEnvoiceTotal = Math.abs(Number(type.total) - Number(this.finalEnvoiceTotal))
    //   this.finalEnvoiceTax = Math.abs(Number(this.finalEnvoiceTax) - (Number(type.value - type.total)))
    //   //this.settingDeductionRatio()
    //   this.totalAddedTax = Math.abs(this.totalAddedTax.toFixed(2) - type.typeAddedTax.toFixed(2))
    //   this.totalCommDisc = Math.abs(this.totalCommDisc.toFixed(2) - type.typeCommDisc.toFixed(2))
    //   this.totalBeforeTaxes = Math.abs(this.totalBeforeTaxes - type.value * type.amount)
    // }
    //}
    // this.deductionRatio = 0
    // this.deductionValue = 0
    // this.envoiceNet = 0
    // console.log(this.addedTypesList)
    // this.envoiceTypesList.splice(0, this.envoiceTypesList.length)
    // this.addedTypesList.forEach(val => this.envoiceTypesList.push(val.invoiceTypeCode));
    // console.log(this.envoiceTypesList)

  }
  settingDeductionRatio() {
    // this.deductionValue = Number(this.finalEnvoiceTotal) * Number(this.deductionRatio / 100);
    // this.envoiceNet = this.finalEnvoiceTotal + this.totalAddedTax - this.deductionValue
  }
  setPayment() {
    // this.payM = this.patmentType
  }
  createEnvoice() {
    // this.createEnvoiceReq = {
    //   "target": "invoice",
    //   "action": "create",
    //   "date": this.date,
    //   "client": this.client_id,
    //   "payment_type": this.payM,
    //   "branch": this.branchId,
    //   "discount_ratio": this.deductionRatio,
    //   "discount_value": this.deductionValue,
    //   "total_invoice": Number(this.envoiceNet),
    //   "notes": this.comment,
    //   "invoice_types": this.envoiceTypesList,
    //   "user_id": sessionStorage.getItem('userId'),
    //   "total_added_tax": this.totalAddedTax,
    //   "total_comm_tax": this.totalCommDisc,
    //   "total_before_taxes": this.totalBeforeTaxes,
    //   "country": this.selectedCountry.Desc_en,
    //   "countryCode": this.selectedCountry.code,
    //   "invoice_type": "invoice",
    //   "total_after_comm_tax": this.finalEnvoiceTotal,
    //   "deduction_value": this.deductionValue
    // }
    // this.apiCall.restServiceCall(this.createEnvoiceReq).subscribe(res => {
    //   this.router.navigate(['/salesInvoice']);
    // })

  }
  resetTypesModal() {
    // this.amount = 0
    // this.price = 0
    // this.totalPrice = 0
    // this.typeCommDisc = 0
    // this.typePrice = this.selectedType.price
  }

  changeTypePriceOnPurpose() {
    // this.typeCommRatioValue = this.amount * this.typePrice * this.typeCommDisc / 100
    // this.totalPrice = (this.amount * this.typePrice) - (this.amount * this.typePrice) * this.typeCommDisc / 100
  }


  getCountries() {
    // this.countriesReq = {
    //   "target": "static",
    //   "action": "get_all_elements",
    //   "table_name": "countries"
    // }
    // this.apiCall.restServiceCall(this.countriesReq).subscribe(res => {
    //   this.countriesRes = res
    //   this.countriesData = this.countriesRes.data
    //   if (this.initTable == false) {
    //     paggnation();
    //     this.initTable = true;
    //   }
    // })
  }

  setCountry() {
    // console.log(this.selectedCountry.Desc_ar)
  }
}
