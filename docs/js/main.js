const te=document.querySelector(".js-nav"),b=document.querySelector(".js-navText"),oe=document.querySelectorAll(".js-hidden");document.querySelector(".js-play");document.querySelector(".js-startSection");const re=()=>{b.classList.toggle("hidden");for(const s of oe)s.classList.toggle("hidden")};te.addEventListener("click",re);const ae=()=>{b.classList.add("hidden")};b.addEventListener("click",ae);const T=document.querySelectorAll(".js-dice"),a=document.querySelector(".js-counter"),J=document.querySelector(".js-traveller"),d=document.querySelector(".js-character");document.querySelector(".js-year");const W=document.querySelector(".js-resultYear");document.querySelector(".js-place");const Y=document.querySelector(".js-resultPlace");document.querySelector(".js-company");const A=document.querySelector(".js-resultCompany");document.querySelector(".js-complement");const I=document.querySelector(".js-resultComplement"),j=document.querySelector(".js-end");document.querySelector(".js-title");const y=document.querySelector(".js-errorPlace"),h=document.querySelector(".js-errorCompany"),v=document.querySelector(".js-errorComplement"),l=document.querySelector(".js-final");document.querySelector(".js-errors");const z=document.querySelector(".js-startGame"),O=document.querySelector(".js-resetGame"),k=document.querySelector(".js-resetGame2"),le="./images/Marty15.jpeg",ie="./images/Doc.jpeg",de="./images/biff.jpg",me="./images/Jennifer_Parker.webp";let m="",u="",t="",o="",r="",E=7,P=!1;const $="Reloj de la Torre",_="Herrería de Doc",F="Hotel Biff`s",K="Baile del Encantamiento Bajo el Mar",N="Casa de Marty",Q="Cafetería",c="George y Lorraine",L="Perro Rabioso Tannen",U="Chaleco con autosecado",V="Patinete volador",X="Tren del tiempo",Z="Caballo de Doc",ee="Condensador de fluzo",se="Traje antirradiación",x={year:["1885","1985","2015","1955"],place:[$,_,F,K,N,Q],company:["Marty","Doc","Biff","Jennifer",c,L,"Clara"],complement:[U,V,X,Z,"Einstein","Plutonio",ee,se]},g=[$,_],p=[$,N,Q],S=[...p,K],M=[...p,F],D=[X,Z],f=[ee,se],q=[...f,"Einstein","Plutonio"],C=[...f,"Plutonio",U,V],w=s=>{let e=s.target.innerText;d.classList.remove("hidden"),O.classList.remove("hidden"),z.classList.remove("hidden"),e==="Marty"?(d.src=le,u="Marty"):e==="Doc"?(d.src=ie,u="Doc"):e==="Biff"?(d.src=de,u="Biff"):e==="Jennifer"&&(u="Jennifer",d.src=me)};J.addEventListener("click",w);const ue=s=>{s.preventDefault(),J.removeEventListener("click",w),P=!0;for(const e of T)e.addEventListener("click",H)};z.addEventListener("click",ue);const pe={year:".js-resultYear",place:".js-resultPlace",company:".js-resultCompany",complement:".js-resultComplement"},H=s=>{E--,a.classList.remove("hidden");const e=s.currentTarget.id,R=Math.floor(Math.random()*x[e].length),n=x[e][R],ce=pe[e],G=document.querySelector(ce);switch(G.classList.remove("hidden"),G.innerHTML=n,e){case"year":m=n;break;case"place":t=n;break;case"company":o=n;break;case"complement":r=n;break}ye()},fe=()=>{for(const s of T)s.removeEventListener("click",H)},Le=()=>{l.classList.add("finalWin"),l.classList.add("slide"),a.innerHTML="¡¡¡Has ganado, qué fuerte!!!",a.classList.remove("hidden"),j.classList.remove("hidden"),k.classList.remove("hidden"),j.src="./images/200.gif",fe()},ye=()=>{const e={Marty:{1885:{places:g,companies:["Doc",L,"Clara"],complements:D},1985:{places:p,companies:["Doc","Biff","Jennifer",c],complements:q},1955:{places:S,companies:["Doc","Biff",c],complements:f},2015:{places:M,companies:["Doc","Biff","Jennifer",c],complements:C}},Doc:{1885:{places:g,companies:["Clara",L],complements:D},1985:{places:p,companies:["Marty","Biff","Jennifer",c],complements:q},1955:{places:S,companies:["Biff",c],complements:f},2015:{places:M,companies:["Marty","Biff","Jennifer",c],complements:C}},Biff:{1885:{places:g,companies:["Clara","Doc",L],complements:D},1985:{places:p,companies:["Marty","Doc","Jennifer",c],complements:q},1955:{places:S,companies:["Doc",c],complements:f},2015:{places:M,companies:["Marty","Doc","Jennifer",c],complements:C}},Jennifer:{1885:{places:g,companies:["Clara","Doc",L],complements:D},1985:{places:p,companies:["Marty","Doc","Biff",c],complements:q},1955:{places:S,companies:["Doc",c,"Biff"],complements:f},2015:{places:M,companies:["Marty","Doc","Biff",c],complements:C}}}[u][m];if(e.places.includes(t)&&e.companies.includes(o)&&e.complements.includes(r))i(y),i(h),i(v),Le();else if(E===0){for(const n of T)n.removeEventListener("click",H);he()}else if(a.innerHTML=`Te quedan ${E} tiradas`,t!==""&&!e.places.includes(t)){const n=`El lugar "${t}" no pertenece al año ${m}.`;B(n,y)}else if(t!==""&&e.places.includes(t)){if(i(y),o!==""&&!e.companies.includes(o)){const n=`El personaje "${o}" no pertenece al año ${m} o es tu personaje (eso destruiría el universo).`;B(n,h)}else o!==""&&e.companies.includes(o)&&i(h);if(r!==""&&!e.complements.includes(r)){const n=`El complemento "${r}" no pertenece al año ${m}.`;B(n,v)}else r!==""&&e.complements.includes(r)&&i(v)}},B=(s,e)=>{e.innerHTML=`<i class='warning fa-solid fa-triangle-exclamation'></i>${s}`,e.classList.add("errors")},i=s=>{s.innerHTML="",s.classList.remove("errors")},he=()=>{l.classList.add("finalLose"),l.classList.add("slide"),a.classList.remove("hidden"),a.innerHTML="Hay demasiadas paradojas temporales, has perdido... corre Marty!!!",j.classList.remove("hidden"),k.classList.remove("hidden"),j.src="./images/Doc1.gif"},ne=s=>{P=!1;for(const e of T)e.removeEventListener("click",H);console.log(P),s.preventDefault(),d.src="./images/Delorean.gif",J.addEventListener("click",w),ge(),E=7,Se(),je(),ve(),l.classList.remove("finalWin"),l.classList.remove("finalLose"),l.classList.remove("slide")};O.addEventListener("click",ne);const ve=()=>{y.innerHTML="",h.innerHTML="",v.innerHTML="",y.classList.remove("errors"),h.classList.remove("errors"),v.classList.remove("errors")},je=()=>{W.classList.add("hidden"),Y.classList.add("hidden"),A.classList.add("hidden"),I.classList.add("hidden"),j.classList.add("hidden"),a.classList.add("hidden"),k.classList.add("hidden")},ge=()=>{a.innerHTML="",u="",o="",r="",t="",m=""},Se=()=>{A.innerHTML="",I.innerHTML="",W.innerHTML="",Y.innerHTML=""};k.addEventListener("click",ne);
//# sourceMappingURL=main.js.map
