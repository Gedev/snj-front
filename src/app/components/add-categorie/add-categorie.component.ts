import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {
  categorieFormGroup : FormGroup;
  constructor(
    private _sServ:CategorieService,
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
            this.route.navigate(['/categorie']);
          },
          error:(error)=>{console.log(error);} });
    }
  }
}
