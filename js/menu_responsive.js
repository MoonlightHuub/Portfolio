const btntoggle = document.querySelector('.btn_responsive');

btntoggle.addEventListener('click', function(){
    document.getElementById('side_bar').classList.toggle('active');
})

const btnout = document.querySelector('.btn_out_slide');

btnout.addEventListener('click', function(){
    document.getElementById('side_bar').classList.toggle('active');
})