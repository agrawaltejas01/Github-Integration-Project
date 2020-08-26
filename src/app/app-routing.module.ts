import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SyncIssueComponent } from './issues/sync-issue/sync-issue.component';

const routes: Routes = [
  {
    path: "**",
    component: SyncIssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
