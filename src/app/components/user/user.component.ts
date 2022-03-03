import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listUser: User[] = [];

  constructor(private _sServ:UserService) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this._sServ.getAll().subscribe({
      next: user => this.listUser = user,
      error: tempError => alert("Failed to get User list from the server"),
      complete: () => console.log("Success")
    });
  }
}
