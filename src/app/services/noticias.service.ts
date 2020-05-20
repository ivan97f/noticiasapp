import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLine(){
    return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=mx&apiKey=dd4fc01945f4466da3ad3db30cac9a7f');
  }
}