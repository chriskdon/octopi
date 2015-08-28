function InvalidArgumentException(msg) {
    Error.call(this);
}

InvalidArgumentException.prototype = Object.create(Error.prototype);
InvalidArgumentException.prototype.constructor = InvalidArgumentException;

module.exports = InvalidArgumentException;
