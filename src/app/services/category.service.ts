import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {CategoryForm} from "../models/forms/category-form";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _apiURL = "http://localhost:8080/category";

  constructor(private _client:HttpClient) { }

  getAll(): Observable<Category[]> {
    return this._client.get(this._apiURL) as Observable<Category[]>
  }
  postCategorie(toPost: CategoryForm): Observable<Category> {
    return this._client.post(this._apiURL, toPost) as Observable<Category>;
  }
  updateCategorie(toPost: CategoryForm): Observable<Category> {
    return this._client.patch(this._apiURL+"/update", toPost) as Observable<Category>;
  }
}
