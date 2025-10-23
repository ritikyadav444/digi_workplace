import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { ToastsContainer } from './services/toaster/toaster.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
    ToastsContainer
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
