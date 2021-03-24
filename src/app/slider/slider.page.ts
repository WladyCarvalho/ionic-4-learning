import { TabsPage } from './../tabs/tabs.page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() 
  {

  }

  goTooTabsPage()
  {
    this.router.navigateByUrl("./../tabs/");
  }

}
