// Javascript that calculates the area of a trapezoid.

document.getElementById('submitbutton').addEventListener('click', areaCalculation)

function areaCalculation () {
 const alength = document.getElementById('alength').value
 // Puts the length of a into a variable.
 const blength = document.getElementById('blength').value
 // Puts the length of b into a variable.
 const height = document.getElementById('height').value
 // Puts the height into a variable.
 const ab1 = parseInt(alength) + parseInt(blength)
 // Adds a and b.
 const ab2 = ab1 / 2
 // Divides the sum of a and b by 2.
 const areatotal = ab2 * height
 // Multiplies the last calculation by height.
 document.getElementById('area').innerHTML = areatotal
 // Displays final area.
}
