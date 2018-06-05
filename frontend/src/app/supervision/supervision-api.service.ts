import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Image} from './image.model';

@Injectable()
export class SupervisionApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getImage(): Observable<Object> {
    return this.http
      .get(`${API_URL}/image`)
      .catch(SupervisionApiService._handleError);
  }
}
