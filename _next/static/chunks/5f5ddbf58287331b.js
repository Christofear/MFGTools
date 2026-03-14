(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57485,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},69588,36406,71166,e=>{"use strict";var t=e.i(22602),n=e.i(54524);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var i=Symbol.for("react.lazy"),o=n[" use ".trim().toString()];function s(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===i&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}function l(e){var i;let l,a=(i=e,(l=n.forwardRef((e,t)=>{let{children:i,...l}=e;if(s(i)&&"function"==typeof o&&(i=o(i._payload)),n.isValidElement(i)){var a;let e,o,s=(a=i,(o=(e=Object.getOwnPropertyDescriptor(a.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?a.ref:(o=(e=Object.getOwnPropertyDescriptor(a,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?a.props.ref:a.props.ref||a.ref),d=function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{let t=o(...e);return i(...e),t}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(l,i.props);return i.type!==n.Fragment&&(d.ref=t?function(...e){return t=>{let n=!1,i=e.map(e=>{let i=r(e,t);return n||"function"!=typeof i||(n=!0),i});if(n)return()=>{for(let t=0;t<i.length;t++){let n=i[t];"function"==typeof n?n():r(e[t],null)}}}}(t,s):s),n.cloneElement(i,d)}return n.Children.count(i)>1?n.Children.only(null):null})).displayName=`${i}.SlotClone`,l),d=n.forwardRef((e,r)=>{let{children:i,...l}=e;s(i)&&"function"==typeof o&&(i=o(i._payload));let d=n.Children.toArray(i),u=d.find(c);if(u){let e=u.props.children,i=d.map(t=>t!==u?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,t.jsx)(a,{...l,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,i):null})}return(0,t.jsx)(a,{...l,ref:r,children:i})});return d.displayName=`${e}.Slot`,d}var a=l("Slot"),d=Symbol("radix.slottable");function c(e){return n.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===d}e.s(["Slot",()=>a,"createSlot",()=>l],36406);var u=e.i(44643);let p=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,m=u.clsx,h=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return m(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==o?void 0:o[e];if(null===t)return null;let s=p(t)||p(r);return i[e][s]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return m(e,s,null==t||null==(r=t.compoundVariants)?void 0:r.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...o,...l}[t]):({...o,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)};e.s(["cva",0,h],71166);var f=e.i(35023);let x=h("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function g({className:e,variant:n,size:r,asChild:i=!1,...o}){return(0,t.jsx)(i?a:"button",{"data-slot":"button",className:(0,f.cn)(x({variant:n,size:r,className:e})),...o})}e.s(["Button",()=>g],69588)},46693,e=>{"use strict";let t=(0,e.i(1589).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",()=>t],46693)},77370,e=>{"use strict";let t=(0,e.i(1589).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>t],77370)},45633,e=>{"use strict";var t=e.i(22602),n=e.i(7286),r=e.i(54524);let i=(0,e.i(1589).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var o=e.i(46693),s=e.i(77370),l=e.i(69588);let a=[{id:"list-all-tools",title:"List All Tools in Part",description:"Exports a list of all tools used in the current part file to a text file. Useful for tool audits and documentation.",filename:"ListAllTools.vb",code:`Option Strict Off
Imports System
Imports NXOpen
Imports NXOpen.UF

Module ListAllTools
    Dim theSession As Session = Session.GetSession()
    Dim theUFSession As UFSession = UFSession.GetUFSession()
    Dim lw As ListingWindow = theSession.ListingWindow()

    Sub Main()
        Dim workPart As Part = theSession.Parts.Work
        
        If workPart Is Nothing Then
            lw.Open()
            lw.WriteLine("No part is currently open.")
            Return
        End If
        
        lw.Open()
        lw.WriteLine("=== Tool List for: " & workPart.Name & " ===")
        lw.WriteLine("")
        
        Dim toolCount As Integer = 0
        
        For Each obj As NXObject In workPart.CAMSetup.CAMGroupCollection
            If TypeOf obj Is CAM.Tool Then
                Dim tool As CAM.Tool = CType(obj, CAM.Tool)
                toolCount += 1
                lw.WriteLine("Tool " & toolCount.ToString() & ": " & tool.Name)
                lw.WriteLine("   Type: " & tool.GetType().Name)
                lw.WriteLine("")
            End If
        Next
        
        lw.WriteLine("=== Total Tools: " & toolCount.ToString() & " ===")
        
    End Sub

    Public Function GetUnloadOption(ByVal dummy As String) As Integer
        Return CInt(Session.LibraryUnloadOption.Immediately)
    End Function

End Module`},{id:"export-operation-names",title:"Export Operation Names to CSV",description:"Loops through all operations in the current setup and exports their names, tool references, and estimated cycle times to a CSV file.",filename:"ExportOperationsCSV.vb",code:`Option Strict Off
Imports System
Imports System.IO
Imports NXOpen
Imports NXOpen.UF
Imports NXOpen.CAM

Module ExportOperationsCSV
    Dim theSession As Session = Session.GetSession()
    Dim theUFSession As UFSession = UFSession.GetUFSession()
    Dim lw As ListingWindow = theSession.ListingWindow()

    Sub Main()
        Dim workPart As Part = theSession.Parts.Work
        
        If workPart Is Nothing Then
            lw.Open()
            lw.WriteLine("No part is currently open.")
            Return
        End If
        
        Dim csvPath As String = Path.Combine(
            Path.GetDirectoryName(workPart.FullPath),
            workPart.Name & "_operations.csv"
        )
        
        Using writer As New StreamWriter(csvPath)
            writer.WriteLine("Operation Name,Tool Name,Method,Status")
            
            For Each ncGroup As NCGroup In workPart.CAMSetup.CAMGroupCollection
                If TypeOf ncGroup Is Operation Then
                    Dim op As Operation = CType(ncGroup, Operation)
                    Dim toolName As String = "N/A"
                    
                    Try
                        If op.GetParent(CAMSetup.View.MachineTool) IsNot Nothing Then
                            toolName = op.GetParent(CAMSetup.View.MachineTool).Name
                        End If
                    Catch ex As Exception
                        toolName = "Error"
                    End Try
                    
                    writer.WriteLine(String.Format("{0},{1},{2},{3}",
                        op.Name,
                        toolName,
                        op.Method.ToString(),
                        op.Status.ToString()
                    ))
                End If
            Next
        End Using
        
        lw.Open()
        lw.WriteLine("Operations exported to: " & csvPath)
        
    End Sub

    Public Function GetUnloadOption(ByVal dummy As String) As Integer
        Return CInt(Session.LibraryUnloadOption.Immediately)
    End Function

End Module`}];function d({code:e,filename:n}){let[a,d]=(0,r.useState)(!1),u=async()=>{await navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),2e3)};return(0,t.jsxs)("div",{className:"border border-slate-200 rounded-2xl overflow-hidden bg-[#1e1e1e] shadow-lg",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-[#404040]",children:[(0,t.jsx)("span",{className:"text-sm font-mono text-[#9cdcfe]",children:n}),(0,t.jsx)("button",{onClick:u,className:"flex items-center gap-1.5 text-sm text-[#808080] hover:text-white transition-colors",children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Check,{className:"w-4 h-4 text-green-400"}),(0,t.jsx)("span",{className:"text-green-400",children:"Copied!"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"Copy"})]})})]}),(0,t.jsx)("div",{className:"overflow-x-auto max-h-96 overflow-y-auto",children:(0,t.jsx)("pre",{className:"p-4 text-sm font-mono leading-relaxed",children:(0,t.jsx)("code",{className:"text-[#d4d4d4]",children:e.split("\n").map((e,n)=>(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{className:"select-none w-10 text-right pr-4 text-[#6e7681]",children:n+1}),(0,t.jsx)("span",{className:"flex-1",children:function(e){let n,r=["Option","Strict","Off","On","Imports","Module","End","Sub","Main","Function","Dim","As","If","Then","Else","ElseIf","For","Each","In","Next","While","Do","Loop","Return","Try","Catch","Using","New","Nothing","Is","IsNot","TypeOf","CType","CInt","ByVal","ByRef","Public","Private","Integer","String","Boolean"],i=["Session","UFSession","ListingWindow","Part","NXObject","CAM","Tool","Operation","NCGroup","StreamWriter","Exception"];if(e.trim().startsWith("'"))return(0,t.jsx)("span",{className:"text-[#6a9955]",children:e});let o=/"[^"]*"/g,s=[],l=0;for(;null!==(n=o.exec(e));)n.index>l&&s.push(c(e.slice(l,n.index),r,i)),s.push((0,t.jsx)("span",{className:"text-[#ce9178]",children:n[0]},n.index)),l=n.index+n[0].length;return l<e.length&&s.push(c(e.slice(l),r,i)),s.length>0?(0,t.jsx)(t.Fragment,{children:s}):c(e,r,i)}(e)})]},n))})})}),(0,t.jsx)("div",{className:"px-4 py-3 bg-[#2d2d2d] border-t border-[#404040]",children:(0,t.jsxs)(l.Button,{onClick:()=>{let t=new Blob([e],{type:"text/plain"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},variant:"outline",size:"sm",className:"bg-[#3c3c3c] border-[#505050] text-[#d4d4d4] hover:bg-[#4c4c4c] hover:text-white",children:[(0,t.jsx)(s.Download,{className:"w-4 h-4 mr-2"}),"Download ",n]})})]})}function c(e,n,r){return e.split(/(\s+|[().,=&+])/g).map((e,i)=>n.includes(e)?(0,t.jsx)("span",{className:"text-[#569cd6]",children:e},i):r.includes(e)?(0,t.jsx)("span",{className:"text-[#4ec9b0]",children:e},i):e)}function u(){return(0,t.jsxs)(n.PageLayout,{children:[(0,t.jsx)("header",{className:"py-12 md:py-16 px-6 bg-gradient-to-br from-[#005393] to-[#003d70] text-white text-center",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-extrabold mb-4",children:"NX Journals"}),(0,t.jsx)("p",{className:"text-xl text-blue-100",children:"Free VB.NET scripts for Siemens NX automation. Copy or download."})]})}),(0,t.jsx)("main",{className:"max-w-4xl mx-auto py-16 px-6",children:(0,t.jsx)("div",{className:"space-y-12",children:a.map(e=>(0,t.jsxs)("section",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-800",children:e.title}),(0,t.jsx)("p",{className:"text-slate-600 mt-1",children:e.description})]}),(0,t.jsx)(d,{code:e.code,filename:e.filename})]},e.id))})})]})}e.s(["default",()=>u],45633)}]);