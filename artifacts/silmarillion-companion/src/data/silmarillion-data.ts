export type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  needToKnow: string[];
};

export type Character = {
  id: string;
  name: string;
  aliases?: string[];
  race: string;
  alignment: 'good' | 'evil' | 'neutral';
  role: string;
  description: string;
  importance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  firstChapter: number;
  lastChapter?: number;
  relationships: { characterId: string; type: 'father' | 'mother' | 'spouse' | 'sibling' | 'child' | 'enemy' | 'ally' }[];
  locations: string[];
  events: string[];
  greatTales: string[];
};

export type Location = {
  id: string;
  name: string;
  description: string;
  importance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'Active' | 'Destroyed' | 'Hidden' | 'Abandoned' | 'Legendary';
  firstChapter: number;
  lastChapter?: number;
  lat: number;
  lng: number;
  greatTales: string[];
};

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  firstChapter: number;
};

export type GreatTale = {
  id: string;
  title: string;
  description: string;
  protagonists: string[];
  keyCharacters: string[];
  relatedLocations: string[];
  themes: string[];
  needToKnow: string[];
  startChapter: number;
  endChapter: number;
};

export type FlowNode = {
  id: string;
  characterId: string;
  position: { x: number; y: number };
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  label: string;
};

export const chaptersData: Chapter[] = [
  { id: 0, title: "Ainulindalë", subtitle: "La Música de los Ainur", description: "En el principio, Ilúvatar el Único creó a los Ainur de su pensamiento. Juntos cantaron una Gran Música que dio forma a la visión del mundo.", needToKnow: ["Eru Ilúvatar es el creador supremo.", "Los Ainur son seres angelicales creados antes del mundo.", "Melkor introdujo disonancia en la Gran Música.", "La visión de la Música se convirtió en Eä, el mundo material.", "Algunos Ainur decidieron descender a Eä para darle forma."] },
  { id: 1, title: "Valaquenta", subtitle: "Historia de los Valar", description: "Los nombres y naturalezas de los Valar y los Maiar, los grandes poderes que rigen el mundo.", needToKnow: ["Los Valar son los mayores de los Ainur que entraron en Arda.", "Manwë es el Rey de Arda, señor del aire.", "Ulmo domina las aguas y Aulë es el gran forjador.", "Melkor perdió su estatus como Vala debido a su orgullo.", "Los Maiar son espíritus de menor poder que sirven a los Valar."] },
  { id: 2, title: "Quenta Silmarillion I", subtitle: "Del comienzo de los días", description: "La conformación inicial de Arda, las Primeras Guerras con Melkor y la destrucción de las Lámparas.", needToKnow: ["Los Valar dieron forma al mundo pese a los ataques de Melkor.", "Se crearon las Grandes Lámparas, Illuin y Ormal.", "Melkor destruyó las lámparas, arruinando la simetría original.", "Los Valar se retiraron a Aman, en el oeste.", "Allí fundaron el reino bendecido de Valinor."] },
  { id: 3, title: "Quenta Silmarillion II", subtitle: "De Aulë y Yavanna", description: "La creación secreta de los Enanos y el despertar de los Ents.", needToKnow: ["Aulë creó a los Enanos impaciente por tener a quién enseñar.", "Ilúvatar les dio vida verdadera, pero ordenó que durmieran hasta el Despertar de los Elfos.", "Yavanna temió por los bosques ante los futuros Enanos y Hombres.", "A petición de Yavanna, surgieron los Ents (Pastores de Árboles).", "El equilibrio entre la piedra y el bosque fue establecido."] },
  { id: 4, title: "Quenta Silmarillion III", subtitle: "Del advenimiento de los Elfos", description: "Bajo las estrellas, despiertan los Primeros Nacidos en Cuiviénen.", needToKnow: ["Los Elfos despertaron junto al lago Cuiviénen.", "Fueron encontrados primero por Melkor y luego por Oromë.", "Los Valar hicieron la guerra a Melkor para proteger a los Elfos.", "Melkor fue encadenado y llevado a Valinor.", "Los Valar invitaron a los Elfos a vivir con ellos en Aman."] },
  { id: 5, title: "Quenta Silmarillion IV", subtitle: "De Thingol y Melian", description: "Elwe Singollo se pierde en los bosques y encuentra un amor inmortal.", needToKnow: ["Elwë, líder de los Teleri, conoció a la Maia Melian en los bosques de Nan Elmoth.", "Cayeron en un profundo trance de amor.", "Muchos de su pueblo se quedaron a buscarlo, formando los Sindar.", "Elwë (Thingol) nunca llegó a Valinor.", "Fundaron el reino escondido de Doriath."] },
  { id: 6, title: "Quenta Silmarillion V", subtitle: "De Eldamar y los Príncipes", description: "Los Elfos que llegaron a Valinor fundan sus ciudades en la luz de los Árboles.", needToKnow: ["Los Vanyar, Noldor y parte de los Teleri llegaron a Aman.", "Construyeron la ciudad de Tirion y el puerto de Alqualondë.", "Finwë gobernaba a los Noldor.", "Olwë, hermano de Thingol, lideraba a los Teleri.", "Los Elfos prosperaron en conocimiento y arte bajo la tutela de los Valar."] },
  { id: 7, title: "Quenta Silmarillion VI", subtitle: "De Fëanor", description: "Nace el más grande y trágico de los Elfos, y se siembra la discordia en la casa de Finwë.", needToKnow: ["Fëanor nació de Míriel, quien murió de cansancio al darle a luz.", "Finwë volvió a casarse con Indis y tuvo a Fingolfin y Finarfin.", "Fëanor se convirtió en el herrero y erudito más talentoso.", "Inventó las letras Tengwar.", "La relación entre Fëanor y sus medios hermanos era tensa."] },
  { id: 8, title: "Quenta Silmarillion VII", subtitle: "De los Silmarils", description: "Fëanor encierra la luz de los Dos Árboles en tres joyas inigualables.", needToKnow: ["Fëanor forjó los tres Silmarils.", "Estas joyas contenían la luz pura de Laurelin y Telperion.", "Melkor, liberado de sus cadenas, empezó a codiciar las joyas.", "Esparció mentiras para enemistar a los Noldor con los Valar.", "Fëanor desenvainó su espada contra Fingolfin y fue exiliado."] },
  { id: 9, title: "Quenta Silmarillion VIII", subtitle: "Del oscurecimiento de Valinor", description: "La venganza de Melkor trae la oscuridad al Reino Bendecido.", needToKnow: ["Melkor se alió con Ungoliant, una criatura en forma de araña gigante.", "Juntos destruyeron los Dos Árboles de Valinor.", "Oscuridad total cayó sobre Aman.", "Melkor asesinó al Rey Finwë en Formenos.", "Melkor robó los Silmarils y huyó hacia la Tierra Media."] },
  { id: 10, title: "Quenta Silmarillion IX", subtitle: "De la huida de los Noldor", description: "El Juramento de Fëanor y la rebelión contra los Valar.", needToKnow: ["Fëanor maldijo a Melkor llamándolo 'Morgoth'.", "Él y sus siete hijos hicieron un juramento inquebrantable de recuperar las joyas.", "Los Noldor se rebelaron y abandonaron Valinor.", "Ocurrió la Matanza de los Hermanos en Alqualondë por robar los barcos.", "El Hado de Mandos profetizó dolor y traición para los exiliados."] },
  { id: 11, title: "Quenta Silmarillion X", subtitle: "De los Sindar", description: "Mientras los Elfos de Valinor prosperaban, Beleriand se preparaba bajo las estrellas.", needToKnow: ["Thingol y Melian gobernaban a los Sindar (Elfos Grises) en Beleriand.", "Melian creó un cerco mágico (la Cintura de Melian) para proteger Doriath.", "Los Enanos forjaron armas para Thingol.", "Los Orcos comenzaron a multiplicarse en la Tierra Media.", "Los Sindar desarrollaron su propia lengua y cultura."] },
  { id: 12, title: "Quenta Silmarillion XI", subtitle: "Del Sol y la Luna", description: "La última flor y el último fruto de los Árboles traen nueva luz al mundo.", needToKnow: ["Los Valar lograron rescatar una flor de Telperion y un fruto de Laurelin.", "Arien guio al Sol y Tilion a la Luna.", "Morgoth se ocultó en las profundidades de Angband ante la nueva luz.", "El inicio de los Años del Sol marcó un cambio de era.", "Se despertaron nuevas formas de vida en la Tierra Media."] },
  { id: 13, title: "Quenta Silmarillion XII", subtitle: "De los Hombres", description: "Con la salida del Sol, despiertan los Segundos Nacidos en Hildórien.", needToKnow: ["Los Hombres, el pueblo menor de Eru, despertaron en el este.", "Tienen el don (o maldición) de la mortalidad.", "Su destino no está ligado a Arda como el de los Elfos.", "Morgoth pronto encontró a los Hombres y sembró el miedo entre ellos.", "Algunos Hombres empezaron a migrar hacia el oeste."] },
  { id: 14, title: "Quenta Silmarillion XIII", subtitle: "De la vuelta de los Noldor", description: "Los exiliados llegan a Beleriand y la guerra se enciende.", needToKnow: ["Fëanor murió en batalla poco después de llegar a Beleriand.", "Fingolfin y su hueste cruzaron el peligroso hielo crujiente del Helcaraxë.", "Maedhros (hijo de Fëanor) fue capturado por Morgoth.", "Fingon rescató a Maedhros de Thangorodrim.", "Los Noldor establecieron sus reinos rodeando la fortaleza de Morgoth."] },
  { id: 15, title: "Quenta Silmarillion XIV", subtitle: "De Beleriand y sus Reinos", description: "La geografía política de las tierras del norte donde se librarán las grandes batallas.", needToKnow: ["Fingolfin gobernaba Hithlum en el noroeste.", "Los hijos de Fëanor protegían la frontera oriental.", "Finrod fundó Nargothrond en el sur.", "Turgon descubrió el valle oculto de Tumladen.", "Doriath se mantenía aislado bajo la protección de Melian."] },
  { id: 16, title: "Quenta Silmarillion XV", subtitle: "De los Noldor en Beleriand", description: "Cuatrocientos años de paz armada durante el Sitio de Angband.", needToKnow: ["Turgon construyó en secreto la gloriosa ciudad de Gondolin.", "Finrod se hizo amigo de los primeros Hombres que llegaron a Beleriand.", "Galadriel vivió en Doriath aprendiendo de Melian.", "Glaurung, el primer dragón, hizo una aparición prematura y fue repelido.", "Fue una época de esplendor y esperanza cautelosa."] },
  { id: 17, title: "Quenta Silmarillion XVI", subtitle: "De Maeglin", description: "Traición y oscuridad nacen del amor prohibido de Eöl.", needToKnow: ["Aredhel, hermana de Turgon, se perdió en los bosques.", "Se casó con Eöl el Elfo Oscuro y tuvieron a Maeglin.", "Aredhel y Maeglin huyeron a Gondolin.", "Eöl los persiguió y asesinó accidentalmente a Aredhel.", "Maeglin se crió en Gondolin, con semillas de amargura en su corazón."] },
  { id: 18, title: "Quenta Silmarillion XVII", subtitle: "Del advenimiento de los Hombres", description: "Los Edain llegan a Beleriand y se alían con los Reyes Elfos.", needToKnow: ["Los Edain eran las Tres Casas de los Hombres amigos de los Elfos.", "La Casa de Bëor se alió con Finrod.", "La Casa de Haleth se asentó en el bosque de Brethil.", "La Casa de Hador se alió con Fingolfin.", "Demostraron ser guerreros valientes, aunque de vida efímera."] },
  { id: 19, title: "Quenta Silmarillion XVIII", subtitle: "De la ruina de Beleriand", description: "El asedio se rompe en ríos de fuego durante la Batalla de la Llama Súbita.", needToKnow: ["Morgoth rompió el sitio de Angband en la Dagor Bragollach.", "Ríos de fuego destruyeron las llanuras verdes.", "Fingolfin, desesperado, retó a Morgoth a combate singular.", "Fingolfin hirió a Morgoth siete veces antes de caer.", "La alianza de los Elfos quedó fragmentada."] },
  { id: 20, title: "Quenta Silmarillion XIX", subtitle: "De Beren y Lúthien", description: "La más grande historia de amor de la Primera Edad, de mortales y elfos, y de una joya robada a la oscuridad.", needToKnow: ["Beren, un Hombre proscrito, se enamoró de Lúthien, princesa Elfa.", "Thingol exigió un Silmaril como precio por la mano de su hija.", "Finrod murió protegiendo a Beren.", "Beren y Lúthien lograron arrebatar un Silmaril de la corona de Morgoth.", "Lúthien eligió volverse mortal para compartir el destino de Beren."] },
  { id: 21, title: "Quenta Silmarillion XX", subtitle: "De la quinta Batalla", description: "La Nirnaeth Arnoediad, la Batalla de las Lágrimas Innumerables.", needToKnow: ["Maedhros organizó una gran unión de Elfos, Hombres y Enanos.", "Una traición de los Hombres del Este arruinó la victoria inminente.", "Glaurung y los Balrogs destrozaron las huestes élficas.", "Húrin cubrió la retirada de Turgon hacia Gondolin.", "Morgoth logró el dominio casi total del norte de Beleriand."] },
  { id: 22, title: "Quenta Silmarillion XXI", subtitle: "De Túrin Turambar", description: "El hijo de Húrin lucha contra la maldición de Morgoth y el dragón Glaurung.", needToKnow: ["Morgoth maldijo a la familia de Húrin.", "Túrin fue un gran guerrero, pero la tragedia le seguía.", "Provocó la caída de Nargothrond.", "Logró matar a Glaurung, el padre de los dragones.", "Se suicidó tras descubrir que se había casado con su propia hermana bajo el hechizo del dragón."] },
  { id: 23, title: "Quenta Silmarillion XXII", subtitle: "De la ruina de Doriath", description: "La codicia por el Silmaril destruye el Reino Escondido.", needToKnow: ["Los Enanos asesinaron a Thingol por el collar Nauglamír y el Silmaril.", "Doriath fue saqueada, aunque Beren recuperó la joya temporalmente.", "Melian abandonó la Tierra Media en su dolor.", "Más tarde, los Hijos de Fëanor atacaron Doriath para recuperar el Silmaril.", "Doriath fue destruida para siempre."] },
  { id: 24, title: "Quenta Silmarillion XXIII", subtitle: "De Tuor y la Caída de Gondolin", description: "La última fortaleza de los Noldor es traicionada desde dentro, pero de sus cenizas nace una estrella.", needToKnow: ["Tuor, un Hombre mortal, fue guiado por Ulmo a Gondolin.", "Se casó con Idril, hija de Turgon, y tuvieron a Eärendil.", "Maeglin traicionó a Gondolin revelando su ubicación a Morgoth.", "La ciudad cayó en una batalla épica con dragones y Balrogs.", "Tuor, Idril y Eärendil escaparon hacia el mar."] }
];

