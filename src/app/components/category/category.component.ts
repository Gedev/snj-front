import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  trash=faTrashAlt;

  listCategories: Category[] = [];

  constructor(private _sServ:CategoryService) { }

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
