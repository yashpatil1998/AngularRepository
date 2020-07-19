import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent,
    // DepartmentListComponent,
    // PageNotFoundComponent
    // DepartmentDetailComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
