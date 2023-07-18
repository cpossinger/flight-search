import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectStationComponent } from './select-station/select-station.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [AppComponent, SelectStationComponent, ListFlightsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    HttpClientModule,
    ToolbarModule,
    AutoCompleteModule,
    DataViewModule,
    TimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
