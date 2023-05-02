let data = ["0 0 0 10px red", " 0 0 0 20px orange", " 0 0 0 30px yellow", "0 0 0 40px green", "0 0 0 50px blue"];

let element = document.getElementById("image");

element.addEventListener("mouseover", () => {
    for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
            let currentBoxShadow = "";
            for (let j = 0; j <= i; j++) {
                currentBoxShadow += data[j] + ",";
            }
            element.style.boxShadow = currentBoxShadow.slice(0, -1);
            console.log(currentBoxShadow.slice(0, -1));
        }, 500 * i);
    }
});

element.addEventListener("mouseout", () => {
    for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
            let currentBoxShadow = element.style.boxShadow.split(",");
            currentBoxShadow.pop();
            element.style.boxShadow = currentBoxShadow.join(",");
        }, 500 * i);
    }
});

let id1 = document.getElementById("img1")
let id2 = document.getElementById("img2")
let id3 = document.getElementById("img3")

let iframe1 = document.getElementById("frame1")
let iframe2 = document.getElementById("frame2")
let iframe3 = document.getElementById("frame3")

iframe1.style.display = "none"
iframe2.style.display = "none"
iframe3.style.display = "none"

id1.addEventListener("mouseover", () => {
    id1.style.display = "none"
    iframe1.style.display = "block"
})

id1.addEventListener("mouseout", () => {
    id1.style.display = "block"
    iframe1.style.display = "none"
})

id2.addEventListener("mouseover", () => {
    id2.style.display = "none"
    iframe2.style.display = "block"
})

id2.addEventListener("mouseout", () => {
    id2.style.display = "block"
    iframe2.style.display = "none"
})

id3.addEventListener("mouseover", () => {
    id3.style.display = "none"
    iframe3.style.display = "block"
})

id3.addEventListener("mouseout", () => {
    id3.style.display = "block"
    iframe3.style.display = "none"
})


window.addEventListener('mousemove', function (e) {
    var x = e.clientX; // horizontal position of cursor
    var y = e.clientY; // vertical position of cursor
    // console.log('X position: ' + x + ', Y position: ' + y);
});

// Create a new div element to represent the circle
var circle = document.createElement('div');

// Set the CSS properties of the circle element
circle.style.width = '25px';
circle.style.height = '25px';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = 'red';
circle.style.position = 'absolute';
circle.style.pointerEvents = 'none'; // ensure that the circle doesn't interfere with mouse events

// Add the circle element to the page
document.body.appendChild(circle);

// Update the position of the circle on mousemove
// document.addEventListener('mousemove', function (e) {
//     let y = e.pageY;
//     let x = e.pageX;
//     // var scrollPosition = window.scrollY
//     circle.style.left = e.pageX - 5 + 'px'; // horizontal position of cursor
//     circle.style.top = e.pageY - 5 + 'px'; // vertical

//     window.addEventListener('scroll', function (e) {
//         var scrollPosition = window.scrollY;
//         circle.style.top = y + scrollPosition + 'px'; // vertical position of cursor
//     });


// });

/*
document.addEventListener('mousemove', function (e) {
    let y = e.pageY - 5;
    let x = e.pageX - 5;
    let left;
    let top;
    // var scrollPosition = window.scrollY
    left = x + 'px'; // horizontal position of cursor
    top = y + 'px'; // vertical

    window.addEventListener('scroll', function (e) {
        var scrollPosition = window.scrollY;
        top = y + scrollPosition + 'px'; // vertical position of cursor
        circle.style.left = left;
        circle.style.top = top;
    });

    circle.style.left = left;
    circle.style.top = top;

});
*/

// window.addEventListener('scroll', (e) => {
//     // circle.style.top = window.scrollY + 'px';
//     circle.style.top = window.scrollY + 'px';
// })

// document.addEventListener('mousemove', (e) => {
//     console.log('y ' + e.pageY, 1)
//     console.log('x ' + e.pageX, 1)
// })

let y = 0;
let x = 0;

document.addEventListener('mousemove', (e) => {
    y = e.pageY - 5 + 'px';
    x = e.pageX - 5 + 'px';
    circle.style.left = x;
    circle.style.top = y;
})

window.addEventListener('scroll', (e) => {

    // remove px from y let variable
    circle.style.left = window.scrollX + parseInt(x) + 'px';
    circle.style.top = window.scrollY + parseInt(y) + 'px';
})