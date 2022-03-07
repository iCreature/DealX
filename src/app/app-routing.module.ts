import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { ShowComponent } from './information/show/show.component';
import { SearchComponent } from './information/search/search.component';

const routes: Routes = [
  {path :'',component : InformationComponent},
  {path :'information',component : ShowComponent},
  {path :'search',component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
