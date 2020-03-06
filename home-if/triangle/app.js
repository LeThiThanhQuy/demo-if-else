function checkTri() {
    let edge1 = parseInt(document.getElementById("e1").value);
    let edge2 = parseInt(document.getElementById("e2").value);
    let edge3 = parseInt(document.getElementById("e3").value);
    let triType = "";
    {
        if ((edge1 + edge2) > edge3 && (edge1 + edge3) > edge2 && (edge2 + edge3) > edge1) {
            if (edge1 * edge1 + edge2 * edge2 === edge3 * edge3 || edge1 * edge1 + edge3 * edge3 === edge2 * edge2 || edge2 * edge2 + edge3 * edge3 === edge1 * edge1) {
                triType = " a right triangle.";
            } else if ((edge1 === edge2) && (edge1 === edge3)) {
                triType = " an equilateral triangle.";
            } else if ((edge1 === edge2) || (edge1 === edge3) || (edge2 === edge3)) {
                triType = " an isosceles triangle.";
            } else
                triType = " a triangle.";
        } else triType = "These are not the three sides of the triangle";
        
        

    }
    document.getElementById("check").innerHTML = triType;
}
function perimeter() {
    let edge1 = parseInt(document.getElementById("e1").value);
    let edge2 = parseInt(document.getElementById("e2").value);
    let edge3 = parseInt(document.getElementById("e3").value);
    let per;
    if ((edge1 + edge2) > edge3 && (edge1 + edge3) > edge2 && (edge2 + edge3) > edge1) {
        per = edge1 + edge2 + edge3;
      per =  document.getElementById("per").value;
    }

}
function acreage() {
    let edge1 = parseInt(document.getElementById("e1").value);
    let edge2 = parseInt(document.getElementById("e2").value);
    let edge3 = parseInt(document.getElementById("e3").value);
    let triType = "";

    factor=(e+leg2+leg3)/2;
    area=Math.sqrt(factor*((factor-leg1)*(factor-leg2)*(factor-leg3)));
    document.write("Area = "+area);
    document.write("<br/>");

}
