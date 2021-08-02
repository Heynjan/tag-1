function mouse_position()
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.Form1.posx.value = posX;
    document.Form1.posy.value = posY;

    var t = setTimeout(mouse_position,100);
}
function mouse_position()
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.Form1.posx.value = posX;
    document.Form1.posy.value = posY;

    var t = setTimeout(mouse_position,100);

}
class Main {

    crosshair;

    constructor() {
        console.log("main");

        this.getElements();
        this.createListeners();
    }

    getElements() {
        this.crosshair = document.getElementById('crosshair');
    }

    createListeners() {
        document.addEventListener('mousemove', (e) =>{
          this.mouseMoveHandler(e);
        });

    }

    mouseMoveHandler(e) {
        this.crosshair.style.left = e.pageX-60 + 'px';
        this.crosshair.style.top = e.pageY-60 + 'px';
    }
}
const main = new Main();

document.addEventListener('click', (e) => {
    console.log("shoot");

})
//e.clientX=240;
//     e.clientY=176;




