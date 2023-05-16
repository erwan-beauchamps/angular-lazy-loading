import { ThirdFeatureComponent } from './third-feature/third-feature.component';
import { SecondFeatureComponent } from './second-feature/second-feature.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'second-feature'
  },
  {
    path: 'first-feature',
    loadChildren: () => import('./first-feature/first-feature.module').then(m => m.FirstFeatureModule)
  },
  {
    path: 'second-feature',
    component: SecondFeatureComponent
  },
  {
    path: 'third-feature',
    component: ThirdFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
