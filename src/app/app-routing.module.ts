import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentListComponent } from './pages/talent-list/talent-list.component';

const routes: Routes = [{
  path:'talent-list',
  component: TalentListComponent
},
{
  path: '',
  redirectTo: 'talent-list',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
