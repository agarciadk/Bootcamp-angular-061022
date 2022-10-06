import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../constants';
import { Pet } from '../../../../types';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getOwners(): Observable<any> {
    return this.httpClient.get(`${API_URL}/api/owners`);
  }

  deletePet(petId: number): Observable<any> {
    return this.httpClient.delete(`${API_URL}/api/pets/${petId}`);
  }

  addPet(pet: Pet): Observable<any> {
    return this.httpClient.post(`${API_URL}/api/owners/${pet.ownerId}/pets`, pet);
  }

}
