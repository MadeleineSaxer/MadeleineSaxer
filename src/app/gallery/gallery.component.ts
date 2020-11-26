import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Picture} from '../shared/picture';
import {publish, takeWhile} from 'rxjs/operators';
import 'hammerjs';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryLayout} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
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
        layout: NgxGalleryLayout.ThumbnailsTop,
        imageDescription: true,
        imageArrows: true,
        imageSwipe: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailsRemainingCount: false,
        width: '100%',
        height: '100%',
        thumbnailsPercent: '100',
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewFullscreen: true,
        imagePercent: 0,
        image: false,
      },
      // max-width 1300
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 1300,
      },
      // max-width 800
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 800,
      },
      // max-width 700
      {
        thumbnailsColumns: 3,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 4,
        breakpoint: 700,
      },
      // max-width 500
      {
        thumbnailsColumns: 2,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 2,
        breakpoint: 500,
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
      if (picture.sold !== false) {
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
