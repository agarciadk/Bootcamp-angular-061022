import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../constants';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {

  constructor(private httpClient: HttpClient) { }

  getPetTypes(): Observable<any> {
    return this.httpClient.get(`${API_URL}/api/pettypes`);
  }

}
