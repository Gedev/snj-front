import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {Category} from "../../models/category";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  idCategory:Category|undefined;
  categoryFormGroup : FormGroup;

  constructor(
    private _sServ:CategoryService,
    private route:Router,
    private builer:FormBuilder) {
      this.categoryFormGroup=builer.group({
        'name':new FormControl(this.idCategory?.name.toString(),[Validators.minLength(2),Validators.required])
    });
  }

  ngOnInit(): void {
    this.idCategory=this._sServ.getCurrentCategory();
    this.categoryFormGroup=this.builer.group({
      'name':new FormControl(this.idCategory?.name.toString(),[Validators.minLength(2),Validators.required])
    });
  }
  updateCategory(){
    if(this.categoryFormGroup.valid){
      const cat = this.categoryFormGroup.value;
      this._sServ.updateCategory(this.idCategory?.id,{
        name:cat.name
      })
        .subscribe({
          next:(inserted)=>{
            this._sServ.setCurrentCategory(undefined);
            this.route.navigate(['/category']);
          },
          error:(error)=>{console.log(error);} });
    }
  }
}
