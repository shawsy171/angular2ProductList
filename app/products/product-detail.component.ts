import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: string = 'Product';
    Product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router:  Router) {}

    ngOnInit (): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ` : ${id}`;
    }

    onBack (): void {
        this._router.navigate(['/products']);
    }
}
