import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  backendUrl='http://localhost:4000';

  postCarDetails(details){
    return this.http.post(`${this.backendUrl}/postCarDetails`,details);
  }

  getCarDetails(){
   return this.http.get(`${this.backendUrl}/getCarDetails`);
  }

  updateCarDetails(details){
    return this.http.post(`${this.backendUrl}/updateCarDetails`,details);
  }

  deleteCarDetails(id){
    return this.http.delete(`${this.backendUrl}/deleteCarDetails/${id}`);
  }

  
}
