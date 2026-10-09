const ALL_CARDS = [
  {id:"mario",name:"Марио",emoji:"🍄",atk:3,hp:10,rarity:"common",passiveName:"Супер-гриб",passiveDesc:"HP<5: +4HP +1ATK (1 раз)",pack:"nintendo"},
  {id:"pikachu",name:"Пикачу",emoji:"⚡",atk:5,hp:8,rarity:"common",passiveName:"Статика",passiveDesc:"50%: +2 доп. урона",pack:"nintendo"},
  {id:"link",name:"Линк",emoji:"🗡️",atk:4,hp:11,rarity:"rare",passiveName:"Первый удар",passiveDesc:"Первая атака x2 урона",pack:"nintendo"},
  {id:"fox",name:"Фокс",emoji:"🦊",atk:3,hp:8,rarity:"common",passiveName:"Уклонение",passiveDesc:"Уклоняется от первой атаки",pack:"nintendo"},
  {id:"zelda",name:"Зельда",emoji:"👑",atk:3,hp:10,rarity:"rare",passiveName:"Мудрость",passiveDesc:"Каждый 3-й раунд хилит союзника +3HP",pack:"nintendo"},
  {id:"sonic",name:"Соник",emoji:"💨",atk:4,hp:7,rarity:"rare",passiveName:"Ускорение",passiveDesc:"Всегда бьёт первым",pack:"classic"},
  {id:"steve",name:"Стив",emoji:"⛏️",atk:3,hp:11,rarity:"common",passiveName:"Крафт доспехов",passiveDesc:"Атака: +1 макс HP",pack:"classic"},
  {id:"megaman",name:"Мегамен",emoji:"🔵",atk:4,hp:9,rarity:"rare",passiveName:"Копирование",passiveDesc:"Копирует ATK убитого врага",pack:"classic"},
  {id:"pacman",name:"Пакмен",emoji:"🟡",atk:2,hp:12,rarity:"common",passiveName:"Поглощение",passiveDesc:"Каждый раунд: +1HP",pack:"classic"},
  {id:"frogger",name:"Фроггер",emoji:"🐸",atk:2,hp:7,rarity:"common",passiveName:"Прыжок",passiveDesc:"40% уклонение от атак",pack:"classic"},
  {id:"lara",name:"Лара Крофт",emoji:"🔫",atk:4,hp:9,rarity:"rare",passiveName:"Сокровища",passiveDesc:"Убийство: союзник +2HP",pack:"shooter"},
  {id:"chief",name:"Мастер Чиф",emoji:"🤖",atk:3,hp:14,rarity:"epic",passiveName:"Энергощит",passiveDesc:"Блок первых 3 урона",pack:"shooter"},
  {id:"doom",name:"Палач Рока",emoji:"👹",atk:3,hp:13,rarity:"epic",passiveName:"Добивание",passiveDesc:"Враг ≤3HP: мгновенное убийство",pack:"shooter"},
  {id:"agent47",name:"Агент 47",emoji:"🎯",atk:5,hp:7,rarity:"rare",passiveName:"Контракт",passiveDesc:"Бьёт самого слабого врага",pack:"shooter"},
  {id:"price",name:"Кпт. Прайс",emoji:"🛡️",atk:3,hp:12,rarity:"rare",passiveName:"Прикрытие",passiveDesc:"Союзники получают -1 урона",pack:"shooter"},
  {id:"geralt",name:"Геральт",emoji:"🐺",atk:4,hp:12,rarity:"epic",passiveName:"Эликсиры",passiveDesc:"Враг сильнее: +2ATK при атаке",pack:"rpg"},
  {id:"knight",name:"Рыцарь",emoji:"🖤",atk:3,hp:9,rarity:"rare",passiveName:"Фокус Душ",passiveDesc:"Нанёс урон: +1HP в след. раунде",pack:"rpg"},
  {id:"kratos",name:"Кратос",emoji:"🪓",atk:2,hp:15,rarity:"legendary",passiveName:"Ярость спартанца",passiveDesc:"Получил урон: +1ATK навсегда",pack:"rpg"},
  {id:"dovahkiin",name:"Довакин",emoji:"🧙",atk:3,hp:11,rarity:"epic",passiveName:"Крик",passiveDesc:"Каждые 2 раунда: 3 урона всем врагам",pack:"rpg"},
  {id:"sekiro",name:"Сёнгоку",emoji:"⚔️",atk:5,hp:8,rarity:"rare",passiveName:"Парирование",passiveDesc:"При получении удара: 2 ответного урона",pack:"rpg"},
  {id:"cj",name:"CJ",emoji:"🏎️",atk:3,hp:10,rarity:"common",passiveName:"Район",passiveDesc:"Каждый раунд: случайно +2ATK или +2HP",pack:"openworld"},
  {id:"arthur",name:"Артур Морган",emoji:"🤠",atk:4,hp:11,rarity:"epic",passiveName:"Dead Eye",passiveDesc:"Первый удар — крит x2",pack:"openworld"},
  {id:"aloy",name:"Элой",emoji:"🧗",atk:4,hp:10,rarity:"rare",passiveName:"Охотница",passiveDesc:"Бьёт врага с наибольшим HP",pack:"openworld"},
  {id:"edward",name:"Эдвард Кенуэй",emoji:"⛵",atk:3,hp:9,rarity:"rare",passiveName:"Грабёж",passiveDesc:"При атаке: ворует +1ATK у врага",pack:"openworld"},
  {id:"rico",name:"Рико Родригез",emoji:"🌍",atk:3,hp:8,rarity:"common",passiveName:"Взрыв",passiveDesc:"При смерти: 4 урона всем врагам",pack:"openworld"},
  {id:"zagreus",name:"Загрей",emoji:"🏴‍☠️",atk:4,hp:6,rarity:"rare",passiveName:"Неумирающий",passiveDesc:"При смерти: возрождается 1 раз с 3HP",pack:"roguelike"},
  {id:"joker",name:"Джокер",emoji:"🃏",atk:3,hp:9,rarity:"epic",passiveName:"Персона",passiveDesc:"Всегда бьёт самого сильного врага",pack:"roguelike"},
  {id:"isaac",name:"Айзек",emoji:"🗝️",atk:2,hp:8,rarity:"common",passiveName:"Случайный предмет",passiveDesc:"Каждый раунд: +2ATK или +2HP или 3 урона врагу",pack:"roguelike"},
  {id:"skeleton",name:"Скелет",emoji:"☠️",atk:3,hp:7,rarity:"common",passiveName:"Проклятие",passiveDesc:"При смерти: убийца получает -2ATK",pack:"roguelike"},
  {id:"lucky",name:"Удачник",emoji:"🎲",atk:2,hp:9,rarity:"rare",passiveName:"Удача",passiveDesc:"25% шанс полностью заблокировать атаку",pack:"roguelike"},
  {id:"astarion",name:"Астарион",emoji:"🧛",atk:5,hp:9,rarity:"epic",passiveName:"Укус вампира",passiveDesc:"Враг >50% HP: +4 доп. урона",pack:"baldursgate"},
  {id:"shadowheart",name:"Шэдоухарт",emoji:"🌙",atk:3,hp:14,rarity:"rare",passiveName:"Исцеление",passiveDesc:"Начало боя: союзник с мин. HP +3HP",pack:"baldursgate"},
  {id:"laezel",name:"Лаэзель",emoji:"🦎",atk:6,hp:14,rarity:"epic",passiveName:"Гитъянки",passiveDesc:"Её HP < HP врага: +2ATK",pack:"baldursgate"},
  {id:"wyll",name:"Уилл",emoji:"👁️",atk:4,hp:12,rarity:"rare",passiveName:"Клинок на границе",passiveDesc:"Смертельный удар: 1HP + 4 урона (1 раз)",pack:"baldursgate"},
  {id:"gale",name:"Гейл",emoji:"💫",atk:6,hp:10,rarity:"epic",passiveName:"Сфера Аннигиляции",passiveDesc:"При смерти: 7 урона противнику",pack:"baldursgate"},
  {id:"karlach",name:"Карлах",emoji:"🔥",atk:5,hp:15,rarity:"legendary",passiveName:"Инфернальный мотор",passiveDesc:"Каждые 5 потерянных HP: +1ATK",pack:"baldursgate"},
  {id:"yshtola",name:"И'штола",emoji:"🐱",atk:5,hp:12,rarity:"epic",passiveName:"Ночь",passiveDesc:"HP<50%: +3ATK и +2HP (1 раз)",pack:"rpglegends"},
  {id:"pudge",name:"Пудж",emoji:"🪝",atk:4,hp:18,rarity:"legendary",passiveName:"Разделка",passiveDesc:"Убийство: +1ATK и +2HP навсегда",pack:"rpglegends"},
  {id:"fane",name:"Фейн",emoji:"💀",atk:5,hp:11,rarity:"epic",passiveName:"Исцеление ядом",passiveDesc:"При получении урона: хил +3HP",pack:"rpglegends"},
  {id:"reynauld",name:"Рейнальд",emoji:"⚜️",atk:5,hp:16,rarity:"epic",passiveName:"Крестоносец",passiveDesc:"HP > HP врага: +3ATK",pack:"rpglegends"},
  {id:"dismas",name:"Дисмас",emoji:"🔫",atk:5,hp:10,rarity:"rare",passiveName:"Точный выстрел",passiveDesc:"Первая атака — крит x2",pack:"rpglegends"}
    // === TRAILS ===
  {id:"rean",name:"Рин Шварцер",emoji:"⚔️",atk:4,hp:13,rarity:"epic",
    passiveName:"Стальная воля",passiveDesc:"HP<30%: +4ATK и блок удара (1 раз)",pack:"jrpg"},
  {id:"lloyd",name:"Ллойд Бэннингс",emoji:"🛡️",atk:3,hp:12,rarity:"rare",
    passiveName:"Барьер",passiveDesc:"Каждые 3 раунда: союзнику щит 4",pack:"jrpg"},
  {id:"estelle",name:"Эстель Брайт",emoji:"☀️",atk:4,hp:11,rarity:"rare",
    passiveName:"Боевой дух",passiveDesc:"Союзники +1ATK пока жива",pack:"jrpg"},

  // === TALES OF BERSERIA ===
  {id:"velvet",name:"Вайлет Кроу",emoji:"🔥",atk:6,hp:9,rarity:"epic",
    passiveName:"Пожирательница",passiveDesc:"Убийство: +4HP и +1ATK",pack:"jrpg"},
  {id:"rokuro",name:"Рокуро Рангецу",emoji:"🗡️",atk:5,hp:10,rarity:"rare",
    passiveName:"Контрудар",passiveDesc:"При получении урона: 3 урона атакующему",pack:"jrpg"},
  {id:"magilou",name:"Магилу",emoji:"🔮",atk:3,hp:11,rarity:"rare",
    passiveName:"Проклятие ведьмы",passiveDesc:"Каждый раунд: ATK врага -1",pack:"jrpg"},
  {id:"eizen",name:"Айзен",emoji:"🦁",atk:4,hp:14,rarity:"epic",
    passiveName:"Невезение",passiveDesc:"30% шанс: враг промахивается",pack:"jrpg"},

  // === DANGANRONPA ===
  {id:"makoto",name:"Макото Наэги",emoji:"🔍",atk:3,hp:10,rarity:"rare",
    passiveName:"Безумная удача",passiveDesc:"35% уклонение; союзник умер: +3ATK",pack:"danganronpa"},
  {id:"hajime",name:"Хаджиме Хината",emoji:"📷",atk:4,hp:12,rarity:"epic",
    passiveName:"Талант",passiveDesc:"Каждые 2 раунда: копирует бонус ATK союзника",pack:"danganronpa"},
  {id:"kaede",name:"Каэде Акамацу",emoji:"🎹",atk:3,hp:9,rarity:"rare",
    passiveName:"Гармония",passiveDesc:"Союзники +1HP каждый раунд",pack:"danganronpa"}
];

