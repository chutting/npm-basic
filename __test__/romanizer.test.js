import {transform} from "../src/romanizer";

describe('romanizer', function () {
    it('should return X when input 10', function () {
        expect(transform(10)).toEqual("X")
    });
});