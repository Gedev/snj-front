import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {CategoryForm} from "../models/forms/category-form";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _apiURL = "http://localhost:8080/category";
  private _category: Category | undefined;
  constructor(private _client:HttpClient) { }

  getAll(): Observable<Category[]> {
    return this._client.get(this._apiURL) as Observable<Category[]>
  }

  postCategory(toPost: CategoryForm): Observable<Category> {
    return this._client.post(this._apiURL, toPost) as Observable<Category>;
  }

  updateCategory(id:string|undefined, toPost:CategoryForm): Observable<Category> {

    const param = new HttpParams()
      .set('id', id==undefined?"":id);

    return this._client.patch(this._apiURL+"/update", toPost,{params:param}) as Observable<Category>;
  }

  getCurrentCategory(): Category | undefined {
    return this._category;
  }

  setCurrentCategory(value: Category|undefined) {
    this._category = value;
  }
}
