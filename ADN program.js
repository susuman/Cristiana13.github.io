cube([2,3,4]);
translate([3,0,0]) {
  cube([2,3,4]);
}
cube([2,3,4]);
translate([3,0,0]) {
  cube([2,3,4]);
}
linear_extrude(height = 10, center = false, convexity = 10, twist = -500)
translate([2, 0, 0])
circle(r = 1);
rotate_extrude(convexity = 10)
translate([2, 0, 0])
circle(r = 1)
translate([0,60,0])
   rotate_extrude(angle=270, convexity=10)
       translate([40, 0]) circle(10);
rotate_extrude(angle=90, convexity=10)
   translate([20, 0]) circle(10)
translate([20,0,0]) 
   rotate([90,0,0]) cylinder(r=10,h=80)
difference() {
		cube (size = [2,2,2]);
		# translate ([0.5,0.5,-0.5]) {
	    cube (size = [1,1,3]);	
	}
}
surface(file = "surface.dat", center = true, convexity = 5);
%translate([0,0,5])cube([10,10,10], center =true);
linear_extrude(height=10, scale=[1,0.1], slices=20, twist=0)
 polygon(points=[[0,0],[20,10],[20,-10]]);
linear_extrude(height = 10, center = true, convexity = 10, twist = 0)
translate([2, 0, 0])
circle(r = 1);
