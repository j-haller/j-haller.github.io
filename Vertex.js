class Vertex {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._vx = 0;
        this._vy = 0;
        this._mass = 1;
        this._body = undefined;
    }

    draw() {
        const canvas = document.getElementById("canvas");
        const body = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );
        body.setAttribute("cx", this._x);
        body.setAttribute("cy", this._y);
        body.setAttribute("r", 2 * this._mass);
        body.setAttribute("fill", "white");
        canvas.appendChild(body);

        this._body = body;
    }

    get x() {
        return this._x;
    }

    set x(newX) {
        this._x = newX;
        this._body.setAttribute("cx", newX);
    }

    get y() {
        return this._y;
    }

    set y(newY) {
        this._y = newY;
        this._body.setAttribute("cy", newY);
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

    move(x, y) {
        const translateX = x - this._x;
        const translateY = y - this._y;

        const animation = this._body.animate(
            {
                transform: `translate(${translateX}px, ${translateY}px)`
            },
            {
                duration: 1000,
                iteration: 1,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );

        this._x = x;
        this._y = y;
    }

    diag() {
        console.log(this._x, this._y);
    }
}
