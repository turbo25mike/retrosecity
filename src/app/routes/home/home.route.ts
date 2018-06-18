import { Component } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
    selector: 'home-route',
    templateUrl: './home.route.html',
    styleUrls: ['./home.route.css']
})
export class HomeRoute {
    galleryOptions: NgxGalleryOptions[] = [
        {
            thumbnailsSwipe: true,
            previewSwipe: true,
            imageSwipe: true,
            width: '600px',
            height: '400px',
            thumbnailsColumns: 4,
            thumbnailsRemainingCount: true,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '400px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];
    galleryImages: NgxGalleryImage[] = [];
    productGalleryOptions: NgxGalleryOptions[] = [
        {
            previewSwipe: true,
            imageSwipe: true,
            width: '100%',
            height: '200px',
            thumbnails: false,
            imageAnimation: NgxGalleryAnimation.Fade,
            imageAutoPlayInterval: 5000,
            imageAutoPlay: true,
            imageArrows: false
        }
    ];

    cloudinaryRoot: string = "http://res.cloudinary.com/doboseecr/image/upload/v1505323891/";

    private logoGallery: Array<String> = [
        'design_zyq6u1',
        'Capture_o7oxuo',
        'Intel_o7g6at',
        'nato_gkwvfs',
        'ext_mhoc4e',
        'marjoni_logo_bkvlln'
    ];

    productGallery: Array<object> = [
        {
            title: 'Le Chaise',
            description: '',
            images: [
                this.generateNgxGalleryOptions('belgium_htmnse'),
                this.generateNgxGalleryOptions('0_wwgpjm'),
                this.generateNgxGalleryOptions('ext_3_gjaund')
            ]
        },
        {
            title: 'Le Table',
            description: '',
            images: [
                this.generateNgxGalleryOptions('ext_5_r322sj'),
                this.generateNgxGalleryOptions('ext_2_q2aoar'),
                this.generateNgxGalleryOptions('remember_g35rcw')
            ]
        },
        {
            title: 'Le Shirt',
            description: '',
            images: [
                this.generateNgxGalleryOptions('pamphlet_e1fqfp'),
                this.generateNgxGalleryOptions('moon_jszsdb'),
                this.generateNgxGalleryOptions('reedsx_k1htf5')
            ]
        },
        {
            title: 'Le Jeans',
            description: '',
            images: [
                this.generateNgxGalleryOptions('wi2_ij5gev'),
                this.generateNgxGalleryOptions('NWbeauty3_ggfmkc'),
                this.generateNgxGalleryOptions('man_nbmfuq'),
                this.generateNgxGalleryOptions('cmack2_nikrbj')
            ]
        },
    ];


    ngOnInit(): void {

        this.logoGallery.forEach(x => {
            this.galleryImages.push({
                small: this.cloudinaryRoot + x + '.jpg',
                medium: this.cloudinaryRoot + x + '.jpg',
                big: this.cloudinaryRoot + x + '.jpg'
            });
        });
    }

    private generateNgxGalleryOptions(x: string) {
        return {
            small: this.cloudinaryRoot + x + '.jpg',
            medium: this.cloudinaryRoot + x + '.jpg',
            big: this.cloudinaryRoot + x + '.jpg'
        }
    }
}
