import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Product, Auction, ProductAuction } from './../model';

@Component({
  selector: 'product-preview',
  templateUrl: '/src/components/auction-market/product-preview/product-preview.component.html'
})

export class ProductPreviewComponent implements OnChanges {
  @Input() auction: Auction;
  @Input() currentProductAuction: number;
  auctionPreview: ProductAuction[];
  safeProductLinks: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.auctionPreview = this.auction.productAuctions.slice(this.currentProductAuction + 1, this.currentProductAuction + 4);
    this.safeProductLinks = this.auctionPreview.map(
      productAuction => {
        return this.sanitizer.bypassSecurityTrustResourceUrl(productAuction.product.specLink)
      }
    )
  }
}