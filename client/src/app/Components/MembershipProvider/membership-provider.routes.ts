// Imports
import { Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { ResetComponent } from './Reset/reset.component';


export const MembershipProviderRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'reset', component: ResetComponent}
];
