(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const o=[{author:"Chinua Achebe",country:"Nigeria",imageLink:"/assets/image/things-fall-apart.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Things_Fall_Apart
`,pages:209,title:"Things Fall Apart",year:1958},{author:"Hans Christian Andersen",country:"Denmark",imageLink:"/assets/image/fairy-tales.jpg",language:"Danish",link:`https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.
`,pages:784,title:"Fairy tales",year:1836},{author:"Dante Alighieri",country:"Italy",imageLink:"/assets/image/the-divine-comedy.jpg",language:"Italian",link:`https://en.wikipedia.org/wiki/Divine_Comedy
`,pages:928,title:"The Divine Comedy",year:1315},{author:"Unknown",country:"Sumer and Akkadian Empire",imageLink:"/assets/image/the-epic-of-gilgamesh.jpg",language:"Akkadian",link:`https://en.wikipedia.org/wiki/Epic_of_Gilgamesh
`,pages:160,title:"The Epic Of Gilgamesh",year:-1700},{author:"Unknown",country:"Achaemenid Empire",imageLink:"/assets/image/the-book-of-job.jpg",language:"Hebrew",link:`https://en.wikipedia.org/wiki/Book_of_Job
`,pages:176,title:"The Book Of Job",year:-600},{author:"Unknown",country:"India/Iran/Iraq/Egypt/Tajikistan",imageLink:"/assets/image/one-thousand-and-one-nights.jpg",language:"Arabic",link:`https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights
`,pages:288,title:"One Thousand and One Nights",year:1200},{author:"Unknown",country:"Iceland",imageLink:"/assets/image/njals-saga.jpg",language:"Old Norse",link:`https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga
`,pages:384,title:"Njál's Saga",year:1350},{author:"Jane Austen",country:"United Kingdom",imageLink:"/assets/image/pride-and-prejudice.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Pride_and_Prejudice
`,pages:226,title:"Pride and Prejudice",year:1813},{author:"Honoré de Balzac",country:"France",imageLink:"/assets/image/le-pere-goriot.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot
`,pages:443,title:"Le Père Goriot",year:1835},{author:"Samuel Beckett",country:"Republic of Ireland",imageLink:"/assets/image/molloy-malone-dies-the-unnamable.jpg",language:"French, English",link:`https://en.wikipedia.org/wiki/Molloy_(novel)
`,pages:256,title:"Molloy, Malone Dies, The Unnamable, the trilogy",year:1952},{author:"Jorge Luis Borges",country:"Argentina",imageLink:"/assets/image/ficciones.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/Ficciones
`,pages:224,title:"Ficciones",year:1965},{author:"Emily Brontë",country:"United Kingdom",imageLink:"/assets/image/wuthering-heights.jpg",language:"English",link:`https://en.wikipedia.org/iki/Wuthering_Heights
`,pages:342,title:"Wuthering Heights",year:1847},{author:"Albert Camus",country:"Algeria, French Empire",imageLink:"/assets/image/l-etranger.jpg",language:"French",link:`https://en.wikipedia.org/wiki/The_Stranger_(novel)
`,pages:185,title:"The Stranger",year:1942},{author:"Paul Celan",country:"Romania, France",imageLink:"/assets/image/poems-paul-celan.jpg",language:"German",link:`
`,pages:320,title:"Poems",year:1952},{author:"Louis-Ferdinand Céline",country:"France",imageLink:"/assets/image/voyage-au-bout-de-la-nuit.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night
`,pages:505,title:"Journey to the End of the Night",year:1932},{author:"Miguel de Cervantes",country:"Spain",imageLink:"/assets/image/don-quijote-de-la-mancha.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/Don_Quixote
`,pages:1056,title:"Don Quijote De La Mancha",year:1610},{author:"Geoffrey Chaucer",country:"England",imageLink:"/assets/image/the-canterbury-tales.jpg",language:"English",link:`https://en.wikipedia.org/wiki/The_Canterbury_Tales
`,pages:544,title:"The Canterbury Tales",year:1450},{author:"Anton Chekhov",country:"Russia",imageLink:"/assets/image/stories-of-anton-chekhov.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov
`,pages:194,title:"Stories",year:1886},{author:"Joseph Conrad",country:"United Kingdom",imageLink:"/assets/image/nostromo.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Nostromo
`,pages:320,title:"Nostromo",year:1904},{author:"Charles Dickens",country:"United Kingdom",imageLink:"/assets/image/great-expectations.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Great_Expectations
`,pages:194,title:"Great Expectations",year:1861},{author:"Denis Diderot",country:"France",imageLink:"/assets/image/jacques-the-fatalist.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Jacques_the_Fatalist
`,pages:596,title:"Jacques the Fatalist",year:1796},{author:"Alfred Döblin",country:"Germany",imageLink:"/assets/image/berlin-alexanderplatz.jpg",language:"German",link:`https://en.wikipedia.org/wiki/Berlin_Alexanderplatz
`,pages:600,title:"Berlin Alexanderplatz",year:1929},{author:"Fyodor Dostoevsky",country:"Russia",imageLink:"/assets/image/crime-and-punishment.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/Crime_and_Punishment
`,pages:551,title:"Crime and Punishment",year:1866},{author:"Fyodor Dostoevsky",country:"Russia",imageLink:"/assets/image/the-idiot.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/The_Idiot
`,pages:656,title:"The Idiot",year:1869},{author:"Fyodor Dostoevsky",country:"Russia",imageLink:"/assets/image/the-possessed.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)
`,pages:768,title:"The Possessed",year:1872},{author:"Fyodor Dostoevsky",country:"Russia",imageLink:"/assets/image/the-brothers-karamazov.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/The_Brothers_Karamazov
`,pages:824,title:"The Brothers Karamazov",year:1880},{author:"George Eliot",country:"United Kingdom",imageLink:"/assets/image/middlemarch.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Middlemarch
`,pages:800,title:"Middlemarch",year:1871},{author:"Ralph Ellison",country:"United States",imageLink:"/assets/image/invisible-man.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Invisible_Man
`,pages:581,title:"Invisible Man",year:1952},{author:"Euripides",country:"Greece",imageLink:"/assets/image/medea.jpg",language:"Greek",link:`https://en.wikipedia.org/wiki/Medea_(play)
`,pages:104,title:"Medea",year:-431},{author:"William Faulkner",country:"United States",imageLink:"/assets/image/absalom-absalom.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Absalom,_Absalom!
`,pages:313,title:"Absalom, Absalom!",year:1936},{author:"William Faulkner",country:"United States",imageLink:"/assets/image/the-sound-and-the-fury.jpg",language:"English",link:`https://en.wikipedia.org/wiki/The_Sound_and_the_Fury
`,pages:326,title:"The Sound and the Fury",year:1929},{author:"Gustave Flaubert",country:"France",imageLink:"/assets/image/madame-bovary.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Madame_Bovary
`,pages:528,title:"Madame Bovary",year:1857},{author:"Gustave Flaubert",country:"France",imageLink:"/assets/image/l-education-sentimentale.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Sentimental_Education
`,pages:606,title:"Sentimental Education",year:1869},{author:"Federico García Lorca",country:"Spain",imageLink:"/assets/image/gypsy-ballads.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/Gypsy_Ballads
`,pages:218,title:"Gypsy Ballads",year:1928},{author:"Gabriel García Márquez",country:"Colombia",imageLink:"/assets/image/one-hundred-years-of-solitude.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude
`,pages:417,title:"One Hundred Years of Solitude",year:1967},{author:"Gabriel García Márquez",country:"Colombia",imageLink:"/assets/image/love-in-the-time-of-cholera.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera
`,pages:368,title:"Love in the Time of Cholera",year:1985},{author:"Johann Wolfgang von Goethe",country:"Saxe-Weimar",imageLink:"/assets/image/faust.jpg",language:"German",link:`https://en.wikipedia.org/wiki/Goethe%27s_Faust
`,pages:158,title:"Faust",year:1832},{author:"Nikolai Gogol",country:"Russia",imageLink:"/assets/image/dead-souls.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/Dead_Souls
`,pages:432,title:"Dead Souls",year:1842},{author:"Günter Grass",country:"Germany",imageLink:"/assets/image/the-tin-drum.jpg",language:"German",link:`https://en.wikipedia.org/wiki/The_Tin_Drum
`,pages:600,title:"The Tin Drum",year:1959},{author:"João Guimarães Rosa",country:"Brazil",imageLink:"/assets/image/the-devil-to-pay-in-the-backlands.jpg",language:"Portuguese",link:`https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands
`,pages:494,title:"The Devil to Pay in the Backlands",year:1956},{author:"Knut Hamsun",country:"Norway",imageLink:"/assets/image/hunger.jpg",language:"Norwegian",link:`https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)
`,pages:176,title:"Hunger",year:1890},{author:"Ernest Hemingway",country:"United States",imageLink:"/assets/image/the-old-man-and-the-sea.jpg",language:"English",link:`https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea
`,pages:128,title:"The Old Man and the Sea",year:1952},{author:"Homer",country:"Greece",imageLink:"/assets/image/the-iliad-of-homer.jpg",language:"Greek",link:`https://en.wikipedia.org/wiki/Iliad
`,pages:608,title:"Iliad",year:-735},{author:"Homer",country:"Greece",imageLink:"/assets/image/the-odyssey-of-homer.jpg",language:"Greek",link:`https://en.wikipedia.org/wiki/Odyssey
`,pages:374,title:"Odyssey",year:-800},{author:"Henrik Ibsen",country:"Norway",imageLink:"/assets/image/a-Dolls-house.jpg",language:"Norwegian",link:`https://en.wikipedia.org/wiki/A_Doll%27s_House
`,pages:68,title:"A Doll's House",year:1879},{author:"James Joyce",country:"Irish Free State",imageLink:"/assets/image/ulysses.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Ulysses_(novel)
`,pages:228,title:"Ulysses",year:1922},{author:"Franz Kafka",country:"Czechoslovakia",imageLink:"/assets/image/stories-of-franz-kafka.jpg",language:"German",link:`https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories
`,pages:488,title:"Stories",year:1924},{author:"Franz Kafka",country:"Czechoslovakia",imageLink:"/assets/image/the-trial.jpg",language:"German",link:`https://en.wikipedia.org/wiki/The_Trial
`,pages:160,title:"The Trial",year:1925},{author:"Franz Kafka",country:"Czechoslovakia",imageLink:"/assets/image/the-castle.jpg",language:"German",link:`https://en.wikipedia.org/wiki/The_Castle_(novel)
`,pages:352,title:"The Castle",year:1926},{author:"Kālidāsa",country:"India",imageLink:"/assets/image/the-recognition-of-shakuntala.jpg",language:"Sanskrit",link:`https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam
`,pages:147,title:"The recognition of Shakuntala",year:150},{author:"Yasunari Kawabata",country:"Japan",imageLink:"/assets/image/the-sound-of-the-mountain.jpg",language:"Japanese",link:`https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain
`,pages:288,title:"The Sound of the Mountain",year:1954},{author:"Nikos Kazantzakis",country:"Greece",imageLink:"/assets/image/zorba-the-greek.jpg",language:"Greek",link:`https://en.wikipedia.org/wiki/Zorba_the_Greek
`,pages:368,title:"Zorba the Greek",year:1946},{author:"D. H. Lawrence",country:"United Kingdom",imageLink:"/assets/image/sons-and-lovers.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Sons_and_Lovers
`,pages:432,title:"Sons and Lovers",year:1913},{author:"Halldór Laxness",country:"Iceland",imageLink:"/assets/image/independent-people.jpg",language:"Icelandic",link:`https://en.wikipedia.org/wiki/Independent_People
`,pages:470,title:"Independent People",year:1934},{author:"Giacomo Leopardi",country:"Italy",imageLink:"/assets/image/poems-giacomo-leopardi.jpg",language:"Italian",link:`
`,pages:184,title:"Poems",year:1818},{author:"Doris Lessing",country:"United Kingdom",imageLink:"/assets/image/the-golden-notebook.jpg",language:"English",link:`https://en.wikipedia.org/wiki/The_Golden_Notebook
`,pages:688,title:"The Golden Notebook",year:1962},{author:"Astrid Lindgren",country:"Sweden",imageLink:"/assets/image/pippi-longstocking.jpg",language:"Swedish",link:`https://en.wikipedia.org/wiki/Pippi_Longstocking
`,pages:160,title:"Pippi Longstocking",year:1945},{author:"Lu Xun",country:"China",imageLink:"/assets/image/diary-of-a-madman.jpg",language:"Chinese",link:`https://en.wikipedia.org/wiki/A_Madman%27s_Diary
`,pages:389,title:"Diary of a Madman",year:1918},{author:"Naguib Mahfouz",country:"Egypt",imageLink:"/assets/image/children-of-gebelawi.jpg",language:"Arabic",link:`https://en.wikipedia.org/wiki/Children_of_Gebelawi
`,pages:355,title:"Children of Gebelawi",year:1959},{author:"Thomas Mann",country:"Germany",imageLink:"/assets/image/buddenbrooks.jpg",language:"German",link:`https://en.wikipedia.org/wiki/Buddenbrooks
`,pages:736,title:"Buddenbrooks",year:1901},{author:"Thomas Mann",country:"Germany",imageLink:"/assets/image/the-magic-mountain.jpg",language:"German",link:`https://en.wikipedia.org/wiki/The_Magic_Mountain
`,pages:720,title:"The Magic Mountain",year:1924},{author:"Herman Melville",country:"United States",imageLink:"/assets/image/moby-dick.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Moby-Dick
`,pages:378,title:"Moby Dick",year:1851},{author:"Michel de Montaigne",country:"France",imageLink:"/assets/image/essais.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Essays_(Montaigne)
`,pages:404,title:"Essays",year:1595},{author:"Elsa Morante",country:"Italy",imageLink:"/assets/image/history.jpg",language:"Italian",link:`https://en.wikipedia.org/wiki/History_(novel)
`,pages:600,title:"History",year:1974},{author:"Toni Morrison",country:"United States",imageLink:"/assets/image/beloved.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Beloved_(novel)
`,pages:321,title:"Beloved",year:1987},{author:"Murasaki Shikibu",country:"Japan",imageLink:"/assets/image/the-tale-of-genji.jpg",language:"Japanese",link:`https://en.wikipedia.org/wiki/The_Tale_of_Genji
`,pages:1360,title:"The Tale of Genji",year:1006},{author:"Robert Musil",country:"Austria",imageLink:"/assets/image/the-man-without-qualities.jpg",language:"German",link:`https://en.wikipedia.org/wiki/The_Man_Without_Qualities
`,pages:365,title:"The Man Without Qualities",year:1931},{author:"Vladimir Nabokov",country:"Russia/United States",imageLink:"/assets/image/lolita.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Lolita
`,pages:317,title:"Lolita",year:1955},{author:"George Orwell",country:"United Kingdom",imageLink:"/assets/image/nineteen-eighty-four.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Nineteen_Eighty-Four
`,pages:272,title:"Nineteen Eighty-Four",year:1949},{author:"Ovid",country:"Roman Empire",imageLink:"/assets/image/the-metamorphoses-of-ovid.jpg",language:"Classical Latin",link:`https://en.wikipedia.org/wiki/Metamorphoses
`,pages:576,title:"Metamorphoses",year:100},{author:"Fernando Pessoa",country:"Portugal",imageLink:"/assets/image/the-book-of-disquiet.jpg",language:"Portuguese",link:`https://en.wikipedia.org/wiki/The_Book_of_Disquiet
`,pages:272,title:"The Book of Disquiet",year:1928},{author:"Edgar Allan Poe",country:"United States",imageLink:"/assets/image/tales-and-poems-of-edgar-allan-poe.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales
`,pages:842,title:"Tales",year:1950},{author:"Marcel Proust",country:"France",imageLink:"/assets/image/a-la-recherche-du-temps-perdu.jpg",language:"French",link:`https://en.wikipedia.org/wiki/In_Search_of_Lost_Time
`,pages:2408,title:"In Search of Lost Time",year:1920},{author:"François Rabelais",country:"France",imageLink:"/assets/image/gargantua-and-pantagruel.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel
`,pages:623,title:"Gargantua and Pantagruel",year:1533},{author:"Juan Rulfo",country:"Mexico",imageLink:"/assets/image/pedro-paramo.jpg",language:"Spanish",link:`https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo
`,pages:124,title:"Pedro Páramo",year:1955},{author:"Rumi",country:"Sultanate of Rum",imageLink:"/assets/image/the-masnavi.jpg",language:"Persian",link:`https://en.wikipedia.org/wiki/Masnavi
`,pages:438,title:"The Masnavi",year:1236},{author:"Salman Rushdie",country:"United Kingdom, India",imageLink:"/assets/image/midnights-children.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Midnight%27s_Children
`,pages:536,title:"Midnight's Children",year:1981},{author:"Saadi",country:"Persia, Persian Empire",imageLink:"/assets/image/bostan.jpg",language:"Persian",link:`https://en.wikipedia.org/wiki/Bustan_(book)
`,pages:298,title:"Bostan",year:1257},{author:"Tayeb Salih",country:"Sudan",imageLink:"/assets/image/season-of-migration-to-the-north.jpg",language:"Arabic",link:`https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North
`,pages:139,title:"Season of Migration to the North",year:1966},{author:"José Saramago",country:"Portugal",imageLink:"/assets/image/blindness.jpg",language:"Portuguese",link:`https://en.wikipedia.org/wiki/Blindness_(novel)
`,pages:352,title:"Blindness",year:1995},{author:"William Shakespeare",country:"England",imageLink:"/assets/image/hamlet.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Hamlet
`,pages:432,title:"Hamlet",year:1603},{author:"William Shakespeare",country:"England",imageLink:"/assets/image/king-lear.jpg",language:"English",link:`https://en.wikipedia.org/wiki/King_Lear
`,pages:384,title:"King Lear",year:1608},{author:"William Shakespeare",country:"England",imageLink:"/assets/image/othello.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Othello
`,pages:314,title:"Othello",year:1609},{author:"Sophocles",country:"Greece",imageLink:"/assets/image/oedipus-the-king.jpg",language:"Greek",link:`https://en.wikipedia.org/wiki/Oedipus_the_King
`,pages:88,title:"Oedipus the King",year:-430},{author:"Stendhal",country:"France",imageLink:"/assets/image/le-rouge-et-le-noir.jpg",language:"French",link:`https://en.wikipedia.org/wiki/The_Red_and_the_Black
`,pages:576,title:"The Red and the Black",year:1830},{author:"Laurence Sterne",country:"England",imageLink:"/assets/image/the-life-and-opinions-of-tristram-shandy.jpg",language:"English",link:`https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman
`,pages:640,title:"The Life And Opinions of Tristram Shandy",year:1760},{author:"Italo Svevo",country:"Italy",imageLink:"/assets/image/confessions-of-zeno.jpg",language:"Italian",link:`https://en.wikipedia.org/wiki/Zeno%27s_Conscience
`,pages:412,title:"Confessions of Zeno",year:1923},{author:"Jonathan Swift",country:"Ireland",imageLink:"/assets/image/gullivers-travels.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Gulliver%27s_Travels
`,pages:178,title:"Gulliver's Travels",year:1726},{author:"Leo Tolstoy",country:"Russia",imageLink:"/assets/image/war-and-peace.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/War_and_Peace
`,pages:1296,title:"War and Peace",year:1867},{author:"Leo Tolstoy",country:"Russia",imageLink:"/assets/image/anna-karenina.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/Anna_Karenina
`,pages:864,title:"Anna Karenina",year:1877},{author:"Leo Tolstoy",country:"Russia",imageLink:"/assets/image/the-death-of-ivan-ilyich.jpg",language:"Russian",link:`https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich
`,pages:92,title:"The Death of Ivan Ilyich",year:1886},{author:"Mark Twain",country:"United States",imageLink:"/assets/image/the-adventures-of-huckleberry-finn.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn
`,pages:224,title:"The Adventures of Huckleberry Finn",year:1884},{author:"Valmiki",country:"India",imageLink:"/assets/image/ramayana.jpg",language:"Sanskrit",link:`https://en.wikipedia.org/wiki/Ramayana
`,pages:152,title:"Ramayana",year:-450},{author:"Virgil",country:"Roman Empire",imageLink:"/assets/image/the-aeneid.jpg",language:"Classical Latin",link:`https://en.wikipedia.org/wiki/Aeneid
`,pages:442,title:"The Aeneid",year:-23},{author:"Vyasa",country:"India",imageLink:"/assets/image/the-mahab-harata.jpg",language:"Sanskrit",link:`https://en.wikipedia.org/wiki/Mahabharata
`,pages:276,title:"Mahabharata",year:-700},{author:"Walt Whitman",country:"United States",imageLink:"/assets/image/leaves-of-grass.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Leaves_of_Grass
`,pages:152,title:"Leaves of Grass",year:1855},{author:"Virginia Woolf",country:"United Kingdom",imageLink:"/assets/image/mrs-dalloway.jpg",language:"English",link:`https://en.wikipedia.org/wiki/Mrs_Dalloway
`,pages:216,title:"Mrs Dalloway",year:1925},{author:"Virginia Woolf",country:"United Kingdom",imageLink:"/assets/image/to-the-lighthouse.jpg",language:"English",link:`https://en.wikipedia.org/wiki/To_the_Lighthouse
`,pages:209,title:"To the Lighthouse",year:1927},{author:"Marguerite Yourcenar",country:"France/Belgium",imageLink:"/assets/image/memoirs-of-hadrian.jpg",language:"French",link:`https://en.wikipedia.org/wiki/Memoirs_of_Hadrian
`,pages:408,title:"Memoirs of Hadrian",year:1951}],k=document.querySelector(".js-temp"),c=document.querySelector(".js-not-found-temp"),g=new DocumentFragment,s=document.querySelector(".js-list"),p=document.querySelector(".js-lang-sort"),d=o.reduce((r,i)=>(r.includes(i.language)||r.push(i.language),r),[]);l(o,s);y(d,p);const h=document.querySelector(".js-search");h.addEventListener("keyup",r=>{const i=o.filter(a=>a.title.toLowerCase().startsWith(h.value.trim().toLowerCase()));l(i,s)});const m=document.querySelector(".js-order-sort");m.addEventListener("change",r=>{if(r.target.value==="asc"){const i=o.sort((a,t)=>{const e=a.title.trim().toLowerCase(),n=t.title.trim().toLowerCase();return e<n?-1:e>n?1:0});l(i,s)}if(r.target.value==="desc"){const i=o.sort((a,t)=>{const e=a.title.trim().toLowerCase(),n=t.title.trim().toLowerCase();return e<n?1:e>n?-1:0});l(i,s)}});p.addEventListener("change",r=>{const i=o.filter(a=>a.language===r.target.value);l(i,s)});function y(r,i){i.innerHTML="",r.forEach((a,t)=>{if(t==0){const n=document.createElement("option");n.textContent="Choose a language",n.setAttribute("hidden",""),g.append(n)}const e=document.createElement("option");e.textContent=a,e.value=a,g.append(e)}),i.appendChild(g)}function l(r,i){if(i.innerHTML="",!r.length){i.appendChild(c.content.cloneNode(!0));return}r.forEach(a=>{const t=k.content.cloneNode(!0);t.querySelector(".js-img").src=a.imageLink,t.querySelector(".js-img").alt=a.title,t.querySelector(".js-author").textContent=`🤵Author: ${a.author}`,t.querySelector(".js-country").textContent=`🎌Country: ${a.country}`,t.querySelector(".js-lang").textContent=`🛬Language: ${a.language}`,t.querySelector(".js-title").textContent=`✍️Title: ${a.title}`,t.querySelector(".js-pages").textContent=`📕Pages: ${a.pages}`,t.querySelector(".js-year").textContent=`🕧Year: ${a.year}`,g.appendChild(t)}),i.appendChild(g)}

