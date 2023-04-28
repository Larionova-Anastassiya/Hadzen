import { Component } from '@angular/core';
import { PexelPhotoSearchService } from '../pexelphotosearch.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent {
  searchData: any;
  perPage: any;
  photos: any[] | undefined;
  constructor(private pexelPhotoSearchService: PexelPhotoSearchService) { }

  search() {
    this.pexelPhotoSearchService.getdata(this.searchData, this.perPage).subscribe((response: any) => {
      console.log(response);
      this.photos = response.photos;
    }, (error) => {
      console.log(error);
    })
  }

}