const RARITY_LABEL={common:"Обычная",rare:"Редкая",epic:"Эпическая",legendary:"Легендарная"};
const RARITY_WEIGHTS={common:60,rare:25,epic:12,legendary:3};

const PACKS = [
  {id:"daily",name:"Ежедневный пак",icon:"🎁",cards:3,price:0,desc:"3 карты бесплатно раз в день",filter:null,daily:true},
  {id:"standard",name:"Стандартный пак",icon:"📦",cards:6,price:100,desc:"6 карт из всех серий",filter:null},
  {id:"nintendo",name:"Пак Nintendo",icon:"🎮",cards:6,price:120,desc:"Марио, Пикачу, Линк, Фокс, Зельда",filter:"nintendo"},
  {id:"classic",name:"Пак Классика",icon:"👾",cards:6,price:120,desc:"Соник, Стив, Мегамен, Пакмен, Фроггер",filter:"classic"},
  {id:"shooter",name:"Пак Стрелки",icon:"🔫",cards:6,price:120,desc:"Чиф, Палач, Лара, Агент 47, Прайс",filter:"shooter"},
  {id:"rpg",name:"Пак RPG",icon:"⚔️",cards:6,price:120,desc:"Геральт, Кратос, Рыцарь, Довакин, Сёнгоку",filter:"rpg"},
  {id:"openworld",name:"Пак Открытый мир",icon:"🌍",cards:6,price:120,desc:"CJ, Артур Морган, Элой, Эдвард, Рико",filter:"openworld"},
  {id:"roguelike",name:"Пак Рогалик",icon:"🎲",cards:6,price:120,desc:"Загрей, Джокер, Айзек, Скелет, Удачник",filter:"roguelike"},
  {id:"baldursgate",name:"Пак Baldur's Gate",icon:"🐉",cards:6,price:150,desc:"Астарион, Шэдоухарт, Лаэзель, Уилл, Гейл, Карлах",filter:"baldursgate"},
  {id:"rpglegends",name:"Пак RPG Легенды",icon:"⚜️",cards:6,price:150,desc:"И'штола, Пудж, Фейн, Рейнальд, Дисмас",filter:"rpglegends"}
    ,{id:"jrpg",name:"Пак JRPG",icon:"⛩️",cards:6,price:150,
    desc:"Рин, Ллойд, Эстель, Вайлет, Рокуро, Магилу, Айзен",filter:"jrpg"},
  {id:"danganronpa",name:"Пак Данганронпа",icon:"🐻",cards:6,price:150,
    desc:"Макото, Хаджиме, Каэде",filter:"danganronpa"}
];

