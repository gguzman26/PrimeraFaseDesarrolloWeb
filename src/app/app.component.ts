import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parcial';
  articles: any = [];

  constructor(private articleService: ArticleService) {
    //
  }

  ngOnInit(): void {
    this.getAllArticles()
  }

  getAllArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
