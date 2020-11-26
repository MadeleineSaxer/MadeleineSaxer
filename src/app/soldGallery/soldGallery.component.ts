import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Picture} from '../shared/picture';
import {publish, takeWhile} from 'rxjs/operators';
import 'hammerjs';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryLayout} from 'ngx-gallery';

@Component({
  selector: 'app-sold-gallery',
  templateUrl: './soldGallery.component.html',
  styleUrls: ['../gallery/gallery.component.css']
})
export class SoldGalleryComponent implements OnInit, OnDestroy {
  pictures: Picture[];
  private alive: boolean;
  galleryOptions;
  galleryImages: NgxGalleryImage[];

  constructor(private helper: HelperService) {
    this.alive = true;
    this.helper.getPicture().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.pictures = data;
      this.galleryImages = this.getGalleryImages(this.pictures);
    });
  }

  ngOnInit() {
    this.helper.loadLanguage();
    this.galleryImages = [];
    this.galleryOptions = [
      {
        thumbnailsColumns: 10,
        thumbnailsMoveSize: 10,
        thumbnailsRows: 5,
        imageAnimation: NgxGalleryAnimation.Slide,
        layout: NgxGalleryLayout.ThumbnailsBottom,
        imageDescription: true,
        imageArrows: true,
        imageSwipe: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailsRemainingCount: false,
        width: '100%',
        height: '500px',
        thumbnailsPercent: '100',
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewFullscreen: true,
        imagePercent: 0,
        image: false,
      },
      // max-width 800
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 800,
        width: '100%',
        height: '500px',
      },
      // max-width 500
      {
        thumbnailsColumns: 4,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 4,
        breakpoint: 500,
        width: '100%',
        height: '500px',
      },
      // max-width 300
      {
        thumbnailsColumns: 2,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 2,
        breakpoint: 300,
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getGalleryImages(pictures: Picture[]): NgxGalleryImage[] {
    const gallery: NgxGalleryImage[] = [];
    const path = 'assets/image/paintings/';
    pictures.forEach((picture: Picture) => {
      if (picture.sold !== true) {
        return;
      }
      gallery.push(
        {
          small: path + picture.url_min,
          medium: path + picture.url,
          big: path + picture.url,
          label: picture.caption,
          description: picture.title + ' <em>' + picture.size + '</em> <br\> ' + picture.desc
        });
    });
    return gallery;
  }
}
