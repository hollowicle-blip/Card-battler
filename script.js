const ALL_CARDS=[
  {id:"mario",name:"Марио",series:"nintendo",emoji:"🍄",rarity:"rare",atk:12,hp:14,passive:"Гриб: при HP<50% разово +5 HP"},
  {id:"pikachu",name:"Пикачу",series:"nintendo",emoji:"⚡",rarity:"epic",atk:14,hp:11,passive:"Разряд: 20% шанс оглушить"},
  {id:"link",name:"Линк",series:"nintendo",emoji:"🗡️",rarity:"epic",atk:13,hp:13,passive:"Щит Хайрула: -3 урона с каждой атаки"},
  {id:"fox",name:"Фокс",series:"nintendo",emoji:"🦊",rarity:"rare",atk:13,hp:10,passive:"Отражение: возвращает 2 урона атакующему"},
  {id:"zelda",name:"Зельда",series:"nintendo",emoji:"👑",rarity:"legendary",atk:11,hp:15,passive:"Мудрость: раз в бой лечит союзника на 8 HP"},
  {id:"sonic",name:"Соник",series:"classic",emoji:"💨",rarity:"epic",atk:12,hp:11,passive:"Сверхскорость: всегда атакует первым"},
  {id:"steve",name:"Стив",series:"classic",emoji:"⛏️",rarity:"common",atk:10,hp:14,passive:"Крафт: +1 ATK каждый раунд"},
  {id:"megaman",name:"Мегамен",series:"classic",emoji:"🤖",rarity:"rare",atk:13,hp:11,passive:"Копирование: получает ATK убитого врага"},
  {id:"pacman",name:"Пакмен",series:"classic",emoji:"🟡",rarity:"common",atk:9,hp:13,passive:"Поглощение: при убийстве +4 HP"},
  {id:"frogger",name:"Фроггер",series:"classic",emoji:"🐸",rarity:"common",atk:8,hp:12,passive:"Прыжок: 15% шанс уклониться"},
  {id:"lara",name:"Лара Крофт",series:"shooter",emoji:"🏹",rarity:"epic",atk:14,hp:12,passive:"Двойные пистолеты: первый удар x2"},
  {id:"chief",name:"Мастер Чиф",series:"shooter",emoji:"🪖",rarity:"legendary",atk:15,hp:15,passive:"MJOLNIR: блокирует первую атаку по себе"},
  {id:"doom",name:"Думгай",series:"shooter",emoji:"👺",rarity:"legendary",atk:17,hp:13,passive:"Ярость: +2 ATK за каждого убитого"},
  {id:"agent47",name:"Агент 47",series:"shooter",emoji:"🕴️",rarity:"epic",atk:13,hp:11,passive:"Киллер: бьёт самого слабого (меньше HP)"},
  {id:"price",name:"Капитан Прайс",series:"shooter",emoji:"🚬",rarity:"rare",atk:12,hp:13,passive:"Командир: союзники +1 ATK в начале боя"},
  {id:"geralt",name:"Геральт",series:"rpg",emoji:"⚔️",rarity:"legendary",atk:16,hp:14,passive:"Знак Квен: блокирует первый урон"},
  {id:"ciri",name:"Цири",series:"rpg",emoji:"⚡",rarity:"legendary",atk:17,hp:13,passive:"Телепортация: при смертельном уроне выживает с 1 HP"},
  {id:"knight",name:"Рыцарь",series:"rpg",emoji:"🛡️",rarity:"common",atk:9,hp:16,passive:"Броня: -1 урона от всех атак"},
  {id:"kratos",name:"Кратос",series:"rpg",emoji:"🪓",rarity:"legendary",atk:18,hp:14,passive:"Ярость: при HP<50% получает +4 ATK"},
  {id:"dovahkiin",name:"Довакин",series:"rpg",emoji:"🐉",rarity:"epic",atk:14,hp:14,passive:"ФУС РО ДА: 25% шанс оглушить"},
  {id:"sekiro",name:"Секиро",series:"rpg",emoji:"🗡️",rarity:"epic",atk:15,hp:11,passive:"Воскрешение: оживает с 50% HP (1 раз)"},
  {id:"cj",name:"Си Джей",series:"openworld",emoji:"🚗",rarity:"rare",atk:12,hp:13,passive:"Банда: +2 ATK за каждого союзника openworld"},
  {id:"arthur",name:"Артур",series:"openworld",emoji:"🤠",rarity:"legendary",atk:15,hp:15,passive:"Dead Eye: первая атака по всем врагам"},
  {id:"aloy",name:"Элой",series:"openworld",emoji:"🏹",rarity:"epic",atk:14,hp:12,passive:"Охотник: бьёт самого толстого (больше HP)"},
  {id:"edward",name:"Эдвард",series:"openworld",emoji:"⚓",rarity:"rare",atk:13,hp:12,passive:"Абордаж: при убийстве +3 ATK"},
  {id:"rico",name:"Рико",series:"openworld",emoji:"💣",rarity:"rare",atk:14,hp:11,passive:"Хаос: 20% шанс x2 урон"},
  {id:"zagreus",name:"Загрей",series:"roguelike",emoji:"🔱",rarity:"epic",atk:14,hp:13,passive:"Дар богов: раз в бой +5 ATK на 1 раунд"},
  {id:"joker",name:"Джокер",series:"roguelike",emoji:"🃏",rarity:"legendary",atk:13,hp:13,passive:"Безумие: бьёт самого сильного (больше ATK)"},
  {id:"isaac",name:"Айзек",series:"roguelike",emoji:"👶",rarity:"common",atk:8,hp:11,passive:"Слёзы: 30% шанс не получить урон"},
  {id:"skeleton",name:"Скелет",series:"roguelike",emoji:"💀",rarity:"common",atk:10,hp:10,passive:"Нежить: воскресает с 3 HP (1 раз)"},
  {id:"lucky",name:"Лаки",series:"roguelike",emoji:"🍀",rarity:"rare",atk:11,hp:12,passive:"Удача: 15% шанс крита x3"},
  {id:"astarion",name:"Астарион",series:"baldursgate",emoji:"🧛",rarity:"epic",atk:14,hp:11,passive:"Укус: 25% шанс украсть 3 HP"},
  {id:"shadowheart",name:"Шэдоухарт",series:"baldursgate",emoji:"🌙",rarity:"epic",atk:11,hp:14,passive:"Исцеление: раз в бой лечит союзника на 10 HP"},
  {id:"laezel",name:"Лаэзель",series:"baldursgate",emoji:"🗡️",rarity:"rare",atk:14,hp:12,passive:"Гитьянки: первая атака x1.5"},
  {id:"wyll",name:"Уилл",series:"baldursgate",emoji:"👁️",rarity:"rare",atk:13,hp:12,passive:"Договор: раз в бой наносит 10 чистого урона"},
  {id:"gale",name:"Гейл",series:"baldursgate",emoji:"🔮",rarity:"epic",atk:15,hp:11,passive:"Магия: бьёт всех врагов на 3 в конце боя"},
  {id:"karlach",name:"Карлах",series:"baldursgate",emoji:"🔥",rarity:"legendary",atk:16,hp:14,passive:"Двигатель: +1 ATK за каждый полученный урон"},
  {id:"yshtola",name:"Йштола",series:"rpglegends",emoji:"✨",rarity:"legendary",atk:13,hp:14,passive:"Воскрешение: оживляет союзника с 50% HP"},
  {id:"pudge",name:"Пудж",series:"rpglegends",emoji:"🪝",rarity:"epic",atk:15,hp:14,passive:"Крюк: первый удар по случайной цели"},
  {id:"fane",name:"Фейн",series:"rpglegends",emoji:"💀",rarity:"epic",atk:14,hp:12,passive:"Нежить: лечится от урона на 2 HP"},
  {id:"reynauld",name:"Рейнальд",series:"rpglegends",emoji:"⚔️",rarity:"rare",atk:13,hp:13,passive:"Крестоносец: +3 ATK против нежити"},
  {id:"dismas",name:"Дисмас",series:"rpglegends",emoji:"🔫",rarity:"rare",atk:14,hp:11,passive:"Разбойник: 20% шанс крита x2"},
  {id:"rean",name:"Риан",series:"jrpg",emoji:"⚔️",rarity:"epic",atk:14,hp:13,passive:"Валимар: при HP<30% блокирует следующий удар"},
  {id:"lloyd",name:"Ллойд",series:"jrpg",emoji:"🗡️",rarity:"rare",atk:13,hp:12,passive:"Клинок: 20% шанс защитить союзника"},
  {id:"estelle",name:"Эстель",series:"jrpg",emoji:"🏓",rarity:"rare",atk:12,hp:13,passive:"Шест: лечит союзников на 2 HP в начале боя"},
  {id:"velvet",name:"Велвет",series:"jrpg",emoji:"🖤",rarity:"legendary",atk:16,hp:13,passive:"Терапевт: лечится на половину нанесённого урона"},
  {id:"rokuro",name:"Рокуро",series:"jrpg",emoji:"🎎",rarity:"rare",atk:14,hp:11,passive:"Клинок демона: первая атака x1.5"},
  {id:"magilou",name:"Магилу",series:"jrpg",emoji:"🎭",rarity:"epic",atk:13,hp:12,passive:"Ведьма: 25% шанс поменять ATK с врагом"},
  {id:"eizen",name:"Эйзен",series:"jrpg",emoji:"⚖️",rarity:"epic",atk:15,hp:13,passive:"Проклятие Рича: 50% крит x2 или промах"},
  {id:"kevin",name:"Кевин",series:"jrpg",emoji:"⛪",rarity:"epic",atk:13,hp:15,passive:"Святой щит: первый урон -50%"},
  {id:"van",name:"Ван",series:"jrpg",emoji:"🐙",rarity:"epic",atk:16,hp:12,passive:"Решатель: при HP<50% получает +5 ATK"},
  {id:"makoto",name:"Макото",series:"danganronpa",emoji:"🍀",rarity:"rare",atk:10,hp:14,passive:"Удача: 20% шанс воскресить союзника"},
  {id:"hajime",name:"Хаджиме",series:"danganronpa",emoji:"🧠",rarity:"epic",atk:14,hp:12,passive:"Таланты: случайный бафф +3 ATK или HP"},
  {id:"kaede",name:"Каэде",series:"danganronpa",emoji:"🎹",rarity:"rare",atk:12,hp:12,passive:"Пианистка: +2 ATK союзникам каждый 3-й раунд"},
  {id:"heihachi",name:"Хеихачи",series:"tekken",emoji:"👹",rarity:"legendary",atk:18,hp:14,passive:"Бросок с горы: при убийстве -5 HP следующему врагу"},
  {id:"kazuya",name:"Казуя",series:"tekken",emoji:"😈",rarity:"legendary",atk:17,hp:13,passive:"Дьявольский ген: каждый 3-й раунд двойной удар"},
  {id:"jin",name:"Джин",series:"tekken",emoji:"🔥",rarity:"epic",atk:15,hp:13,passive:"Подавление: первая атака по нему 0 урона"},
  {id:"junpei",name:"Джунпей",series:"zeroescape",emoji:"🔢",rarity:"rare",atk:10,hp:13,passive:"Морфогенетика: 25% шанс уклониться"},
  {id:"phi",name:"Фи",series:"zeroescape",emoji:"🎭",rarity:"epic",atk:12,hp:14,passive:"Манипуляция: атакующий -3 ATK"},
  {id:"sigma",name:"Сигма",series:"zeroescape",emoji:"🦾",rarity:"epic",atk:15,hp:12,passive:"Кибер-рука: каждый 2-й раунд двойной удар"},
  {id:"dallas",name:"Даллас",series:"payday",emoji:"🎭",rarity:"rare",atk:12,hp:13,passive:"Лидер: союзники +2 ATK в начале боя"},
  {id:"hoxton",name:"Хокстон",series:"payday",emoji:"🤡",rarity:"rare",atk:14,hp:11,passive:"Безумие: при HP<30% +6 ATK"},
  {id:"wolf",name:"Вулф",series:"payday",emoji:"🐺",rarity:"rare",atk:13,hp:12,passive:"Хаос: каждый раунд +3 ATK или +3 HP"},
  {id:"chains",name:"Чейнс",series:"payday",emoji:"⛓️",rarity:"rare",atk:11,hp:15,passive:"Броня: первые 5 ударов -2 урона"}
];
const PACKS=[
  {id:"daily",name:"🎁 Ежедневный",price:0,daily:true,count:3,
   cards:ALL_CARDS.map(c=>c.id),
   desc:"Бесплатно раз в день! 3 случайные карты"},
  {id:"standard",name:"📦 Стандартный",price:100,count:6,
   cards:ALL_CARDS.map(c=>c.id),
   desc:"6 случайных карт из всей коллекции"},
  {id:"nintendo",name:"🍄 Nintendo",price:120,count:6,
   cards:["mario","pikachu","link","fox","zelda"],
   desc:"Герои Nintendo"},
  {id:"classic",name:"🕹️ Классика",price:120,count:6,
   cards:["sonic","steve","megaman","pacman","frogger"],
   desc:"Классика видеоигр"},
  {id:"shooter",name:"🔫 Шутеры",price:130,count:6,
   cards:["lara","chief","doom","agent47","price"],
   desc:"Легенды шутеров"},
  {id:"rpg",name:"⚔️ RPG",price:140,count:6,
   cards:["geralt","ciri","knight","kratos","dovahkiin","sekiro"],
   desc:"Герои RPG"},
  {id:"openworld",name:"🌍 Open World",price:130,count:6,
   cards:["cj","arthur","aloy","edward","rico"],
   desc:"Герои открытого мира"},
  {id:"roguelike",name:"🎲 Rogue-like",price:120,count:6,
   cards:["zagreus","joker","isaac","skeleton","lucky"],
   desc:"Герои рогаликов"},
  {id:"baldursgate",name:"🐉 Baldur's Gate",price:150,count:6,
   cards:["astarion","shadowheart","laezel","wyll","gale","karlach"],
   desc:"Компаньоны BG3"},
  {id:"rpglegends",name:"⚜️ Легенды RPG",price:140,count:6,
   cards:["yshtola","pudge","fane","reynauld","dismas"],
   desc:"Легендарные герои RPG"},
  {id:"jrpg",name:"🌸 JRPG",price:140,count:6,
   cards:["rean","lloyd","estelle","velvet","rokuro","magilou","eizen","kevin","van"],
   desc:"Герои японских RPG"},
  {id:"danganronpa",name:"🎓 Danganronpa",price:130,count:6,
   cards:["makoto","hajime","kaede"],
   desc:"Супершкольники"},
  {id:"tekken",name:"🥊 Tekken",price:140,count:6,
   cards:["heihachi","kazuya","jin"],
   desc:"Мастера боевых искусств"},
  {id:"zeroescape",name:"🧩 Zero Escape",price:130,count:6,
   cards:["junpei","phi","sigma"],
   desc:"Гении побега"},
  {id:"payday",name:"💰 Payday",price:130,count:6,
   cards:["dallas","hoxton","wolf","chains"],
   desc:"Профессиональные грабители"}
];

