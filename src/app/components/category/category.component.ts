import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import {Router} from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  trash=faTrashAlt;
  edit=faEdit;
  listCategories: Category[] = [];
  constructor(private _sServ:CategoryService,private route:Router) { }

  ngOnInit(): void {
    this.loadCategory()
  }

  loadCategory(){
    this._sServ.getAll().subscribe({
      next: category => this.listCategories = category,
      error: err => alert("Failed to get Categories list from the server"),
      complete: () => console.log("Success")
    });
  }
  updateCategory(currentCategory:Category){
    this._sServ.setCurrentCategory(currentCategory);
    this.route.navigate(['/updateCategory']);
  }
}
