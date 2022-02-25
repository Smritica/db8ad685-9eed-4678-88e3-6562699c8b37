import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DisplayUserComponent } from './display-user/display-user.component';
import{ AddUserComponent} from './adduser/adduser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
const routes: Routes = [
  {path: 'users', component: DisplayUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: '', redirectTo:'users',pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
