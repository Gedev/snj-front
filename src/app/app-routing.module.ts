import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {UserComponent} from "./components/user/user.component";
import {DonationComponent} from "./components/donation/donation.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {CategoryComponent} from "./components/category/category.component";
import {UpdateCategoryComponent} from "./components/update-category/update-category.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserComponent },
  { path: 'donation', component: DonationComponent},
   { path: 'category', component: CategoryComponent },
   { path: 'addCategory', component: AddCategoryComponent },
  { path: 'updateCategory', component: UpdateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
