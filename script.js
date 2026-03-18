localStorage.removeItem("items");

const defaultItems = [
{name:"Ape Pirate",price:79,img:"ape_pirate.png"},
{name:"Archer's Tribe",price:79,img:"archers_tribe.png"},
{name:"Arrows",price:49,img:"arrows.png"},
{name:"Fortify",price:49,img:"fortify.png"},
{name:"Warrior",price:69,img:"warrior.png"},
{name:"Fan Dancer",price:69,img:"fan_dancer.png"},
{name:"Giant Growth",price:99,img:"giant_growth.png"},
{name:"Golem",price:79,img:"golem.png"},
{name:"Skeletons Swarm",price:59,img:"skeletons_swarm.png"},
{name:"Skeletons",price:39,img:"skeletons.png"},
{name:"Nature Heal",price:39,img:"nature_heal.png"},
{name:"Poison",price:39,img:"poison.png"},
{name:"Bomb",price:39,img:"bomb.png"},
{name:"Skeletons Legion",price:79,img:"skeletons_legion.png"},
{name:"Triplets",price:89,img:"triplets.png"},
{name:"Executioner",price:149,img:"executioner.png"},
{name:"Blizzard",price:89,img:"blizzard.png"},
{name:"Cannon Shot",price:99,img:"cannon_shot.png"},
{name:"Catapult",price:139,img:"catapult.png"},
{name:"Dryad",price:149,img:"dryad.png"},
{name:"Meteor",price:99,img:"meteor.png"},
{name:"Inferno",price:99,img:"inferno.png"},
{name:"Gust of Wind",price:89,img:"gust_of_wind.png"},
{name:"Ice Golem",price:149,img:"ice_golem.png"},
{name:"Rage",price:89,img:"rage.png"},
{name:"Magician",price:99,img:"magician.png"},
{name:"Mud Elemental",price:169,img:"mud_elemental.png"},
{name:"Orc Warrior",price:99,img:"orc_warrior.png"},
{name:"Orcs Horde",price:199,img:"orcs_horde.png"},
{name:"Stone Statue",price:99,img:"stone_statue.png"},
{name:"Spiked Statue",price:169,img:"spiked_statue.png"},
{name:"Siege Ballista",price:99,img:"siege_ballista.png"},
{name:"Lightning",price:149,img:"lightning.png"},
{name:"Hollow Knight",price:349,img:"hollow_knight.png"},
{name:"Shaman",price:349,img:"shaman.png"},
{name:"Archer Queen",price:349,img:"archer_queen.png"},
{name:"Angel",price:199,img:"angel.png"},
{name:"Demon",price:169,img:"demon.png"},
{name:"Fire Elemental",price:269,img:"fire_elemental.png"},
{name:"Genie Lamp",price:149,img:"genie_lamp.png"},
{name:"Mage",price:2599,img:"mage.png"},
{name:"Mana Ritual",price:199,img:"mana_ritual.png"},
{name:"Black Knight",price:199,img:"black_knight.png"},
{name:"Metamorph",price:199,img:"metamorph.png"},
{name:"Skull King",price:199,img:"skull_king.png"},
{name:"Spectre",price:349,img:"spectre.png"},
{name:"Reaper",price:149,img:"reaper.png"},
{name:"Resurrection",price:149,img:"resurrection.png"},
{name:"Shock",price:149,img:"shock.png"},
{name:"Standard Bearer",price:159,img:"standard_bearer.png"},
{name:"Unchained Demon",price:4000,img:"unchained_demon.png"},
{name:"Wraith",price:179,img:"wraith.png"},
{name:"Dragon",price:4000,img:"dragon.png"},
{name:"Storm Elemental",price:2549,img:"storm_elemental.png"},
{name:"Skull Queen",price:2599,img:"skull_queen.png"},
{name:"Phoenix",price:2799,img:"phoenix.png"},
{name:"Black Witch",price:2549,img:"black_witch.png"},
{name:"Necromancer",price:2549,img:"necromancer.png"}
];

localStorage.setItem("items",JSON.stringify(defaultItems));

let items = JSON.parse(localStorage.getItem("items"));
let wa = localStorage.getItem("wa") || "27832500800";
let selectedItem="";

function renderUser(){
const box=document.getElementById("items");
if(!box) return;
box.innerHTML="";
items.forEach((i)=>{
box.innerHTML+=`
<div class="card">
<img src="images/${i.img}">
<h4>${i.name}</h4>
<p>₹${i.price}</p>
<button onclick="buy('${i.name}')">Buy</button>
</div>`;
});
}

function buy(n){
selectedItem=n;
document.getElementById("qrModal").style.display="block";
}

function closeQR(){
document.getElementById("qrModal").style.display="none";
}

function sendProof(){
window.open(`https://wa.me/${wa}?text=Payment%20done%20for%20${selectedItem}`);
}

function downloadQR(){
const a=document.createElement("a");
a.href="images/qr.png";
a.download="qr.png";
a.click();
}

function renderAdmin(){
const box=document.getElementById("adminItems");
if(!box) return;
document.getElementById("waInput").value=wa;
box.innerHTML="";
items.forEach((i,idx)=>{
box.innerHTML+=`
<div class="admin-item">
<input value="${i.name}" onchange="items[${idx}].name=this.value">
<input type="number" value="${i.price}" onchange="items[${idx}].price=this.value">
<button onclick="saveItems()">Save</button>
</div>`;
});
}

function saveItems(){
localStorage.setItem("items",JSON.stringify(items));
alert("Saved");
renderUser();
}

function saveWA(){
wa=document.getElementById("waInput").value;
localStorage.setItem("wa",wa);
alert("WhatsApp Saved");
}

renderUser();
renderAdmin();
