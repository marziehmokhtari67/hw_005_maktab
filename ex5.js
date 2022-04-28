function area_of_overlapping(array1,array2){
    x_1=array1[0].x
    x_2=array2[0].x
    x_3=array1[1].x
    x_4=array2[1].x
    let x_length = Math.max(x_1,x_2)- Math.min(x_3,x_4)
    y_1=array1[0].y
    y_2=array2[0].y
    y_3=array1[1].y
    y_4=array2[1].y
    let y_length = Math.max(y_1,y_2)- Math.min(y_3,y_4)
    let area =x_length*y_length
    return area
}
console.log(area_of_overlapping([{ x: 2, y: 1 }, { x: 5, y: 5 }],
    [{ x: 3, y: 2 }, { x: 5, y: 7 }]))