import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { CategorieComponent } from './components/categorie/categorie.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    CategorieComponent,
    AddCategorieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
