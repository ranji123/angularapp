import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'add', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }