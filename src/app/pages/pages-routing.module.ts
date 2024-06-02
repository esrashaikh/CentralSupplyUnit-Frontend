import { RoleModule } from './role/role.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  {
    path:'',
    component:StarterComponent
  },
  {
    path:'warehouse',
    loadChildren: () => import ('./warehouse/warehouse.module').then((m) => m.WarehouseModule)
  },
  {
    path:'supplyDocument',
    loadChildren: () => import ('./supply-document/supply-document.module').then((m) => m.SupplyDocumentModule)
  },
  {
    path:'user',
    loadChildren: () => import ('./user/user.module').then((m) => m.UserModule)
  }
  ,
  {
    path:'role',
    loadChildren: () => import ('./role/role.module').then((m) => m.RoleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }