import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ZoomComponent } from './components/zoom/zoom.component';
import { DrawComponent } from './components/draw/draw.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ZoomComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
