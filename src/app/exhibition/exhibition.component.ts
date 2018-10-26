import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Exhibition} from '../shared/exhibition';
import {takeWhile} from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit, OnDestroy {

  exhibitions: Exhibition[];
  private alive: boolean;

  constructor(private helper: HelperService,
              public sanitizer: DomSanitizer) {
    this.alive = true;
    this.helper.getExhibitions().pipe(takeWhile(() => this.alive)).subscribe(data => this.exhibitions = data);
  }

  ngOnInit() {
    this.helper.loadLanguage();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
