import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from './shared/helper.service';
import {takeWhile} from 'rxjs/operators';
import {Language} from './shared/language';
import {Navigatortext} from './shared/navigatortext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  helper: HelperService;
  navigator: Navigatortext;
  private alive: boolean;
  private language: Language;

  constructor(helper: HelperService) {
    this.helper = helper;
    this.alive = true;
    this.helper.getNavigator().pipe(takeWhile(() => this.alive)).subscribe(data => this.navigator = data);
    this.helper.getLanguage().pipe(takeWhile(() => this.alive)).subscribe(data => this.language = data);
  }

  changeLanguage(language: Language) {
    this.helper.changeLanguage(language);
  }

  ngOnInit() {
    this.helper.loadLanguage();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  isGerman(): boolean {
    return this.language && this.language.isGerman;
  }

  isEnglish(): boolean {
    return this.language && this.language.isEnglish;
  }

}