export const charactersData: Character[] = [
  { id: "iluvatar", name: "Eru Ilúvatar", race: "Eru", alignment: "good", role: "El Único, fuente de todo ser", description: "El Ser Supremo que creó a los Ainur y propuso los Grandes Temas de la Música.", importance: "CRITICAL", firstChapter: 0, relationships: [], locations: ["Timeless Halls"], events: ["La creación de los Ainur", "La Música de los Ainur"], greatTales: [] },
  { id: "manwe", name: "Manwë", race: "Vala", alignment: "good", role: "Rey de Arda, Señor de los Vientos", description: "El más querido por Ilúvatar, comprende mejor que nadie sus propósitos.", importance: "CRITICAL", firstChapter: 0, relationships: [{characterId: "varda", type: "spouse"}], locations: ["Valinor", "Taniquetil"], events: ["Descenso a Arda"], greatTales: [] },
  { id: "melkor", name: "Melkor / Morgoth", aliases: ["Melkor", "Morgoth", "El Enemigo", "El Señor Oscuro"], race: "Vala corrompido", alignment: "evil", role: "Señor Oscuro, el más poderoso de los Ainur", description: "El que se alzó en orgullo, deseando crear cosas propias, y trajo el mal al mundo.", importance: "CRITICAL", firstChapter: 0, relationships: [], locations: ["Utumno", "Angband"], events: ["La Discordia en la Música", "Destrucción de las Lámparas", "Robo de los Silmarils"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "varda", name: "Varda", race: "Vala", alignment: "good", role: "Reina de las Estrellas", description: "La más reverenciada por los Elfos, hacedora de las estrellas.", importance: "HIGH", firstChapter: 0, relationships: [{characterId: "manwe", type: "spouse"}], locations: ["Valinor"], events: ["Creación de las estrellas"], greatTales: [] },
  { id: "aule", name: "Aulë", race: "Vala", alignment: "good", role: "Forjador, creador de los Enanos", description: "Señor de las sustancias de las que está hecha la tierra.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "yavanna", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Enanos"], greatTales: [] },
  { id: "yavanna", name: "Yavanna", race: "Vala", alignment: "good", role: "Dadora de Frutos", description: "Amante de todas las cosas que crecen en la tierra.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "aule", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Dos Árboles", "Petición de los Ents"], greatTales: [] },
  { id: "ulmo", name: "Ulmo", race: "Vala", alignment: "good", role: "Señor de las Aguas", description: "Vive en el Océano Exterior y ama a los Elfos y los Hombres, guiándolos en secreto.", importance: "HIGH", firstChapter: 1, relationships: [], locations: ["Ekkaia"], events: ["Guía a Turgon", "Guía a Tuor"], greatTales: ["fall-gondolin", "earendil"] },
  { id: "finwe", name: "Finwë", race: "Elfo Noldor", alignment: "good", role: "Primer Rey de los Noldor", description: "Lideró a su pueblo a Valinor, su asesinato precipitó la rebelión de los Noldor.", importance: "HIGH", firstChapter: 4, relationships: [{characterId: "feanor", type: "child"}, {characterId: "fingolfin", type: "child"}, {characterId: "finarfin", type: "child"}], locations: ["Valinor", "Tirion"], events: ["Llegada a Valinor", "Asesinato en Formenos"], greatTales: [] },
  { id: "thingol", name: "Elwë / Thingol", aliases: ["Elwë", "Thingol", "Singollo"], race: "Elfo Sindar", alignment: "good", role: "Rey de Doriath", description: "Vio la Luz de los Árboles pero se quedó en la Tierra Media por amor.", importance: "CRITICAL", firstChapter: 5, lastChapter: 23, relationships: [{characterId: "melian", type: "spouse"}, {characterId: "luthien", type: "child"}], locations: ["Doriath", "Menegroth"], events: ["Encuentro con Melian", "Demanda del Silmaril"], greatTales: ["beren-luthien"] },
  { id: "melian", name: "Melian", race: "Maia", alignment: "good", role: "Reina de Doriath", description: "Espíritu de gran poder que protegió su reino con una cintura de encantamiento.", importance: "HIGH", firstChapter: 5, relationships: [{characterId: "thingol", type: "spouse"}, {characterId: "luthien", type: "child"}], locations: ["Doriath"], events: ["La Cintura de Melian"], greatTales: ["beren-luthien"] },
  { id: "luthien", name: "Lúthien Tinúviel", aliases: ["Lúthien", "Tinúviel", "Nightingale"], race: "Elfo/Maia", alignment: "good", role: "Hija de Thingol y Melian", description: "La más hermosa de todos los Hijos de Ilúvatar.", importance: "CRITICAL", firstChapter: 5, relationships: [{characterId: "beren", type: "spouse"}, {characterId: "thingol", type: "father"}, {characterId: "melian", type: "mother"}], locations: ["Doriath", "Tol Galen"], events: ["Robo del Silmaril", "Renuncia a la inmortalidad"], greatTales: ["beren-luthien"] },
  { id: "feanor", name: "Fëanor", aliases: ["Fëanor", "Phëanor"], race: "Elfo Noldor", alignment: "neutral", role: "Creador de los Silmarils", description: "Su ardiente espíritu consumió su vida. Hacedor de grandes obras y de grandes males.", importance: "CRITICAL", firstChapter: 7, relationships: [{characterId: "finwe", type: "father"}], locations: ["Valinor", "Formenos", "Losgar"], events: ["Creación de los Silmarils", "Juramento de Fëanor", "Muerte en la Dagor-nuin-Giliath"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "fingolfin", name: "Fingolfin", aliases: ["Fingolfin", "Aran Gwarth"], race: "Elfo Noldor", alignment: "good", role: "Rey Supremo de los Noldor en el exilio", description: "Valeroso rey que cruzó el hielo y desafió a Morgoth a duelo singular.", importance: "CRITICAL", firstChapter: 7, lastChapter: 19, relationships: [{characterId: "finwe", type: "father"}], locations: ["Hithlum"], events: ["El cruce del Helcaraxë", "Duelo con Morgoth"], greatTales: [] },
  { id: "finarfin", name: "Finarfin", race: "Elfo Noldor", alignment: "good", role: "Rey de los Noldor en Aman", description: "El único de los hijos de Finwë que regresó al arrepentirse de la rebelión.", importance: "MEDIUM", firstChapter: 7, relationships: [{characterId: "finwe", type: "father"}, {characterId: "galadriel", type: "child"}], locations: ["Tirion"], events: ["Arrepentimiento de Finarfin"], greatTales: [] },
  { id: "galadriel", name: "Galadriel", aliases: ["Galadriel", "Alatáriel"], race: "Elfo Noldor", alignment: "good", role: "Una de los líderes de la rebelión", description: "Deseaba ver la Tierra Media y gobernar un reino allí.", importance: "HIGH", firstChapter: 7, relationships: [{characterId: "finarfin", type: "father"}], locations: ["Doriath", "Nargothrond"], events: ["El cruce del Helcaraxë"], greatTales: [] },
  { id: "beren", name: "Beren Erchamion", aliases: ["Beren", "Erchamion"], race: "Hombre", alignment: "good", role: "El único mortal amado por un Elfo en la Primera Edad", description: "Proscrito valeroso que logró lo imposible por amor.", importance: "CRITICAL", firstChapter: 20, relationships: [{characterId: "luthien", type: "spouse"}], locations: ["Dorthonion", "Doriath", "Angband"], events: ["Búsqueda del Silmaril"], greatTales: ["beren-luthien"] },
  { id: "turin", name: "Túrin Turambar", aliases: ["Túrin", "Turambar", "Mormegil"], race: "Hombre", alignment: "neutral", role: "Portador de la maldición de Morgoth", description: "Trágico héroe humano. Matador de Glaurung.", importance: "CRITICAL", firstChapter: 22, relationships: [], locations: ["Doriath", "Nargothrond", "Brethil"], events: ["Caída de Nargothrond", "Muerte de Glaurung"], greatTales: ["turin"] },
  { id: "earendil", name: "Eärendil", aliases: ["Eärendil", "El Marinero Estrella"], race: "Medio-elfo", alignment: "good", role: "El marinero estrella", description: "Navegó a Valinor para pedir ayuda a los Valar por las Dos Razas.", importance: "CRITICAL", firstChapter: 24, relationships: [], locations: ["Gondolin", "Puertos del Sirion"], events: ["Navegación a Aman", "Guerra de la Cólera"], greatTales: ["fall-gondolin", "earendil"] }
];

