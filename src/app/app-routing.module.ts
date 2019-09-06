import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'main-dashboard',
    component: MainDashboardComponent,
    children: [
      {
        path: '',
        component: HomeDashboardComponent
      },
      {
        path: 'home-dashboard',
        component: HomeDashboardComponent
      },
      {
        path: 'update-user',
        component: UpdateUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
