// @prettier

import { strictEqual } from 'assert';
import { Boundary } from '../src/Boundary.js';
import isInside from '../src/ray-casting.js';

describe('ray-casting', () => {
    let polygon;
    let vertices;

    before(() => {
        polygon = new Boundary([
            { x: 1, y: 1 },
            { x: 4, y: 1 },
            { x: 4, y: 4 },
            { x: 3, y: 3 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 1, y: 4 },
        ]);
        vertices = polygon.vertices;
    });

    it('should return false if point is outside the polygon', () => {
        const point = { x: 3, y: 0 };
        const result = isInside(vertices, point);
        strictEqual(result, false);
    });

    it('should return true if point is inside the polygon', () => {
        const point = { x: 3, y: 2 };
        const result = isInside(vertices, point);
        strictEqual(result, true);
    });

    it('should return false if point is outside the polygon but the ray crosses a node', () => {
        const point = { x: 3, y: 4 };
        const result = isInside(vertices, point);
        strictEqual(result, false);
    });

    it('should return true if point is exactly on a horizontal edge', () => {
        const point = { x: 3, y: 1 };
        const result = isInside(vertices, point);
        strictEqual(result, true);
    });

    it('should return true if point is exactly on a vertical edge', () => {
        const point = { x: 1, y: 2 };
        const result = isInside(vertices, point);
        strictEqual(result, true);
    });

    it('should return true if point is exactly on a node', () => {
        const point = { x: 4, y: 4 };
        const result = isInside(vertices, point);
        strictEqual(result, true);
    });
});