export const locationsData: Location[] = [
  { id: "valinor", name: "Valinor", description: "El Reino Bendecido en el continente de Aman, hogar de los Valar y los Elfos de la Luz.", importance: "CRITICAL", status: "Active", firstChapter: 1, lat: 20, lng: -60, greatTales: [] },
  { id: "angband", name: "Angband", description: "La fortaleza secundaria y luego principal de Morgoth en el norte de Beleriand.", importance: "CRITICAL", status: "Active", firstChapter: 3, lat: 60, lng: -10, greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "doriath", name: "Doriath", description: "El Reino Escondido de Thingol y Melian en los bosques centrales de Beleriand.", importance: "CRITICAL", status: "Destroyed", lastChapter: 23, firstChapter: 5, lat: 45, lng: -15, greatTales: ["beren-luthien"] },
  { id: "tirion", name: "Tirion", description: "La gran ciudad de los Elfos Noldor y Vanyar sobre la colina de Túna en Aman.", importance: "HIGH", status: "Active", firstChapter: 6, lat: 15, lng: -55, greatTales: [] },
  { id: "formenos", name: "Formenos", description: "Fortaleza de Fëanor en el norte de Valinor.", importance: "MEDIUM", status: "Destroyed", firstChapter: 8, lat: 25, lng: -58, greatTales: [] },
  { id: "helcaraxe", name: "Helcaraxë", description: "El Hielo Crujiente, el estrecho estrecho en el extremo norte que conectaba Aman y la Tierra Media.", importance: "HIGH", status: "Legendary", firstChapter: 14, lat: 75, lng: -40, greatTales: [] },
  { id: "hithlum", name: "Hithlum", description: "Región del norte de Beleriand, feudo principal de Fingolfin y los Altos Reyes.", importance: "HIGH", status: "Destroyed", firstChapter: 15, lat: 55, lng: -20, greatTales: [] },
  { id: "nargothrond", name: "Nargothrond", description: "Reino subterráneo fundado por Finrod Felagund cerca del río Narog.", importance: "HIGH", status: "Destroyed", lastChapter: 22, firstChapter: 15, lat: 40, lng: -25, greatTales: ["turin"] },
  { id: "gondolin", name: "Gondolin", description: "La Ciudad Oculta de Turgon, rodeada por las Montañas Circundantes.", importance: "CRITICAL", status: "Destroyed", lastChapter: 24, firstChapter: 16, lat: 52, lng: -12, greatTales: ["fall-gondolin"] },
  { id: "tolgalen", name: "Tol Galen", description: "La Isla Verde en Adurant, donde vivieron Beren y Lúthien.", importance: "MEDIUM", status: "Legendary", firstChapter: 20, lat: 35, lng: -10, greatTales: ["beren-luthien"] },
  { id: "brethil", name: "Brethil", description: "El bosque de los Hombres de Haleth, escenario del fin trágico de Túrin.", importance: "MEDIUM", status: "Active", firstChapter: 18, lat: 48, lng: -18, greatTales: ["turin"] }
];

