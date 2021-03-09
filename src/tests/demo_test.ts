import { TestCase, TestModule, gondola } from "@logigear/gondola";
import ShopActions from "./../actions/ShopActions";
TestModule("Demo Test Module");

TestCase("Demo 1", async () => {
    await gondola.navigate("https://demo.gondolatest.com");
    await ShopActions.checkTotalPayment("239.97");
}).tag("regression");
TestCase("Demo 2", async () => {
    await gondola.navigate("https://demo.gondolatest.com");
    await ShopActions.checkTotalPayment("239.98");
}).tag("smoke");
