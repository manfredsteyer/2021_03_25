import {Routes} from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';
import { ExitGuard } from '../shared/exit/exit.guard';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import { FlightResolver } from './flight-edit/flight.resolver';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
      {
        path: '',
        component: FlightBookingComponent,
        children: [
          {
            path: 'flight-search',
            component: FlightSearchComponent
          },
          {
            path: 'passenger-search',
            component: PassengerSearchComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'flight-edit/:id',
            component: FlightEditComponent,
            canDeactivate: [ExitGuard],
            resolve: {
              // eslint-disable-next-line quote-props
              'flight': FlightResolver
            }
          }
        ]
      },

]