let gameState = loadState();

function loadState(){
  const s=localStorage.getItem("autobattler_save2");
  if(s)return JSON.parse(s);
  return{coins:200,collection:[],defense:[],lastDaily:null,wins:0,losses:0};
}
function saveState(){localStorage.setItem("autobattler_save2",JSON.stringify(gameState))}

function resetGame(){
  if(confirm("Сбросить весь прогресс?")){
    localStorage.removeItem("autobattler_save2");
    gameState={coins:200,collection:[],defense:[],lastDaily:null,wins:0,losses:0};
    saveState();showScreen("screen-menu");
  }
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if(id==="screen-menu")refreshMenu();
  if(id==="screen-collection")refreshCollection();
  if(id==="screen-shop")refreshShop();
  if(id==="screen-defense")refreshDefense();
  if(id==="screen-battle-pick")refreshAttackPick();
}

function refreshMenu(){
  document.getElementById("menu-coins").textContent=`🪙 ${gameState.coins}`;
  const u=[...new Set(gameState.collection)].length;
  document.getElementById("coll-count").textContent=`Уникальных карт: ${u} / ${ALL_CARDS.length} | Побед: ${gameState.wins}`;
}

function refreshCollection(){
  document.getElementById("coll-coins").textContent=`🪙 ${gameState.coins}`;
  const owned=[...new Set(gameState.collection)];
  if(owned.length===0){document.getElementById("collection-grid").innerHTML=`<div style="text-align:center;color:#888;padding:40px;width:100%">У тебя пока нет карт.<br>Открой пак в магазине! 🎁</div>`;return;}
  document.getElementById("collection-grid").innerHTML=owned.map(id=>{
    const c=ALL_CARDS.find(x=>x.id===id);if(!c)return'';
    const cnt=gameState.collection.filter(x=>x===id).length;
    return`<div class="card-mini rarity-${c.rarity}">${cnt>1?`<div class="card-count">x${cnt}</div>`:''}<div class="card-img">${c.emoji}</div><div class="cname">${c.name}</div><div class="stats-row"><span class="stat-atk">⚔ ${c.atk}</span><span class="stat-hp">❤ ${c.hp}</span></div><div class="passive-block"><div class="passive-name">✨ ${c.passiveName}</div><div class="passive-desc">${c.passiveDesc}</div></div><div class="rarity-badge">${RARITY_LABEL[c.rarity]}</div></div>`;
  }).join("");
}

