(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{8590:function(e,t,r){Promise.resolve().then(r.bind(r,6925))},6925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var a=r(7437),s=r(4578),n=r(8110),l=r(1865),o=r(2265),i=r(4949),d=r(923),c=r(706),u=r(6061);let m=(0,u.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(c.f,{ref:t,className:(0,d.cn)(m(),r),...s})});f.displayName=c.f.displayName;let p=l.RV,g=o.createContext({}),h=e=>{let{...t}=e;return(0,a.jsx)(g.Provider,{value:{name:t.name},children:(0,a.jsx)(l.Qr,{...t})})},x=()=>{let e=o.useContext(g),t=o.useContext(b),{getFieldState:r,formState:a}=(0,l.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...s}},b=o.createContext({}),v=o.forwardRef((e,t)=>{let{className:r,...s}=e,n=o.useId();return(0,a.jsx)(b.Provider,{value:{id:n},children:(0,a.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",r),...s})})});v.displayName="FormItem";let y=o.forwardRef((e,t)=>{let{className:r,...s}=e,{error:n,formItemId:l}=x();return(0,a.jsx)(f,{ref:t,className:(0,d.cn)(n&&"text-destructive",r),htmlFor:l,...s})});y.displayName="FormLabel";let w=o.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:n,formDescriptionId:l,formMessageId:o}=x();return(0,a.jsx)(i.g7,{ref:t,id:n,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...r})});w.displayName="FormControl";let j=o.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:n}=x();return(0,a.jsx)("p",{ref:t,id:n,className:(0,d.cn)("text-sm text-muted-foreground",r),...s})});j.displayName="FormDescription";let k=o.forwardRef((e,t)=>{let{className:r,children:s,...n}=e,{error:l,formMessageId:o}=x(),i=l?String(null==l?void 0:l.message):s;return i?(0,a.jsx)("p",{ref:t,id:o,className:(0,d.cn)("text-sm font-medium text-destructive",r),...n,children:i}):null});k.displayName="FormMessage";let N=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});N.displayName="Textarea";let P=o.forwardRef((e,t)=>{let{className:r,type:s,...n}=e;return(0,a.jsx)("input",{type:s,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});P.displayName="Input";var S=r(3023),T=r(8470);let z=(0,u.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),C=o.forwardRef((e,t)=>{let{className:r,variant:s,...n}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:(0,d.cn)(z({variant:s}),r),...n})});C.displayName="Alert";let F=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h5",{ref:t,className:(0,d.cn)("mb-1 font-medium leading-none tracking-tight",r),...s})});F.displayName="AlertTitle";let _=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,d.cn)("text-sm [&_p]:leading-relaxed",r),...s})});_.displayName="AlertDescription";var A=r(6560),R=r.n(A);let E=e=>{let{color:t="#000",style:r="small"}=e;return(0,a.jsxs)("span",{className:"small"==r?R().loading2:R().loading,children:[(0,a.jsx)("span",{style:{backgroundColor:t}}),(0,a.jsx)("span",{style:{backgroundColor:t}}),(0,a.jsx)("span",{style:{backgroundColor:t}})]})};E.defaultProps={style:"small"};let M=e=>{let{suggestion:t,onClick:r,isLoading:s=!1}=e;return(0,a.jsx)("button",{onClick:()=>r(),disabled:s,className:"border p-2 rounded-2xl ".concat(s?"cursor-not-allowed":"cursor-pointer"," hover:bg-gray-100 transition"),children:t})};var V=r(4033),G=r(5925),I=r(6909),B=r(5031);let H=["sports teams, snacks, and something else","school subjects and popular books","things that start with the letter Q","types of candy; star wars; cool flying things"],O=[{name:"Puzzle 1",link:"play?d=".concat((0,I.A)([{w:["Quicksand","Queen","Quiz","Quilt"],t:"Things that start with the letter 'Q'."},{w:["Pyramids","Pharaoh","Sphinx","Nile"],t:"Ancient Egyptian landmarks and symbols."},{w:["Wolverine","Spider-Man","Iron Man","Hulk"],t:"Superheroes from the Marvel Universe."},{w:["Volcano","Earthquake","Tsunami","Hurricane"],t:"Natural disasters with powerful effects."}]))},{name:"Puzzle 2",link:"play?d=".concat((0,I.A)([{w:["Instagram","Snapchat","TikTok","Facebook"],t:"Popular social media platforms"},{w:["Snickers","M&Ms","Twix","Skittles"],t:"Famous candy brands"},{w:["Stranger Things","The Mandalorian","Avatar","The Flash"],t:"Popular TV shows and movies"},{w:["iPhone","MacBook","Android","PlayStation"],t:"Well-known tech products"}]))},{name:"Puzzle 3",link:"play?d=".concat((0,I.A)([{w:["YouTube","Twitter","Snapchat","TikTok"],t:"Popular social media platforms"},{w:["Gatorade","Coca-Cola","Pepsi","Sprite"],t:"Famous beverage brands"},{w:["Avengers","Harry Potter","Frozen","Spider-Man"],t:"Popular movies and franchises"},{w:["Xbox","Nintendo","PS5","Switch"],t:"Well-known gaming consoles"}]))},{name:"Puzzle 4",link:"play?d=".concat((0,I.A)([{w:["Lion","Elephant","Tiger","Giraffe"],t:"Common wild animals"},{w:["Pikachu","Charmander","Bulbasaur","Squirtle"],t:"Famous Pok\xe9mon characters"},{w:["Soccer","Basketball","Tennis","Baseball"],t:"Popular sports"},{w:["Harry Potter","Percy Jackson","Diary of a Wimpy Kid","The Hunger Games"],t:"Famous book series"}]))},{name:"Puzzle 5",link:"play?d=".concat((0,I.A)([{w:["Coxswain","Shell","Stroke","Oar"],t:"Terms related to rowing"},{w:["Seinfeld","Friends","The X-Files","The Fresh Prince of Bel-Air"],t:"Popular 90s TV shows"},{w:["Bask","Brood","Glimpse","Linger"],t:"Verbs that suggest prolonged or lingering actions"},{w:["Fleece","Cotton","Linen","Wool"],t:"Types of fabric"}]))},{name:"Puzzle 6",link:"play?d=".concat((0,I.A)([{w:["Giggle","Chuckle","Snicker","Guffaw"],t:"Different words for laughing"},{w:["Kapow","Splat","Wham","Bang"],t:"Comic book onomatopoeia sounds"},{w:["Crayon","Marker","Colored pencil","Pastel"],t:"Types of coloring utensils"},{w:["E.T.","Jumanji","The Sandlot","Home Alone"],t:"Classic movies for kids"}]))}],Q=s.Ry({url:s.Z_().min(1),prompt:s.Z_().min(3).max(160)});var W=e=>{let{imageUrl:t,prompt:r,redirectUrl:s,modelLatency:i,id:d}=e,[c,u]=(0,o.useState)(!1),[m,f]=(0,o.useState)(null),[g,x]=(0,o.useState)(null),[b,z]=(0,o.useState)(null),A=(0,V.useRouter)(),R=(0,l.cI)({resolver:(0,n.F)(Q),mode:"onChange",defaultValues:{url:"",prompt:""}});(0,o.useEffect)(()=>{t&&r&&s&&i&&d&&(x({image_url:t,model_latency_ms:i,id:d}),z(s),R.setValue("prompt",r),R.setValue("url",s))},[t,i,r,s,d,R]);let I=(0,o.useCallback)(e=>{R.setValue("prompt",e)},[R]),W=(0,o.useCallback)(async e=>{u(!0),x(null),z(e.url);try{let t={url:e.url,prompt:e.prompt},r=await fetch("/api/generate",{method:"POST",body:JSON.stringify(t)});if(!r.ok||200!==r.status){let e=await r.text();throw Error("Failed to generate: ".concat(r.status,", ").concat(e))}let a=await r.json();va.track("Generated puzzle",{prompt:e.prompt}),A.push("/start/".concat(a.id))}catch(t){va.track("Failed to generate",{prompt:e.prompt}),t instanceof Error&&f(t)}finally{u(!1)}},[A]);return(0,a.jsxs)("div",{className:"flex justify-center items-center flex-col w-full lg:p-0 p-4 sm:mb-28 mb-0",children:[(0,a.jsxs)("div",{className:"max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10",children:[(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-10",children:"Generate a Puzzle (not wired yet):"}),(0,a.jsx)(p,{...R,children:(0,a.jsx)("form",{onSubmit:R.handleSubmit(W),children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(h,{control:R.control,name:"url",render:e=>{let{field:t}=e;return(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:"Target Kid"}),(0,a.jsx)(w,{children:(0,a.jsx)(P,{placeholder:"an 8 year old who likes soccer",...t})}),(0,a.jsx)(j,{children:"Describe the kid who you want to make the puzzle for."}),(0,a.jsx)(k,{})]})}}),(0,a.jsx)(h,{control:R.control,name:"prompt",render:e=>{let{field:t}=e;return(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:"Provide some input for the themes:"}),(0,a.jsx)(w,{children:(0,a.jsx)(N,{placeholder:"superheroes and rock stars",className:"resize-none",...t})}),(0,a.jsx)(j,{className:"",children:"These are the themes of the puzzle."}),(0,a.jsx)(k,{})]})}}),(0,a.jsxs)("div",{className:"my-2",children:[(0,a.jsx)("p",{className:"text-sm font-medium mb-3",children:"Prompt suggestions"}),(0,a.jsx)("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-3 text-center text-gray-500 text-sm",children:H.map(e=>(0,a.jsx)(M,{suggestion:e,onClick:()=>I(e),isLoading:c},e))})]}),(0,a.jsx)(S.z,{type:"submit",disabled:c,className:"inline-flex justify-center max-w-[200px] mx-auto w-full",children:c?(0,a.jsx)(E,{color:"white"}):g?"✨ Regenerate":"Generate"}),m&&(0,a.jsxs)(C,{variant:"destructive",children:[(0,a.jsx)(T.Z,{className:"h-4 w-4"}),(0,a.jsx)(F,{children:"Error"}),(0,a.jsx)(_,{children:m.message})]})]})})})]}),(0,a.jsxs)("div",{className:"col-span-1",children:[b&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("h1",{className:"text-3xl font-bold sm:mb-5 mb-5 mt-5 sm:mt-0 sm:text-center text-left",children:"Your Kidnections"})}),(0,a.jsx)("h1",{className:"text-3xl font-bold sm:mb-5 mb-5 mt-5 sm:mt-0 sm:text-center text-left",children:"Live generation is off, but try some examples!"}),(0,a.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:O.map((e,t)=>(0,a.jsx)("li",{className:"list-none",children:(0,a.jsx)(B.Z,{href:e.link,className:"block px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-600 active:bg-gray-900",children:e.name})},t))})]})]}),(0,a.jsx)(G.x7,{})]})}},5031:function(e,t,r){"use strict";var a=r(7437),s=r(1396),n=r.n(s);t.Z=e=>{let{children:t,href:r,...s}=e;return(0,a.jsx)(n(),{href:r,...s,className:"py-2.5 px-4 text-center rounded-lg duration-150 ".concat((null==s?void 0:s.className)||""),children:t})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),s=r(2265),n=r(4949),l=r(6061),o=r(923);let i=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-90",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-2 py-2",sm:"h-9 rounded-md px-2",lg:"h-11 rounded-md px-5",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:s,size:l,className:r})),ref:t,...c})});d.displayName="Button"},6909:function(e,t,r){"use strict";function a(e){let t=JSON.stringify(e);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function s(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");for(;t.length%4!=0;)t+="=";let r=atob(t);return JSON.parse(r)}r.d(t,{A:function(){return a},K:function(){return s}})},923:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(7042),s=r(3986);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,a.W)(t))}(0,r(8481).kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7)},6560:function(e){e.exports={loading:"loading-dots_loading__A9HFq",spacer:"loading-dots_spacer__kbh4S",blink:"loading-dots_blink__uEKaz",loading2:"loading-dots_loading2__1b8vT"}}},function(e){e.O(0,[176,555,652,971,864,744],function(){return e(e.s=8590)}),_N_E=e.O()}]);