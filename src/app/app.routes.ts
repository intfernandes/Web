import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MembersListComponent },
      { path: 'members/:id', component: MemberDetailsComponent },
      { path: 'lists', component: ListComponent },
    ],
  },

  { path: 'messages', component: MessagesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'errors', component: TestErrorsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
