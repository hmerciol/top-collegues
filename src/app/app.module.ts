import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { VueClassiqueComponent } from './vue-classique/vue-classique.component';
import { VueTableauComponent } from './vue-tableau/vue-tableau.component';
import { VueCarrouselComponent } from './vue-carrousel/vue-carrousel.component';
import { VueDetailComponent } from './vue-detail/vue-detail.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltresComponent } from './filtres/filtres.component';
import { FiltrePipe } from './shared/pipe/filtre.pipe';


const appRoutes: Routes = [
  {path:'classique',component:VueClassiqueComponent},
  {path:'tableau',component:VueTableauComponent},
  {path:'carrousel',component:VueCarrouselComponent},
  {path:'detail/:pseudo',component:VueDetailComponent},
  {path:'**',redirectTo:'classique'}
];


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    VueClassiqueComponent,
    VueTableauComponent,
    VueCarrouselComponent,
    VueDetailComponent,
    FormulaireComponent,
    NavigationComponent,
    ScorePipe,
    FiltresComponent,
    FiltrePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
