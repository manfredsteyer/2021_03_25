import {Component, OnInit} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  showLoadingIndicator = false;
  
  
  constructor(private router: Router) {

  }
  
  ngOnInit(): void {
    // eslint-disable-next-line no-restricted-syntax
    // this.router.events.subscribe(event => console.debug('router event', event));
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
      debounceTime(500)
    ).subscribe(event => {

      if (event instanceof NavigationStart) { // TODO: Guards
        this.showLoadingIndicator = true;
      }
      else if (event instanceof NavigationEnd) { // TODO: Guards
        this.showLoadingIndicator = false;
      }

    });
  
  }


}
