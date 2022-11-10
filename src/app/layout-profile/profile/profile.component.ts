import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  articles: any = [];
  constructor(private articleService: ArticleService) {
    
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
