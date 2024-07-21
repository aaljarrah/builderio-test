import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { BuilderModule } from '@builder.io/angular';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule.forRoot("2107d529dde941029e22c1a062500866"), // <-- import here and add API Key
    RouterModule.forRoot([
      {
        path: '**',
        component: LandingPageComponent, // <-- add LandingPageComponent here
      },
    ]),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
