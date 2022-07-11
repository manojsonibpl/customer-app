import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';

// const routes: Routes = [
//     {
//         path: '',
//         children: [
//             { path: 'customersearch', component: CustomerSearchComponent },
//             { path: 'customerdetail', component: CustomerDetailComponent }
//         ]
//     }
// ]

const routes: Routes = [

    { path: 'customersearch', component: CustomerSearchComponent },
    { path: 'customerdetail/:id', component: CustomerDetailComponent }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
