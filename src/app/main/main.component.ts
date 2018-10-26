import {Component, OnDestroy, OnInit} from '@angular/core';
import {Picture} from '../shared/picture';
import {HelperService} from '../shared/helper.service';
import {News} from '../shared/news';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  news: News;
  private alive: boolean;

  constructor(private helper: HelperService) {
    this.alive = true;
    this.helper.getNews().pipe(takeWhile(() => this.alive)).subscribe(data => this.news = data);
  }

  ngOnInit() {
    this.helper.loadLanguage();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
