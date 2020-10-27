"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Images_1 = require("./Images");
var Orphanage = /** @class */ (function () {
    function Orphanage() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment')
    ], Orphanage.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "latitude");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "longitude");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "about");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "instructions");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "opening_hours");
    __decorate([
        typeorm_1.Column()
    ], Orphanage.prototype, "open_on_weekends");
    __decorate([
        typeorm_1.OneToMany(function () { return Images_1["default"]; }, function (image) { return image.orphanage; }, {
            cascade: ['insert', 'update']
        }),
        typeorm_1.JoinColumn({ name: 'orphanage:id' })
    ], Orphanage.prototype, "images");
    Orphanage = __decorate([
        typeorm_1.Entity('orphanages')
    ], Orphanage);
    return Orphanage;
}());
exports["default"] = Orphanage;
