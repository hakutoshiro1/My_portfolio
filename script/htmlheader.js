headermenu=document.getElementById("mysections_menubtn");
mysectionbtns=document.querySelectorAll(".mysection_btns");
hambmenu=document.getElementById("hambmenu")
closemenu=document.getElementById("closemenu")


// console.log(window.innerHeight)

headermenu.onclick=()=>
{ 
    mysectionbtns.forEach((element)=>
    {
        if(element.style.display=="block")
        {
            element.style.display="none"
            hambmenu.style.display="block";
            closemenu.style.display="none";
            headermenu.style.backgroundColor="#1f1f1f";
        }
        else 
        {
            element.style.display="block"
            hambmenu.style.display="none";
            closemenu.style.display="block";
            headermenu.style.backgroundColor="#333333";
        }
        
    });
}



home=document.querySelector(".myhome")
home_header_detail_strong=document.querySelector(".myhome_header_detail_strong")
home_header=document.querySelector(".myhome_header")

let count=1;
good_at=[" Web Developer"," Gamer"," Python Gui Developer"]
detaildisplay = ()=>
{
    home_header_detail_strong.innerHTML=`<strong style="font-size: large;color: #d41212;">${good_at[count%3]}</strong>`;
    count+=1;
}

setInterval(detaildisplay,3000)

home.onclick=()=>
{
    mysectionbtns.forEach((element)=>
    {
        if(element.style.display=="block")
        {
            element.style.display="none"
            hambmenu.style.display="block";
            closemenu.style.display="none";
            headermenu.style.backgroundColor="#1f1f1f";
        }
    })
}