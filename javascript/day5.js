
{
    let fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];
    fruits.push("Kiwi", "Papaya", "Pineapple");
    console.log(fruits);
}

{
    let numbers = [10, 20, 30, 40, 50, 60];
    numbers.pop();
    console.log(numbers);
}

{
    let names = ["Arun", "Tamil", "Ravi", "Kumar", "Suresh"];
    names.shift();
    console.log(names);
}

{
    let numbers = [30, 40, 50, 60];
    numbers.unshift(10, 20);
    console.log(numbers);
}

{
    let arr = [10, 20, 30, 40, 50];
    arr.splice(1, 2);
    console.log(arr);
}

{
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1, 100);
    console.log(arr);
}

{
    let numbers = [10, 20, 30, 40, 50];
    numbers.fill("hello", 2, 4);
    console.log(numbers);
}

{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let result = arr1.concat(arr2);
    console.log(result);
}

{
    let arr = [10, 20, 30, 40, 50, 60];
    console.log(arr.slice(1, 5));
}

{
    let nested = [1, [2, 3], [4, [5, 6]], 7];
    console.log(nested.flat(Infinity));
}

{
    let arr = [10, 20, 30, 40, 50];
    console.log(arr.includes(30));
}

{
    let arr = [5, 10, 15, 20, 25];
    console.log(arr.indexOf(20));
}

{
    let arr = [1, 2, 3, 2, 1, 2];
    console.log(arr.lastIndexOf(2));
}

{
    let numbers = [40, 10, 50, 20, 30];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
}

{
    let numbers = [10, 20, 30, 40, 50, 60, 70];
    numbers.reverse();
    console.log(numbers);
}

{
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let merged = [...arr1, ...arr2];
    console.log(merged);
}

{
    let student = {
        name: "Tamil",
        age: 25
    };

    let job = {
        role: "Developer",
        company: "ABC"
    };

    let details = { ...student, ...job };
    console.log(details);
}

{
    function example(a, b, ...rest) {
        console.log(a);
        console.log(b);
        console.log(rest);
    }

    example(10, 20, 30, 40, 50);
}

{
    function one(a, b, ...c) {
        console.log(a + b + c[0] + c[1]);
    }

    one(10, 20, 30, 40);
}

{
    let arr1 = [10, 20, 30, 40];
    let arr2 = [50, 60, 70];

    let copied = [...arr1];
    console.log(copied);
    console.log(arr2);
}

{
    let arr = [10, 20, 30, 40];
    let [a, b, c, d] = arr;
    console.log(a, b, c, d);
}

{
    let nested = [1, 2, [3, 4, [5, 6]]];
    let [a, b, [c, d, [e, f]]] = nested;
    console.log(a, b, c, d, e, f);
}

{
    let student = ["Tamil", 25, 8.5];
    let [name, age, cgpa] = student;
    console.log(name, age, cgpa);
}

{
    let employee = {
        name: "Tamil",
        role: "Developer",
        location: "Salem"
    };

    let { name, role, location } = employee;
    console.log(name, role, location);
}

{
    let student = {
        name: "Tamil",
        address: {
            city: "Salem",
            state: "Tamil Nadu"
        }
    };

    let {
        address: { city, state }
    } = student;

    console.log(city, state);
}

{
    let employee = {
        name: "Tamil",
        role: "Developer",
        location: {
            mainLocation: "Chennai",
            currentLocation: "Salem"
        }
    };

    let {
        name,
        role,
        location: { mainLocation, currentLocation }
    } = employee;

    console.log(name, role, mainLocation, currentLocation);
}

{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    numbers.shift();
    numbers.pop();
    numbers.unshift(100, 200);

    console.log(numbers);
}

{
    let arr = [10, 20, 30, 20, 40, 20];
    let target = 20;

    console.log(arr.includes(target));
    console.log(arr.indexOf(target));
    console.log(arr.lastIndexOf(target));
}

{
    let employee1 = {
        name: "Tamil",
        age: 25
    };

    let employee2 = {
        role: "Full Stack Developer",
        company: "ABC"
    };

    let employee = { ...employee1, ...employee2 };
    let { name, role } = employee;

    console.log(name, role);
}

{
    let nested = [1, [2, 3], [4, [5, 6]], 7];
    let result = nested.flat(Infinity).reverse();

    console.log(result);
}
