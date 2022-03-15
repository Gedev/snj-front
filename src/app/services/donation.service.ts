import { Injectable } from '@angular/core';
import {DonationForm} from "../models/donation-form";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private _apiUrl = "http://localhost:8080/donation";

  constructor(private _donation: HttpClient) { }

  public postDonation(toPost: DonationForm): Observable<DonationForm> {
    return this._donation.post(this._apiUrl, toPost) as Observable<DonationForm>;
  }

  public getAll() : Observable<[Donation]> {
    return this._donation.get(this._apiUrl) as Observable<[Donation]>;
  }

  public getDonationById(idDon: string) : Observable<Donation> {
    const params = new HttpParams().set("id", idDon);
    return this._donation.get(this._apiUrl,{params}) as Observable<Donation>;
  }

  public delete(toDelete: string) : Observable<DonationForm> {
    console.log("ON VA SUPPRIMER l'id => "+toDelete);

    return this._donation.delete(this._apiUrl+"/"+toDelete) as Observable<Donation>;
  }

}
