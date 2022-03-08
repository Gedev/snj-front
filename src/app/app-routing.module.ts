import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {UserComponent} from "./components/user/user.component";
import {CategorieComponent} from "./components/categorie/categorie.component";
import {AddCategorieComponent} from "./components/add-categorie/add-categorie.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'addCategorie', component: AddCategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
