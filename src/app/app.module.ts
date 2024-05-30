import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { ColumnComponent } from './components/column/column.component';
import { TableComponent } from './components/table/table.component';
import { InfoBlocksComponent } from './components/info-blocks/info-blocks.component';
import { RunningLineComponent } from './components/running-line/running-line.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ColumnComponent,
    TableComponent,
    InfoBlocksComponent,
    RunningLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
