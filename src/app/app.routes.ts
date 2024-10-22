import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path: "admin", component: AdminComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "login", component: LoginComponent},
    {path: "sign-up", component: SignUpComponent},
    {path: "", redirectTo: "login", pathMatch: "full"}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }
