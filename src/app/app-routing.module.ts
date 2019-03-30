import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridsterModule } from 'angular-gridster2';
import { DxChartModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardWidgetModule, LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { AngularResizedEventModule } from 'angular-resize-event';

const routes: Routes = [
  {
    path: 'pages/dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    DxDataGridModule,
    DxFormModule,
    GridsterModule,
    DashboardWidgetModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, DashboardComponent]
})
export class AppRoutingModule { }