function getRotatingPack(){
  const themePacks=PACKS.filter(p=>!p.daily&&p.id!=="standard");
  const today=new Date().toISOString().slice(0,10);
  let seed=0;for(let i=0;i<today.length;i++)seed+=today.charCodeAt(i)*(i+1);
  return themePacks[seed%themePacks.length];
}

function refreshShop(){
  document.getElementById("shop-coins").textContent=`🪙 ${gameState.coins}`;
  const today=new Date().toISOString().slice(0,10);
  const du=gameState.lastDaily===today;
  const rotPack=getRotatingPack();
  const shopPacks=[PACKS.find(p=>p.id==="daily"),PACKS.find(p=>p.id==="standard"),rotPack];
  const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);tomorrow.setHours(0,0,0,0);
  const diff=tomorrow-new Date();const h=Math.floor(diff/3600000);const m=Math.floor((diff%3600000)/60000);
  document.getElementById("shop-packs").innerHTML=shopPacks.map((p,i)=>{
    const dis=p.daily?du:gameState.coins<p.price;const isRot=i===2;
    return`<div class="pack ${p.daily?'pack-free':''} ${isRot?'pack-rotating':''} ${dis?'pack-disabled':''}" onclick="buyPack('${p.id}')">${isRot?'<div class="pack-badge">⭐ ПАК ДНЯ</div>':''}<div class="pack-icon">${p.icon}</div><div class="pack-name">${p.name}</div><div class="pack-info">${p.desc}</div><div class="pack-price">${p.daily?(du?'✅ Получен сегодня':'🆓 Бесплатно!'):`🪙 ${p.price}`}</div></div>`;
  }).join("")+`<div style="text-align:center;color:#666;font-size:0.8em;margin-top:12px">⏰ Пак дня сменится через ${h}ч ${m}м</div>`;
}

function buyPack(pid){
  const p=PACKS.find(x=>x.id===pid);if(!p)return;
  if(p.daily){const t=new Date().toISOString().slice(0,10);if(gameState.lastDaily===t)return;gameState.lastDaily=t;}
  else{if(gameState.coins<p.price)return;gameState.coins-=p.price;}
  const cards=generatePack(p.cards,p.filter);cards.forEach(c=>gameState.collection.push(c.id));saveState();showReveal(p.name,cards);
}

function generatePack(count,filter){
  const res=[];for(let i=0;i<count;i++){const rar=rollRarity();let pool=ALL_CARDS.filter(c=>c.rarity===rar);
  if(filter&&Math.random()<0.7){const f=ALL_CARDS.filter(c=>c.pack===filter&&c.rarity===rar);if(f.length>0)pool=f;}
  if(pool.length===0)pool=ALL_CARDS.filter(c=>c.rarity==="common");res.push(pool[Math.floor(Math.random()*pool.length)]);}return res;
}

function rollRarity(){const r=Math.random()*100;if(r<RARITY_WEIGHTS.legendary)return"legendary";if(r<RARITY_WEIGHTS.legendary+RARITY_WEIGHTS.epic)return"epic";if(r<RARITY_WEIGHTS.legendary+RARITY_WEIGHTS.epic+RARITY_WEIGHTS.rare)return"rare";return"common";}

