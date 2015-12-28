Utils = {
    getTime: function () {
        return new Date().getTime();
    },
    getDate: function () {
        return new Date();
    },
    getDayAgo: function () {
        var date = Utils.getDate();
        return date.setDate(date.getDate() - 1);
    },
    getDomain: function (email) {
        return email.slice(email.lastIndexOf('@') + 1, email.length);
    }
};

_.mixin({
    move: function (array, fromIndex, toIndex) {
        array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
        return array;
    }
});