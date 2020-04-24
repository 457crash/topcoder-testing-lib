import { ElementArrayFinder } from "protractor";
import { TcElementImpl } from "../tc-element-impl";
export declare const ElementHelper: {
    /**
     * Get element by classname
     * @param {String} className
     */
    getElementByClassName(className: any): TcElementImpl;
    /**
     * Get all elements by classname
     * @param {String} className
     */
    getAllElementsByClassName(className: any): Promise<any>;
    /**
     * Get all elements by css
     * @param {String} className
     */
    getAllElementsByCss(cssName: any): Promise<any>;
    /**
     * Get element by css
     * @param {String} css
     */
    getElementByCss(css: any): TcElementImpl;
    /**
     * Get element by id
     * @param {String} id
     */
    getElementById(id: any): TcElementImpl;
    /**
     * Get element by javascript
     * @param {String|Function} js
     */
    getElementByJs(js: any): TcElementImpl;
    /**
     * Get element by name
     * @param {String} name
     */
    getElementByName(name: any): TcElementImpl;
    /**
     * Get element by partial anchor element text
     * @param {String} text
     */
    getElementByPartialLinkText(text: any): TcElementImpl;
    /**
     * Get element by html tag
     * @param {String} tag
     */
    getElementsByTag(tag: any): TcElementImpl;
    /**
     * Get element by binding
     * @param {String} binding
     */
    getElementByBinding(binding: any): TcElementImpl;
    /**
     * Get element by exact binding
     * @param {String} binding
     */
    getElementByExactBinding(binding: any): TcElementImpl;
    /**
     * Get element by model
     * @param {String} model
     */
    getElementByModel(model: any): TcElementImpl;
    /**
     * Get element by button containing substring
     * @param {String} text
     */
    getElementByPartialButtonText(text: any): TcElementImpl;
    /**
     * Get element by repeater
     * @param {String} repeater
     */
    getElementByRepeater(repeater: any): TcElementImpl;
    /**
     * Get element by exact repeater
     * @param {String} repeater
     */
    getElementByExactRepeater(repeater: any): TcElementImpl;
    /**
     * Get element by css containing text
     * @param {String} cssSelector
     * @param {String} text
     */
    getElementByCssContainingText(cssSelector: any, text: any): TcElementImpl;
    /**
     * Get element by options
     * @param {String} options
     */
    getElementByOptions(options: any): TcElementImpl;
    /**
     * Get element by deep css
     * @param {String} deepCss
     */
    getElementByDeepCss(deepCss: any): TcElementImpl;
    /**
     * Get element by xPath
     * @param {String} xPath
     */
    getElementByXPath(xPath: any): TcElementImpl;
    /**
     * Get element containing text
     * @param {String} text
     */
    getElementContainingText(text: any): any;
    /**
     * Get html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    getTagElementContainingText(tag: any, text: any): any;
    /**
     * Get input element by type
     * @param {String} type
     */
    getInputElementByType(type: any): any;
    /**
     * Get input element by type
     * @param {String} type
     */
    getElementArray(elementArray: ElementArrayFinder): TcElementImpl[];
};
