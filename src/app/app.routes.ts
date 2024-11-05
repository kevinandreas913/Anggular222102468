import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const routes: Routes = [
    {path: "admin", component: AdminComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "dashboard2", component: Dashboard2Component},
    {path: "dashboard3", component: Dashboard3Component},
    {path: "sign-up", component: SignUpComponent},
    {path: "login", component: LoginComponent},
    {path: "", redirectTo: "login", pathMatch: "full"}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }
