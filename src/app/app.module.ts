import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ListLivresComponent } from './components/list-livres/list-livres.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PresentationComponent,
    ListLivresComponent,
    SelectedLivreComponent,
    AboutUsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
