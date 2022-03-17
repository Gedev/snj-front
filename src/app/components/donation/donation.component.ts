import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../services/donation.service";
import {User} from "../../models/user";
import {Address} from "../../models/address";
import {Donation} from "../../models/donation";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  listDonation: Donation[] = [];
  found: Donation = {
    id:"",
    title:"",
    amount:0,
    hasCategory:false,
    isCash:false,
    quantity:0,
    donator:{
      id:0,
      firstname:"",
      address:{
        country:"",
        town:"",
        street:"",
        postCode:""
      },
      birthdate:new Date(),
      lastname:""
    }
  };
  selectedDon: number = -1;
  donFormGroup: FormGroup;
  onlyOne: boolean= false;

  constructor(builder: FormBuilder, private dServ: DonationService) {
    this.donFormGroup = builder.group({
      'idDonation': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.dServ.postDonation({
        title: "Donation depuis front",
        hasCategory: false,
        quantity: 0,
        amount: 5000,
        isCash: true,
        donator: {
          id: 11111,
          lastname: "Balboa",
          firstname: "Rocky",
          birthdate: new Date(),
          address: {
            country: "Chicago",
            postCode: "3518",
            street: "street",
            town: "town"
          }
        }
      }
    ).subscribe({
      next: donation => console.log("Added donation: "+JSON.stringify(donation)),
      error: tempError => alert("Failed to add Donation in DB"),
      complete: () => console.log("Add one Succeded")
    });
  }

  getAll() {
    this.onlyOne = false;
    this.found.id = "";
    this.dServ.getAll().subscribe({
      next: donations => this.listDonation = donations,
      error: tempError => alert("Failed to get all Donations from DB"),
      complete: () => console.log("getAll Succeded")
    })
  }

  getById() {
    this.onlyOne = true;
    let v = this.donFormGroup.value;
    console.log("Click on RECHERCHE: ID = "+v.idDonation);
    this.dServ.getDonationById(v.idDonation).subscribe({
      next: donation => {
        console.log("Found donation: "+JSON.stringify(donation));
        this.found = donation;
      },
      error: tempError => alert("Failed to find Donation in DB"),
      complete: () => console.log("getById Succeded")
    });
  }

  selectedIndex(i: number) {
    this.selectedDon = i;
  }

  deleteDonation() {
    if(this.selectedDon != -1){
      this.dServ.delete(this.listDonation[this.selectedDon].id).subscribe({
        next: donation => {
          console.log("Deleted donation: "+JSON.stringify(donation));
          const v = this.listDonation[this.selectedDon];
          this.listDonation.forEach( (item, index) => {
            if(item === v)
              this.listDonation.splice(index,1);
          });
        },
        error: tempError => alert("Failed to delete Donation from DB"),
        complete: () => console.log("Deleted Succeded")
      });
    }
  }
}
