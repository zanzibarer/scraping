import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';
import { UpdateJobsService } from './update-jobs/update-jobs.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateJobsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpModule,
  ],
  providers: [UpdateJobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
