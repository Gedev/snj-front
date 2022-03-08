import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {UserComponent} from "./components/user/user.component";
import {DonationComponent} from "./components/donation/donation.component";
// import {CategorieComponent} from "./components/categorie/categorie.component";
// import {AddCategorieComponent} from "./components/add-categorie/add-categorie.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserComponent },
  { path: 'donation', component: DonationComponent}
  // { path: 'categorie', component: CategorieComponent },
  // { path: 'addCategorie', component: AddCategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
