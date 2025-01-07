const height = window.innerHeight;
const width = window.innerWidth;

const vertices = [];
const edges = [];
let pointerLocation;

function animate(timestamp, vertices, edges) {
    applyForces(vertices, edges);
    updatePositions(vertices);
    applyPointerAttractionForces(vertices, pointerLocation);

    requestAnimationFrame((timestamp) => {
        animate(timestamp, vertices, edges);
    });
}

function main() {
    const canvas = document.getElementById("canvas");
    canvas.addEventListener("pointermove", (event) => {
        pointerLocation = new Vertex(event.clientX, event.clientY);
    });

    // Make some vertices
    for (let i = 0; i < 100; i++) {
        const x = width * Math.random();
        const y = height * Math.random();
        const vertex = new Vertex(x, y);
        vertices.push(vertex);
        vertex.draw();
    }

    // Make some edges
    vertices.forEach((vertexA) => {
        vertices.forEach((vertexB) => {
            if (vertexA === vertexB) {
                return;
            }
            edges.push([vertexA, vertexB]);
        });
    });

    if (!Array.isArray(vertices)) {
        throw new Error("Error: vertices is not an array");
    }
    if (!Array.isArray(edges)) {
        throw new Error("Error: edges is not an array");
    }

    animate(0, vertices, edges);
}