export const timelineData: TimelineEvent[] = [
  { id: "t1", year: "Antes de los Días", title: "La Música de los Ainur", description: "Eru y los Ainur cantan la Gran Música, esbozando la historia de Arda.", firstChapter: 0 },
  { id: "t2", year: "Años de las Lámparas", title: "Entrada de los Valar", description: "Los Valar descienden a Arda para darle forma.", firstChapter: 1 },
  { id: "t3", year: "Años de las Lámparas", title: "Destrucción de las Lámparas", description: "Melkor destruye Illuin y Ormal. Los Valar se mudan a Aman.", firstChapter: 2 },
  { id: "t4", year: "Años de los Árboles", title: "Despertar de los Elfos", description: "Los Primeros Nacidos despiertan junto a Cuiviénen.", firstChapter: 4 },
  { id: "t5", year: "Años de los Árboles", title: "Nacimiento de Fëanor", description: "Nace el más dotado de los Noldor; muerte de Míriel.", firstChapter: 7 },
  { id: "t6", year: "Años de los Árboles", title: "Forja de los Silmarils", description: "Fëanor captura la luz de los Dos Árboles en tres grandes joyas.", firstChapter: 8 },
  { id: "t7", year: "Años de los Árboles", title: "Oscurecimiento de Valinor", description: "Melkor y Ungoliant destruyen los Árboles y roban los Silmarils.", firstChapter: 9 },
  { id: "t8", year: "Años de los Árboles", title: "Vuelo de los Noldor", description: "Rebelión de Fëanor y matanza de Alqualondë.", firstChapter: 10 },
  { id: "t9", year: "Años del Sol, 1", title: "Primera salida del Sol", description: "Despertar de los Hombres en el este.", firstChapter: 12 },
  { id: "t10", year: "Años del Sol, 60", title: "Batalla Gloriosa", description: "Victoria élfica y comienzo del Sitio de Angband.", firstChapter: 15 },
  { id: "t11", year: "Años del Sol, 116", title: "Terminación de Gondolin", description: "Turgon completa la ciudad oculta.", firstChapter: 16 },
  { id: "t12", year: "Años del Sol, 455", title: "Dagor Bragollach", description: "Ruina del sitio de Angband y muerte de Fingolfin.", firstChapter: 19 },
  { id: "t13", year: "Años del Sol, 466", title: "La Búsqueda del Silmaril", description: "Beren y Lúthien recuperan un Silmaril; muerte de Finrod.", firstChapter: 20 },
  { id: "t14", year: "Años del Sol, 472", title: "Nirnaeth Arnoediad", description: "Desastrosa derrota de la alianza de elfos y hombres.", firstChapter: 21 },
  { id: "t15", year: "Años del Sol, 495", title: "Caída de Nargothrond", description: "Glaurung destruye el reino subterráneo debido al orgullo de Túrin.", firstChapter: 22 },
  { id: "t16", year: "Años del Sol, 503", title: "Muerte de Thingol", description: "Ruina de Doriath a manos de los Enanos.", firstChapter: 23 },
  { id: "t17", year: "Años del Sol, 510", title: "Caída de Gondolin", description: "Morgoth destruye el último gran reino noldorin.", firstChapter: 24 }
];

