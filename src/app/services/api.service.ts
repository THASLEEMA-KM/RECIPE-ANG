import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL = 'https://recipe-server-ang.onrender.com'

  constructor(private http:HttpClient) { }

  getAllRecipeAPI(){
    return this.http.get(`${this.serverURL}/recipes`)
  }

  viewRecipeAPI(id:any){
    return this.http.get(`${this.serverURL}/${id}/view`)
  }
}
