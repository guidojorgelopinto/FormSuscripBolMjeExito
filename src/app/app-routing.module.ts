import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: NewsletterComponent, pathMatch: 'full' },
  { path: 'newsletter', component: NewsletterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
