let quiz=[],i=0,score=0,locked=false,correct=0,wrong=0;
const $=id=>document.getElementById(id);
const bn=n=>String(n).replace(/\d/g,d=>"০১২৩৪৫৬৭৮৯"[d]);
const shuffle=a=>{a=[...a];for(let j=a.length-1;j>0;j--){let k=Math.floor(Math.random()*(j+1));[a[j],a[k]]=[a[k],a[j]]}return a};

$("articleCount").textContent=bn(new Set(questions.map(q=>q.article)).size);
$("questionCount").textContent=bn(questions.length);

const parts=[...new Set(questions.map(q=>q.category))];
parts.forEach(p=>{let o=document.createElement("option");o.value=p;o.textContent=p;$("part").appendChild(o)});

$("start").onclick=start;
$("homeBtn").onclick=home;
$("resultHome").onclick=home;
$("again").onclick=()=>{start(true)};
$("next").onclick=next;

function start(restart=false){
  let p=$("part").value, n=$("count").value;
  let pool=questions.filter(q=>p==="all"||q.category===p);
  pool=shuffle(pool);
  quiz=n==="all"?pool:pool.slice(0,+n);
  if(!quiz.length){alert("এই ফিল্টারে প্রশ্ন নেই");return}
  i=0;score=0;correct=0;wrong=0;
  $("home").classList.add("hidden");$("result").classList.add("hidden");$("quiz").classList.remove("hidden");
  show();
}
function show(){
  locked=false;let q=quiz[i];
  $("counter").textContent=`প্রশ্ন ${bn(i+1)} / ${bn(quiz.length)}`;
  $("score").textContent=`স্কোর: ${bn(score)}`;
  $("progress").style.width=((i+1)/quiz.length*100)+"%";
  $("partTag").textContent=q.category;$("articleTag").textContent=q.article;
  $("question").textContent=q.question;
  $("options").innerHTML="";
  q.options.forEach((x,k)=>{let b=document.createElement("button");b.className="option";b.textContent=`${"কখগঘ"[k]}. ${x}`;b.onclick=()=>answer(k,b);$("options").appendChild(b)});
  $("explain").classList.add("hidden");$("next").classList.add("hidden");
}
function answer(k,clicked){
  if(locked)return;locked=true;let q=quiz[i],bs=document.querySelectorAll(".option");
  bs.forEach((b,j)=>{b.classList.add("disabled");if(j===q.answer)b.classList.add("correct");});
  if(k===q.answer){score++;correct++}else{clicked.classList.add("wrong");wrong++}
  $("score").textContent=`স্কোর: ${bn(score)}`;
  $("explainText").textContent=q.explanation;$("explain").classList.remove("hidden");$("next").classList.remove("hidden");
}
function next(){i++;if(i>=quiz.length){result();return}show()}
function result(){
  $("quiz").classList.add("hidden");$("result").classList.remove("hidden");
  let pct=Math.round(correct/quiz.length*100);
  $("percent").textContent=bn(pct)+"%";$("correct").textContent=bn(correct);$("wrong").textContent=bn(wrong);$("total").textContent=bn(quiz.length);
  $("message").textContent=pct>=90?"অসাধারণ!":pct>=70?"খুব ভালো!":pct>=50?"ভালো, আরও অনুশীলন করুন।":"আরও অনুশীলন প্রয়োজন।";
}
function home(){$("quiz").classList.add("hidden");$("result").classList.add("hidden");$("home").classList.remove("hidden")}
