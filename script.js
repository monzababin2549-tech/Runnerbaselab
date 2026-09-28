// เมนูมือถือ
var m=document.getElementById('menu');if(m)m.onclick=function(){document.getElementById('links').classList.toggle('open')};
// เกมจับคู่
var g=document.getElementById('gl');
if(g){var P=[["Recovery","รองเท้านุ่ม ซัพพอร์ตดี"],["Easy Run","รองเท้าอเนกประสงค์ นุ่มสบาย"],["Long Run","รองเท้านุ่ม เด้ง สำหรับระยะไกล"],["Tempo","รองเท้าเบา ตอบสนองดี"],["Race Day","รองเท้าทำความเร็วระดับแข่ง"]];
var hint={"Recovery":"วันพักฟื้นต้องการความนุ่ม","Easy Run":"วิ่งสบายๆ ใช้ได้หลายแบบ","Long Run":"ระยะไกลต้องนุ่มและเด้ง","Tempo":"ซ้อมเร็วต้องเบาและตอบสนองดี","Race Day":"วันแข่งเน้นความเร็วสูงสุด"};
var r=document.getElementById('gr'),msg=document.getElementById('msg'),sel=null,done=0;
function mk(t,k,box){var b=document.createElement('button');b.className='gi';b.textContent=t;b.dataset.k=k;box.appendChild(b);return b}
P.forEach(function(p){mk(p[0],p[0],g)});
P.slice().sort(function(){return Math.random()-.5}).forEach(function(p){mk(p[1],p[0],r)});
document.querySelectorAll('.gi').forEach(function(b){b.onclick=function(){
 var left=b.parentNode===g;
 if(left){document.querySelectorAll('#gl .sel').forEach(function(x){x.classList.remove('sel')});sel=b;b.classList.add('sel');msg.textContent='เลือกรองเท้าที่เหมาะสม';return}
 if(!sel){msg.textContent='กดประเภทการวิ่งทางซ้ายก่อนนะ';return}
 if(sel.dataset.k===b.dataset.k){sel.classList.remove('sel');sel.classList.add('ok');b.classList.add('ok');msg.textContent='เก่งมาก! 🎉';sel=null;if(++done===5)msg.textContent='ยอดเยี่ยม! จับคู่ถูกครบทุกข้อ 🏆'}
 else msg.textContent='ยังไม่ใช่ ลองใหม่นะ: '+hint[sel.dataset.k]}})}
