import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FirstCapital } from './myPipes/FirstCapital.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { AgePipe } from './myPipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestCompComponent,
    FirstCapital,
    AgePipe
  ],
  imports: [
  BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
