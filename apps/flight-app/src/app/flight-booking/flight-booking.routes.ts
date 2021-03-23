import {Routes} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
      {
        path: 'flight-booking/flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-booking/passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-booking/flight-edit/:id',
        component: FlightEditComponent
      }

]
