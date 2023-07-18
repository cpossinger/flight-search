import {
  Component,
  Input,
  Injectable,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-select-station',
  templateUrl: './select-station.component.html',
  styleUrls: ['./select-station.component.css'],
})
export class SelectStationComponent {
  @Input() stationType!: string;

  stations: string[] = [];
  suggestStationsUrl = 'http://' + window.location.hostname + ':3000/suggest-station';

  @Output() selectedStation: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.selectedStation.emit('');
  }

  constructor(private http: HttpClient) {}

  suggestStations(event: AutoCompleteCompleteEvent) {
    const params = {
      searchStr: event.query,
      stationType: this.stationType,
    };

    this.http
      .get<string[]>(this.suggestStationsUrl, { params })
      .subscribe((response: string[]) => {
        console.log(response);
        this.stations = response;
      });
  }

  sendSelectedStation(station: string) {
    this.selectedStation.emit(station.slice(0, 3));
  }

  clearSelectedStation() {
    this.selectedStation.emit('');
  }
}
