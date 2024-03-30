function change (){
    if(innerWidth >= 600){
        nav_header.style.display = 'block';
    }else{
        nav_header.style.display = "none";

    }
}

function clickburguer(){
    if(nav_header.style.display == 'block'){
        nav_header.style.display = 'none';
    }else{
        nav_header.style.display = 'block';
    }
}