"use strict";
exports.__esModule = true;
exports["default"] = {
    render: function (image) {
        return {
            id: image.id,
            url: "http://localhost:3333/uploads/" + image.path
        };
    },
    renderMany: function (images) {
        var _this = this;
        return images.map(function (image) { return _this.render(image); });
    }
};
