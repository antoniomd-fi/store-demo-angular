import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "store",
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
