import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { ConnectionComponent } from './connection/connection.component';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';

const routes: Routes = [
    {path: '', redirectTo: 'connexion', pathMatch: 'full'},
    { path: 'listecomptes', component: AccountsListComponent},
    { path: 'connexion', component: ConnectionComponent },
    { path: 'detailcompte', component:DetailCompteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