const RARITY_WEIGHTS={common:60,rare:25,epic:12,legendary:3};
const RARITY_COLORS={common:"#9ca3af",rare:"#3b82f6",epic:"#a855f7",legendary:"#f59e0b"};

let state={coins:200,collection:[],defense:[],lastDaily:null,wins:0,losses:0};

function loadState(){
  const s=localStorage.getItem("autobattler_save2");
  if(s)state=JSON.parse(s);
}
function saveState(){localStorage.setItem("autobattler_save2",JSON.stringify(state));}

function getRotatingPack(){
  const themePacks=PACKS.filter(p=>!p.daily&&p.id!=="standard");
  const today=new Date().toISOString().slice(0,10);
  let seed=0;for(let i=0;i<today.length;i++)seed+=today.charCodeAt(i)*(i+1);
  return themePacks[seed%themePacks.length];
}

function rollRarity(){
  const r=Math.random()*100;let sum=0;
  for(const[k,v]of Object.entries(RARITY_WEIGHTS)){sum+=v;if(r<sum)return k;}
  return"common";
}

function openPack(pack){
  const result=[];
  const count=pack.count||6;
  for(let i=0;i<count;i++){
    const rarity=rollRarity();
    const pool=ALL_CARDS.filter(c=>pack.cards.includes(c.id)&&c.rarity===rarity);
    const finalPool=pool.length?pool:ALL_CARDS.filter(c=>pack.cards.includes(c.id));
    result.push(finalPool[Math.floor(Math.random()*finalPool.length)]);
  }
  return result;
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if(id==="screen-menu")renderMenu();
  else if(id==="screen-shop")renderShop();
  else if(id==="screen-collection")renderCollection();
  else if(id==="screen-defense")renderDefense();
  else if(id==="screen-battle-pick")renderBattlePick();
}

