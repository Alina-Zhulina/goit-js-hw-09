import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form"),l=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]'),r="feedback-form-state";window.addEventListener("DOMContentLoaded",()=>{const e=i(r);e&&(a.email=e.email,a.message=e.message,l.value=e.email||"",o.value=e.message||"")});t.addEventListener("input",e=>{e.target.name==="email"?a.email=e.target.value.trim():e.target.name==="message"&&(a.message=e.target.value.trim()),n(r,a)});t.addEventListener("submit",e=>{if(e.preventDefault(),l.value===""||o.value===""){alert("Fill please all fields");return}console.log(a),localStorage.removeItem(r),a.email="",a.message="",t.reset()});function n(e,s){const m=JSON.stringify(s);localStorage.setItem(e,m)}function i(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return null}}
//# sourceMappingURL=commonHelpers2.js.map
