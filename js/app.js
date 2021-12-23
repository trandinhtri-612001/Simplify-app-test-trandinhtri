
const menuMobile = document.querySelector(".wraper-menu-mobile");
const iconmenuMobile = document.querySelector(" .mobile-menu ");
const iconclosemenuMobile = document.querySelector(" .close-menu ");
const imgbannerip = document.querySelector(" .img-banner-ip ");
const contentbannerip = document.querySelector(" .content-banner-ip ");
const wraperbannertrack = document.querySelector(" .wraper-banner-track ");


const img = document.querySelectorAll(" .col-footer img");
const title = document.querySelectorAll(" .col-footer h3 ");
const span = document.querySelectorAll(" .col-footer span ");
console.log(title)


iconmenuMobile.addEventListener('click',()=>{
//     let close =` <div class="close-menu">
//     <i class="fas fa-window-close"></i>
// </div>`;
// iconmenuMobile.innerHTML= close;
 
    menuMobile.style.top = '89px'

})

iconclosemenuMobile.addEventListener('click',()=>{

    console.log(iconmenuMobile)

    menuMobile.style.top = '-193px'
})

window.onscroll = function() {myFunction()};
function myFunction() {
    let str =document.documentElement.scrollTop;
hendle(str);
controleFooter(str)



      
  }

  const hendle =(str)=>{
    
if(str>733){
    imgbannerip.style.right = '0';
    contentbannerip.style.left='0';
}else{
    
    imgbannerip.style.right = '100%';
    contentbannerip.style.left='100%';
}
if(str>1328){
    wraperbannertrack.style.opacity= '1'
}else if(str<1271){
     wraperbannertrack.style.opacity= '0'
}
  
  }
  var w = window.screen.availWidth;
  var h = window.screen.availWidth;

// const controleripard=(str)=>{
//     if(w <=1506 ){
//         
//         imgbannerip.style.right = '0';
//         contentbannerip.style.left='0';
//         wraperbannertrack.style.opacity= '1'
//         img.forEach((el,index)=>{
//             el.style.maxWidth = '255px'
//             title[index].style.opacity = '1' 
//             span[index].style.opacity = '1' 
//         })
        
//         colfooter[0].style.marginLeft = '15px';
//         const lg = colfooter.length;
        
//         colfooter[lg-1 ].style.margin = '0 15px 0 15px'
//     }
// }


  const controleFooter = (str)=>{
    if(str > 1590){
        img.forEach((el,index)=>{
            el.style.maxWidth = '255px'
            title[index].style.opacity = '1' 
            span[index].style.opacity = '1' 
        })
        
    }else{
        img.forEach((el,index)=>{
            el.style.maxWidth = '0'
            title[index].style.opacity = '0' 
            span[index].style.opacity = '0' 
        })
    }
  }


  const colfooter = document.querySelectorAll(".col-footer");
colfooter[0].style.marginLeft = '0';
const lg = colfooter.length;

colfooter[lg-1 ].style.margin = '0 0 0 15px'