function showReveal(name,cards){
  document.getElementById("pr-title").textContent=`🎁 ${name}`;
  document.getElementById("pr-cards").innerHTML=cards.map(c=>`<div class="pr-card rarity-${c.rarity}"><div class="emo">${c.emoji}</div><div class="cname">${c.name}</div><div class="pr-stats"><span style="color:#f5a623">⚔${c.atk}</span> <span style="color:#e94560">❤${c.hp}</span></div><div class="pr-passive">✨${c.passiveName}</div><div class="rarity-badge">${RARITY_LABEL[c.rarity]}</div></div>`).join("");
  document.getElementById("pack-reveal").classList.add("active");
}
function closeReveal(){document.getElementById("pack-reveal").classList.remove("active");refreshShop();}

let defenseSelection=[],attackSelection=[];

function renderSelectionGrid(gid,sel,fn){
  const owned=[...new Set(gameState.collection)];
  if(owned.length===0){document.getElementById(gid).innerHTML=`<div style="text-align:center;color:#888;padding:40px;width:100%">Нет карт для выбора.</div>`;return;}
  document.getElementById(gid).innerHTML=owned.map(id=>{const c=ALL_CARDS.find(x=>x.id===id);const s=sel.includes(id);
  return`<div class="card-mini rarity-${c.rarity} ${s?'selected':''}" onclick="${fn}('${id}')"><div class="card-img">${c.emoji}</div><div class="cname">${c.name}</div><div class="stats-row"><span class="stat-atk">⚔ ${c.atk}</span><span class="stat-hp">❤ ${c.hp}</span></div><div class="passive-block"><div class="passive-name">✨ ${c.passiveName}</div><div class="passive-desc">${c.passiveDesc}</div></div><div class="rarity-badge">${RARITY_LABEL[c.rarity]}</div></div>`;}).join("");
}

function refreshDefense(){defenseSelection=[...gameState.defense];renderSelectionGrid("defense-grid",defenseSelection,"toggleDefense");updateDefBtn();}
function toggleDefense(id){const i=defenseSelection.indexOf(id);if(i>=0)defenseSelection.splice(i,1);else if(defenseSelection.length<3)defenseSelection.push(id);renderSelectionGrid("defense-grid",defenseSelection,"toggleDefense");updateDefBtn();}
function updateDefBtn(){document.getElementById("def-confirm").disabled=defenseSelection.length!==3;}
function saveDefense(){gameState.defense=[...defenseSelection];saveState();alert("Защита сохранена!");showScreen("screen-menu")}
function refreshAttackPick(){attackSelection=[];renderSelectionGrid("attack-grid",attackSelection,"toggleAttack");updateAtkBtn();}
function toggleAttack(id){const i=attackSelection.indexOf(id);if(i>=0)attackSelection.splice(i,1);else if(attackSelection.length<3)attackSelection.push(id);renderSelectionGrid("attack-grid",attackSelection,"toggleAttack");updateAtkBtn();}
function updateAtkBtn(){document.getElementById("atk-confirm").disabled=attackSelection.length!==3;}
let battleTeamA=[],battleTeamD=[];

function startBattleScreen(){
  battleTeamA=attackSelection.map(id=>makeCard(id));battleTeamD=generateBotDefense();
  showScreen("screen-battle");document.getElementById("fight-btn").disabled=false;
  document.getElementById("battle-log").innerHTML="";renderBattle();
}
function generateBotDefense(){const pool=[...ALL_CARDS];const t=[];for(let i=0;i<3;i++){t.push(makeCard(pool[Math.floor(Math.random()*pool.length)].id));}return t;}
function makeCard(id){const b=ALL_CARDS.find(c=>c.id===id);return{...b,curHp:b.hp,maxHp:b.hp,curAtk:b.atk,mushroomUsed:false,shieldRemaining:3,dealtDmgLastRound:false,dodgeUsed:false,firstAttack:true,revived:false,wyllUsed:false,yshtolaUsed:false,karlachDmgTaken:0,shadowheartUsed:false,reanUsed:false,lloydShield:0,side:""};}
function renderBattle(){renderBTeam("b-team-a",battleTeamA);renderBTeam("b-team-d",battleTeamD);}
function renderBTeam(eid,team){document.getElementById(eid).innerHTML=team.map(c=>`<div class="card-b ${c.curHp<=0?'dead':''}"><div class="emo">${c.emoji}</div><div class="cname">${c.name}</div><div class="b-stats"><span class="atk-v">⚔${c.curAtk}</span><span class="hp-v">❤${Math.max(0,c.curHp)}/${c.maxHp}</span></div>${c.id==='chief'&&c.shieldRemaining>0?`<div class="shield-v">🛡${c.shieldRemaining}</div>`:''}<div class="b-passive">✨${c.passiveName}</div></div>`).join("");}

