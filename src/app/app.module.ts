import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DemoMaterialModule} from './app.material.module';

import {DeviceDetectorModule} from 'ngx-device-detector';
import {HeaderComponent} from './header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {TreeComponent} from './tree/tree.component';

import {NgxElectronModule} from 'ngx-electron';
import {CodeComponent} from './code/code.component';

import {FormsModule} from '@angular/forms';

import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/htmlembedded/htmlembedded';
import {MatTab} from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { TerminalComponent } from './terminal/terminal.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    CodeComponent,
    TabsComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    CodemirrorModule,
    NgxElectronModule,
    MatSidenavModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot()
  ],
  entryComponents: [
    CodeComponent,
    TreeComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
