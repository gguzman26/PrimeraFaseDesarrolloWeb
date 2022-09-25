import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArticleLikeService {

  private baseUrl = 'http://localhost:8080';  // URL to web api

  constructor(
    private http: HttpClient) { }


  /** GET articles from the server */
  setActionArticle(article: any, action: number): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl+'/article/'+article.id+'/like', { action: action, comment: 'Send to like of Angular' })
  }

  getLikesArticle(article: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/article/'+article.id+'/like')
  }
}
