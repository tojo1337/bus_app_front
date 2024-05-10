import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"bus-list",component:BusListComponent},
    {path:"login",component:LoginComponent},
    {path:"sign-in",component:RegistrationComponent},
    {path:"forgot-password",component:ForgotPasswordComponent},
    {path:"**",component:NotFoundComponent}
];