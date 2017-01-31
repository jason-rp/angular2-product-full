import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list-component.html',
    styleUrls: ['product-list-component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    products: IProduct[];

    constructor(private _productService: ProductService) {
    }
    showHideImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('OnInit');
        this._productService.getProducts()
            .subscribe(products => this.products = products);
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
};