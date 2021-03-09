"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopActions = void 0;
const gondola_1 = require("@logigear/gondola");
let ShopActions = class ShopActions {
    async checkTotalPayment(expected) {
        await gondola_1.gondola.click({ xpath: `//section[@class='content']/div[1]/button[@class='add']` }, "");
        await gondola_1.gondola.click({ xpath: `//section[@class='content']/div[2]/button[@class='add']` }, "");
        await gondola_1.gondola.click({ xpath: `//section[@class='content']/div[3]/button[@class='add']` }, "");
        await gondola_1.gondola.click({ css: `svg[width='30']` }, "");
        await gondola_1.gondola.checkControlExist({ xpath: `//h3[.='Total: $${expected}']` });
    }
};
__decorate([
    gondola_1.action("check total payment", "check total payment")
], ShopActions.prototype, "checkTotalPayment", null);
ShopActions = __decorate([
    gondola_1.actions
], ShopActions);
exports.ShopActions = ShopActions;
exports.default = new ShopActions();
//# sourceMappingURL=ShopActions.js.map