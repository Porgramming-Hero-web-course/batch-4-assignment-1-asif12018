{


    //==================== problem 4====================//

type Area = {
    shape:'circle' | 'rectangle';
    radius?:number;
    width?:number;
    height?:number;
}
const calculateShapeArea = (data:Area) : number | void =>{

    if ( data.shape === 'circle') {
        if (data.radius !== undefined) {
            const area = 3.1416 * data.radius * data.radius;
            return area;
        }
        console.error('Radius is required for a circle.');
        return; 
    }

    if( data.shape === 'rectangle'){
        if (data.shape === 'rectangle') {
            if (data.height !== undefined && data.width !== undefined) {
                const area = data.height * data.width;
                return area;
            }
            console.error('height and width is required for a circle.');
            return; 
        }
    }

}

const circleArea  = calculateShapeArea({ shape: "circle", radius: 5 });

// console.log(circleArea)

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

//   console.log(rectangleArea)
}