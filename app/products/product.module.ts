import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule {}
