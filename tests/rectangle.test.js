import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly calculate perimeter', () => {
    const outputPerimeter = getRectanglePerimeter(2, 3);
    expect(outputPerimeter).toBe(10);
    });

test('should properly calculate area', () => {
    const outputArea = getRectangleArea(2, 3);
    expect(outputArea).toBe(6);
    });

const log = jest.spyOn(console, "log");

afterEach(() => {
    log.mockClear();
    });

test('should properly show rectangle info', () => {
    getRectangleInfo(2, 3);
    expect(log).toHaveBeenCalledWith("The perimeter of a rectangle is 10 and the area is 6");
    });


// 'Unhappy path'

// test('should not calculate perimeter with negative numbers', () => {
//     const outputPerimeter = getRectanglePerimeter(-2, -3);
//     expect(outputPerimeter).toBe(false);
//     });

// test('should not calculate area with negative numbers', () => {
//     const outputArea = getRectangleArea(-2, -3);
//     expect(outputArea).toBe(false);
//     });

// test('should show information about negative numbers', () => {
//     getRectangleInfo(-2, -3);
//     expect(log).toHaveBeenCalledWith("The lenght and width must not be negative");
//     });