import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryComponent} from './gallery/gallery.component';
import {ExhibitionComponent} from './exhibition/exhibition.component';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxGalleryModule} from 'ngx-gallery';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'me', component: AboutComponent},
  {path: 'exhibition', component: ExhibitionComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: GalleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxGalleryModule,
    MatTabsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    MatCardModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
