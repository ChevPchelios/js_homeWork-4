
let me = {
    name: 'Alexander',
    age: 0,
    intelligence: 1,
    placeOfResidence: 'Dalnegorsk',
    status: 'child',
}

function myLife (obj) {
    moveToNN(obj);
    goTokinderGarden(obj);
    goToSchool(obj);
    goToUniversity(obj);
    goToWorkInNN(obj);
    goToArmy(obj);
    goToWorkInSarov(obj);
  
    return obj;
};
 
function moveToNN (obj) {
    [...Array(3)].forEach(() => {
        obj.age++;
        obj.placeOfResidence = 'Nizhnie Novgorod';
    })
    console.log(obj);
}

function goTokinderGarden (obj) {
    [...Array(3)].forEach((_, i) => {
        obj.age++;
        obj.intelligence++;
        obj.friends = 2;
    })
    console.log(obj);
}

function goToSchool (obj) {
    [...Array(10)].forEach((_, i) => {
        obj.age++;
        obj.intelligence++;
        if (Math.floor(Math.random() * 10) > 4) {
            obj.friends += 2;
        }
        if (obj.age == 13) {
            obj.status = 'tinager';
        }
    })
    console.log(obj);
}

function goToUniversity (obj) {
    [...Array(6)].forEach((_, i) => {
        obj.age++;
        obj.intelligence = obj.intelligence + 2;
        obj.friends++;
        obj.status = 'student';
    })
    console.log(obj);
} 

function goToWorkInNN (obj) {
    [...Array(1)].forEach((_, i) => {
        obj.age++;
        if (obj.age <= 24) {
            obj.status = 'employee of Gasprom';
        }
    })
    console.log(obj);
}

function goToArmy (obj) {
    [...Array(1)].forEach((_, i) => {
        obj.age++;
        if (Math.floor(Math.random() * 10) > 4) {
            obj.intelligence = obj.intelligence - 5;
        }
        if (Math.floor(Math.random() * 10) > 4) {
            obj.friends += 2;
        }
        obj.status = 'soldier';
    })
    console.log(obj);
}

function goToWorkInSarov (obj) {
    [...Array(7)].forEach((_, i) => {
        obj.age++;
        if (Math.floor(Math.random() * 10) > 4) {
            obj.intelligence = obj.intelligence + 2;
        }
        if (Math.floor(Math.random() * 10) > 4) {
            obj.friends--;
        }
        obj.placeOfResidence = 'Sarov';
        obj.status = 'employee of VNIIEF';
        if (obj.age === 31) {
            obj.maritalStatus = 'married';
        }
    })
    console.log(obj);
}
 
myLife (me);