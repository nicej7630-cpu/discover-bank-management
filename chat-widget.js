// ── DISCOVER BANK LIVE CHAT WIDGET ──
(function(){

const BANK={
  name:'Discover Bank Global Management plc',
  phone:'+44 20 9946 9200',
  email:'info@discoverjp.org',
  hours:'Mon-Fri 8AM-6PM | Sat 9AM-2PM GMT',
  whatsapp:'442099469200'
};

// AI Knowledge Base
const KB=[
  {q:['hello','hi','hey','good morning','good evening','good afternoon'],a:'Hello! 👋 Welcome to Discover Bank! I am your virtual assistant. How can I help you today?'},
  {q:['how transfer','send money','transfer money','make transfer','how do i transfer'],a:'To make a transfer:\n1. Login to your account at discoverjp.org\n2. Click "Transfer Money"\n3. Choose Domestic or International\n4. Fill in recipient details\n5. Click Send ✅\n\nDomestic: 2 hours\nInternational: 1-3 business days'},
  {q:['balance','check balance','my balance','how much','account balance'],a:'To check your balance:\n1. Login at discoverjp.org/login.html\n2. Your balance shows on the home dashboard\n\nNeed your login details? Call us: +44 20 9946 9200'},
  {q:['open account','new account','create account','sign up','register','apply'],a:'Opening an account is easy! 😊\n\n1. Visit discoverjp.org\n2. Click "Open a New Account"\n3. Fill your details\n4. Submit application\n\nWe approve within 24 hours! 🎉'},
  {q:['loan','borrow','credit','lending'],a:'We offer 3 loan types:\n\n💼 Personal Loan — from 6.5% APR (up to £50,000)\n🏢 Business Loan — from 7.8% APR (up to £500,000)\n⚡ Emergency Loan — from 9.9% APR (up to £10,000)\n\nLogin and click Loans to apply!'},
  {q:['forgot password','reset password','cant login','cannot login','lost password'],a:'No worries! 😊 To reset your password:\n\n📞 Call: +44 20 9946 9200\n📧 Email: info@discoverjp.org\n\nOur team will reset it for you within 1 hour!'},
  {q:['statement','bank statement','download statement','transaction history'],a:'To download your statement:\n1. Login to your account\n2. Click "Statements" in the menu\n3. Choose date range\n4. Click "Download PDF" 📥\n\nYour statement includes full bank letterhead!'},
  {q:['card','virtual card','debit card','my card'],a:'Your Discover Bank Virtual VISA Debit Card:\n✅ Available in your dashboard\n✅ Daily limit: £5,000\n✅ Online payments enabled\n\nLogin → Click "My Card" to view it!'},
  {q:['fee','fees','charges','cost','how much cost'],a:'Discover Bank fees:\n✅ Account opening: FREE\n✅ Monthly maintenance: FREE\n✅ Domestic transfers: FREE\n🌍 International transfers: Small fee applies\n\nCall us for full fee schedule: +44 20 9946 9200'},
  {q:['fca','regulated','safe','secure','trust','legit','legal'],a:'Yes! Discover Bank Global Management plc is:\n🇬🇧 FCA Regulated\n🔒 256-bit SSL Encrypted\n🏦 Est. 2022\n📍 Suite 1, 7th Floor, 50 Broadway, London SW1H 0BL\n\nYour money is safe with us! ✅'},
  {q:['hours','opening hours','when open','working hours','support hours'],a:'Our support hours:\n📅 Monday-Friday: 8AM - 6PM GMT\n📅 Saturday: 9AM - 2PM GMT\n📅 Sunday: Closed\n\n📧 Email support available 24/7 at info@discoverjp.org'},
  {q:['address','location','where','office','branch'],a:'Discover Bank Global Management plc\n📍 Suite 1, 7th Floor\n50 Broadway\nLondon, SW1H 0BL\nUnited Kingdom\n\n📞 +44 20 9946 9200\n📧 info@discoverjp.org'},
  {q:['international','overseas','abroad','foreign','worldwide','global'],a:'Yes! We serve customers worldwide! 🌍\n\nWe currently have customers in:\n🇬🇧 UK · 🇳🇬 Nigeria · 🇬🇭 Ghana · 🇦🇪 UAE · 🇨🇳 China · 🇸🇦 Saudi Arabia · and 30+ more countries!\n\nOpen your account today at discoverjp.org'},
  {q:['iban','swift','bic','sort code'],a:'Discover Bank Banking Details:\n🏦 BIC/SWIFT: DISCGB2L\n📍 Sort codes assigned per account\n📋 IBAN assigned per account\n\nFind your details after logging in!'},
  {q:['kyc','verification','verify','documents','identity'],a:'KYC Verification requires:\n🪪 Passport or National ID\n🏠 Proof of Address (utility bill)\n\nEmail documents to: info@discoverjp.org\nOr call: +44 20 9946 9200'},
  {q:['thank','thanks','thank you','appreciate'],a:'You are very welcome! 😊 Is there anything else I can help you with?'},
  {q:['bye','goodbye','see you','that all','no thanks'],a:'Thank you for contacting Discover Bank! 🏦\n\nHave a wonderful day! 😊\nFor further help:\n📞 +44 20 9946 9200\n📧 info@discoverjp.org'},
];

function getAIReply(msg){
  const lower=msg.toLowerCase();
  for(const item of KB){
    if(item.q.some(k=>lower.includes(k)))return item.a;
  }
  return "I'm not sure about that, but our support team can help! 😊\n\n📞 Call: "+BANK.phone+"\n📧 Email: "+BANK.email+"\n🕐 Hours: "+BANK.hours;
}

// Build widget HTML
const style=document.createElement('style');
style.textContent=`
#dbgChat{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;font-family:'Inter',Arial,sans-serif}
#dbgBtn{width:60px;height:60px;background:linear-gradient(135deg,#FFD700,#FFA500);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 24px rgba(255,215,0,0.4);transition:all 0.3s;font-size:1.6rem;border:none;position:relative}
#dbgBtn:hover{transform:scale(1.1);box-shadow:0 12px 32px rgba(255,215,0,0.5)}
#dbgDot{position:absolute;top:4px;right:4px;width:14px;height:14px;background:#10B981;border-radius:50%;border:2px solid white;animation:dbgPulse 2s infinite}
@keyframes dbgPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
#dbgBox{display:none;position:absolute;bottom:75px;right:0;width:340px;background:#1C1C2E;border:1px solid rgba(255,215,0,0.2);border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);animation:dbgSlide 0.3s ease}
@keyframes dbgSlide{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
#dbgHead{background:linear-gradient(135deg,#1C1C2E,#16213E);padding:1rem;border-bottom:1px solid rgba(255,215,0,0.15)}
.dbg-head-top{display:flex;align-items:center;gap:0.65rem;margin-bottom:0.5rem}
.dbg-logo{width:36px;height:36px;background:linear-gradient(135deg,#FFD700,#FFA500);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#1C1C2E;font-size:1rem;flex-shrink:0}
.dbg-head-info h4{font-size:0.85rem;font-weight:700;color:white;margin:0}
.dbg-head-info p{font-size:0.65rem;color:rgba(255,215,0,0.6);margin:0}
.dbg-online{display:flex;align-items:center;gap:0.35rem;font-size:0.65rem;color:#34D399;margin-left:auto}
.dbg-online-dot{width:7px;height:7px;background:#10B981;border-radius:50%;animation:dbgPulse 2s infinite}
.dbg-tabs{display:flex;gap:0.35rem}
.dbg-tab{flex:1;padding:0.4rem;background:rgba(255,255,255,0.06);border:none;border-radius:8px;color:rgba(255,255,255,0.5);font-size:0.72rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all 0.2s}
.dbg-tab.active{background:rgba(255,215,0,0.15);color:#FFD700;border:1px solid rgba(255,215,0,0.25)}
#dbgMessages{height:280px;overflow-y:auto;padding:0.85rem;display:flex;flex-direction:column;gap:0.65rem;scroll-behavior:smooth}
#dbgMessages::-webkit-scrollbar{width:4px}
#dbgMessages::-webkit-scrollbar-track{background:transparent}
#dbgMessages::-webkit-scrollbar-thumb{background:rgba(255,215,0,0.2);border-radius:2px}
.dbg-msg{max-width:85%;padding:0.65rem 0.85rem;border-radius:12px;font-size:0.8rem;line-height:1.55;white-space:pre-wrap;word-break:break-word}
.dbg-msg.bot{background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.12);color:rgba(255,255,255,0.85);align-self:flex-start;border-radius:4px 12px 12px 12px}
.dbg-msg.user{background:linear-gradient(135deg,#FFD700,#FFA500);color:#1C1C2E;align-self:flex-end;font-weight:600;border-radius:12px 4px 12px 12px}
.dbg-msg.system{background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);color:#93C5FD;align-self:center;font-size:0.68rem;text-align:center;border-radius:8px;padding:0.4rem 0.75rem}
.dbg-typing{display:flex;gap:4px;padding:0.65rem 0.85rem;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.12);border-radius:4px 12px 12px 12px;align-self:flex-start;width:fit-content}
.dbg-typing span{width:7px;height:7px;background:rgba(255,215,0,0.5);border-radius:50%;animation:dbgTyp 1.2s infinite}
.dbg-typing span:nth-child(2){animation-delay:0.2s}
.dbg-typing span:nth-child(3){animation-delay:0.4s}
@keyframes dbgTyp{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
#dbgContact{display:none;padding:0.85rem}
.dbg-contact-item{display:flex;align-items:center;gap:0.75rem;padding:0.85rem;background:rgba(255,215,0,0.04);border:1px solid rgba(255,215,0,0.1);border-radius:10px;margin-bottom:0.5rem;text-decoration:none;transition:all 0.2s}
.dbg-contact-item:hover{border-color:rgba(255,215,0,0.3);background:rgba(255,215,0,0.08)}
.dbg-contact-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.dbg-contact-info h5{font-size:0.8rem;font-weight:700;color:white;margin:0 0 0.1rem}
.dbg-contact-info p{font-size:0.68rem;color:rgba(255,255,255,0.45);margin:0}
#dbgInput{padding:0.75rem;border-top:1px solid rgba(255,215,0,0.1);display:flex;gap:0.5rem;background:#16213E}
#dbgInput input{flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,215,0,0.15);border-radius:10px;padding:0.55rem 0.85rem;color:white;font-size:0.82rem;outline:none;font-family:inherit}
#dbgInput input::placeholder{color:rgba(255,255,255,0.3)}
#dbgInput input:focus{border-color:rgba(255,215,0,0.4)}
#dbgSend{width:36px;height:36px;background:linear-gradient(135deg,#FFD700,#FFA500);border:none;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;flex-shrink:0;transition:all 0.2s}
#dbgSend:hover{transform:scale(1.05)}
.dbg-quick{display:flex;flex-wrap:wrap;gap:0.35rem;margin-top:0.5rem}
.dbg-qbtn{background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.2);color:rgba(255,215,0,0.8);border-radius:20px;padding:0.3rem 0.65rem;font-size:0.68rem;font-weight:600;cursor:pointer;transition:all 0.2s;font-family:inherit}
.dbg-qbtn:hover{background:rgba(255,215,0,0.15);color:#FFD700}
@media(max-width:400px){#dbgBox{width:calc(100vw - 2rem);right:-0.5rem}}
`;
document.head.appendChild(style);

const widget=document.createElement('div');
widget.id='dbgChat';
widget.innerHTML=`
<div id="dbgBox">
  <div id="dbgHead">
    <div class="dbg-head-top">
      <div class="dbg-logo">D</div>
      <div class="dbg-head-info">
        <h4>Discover Bank Support</h4>
        <p>Global Management plc</p>
      </div>
      <div class="dbg-online"><div class="dbg-online-dot"></div>Online</div>
      <button onclick="toggleChat()" style="background:rgba(255,255,255,0.08);border:none;color:rgba(255,255,255,0.5);border-radius:6px;width:24px;height:24px;cursor:pointer;font-size:0.8rem;margin-left:0.5rem">✕</button>
    </div>
    <div class="dbg-tabs">
      <button class="dbg-tab active" onclick="switchTab('ai')">🤖 AI Assistant</button>
      <button class="dbg-tab" onclick="switchTab('contact')">📞 Live Support</button>
    </div>
  </div>
  <!-- AI CHAT -->
  <div id="dbgMessages"></div>
  <!-- QUICK BUTTONS -->
  <div style="padding:0 0.85rem 0.5rem">
    <div class="dbg-quick">
      <button class="dbg-qbtn" onclick="quickSend('How do I open an account?')">Open Account</button>
      <button class="dbg-qbtn" onclick="quickSend('How do I transfer money?')">Transfers</button>
      <button class="dbg-qbtn" onclick="quickSend('I forgot my password')">Password Help</button>
      <button class="dbg-qbtn" onclick="quickSend('Tell me about loans')">Loans</button>
      <button class="dbg-qbtn" onclick="quickSend('Is Discover Bank regulated?')">FCA Info</button>
      <button class="dbg-qbtn" onclick="switchTab('contact')">📞 Talk to Us</button>
    </div>
  </div>
  <!-- CONTACT TAB -->
  <div id="dbgContact">
    <p style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:0.75rem;text-align:center">Our team is ready to help! 😊</p>
    <a href="tel:+442099469200" class="dbg-contact-item">
      <div class="dbg-contact-icon" style="background:rgba(16,185,129,0.15)">📞</div>
      <div class="dbg-contact-info"><h5>Call Us</h5><p>+44 20 9946 9200</p></div>
    </a>
    <a href="mailto:info@discoverjp.org" class="dbg-contact-item">
      <div class="dbg-contact-icon" style="background:rgba(59,130,246,0.15)">📧</div>
      <div class="dbg-contact-info"><h5>Email Us</h5><p>info@discoverjp.org</p></div>
    </a>
    <a href="https://wa.me/442099469200" target="_blank" class="dbg-contact-item">
      <div class="dbg-contact-icon" style="background:rgba(37,211,102,0.15)">💬</div>
      <div class="dbg-contact-info"><h5>WhatsApp</h5><p>+44 20 9946 9200</p></div>
    </a>
    <a href="mailto:info@discoverjp.org?subject=Support Request" class="dbg-contact-item">
      <div class="dbg-contact-icon" style="background:rgba(232,119,34,0.15)">✉️</div>
      <div class="dbg-contact-info"><h5>Send Message</h5><p>We reply within 24 hours</p></div>
    </a>
    <div style="text-align:center;margin-top:0.5rem;font-size:0.65rem;color:rgba(255,255,255,0.3)">Hours: Mon-Fri 8AM-6PM | Sat 9AM-2PM GMT</div>
  </div>
  <!-- INPUT -->
  <div id="dbgInput">
    <input type="text" id="dbgText" placeholder="Type your message..." onkeypress="if(event.key==='Enter')sendMsg()"/>
    <button id="dbgSend" onclick="sendMsg()">➤</button>
  </div>
</div>
<button id="dbgBtn" onclick="toggleChat()">
  💬
  <div id="dbgDot"></div>
</button>`;
document.body.appendChild(widget);

let open=false;
let msgCount=0;

function toggleChat(){
  open=!open;
  const box=document.getElementById('dbgBox');
  const btn=document.getElementById('dbgBtn');
  box.style.display=open?'block':'none';
  btn.textContent=open?'✕':'💬';
  if(open&&msgCount===0){
    setTimeout(()=>{
      addMsg('bot','👋 Hello! Welcome to **Discover Bank Global Management plc**!\n\nI am your 24/7 AI banking assistant. I can help you with:\n\n• Opening an account\n• Transfers & payments\n• Loans & credit\n• Account information\n• Security & password help\n\nHow can I help you today? 😊');
    },400);
  }
}

function switchTab(tab){
  document.querySelectorAll('.dbg-tab').forEach(t=>t.classList.remove('active'));
  const msgs=document.getElementById('dbgMessages');
  const contact=document.getElementById('dbgContact');
  const input=document.getElementById('dbgInput');
  const quick=document.querySelector('.dbg-quick')?.parentElement;
  if(tab==='ai'){
    document.querySelectorAll('.dbg-tab')[0].classList.add('active');
    msgs.style.display='flex';
    contact.style.display='none';
    input.style.display='flex';
    if(quick)quick.style.display='block';
  }else{
    document.querySelectorAll('.dbg-tab')[1].classList.add('active');
    msgs.style.display='none';
    contact.style.display='block';
    input.style.display='none';
    if(quick)quick.style.display='none';
  }
}

function addMsg(type,text){
  const msgs=document.getElementById('dbgMessages');
  const div=document.createElement('div');
  div.className='dbg-msg '+type;
  div.textContent=text.replace(/\*\*/g,'');
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
  msgCount++;
}

function showTyping(){
  const msgs=document.getElementById('dbgMessages');
  const div=document.createElement('div');
  div.className='dbg-typing';
  div.id='dbgTyping';
  div.innerHTML='<span></span><span></span><span></span>';
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}

function hideTyping(){
  const t=document.getElementById('dbgTyping');
  if(t)t.remove();
}

function sendMsg(){
  const input=document.getElementById('dbgText');
  const text=input.value.trim();
  if(!text)return;
  addMsg('user',text);
  input.value='';
  showTyping();
  setTimeout(()=>{
    hideTyping();
    const reply=getAIReply(text);
    addMsg('bot',reply);
  },900+Math.random()*600);
}

function quickSend(text){
  document.getElementById('dbgText').value=text;
  sendMsg();
}

// Show chat notification after 5 seconds
setTimeout(()=>{
  if(!open){
    const btn=document.getElementById('dbgBtn');
    if(btn){btn.style.animation='dbgBounce 1s ease 3';btn.title='Chat with us!';}
  }
},5000);

})();
  
