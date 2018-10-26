import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Contact} from '../shared/contact';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  contact: Contact;
  private alive: boolean;

  constructor(private helper: HelperService) {
    this.alive = true;
    this.helper.getContact().pipe(takeWhile(() => this.alive)).subscribe(data => this.contact = data);
  }

  ngOnInit() {
    this.helper.loadLanguage();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
