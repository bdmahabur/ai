(()=>{'use strict';
const $=id=>document.getElementById(id),MM=3.7795275591;
let pages=[[]],current=0,selected=null,seq=0,zoom=.7,orientation='portrait',margin=2,drag=null;
const assets=new Map();let pdfLibPromise=null,pdfExportLibPromise=null;
const dims=()=>orientation==='portrait'?[210,297]:[297,210];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const rnd=n=>Math.round(n*10)/10;
const id=()=>++seq;
function status(t){$('status').textContent=t}
function pageOf(obj){return pages.findIndex(p=>p.includes(obj))}
function get(){return pages.flat().find(o=>o.id===selected)}
function imageAsset(file){return new Promise((resolve,reject)=>{const u=URL.createObjectURL(file),img=new Image();img.onload=()=>resolve({url:u,w:img.naturalWidth,h:img.naturalHeight});img.onerror=()=>{URL.revokeObjectURL(u);reject(Error('Could not read image: '+file.name))};img.src=u})}
function pdfLib(){if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);if(!pdfLibPromise){pdfLibPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';resolve(window.pdfjsLib)};s.onerror=()=>reject(Error('PDF import requires internet to load PDF.js. Images and printing work offline.'));document.head.appendChild(s)})}return pdfLibPromise}
async function pdfAssets(file){const lib=await pdfLib();const data=new Uint8Array(await file.arrayBuffer());const pdf=await lib.getDocument({data}).promise;const out=[];for(let i=1;i<=pdf.numPages;i++){const p=await pdf.getPage(i),view=p.getViewport({scale:1}),renderScale=Math.min(350/72,6000/Math.max(view.width,view.height));const rv=p.getViewport({scale:renderScale}),canvas=document.createElement('canvas');canvas.width=Math.ceil(rv.width);canvas.height=Math.ceil(rv.height);await p.render({canvasContext:canvas.getContext('2d'),viewport:rv}).promise;out.push({url:canvas.toDataURL('image/png'),w:canvas.width,h:canvas.height,physicalW:view.width*25.4/72,physicalH:view.height*25.4/72,name:file.name+' • page '+i})}return out}
function firstFit(obj,pageIndex){let p=pages[pageIndex],gap=3;const [pw,ph]=dims();const maxW=pw-2*margin,maxH=ph-2*margin;const w=obj.w,h=obj.h;for(let y=margin;y+h<=ph-margin+.01;y+=3){for(let x=margin;x+w<=pw-margin+.01;x+=3){if(p.every(o=>x+w+gap<=o.x||o.x+o.w+gap<=x||y+h+gap<=o.y||o.y+o.h+gap<=y))return [rnd(x),rnd(y)]}}return null}
function addObject(a,preferredPage,forceNew){const [pw,ph]=dims();let w=a.physicalW||Number($('initialWidth').value)||90,h=a.physicalH||w*a.h/a.w;const k=Math.min(1,(pw-2*margin)/w,(ph-2*margin)/h);w=rnd(w*k);h=rnd(h*k);let target=preferredPage;if(forceNew&&pages[target]?.length){pages.push([]);target=pages.length-1}let obj={id:id(),asset:a.asset,name:a.name,w,h,x:margin,y:margin,ratio:a.w/a.h,rotation:0};let spot=firstFit(obj,target);if(!spot){pages.push([]);target=pages.length-1;spot=firstFit(obj,target)||[margin,margin]}[obj.x,obj.y]=spot;pages[target].push(obj);current=target;selected=obj.id}
async function importFiles(list){if(!list.length)return;status('Importing '+list.length+' file(s)…');let success=0;for(const f of list){try{let data;if(f.type==='application/pdf'||/\.pdf$/i.test(f.name)){data=await pdfAssets(f)}else{const a=await imageAsset(f);data=[{...a,name:f.name}]};for(const a of data){const asset=id();assets.set(asset,a);const forceNew=$('mode').value==='one';addObject({...a,asset},current,forceNew);success++}}catch(e){alert(f.name+': '+e.message)}}render();status(success+' document page(s) imported. Confirm physical dimensions before printing.');$('files').value=''}
function createElement(o,print=false){const a=assets.get(o.asset),el=document.createElement('div');if(print){el.className='print-item';el.style.cssText=`left:${o.x}mm;top:${o.y}mm;width:${o.w}mm;height:${o.h}mm`;}else{el.className='placed'+(selected===o.id?' selected':'');el.style.cssText=`left:${o.x*MM*zoom}px;top:${o.y*MM*zoom}px;width:${o.w*MM*zoom}px;height:${o.h*MM*zoom}px`;el.dataset.id=o.id;el.addEventListener('pointerdown',startDrag)}const im=document.createElement('img');im.src=a.url;im.alt=o.name;im.draggable=false;const rot=((o.rotation||0)%360+360)%360;if(rot===90||rot===270){im.style.position='absolute';im.style.left='50%';im.style.top='50%';im.style.width=(o.h*MM*(print?1:zoom))+'px';im.style.height=(o.w*MM*(print?1:zoom))+'px';im.style.maxWidth='none';im.style.transform=`translate(-50%,-50%) rotate(${rot}deg)`;}else{im.style.transform=`rotate(${rot}deg)`;}im.style.transformOrigin='center center';el.append(im);if(!print&&selected===o.id){const tag=document.createElement('span');tag.className='tag';tag.textContent=rnd(o.w)+' × '+rnd(o.h)+' mm';el.append(tag);for(const corner of ['nw','ne','se','sw']){const handle=document.createElement('span');handle.className='resize-handle '+corner;handle.dataset.corner=corner;handle.title='Drag to resize';handle.addEventListener('pointerdown',startResize);el.append(handle)}}return el}
function render(){const [pw,ph]=dims();const root=$('pages');root.innerHTML='';const sheet=document.createElement('div');sheet.className='sheet';sheet.style.width=pw*MM*zoom+'px';sheet.style.height=ph*MM*zoom+'px';sheet.addEventListener('click',e=>{if(e.target===sheet){selected=null;render()}});const safe=document.createElement('div');safe.className='safe';safe.style.cssText=`inset:${margin*MM*zoom}px`;sheet.append(safe);for(const o of pages[current])sheet.append(createElement(o));root.append(sheet);$('pageLabel').textContent=`Page ${current+1} / ${pages.length}`;$('zoomLabel').textContent=Math.round(zoom*100)+'%';$('items').innerHTML='';for(const o of pages[current]){const row=document.createElement('div');row.className='item'+(o.id===selected?' active':'');row.innerHTML='<span>▤</span><div class="name"></div>';row.querySelector('.name').textContent=o.name;const sz=document.createElement('small');sz.textContent=`${rnd(o.w)} × ${rnd(o.h)} mm`;row.querySelector('.name').append(sz);row.onclick=()=>{selected=o.id;render()};$('items').append(row)}const o=get();$('editor').hidden=!o;$('noSelection').hidden=!!o;if(o){for(const key of ['w','h','x','y'])$(key).value=rnd(o[key])}}
function startDrag(e){if(e.button!==0)return;const el=e.currentTarget;selected=Number(el.dataset.id);const o=get();drag={id:o.id,startX:e.clientX,startY:e.clientY,x:o.x,y:o.y};el.setPointerCapture(e.pointerId);el.addEventListener('pointermove',moveDrag);el.addEventListener('pointerup',endDrag,{once:true});renderEditorOnly();e.preventDefault()}
function moveDrag(e){if(!drag)return;const o=get(),[pw,ph]=dims();o.x=rnd(clamp(drag.x+(e.clientX-drag.startX)/(MM*zoom),0,Math.max(0,pw-o.w)));o.y=rnd(clamp(drag.y+(e.clientY-drag.startY)/(MM*zoom),0,Math.max(0,ph-o.h)));e.currentTarget.style.left=o.x*MM*zoom+'px';e.currentTarget.style.top=o.y*MM*zoom+'px';renderEditorOnly()}
function endDrag(e){drag=null;e.currentTarget.removeEventListener('pointermove',moveDrag);render()}
function startResize(e){if(e.button!==0)return;e.preventDefault();e.stopPropagation();const el=e.currentTarget.closest('.placed');selected=Number(el.dataset.id);const o=get();if(!o)return;checkpoint();const rect=$('pages').querySelector('.sheet').getBoundingClientRect(),corner=e.currentTarget.dataset.corner;drag={type:'resize',id:o.id,corner,startX:e.clientX,startY:e.clientY,x:o.x,y:o.y,w:o.w,h:o.h,ratio:o.ratio||o.w/o.h};e.currentTarget.setPointerCapture(e.pointerId);e.currentTarget.addEventListener('pointermove',moveResize);e.currentTarget.addEventListener('pointerup',endResize,{once:true});e.currentTarget.addEventListener('pointercancel',endResize,{once:true});renderEditorOnly()}
function moveResize(e){if(!drag||drag.type!=='resize')return;const o=get();if(!o||o.id!==drag.id)return;const [pw,ph]=dims(),dx=(e.clientX-drag.startX)/(MM*zoom),dy=(e.clientY-drag.startY)/(MM*zoom),c=drag.corner;let left=c==='nw'||c==='sw',top=c==='nw'||c==='ne';const anchorX=left?drag.x+drag.w:drag.x,anchorY=top?drag.y+drag.h:drag.y;let w=left?drag.w-dx:drag.w+dx,h=top?drag.h-dy:drag.h+dy;if($('lock').checked){const ratio=drag.ratio||drag.w/drag.h;w=Math.max(3,Math.abs(w),Math.abs(h)*ratio);h=w/ratio}w=clamp(w,3,pw);h=clamp(h,3,ph);let x=left?anchorX-w:anchorX,y=top?anchorY-h:anchorY;x=clamp(x,0,pw-w);y=clamp(y,0,ph-h);o.x=rnd(x);o.y=rnd(y);o.w=rnd(w);o.h=rnd(h);o.ratio=o.w/o.h;const el=$('pages').querySelector('.placed[data-id="'+o.id+'"]');if(el){el.style.left=o.x*MM*zoom+'px';el.style.top=o.y*MM*zoom+'px';el.style.width=o.w*MM*zoom+'px';el.style.height=o.h*MM*zoom+'px'}renderEditorOnly()}
function endResize(e){if(!drag||drag.type!=='resize')return;drag=null;e.currentTarget.removeEventListener('pointermove',moveResize);render()}
function renderEditorOnly(){const o=get();if(!o)return;$('editor').hidden=false;$('noSelection').hidden=true;for(const key of ['w','h','x','y'])$(key).value=rnd(o[key])}
function edit(key){const o=get();if(!o)return;const value=Number($(key).value);if(!Number.isFinite(value))return;const [pw,ph]=dims();if(key==='w'||key==='h'){if(value<=0)return;const ratio=o.ratio;if($('lock').checked){if(key==='w'){o.w=value;o.h=value/ratio}else{o.h=value;o.w=value*ratio}}else{o[key]=value;o.ratio=o.w/o.h}if(o.w>pw||o.h>ph){status('Warning: item exceeds paper; reduce its dimensions before printing.')}}else{o[key]=value}render()}
function clone(o){return {...o,id:id()}}
function arrange(){const items=[...pages[current]];pages[current]=[];let target=current;for(const o of items){let pos=firstFit(o,target);if(!pos){pages.push([]);target=pages.length-1;pos=firstFit(o,target)||[margin,margin]}[o.x,o.y]=pos;pages[target].push(o)}current=target;selected=items.some(o=>o.id===selected)?selected:null;render()}
function print(){const [pw,ph]=dims();let style=$('dynamicPrint');if(!style){style=document.createElement('style');style.id='dynamicPrint';document.head.append(style)}style.textContent=`@media print{@page{size:A4 ${orientation};margin:0}#printRoot .print-sheet{width:${pw}mm!important;height:${ph}mm!important}}`;const root=$('printRoot');root.innerHTML='';for(const p of pages){const sheet=document.createElement('div');sheet.className='print-sheet';for(const o of p)sheet.append(createElement(o,true));root.append(sheet)}window.print()}
function jsPdfLib(){if(window.jspdf?.jsPDF)return Promise.resolve(window.jspdf.jsPDF);if(!pdfExportLibPromise){pdfExportLibPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';s.onload=()=>window.jspdf?.jsPDF?resolve(window.jspdf.jsPDF):reject(Error('Could not load the PDF export library.'));s.onerror=()=>reject(Error('PDF export needs an internet connection to load jsPDF.'));document.head.appendChild(s)})}return pdfExportLibPromise}
function loadAssetImage(url){return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>reject(Error('An image could not be prepared for PDF export.'));im.src=url})}
async function exportPdf(){if(!pages.some(p=>p.length)){alert('Add at least one document before exporting PDF.');return}const button=$('exportPdfBtn');button.disabled=true;button.textContent='Preparing...';status('Preparing print-quality PDF at 350 DPI. Large documents may take a moment…');try{const JsPDF=await jsPdfLib();const [pw,ph]=dims(),dpi=350,scale=dpi/25.4,pxW=Math.round(pw*scale),pxH=Math.round(ph*scale);let doc=null;for(let pi=0;pi<pages.length;pi++){const sheetCanvas=document.createElement('canvas');sheetCanvas.width=pxW;sheetCanvas.height=pxH;const c=sheetCanvas.getContext('2d',{alpha:false});c.fillStyle='#ffffff';c.fillRect(0,0,pxW,pxH);for(const o of pages[pi]){const a=assets.get(o.asset);if(!a)continue;const im=await loadAssetImage(a.url);c.save();c.translate((o.x+o.w/2)*scale,(o.y+o.h/2)*scale);c.rotate((o.rotation||0)*Math.PI/180);const drawW=((o.rotation||0)%180===90?o.h:o.w),drawH=((o.rotation||0)%180===90?o.w:o.h);c.drawImage(im,-drawW*scale/2,-drawH*scale/2,drawW*scale,drawH*scale);c.restore()}const data=sheetCanvas.toDataURL('image/jpeg',0.98);if(!doc)doc=new JsPDF({orientation,unit:'mm',format:'a4',compress:true,putOnlyUsedFonts:true});else doc.addPage('a4',orientation);doc.addImage(data,'JPEG',0,0,pw,ph,undefined,'FAST');sheetCanvas.width=1;sheetCanvas.height=1;status(`Rendering PDF page ${pi+1} of ${pages.length} at ${dpi} DPI…`)}
const date = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}).format(new Date());

const uniqueId = crypto.randomUUID()
    .replace(/-/g, '')
    .slice(0, 8)
    .toUpperCase();

const filename = `A4-Print-${date}-${uniqueId}.pdf`;
doc.save(filename);
status(`PDF exported at ${dpi} DPI (${pxW} × ${pxH} pixels per page).`)}catch(e){console.error(e);alert('PDF export failed: '+e.message);status('PDF export failed. Check your internet connection and try again.')}finally{button.disabled=false;button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h9l5 5v4"/><path d="M14 3v5h5"/><path d="M5 3v18h7"/><path d="M16 13v7m-3-3 3 3 3-3"/><path d="M13 22h6"/></svg>'}}
$('addBtn').onclick=()=>$('files').click();$('drop').onclick=()=>$('files').click();$('files').onchange=e=>importFiles([...e.target.files]);$('drop').ondragover=e=>{e.preventDefault();$('drop').classList.add('over')};$('drop').ondragleave=()=>$('drop').classList.remove('over');$('drop').ondrop=e=>{e.preventDefault();$('drop').classList.remove('over');importFiles([...e.dataTransfer.files])};
$('newPageBtn').onclick=()=>{pages.push([]);current=pages.length-1;selected=null;render()};$('prevPage').onclick=()=>{current=Math.max(0,current-1);selected=null;render()};$('nextPage').onclick=()=>{current=Math.min(pages.length-1,current+1);selected=null;render()};$('removePage').onclick=()=>{if(pages.length===1){if(pages[0].length&&!confirm('Delete all documents on this page? At least one blank page will remain.'))return;pages[0]=[]}else{if(pages[current].length&&!confirm('Delete this page and all documents on it?'))return;pages.splice(current,1);current=Math.min(current,pages.length-1)}selected=null;render();status('Current page deleted.')};$('paper').onchange=e=>{orientation=e.target.value;render()};$('margin').onchange=e=>{margin=clamp(Number(e.target.value)||0,0,30);render()};$('zoom').oninput=e=>{zoom=Number(e.target.value)/100;render()};$('printBtn').onclick=print;$('exportPdfBtn').onclick=exportPdf;
for(const k of ['w','h','x','y'])$(k).onchange=()=>edit(k);$('centerBtn').onclick=()=>{const o=get();if(o){const [pw,ph]=dims();o.x=rnd((pw-o.w)/2);o.y=rnd((ph-o.h)/2);render()}};
function alignSelected(mode){const o=get();if(!o)return;checkpoint();const [pw,ph]=dims();if(mode==='left')o.x=margin;else if(mode==='hcenter')o.x=rnd((pw-o.w)/2);else if(mode==='right')o.x=rnd(pw-margin-o.w);else if(mode==='top')o.y=margin;else if(mode==='vcenter')o.y=rnd((ph-o.h)/2);else if(mode==='bottom')o.y=rnd(ph-margin-o.h);o.x=rnd(clamp(o.x,0,pw-o.w));o.y=rnd(clamp(o.y,0,ph-o.h));render();status('Selected item aligned.')}
function rotateSelected(degrees){const o=get();if(!o)return;checkpoint();const oldW=o.w,oldH=o.h,centerX=o.x+oldW/2,centerY=o.y+oldH/2;o.rotation=((o.rotation||0)+degrees+360)%360;if(Math.abs(degrees)%180===90){o.w=oldH;o.h=oldW;o.ratio=o.w/o.h;const [pw,ph]=dims();o.x=rnd(clamp(centerX-o.w/2,0,Math.max(0,pw-o.w)));o.y=rnd(clamp(centerY-o.h/2,0,Math.max(0,ph-o.h)));}render();status('Image rotated '+o.rotation+'°.');}$('rotateLeftBtn').onclick=()=>rotateSelected(-90);$('rotateRightBtn').onclick=()=>rotateSelected(90);$('alignLeftBtn').onclick=()=>alignSelected('left');$('alignHCenterBtn').onclick=()=>alignSelected('hcenter');$('alignRightBtn').onclick=()=>alignSelected('right');$('alignTopBtn').onclick=()=>alignSelected('top');$('alignVCenterBtn').onclick=()=>alignSelected('vcenter');$('alignBottomBtn').onclick=()=>alignSelected('bottom');$('fitBtn').onclick=()=>{const o=get();if(!o)return;const [pw,ph]=dims();const k=Math.min((pw-2*margin)/o.w,(ph-2*margin)/o.h);o.w=rnd(o.w*k);o.h=rnd(o.h*k);o.x=rnd((pw-o.w)/2);o.y=rnd((ph-o.h)/2);render()};$('duplicateBtn').onclick=()=>{const o=get();if(!o)return;const c=clone(o);c.x=rnd(o.x+5);c.y=rnd(o.y+5);pages[current].push(c);selected=c.id;render()};$('deleteBtn').onclick=()=>{const o=get();if(o){pages[pageOf(o)]=pages[pageOf(o)].filter(x=>x.id!==o.id);selected=null;render()}};
$('applyCopies').onclick=()=>{const o=get();if(!o)return;const n=clamp(parseInt($('copies').value,10)||1,1,100);checkpoint();const source={...o};for(let i=0;i<n;i++)pages[current].push(clone(source));arrange();status(n+' additional copies added. Review all pages before printing.')};$('autoArrange').onclick=arrange;$('duplicatePage').onclick=()=>{pages.splice(current+1,0,pages[current].map(clone));current++;selected=null;render()};$('clearBtn').onclick=()=>{if(confirm('Clear all documents and pages?')){pages=[[]];current=0;selected=null;for(const a of assets.values())if(a.url.startsWith('blob:'))URL.revokeObjectURL(a.url);assets.clear();render()}};
render();

/* Enhancement layer: undo/redo history, dedicated PDF picker, and 4-corner crop tools. */

const cloneState=()=>({pages:pages.map(p=>p.map(o=>({...o}))),current,selected,orientation,margin});
let undoStack=[],redoStack=[],restoring=false;
function stateKey(s){return JSON.stringify(s)}
function checkpoint(){if(restoring)return;const s=cloneState();if(!undoStack.length||stateKey(undoStack[undoStack.length-1])!==stateKey(s))undoStack.push(s);if(undoStack.length>100)undoStack.shift();redoStack=[];syncHistory()}
function restore(s){restoring=true;pages=s.pages.map(p=>p.map(o=>({...o})));current=clamp(s.current,0,pages.length-1);selected=s.selected;orientation=s.orientation;margin=s.margin;$('paper').value=orientation;$('margin').value=margin;render();restoring=false;syncHistory()}
function syncHistory(){$('undoBtn').disabled=!undoStack.length;$('redoBtn').disabled=!redoStack.length}
function undo(){if(!undoStack.length)return;redoStack.push(cloneState());const s=undoStack.pop();restore(s);status('Undo complete.');}
function redo(){if(!redoStack.length)return;undoStack.push(cloneState());const s=redoStack.pop();restore(s);status('Redo complete.');}
$('undoBtn').onclick=undo;$('redoBtn').onclick=redo;
let copiedObject=null;
function pasteCopiedObject(){
    if(!copiedObject)return;
    const source={...copiedObject};
    const [pw,ph]=dims();
    const pasted={...source,id:id()};
    pasted.x=rnd(clamp(source.x+5,0,Math.max(0,pw-source.w)));
    pasted.y=rnd(clamp(source.y+5,0,Math.max(0,ph-source.h)));
    // If the default offset overlaps an existing item, place it in the first available spot.
    const overlaps=pages[current].some(o=>!(pasted.x+pasted.w<=o.x||o.x+o.w<=pasted.x||pasted.y+pasted.h<=o.y||o.y+o.h<=pasted.y));
    if(overlaps){const spot=firstFit(pasted,current);if(spot)[pasted.x,pasted.y]=spot;}
    checkpoint();
    pages[current].push(pasted);
    selected=pasted.id;
    render();
    status('Document pasted.');
}
document.addEventListener('keydown',e=>{
    const t=e.target,typing=!!(t&&(t.matches('input,textarea,select')||t.isContentEditable));
    const mod=e.ctrlKey||e.metaKey,key=e.key.toLowerCase();
    if(mod&&key==='z'){e.preventDefault();if(e.shiftKey)redo();else undo();return}
    if(mod&&(key==='y'||(e.shiftKey&&key==='z'))){e.preventDefault();redo();return}
    if(mod&&(key==='y'||(e.shiftKey&&key==='z'))){e.preventDefault();redo();return}
    if(typing)return;

    // Ctrl+C: Copy the selected item
    if(mod&&key==='c'){
        const o=get();
        if(o){copiedObject={...o};e.preventDefault();status('Selected document copied. Press Ctrl+V to paste it.');}
        return;
    }

    // Ctrl+V: Paste the selected item
    if(mod&&key==='v'){
        if(copiedObject){e.preventDefault();pasteCopiedObject();}
        return;
    }

    // Delete: Delete the selected item
    if(key==='delete'){
        const o=get();
        if(o){e.preventDefault();$('deleteBtn').click();status('Selected document deleted.');}
    }

     // Delete: Ctrl+X:  Delete the selected item
    if(mod && key==='x'){
        const o=get();
        if(o){e.preventDefault();$('deleteBtn').click();status('Selected document deleted.');}
    }


    // Ctrl+D: Deselect the selected item
    if(mod && key==='d'){
        e.preventDefault();
        if(selected!==null){
            selected=null;
            render();
            status('Selection cleared.');
        }
        return;
    }

    // Move selected item with keyboard arrow keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        const o = get();
        if (!o) return;

        e.preventDefault();

        const [pw, ph] = dims();
        const step = e.shiftKey ? 5 : .5; // mm

        let dx = 0;
        let dy = 0;

        if (e.key === "ArrowUp") dy = -step;
        if (e.key === "ArrowDown") dy = step;
        if (e.key === "ArrowLeft") dx = -step;
        if (e.key === "ArrowRight") dx = step;

        checkpoint();

        o.x = rnd(clamp(o.x + dx, 0, Math.max(0, pw - o.w)));
        o.y = rnd(clamp(o.y + dy, 0, Math.max(0, ph - o.h)));

        render();
        status(`Position: X ${o.x} mm, Y ${o.y} mm`);
        return;
        }

        // Ctrl+S: Export PDF directly
        if (mod && key === 's') {
        e.preventDefault();
        exportPdf();
        return;
        }

        // Ctrl+E: Center selected item on the page
        if (mod && key === 'e') {
            e.preventDefault();

            const o = get();
            if (!o) {
                status('Select an item first.');
                return;
            }

            checkpoint();

            const [pw, ph] = dims();

            o.x = rnd((pw - o.w) / 2);
            o.y = rnd((ph - o.h) / 2);

            render();
            status('Selected item centered on the page.');
            return;
        }

        // Ctrl+F: Fit selected item to printable area
        if (mod && key === 'f') {
            e.preventDefault();

            const o = get();
            if (!o) {
                status('Select an item first.');
                return;
            }

            checkpoint();

            const [pw, ph] = dims();
            const printableW = pw - 2 * margin;
            const printableH = ph - 2 * margin;

            const scale = Math.min(
                printableW / o.w,
                printableH / o.h
            );

            o.w = rnd(o.w * scale);
            o.h = rnd(o.h * scale);
            o.x = rnd((pw - o.w) / 2);
            o.y = rnd((ph - o.h) / 2);
            o.ratio = o.w / o.h;

            render();
            status('Selected item fitted to the printable area.');
            return;
        }


     // Shift+F: Arrange item Current Page

           if (e.shiftKey && key === 'a' && !mod) {
            e.preventDefault();

            const items = pages[current];
            if (!items || items.length === 0) {
                status('No items to arrange on this page.');
                return;
            }

            checkpoint();

            const [pw, ph] = dims();
            const gap = 5;
            const usableW = pw - 2 * margin;
            let x = margin;
            let y = margin;
            let rowH = 0;

            items.forEach(o => {
                if (x + o.w > margin + usableW) {
                    x = margin;
                    y += rowH + gap;
                    rowH = 0;
                }

                o.x = rnd(x);
                o.y = rnd(y);

                x += o.w + gap;
                rowH = Math.max(rowH, o.h);
            });

            render();
            status('Current page items arranged.');
            return;
        }


    });

// Keep every existing action, but checkpoint its pre-change state so undo/redo works across the existing tools.
const clickIds=['newPageBtn','removePage','centerBtn','fitBtn','duplicateBtn','deleteBtn','applyCopies','autoArrange','duplicatePage','clearBtn','alignLeftBtn','alignHCenterBtn','alignRightBtn','alignTopBtn','alignVCenterBtn','alignBottomBtn','paper','margin'];
for(const key of clickIds){const el=$(key);if(!el)continue;const prop=(key==='paper'||key==='margin')?'onchange':'onclick';const original=el[prop];if(typeof original==='function')el[prop]=function(e){checkpoint();return original.call(this,e)}}
for(const key of ['w','h','x','y']){const el=$(key),original=el.onchange;el.onchange=function(e){checkpoint();return original.call(this,e)}}
const oldFit=$('fitBtn').onclick;$('fitBtn').onclick=function(e){checkpoint();return oldFit.call(this,e)};
const oldImport=$('files').onchange;$('files').onchange=function(e){checkpoint();return oldImport.call(this,e)};

$('fitAllBtn').onclick=()=>{const o=get();if(!o)return;checkpoint();const [pw,ph]=dims(),k=Math.min((pw-2*margin)/o.w,(ph-2*margin)/o.h);o.w=rnd(o.w*k);o.h=rnd(o.h*k);o.x=rnd((pw-o.w)/2);o.y=rnd((ph-o.h)/2);render();status('Selected document fitted to the printable area. Use Undo to restore its previous size.')};
// Crop editor: four independent corner handles and perspective rectification via projective mapping.
let cropImage=null,cropObjectId=null,cropPoints=[],cropMode='rect',cropDrag=-1,cropScale=1;
const canvas=$('cropCanvas'),ctx=canvas.getContext('2d');
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
function openCrop(){const o=get();if(!o){alert('Select a document first.');return}const a=assets.get(o.asset);if(!a){alert('Could not find the selected image.');return}cropObjectId=o.id;cropMode='rect';$('rectCropMode').classList.add('active');$('perspectiveMode').classList.remove('active');$('cropOutputW').value=Math.max(5,Math.min(297,o.w));cropImage=new Image();cropImage.onload=()=>{const maxW=900,maxH=560;cropScale=Math.min(maxW/cropImage.naturalWidth,maxH/cropImage.naturalHeight,1);canvas.width=Math.round(cropImage.naturalWidth*cropScale);canvas.height=Math.round(cropImage.naturalHeight*cropScale);cropPoints=[{x:0,y:0},{x:canvas.width,y:0},{x:canvas.width,y:canvas.height},{x:0,y:canvas.height}];drawCrop();$('cropModal').hidden=false};cropImage.onerror=()=>alert('Could not open this document for cropping.');cropImage.src=a.url}
function drawCrop(){if(!cropImage)return;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.drawImage(cropImage,0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(7,20,38,.38)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.beginPath();cropPoints.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.clip();ctx.clearRect(0,0,canvas.width,canvas.height);ctx.drawImage(cropImage,0,0,canvas.width,canvas.height);ctx.restore();ctx.beginPath();cropPoints.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.lineWidth=2.5;ctx.strokeStyle='#35a2ff';ctx.stroke();cropPoints.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,8,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle='#1769e0';ctx.stroke();ctx.fillStyle='#123';ctx.font='bold 11px Arial';ctx.fillText(String(i+1),p.x+10,p.y-9)})}
function canvasPoint(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}
canvas.addEventListener('pointerdown',e=>{const p=canvasPoint(e);let best=Infinity;cropDrag=-1;cropPoints.forEach((q,i)=>{const d=dist(p,q);if(d<best&&d<22){best=d;cropDrag=i}});if(cropDrag>=0){canvas.setPointerCapture(e.pointerId);e.preventDefault()}});
canvas.addEventListener('pointermove',e=>{if(cropDrag<0)return;const p=canvasPoint(e),idx=cropDrag;p.x=clamp(p.x,0,canvas.width);p.y=clamp(p.y,0,canvas.height);if(cropMode==='rect'){/* Keep the diagonally opposite corner fixed while the active handle moves. */const opposite=(idx+2)%4,fixed={x:cropPoints[opposite].x,y:cropPoints[opposite].y},left=Math.min(p.x,fixed.x),right=Math.max(p.x,fixed.x),top=Math.min(p.y,fixed.y),bottom=Math.max(p.y,fixed.y);cropPoints=[{x:left,y:top},{x:right,y:top},{x:right,y:bottom},{x:left,y:bottom}];/* Track the active geometric corner even if the pointer crosses the fixed corner. */cropDrag=p.x<=fixed.x?(p.y<=fixed.y?0:3):(p.y<=fixed.y?1:2)}else{cropPoints[idx]=p}drawCrop()});
canvas.addEventListener('pointerup',()=>cropDrag=-1);canvas.addEventListener('pointercancel',()=>cropDrag=-1);
$('cropBtn').onclick=openCrop;$('resetCropBtn').onclick=()=>{const o=get();if(!o)return;const a=assets.get(o.asset);if(!a)return;checkpoint();o.cropOriginalAsset=o.cropOriginalAsset||o.asset;o.asset=o.cropOriginalAsset;const original=assets.get(o.asset);o.ratio=original.w/original.h;o.h=rnd(o.w/o.ratio);render();status('Original uncropped image restored.')};
$('rectCropMode').onclick=()=>{cropMode='rect';$('rectCropMode').classList.add('active');$('perspectiveMode').classList.remove('active');const xs=cropPoints.map(p=>p.x),ys=cropPoints.map(p=>p.y),l=Math.min(...xs),r=Math.max(...xs),t=Math.min(...ys),b=Math.max(...ys);cropPoints=[{x:l,y:t},{x:r,y:t},{x:r,y:b},{x:l,y:b}];drawCrop()};$('perspectiveMode').onclick=()=>{cropMode='perspective';$('perspectiveMode').classList.add('active');$('rectCropMode').classList.remove('active');drawCrop()};
$('closeCrop').onclick=$('cancelCrop').onclick=()=>{$('cropModal').hidden=true;cropImage=null};
function solveLinear(A,b){const n=b.length;for(let i=0;i<n;i++){let max=i;for(let r=i+1;r<n;r++)if(Math.abs(A[r][i])>Math.abs(A[max][i]))max=r;[A[i],A[max]]=[A[max],A[i]];[b[i],b[max]]=[b[max],b[i]];const pivot=A[i][i];if(Math.abs(pivot)<1e-10)throw Error('The corner points are too close together. Adjust the crop corners.');for(let j=i;j<n;j++)A[i][j]/=pivot;b[i]/=pivot;for(let r=0;r<n;r++){if(r===i)continue;const f=A[r][i];for(let j=i;j<n;j++)A[r][j]-=f*A[i][j];b[r]-=f*b[i]}}return b}
function homography(src,dw,dh){const dst=[{x:0,y:0},{x:dw,y:0},{x:dw,y:dh},{x:0,y:dh}],A=[],b=[];for(let i=0;i<4;i++){const {x,y}=dst[i],u=src[i].x/cropScale,v=src[i].y/cropScale;A.push([x,y,1,0,0,0,-u*x,-u*y]);b.push(u);A.push([0,0,0,x,y,1,-v*x,-v*y]);b.push(v)}return [...solveLinear(A,b),1]}
$('applyCrop').onclick=()=>{const o=get();if(!o||o.id!==cropObjectId||!cropImage)return;const p=cropPoints.map(p=>({x:p.x/cropScale,y:p.y/cropScale}));const top=dist(p[0],p[1]),bottom=dist(p[3],p[2]),left=dist(p[0],p[3]),right=dist(p[1],p[2]);const outW=Math.max(100,Math.round(Math.max(top,bottom))),outH=Math.max(100,Math.round(Math.max(left,right)));const out=document.createElement('canvas');out.width=Math.min(5000,outW);out.height=Math.min(5000,outH);const oc=out.getContext('2d');try{const H=homography(cropPoints,out.width,out.height);const imgData=oc.createImageData(out.width,out.height),srcCanvas=document.createElement('canvas');srcCanvas.width=cropImage.naturalWidth;srcCanvas.height=cropImage.naturalHeight;const sc=srcCanvas.getContext('2d',{willReadFrequently:true});sc.drawImage(cropImage,0,0);const source=sc.getImageData(0,0,srcCanvas.width,srcCanvas.height),d=imgData.data,s=source.data;for(let y=0;y<out.height;y++){for(let x=0;x<out.width;x++){const den=H[6]*x+H[7]*y+1,sx=(H[0]*x+H[1]*y+H[2])/den,sy=(H[3]*x+H[4]*y+H[5])/den,di=(y*out.width+x)*4;if(sx<0||sy<0||sx>=srcCanvas.width-1||sy>=srcCanvas.height-1){d[di+3]=0;continue}const x0=Math.floor(sx),y0=Math.floor(sy),fx=sx-x0,fy=sy-y0;for(let c=0;c<3;c++){const a=s[(y0*srcCanvas.width+x0)*4+c],b=s[(y0*srcCanvas.width+x0+1)*4+c],cc=s[((y0+1)*srcCanvas.width+x0)*4+c],dd=s[((y0+1)*srcCanvas.width+x0+1)*4+c];d[di+c]=a*(1-fx)*(1-fy)+b*fx*(1-fy)+cc*(1-fx)*fy+dd*fx*fy}d[di+3]=255}}oc.putImageData(imgData,0,0);checkpoint();const asset=id(),url=out.toDataURL('image/png'),a={url,w:out.width,h:out.height,name:assets.get(o.asset).name+' (cropped)'};assets.set(asset,a);o.cropOriginalAsset=o.cropOriginalAsset||o.asset;o.asset=asset;const targetW=clamp(Number($('cropOutputW').value)||o.w,5,297);o.w=rnd(targetW);o.h=rnd(targetW*out.height/out.width);o.ratio=out.width/out.height;const [pw,ph]=dims();if(o.w>pw||o.h>ph){const k=Math.min((pw-2*margin)/o.w,(ph-2*margin)/o.h);o.w=rnd(o.w*k);o.h=rnd(o.h*k)}o.x=rnd(clamp(o.x,0,Math.max(0,pw-o.w)));o.y=rnd(clamp(o.y,0,Math.max(0,ph-o.h)));$('cropModal').hidden=true;cropImage=null;render();status(cropMode==='perspective'?'Perspective crop applied and document straightened.':'Four-corner crop applied. Use Undo to revert.') }catch(err){alert('Could not apply crop: '+err.message)}};
// Pointer dragging is a state-changing operation too; save the pre-drag layout once.
const originalStartDrag=startDrag;startDrag=function(e){checkpoint();return originalStartDrag(e)};
// Undo support for files dragged into the drop area.
const originalDrop=$('drop').ondrop;$('drop').ondrop=function(e){checkpoint();return originalDrop.call(this,e)};
syncHistory();

})();

