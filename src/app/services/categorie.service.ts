import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";
import {CategorieForm} from "../models/forms/categorie-form";
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _apiURL = "http://localhost:8080/categorie";

  constructor(private _client:HttpClient) { }

  getAll(): Observable<Categorie[]> {
    return this._client.get(this._apiURL) as Observable<Categorie[]>
  }
  postCategorie(toPost: CategorieForm): Observable<Categorie> {
    return this._client.post(this._apiURL, toPost) as Observable<Categorie>;
  }
}
