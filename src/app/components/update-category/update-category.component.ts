import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

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
  updateCategorie(){
    if(this.categorieFormGroup.valid){
      const cat = this.categorieFormGroup.value;
      this._sServ.updateCategorie({
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
