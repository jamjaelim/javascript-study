let circle = {
    radius : 5,

    getDiameter : function () {
        return 2 * this.radius,
        console.log(10)
    },

    getArea : function () {
        return this.radius * this.radius
    }
}


console.log(circle)

console.log(circle.getDiameter())

console.log(circle.getArea())

circle.getDiameter()