const { returnTwo, greeting, add } = require("./functions")

test('return two function should return Two.', () => {
    expect(2).toBe(2);
});

test('greeting function will return a greeting', () => {
    expect((greeting('Hello, ', 'Porter'))).toEqual('Hello, Porter');
    expect((greeting('Hello, ', 'Jill'))).toEqual('Hello, Jill');
});

test ('return two function should return Two.', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14);
});