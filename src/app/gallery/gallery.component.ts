import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() inputClass: string;
  @Input() imagePath: string;
  @Input() images: object[]; 
  @Input() width: string; 
  @Input() height: string; 
  @Input() imageSize: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor() { }

  ngOnInit() {
    this.setGalleryOptions();
    this.galleryImages = this.images;
  }

  setGalleryOptions() {

    this.galleryOptions = [
      {
          width: this.width,
          height: this.height,
          imageSwipe: true,
          imageSize: this.imageSize === "contain" ? NgxGalleryImageSize.Contain : NgxGalleryImageSize.Cover,
          imageAutoPlay: true,
          imageAutoPlayInterval: 5000,
          imageAutoPlayPauseOnHover: true,
          imageArrowsAutoHide: true,
          imageInfinityMove: true,
          thumbnailsColumns: 4,
          // thumbnailsPercent: 50,
          thumbnailsArrowsAutoHide: true,
          thumbnailsSwipe: true,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false,
          previewSwipe: true,
          previewAnimation: true,
          previewCloseOnEsc: true,
          previewCloseOnClick: true,
          previewKeyboardNavigation: true,
        
      },
      // max-width 800
      {
          breakpoint: 768,
          width: '100%',
          height: '115vw',
          imagePercent: 80,
          thumbnailsPercent: 20,
          
         
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
       }
    ];
  }

  setGalleryImages() {
    for (let image of this.images) {
      this.galleryImages.push({
        small: this.imagePath+image,
        medium: this.imagePath+image,
        big: this.imagePath+image
      })
    }
  }


}