export const greatTalesData: GreatTale[] = [
  {
    id: "beren-luthien",
    title: "Beren y Lúthien",
    description: "La historia más grande de la Primera Edad: un mortal proscrito y una princesa elfa desafían a Morgoth mismo. Su amor es tan poderoso que trasciende la frontera entre razas, y juntos logran arrebatar un Silmaril de la corona del Señor Oscuro.",
    protagonists: ["beren", "luthien"],
    keyCharacters: ["thingol", "melian", "finrod", "melkor"],
    relatedLocations: ["doriath", "angband", "tolgalen"],
    themes: ["love conquers all", "sacrifice", "impossible quests", "mortality vs immortality"],
    needToKnow: [
      "Thingol exige un Silmaril como dote de Lúthien",
      "Beren y Finrod son capturados pero Lúthien los rescata",
      "Logran arrebatar un Silmaril de la corona de Morgoth",
      "Lúthien elige la mortalidad para estar con Beren",
      "Su hijo Eärendil es el marinero estrella"
    ],
    startChapter: 20,
    endChapter: 20
  },
  {
    id: "turin",
    title: "Túrin Turambar",
    description: "La maldición de Morgoth sobre Húrin se cierne como una sombra sobre su hijo Túrin. A través de traiciones, batallas perdidas y amores destruidos, Túrin busca redención, solo para encontrar tragedia en su victoria final.",
    protagonists: ["turin"],
    keyCharacters: ["hurin", "glaurung", "melkor"],
    relatedLocations: ["nargothrond", "brethil", "doriath"],
    themes: ["curse and fate", "warrior's honor", "internal struggle", "tragic hero"],
    needToKnow: [
      "Morgoth maldice a Húrin y su familia",
      "Túrin es un gran guerrero pero la tragedia lo persigue",
      "Causa la caída de Nargothrond con su orgullo",
      "Mata a Glaurung, el padre de los dragones",
      "Se suicida al descubrir que se casó con su hermana bajo hechizo"
    ],
    startChapter: 22,
    endChapter: 22
  },
  {
    id: "fall-gondolin",
    title: "La Caída de Gondolin",
    description: "La última y más gloriosa de las ciudades elfas es traicionada desde dentro. En una batalla épica con dragones y Balrogs, Gondolin cae, pero de sus cenizas emerge una nueva esperanza en el marinero Eärendil.",
    protagonists: ["turgon", "earendil", "tuor"],
    keyCharacters: ["idril", "maeglin", "ulmo", "melkor"],
    relatedLocations: ["gondolin", "angband"],
    themes: ["betrayal", "last stand", "redemption from ashes", "sacrifice for future"],
    needToKnow: [
      "Gondolin fue construida en secreto por Turgon",
      "Maeglin traiciona su ubicación a Morgoth",
      "Cae en un asalto con fuego y dragones",
      "Tuor y su familia escapan, llevando el Silmaril recuperado de Beren",
      "Eärendil, su hijo, navegará a Valinor para buscar ayuda"
    ],
    startChapter: 24,
    endChapter: 24
  },
  {
    id: "earendil",
    title: "Eärendil el Marinero",
    description: "El último acto de la Primera Edad. Eärendil, portador de un Silmaril en su frente, navega a Valinor para implorar a los Valar. Su viaje es el preludio a la Guerra de la Cólera que finalmente derrota a Morgoth.",
    protagonists: ["earendil"],
    keyCharacters: ["elwing", "manwe", "ulmo", "melkor"],
    relatedLocations: ["gondolin", "valinor"],
    themes: ["hope and light", "intercession", "final battle", "stars and eternity"],
    needToKnow: [
      "Eärendil porpora un Silmaril en su frente como estrella",
      "Viaja a Valinor a pesar del Prohibición sobre los Hombres",
      "Los Valar le conceden la carga de llevar la luz",
      "Se convierte en una estrella visible: Gil-Eärendil",
      "Su llegada es el señal para la Guerra de la Cólera que destruye a Morgoth"
    ],
    startChapter: 24,
    endChapter: 24
  }
];

