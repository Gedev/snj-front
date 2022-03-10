import { Injectable } from '@angular/core';
import {DonationForm} from "../models/donation-form";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private _apiUrl = "http://localhost:8080/donation";

  constructor(private _donation: HttpClient) { }

  public postUser(toPost: DonationForm): Observable<DonationForm> {
    return this._donation.post(this._apiUrl, toPost) as Observable<DonationForm>;
  }

  public getAll() : Observable<[Donation]> {
    return this._donation.get(this._apiUrl) as Observable<[Donation]>;
  }
}
