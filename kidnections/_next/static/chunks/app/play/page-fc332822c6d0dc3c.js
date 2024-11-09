(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5042:function(){},4505:function(e,t,r){Promise.resolve().then(r.bind(r,7126))},7126:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(7437),s=r(4033),l=r(5925),o=r(2265),c=r(711),a=r.n(c),i=r(3023);let d=e=>{let{id:t,word:r,cardState:s,selectCard:l,shake:o}=e;return(0,n.jsx)("div",{className:"".concat("relative flex text-center items-center justify-center gap-y-1 h-[80px] p-6 rounded-md shadow transition duration-300 ease-in-out"," ").concat({open:"bg-gray-200 text-slate-800 cursor-pointer hover:cursor-pointer hover:bg-gray-300",selected:"bg-gray-800 text-white cursor-pointer hover:cursor-pointer ".concat(o?"shake":""),matched_0:"bg-yellow-500 text-white cursor-default",matched_1:"bg-green-500 text-white cursor-default",matched_2:"bg-blue-500 text-white cursor-default",matched_3:"bg-purple-500 text-white cursor-default"}[s]),onClick:()=>{["matched_0","matched_1","matched_2","matched_3"].includes(s)||(l(t),console.log("".concat(t,"(").concat(s,"): ").concat(r)))},children:(0,n.jsx)("p",{className:"text-lg font-bold",children:r.toUpperCase()})})},u=e=>{let{id:t,category:r,words:s,cardState:l}=e;return(0,n.jsx)("div",{className:"".concat("relative flex text-center items-center justify-center gap-y-1 h-[80px] col-span-4 p-6 rounded-md shadow  cursor-default"," ").concat({matched_0:"bg-yellow-500 ",matched_1:"bg-green-500",matched_2:"bg-blue-500",matched_3:"bg-purple-500"}[l]),children:(0,n.jsxs)("div",{className:"flex flex-col gap",children:[(0,n.jsx)("p",{className:"text-lg font-bold",children:r}),(0,n.jsx)("p",{className:"text-sm font-medium",children:s.join(", ").toUpperCase()})]})})},h=e=>{let{cardState:t}=e;return(0,n.jsx)("div",{className:"".concat("gap-y-1 w-[40px] h-[40px] p-2 rounded-md shadow cursor-default"," ").concat({matched_0:"bg-yellow-500",matched_1:"bg-green-500",matched_2:"bg-blue-500",matched_3:"bg-purple-500"}[t])})},f=(e,t,r)=>{for(let n=e.length-1;n>=t;n--){let s=Math.floor(r()*(n-t))+t;[e[n],e[s]]=[e[s],e[n]]}},g=(e,t,r)=>{let n=new Set(t);for(let t=r;t<e.length;t++){let s=e[t].id;if(n.has(s))continue;let l=-1;for(let t=r;t<e.length;t++)if(n.has(e[t].id)&&t>=r+4){l=t;break}-1!==l&&([e[t],e[l]]=[e[l],e[t]])}},m=(e,t)=>{let r=e.map(e=>t.find(t=>t.id===e));if(r.includes(void 0))return!1;let n=r[0].category,s=r.every(e=>e.category===n);return!!s&&n},p=(e,t)=>{let r=t.find(t=>t.id===e);return r?r.category:"not-found"},x=e=>{let{puzzleData:t}=e,r=a()("44"),[,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(0),[x,v]=(0,o.useState)([]),[b,y]=(0,o.useState)([]),[j,w]=(0,o.useState)("active"),[N,_]=(0,o.useState)(Array.from({length:16},(e,t)=>[t,"open"]).reduce((e,t)=>{let[r,n]=t;return{...e,[r]:n}},{})),S=[],k=[];for(let e=0;e<t.length;e++){let r=t[e].t,n=t[e].w,s=n.length;n.forEach((t,r)=>{S.push({id:r+e*s,word:t,category:e})}),k.push({text:r,words:n})}f(S,0,r);let[C,O]=(0,o.useState)(S),T=()=>{let e=a()(l),t=4*x.length;f(C,t,e),O(C),c(l+1)},[z,A]=(0,o.useState)(""),[E,G]=(0,o.useState)(!1),[P,D]=(0,o.useState)(4),M=e=>{E||(A(e),G(!1),setTimeout(()=>G(!0),3500),setTimeout(()=>{A(""),G(!1)},4200))},B=e=>{_(t=>{let r=t[e],n=Object.values(t).filter(e=>"selected"===e).length;return"open"===r&&n<4?{...t,[e]:"selected"}:"selected"===r?{...t,[e]:"open"}:(M("Only select four words."),t)})},[J,U]=(0,o.useState)(!1),W=()=>{U(!0),setTimeout(()=>{U(!1)},600)},q=()=>{_(e=>{let t=Object.entries(e).reduce((e,t)=>{let[r,n]=t;return"selected"===n?e[r]="open":e[r]=n,e},{});return t})},H=()=>{_(e=>{let t=Object.entries(e).filter(e=>{let[,t]=e;return"selected"===t}).map(e=>{let[t]=e;return Number(t)});if(console.log("====="),console.log(P),console.log(t),4!==t.length)return M("Select four words before submitting."),e;if(P>0){let r=m(t,S),n=b.some(e=>e.length===t.length&&e.every((e,r)=>e===t[r]));if(n)return M("You've tried this already!"),e;if(y([...b,structuredClone(t)]),console.log("guesses:"),console.log(b),!1===r)return 1===P&&w("lost"),D(P-1),M("Not quite. Try again!"),W(),e;let s=Object.entries(e).reduce((e,t)=>{let[n,s]=t;return"selected"===s?e[n]="matched_".concat(r):e[n]=s,e},{});console.log("solved categories"),console.log(x);let l=4*x.length;return setTimeout(()=>{O(e=>{let r=[...e];return g(r,t,l),r}),setTimeout(()=>{v(e=>{let t=[...e];return t.includes(r)||t.push(r),4===t.length&&w("won"),t})},1e3)},600),console.log("here at updated the states"),s}return M("Sorry, out of guesses. Maybe next time."),e})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"relative flex justify-center items-center h-[40px]",children:(0,n.jsx)("p",{className:"text-lg text-blue-700 text-semibold transition-opacity duration-1000\n                  ".concat(E?"opacity-0":"opacity-100"),children:z})}),(0,n.jsx)("div",{className:"p-4 w-[800px]",children:(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-4",children:[x.map((e,t)=>(0,n.jsx)(u,{id:e,category:k[e].text,words:k[e].words,cardState:"matched_".concat(e)},e)),C.slice(4*x.length,16).map((e,t)=>(0,n.jsx)(d,{id:e.id,word:e.word,cardState:N[e.id],selectCard:B,shake:J},e.id))]})}),(0,n.jsxs)("div",{className:"relative flex justify-center items-center h-[40px]",children:[(0,n.jsx)("p",{className:"text-lg text-semibold p-3",children:P>0?"Attempts Left:":"Game Over"}),(0,n.jsx)("div",{className:"flex space-x-2",children:[...Array(P)].map((e,t)=>(0,n.jsx)("div",{className:"w-4 h-4 bg-red-500 rounded-full"},t))})]}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"relative flex justify-center items-center h-[40px] grid grid-cols-3 gap-4 p-4",children:[(0,n.jsx)(i.z,{onClick:()=>T(),children:"Shuffle"}),(0,n.jsx)(i.z,{onClick:()=>q(),children:"Deselect"}),(0,n.jsx)(i.z,{onClick:()=>H(),children:"Guess"})]})}),(0,n.jsx)("div",{className:"flex justify-center p-10",children:(0,n.jsx)("div",{className:"relative flex justify-center items-center grid grid-cols-4 gap-1 p-1  w-[200px]",children:"won"===j||"lost"===j?b.map((e,t)=>e.map((e,r)=>(0,n.jsx)(h,{cardState:"matched_".concat(p(e,S))},4*t+r))):""})})]})},v=[{w:["Giggle","Chuckle","Snicker","Guffaw"],t:"Different words for laughing"},{w:["Kapow","Splat","Wham","Bang"],t:"Comic book onomatopoeia sounds"},{w:["Crayon","Marker","Colored pencil","Pastel"],t:"Types of coloring utensils"},{w:["E.T.","Jumanji","The Sandlot","Home Alone"],t:"Classic movies for kids"}];var b=()=>{let e=(0,s.useSearchParams)(),t=e.get("d"),r=v;return t&&(r=function(e){let t=atob(e);return JSON.parse(t)}(t)),(0,n.jsxs)("div",{className:"flex justify-center items-center flex-col w-full lg:p-0 p-4",children:[(0,n.jsx)(x,{puzzleData:r}),(0,n.jsx)(l.x7,{})]})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(7437),s=r(2265),l=r(4949),o=r(6061),c=r(923);let a=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-90",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-2 py-2",sm:"h-9 rounded-md px-2",lg:"h-11 rounded-md px-5",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:i=!1,...d}=e,u=i?l.g7:"button";return(0,n.jsx)(u,{className:(0,c.cn)(a({variant:s,size:o,className:r})),ref:t,...d})});i.displayName="Button"},923:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(7042),s=r(3986);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}(0,r(8481).kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7)}},function(e){e.O(0,[667,711,971,864,744],function(){return e(e.s=4505)}),_N_E=e.O()}]);