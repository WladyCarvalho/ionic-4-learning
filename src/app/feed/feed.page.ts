import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],

})

export class FeedPage implements OnInit {

  public nome_user:string = "Wlady shine";

  constructor() { }

  public somaDoisNumeros(num1:number,num2:number):void
  {
    alert(num1+num2);
  }

  ionViewDidLoad()
  {
   // this.somaDoisNumeros(3,6);
  }

  ngOnInit()
  {
    
  }

  
}
