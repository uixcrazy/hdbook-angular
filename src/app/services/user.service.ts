import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { REST_ENDPOINTS } from '../helpers/rest- endpoints';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(REST_ENDPOINTS.users, this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(REST_ENDPOINTS.users + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(REST_ENDPOINTS.users, user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(REST_ENDPOINTS.users + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(REST_ENDPOINTS.users + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}