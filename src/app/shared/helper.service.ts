import {combineLatest, Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataDto} from './data.dto';
import {Language} from './language';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Contact} from './contact';
import {ExhibitionDto, ExhibitionOpeningsDto} from './exhibition.dto';
import {ContactDto} from './contact.dto';
import {Exhibition, ExhibitionOpenings} from './exhibition';
import {Me} from './me';
import {MeDto} from './me.dto';
import {Picture} from './picture';
import {PictureDto} from './picture.dto';
import {NewsDto} from './news.dto';
import {News} from './news';
import {NavigatortextDto} from './navigatortextDto';
import {Navigatortext} from './navigatortext';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

  json: Observable<DataDto>;
  language: Subject<Language>;
  private lastLanguage: Language;

  constructor(private http: HttpClient) {
    this.json = this.getJSON();
    this.language = new Subject<Language>();
    this.setLanguage({isEnglish: false, isGerman: true});
  }

  private setLanguage(language: Language) {
    this.lastLanguage = language;
    this.language.next(language);
  }

  public changeLanguage(language: Language) {
    this.setLanguage(language);
  }

  public loadLanguage() {
    this.language.next(this.lastLanguage);
  }

  public getLanguage(): Observable<Language> {
    return this.language;
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  getContact(): Observable<Contact> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const contactDto: ContactDto = data.contact;
      if (language.isGerman) {
        return contactDto.de;
      }
      return contactDto.en;
    }));
  }

  getNavigator(): Observable<Navigatortext> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const navigatorDto: NavigatortextDto = data.navigator;
      if (language.isGerman) {
        return navigatorDto.de;
    }
      return navigatorDto.en;
    }));
  }

  getNews(): Observable<News> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const newsDto: NewsDto = data.news;
      const news: News = new News();
      news.href = newsDto.href;
      if (language.isGerman) {
        news.buttontext = newsDto.de.buttontext;
        news.desc = newsDto.de.desc;
        news.desc2 = newsDto.de.desc2;
        news.title = newsDto.de.title;
      } else {
        news.buttontext = newsDto.en.buttontext;
        news.desc = newsDto.en.desc;
        news.desc2 = newsDto.en.desc2;
        news.title = newsDto.en.title;
      }
      return news;
    }));
  }

  getAboutMe(): Observable<Me> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const meDto: MeDto = data.me;
      const me: Me = new Me();
      me.picture = meDto.picture;
      if (language.isGerman) {
        me.text = meDto.de.text;
        me.title = meDto.de.title;
      } else {
        me.text = meDto.en.text;
        me.title = meDto.en.title;
      }
      return me;
    }));
  }

  getPicture(): Observable<Picture[]> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const pictureDtos: PictureDto[] = data.picture;
      const pictures: Picture[] = [];
      if (language.isGerman) {
        pictureDtos.forEach((p: PictureDto) => pictures.push(this.getPictureDe(p)));
      } else {
        pictureDtos.forEach((p: PictureDto) => pictures.push(this.getPictureEn(p)));
      }
      return pictures;
    }));
  }

  getPictureDe(pictureDto: PictureDto): Picture {
    const picture: Picture = new Picture();
    picture.size = pictureDto.size;
    picture.url = pictureDto.url;
    picture.url_min = pictureDto.url_min;
    picture.caption = pictureDto.de.caption;
    picture.desc = pictureDto.de.desc;
    picture.title = pictureDto.de.title;
    return picture;
  }

  getPictureEn(pictureDto: PictureDto): Picture {
    const picture: Picture = new Picture();
    picture.size = pictureDto.size;
    picture.url = pictureDto.url;
    picture.url_min = pictureDto.url_min;
    picture.caption = pictureDto.en.caption;
    picture.desc = pictureDto.en.desc;
    picture.title = pictureDto.en.title;
    return picture;
  }


  getExhibitions(): Observable<Exhibition[]> {
    return combineLatest(this.json, this.language).pipe(map(([data, language]) => {
      const exhibitionDto: ExhibitionDto[] = data.exhibition;
      const exhibition: Exhibition[] = [];
      if (language.isGerman) {
        exhibitionDto.forEach((e: ExhibitionDto) => exhibition.push(this.getDeExhibition(e)));
      } else {
        exhibitionDto.forEach((e: ExhibitionDto) => exhibition.push(this.getEnExhibition(e)));
      }
      return exhibition;
    }));
  }

  getDeExhibition(exhibitionDto: ExhibitionDto) {
    const openings: ExhibitionOpenings[] = [];
    exhibitionDto.opening.forEach((o: ExhibitionOpeningsDto) => {
      return openings.push(<ExhibitionOpenings>{from: o.from, to: o.to, day: o.day.de});
    });
    const exhibition: Exhibition = {
      title: exhibitionDto.de.title,
      text: exhibitionDto.de.text,
      picture_alt_text: exhibitionDto.de.picture_alt_text,
      url: exhibitionDto.url,
      date_start: exhibitionDto['date-start'],
      date_end: exhibitionDto['date-end'],
      print_version: exhibitionDto['print-version'],
      contact: {
        url: exhibitionDto.contact.url,
        text: exhibitionDto.contact.text.de
      },
      vernissage: {
        title: exhibitionDto.vernissage.title.de,
        from: exhibitionDto.vernissage.from,
        date: exhibitionDto.vernissage.date
      },
      finissage: {
        title: exhibitionDto.finissage.title.de,
        from: exhibitionDto.finissage.from,
        date: exhibitionDto.finissage.date,
      },
      opening_text: exhibitionDto.opening_text.de,
      opening: openings,
      picture_url: exhibitionDto.picture_url,
    };
    return exhibition;
  }

  getEnExhibition(exhibitionDto: ExhibitionDto) {
    const openings: ExhibitionOpenings[] = [];
    exhibitionDto.opening.forEach((o: ExhibitionOpeningsDto) => {
      return openings.push(<ExhibitionOpenings>{from: o.from, to: o.to, day: o.day.en});
    });
    const exhibition: Exhibition = {
      title: exhibitionDto.en.title,
      text: exhibitionDto.en.text,
      picture_alt_text: exhibitionDto.en.picture_alt_text,
      url: exhibitionDto.url,
      date_start: exhibitionDto['date-start'],
      date_end: exhibitionDto['date-end'],
      print_version: exhibitionDto['print-version'],
      contact: {
        url: exhibitionDto.contact.url,
        text: exhibitionDto.contact.text.en
      },
      vernissage: {
        title: exhibitionDto.vernissage.title.en,
        from: exhibitionDto.vernissage.from,
        date: exhibitionDto.vernissage.date
      },
      finissage: {
        title: exhibitionDto.finissage.title.en,
        from: exhibitionDto.finissage.from,
        date: exhibitionDto.finissage.date,
      },
      opening_text: exhibitionDto.opening_text.en,
      opening: openings,
      picture_url: exhibitionDto.picture_url,
    };
    return exhibition;
  }
}