function renderMenu(){
  document.getElementById("menu-coins").textContent="🪙 "+state.coins;
  document.getElementById("menu-wins").textContent="🏆 "+state.wins;
  document.getElementById("menu-losses").textContent="💀 "+state.losses;
  document.getElementById("menu-cards").textContent="🎴 "+state.collection.length;
}

function renderShop(){
  const today=new Date().toISOString().slice(0,10);
  const canDaily=state.lastDaily!==today;
  const rotating=getRotatingPack();
  const shopPacks=[
    PACKS.find(p=>p.id==="daily"),
    PACKS.find(p=>p.id==="standard"),
    rotating
  ];
  const html=shopPacks.map(p=>{
    const disabled=p.daily&&!canDaily;
    const btnText=p.daily?(canDaily?"Открыть":"Завтра"):"Купить "+p.price+"🪙";
    return `<div class="pack-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      ${p.id===rotating.id&&!p.daily?'<div class="pack-badge">⭐ Пак дня</div>':''}
      <button onclick="buyPack('${p.id}')" ${disabled?'disabled':''}>${btnText}</button>
    </div>`;
  }).join("");
  document.getElementById("shop-list").innerHTML=html;
  document.getElementById("shop-coins").textContent="🪙 "+state.coins;
}

function buyPack(id){
  const pack=PACKS.find(p=>p.id===id);
  if(pack.daily){
    const today=new Date().toISOString().slice(0,10);
    if(state.lastDaily===today)return;
    state.lastDaily=today;
  }else{
    if(state.coins<pack.price)return;
    state.coins-=pack.price;
  }
  const cards=openPack(pack);
  cards.forEach(c=>state.collection.push(c.id));
  saveState();
  showPackReveal(cards);
  renderShop();
  renderMenu();
}

