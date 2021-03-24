
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CustomPreloadStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {

        // route.path
        if (route.data && route.data.preload) {
            return load();
        }
        return of(false);

        // return of(true).pipe(
        //     delay(7000),
        //     switchMap(_ => load())
        // );

    }

}