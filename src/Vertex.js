// @prettier

export default class Vertex {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._vx = 0;
        this._vy = 0;
        this._mass = 1;
        this._body = this.makeBody(this._x, this._y);
    }

    makeBody(x, y) {
        const svg = document.getElementById('svg');
        const namespace = 'http://www.w3.org/2000/svg';
        const shape = 'circle';
        const body = document.createElementNS(namespace, shape);
        const radius = 2 * this._mass;
        const color = 'white';

        body.setAttribute('cx', x);
        body.setAttribute('cy', y);
        body.setAttribute('r', radius);
        body.setAttribute('fill', color);
        return body;
    }

    show() {
        const svg = document.getElementById('svg');
        svg.appendChild(this._body);
    }

    get x() {
        return this._x;
    }

    set x(newX) {
        this._x = newX;
        this._body.setAttribute('cx', newX);
    }

    get y() {
        return this._y;
    }

    set y(newY) {
        this._y = newY;
        this._body.setAttribute('cy', newY);
    }

    get vx() {
        return this._vx;
    }

    set vx(newVx) {
        this._vx = newVx;
    }

    get vy() {
        return this._vy;
    }

    set vy(newVy) {
        this._vy = newVy;
    }

    diag() {
        console.log(this._x, this._y);
    }
}