function showPackReveal(cards){
  const html=cards.map(c=>`
    <div class="reveal-card" style="border-color:${RARITY_COLORS[c.rarity]}">
      <div class="reveal-emoji">${c.emoji}</div>
      <div class="reveal-name">${c.name}</div>
      <div class="reveal-rarity" style="color:${RARITY_COLORS[c.rarity]}">${c.rarity.toUpperCase()}</div>
    </div>`).join("");
  document.getElementById("reveal-cards").innerHTML=html;
  document.getElementById("pack-reveal").classList.add("active");
}

function closeReveal(){
  document.getElementById("pack-reveal").classList.remove("active");
}

function renderCollection(){
  const unique=[...new Set(state.collection)];
  const cards=unique.map(id=>ALL_CARDS.find(c=>c.id===id)).filter(Boolean);
  cards.sort((a,b)=>{
    const order={legendary:0,epic:1,rare:2,common:3};
    return order[a.rarity]-order[b.rarity];
  });
  if(!cards.length){
    document.getElementById("collection-list").innerHTML='<p style="text-align:center;padding:40px;color:#888">Коллекция пуста. Купи паки в магазине!</p>';
    return;
  }
  const html=cards.map(c=>{
    const count=state.collection.filter(x=>x===c.id).length;
    return `<div class="game-card" style="border-color:${RARITY_COLORS[c.rarity]}">
      <div class="card-emoji">${c.emoji}</div>
      <div class="card-name">${c.name}</div>
      <div class="card-stats">⚔️${c.atk} ❤️${c.hp}</div>
      <div class="card-passive">${c.passive}</div>
      ${count>1?`<div class="card-count">x${count}</div>`:''}
    </div>`;
  }).join("");
  document.getElementById("collection-list").innerHTML=html;
   }
