import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from '../shared/helper.service';
import {Picture} from '../shared/picture';
import {takeWhile} from 'rxjs/operators';
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
        thumbnailsColumns: 6,
        thumbnailsMoveSize: 6,
        thumbnailsRows: 1,
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
        thumbnailsPercent: '25',
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewFullscreen: true,
      },
      // max-width 500
      {
        breakpoint: 500,
        width: '100%',
        height: '100%',
        imagePercent: 80,
        thumbnailsColumns: 3,
        thumbnailsMoveSize: 3,

      },
      // max-width 300
      {
        breakpoint: 300,
        width: '100%',
        height: '100%',
        thumbnailsColumns: 2,
        thumbnailsMoveSize: 2,

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