// Prevent mouse-wheel scrolling from changing the single page number.
document.addEventListener('wheel', function (e) {
    const input = e.target.closest('input[type="number"]');

    if (input && document.activeElement === input) {
        input.blur();
    }
});


/* Theme toggle: visual-only enhancement; editor behavior is unchanged. */
(() => {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>';
  const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 14.2A8.8 8.8 0 0 1 9.8 3.2 9 9 0 1 0 20.8 14.2Z"/></svg>';
  function updateTheme(isLight) {
    document.body.classList.toggle('light-theme', isLight);
    toggle.innerHTML = isLight ? moon : sun;
    toggle.title = isLight ? 'Switch to dark theme' : 'Switch to light theme';
    toggle.setAttribute('aria-label', toggle.title);
    toggle.setAttribute('aria-pressed', String(isLight));
  }
  let light = false;
  try { light = localStorage.getItem('printstudio-theme') === 'light'; } catch (_) {}
  updateTheme(light);
  toggle.addEventListener('click', () => {
    light = !document.body.classList.contains('light-theme');
    updateTheme(light);
    try { localStorage.setItem('printstudio-theme', light ? 'light' : 'dark'); } catch (_) {}
  });
})();


// Help dialog: intentionally isolated from the editor's existing behavior.
(()=>{
 const modal=document.getElementById('helpModal');
 const openBtn=document.getElementById('helpBtn');
 const closeButtons=[document.getElementById('closeHelp'),document.getElementById('helpDone')];
 const close=()=>{modal.hidden=true;openBtn.focus()};
 openBtn.addEventListener('click',()=>{modal.hidden=false;document.getElementById('closeHelp').focus()});
 closeButtons.forEach(button=>button.addEventListener('click',close));
 modal.addEventListener('click',event=>{if(event.target===modal)close()});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.hidden)close()});
})();

