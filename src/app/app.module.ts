import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateJobsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
