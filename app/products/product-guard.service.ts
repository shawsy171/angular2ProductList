import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';


export class ProductDetailGuard implements CanActivate {

    canActivate (route: ActivatedRouteSnapshot ) : boolean {

        // console.log(ActivatedRoute);
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            alert('Invaild product Id');
            // redirect to list page
            this._router.navigate(['/products']);

            return false;
        }
        return true;
    }
}