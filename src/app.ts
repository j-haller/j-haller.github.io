// @prettier

import Vertex from './Vertex.js';
import Edge from './Edge.js';
import {
    updatePositions,
    applyPointerAttractionForce,
} from './force-directed-engine.js';

type Point = {
    x: number;
    y: number;
};

const height = window.innerHeight;
const width = window.innerWidth;

const vertices: Vertex[] = [];
const edges: Edge[] = [];
let pointerLocation: Point;

function animate(timestamp: number, vertices: Vertex[], edges: Edge[]) {
    applyPointerAttractionForce(vertices, pointerLocation);
    updatePositions(vertices, edges);

    requestAnimationFrame((timestamp) => {
        animate(timestamp, vertices, edges);
    });
}

function addPointerMoveEvent() {
    const canvas = document.getElementById('svg');
    if (null === canvas) {
        return;
    }

    canvas.addEventListener('pointermove', (event) => {
        pointerLocation = new Vertex(event.clientX, event.clientY);
    });
}

function main() {
    addPointerMoveEvent();

    // Make some vertices
    for (let i = 0; i < 5; i++) {
        const x = width * Math.random();
        const y = height * Math.random();
        const vertex = new Vertex(x, y);
        vertices.push(vertex);
        vertex.show();
    }

    // Make some edges
    vertices.forEach((vertexA) => {
        vertices.forEach((vertexB) => {
            if (vertexA === vertexB) {
                return;
            }
            if (Math.random() > 0.5) {
                const edge = new Edge(vertexA, vertexB);
                edges.push(edge);
            }
        });
    });

    animate(0, vertices, edges);
}

window.addEventListener('load', main);
