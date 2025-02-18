import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Welcome Home'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Welcome to Users'
    }
];
