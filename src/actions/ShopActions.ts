import { action, actions, gondola } from "@logigear/gondola";
@actions
export class ShopActions {
    @action("check total payment", "check total payment")
    public async checkTotalPayment(expected: string) {
        await gondola.click({xpath: `//section[@class='content']/div[1]/button[@class='add']`}, "");
        await gondola.click({xpath: `//section[@class='content']/div[2]/button[@class='add']`}, "");
        await gondola.click({xpath: `//section[@class='content']/div[3]/button[@class='add']`}, "");
        await gondola.click({css: `svg[width='30']`}, "");
        await gondola.checkControlExist({xpath: `//h3[.='Total: $${expected}']`});
    }
}
export default new ShopActions();
