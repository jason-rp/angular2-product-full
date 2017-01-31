import { Component } from '@angular/core';
import {ProductService} from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
        <h1>{{productType}} </h1>
        <pm-products></pm-products>
    `,
    providers:[ProductService]
})
export class AppComponent {
    productType: string = 'Product Demo';
 }
