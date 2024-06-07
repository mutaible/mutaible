"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mutaible_1 = __importDefault(require("./mutaible"));
test('should initialize with default options', () => {
    const mutaible = new mutaible_1.default();
    expect(mutaible.options).toEqual({});
});
test('should enhance SEO when option is set', () => {
    document.title = "Test";
    const mutaible = new mutaible_1.default({ enhanceSEO: true });
    expect(document.title).toBe("Test | Enhanced for SEO");
});