function renderDefense(){
  const unique=[...new Set(state.collection)];
  const cards=unique.map(id=>ALL_CARDS.find(c=>c.id===id)).filter(Boolean);
  const selected=state.defense||[];
  const html=cards.map(c=>{
    const isSel=selected.includes(c.id);
    return `<div class="game-card ${isSel?'selected':''}" style="border-color:${RARITY_COLORS[c.rarity]}" onclick="toggleDefense('${c.id}')">
      <div class="card-emoji">${c.emoji}</div>
      <div class="card-name">${c.name}</div>
      <div class="card-stats">⚔️${c.atk} ❤️${c.hp}</div>
      ${isSel?'<div class="card-count">✅</div>':''}
    </div>`;
  }).join("");
  document.getElementById("defense-list").innerHTML=html||'<p style="text-align:center;padding:40px;color:#888">Нет карт</p>';
  document.getElementById("defense-count").textContent=selected.length+"/3";
}

function toggleDefense(id){
  if(!state.defense)state.defense=[];
  const idx=state.defense.indexOf(id);
  if(idx>=0)state.defense.splice(idx,1);
  else if(state.defense.length<3)state.defense.push(id);
  saveState();renderDefense();
}

function renderBattlePick(){
  const unique=[...new Set(state.collection)];
  const cards=unique.map(id=>ALL_CARDS.find(c=>c.id===id)).filter(Boolean);
  const html=cards.map(c=>`
    <div class="game-card" style="border-color:${RARITY_COLORS[c.rarity]}" onclick="pickForBattle('${c.id}')">
      <div class="card-emoji">${c.emoji}</div>
      <div class="card-name">${c.name}</div>
      <div class="card-stats">⚔️${c.atk} ❤️${c.hp}</div>
    </div>`).join("");
  document.getElementById("battle-pick-list").innerHTML=html||'<p style="text-align:center;padding:40px;color:#888">Нет карт</p>';
  document.getElementById("battle-pick-count").textContent="0/3";
  window._battlePick=[];
}

function pickForBattle(id){
  if(!window._battlePick)window._battlePick=[];
  const idx=window._battlePick.indexOf(id);
  if(idx>=0)window._battlePick.splice(idx,1);
  else if(window._battlePick.length<3)window._battlePick.push(id);
  document.getElementById("battle-pick-count").textContent=window._battlePick.length+"/3";
  document.querySelectorAll("#battle-pick-list .game-card").forEach(el=>{
    const cid=el.getAttribute("onclick").match(/'(.+)'/)[1];
    el.classList.toggle("selected",window._battlePick.includes(cid));
  });
}

function startBattle(){
  if(!window._battlePick||window._battlePick.length!==3){alert("Выбери 3 карты!");return;}
  const atkCards=window._battlePick.map(id=>makeCard(ALL_CARDS.find(c=>c.id===id)));
  let defIds=state.defense&&state.defense.length===3?state.defense:
    ALL_CARDS.sort(()=>Math.random()-0.5).slice(0,3).map(c=>c.id);
  const defCards=defIds.map(id=>makeCard(ALL_CARDS.find(c=>c.id===id)));
  showScreen("screen-battle");
  document.getElementById("battle-log").innerHTML="";
  runBattle(atkCards,defCards);
}

function makeCard(c){
  const card={...c,maxHp:c.hp,firstAttack:true};
  if(c.id==="mario")card.mushroomUsed=false;
  if(c.id==="lara")card.laraUsed=false;
  if(c.id==="chief")card.chiefShield=true;
  if(c.id==="geralt")card.geraltShield=true;
  if(c.id==="ciri")card.ciriUsed=false;
  if(c.id==="kevin")card.kevinShield=false;
  if(c.id==="van")card.vanBoosted=false;
  if(c.id==="jin")card.jinDodge=false;
  if(c.id==="chains")card.chainsArmor=5;
  if(c.id==="hoxton")card.hoxBoosted=false;
  if(c.id==="sekiro")card.sekiroRevived=false;
  if(c.id==="skeleton")card.skeletonRevived=false;
  if(c.id==="rean")card.reanShield=false;
  if(c.id==="lloyd")card.lloydShield=false;
  if(c.id==="zelda")card.zeldaUsed=false;
  if(c.id==="shadowheart")card.shUsed=false;
  if(c.id==="wyll")card.wyllUsed=false;
  if(c.id==="gale")card.galeUsed=false;
  if(c.id==="yshtola")card.yshtolaUsed=false;
  if(c.id==="zagreus")card.zagreusUsed=false;
  if(c.id==="pudge")card.pudgeUsed=false;
  return card;
}

function addLog(msg){
  const log=document.getElementById("battle-log");
  log.innerHTML+=`<div>${msg}</div>`;
  log.scrollTop=log.scrollHeight;
}

