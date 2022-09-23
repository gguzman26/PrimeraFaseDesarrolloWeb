import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',

})
export class FooterComponent implements OnInit {
  
  likeCount: number=0;
  deslikeCount: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  like(): void {
    this.likeCount+=1;
    if (this.deslikeCount >0){
      this.deslikeCount=0;
    } 
    console.log("Like",this.likeCount)
  }

  deslike(): void {
    this.deslikeCount+=1;
    if (this.likeCount >0){
      this.likeCount=0;
    } 
    console.log("Deslike",this.deslikeCount)
  }

}