function runBattle(){
  const log=document.getElementById("battle-log");const btn=document.getElementById("fight-btn");
  log.innerHTML="";btn.disabled=true;
  battleTeamA.forEach(c=>{c.side="a"});battleTeamD.forEach(c=>{c.side="d"});
  const add=(t,cls="")=>{log.innerHTML+=`<div class="${cls}">${t}</div>`;log.scrollTop=log.scrollHeight;};
  add("🏁 <b>БОЙ НАЧАЛСЯ!</b>");let round=1;
  const loop=setInterval(()=>{
    add(`<br>— Раунд ${round} —`,"lr");
    [...battleTeamA,...battleTeamD].forEach(c=>{if(c.id==="knight"&&c.dealtDmgLastRound&&c.curHp>0){c.curHp=Math.min(c.maxHp,c.curHp+1);add(`🖤 ${c.name}: Фокус Душ +1HP`,"lp");}c.dealtDmgLastRound=false;});
    const queue=[];const mx=Math.max(battleTeamA.length,battleTeamD.length);
    for(let i=0;i<mx;i++){if(battleTeamA[i])queue.push({card:battleTeamA[i],enemies:battleTeamD,allies:battleTeamA});if(battleTeamD[i])queue.push({card:battleTeamD[i],enemies:battleTeamA,allies:battleTeamD});}
    queue.sort((a,b)=>(b.card.id==="sonic"?1:0)-(a.card.id==="sonic"?1:0));
    for(const turn of queue){
      const card=turn.card;if(card.curHp<=0)continue;let target;
      if(card.id==="agent47")target=turn.enemies.filter(c=>c.curHp>0).sort((a,b)=>a.curHp-b.curHp)[0];
      else if(card.id==="aloy")target=turn.enemies.filter(c=>c.curHp>0).sort((a,b)=>b.curHp-a.curHp)[0];
      else if(card.id==="joker")target=turn.enemies.filter(c=>c.curHp>0).sort((a,b)=>b.curAtk-a.curAtk)[0];
      else target=turn.enemies.find(c=>c.curHp>0);
      if(!target)continue;const tag=turn.allies===battleTeamA?"🔵":"🔴";
      if(card.id==="pacman"){card.curHp=Math.min(card.maxHp,card.curHp+1);add(`${tag} 🟡 Поглощение +1HP`,"lp");}
      if(card.id==="cj"){if(Math.random()<0.5){card.curAtk+=2;add(`${tag} 🏎️ CJ: +2ATK`,"lp");}else{card.curHp+=2;card.maxHp+=2;add(`${tag} 🏎️ CJ: +2HP`,"lp");}}
      if(card.id==="isaac"){const roll=Math.floor(Math.random()*3);if(roll===0){card.curAtk+=2;add(`${tag} 🗝️ +2ATK`,"lp");}else if(roll===1){card.curHp+=2;card.maxHp+=2;add(`${tag} 🗝️ +2HP`,"lp");}else{target.curHp-=3;add(`${tag} 🗝️ 3 урона ${target.name}`,"lp");}}
      if(card.id==="zelda"&&round%3===0){const ally=turn.allies.filter(c=>c.curHp>0&&c!==card).sort((a,b)=>a.curHp-b.curHp)[0];if(ally){ally.curHp=Math.min(ally.maxHp,ally.curHp+3);add(`${tag} 👑 Зельда: ${ally.name} +3HP`,"lp");}}
      if(card.id==="shadowheart"&&round===1&&!card.shadowheartUsed){card.shadowheartUsed=true;const ally=turn.allies.filter(c=>c.curHp>0).sort((a,b)=>a.curHp-b.curHp)[0];if(ally){ally.curHp=Math.min(ally.maxHp,ally.curHp+3);add(`${tag} 🌙 Шэдоухарт: ${ally.name} +3HP`,"lp");}}
            // Ллойд: барьер каждые 3 раунда
      if(card.id==="lloyd"&&round%3===0){const ally=turn.allies.filter(c=>c.curHp>0&&c!==card).sort((a,b)=>a.curHp-b.curHp)[0];if(ally){ally.lloydShield=(ally.lloydShield||0)+4;add(`${tag} 🛡️ Ллойд: Барьер! ${ally.name} +4 щита`,"lp");}}
      // Магилу: снижение ATK врага
      if(card.id==="magilou"){const en=turn.enemies.find(c=>c.curHp>0);if(en&&en.curAtk>1){en.curAtk-=1;add(`${tag} 🔮 Магилу: ${en.name} ATK→${en.curAtk}`,"lp");}}
      // Каэде: хил союзникам
      if(card.id==="kaede"){turn.allies.filter(c=>c.curHp>0&&c!==card).forEach(a=>{a.curHp=Math.min(a.maxHp,a.curHp+1);});add(`${tag} 🎹 Каэде: Гармония! Союзники +1HP`,"lp");}
      // Эстель: бонус ATK союзникам (проверяется при ударе)
      // Хаджиме: копирование бонуса ATK
      if(card.id==="hajime"&&round%2===0){const best=turn.allies.filter(c=>c.curHp>0&&c!==card).sort((a,b)=>b.curAtk-a.curAtk)[0];if(best&&best.curAtk>best.atk){const bonus=best.curAtk-best.atk;card.curAtk=card.atk+bonus;add(`${tag} 📷 Хаджиме: Талант! ATK→${card.curAtk}`,"lp");}}
      if(card.id==="dovahkiin"&&round%2===0){turn.enemies.filter(c=>c.curHp>0).forEach(e=>{e.curHp-=3;if(e.curHp<=0)add(`💀 ${e.name} повержен Криком!`,"lk");});add(`${tag} 🧙 Довакин: Крик!`,"lp");renderBattle();if(checkEnd(add,loop,btn))return;}
      if(card.id==="doom"&&target.curHp<=3&&target.curHp>0){target.curHp=0;add(`${tag} ${card.emoji} ${card.name} → 💀 ${target.name} ДОБИВАНИЕ!`,"lk");card.dealtDmgLastRound=true;onKill(card,target,turn.allies,turn.enemies,add);renderBattle();if(checkEnd(add,loop,btn))return;continue;}
      let dmg=card.curAtk;
      if(card.id==="geralt"&&target.curAtk>card.curAtk){dmg+=2;add(`${tag} 🐺 Эликсиры! +2ATK`,"lp");}
      if(card.id==="link"&&card.firstAttack){dmg*=2;card.firstAttack=false;add(`${tag} 🗡️ Линк: x2!`,"lp");}
      if(card.id==="arthur"&&card.firstAttack){dmg*=2;card.firstAttack=false;add(`${tag} 🤠 Dead Eye! x2`,"lp");}
      if(card.id==="dismas"&&card.firstAttack){dmg*=2;card.firstAttack=false;add(`${tag} 🔫 Точный выстрел! x2`,"lp");}
      if(card.id==="edward"&&target.curAtk>1){target.curAtk-=1;card.curAtk+=1;add(`${tag} ⛵ Грабёж!`,"lp");}
      if(card.id==="astarion"&&target.curHp>target.maxHp*0.5){dmg+=4;add(`${tag} 🧛 Укус вампира! +4`,"lp");}
      if(card.id==="laezel"&&card.curHp<target.curHp){dmg+=2;add(`${tag} 🦎 Гитъянки! +2ATK`,"lp");}
      if(card.id==="reynauld"&&card.curHp>target.curHp){dmg+=3;add(`${tag} ⚜️ Крестоносец! +3ATK`,"lp");}
            // Эстель: бонус союзникам
      if(card.id!=="estelle"){const est=turn.allies.find(c=>c.id==="estelle"&&c.curHp>0);if(est)dmg+=1;}
      add(`${tag} ${card.emoji} ${card.name} → ${target.emoji} ${target.name} (-${dmg})`,"lh");
      const result=applyDamage(target,dmg,add);card.dealtDmgLastRound=true;
      if(result<0){const ret=Math.abs(result);card.curHp-=ret;add(`${tag} ${card.name} получил ${ret} ответного урона!`,"lh");if(card.curHp<=0)add(`💀 ${card.name} повержен ответкой!`,"lk");}
      if(card.id==="pikachu"&&target.curHp>0&&Math.random()<0.5){target.curHp-=2;add(`${tag} ⚡ Статика! +2`,"lp");}
      if(card.id==="steve"){card.maxHp+=1;card.curHp+=1;add(`${tag} ⛏ Крафт! HP→${card.curHp}/${card.maxHp}`,"lp");}
      if(target.curHp<=0){add(`💀 ${target.emoji} ${target.name} повержен!`,"lk");onKill(card,target,turn.allies,turn.enemies,add);}
      renderBattle();if(checkEnd(add,loop,btn))return;
    }
    round++;
    if(round>30){clearInterval(loop);btn.disabled=false;const hpA=battleTeamA.reduce((s,c)=>s+Math.max(0,c.curHp),0);const hpD=battleTeamD.reduce((s,c)=>s+Math.max(0,c.curHp),0);if(hpA>hpD){add("<br>🏆 ПОБЕДА!","lw");onWin();}else if(hpD>hpA){add("<br>💔 ПОРАЖЕНИЕ","lw");onLose();}else add("<br>🤝 НИЧЬЯ","lw");}
  },1000);
}

