import { Component, Input, OnInit } from '@angular/core';
import { ArticleLikeService } from 'src/app/services/article-like.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input()
  article: any;
  likeCount: number=0;
  deslikeCount: number=0;

  constructor(private articleLikeService: ArticleLikeService) { }

  ngOnInit(): void {
    this.getLikes()
  }

  getLikes() {
    this.articleLikeService.getLikesArticle(this.article).subscribe(art => {
      this.likeCount = art.filter(a => a.action).length
      this.deslikeCount = art.filter(a => !a.action).length
    });
  }

  like(): void {
    this.likeCount+=1;
    this.articleLikeService.setActionArticle(this.article, 1).subscribe(data => {
      console.log(data)
    });
  }

  deslike(): void {
    this.deslikeCount+=1; 
    this.articleLikeService.setActionArticle(this.article, 0).subscribe(data => {
      console.log(data)
    });
  }

}
