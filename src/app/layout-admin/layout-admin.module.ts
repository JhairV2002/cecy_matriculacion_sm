import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    MainAdminComponent,
    DashboardAdminComponent,
  ],
  imports: [CommonModule, LayoutAdminRoutingModule],
})
export class LayoutAdminModule {}
