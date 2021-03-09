"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gondola_1 = require("@logigear/gondola");
gondola_1.TestModule("Simple Test");
gondola_1.TestCase("1st simple test case", async () => {
    await gondola_1.gondola.navigate("http://google.com");
    await gondola_1.gondola.checkWindowExist("Google");
}).tag("smoke");
//# sourceMappingURL=sample_test.js.map