"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require("puppeteer");
var test_page_1 = require("./test-page");
function runTest(options) {
    return __awaiter(this, void 0, void 0, function () {
        var start, launch, exit, testPage, server;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = options.start, launch = options.launch;
                    exit = !(launch && launch.devtools);
                    return [4 /*yield*/, test_page_1.default({
                            files: options.files,
                            matchAppUrl: function () { return true; },
                            newPage: function () { return __awaiter(_this, void 0, void 0, function () {
                                var browser;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, puppeteer.launch(launch)];
                                        case 1:
                                            browser = _a.sent();
                                            return [2 /*return*/, browser.newPage()];
                                    }
                                });
                            }); },
                            onWillRun: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!options.coverage) return [3 /*break*/, 2];
                                            return [4 /*yield*/, Promise.all([
                                                    testPage.coverage.startJSCoverage(),
                                                    testPage.coverage.startCSSCoverage()
                                                ])];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); },
                            onDidRun: function (failures) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, jsCoverage, cssCoverage;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!options.coverage) return [3 /*break*/, 2];
                                            console.log('collecting test coverage...');
                                            return [4 /*yield*/, Promise.all([
                                                    testPage.coverage.stopJSCoverage(),
                                                    testPage.coverage.stopCSSCoverage(),
                                                ])];
                                        case 1:
                                            _a = __read.apply(void 0, [_b.sent(), 2]), jsCoverage = _a[0], cssCoverage = _a[1];
                                            require('puppeteer-to-istanbul').write(__spread(jsCoverage, cssCoverage));
                                            _b.label = 2;
                                        case 2:
                                            if (!exit) return [3 /*break*/, 4];
                                            return [4 /*yield*/, testPage.close()];
                                        case 3:
                                            _b.sent();
                                            process.exit(failures > 0 ? 1 : 0);
                                            _b.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }
                        })];
                case 1:
                    testPage = _a.sent();
                    return [4 /*yield*/, start()];
                case 2:
                    server = _a.sent();
                    return [4 /*yield*/, testPage.goto("http://" + server.address + ":" + server.port)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = runTest;
//# sourceMappingURL=run-test.js.map