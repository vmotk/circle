function caculate_the_perimeter() {
    var radius = document.getElementById('radius').value;
    var perimeter = (parseInt(radius) * 3.14) * 2;
    
document.getElementById('rs').innerHTML = "perimeter of circle: " + perimeter;
}

function caculate_the_area() {
    var radius = document.getElementById('radius').value;
    var area = (parseInt(radius) * parseInt(radius)) * 3.14;
   
 document.getElementById('rs').innerHTML = "area of circle: " + area;
}