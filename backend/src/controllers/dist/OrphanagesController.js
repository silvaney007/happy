"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Yup = require("yup");
var Orphanages_view_1 = require("../view/Orphanages_view");
var Orphanage_1 = require("../models/Orphanage");
exports["default"] = {
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orphanagesRepository, orphanages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orphanagesRepository = typeorm_1.getRepository(Orphanage_1["default"]);
                        return [4 /*yield*/, orphanagesRepository.find({
                                relations: ['images']
                            })];
                    case 1:
                        orphanages = _a.sent();
                        return [2 /*return*/, response.json(Orphanages_view_1["default"].renderMany(orphanages))];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, orphanagesRepository, orphanage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        orphanagesRepository = typeorm_1.getRepository(Orphanage_1["default"]);
                        return [4 /*yield*/, orphanagesRepository.findOneOrFail(id, {
                                relations: ['images']
                            })];
                    case 1:
                        orphanage = _a.sent();
                        return [2 /*return*/, response.json(Orphanages_view_1["default"].render(orphanage))];
                }
            });
        });
    },
    create: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, orphanagesRepository, requestImages, images, data, schema, orphanage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, latitude = _a.latitude, longitude = _a.longitude, about = _a.about, instructions = _a.instructions, opening_hours = _a.opening_hours, open_on_weekends = _a.open_on_weekends;
                        orphanagesRepository = typeorm_1.getRepository(Orphanage_1["default"]);
                        requestImages = request.files;
                        images = requestImages.map(function (image) {
                            return { path: image.filename };
                        });
                        data = {
                            name: name,
                            latitude: latitude,
                            longitude: longitude,
                            about: about,
                            instructions: instructions,
                            opening_hours: opening_hours,
                            open_on_weekends: open_on_weekends === 'true',
                            images: images
                        };
                        schema = Yup.object().shape({
                            name: Yup.string().required('Nome obrigatório.'),
                            latitude: Yup.number().required('Latitude obrigatório.'),
                            longitude: Yup.number().required('Longitude obrigatório.'),
                            about: Yup.string().required('Informações sobre o orfanato obrigatório.').max(300),
                            instructions: Yup.string().required('Instruções de visitação obrigatório.'),
                            opening_hours: Yup.string().required('Horas aberto obrigatório.'),
                            open_on_weekends: Yup.boolean().required('Aberto aos fins de semana obrigatório.'),
                            images: Yup.array(Yup.object().shape({
                                path: Yup.string().required('Url da imagem obrigatório.')
                            }))
                        });
                        return [4 /*yield*/, schema.validate(data, {
                                abortEarly: false
                            })];
                    case 1:
                        _b.sent();
                        orphanage = orphanagesRepository.create(data);
                        return [4 /*yield*/, orphanagesRepository.save(orphanage)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json(orphanage)];
                }
            });
        });
    }
};
