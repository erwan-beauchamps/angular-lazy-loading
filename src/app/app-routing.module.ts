import { ThirdFeatureComponent } from './third-feature/third-feature.component';
import { SecondFeatureComponent } from './second-feature/second-feature.component';
import { FirstFeatureComponent } from './first-feature/first-feature.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-feature'
  },
  {
    path: 'first-feature',
    component: FirstFeatureComponent
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
