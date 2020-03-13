import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponenentComponent } from './core/header-componenent/header-componenent.component';
import { FooterComponentComponent } from './core/footer-component/footer-component.component';
import { HomeComponentComponent } from './shared/components/home-component/home-component.component';
import { MoviesComponentComponent } from './shared/components/movies-component/movies-component.component';
import { DetailsComponentComponent } from './shared/components/details-component/details-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    MoviesComponentComponent,
    DetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
