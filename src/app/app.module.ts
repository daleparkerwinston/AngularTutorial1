import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {WarningAlertComponent} from './alerts/warning-alert.component';
import {SuccessAlertComponent} from './alerts/success-alert.component';
import { UsernameComponent } from './username/username.component';
import { DirectivesComponent } from './directives/directives.component';
import {TimeStampComponent} from "./directives/timeStamp.component";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    DirectivesComponent,
    TimeStampComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
