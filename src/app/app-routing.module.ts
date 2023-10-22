import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ListLivresComponent } from './components/list-livres/list-livres.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [

  { path: 'presentation', title: 'Presentation', component: PresentationComponent },
  { path: 'livres', title: 'ListLivres', component: ListLivresComponent },
  { path: 'aboutus', title: 'About Us', component: AboutUsComponent },
  { path: 'livres/:identif', title: 'identif', component: SelectedLivreComponent },
  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
  { path: '**', title: 'error 404 ', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
