import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomSelectComponent } from './custom-select/custom-select.component';

const routes: Routes = [
  { path: 'custom', component: CustomSelectComponent },
  {path: '*' , component: CustomSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
