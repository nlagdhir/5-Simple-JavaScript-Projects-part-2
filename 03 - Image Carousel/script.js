const imgs = document.querySelector('#imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

const run = () => {
    console.log('test');
    idx++;

    if(idx > img.length-1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(run,2000);