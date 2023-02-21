import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './contact/contact.component';
import { SoldGalleryComponent } from './soldGallery/soldGallery.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery-sold', component: SoldGalleryComponent },
  { path: 'me', component: AboutComponent },
  { path: 'exhibition', component: ExhibitionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: GalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SoldGalleryComponent,
    ExhibitionComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    NgxGalleryModule,
    MatTabsModule,
    FlexLayoutModule,
    MatCardModule,
    //FontAwesomeModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