function applyDamage(target,damage,attacker,allCards){
  if(target.id==="chief"&&target.chiefShield){
    target.chiefShield=false;addLog("🪖 Щит Чифа! 0 урона");return 0;}
  if(target.id==="geralt"&&target.geraltShield){
    target.geraltShield=false;addLog("⚔️ Квен! 0 урона");return 0;}
  if(target.id==="jin"&&!target.jinDodge){
    target.jinDodge=true;addLog("🔥 Подавление! 0 урона");return 0;}
  if(target.id==="rean"&&target.reanShield){
    target.reanShield=false;addLog("⚔️ Валимар блокирует!");return 0;}
  if(target.id==="ciri"&&!target.ciriUsed&&target.hp-damage<=0){
    target.ciriUsed=true;target.hp=1;
    addLog("⚡ Цири телепортируется! 1 HP!");return 0;}
  if(target.id==="sekiro"&&!target.sekiroRevived&&target.hp-damage<=0){
    target.sekiroRevived=true;
    addLog("🗡️ Секиро воскресает!");return Math.max(0,damage-Math.floor(target.maxHp*0.5));}
  if(target.id==="skeleton"&&!target.skeletonRevived&&target.hp-damage<=0){
    target.skeletonRevived=true;
    addLog("💀 Скелет воскресает!");return Math.max(0,damage-3);}
  if(target.id==="kevin"&&!target.kevinShield){
    target.kevinShield=true;damage=Math.floor(damage*0.5);
    addLog("⛪ Щит Кевина! Урон "+damage);}
  if(target.id==="link")damage=Math.max(1,damage-3);
  if(target.id==="knight")damage=Math.max(1,damage-1);
  if(target.id==="chains"&&target.chainsArmor>0){
    target.chainsArmor--;damage=Math.max(1,damage-2);
    addLog("⛓️ Броня! Урон "+damage);}
  if(target.id==="frogger"&&Math.random()<0.15){
    addLog("🐸 Фроггер уклоняется!");return 0;}
  if(target.id==="junpei"&&Math.random()<0.25){
    addLog("🔢 Джунпей уклоняется!");return 0;}
  if(target.id==="isaac"&&Math.random()<0.30){
    addLog("👶 Айзек не получил урон!");return 0;}
  if(target.id==="mario"&&!target.mushroomUsed&&target.hp-damage<target.maxHp*0.5){
    target.mushroomUsed=true;target.hp+=5;
    addLog("🍄 Гриб! +5 HP");}
  if(target.id==="fox"&&attacker){
    attacker.hp-=2;addLog("🦊 Отражение! "+attacker.name+" -2 HP");}
  if(target.id==="fane"){target.hp=Math.min(target.maxHp,target.hp+2);
    addLog("💀 Фейн лечится +2 HP");}
  if(target.id==="phi"&&attacker){
    attacker.atk=Math.max(1,attacker.atk-3);
    addLog("🎭 Фи! "+attacker.name+" -3 ATK");}
  if(target.id==="karlach"){target.atk+=1;
    addLog("🔥 Карлах +1 ATK (двигатель)");}
  return damage;
}

function onKill(killer,enemyTeam){
  if(killer.id==="doom"){killer.atk+=2;addLog("👺 Думгай +2 ATK!");}
  if(killer.id==="megaman"&&enemyTeam.length){
    const dead=enemyTeam.find(c=>c.hp<=0);
    if(dead){killer.atk+=dead.atk;addLog("🤖 Мегамен копирует +"+dead.atk+" ATK!");}}
  if(killer.id==="pacman"){killer.hp+=4;addLog("🟡 Пакмен +4 HP!");}
  if(killer.id==="edward"){killer.atk+=3;addLog("⚓ Эдвард +3 ATK!");}
  if(killer.id==="heihachi"){
    const next=enemyTeam.find(c=>c.hp>0);
    if(next){next.hp-=5;addLog("👹 Бросок! "+next.name+" -5 HP");
    if(next.hp<=0)addLog("💀 "+next.name+" повержен!");}}
                                 }
