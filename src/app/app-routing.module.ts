import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {UserComponent} from "./components/user/user.component";
import {DonationComponent} from "./components/donation/donation.component";
import {ProjectComponent} from "./components/project/project.component";
import {UpdateCategoryComponent} from "./components/update-category/update-category.component";
import {CategoryComponent} from "./components/category/category.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {AddProjectComponent} from "./components/project/add-project/add-project.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserComponent },
  { path: 'donation', component: DonationComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'updateCategory', component: UpdateCategoryComponent },
  { path: 'project', component: ProjectComponent},
  { path: 'addProject', component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
