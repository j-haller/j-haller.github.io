// @prettier

// Ray casting alogrithm to determine whether a point is inside a polygon or
// outside of if. A horizontal ray is casted from the point in question to
// infinity. If the point should lie on a edge or a node, then the result is
// going to be true.

// polygon: array of points
function getEdges(polygon) {
    const edges = [];
    for (let i = 0; i < polygon.length; i++) {
        const vertexA = polygon[i];
        const vertexB = polygon[(i + 1) % polygon.length];
        edges.push({
            A: vertexA,
            B: vertexB,
        });
    }
    return edges;
}

function isOdd(value) {
    return value % 2 ? true : false;
}

function isOnNode(point, edge) {
    return point.x === edge.A.x && point.y == edge.A.y;
}

function isOnHorizontalEdge(point, edge) {
    const ax = edge.A.x;
    const ay = edge.A.y;
    const bx = edge.B.x;
    const by = edge.B.y;

    // Edge is not horizontal
    if (ay != by) {
        return false;
    }

    // Point is not horizontally aligned with the edge
    if (point.y != ay) {
        return false;
    }

    // Point is not on the edge
    if ((point.x > ax && point.x > bx) || (point.x < ax && point.x < bx)) {
        return false;
    }

    return true;
}

function isOnVerticalEdge(point, edge) {
    const ax = edge.A.x;
    const ay = edge.A.y;
    const bx = edge.B.x;
    const by = edge.B.y;

    // Edge is not vertical
    if (ax != bx) {
        return false;
    }

    // Point is not vertically aligned with the edge
    if (point.x != ax) {
        return false;
    }

    // Point is not on the edge
    if ((point.y > ay && point.y > by) || (point.y < ay && point.y < by)) {
        return false;
    }

    return true;
}

function isHorizontalRayFromPointIntersectingEdge(point, edge) {
    const ax = edge.A.x;
    const ay = edge.A.y;
    const bx = edge.B.x;
    const by = edge.B.y;

    // Point is above or below edge
    if ((point.y > ay && point.y > by) || (point.y < ay && point.y < by)) {
        return false;
    }

    // Point is on the right side of an edge
    if (point.x > ax && point.x > bx) {
        return false;
    }

    // Point is on the left side of the edge
    if (point.x < ax && point.x < bx) {
        return true;
    }

    // For any other edge with a finite and non-zero gradient
    const gradient = (bx - ax) / (by - ay);
    const intersectionX = gradient * (point.y - ay) + ax;

    return intersectionX > point.x;
}

export function isInside(polygon, point) {
    const edges = getEdges(polygon);
    let intersections = 0;

    for (const edge of edges) {
        if (isOnNode(point, edge)) {
            return true;
        }

        if (isOnHorizontalEdge(point, edge)) {
            return true;
        }

        if (isOnVerticalEdge(point, edge)) {
            return true;
        }

        if (isHorizontalRayFromPointIntersectingEdge(point, edge)) {
            intersections++;
        }
    }

    // if number of intersections is odd, then the point is inside of the
    // polygon
    return isOdd(intersections);
}
