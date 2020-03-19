///        MOBILE NAV      ///
function mobileNav(e){var n=document.body,a=.1,l=document.querySelectorAll(e.takeMenuItem),t=document.querySelectorAll(e.menuWrap)[0],i=document.createElement("button"),s=document.createElement("div"),c=document.createElement("ul");t.classList.add("main-nav"),i.classList.add("mobile-nav--btn"),s.classList.add("mobile-nav"),c.classList.add("mobile-nav--list"),i.innerHTML="<span></span><span></span><span></span>",t.appendChild(i),t.appendChild(s),s.appendChild(c),i.onclick=function(){n.classList.toggle("active-nav")};for(var o=0;o<l.length;o++)c.innerHTML+='<li class="mobile-nav--item" style="transition-delay: '+(a+=.02)+'s ">'+l[o].innerHTML+"</li>",c.children[o].children[0].classList=""}
mobileNav({
	takeMenuItem: '.navigation li',
	menuWrap: '.header'
});