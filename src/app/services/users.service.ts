import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = environment.urlApi;
  http = this.injector.get(HttpClient);

  constructor(protected injector: Injector) {
  }

  getAll() {
    const url = `${this.urlApi}/users?per_page=10&delay=2`;
    return this.http.get(url)
      .pipe(
        map((e: any) => e.data)
      );
  }

  getUser(id) {
    const url = `${this.urlApi}/users/${id}`;
    return this.http.get(url)
      .pipe(
        map((e: any) => e.data)
      );
  }
}
