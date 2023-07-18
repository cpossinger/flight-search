import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css'],
})
export class ListFlightsComponent implements OnChanges {
  @Input() selectedOrigin!: string;
  @Input() selectedDestination!: string;

  dataViewEmptyMessage: string = '';

  flights!: [];
  listFlightsURL = 'http://' + window.location.hostname +  ':3000/find-flights';

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOrigin'] || changes['selectedDestination']) {
      this.getFlights();
      this.setDataViewEmptyMessage();
    }
  }

  getFlights() {
    const params = {
      origin: this.selectedOrigin,
      destination: this.selectedDestination,
    };

    this.http
      .get<[]>(this.listFlightsURL, { params })
      .subscribe((response: []) => {
        console.log(response);
        this.flights = response;
      });
  }

  getFlightDuration(start: string, end: string): string {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const diff = Math.abs(endTime.getTime() - startTime.getTime());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${hours}h ${minutes}m`;
  }

  setDataViewEmptyMessage() {
    if (this.selectedOrigin === '' && this.selectedDestination === '') {
      this.dataViewEmptyMessage = 'Select an origin or destination';
    } else {
      this.dataViewEmptyMessage = 'No Flights Found';
    }
  }
}
