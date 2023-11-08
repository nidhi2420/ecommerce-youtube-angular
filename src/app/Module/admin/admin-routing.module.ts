import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  {path: '',component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"products",component:AdminProductsComponent},
    {path:"order",component:OrdersTableComponent},
    {path:"customer",component:CustomerComponent},
    {path:"create-product",component:CreateProductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
