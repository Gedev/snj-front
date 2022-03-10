import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategorieService} from "../../services/categorie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {

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
  updateCategorie(){
    if(this.categorieFormGroup.valid){
      const cat = this.categorieFormGroup.value;
      this._sServ.updateCategorie({
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
