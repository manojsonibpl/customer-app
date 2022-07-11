import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);
const productModule = () => import('./product/product.module').then(x => x.ProductModule);

const routes: Routes = [
    { path: '', redirectTo: 'login' ,pathMatch:'full'},
    { path: "customer", loadChildren: customerModule, canActivate : [AuthGuard] },
    { path: "product", loadChildren: productModule , canActivate : [AuthGuard]},
    { path: "home",component:HomeComponent, canActivate : [AuthGuard] },
    { path: 'login', component:LoginComponent},
];

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }