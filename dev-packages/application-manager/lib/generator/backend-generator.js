"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_generator_1 = require("./abstract-generator");
var BackendGenerator = /** @class */ (function (_super) {
    __extends(BackendGenerator, _super);
    function BackendGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var backendModules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backendModules = this.pck.targetBackendModules;
                        return [4 /*yield*/, this.write(this.pck.backend('server.js'), this.compileServer(backendModules))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.write(this.pck.backend('main.js'), this.compileMain(backendModules))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BackendGenerator.prototype.compileServer = function (backendModules) {
        return "// @ts-check\nrequire('reflect-metadata');\nconst path = require('path');\nconst express = require('express');\nconst { Container } = require('inversify');\nconst { BackendApplication, CliManager } = require('@theia/core/lib/node');\nconst { backendApplicationModule } = require('@theia/core/lib/node/backend-application-module');\nconst { messagingBackendModule } = require('@theia/core/lib/node/messaging/messaging-backend-module');\nconst { loggerBackendModule } = require('@theia/core/lib/node/logger-backend-module');\n\nconst container = new Container();\ncontainer.load(backendApplicationModule);\ncontainer.load(messagingBackendModule);\ncontainer.load(loggerBackendModule);\n\nfunction load(raw) {\n    return Promise.resolve(raw.default).then(module =>\n        container.load(module)\n    )\n}\n\nfunction start(port, host, argv) {\n    if (argv === undefined) {\n        argv = process.argv;\n    }\n\n    const cliManager = container.get(CliManager);\n    return cliManager.initializeCli(argv).then(function () {\n        const application = container.get(BackendApplication);\n        application.use(express.static(path.join(__dirname, '../../lib')));\n        application.use(express.static(path.join(__dirname, '../../lib/index.html')));\n        return application.start(port, host);\n    });\n}\n\nmodule.exports = (port, host, argv) => Promise.resolve()" + this.compileBackendModuleImports(backendModules) + "\n    .then(() => start(port, host, argv)).catch(reason => {\n        console.error('Failed to start the backend application.');\n        if (reason) {\n            console.error(reason);\n        }\n        throw reason;\n    });";
    };
    BackendGenerator.prototype.compileMain = function (backendModules) {
        return "// @ts-check\nconst { BackendApplicationConfigProvider } = require('@theia/core/lib/node/backend-application-config-provider');\nconst main = require('@theia/core/lib/node/main');\nBackendApplicationConfigProvider.set(" + this.prettyStringify(this.pck.props.backend.config) + ");\n\nconst serverModule = require('./server');\nconst serverAddress = main.start(serverModule());\nserverAddress.then(function ({ port, address }) {\n    if (process && process.send) {\n        process.send({ port, address });\n    }\n});\nmodule.exports = serverAddress;\n";
    };
    return BackendGenerator;
}(abstract_generator_1.AbstractGenerator));
exports.BackendGenerator = BackendGenerator;
//# sourceMappingURL=backend-generator.js.map