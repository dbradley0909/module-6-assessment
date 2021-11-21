const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    let array = [1,2,3];   
    test("shuffleArray", () => {
            expect(shuffleArray(array)).toEqual(array);
        });

    test("shuffleArray", () => {
            expect(shuffleArray(array)).not.toBe(array);
        });
        array = [1,2,3];  
        test("shuffleArray", () => {
            expect(shuffleArray(array)).toHaveLength(3);
        });
        array = [1,2,3];  
        test("shuffleArray", () => {
            expect(shuffleArray(array)).toEqual([3,2,1]);
        });
        
    });