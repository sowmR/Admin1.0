"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HTTPComponent = (function () {
    function HTTPComponent(http) {
        this.http = http;
        this.csvUrl = 'smalldata.csv'; // URL to web API
        this.csvData = [];
    }
    HTTPComponent.prototype.readCsvData = function () {
        var _this = this;
        this.http.get(this.csvUrl)
            .subscribe(function (data) { return _this.extractData(data); }, function (err) { return _this.handleError(err); });
    };
    HTTPComponent.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                var tarr = [];
                for (var j = 0; j < headers.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            }
        }
        this.csvData = lines;
    };
    HTTPComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    };
    return HTTPComponent;
}());
HTTPComponent = __decorate([
    core_1.Component({
        selector: 'HTTP-CSV',
        styleUrls: ['./tables.css'],
        templateUrl: './HTTP.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HTTPComponent);
exports.HTTPComponent = HTTPComponent;
//# sourceMappingURL=HTTPComponent.component.js.map