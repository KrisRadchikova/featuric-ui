import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ToolBarComponent} from './view/tool-bar-view/tool-bar.component';
import {StartPageComponent} from './page/start-page/start-page.component';
import {LoaderViewComponent} from './view/loader-view/loader-view.component';
import {TestsCatalogPageComponent} from './page/tests-catalog-page/tests-catalog-page.component';
import {TestCardViewComponent} from './view/test-card-view/test-card-view.component';
import {CategoryViewComponent} from './view/category-view/category-view.component';
import {DialogContentComponent} from './view/test-card-view/dialog/dialog-content';
import {TestBeginningComponent} from './page/test-beginning/test-beginning.component';
import {PlayViewComponent} from './view/play-view/play-view.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CountdownModule} from 'ngx-countdown';
import {ClipboardModule} from 'ngx-clipboard';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {LoaderService} from './serivce/loader.service';

import {LoaderInterceptor} from './serivce/interceptors/loader.interceptor';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    StartPageComponent,
    LoaderViewComponent,
    TestsCatalogPageComponent,
    TestCardViewComponent,
    CategoryViewComponent,
    DialogContentComponent,
    TestBeginningComponent,
    PlayViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    CountdownModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru'
    })
  ],
  providers: [
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