function runBattle(atkCards,defCards){
  const sortSonic=(arr)=>{
    const i=arr.findIndex(c=>c.id==="sonic");
    if(i>0){const[s]=arr.splice(i,1);arr.unshift(s);}
  };
  sortSonic(atkCards);sortSonic(defCards);
  addLog("⚔️ БОЙ НАЧИНАЕТСЯ!");
  addLog("🔵 Атака: "+atkCards.map(c=>c.name).join(", "));
  addLog("🔴 Защита: "+defCards.map(c=>c.name).join(", "));

  // === НАЧАЛО БОЯ ===
  [atkCards,defCards].forEach(team=>{
    team.forEach(c=>{
      if(c.id==="price")team.forEach(a=>{if(a.id!=="price"&&a.hp>0){a.atk+=1;addLog("🚬 Прайс: "+a.name+" +1 ATK");}});
      if(c.id==="dallas")team.forEach(a=>{if(a.id!=="dallas"&&a.hp>0){a.atk+=2;addLog("🎭 Даллас: "+a.name+" +2 ATK");}});
      if(c.id==="estelle")team.forEach(a=>{if(a.hp>0){a.hp+=2;addLog("🏓 Эстель: "+a.name+" +2 HP");}});
      if(c.id==="hajime"){if(Math.random()<0.5){c.atk+=3;addLog("🧠 Хаджиме +3 ATK!");}else{c.hp+=3;addLog("🧠 Хаджиме +3 HP!");}}
      if(c.id==="cj"){const ow=team.filter(a=>a.series==="openworld"&&a.id!=="cj"&&a.hp>0).length;c.atk+=ow*2;if(ow)addLog("🚗 Си Джей +"+ow*2+" ATK (банда)");}
      if(c.id==="arthur"){c.atk+=5;addLog("🤠 Dead Eye! +5 ATK");}
      if(c.id==="lloyd"){const ally=team.find(a=>a.id!=="lloyd"&&a.hp>0);if(ally){ally.hp+=5;addLog("🗡️ Ллойд защищает "+ally.name+" +5 HP");}}
    });
  });

  let round=0;
  const battleInterval=setInterval(()=>{
    round++;
    if(round>30||atkCards.every(c=>c.hp<=0)||defCards.every(c=>c.hp<=0)){
      clearInterval(battleInterval);endBattle(atkCards,defCards);return;
    }
    addLog("--- Раунд "+round+" ---");

    // === РАУНДОВЫЕ БАФФЫ ===
    [...atkCards,...defCards].forEach(c=>{
      if(c.hp<=0)return;
      if(c.id==="steve"){c.atk+=1;addLog("⛏️ Стив +1 ATK");}
      if(c.id==="wolf"){if(Math.random()<0.5){c.atk+=3;addLog("🐺 Вулф +3 ATK!");}else{c.hp+=3;addLog("🐺 Вулф +3 HP!");}}
      if(c.id==="van"&&c.hp<c.maxHp*0.5&&!c.vanBoosted){c.vanBoosted=true;c.atk+=5;addLog("🐙 Ван +5 ATK!");}
      if(c.id==="hoxton"&&c.hp<c.maxHp*0.3&&!c.hoxBoosted){c.hoxBoosted=true;c.atk+=6;addLog("🤡 Хокстон БЕЗУМИЕ +6 ATK!");}
      if(c.id==="kratos"&&c.hp<c.maxHp*0.5&&!c.kratosBoosted){c.kratosBoosted=true;c.atk+=4;addLog("🪓 Кратос ЯРОСТЬ +4 ATK!");}
      if(c.id==="rean"&&c.hp<c.maxHp*0.3&&!c.reanTriggered){c.reanTriggered=true;c.reanShield=true;addLog("⚔️ Валимар активирует щит!");}
      if(c.id==="kaede"&&round%3===0){const team=atkCards.includes(c)?atkCards:defCards;team.forEach(a=>{if(a.id!=="kaede"&&a.hp>0){a.atk+=2;addLog("🎹 Каэде: "+a.name+" +2 ATK");}});}
    });

    // === ОЧЕРЕДЬ ХОДОВ ===
    const queue=[atkCards[0],defCards[0],atkCards[1],defCards[1],atkCards[2],defCards[2]].filter(Boolean);
    for(const card of queue){
      if(card.hp<=0)continue;
      const isAtk=atkCards.includes(card);
      const enemyTeam=isAtk?defCards:atkCards;
      const allyTeam=isAtk?atkCards:defCards;
      const alive=enemyTeam.filter(c=>c.hp>0);
      if(!alive.length)break;

      let target;
      if(card.id==="agent47")target=alive.reduce((a,b)=>a.hp<b.hp?a:b);
      else if(card.id==="aloy")target=alive.reduce((a,b)=>a.hp>b.hp?a:b);
      else if(card.id==="joker")target=alive.reduce((a,b)=>a.atk>b.atk?a:b);
      else if(card.id==="pudge"&&!card.pudgeUsed){card.pudgeUsed=true;target=alive[Math.floor(Math.random()*alive.length)];addLog("🪝 Крюк Пуджа!");}
      else target=alive[0];

      let dmg=card.atk;
      if(card.firstAttack){
        if(card.id==="lara"){dmg*=2;addLog("🏹 Двойные пистолеты x2!");}
        if(card.id==="laezel"){dmg=Math.floor(dmg*1.5);addLog("🗡️ Гитьянки x1.5!");}
        if(card.id==="rokuro"){dmg=Math.floor(dmg*1.5);addLog("🎎 Клинок демона x1.5!");}
      }
      if(card.id==="lucky"&&Math.random()<0.15){dmg*=3;addLog("🍀 КРИТ x3!");}
      if(card.id==="dismas"&&Math.random()<0.20){dmg*=2;addLog("🔫 Крит x2!");}
      if(card.id==="rico"&&Math.random()<0.20){dmg*=2;addLog("💣 Хаос x2!");}
      if(card.id==="eizen"){if(Math.random()<0.5){dmg*=2;addLog("⚖️ Крит Эйзена x2!");}else{dmg=0;addLog("⚖️ Эйзен промахнулся!");}}
      if(card.id==="reynauld"&&(target.id==="skeleton"||target.id==="fane")){dmg+=3;addLog("⚔️ Рейнальд vs нежить +3!");}
      if(card.id==="zagreus"&&!card.zagreusUsed&&round>=3){card.zagreusUsed=true;dmg+=5;addLog("🔱 Дар богов +5!");}
      if(card.id==="wyll"&&!card.wyllUsed){card.wyllUsed=true;target.hp-=10;addLog("👁️ Договор! "+target.name+" -10 HP");if(target.hp<=0)addLog("💀 "+target.name+" повержен!");}

      const isKazDouble=card.id==="kazuya"&&round%3===0;
      const isSigDouble=card.id==="sigma"&&round%2===0;

      const actual=applyDamage(target,dmg,card);
      target.hp-=actual;
      addLog((isAtk?"🔵":"🔴")+" "+card.name+" → "+target.name+" -"+actual+" HP ("+Math.max(0,target.hp)+")");

      if(actual>0){
        if(card.id==="astarion"&&Math.random()<0.25){card.hp=Math.min(card.maxHp,card.hp+3);addLog("🧛 Укус +3 HP");}
        if(card.id==="velvet"){const h=Math.floor(actual/2);card.hp+=h;addLog("🖤 Велвет +"+h+" HP");}
        if(card.id==="pikachu"&&Math.random()<0.20){target.hp-=5;addLog("⚡ Разряд! -5 HP");}
        if(card.id==="dovahkiin"&&Math.random()<0.25){target.hp-=5;addLog("🐉 ФУС РО ДА! -5 HP");}
        if(card.id==="magilou"&&Math.random()<0.25){const t=card.atk;card.atk=target.atk;target.atk=t;addLog("🎭 Магилу меняет ATK!");}
      }
      if(isKazDouble&&target.hp>0){const e=applyDamage(target,dmg,card);target.hp-=e;addLog("😈 Дьявольский ген -"+e+"!");}
      if(isSigDouble&&target.hp>0){const e=applyDamage(target,Math.floor(card.atk*0.5),card);target.hp-=e;addLog("🦾 Кибер-рука -"+e+"!");}

      if(target.hp<=0){
        addLog("💀 "+target.name+" повержен!");
        onKill(card,enemyTeam);
        allyTeam.forEach(a=>{
          if(a.id==="makoto"&&a.hp>0){const d=allyTeam.find(x=>x.hp<=0&&x.id!=="makoto"&&!x.makotoRevived);if(d&&Math.random()<0.20){d.hp=Math.floor(d.maxHp*0.5);d.makotoRevived=true;addLog("🍀 Макото воскрешает "+d.name+"!");}}
          if(a.id==="yshtola"&&a.hp>0&&!a.yshtolaUsed){const d=allyTeam.find(x=>x.hp<=0&&x.id!=="yshtola");if(d){a.yshtolaUsed=true;d.hp=Math.floor(d.maxHp*0.5);addLog("✨ Йштола воскрешает "+d.name+"!");}}
        });
      }
      card.firstAttack=false;
      if(enemyTeam.every(c=>c.hp<=0))break;
    }

    // === КОНЕЦ РАУНДА ===
    [...atkCards,...defCards].forEach(c=>{
      if(c.hp<=0)return;
      const enemies=atkCards.includes(c)?defCards:atkCards;
      const team=atkCards.includes(c)?atkCards:defCards;
      if(c.id==="gale"&&!c.galeUsed&&round>=5){c.galeUsed=true;enemies.forEach(e=>{if(e.hp>0){e.hp-=3;addLog("🔮 Гейл: "+e.name+" -3 HP");}});}
      if(c.id==="shadowheart"&&!c.shUsed){const h=team.filter(a=>a.hp>0&&a.hp<a.maxHp).sort((a,b)=>a.hp-b.hp)[0];if(h){c.shUsed=true;h.hp=Math.min(h.maxHp,h.hp+10);addLog("🌙 Шэдоухарт лечит "+h.name+" +10 HP");}}
      if(c.id==="zelda"&&!c.zeldaUsed){const h=team.filter(a=>a.hp>0&&a.hp<a.maxHp).sort((a,b)=>a.hp-b.hp)[0];if(h){c.zeldaUsed=true;h.hp=Math.min(h.maxHp,h.hp+8);addLog("👑 Зельда лечит "+h.name+" +8 HP");}}
    });
    updateBattleHP(atkCards,defCards);
  },1200);
}

