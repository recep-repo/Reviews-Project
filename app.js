const reviews = [
    {
        id : 1,
        name : "Aragorn",
        job : "King",
        img : "Aragorn_profile.jpg",
        text : "Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th and last Chieftain of the Dúnedain of the North; later crowned King Elessar Telcontar, the 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor since the short reign of Isildur. He was a great Ranger and warrior, and as Isildur's heir he bore the shards of Narsil, reforged and renamed Andúril, Flame of the West, in the War of the Ring.",
    },
    {
        id : 2,
        name : "Gandalf",
        job : "Istari/Wizard",
        img : "Gandalf_the_Grey.jpg",
        text : "Gandalf (Norse; IPA: [gand:alf]) the Grey, later known as Gandalf the White, and originally named Olórin (Quenya; IPA: [oˈloːrin]), was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring. And he killed Balrog",
    },
    {
        id : 3,
        name : "Elrond",
        job : "Lord of Rivendell",
        img : "Elrond_of_Rivendell.jpg",
        text: "Elrond (Sindarin) Half-elven, Lord of Rivendell, was one of the mighty Elf-rulers of old who lived in Middle-earth from the First Age to the beginning of the Fourth Age. He was the father of Elladan and Elrohir and Arwen Undómiel, the eventual wife of Aragorn II Elessar.Elrond was a skillful warrior in battle and had commanded various armies of the Free Peoples well, including the Last Alliance.He was just as effective at leadership and gave much wise counsel.",
    },
    {
        id : 4,
        name : "Galadriel",
        job : "Lady of Lothlorien",
        img : "Galadriel.jpg",
        text : "One of the greatest of the Elves in Middle-earth, she surpassed nearly all others in beauty, knowledge, and power. She bore Nenya, one of the three Elven rings of power. J.R.R. Tolkien thought of her, along with Gil-galad the Elven-king, as one of the mightiest and fairest of all the Elves left in Middle-earth in the Third Age. Her elder brothers were Finrod Felagund, Orodreth, Angrod, and Aegnor.[2] Galadriel was a niece of Fëanor, the most important Elf of the early First Age.",
    },
    {
        id : 5,
        name : "Saruman",
        job : "Istari/Wizard",
        img : "Saruman.jpg",
        text : "Saruman (Quenya; IPA: ['saruman]), also known as Saruman the White was the first of the order of Istari (wizards), who came to Middle-earth as Emissaries of the Valar in the Third Age. He also was the leader of the Wizards and of the White Council that opposed Sauron. His extensive studies of dark magic, however, eventually led him to desire the One Ring and lust for power.He ultimately trusts only his own counsel and schemes for his own ends.",
    }

];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function (){
    showItem();
})

const showItem = function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

prevBtn.addEventListener('click', () =>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showItem();
});

nextBtn.addEventListener('click', () =>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showItem();
});

randomBtn.addEventListener('click', () =>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showItem();
})

