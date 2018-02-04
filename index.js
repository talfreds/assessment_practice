var myImg = document.getElementById('centerimg');
var numup = 0;
var numl = 0;
var numsize = 100;
var mup = 50;
var msize = 10;
var menuId = document.getElementById('chat');
var mbot = 50;
var def = 50;
var sdef = 10;

document.getElementById('chat').style.bottom = def+'px';
document.getElementById('chat').style.right = def+'px';
document.getElementById('chat').style.height = sdef+'%';

document.getElementById('cshirt').style.bottom = def+'px';
document.getElementById('cshirt').style.right = def+'px';
document.getElementById('cshirt').style.height = sdef+'%';
    
document.getElementById('cring').style.bottom = def+'px';
document.getElementById('cring').style.right = def+'px';
document.getElementById('cring').style.height = sdef+'%';


document.getElementById('ava1button').addEventListener('click',
                                                      function(){
    myImg.src = "ava1.png";
});

document.getElementById('ava2button').addEventListener('click',
                                                      function(){
    myImg.src = "ava2.png";
});


document.getElementById('menub').addEventListener('click',  
                                                 function(){
    
    document.getElementById('menu').style.right = '0px';
    
});

document.getElementById('topb').addEventListener('click',    
                                                 function(){
    numup = numup + 7;
    document.getElementById('center').style.bottom = numup+'px';
});
document.getElementById('botb').addEventListener('click',    
                                                 function(){
    numup = numup - 7;
    document.getElementById('center').style.bottom = numup+'px';
});
document.getElementById('leftb').addEventListener('click',    
                                                 function(){
    numl = numl - 7;
    document.getElementById('center').style.left = numl+'px';
});
document.getElementById('rightb').addEventListener('click',    
                                                 function(){
    numl = numl + 7;
    document.getElementById('center').style.left = numl+'px';
});


document.getElementById('plusbutton').addEventListener('click',    
                                                 function(){
    numsize = numsize + 1;
    myImg.style.height = numsize+'%';
});

document.getElementById('minusbutton').addEventListener('click',    
                                                 function(){
    numsize = numsize - 1;
    myImg.style.height = numsize+'%';
});

myImg.addEventListener('click',    
                                                 function(){

    document.getElementById('buttons').style.display = 'none';
    document.getElementById('topb').style.display = 'none';
    document.getElementById('leftb').style.display = 'none';
    document.getElementById('rightb').style.display = 'none';
    document.getElementById('botb').style.display = 'none';
});

document.getElementById('header').addEventListener('click',    
                                                 function(){
    document.getElementById('buttons').style.display = 'inline';
    document.getElementById('topb').style.display = 'inline';
    document.getElementById('leftb').style.display = 'inline';
    document.getElementById('rightb').style.display = 'inline';
    document.getElementById('botb').style.display = 'inline';
});

document.getElementById('hat').addEventListener('click',    
                                                 function(){
    document.getElementById('chat').style.display = 'block';
    menuId = document.getElementById('chat');
    mbot = parseInt(menuId.style.bottom, 10);
    mho = parseInt(menuId.style.right, 10);
    menuId.style.bottom = mbot+'px';
    menuId.style.right = mho+'px';
});

document.getElementById('shirt').addEventListener('click',    
                                                 function(){
    document.getElementById('cshirt').style.display = 'block';
    menuId = document.getElementById('cshirt');
    mbot = parseInt(menuId.style.bottom, 10);
    mho = parseInt(menuId.style.right, 10);
    menuId.style.bottom = mbot+'px';
    menuId.style.right = mho+'px';
});

document.getElementById('ring').addEventListener('click',    
                                                 function(){
    document.getElementById('cring').style.display = 'block';
    menuId = document.getElementById('cring');
    mbot = parseInt(menuId.style.bottom, 10);
    mho = parseInt(menuId.style.right, 10);
    menuId.style.bottom = mbot+'px';
    menuId.style.right = mho+'px';
    
});

document.getElementById('mup').addEventListener('click',    
                                                 function(){ 
    
    mbot = parseInt(menuId.style.bottom, 10);
    console.log(mbot);
    mbot = mbot + 10;
    menuId.style.bottom = mbot+'px';
});

document.getElementById('mdown').addEventListener('click',    
                                                 function(){
    mbot = parseInt(menuId.style.bottom, 10);
    console.log(mbot);
    mbot = mbot - 10;
    menuId.style.bottom = mbot+'px';
});

document.getElementById('mleft').addEventListener('click',    
                                                 function(){
    mho = parseInt(menuId.style.right, 10);
    mho = mho + 10;
    menuId.style.right = mho+'px';
});

document.getElementById('mright').addEventListener('click',    
                                                 function(){
    mho = parseInt(menuId.style.right, 10);
    console.log(mho);
    mho = mho - 10;
    menuId.style.right = mho+'px';
});

document.getElementById('mplus').addEventListener('click',    
                                                 function(){
    msize = parseInt(menuId.style.height, 10);
    msize = msize + 1;
    menuId.style.height = msize+'%';
});

document.getElementById('mminus').addEventListener('click',    
                                                 function(){
    msize = parseInt(menuId.style.height, 10);
    msize = msize - 1;
    menuId.style.height = msize+'%';
});
