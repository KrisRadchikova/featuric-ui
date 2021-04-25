import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './page/start-page/start-page.component';
import {TestsCatalogPageComponent} from './page/tests-catalog-page/tests-catalog-page.component';

const routes: Routes = [

  {path: 'start', component: StartPageComponent},
  {path: 'tests_catalog', component: TestsCatalogPageComponent},
  {path: '**', redirectTo: 'start'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
