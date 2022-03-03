import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiURL = "http://localhost:8080/user";
  constructor(private _client:HttpClient) { }

  getAll(): Observable<User[]> {
    return this._client.get(this._apiURL) as Observable<User[]>
  }
}
