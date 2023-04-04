  const logo = document.querySelector('img');

const onclick = () => console.log('click event');

const ondoubleclick = () =>{
    if(document.body.style.backgroundColor !== 'blue') {
        document.body.style.backgroundColor = 'blue';
        document.body.style.Color = 'white';

    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};
const onRightclick = () => console.log('right click event');
const onmousedown = () => console.log('on mouse down');
const onmouseup = () => console.log('on mouse up');
const onmousewheel = () => console.log('on mouse wheel')
const onmouseover = () => console.log('on mouse over')
const onmouseout = () => console.log('on mouse out')
const ondragstart  =() => console.log('drag start event')
const ondrag  =() => console.log('drag  event')
const ondragend = () => console.log('drag end event')


// logo.onclick = function () {
//     console.log ('hello');
// }

  logo.addEventListener('click',onclick)
  logo.addEventListener('dblclick',ondoubleclick); 
  logo.addEventListener('contextmenu',onRightclick);
  logo.addEventListener('mousedown',onmousedown);
  logo.addEventListener ('mouseup',onmouseup); 
  logo.addEventListener('wheel',onmousewheel);
  logo.addEventListener('mouseover',onmouseover);
  logo.addEventListener('mouseout',onmouseout);
  logo.addEventListener('dragstart',ondragstart);
  logo.addEventListener('drag',ondrag); 
  logo.addEventListener('dragend',ondragend); 