function applyDamage(target,dmg,add){
  if(target.id==="chief"&&target.shieldRemaining>0){const bl=Math.min(dmg,target.shieldRemaining);target.shieldRemaining-=bl;dmg-=bl;if(bl>0)add(`🛡 ${target.name}: щит -${bl}`,"ls");if(dmg<=0)return 0;}
  if(target.id==="fox"&&!target.dodgeUsed){target.dodgeUsed=true;add(`🦊 ${target.name}: Уклонение!`,"lp");return 0;}
  if(target.id==="lucky"&&Math.random()<0.25){add(`🎲 ${target.name}: Удача!`,"lp");return 0;}
  if(target.id==="frogger"&&Math.random()<0.4){add(`🐸 ${target.name}: Прыжок!`,"lp");return 0;}
  if(target.id==="eizen"&&Math.random()<0.3){add(`🦁 ${target.name}: Невезение! Промах`,"lp");return 0;}
  if(target.id==="makoto"&&Math.random()<0.35){add(`🔍 ${target.name}: Безумная удача!`,"lp");return 0;}
  if(target.id==="rean"&&!target.reanUsed&&target.curHp>0&&target.curHp<=target.maxHp*0.3){target.reanUsed=true;target.curAtk+=4;add(`⚔️ ${target.name}: Стальная воля! +4ATK и блок`,"lp");return 0;}
  if(target.lloydShield>0){const bl=Math.min(dmg,target.lloydShield);target.lloydShield-=bl;dmg-=bl;if(bl>0)add(`🛡️ Барьер: ${target.name} -${bl} урона`,"ls");if(dmg<=0)return 0;}
  if(target.id!=="price"){const team=target.side==="a"?battleTeamA:battleTeamD;const p=team.find(c=>c.id==="price"&&c.curHp>0);if(p&&dmg>1){dmg-=1;add(`🛡️ Прайс: -1 урона`,"lp");}}
  target.curHp-=dmg;
  if(target.id==="wyll"&&target.curHp<=0&&!target.wyllUsed){target.wyllUsed=true;target.curHp=1;add(`👁️ ${target.name}: Клинок на границе!`,"lp");return -4;}
  if(target.id==="kratos"&&dmg>0&&target.curHp>0){target.curAtk+=1;add(`🪓 ${target.name}: Ярость! ATK→${target.curAtk}`,"lp");}
  if(target.id==="sekiro"&&dmg>0&&target.curHp>0){add(`⚔️ ${target.name}: Парирование!`,"lp");return -2;}
  if(target.id==="rokuro"&&dmg>0&&target.curHp>0){add(`🗡️ ${target.name}: Контрудар!`,"lp");return -3;}
  if(target.id==="mario"&&!target.mushroomUsed&&target.curHp>0&&target.curHp<5){target.mushroomUsed=true;target.curHp+=4;target.curAtk+=1;add(`🍄 ${target.name}: Гриб!`,"lp");}
  if(target.id==="yshtola"&&!target.yshtolaUsed&&target.curHp>0&&target.curHp<target.maxHp*0.5){target.yshtolaUsed=true;target.curAtk+=3;target.curHp+=2;add(`🐱 ${target.name}: Ночь! +3ATK +2HP`,"lp");}
  if(target.id==="karlach"&&dmg>0&&target.curHp>0){target.karlachDmgTaken+=dmg;const b=Math.floor(target.karlachDmgTaken/5);const n=target.atk+b;if(n>target.curAtk){target.curAtk=n;add(`🔥 ${target.name}: Мотор! ATK→${target.curAtk}`,"lp");}}
  if(target.id==="fane"&&dmg>0&&target.curHp>0){target.curHp=Math.min(target.maxHp,target.curHp+3);add(`💀 ${target.name}: Исцеление ядом! +3HP`,"lp");}
  return dmg;
}

