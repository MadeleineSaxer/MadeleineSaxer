import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Me} from '../shared/me';
import {takeWhile} from 'rxjs/operators';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  me: Me;
  contact: Contact;
  private alive: boolean;

  constructor(private helper: HelperService) {
    this.alive = true;
    this.helper.getAboutMe().pipe(takeWhile(() => this.alive)).subscribe(data => this.me = data);
    this.helper.getContact().pipe(takeWhile(() => this.alive)).subscribe(data => this.contact = data);
  }

  ngOnInit() {
    this.helper.loadLanguage();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
