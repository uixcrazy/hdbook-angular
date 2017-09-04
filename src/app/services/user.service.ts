import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { API_ENDPOINTS } from '../helpers/api-endpoints';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(API_ENDPOINTS.users, this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(API_ENDPOINTS.users + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(API_ENDPOINTS.users, user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(API_ENDPOINTS.users + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(API_ENDPOINTS.users + id, this.jwt()).map((response: Response) => response.json());
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