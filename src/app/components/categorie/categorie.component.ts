import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../models/categorie";
import {CategorieService} from "../../services/categorie.service";

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  trash=faTrashAlt;

  listCategories: Categorie[] = [];

  constructor(private _sServ:CategorieService) { }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories(){
    this._sServ.getAll().subscribe({
      next: categorie => this.listCategories = categorie,
      error: err => alert("Failed to get Categories list from the server"),
      complete: () => console.log("Success")
    });
  }
}