function updateBattleHP(atk,def){
  const r=(cards)=>cards.map(c=>`<div class="battle-unit ${c.hp<=0?'dead':''}">${c.emoji} ${c.name}<br>❤️${Math.max(0,c.hp)} ⚔️${c.atk}</div>`).join("");
  const ae=document.getElementById("battle-atk");
  const de=document.getElementById("battle-def");
  if(ae)ae.innerHTML=r(atk);
  if(de)de.innerHTML=r(def);
}

function endBattle(atk,def){
  const aA=atk.filter(c=>c.hp>0).length;
  const dA=def.filter(c=>c.hp>0).length;
  let win;
  if(aA>0&&dA===0)win=true;
  else if(dA>0&&aA===0)win=false;
  else win=atk.reduce((s,c)=>s+Math.max(0,c.hp),0)>=def.reduce((s,c)=>s+Math.max(0,c.hp),0);
  if(win){const r=30+Math.floor(Math.random()*21);state.coins+=r;state.wins++;addLog("🏆 ПОБЕДА! +"+r+" 🪙");}
  else{const r=5+Math.floor(Math.random()*11);state.coins+=r;state.losses++;addLog("💀 ПОРАЖЕНИЕ. +"+r+" 🪙");}
  saveState();renderMenu();
  addLog('<button onclick="showScreen(\'screen-menu\');renderMenu()">В меню</button>');
}

loadState();
renderMenu();
