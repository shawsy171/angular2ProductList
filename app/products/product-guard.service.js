"use strict";
var ProductDetailGuard = (function () {
    function ProductDetailGuard() {
    }
    ProductDetailGuard.prototype.canActivate = function (route) {
        // console.log(ActivatedRoute);
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invaild product Id');
            // redirect to list page
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    };
    return ProductDetailGuard;
}());
exports.ProductDetailGuard = ProductDetailGuard;
//# sourceMappingURL=product-guard.service.js.map