const template = document.querySelector('.js-temp');
const notFoundTemplate = document.querySelector('.js-not-found-temp');
const fragment = new DocumentFragment();
const list = document.querySelector('.js-list');
const selectLang = document.querySelector('.js-lang-sort');
const langs = books.reduce((acc, item) => {
      if(!acc.includes(item.language)) acc.push(item.language);
      return acc;
}, []);

render(books, list);
renderLangSelect(langs, selectLang);

const searchName = document.querySelector('.js-search');
searchName.addEventListener('keyup', evt => {
  const filteredBooks = books.filter(item => item.title.toLowerCase().startsWith(searchName.value.trim().toLowerCase()));
  render(filteredBooks, list);
});

const orderSort = document.querySelector('.js-order-sort');
orderSort.addEventListener('change', (evt) => {
   if(evt.target.value === 'asc') {
         const filteredBooks = books.sort((a, b) => {
         const first = a.title.trim().toLowerCase();
         const second = b.title.trim().toLowerCase();

         if(first < second) return -1;
         else if(first > second) return 1;
         else return 0; 
      });

      render(filteredBooks, list);
   }

   if(evt.target.value === 'desc') {
      const filteredBooks = books.sort((a, b) => {
      const first = a.title.trim().toLowerCase();
      const second = b.title.trim().toLowerCase();

      if(first < second) return 1;
      else if(first > second) return -1;
      else return 0;
   });

   render(filteredBooks, list);

}
});