function onKill(killer,victim,allies,enemies,add){
  if(killer.id==="lara"){const nx=allies.find(c=>c.curHp>0&&c!==killer);if(nx){nx.maxHp+=2;nx.curHp+=2;add(`🔫 Сокровища! ${nx.name} +2HP`,"lp");}}
  if(killer.id==="megaman"){killer.curAtk=victim.curAtk;add(`🔵 Мегамен: ATK→${killer.curAtk}`,"lp");}
  if(killer.id==="pudge"){killer.curAtk+=1;killer.curHp+=2;killer.maxHp+=2;add(`🪝 Пудж: +1ATK +2HP`,"lp");}
  if(killer.id==="velvet"){killer.curHp=Math.min(killer.maxHp,killer.curHp+4);killer.curAtk+=1;add(`🔥 Вайлет: +4HP +1ATK`,"lp");}
  if(victim.id==="zagreus"&&!victim.revived){victim.revived=true;victim.curHp=3;add(`🏴‍☠️ Загрей: Возрождён!`,"lp");}
  if(victim.id==="skeleton"){killer.curAtk=Math.max(0,killer.curAtk-2);add(`☠️ Скелет: ${killer.name} -2ATK`,"lp");}
  if(victim.id==="rico"){const foes=victim.side==="a"?battleTeamD:battleTeamA;foes.filter(c=>c.curHp>0).forEach(e=>{e.curHp-=4;if(e.curHp<=0)add(`💀 ${e.name} погиб от взрыва!`,"lk");});add(`🌍 Рико: Взрыв!`,"lp");}
  if(victim.id==="gale"){killer.curHp-=7;add(`💫 Гейл: 7 урона ${killer.name}`,"lp");if(killer.curHp<=0)add(`💀 ${killer.name} погиб от Гейла!`,"lk");}
  // Макото: союзник умер — +3ATK
  const makoto=allies.find(c=>c.id==="makoto"&&c.curHp>0);
  if(makoto&&allies.includes(victim)){makoto.curAtk+=3;add(`🔍 Макото: Безумная удача! +3ATK`,"lp");}
}

function checkEnd(add,loop,btn){
  const aA=battleTeamA.filter(c=>c.curHp>0).length;const dA=battleTeamD.filter(c=>c.curHp>0).length;
  if(aA===0||dA===0){clearInterval(loop);btn.disabled=false;if(aA>0){add("<br>🏆 ПОБЕДА!","lw");onWin();}else if(dA>0){add("<br>💔 ПОРАЖЕНИЕ","lw");onLose();}else add("<br>🤝 НИЧЬЯ","lw");return true;}return false;
}
function onWin(){const r=30+Math.floor(Math.random()*20);gameState.coins+=r;gameState.wins++;saveState();document.getElementById("battle-log").innerHTML+=`<div class="lw">+${r} 🪙</div>`;}
function onLose(){const r=5+Math.floor(Math.random()*10);gameState.coins+=r;gameState.losses++;saveState();document.getElementById("battle-log").innerHTML+=`<div style="color:#888">+${r} 🪙</div>`;}

refreshMenu();