export const flowNodesData: FlowNode[] = [
  { id: "iluvatar", characterId: "iluvatar", position: { x: 400, y: 0 } },
  { id: "manwe", characterId: "manwe", position: { x: 100, y: 150 } },
  { id: "melkor", characterId: "melkor", position: { x: 250, y: 150 } },
  { id: "varda", characterId: "varda", position: { x: -50, y: 150 } },
  { id: "aule", characterId: "aule", position: { x: 400, y: 150 } },
  { id: "yavanna", characterId: "yavanna", position: { x: 550, y: 150 } },
  { id: "ulmo", characterId: "ulmo", position: { x: 700, y: 150 } },
  { id: "finwe", characterId: "finwe", position: { x: 100, y: 350 } },
  { id: "thingol", characterId: "thingol", position: { x: 400, y: 350 } },
  { id: "melian", characterId: "melian", position: { x: 550, y: 350 } },
  { id: "feanor", characterId: "feanor", position: { x: -50, y: 500 } },
  { id: "fingolfin", characterId: "fingolfin", position: { x: 100, y: 500 } },
  { id: "finarfin", characterId: "finarfin", position: { x: 250, y: 500 } },
  { id: "luthien", characterId: "luthien", position: { x: 500, y: 500 } },
  { id: "galadriel", characterId: "galadriel", position: { x: 250, y: 650 } },
  { id: "beren", characterId: "beren", position: { x: 650, y: 650 } },
  { id: "turin", characterId: "turin", position: { x: 850, y: 500 } },
  { id: "earendil", characterId: "earendil", position: { x: 800, y: 650 } }
];

export const flowEdgesData: FlowEdge[] = [
  { id: "e-manwe-varda", source: "manwe", target: "varda", label: "esposos" },
  { id: "e-aule-yavanna", source: "aule", target: "yavanna", label: "esposos" },
  { id: "e-finwe-feanor", source: "finwe", target: "feanor", label: "hijo" },
  { id: "e-finwe-fingolfin", source: "finwe", target: "fingolfin", label: "hijo" },
  { id: "e-finwe-finarfin", source: "finwe", target: "finarfin", label: "hijo" },
  { id: "e-finarfin-galadriel", source: "finarfin", target: "galadriel", label: "hija" },
  { id: "e-thingol-luthien", source: "thingol", target: "luthien", label: "hija" },
  { id: "e-melian-luthien", source: "melian", target: "luthien", label: "hija" },
  { id: "e-beren-luthien", source: "beren", target: "luthien", label: "esposos" }
];
