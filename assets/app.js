function go(path){ window.location.href = path; }
function showToast(message){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div'); t.className='toast'; document.body.appendChild(t);}
  t.textContent=message;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}
function simulateChat(){
  const input=document.getElementById('chatInput');
  const body=document.getElementById('chatBody');
  if(!input||!body)return;
  const value=(input.value||'I want to save ₹1000 every month').trim();
  const user=document.createElement('div');
  user.className='message user'; user.textContent=value; body.appendChild(user);
  input.value='';
  setTimeout(()=>{
    const ai=document.createElement('div');
    ai.className='message ai';
    ai.innerHTML='Great. For safe monthly saving, I recommend an <b>SBI Recurring Deposit</b>. I will create a plan and guide you step-by-step. <br><br><button class="choice" onclick="go(\'recommendation.html\')">View recommended plan →</button>';
    body.appendChild(ai); body.scrollTop=body.scrollHeight;
  },450);
}
function fillGoal(goal){
  const input=document.getElementById('chatInput');
  if(input){input.value=goal; simulateChat();}
}
function toggleLanguage(){ showToast('Prototype language switched: Hindi + English guidance supported'); }
function addReminder(){ showToast('Reminder added: Monthly RD deposit nudge at 9:00 AM'); }
function validateLinks(){ return true; }
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-toast]').forEach(el=>el.addEventListener('click',()=>showToast(el.dataset.toast)));
});
