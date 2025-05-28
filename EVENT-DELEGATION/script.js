const div=document.querySelector('div');
const form=document.querySelector('form');
const button=document.querySelector('button'); 

// div.addEventListener("click",(e)=>{
//     alert("DIV clicked");
//     e.stoppropogation();
// })
// form.addEventListener("click",()=>{
//     alert("Form Clicked");
//     e.stopPropogation();
// })
// button.addEventListener("click",()=>{
//     alert("Button clicked");
//     e.stopPropogation();
// })


// div.addEventListener("click",func)
// form.addEventListener("click",func)
// button.addEventListener("click",func)

// function func(event){
//     alert("currentTarget="+event.currentTarget.tagName);
//     alert("this.target"+this.target);
//     alert("even.target"+event.target.tagName)
// }


// div.addEventListener("click",()=>{
//     alert("DIV clicked");
// },{capture:true})
// form.addEventListener("click",()=>{
//     alert("Form Clicked");
// },{capture:true})
// button.addEventListener("click",()=>{
//     alert("Button clicked");
// },{capture:true})


// div.addEventListener("click",(e)=>{
//     alert("DIV clicked");
//     e.stoppropogation();
// })
// form.addEventListener("click",()=>{
//     alert("Form Clicked");
//     e.stopPropogation();
// },{capture:true})
// button.addEventListener("click",()=>{
//     alert("Button clicked");
//     e.stopPropogation();
// })
// o/p:Now form will do capturing only
// Form clicked,Button clicked,DIV clicked