selectLang.addEventListener('change', (evt) => {
    const filteredBooks = books.filter(item => item.language === evt.target.value);
    render(filteredBooks, list); 
});






















function renderLangSelect(langs, node) {
  node.innerHTML = '';

  langs.forEach((item, index) => {
       if(index == 0) {
        const option = document.createElement('option');
        option.textContent = 'Choose a language';
        option.setAttribute('hidden', '');
        fragment.append(option);
       }
       const option = document.createElement('option');
       option.textContent = item;
       option.value = item;
       fragment.append(option);
  });

  node.appendChild(fragment);
}


function render(arr, node) {
  node.innerHTML = '';

  if(!arr.length) {
    node.appendChild(notFoundTemplate.content.cloneNode(true));
    return;
  }

  arr.forEach(item => {
    const temp = template.content.cloneNode(true);

    temp.querySelector('.js-img').src = item.imageLink;
    temp.querySelector('.js-img').alt = item.title;
    temp.querySelector('.js-author').textContent = `🤵Author: ${item.author}`;
    temp.querySelector('.js-country').textContent = `🎌Country: ${item.country}`;
    temp.querySelector('.js-lang').textContent = `🛬Language: ${item.language}`;
    temp.querySelector('.js-title').textContent = `✍️Title: ${item.title}`;
    temp.querySelector('.js-pages').textContent = `📕Pages: ${item.pages}`;
    temp.querySelector('.js-year').textContent = `🕧Year: ${item.year}`;
    fragment.appendChild(temp);
  });

  node.appendChild(fragment);
}