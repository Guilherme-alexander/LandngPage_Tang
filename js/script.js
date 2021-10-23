// =========================================================>
// MENU MOBILE
    document.querySelector('[name="menu"]').addEventListener('click',()=>{
        var menuMobile = document.querySelector('.menu-mobile ul');

        if(menuMobile.classList.contains('active')){
            menuMobile.classList.remove('active');
        }else{
            menuMobile.classList.add('active');
        }
    })

// =========================================================>
// SLIDER HEADER
    var lastIndex = 0;

    var imagem = document.querySelectorAll('.slider .container img');
    var bullets = document.querySelectorAll('.bullets-single');

    imagem.forEach((item,index)=>{
        bullets[index].addEventListener('click',()=>{
            let lastImage = imagem[lastIndex]
            let actualImage = imagem[index]

            bullets[lastIndex].classList.remove('active-bullets');
            bullets[index].classList.add('active-bullets')

            lastImage.style.opacity = 0;
            actualImage.style.opacity = 1;
            lastIndex = index;
        })
        
    });

// =========================================================>
// SESSÃO SABOR FUNÇÃO COR E IMAGE

    var itens = document.querySelectorAll('.box-suco img');
    var jarra = document.querySelector('.box-jarra img');
    let variavelCor = document.querySelector(':root');

    function colorBG(cor){
        variavelCor.style.setProperty("--cor1", cor);
    }
    
    function saborJarra(imgJara){
        jarra.src = imgJara
    }

    for(let i = 0; i < itens.length; i++){
        itens[i].addEventListener('click',function(e){
            console.log(e.target.id);
            document.querySelector('.box-jarra h3').innerHTML = e.target.id.toUpperCase()
            if(e.target.id == e.target.id){
                saborJarra(imgJara)
                colorBG(cor)
            }   
             
        })
    }

// =========================================================>
// FORM POPAP


var popap = document.querySelector('.popap')

var btn = document.querySelector('input[type=submit]')
    btn.addEventListener('click',(e)=>{
    e.preventDefault()
    popap.classList.add('active')

    document.querySelector('.close').addEventListener('click',()=>{
        popap.classList.remove('active')
    })
})

