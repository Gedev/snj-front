import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../services/donation.service";
import {User} from "../../models/user";
import {Address} from "../../models/address";
import {Donation} from "../../models/donation";

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

  constructor(private dServ: DonationService) {
  }

  ngOnInit(): void {
    this.dServ.postUser({
        id: Date.now().toString().trim(),
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
      complete: () => console.log("Success")
    });
  }

  getOne() {
    this.dServ.getAll().subscribe({
      next: donations => this.listDonation = donations,
      error: tempError => alert("Failed to get all Donations from DB"),
      complete: () => console.log("getAll Succeded")
    })
  }
}
