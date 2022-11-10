import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleUrl = 'http://localhost:8880/backend/articles';  // URL to web api

  constructor(
    private http: HttpClient) { }
 
  /** GET articles from the server */
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.articleUrl)
  
}
  
}
