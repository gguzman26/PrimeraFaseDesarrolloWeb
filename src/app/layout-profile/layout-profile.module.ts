import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutProfileRoutingModule } from './layout-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ArticleService } from '../services/article.service';
import { ArticleLikeService } from '../services/article-like.service';
import { ArticleComponent } from '../components/article/article.component';


@NgModule({
  declarations: [ProfileComponent, ArticleComponent],
  imports: [
    CommonModule,
    
    LayoutProfileRoutingModule
  ],
  providers : [ArticleService]
})
export class LayoutProfileModule { }
