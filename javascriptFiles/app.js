"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// @Logger('LOGGING - PERSON')
let Person = /** @class */ (() => {
    let Person = class Person {
        constructor() {
            this.name = 'Laycon';
            console.log('Creating person object...');
        }
    };
    Person = __decorate([
        Logger('LOGGING'),
        WithTemplate('<h1>My Person Object</h1>', 'app')
    ], Person);
    return Person;
})();
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
let Product = /** @class */ (() => {
    class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        set price(val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
})();
