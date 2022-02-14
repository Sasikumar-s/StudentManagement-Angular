import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) { }

  url="http://localhost:3000/posts"
  getStudent(url:string):Observable<Object>{
    return this.httpclient.get(this.url)
  }

  addStudent(url:string,data:any){
    return this.httpclient.post(url,data);
  }
  deleteCall(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.url}/${id}`)
  }
  getById(id:number):Observable <Object>{
    return this.httpclient.get(`${this.url}/${id}`)
  }
  putcall(id:number,data:any){
    return this.httpclient.put(`${this.url}/${id}`,data)
  }

}
