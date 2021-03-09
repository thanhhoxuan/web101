"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondola_1 = require("@logigear/gondola");
const ShopActions_1 = __importDefault(require("./../actions/ShopActions"));
gondola_1.TestModule("Demo Test Module");
gondola_1.TestCase("Demo 1", async () => {
    await gondola_1.gondola.navigate("https://demo.gondolatest.com");
    await ShopActions_1.default.checkTotalPayment("239.97");
}).tag("regression");
gondola_1.TestCase("Demo 2", async () => {
    await gondola_1.gondola.navigate("https://demo.gondolatest.com");
    await ShopActions_1.default.checkTotalPayment("239.98");
}).tag("smoke");
//# sourceMappingURL=demo_test.js.map