import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categorieFormGroup : FormGroup;
  constructor(
    private _sServ:CategoryService,
    private route:Router,
    builer:FormBuilder) {
    this.categorieFormGroup=builer.group({
      'name':new FormControl(null,[Validators.minLength(2),Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addCategorie(){
    if(this.categorieFormGroup.valid){
      const cat = this.categorieFormGroup.value;
      this._sServ.postCategorie({
        name:cat.name
      })
        .subscribe({
          next:(inserted)=>{
            this.route.navigate(['/category']);
          },
          error:(error)=>{console.log(error);} });
    }
  }
}
