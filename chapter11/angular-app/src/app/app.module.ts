import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { BroadcastService } from './services/broadcast.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [BroadcastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
