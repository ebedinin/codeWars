const {log} = console;
const findIndexYZ = (arr, y, z) => {

};

function dblLinear(n) {

    const arr = [1, 3, 4, 7, 9, 10];
    if (n < arr.length - 1) return arr[n];
    let i = 2;
    while (arr.length < n - 1) {
        const y = arr[i] * 2 + 1;
        const z = arr[i] * 3 + 1;
        let findY = true, findZ = true;
        let indexY = arr.length - 1;
        let indexZ = arr.length - 1;
        for (let j = arr.length - 1; j >= 0; j--) {
            findY = findY ? arr[j] !== y : false;
            findZ = findZ ? arr[j] !== z : false;
            if (!findY && !findZ) break;
            if (findY) {
                indexY = arr[j] > y ? j-1 : indexY;
            }
            if (findZ) {
                indexZ = arr[j] > z ? j -1 : indexZ;
            }
        }
        [indexY, indexZ] = [indexY + 1, indexZ + 1];
        if (findY && findZ) {
            if (indexY === indexZ) {
                let item;
                if (y === z) {
                    arr.splice(indexY, 0, y);
                }
                else if (y > z) {
                    arr.splice(indexY, 0, y);
                    arr.splice(indexZ, 0, z);
                }
                else {
                    arr.splice(indexY, 0, z);
                    arr.splice(indexY, 0, y);
                }
            }
            else {
                if (findY) arr.splice(indexY, 0, y);
                if (findZ) arr.splice(findY?indexZ+1:findZ, 0, z);
            }
        }
        else {
            if (findY) arr.splice(indexY, 0, y);
            if (findZ) arr.splice(indexZ, 0, z);
        }
        /*const isContainsY = arr.indexOf(y)!== -1;
        const isContainsZ = arr.indexOf(z)!== -1;

        if (!isContainsY && !isContainsZ) continue;
        if(isContainsY ^ isContainsZ){
            const item = isContainsY?y:z;


        }*/
        i++;
    }
    return arr
}
log(dblLinear(13)[10]);