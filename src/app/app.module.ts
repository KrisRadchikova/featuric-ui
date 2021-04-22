import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ToolBarComponent} from './view/tool-bar-view/tool-bar.component';
import {StartPageComponent} from './page/start-page/start-page.component';
import {LoaderViewComponent} from './view/loader-view/loader-view.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {LoaderService} from './serivce/loader.service';

import {LoaderInterceptor} from './serivce/interceptors/loader.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TestsCatalogPageComponent} from './page/tests-catalog-page/tests-catalog-page.component';
import {TestCardViewComponent} from './view/test-card-view/test-card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    StartPageComponent,
    LoaderViewComponent,
    TestsCatalogPageComponent,
    TestCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
