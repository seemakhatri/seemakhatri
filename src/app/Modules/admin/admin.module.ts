import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './components/shop/shop.component';



@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AdminModule { }
