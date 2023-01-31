const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

// Stop-propagation metoden
// overlay.addEventListener('click', function () {
//     console.log('Close the modal');
// });

// modal.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log("Modal clicked")
// });

// Event delegation 

overlay.addEventListener('click', function (event) {
    //console.log("this", this)
    //console.log("event.target", event.target)
    //console.log("event.currentTarget", event.currentTarget)
    // Clicked on overlay
    if (this === event.target) {
         console.log("Close the modal")
     }
});

