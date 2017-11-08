"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var store_module_1 = require("./store/store.module");
var store_component_1 = require("./store/store.component");
var checkout_component_1 = require("./store/checkout.component");
var cartDetail_component_1 = require("./store/cartDetail.component");
var router_1 = require("@angular/router");
var storeFirst_guard_1 = require("./storeFirst.guard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, store_module_1.StoreModule,
                router_1.RouterModule.forRoot([
                    {
                        path: "store", component: store_component_1.StoreComponent,
                        canActivate: [storeFirst_guard_1.StoreFirstGuard]
                    },
                    {
                        path: "cart", component: cartDetail_component_1.CartDetailComponent,
                        canActivate: [storeFirst_guard_1.StoreFirstGuard]
                    },
                    {
                        path: "checkout", component: checkout_component_1.CheckoutComponent,
                        canActivate: [storeFirst_guard_1.StoreFirstGuard]
                    },
                    { path: "**", redirectTo: "/store" }
                ])],
            providers: [storeFirst_guard_1.StoreFirstGuard],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
