let romanize = require('romanize');

const transform = index => romanize(index);

export {
    transform
};