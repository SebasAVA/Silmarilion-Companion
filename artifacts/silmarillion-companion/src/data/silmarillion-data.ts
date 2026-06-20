export type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  needToKnow: string[];
  shouldKnowAfter?: string[];
};

export type Character = {
  id: string;
  name: string;
  aliases?: string[];
  race: string;
  alignment: 'good' | 'evil' | 'neutral';
  role: string;
  description: string;
  details?: string;
  titles?: { chapter: number; text: string }[];
  notableDeeds?: { chapter: number; text: string }[];
  importance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  firstChapter: number;
  lastChapter?: number;
  deathInfo?: {
    chapter: number;
    year?: string;
    description: string;
    killer?: string;
  };
  relationships: { characterId: string; type: 'father' | 'mother' | 'spouse' | 'sibling' | 'child' | 'enemy' | 'ally' }[];
  locations: string[];
  events: string[];
  greatTales: string[];
};

export type Location = {
  id: string;
  name: string;
  aliases?: string[];
  description: string;
  importance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  type: 'City' | 'Kingdom' | 'Fortress' | 'Forest' | 'Mountain' | 'Region' | 'Realm' | 'Other';
  region: 'Aman' | 'Beleriand' | 'Este' | 'Mar' | 'Legendario';
  status: 'Active' | 'Destroyed' | 'Hidden' | 'Abandoned' | 'Legendary';
  firstChapter: number;
  lastChapter?: number;
  ruler?: {
    characterId: string;
    period?: string;
  };
  relatedCharacters?: string[];
  relatedEvents?: string[];
  lat: number;
  lng: number;
  greatTales: string[];
};

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  importance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  category: 'Battle' | 'Death' | 'Birth' | 'Creation' | 'Oath' | 'Journey' | 'Destruction' | 'Other';
  firstChapter: number;
  relatedCharacters?: string[];
  relatedLocations?: string[];
  greatTaleId?: string;
};

export type GreatTale = {
  id: string;
  title: string;
  description: string;
  details: string;
  protagonists: string[];
  antagonists: string[];
  keyCharacters: string[];
  relatedLocations: string[];
  relatedEvents: string[];
  themes: string[];
  needToKnow: string[];
  afterReadingShouldKnow: string[];
  startChapter: number;
  endChapter: number;
};

export type Theme = {
  id: string;
  name: string;
  analysis: string;
  relatedGreatTales: string[];
  relatedCharacters: string[];
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
  { id: 0, title: "Ainulindalë", subtitle: "La Música de los Ainur", description: "En el principio, Ilúvatar el Único creó a los Ainur de su pensamiento. Juntos cantaron una Gran Música que dio forma a la visión del mundo.", needToKnow: ["Eru Ilúvatar es el creador supremo.", "Los Ainur son seres angelicales creados antes del mundo.", "Melkor introdujo disonancia en la Gran Música.", "La visión de la Música se convirtió en Eä, el mundo material.", "Algunos Ainur decidieron descender a Eä para darle forma."], shouldKnowAfter: ["La disonancia de Melkor no fue un error sino que fue incorporada a la Visión por Ilúvatar como parte de Su propósito.", "Incluso la maldad de Melkor fue prevista y permitida por el Creador.", "Esto sugiere que el conflicto entre el bien y el mal es fundamental al mundo, no un accidente.", "Melkor se convirtió en 'Morgoth' (El Enemigo Negro), el mayor adversario de todos."] },
  { id: 1, title: "Valaquenta", subtitle: "Historia de los Valar", description: "Los nombres y naturalezas de los Valar y los Maiar, los grandes poderes que rigen el mundo.", needToKnow: ["Los Valar son los mayores de los Ainur que entraron en Arda.", "Manwë es el Rey de Arda, señor del aire.", "Ulmo domina las aguas y Aulë es el gran forjador.", "Melkor perdió su estatus como Vala debido a su orgullo.", "Los Maiar son espíritus de menor poder que sirven a los Valar."] },
  { id: 2, title: "Quenta Silmarillion I", subtitle: "Del comienzo de los días", description: "La conformación inicial de Arda, las Primeras Guerras con Melkor y la destrucción de las Lámparas.", needToKnow: ["Los Valar dieron forma al mundo pese a los ataques de Melkor.", "Se crearon las Grandes Lámparas, Illuin y Ormal.", "Melkor destruyó las lámparas, arruinando la simetría original.", "Los Valar se retiraron a Aman, en el oeste.", "Allí fundaron el reino bendecido de Valinor."] },
  { id: 3, title: "Quenta Silmarillion II", subtitle: "De Aulë y Yavanna", description: "La creación secreta de los Enanos y el despertar de los Ents.", needToKnow: ["Aulë creó a los Enanos impaciente por tener a quién enseñar.", "Ilúvatar les dio vida verdadera, pero ordenó que durmieran hasta el Despertar de los Elfos.", "Yavanna temió por los bosques ante los futuros Enanos y Hombres.", "A petición de Yavanna, surgieron los Ents (Pastores de Árboles).", "El equilibrio entre la piedra y el bosque fue establecido."] },
  { id: 4, title: "Quenta Silmarillion III", subtitle: "Del advenimiento de los Elfos", description: "Bajo las estrellas, despiertan los Primeros Nacidos en Cuiviénen.", needToKnow: ["Los Elfos despertaron junto al lago Cuiviénen.", "Fueron encontrados primero por Melkor y luego por Oromë.", "Los Valar hicieron la guerra a Melkor para proteger a los Elfos.", "Melkor fue encadenado y llevado a Valinor.", "Los Valar invitaron a los Elfos a vivir con ellos en Aman."] },
  { id: 5, title: "Quenta Silmarillion IV", subtitle: "De Thingol y Melian", description: "Elwe Singollo se pierde en los bosques y encuentra un amor inmortal.", needToKnow: ["Elwë, líder de los Teleri, conoció a la Maia Melian en los bosques de Nan Elmoth.", "Cayeron en un profundo trance de amor.", "Muchos de su pueblo se quedaron a buscarlo, formando los Sindar.", "Elwë (Thingol) nunca llegó a Valinor.", "Fundaron el reino escondido de Doriath."] },
  { id: 6, title: "Quenta Silmarillion V", subtitle: "De Eldamar y los Príncipes", description: "Los Elfos que llegaron a Valinor fundan sus ciudades en la luz de los Árboles.", needToKnow: ["Los Vanyar, Noldor y parte de los Teleri llegaron a Aman.", "Construyeron la ciudad de Tirion y el puerto de Alqualondë.", "Finwë gobernaba a los Noldor.", "Olwë, hermano de Thingol, lideraba a los Teleri.", "Los Elfos prosperaron en conocimiento y arte bajo la tutela de los Valar."] },
  { id: 7, title: "Quenta Silmarillion VI", subtitle: "De Fëanor", description: "Nace el más grande y trágico de los Elfos, y se siembra la discordia en la casa de Finwë.", needToKnow: ["Fëanor nació de Míriel, quien murió de cansancio al darle a luz.", "Finwë volvió a casarse con Indis y tuvo a Fingolfin y Finarfin.", "Fëanor se convirtió en el herrero y erudito más talentoso.", "Inventó las letras Tengwar.", "La relación entre Fëanor y sus medios hermanos era tensa."] },
  { id: 8, title: "Quenta Silmarillion VII", subtitle: "De los Silmarils", description: "Fëanor encierra la luz de los Dos Árboles en tres joyas inigualables.", needToKnow: ["Fëanor forjó los tres Silmarils.", "Estas joyas contenían la luz pura de Laurelin y Telperion.", "Melkor, liberado de sus cadenas, empezó a codiciar las joyas.", "Esparció mentiras para enemistar a los Noldor con los Valar.", "Fëanor desenvainó su espada contra Fingolfin y fue exiliado."], shouldKnowAfter: ["La creación de los Silmarils, aunque hermosa, fue lo que atrajo la atención de Morgoth.", "El orgullo de Fëanor en su obra lo hizo vulnerable a la manipulación de Morgoth.", "Este es el momento en que la tragedia de los Elfos realmente comienza.", "El juramento de recuperar los Silmarils traerá infinito dolor a los Noldor durante edades."] },
  { id: 9, title: "Quenta Silmarillion VIII", subtitle: "Del oscurecimiento de Valinor", description: "La venganza de Melkor trae la oscuridad al Reino Bendecido.", needToKnow: ["Melkor se alió con Ungoliant, una criatura en forma de araña gigante.", "Juntos destruyeron los Dos Árboles de Valinor.", "Oscuridad total cayó sobre Aman.", "Melkor asesinó al Rey Finwë en Formenos.", "Melkor robó los Silmarils y huyó hacia la Tierra Media."] },
  { id: 10, title: "Quenta Silmarillion IX", subtitle: "De la huida de los Noldor", description: "El Juramento de Fëanor y la rebelión contra los Valar.", needToKnow: ["Fëanor maldijo a Melkor llamándolo 'Morgoth'.", "Él y sus siete hijos hicieron un juramento inquebrantable de recuperar las joyas.", "Los Noldor se rebelaron y abandonaron Valinor.", "Ocurrió la Matanza de los Hermanos en Alqualondë por robar los barcos.", "El Hado de Mandos profetizó dolor y traición para los exiliados."], shouldKnowAfter: ["El Juramento de Fëanor es solemne y maldito - sus palabras en realidad tienen poder mágico.", "Los siete hijos de Fëanor están ahora vinculados a este juramento irromible.", "Matar a sus propios hermanos (los Teleri) en Alqualondë fue el primer crimen gracias al juramento.", "Mandos no predijo simplemente - su Hado es una maldición que se cumplirá sin remedio.", "Este es el momento definitivo en que los Noldor se condenan a sí mismos al exilio y al sufrimiento."] },
  { id: 11, title: "Quenta Silmarillion X", subtitle: "De los Sindar", description: "Mientras los Elfos de Valinor prosperaban, Beleriand se preparaba bajo las estrellas.", needToKnow: ["Thingol y Melian gobernaban a los Sindar (Elfos Grises) en Beleriand.", "Melian creó un cerco mágico (la Cintura de Melian) para proteger Doriath.", "Los Enanos forjaron armas para Thingol.", "Los Orcos comenzaron a multiplicarse en la Tierra Media.", "Los Sindar desarrollaron su propia lengua y cultura."] },
  { id: 12, title: "Quenta Silmarillion XI", subtitle: "Del Sol y la Luna", description: "La última flor y el último fruto de los Árboles traen nueva luz al mundo.", needToKnow: ["Los Valar lograron rescatar una flor de Telperion y un fruto de Laurelin.", "Arien guio al Sol y Tilion a la Luna.", "Morgoth se ocultó en las profundidades de Angband ante la nueva luz.", "El inicio de los Años del Sol marcó un cambio de era.", "Se despertaron nuevas formas de vida en la Tierra Media."] },
  { id: 13, title: "Quenta Silmarillion XII", subtitle: "De los Hombres", description: "Con la salida del Sol, despiertan los Segundos Nacidos en Hildórien.", needToKnow: ["Los Hombres, el pueblo menor de Eru, despertaron en el este.", "Tienen el don (o maldición) de la mortalidad.", "Su destino no está ligado a Arda como el de los Elfos.", "Morgoth pronto encontró a los Hombres y sembró el miedo entre ellos.", "Algunos Hombres empezaron a migrar hacia el oeste."] },
  { id: 14, title: "Quenta Silmarillion XIII", subtitle: "De la vuelta de los Noldor", description: "Los exiliados llegan a Beleriand y la guerra se enciende.", needToKnow: ["Fëanor murió en batalla poco después de llegar a Beleriand.", "Fingolfin y su hueste cruzaron el peligroso hielo crujiente del Helcaraxë.", "Maedhros (hijo de Fëanor) fue capturado por Morgoth.", "Fingon rescató a Maedhros de Thangorodrim.", "Los Noldor establecieron sus reinos rodeando la fortaleza de Morgoth."] },
  { id: 15, title: "Quenta Silmarillion XIV", subtitle: "De Beleriand y sus Reinos", description: "La geografía política de las tierras del norte donde se librarán las grandes batallas.", needToKnow: ["Fingolfin gobernaba Hithlum en el noroeste.", "Los hijos de Fëanor protegían la frontera oriental.", "Finrod fundó Nargothrond en el sur.", "Turgon descubrió el valle oculto de Tumladen.", "Doriath se mantenía aislado bajo la protección de Melian."] },
  { id: 16, title: "Quenta Silmarillion XV", subtitle: "De los Noldor en Beleriand", description: "Cuatrocientos años de paz armada durante el Sitio de Angband.", needToKnow: ["Turgon construyó en secreto la gloriosa ciudad de Gondolin.", "Finrod se hizo amigo de los primeros Hombres que llegaron a Beleriand.", "Galadriel vivió en Doriath aprendiendo de Melian.", "Glaurung, el primer dragón, hizo una aparición prematura y fue repelido.", "Fue una época de esplendor y esperanza cautelosa."] },
  { id: 17, title: "Quenta Silmarillion XVI", subtitle: "De Maeglin", description: "Traición y oscuridad nacen del amor prohibido de Eöl.", needToKnow: ["Aredhel, hermana de Turgon, se perdió en los bosques.", "Se casó con Eöl el Elfo Oscuro y tuvieron a Maeglin.", "Aredhel y Maeglin huyeron a Gondolin.", "Eöl los persiguió y asesinó accidentalmente a Aredhel.", "Maeglin se crió en Gondolin, con semillas de amargura en su corazón."] },
  { id: 18, title: "Quenta Silmarillion XVII", subtitle: "Del advenimiento de los Hombres", description: "Los Edain llegan a Beleriand y se alían con los Reyes Elfos.", needToKnow: ["Los Edain eran las Tres Casas de los Hombres amigos de los Elfos.", "La Casa de Bëor se alió con Finrod.", "La Casa de Haleth se asentó en el bosque de Brethil.", "La Casa de Hador se alió con Fingolfin.", "Demostraron ser guerreros valientes, aunque de vida efímera."] },
  { id: 19, title: "Quenta Silmarillion XVIII", subtitle: "De la ruina de Beleriand", description: "El asedio se rompe en ríos de fuego durante la Batalla de la Llama Súbita.", needToKnow: ["Morgoth rompió el sitio de Angband en la Dagor Bragollach.", "Ríos de fuego destruyeron las llanuras verdes.", "Fingolfin, desesperado, retó a Morgoth a combate singular.", "Fingolfin hirió a Morgoth siete veces antes de caer.", "La alianza de los Elfos quedó fragmentada."] },
  { id: 20, title: "Quenta Silmarillion XIX", subtitle: "De Beren y Lúthien", description: "La más grande historia de amor de la Primera Edad, de mortales y elfos, y de una joya robada a la oscuridad.", needToKnow: ["Beren, un Hombre proscrito, se enamoró de Lúthien, princesa Elfa.", "Thingol exigió un Silmaril como precio por la mano de su hija.", "Finrod murió protegiendo a Beren.", "Beren y Lúthien lograron arrebatar un Silmaril de la corona de Morgoth.", "Lúthien eligió volverse mortal para compartir el destino de Beren."], shouldKnowAfter: ["Beren y Lúthien fueron los únicos que lograron recuperar un Silmaril de las manos de Morgoth.", "Su victoria probó que incluso el poder de Morgoth podía ser desafiado.", "Lúthien abandonó su inmortalidad y se convirtió en la primera Elfa en elegir la mortalidad de los Hombres.", "Eöl, el padre de Maeglin, obtuvo el Silmaril de sus manos y lo perdió a los Enanos, iniciando una cadena de tragedias.", "El amor entre Beren y Lúthien es la única historia de redención en la Primera Edad."] },
  { id: 21, title: "Quenta Silmarillion XX", subtitle: "De la quinta Batalla", description: "La Nirnaeth Arnoediad, la Batalla de las Lágrimas Innumerables.", needToKnow: ["Maedhros organizó una gran unión de Elfos, Hombres y Enanos.", "Una traición de los Hombres del Este arruinó la victoria inminente.", "Glaurung y los Balrogs destrozaron las huestes élficas.", "Húrin cubrió la retirada de Turgon hacia Gondolin.", "Morgoth logró el dominio casi total del norte de Beleriand."] },
  { id: 22, title: "Quenta Silmarillion XXI", subtitle: "De Túrin Turambar", description: "El hijo de Húrin lucha contra la maldición de Morgoth y el dragón Glaurung.", needToKnow: ["Morgoth maldijo a la familia de Húrin.", "Túrin fue un gran guerrero, pero la tragedia le seguía.", "Provocó la caída de Nargothrond.", "Logró matar a Glaurung, el padre de los dragones.", "Se suicidó tras descubrir que se había casado con su propia hermana bajo el hechizo del dragón."] },
  { id: 23, title: "Quenta Silmarillion XXII", subtitle: "De la ruina de Doriath", description: "La codicia por el Silmaril destruye el Reino Escondido.", needToKnow: ["Los Enanos asesinaron a Thingol por el collar Nauglamír y el Silmaril.", "Doriath fue saqueada, aunque Beren recuperó la joya temporalmente.", "Melian abandonó la Tierra Media en su dolor.", "Más tarde, los Hijos de Fëanor atacaron Doriath para recuperar el Silmaril.", "Doriath fue destruida para siempre."] },
  { id: 24, title: "Quenta Silmarillion XXIII", subtitle: "De Tuor y la Caída de Gondolin", description: "La última fortaleza de los Noldor es traicionada desde dentro, pero de sus cenizas nace una estrella.", needToKnow: ["Tuor, un Hombre mortal, fue guiado por Ulmo a Gondolin.", "Se casó con Idril, hija de Turgon, y tuvieron a Eärendil.", "Maeglin traicionó a Gondolin revelando su ubicación a Morgoth.", "La ciudad cayó en una batalla épica con dragones y Balrogs.", "Tuor, Idril y Eärendil escaparon hacia el mar."] }
];

export const charactersData: Character[] = [
  { id: "iluvatar", name: "Eru Ilúvatar", race: "Eru", alignment: "good", role: "El Único, fuente de todo ser", description: "El Ser Supremo que creó a los Ainur y propuso los Grandes Temas de la Música.", importance: "CRITICAL", firstChapter: 0, relationships: [], locations: ["Timeless Halls"], events: ["La creación de los Ainur", "La Música de los Ainur"], greatTales: [] },
  { id: "manwe", name: "Manwë", race: "Vala", alignment: "good", role: "Rey de Arda, Señor de los Vientos", description: "El más querido por Ilúvatar, comprende mejor que nadie sus propósitos.", importance: "CRITICAL", firstChapter: 0, relationships: [{characterId: "varda", type: "spouse"}], locations: ["Valinor", "Taniquetil"], events: ["Descenso a Arda"], greatTales: [] },
  { id: "melkor", name: "Melkor / Morgoth", aliases: ["Melkor", "Morgoth", "El Enemigo", "El Señor Oscuro"], race: "Vala corrompido", alignment: "evil", role: "Señor Oscuro, el más poderoso de los Ainur", description: "El que se alzó en orgullo, deseando crear cosas propias, y trajo el mal al mundo.", details: "Melkor fue uno de los Valar, pero su orgullo lo corrompió. Deseaba ser como Ilúvatar y crear cosas por su cuenta. Introdujo la discordia en la Música de los Ainur y desde entonces sembró el caos en Arda. Después de robarse los Silmarils, se convirtió en Morgoth, el Señor Oscuro, y desde su fortaleza de Angband atormentó a Elfos y Hombres durante las primeras edades.", titles: [{chapter: 0, text: "Vala"}, {chapter: 9, text: "Señor Oscuro"}, {chapter: 9, text: "El Enemigo"}], notableDeeds: [{chapter: 0, text: "Introdujo la discordia en la Música"}, {chapter: 2, text: "Destruyó las Lámparas de los Valar"}, {chapter: 9, text: "Robó los Silmarils"}, {chapter: 14, text: "Encadenó a Maedhros"}, {chapter: 22, text: "Maldijo a la casa de Húrin"}], importance: "CRITICAL", firstChapter: 0, relationships: [], locations: ["Utumno", "Angband"], events: ["La Discordia en la Música", "Destrucción de las Lámparas", "Robo de los Silmarils"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "varda", name: "Varda", race: "Vala", alignment: "good", role: "Reina de las Estrellas", description: "La más reverenciada por los Elfos, hacedora de las estrellas.", importance: "HIGH", firstChapter: 0, relationships: [{characterId: "manwe", type: "spouse"}], locations: ["Valinor"], events: ["Creación de las estrellas"], greatTales: [] },
  { id: "aule", name: "Aulë", race: "Vala", alignment: "good", role: "Forjador, creador de los Enanos", description: "Señor de las sustancias de las que está hecha la tierra.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "yavanna", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Enanos"], greatTales: [] },
  { id: "yavanna", name: "Yavanna", race: "Vala", alignment: "good", role: "Dadora de Frutos", description: "Amante de todas las cosas que crecen en la tierra.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "aule", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Dos Árboles", "Petición de los Ents"], greatTales: [] },
  { id: "ulmo", name: "Ulmo", race: "Vala", alignment: "good", role: "Señor de las Aguas", description: "Vive en el Océano Exterior y ama a los Elfos y los Hombres, guiándolos en secreto.", importance: "HIGH", firstChapter: 1, relationships: [], locations: ["Ekkaia"], events: ["Guía a Turgon", "Guía a Tuor"], greatTales: ["fall-gondolin", "earendil"] },
  { id: "finwe", name: "Finwë", race: "Elfo Noldor", alignment: "good", role: "Primer Rey de los Noldor", description: "Lideró a su pueblo a Valinor, su asesinato precipitó la rebelión de los Noldor.", importance: "HIGH", firstChapter: 4, relationships: [{characterId: "feanor", type: "child"}, {characterId: "fingolfin", type: "child"}, {characterId: "finarfin", type: "child"}], locations: ["Valinor", "Tirion"], events: ["Llegada a Valinor", "Asesinato en Formenos"], greatTales: [] },
  { id: "thingol", name: "Elwë / Thingol", aliases: ["Elwë", "Thingol", "Singollo"], race: "Elfo Sindar", alignment: "good", role: "Rey de Doriath", description: "Vio la Luz de los Árboles pero se quedó en la Tierra Media por amor.", details: "Elwë era uno de los líderes de los Teleri, pero se perdió en los bosques de la Tierra Media y encontró a la Maia Melian. Su amor fue tan profundo que optó por quedarse con ella en lugar de viajar a Aman. Así fundó el reino de Doriath en los bosques centrales de Beleriand. Con la ayuda de la magia de Melian, Doriath se convirtió en un refugio de paz y sabiduría, pero también cayó bajo la maldición de los Silmarils.", titles: [{chapter: 5, text: "Rey de Doriath"}, {chapter: 5, text: "Señor de los Sindar"}, {chapter: 5, text: "El Gris"}], notableDeeds: [{chapter: 5, text: "Encontró a Melian y fundó Doriath"}, {chapter: 15, text: "Protegió Beleriand con la Cintura de Melian"}, {chapter: 20, text: "Exigió un Silmaril como dote de Lúthien"}, {chapter: 23, text: "Rechazó a los Hijos de Fëanor"}], importance: "CRITICAL", firstChapter: 5, lastChapter: 23, deathInfo: { chapter: 23, description: "Asesinado por los Enanos que deseaban el collar Nauglamír y el Silmaril que poseía." }, relationships: [{characterId: "melian", type: "spouse"}, {characterId: "luthien", type: "child"}], locations: ["Doriath", "Menegroth"], events: ["Encuentro con Melian", "Demanda del Silmaril"], greatTales: ["beren-luthien"] },
  { id: "melian", name: "Melian", race: "Maia", alignment: "good", role: "Reina de Doriath", description: "Espíritu de gran poder que protegió su reino con una cintura de encantamiento.", importance: "HIGH", firstChapter: 5, relationships: [{characterId: "thingol", type: "spouse"}, {characterId: "luthien", type: "child"}], locations: ["Doriath"], events: ["La Cintura de Melian"], greatTales: ["beren-luthien"] },
  { id: "luthien", name: "Lúthien Tinúviel", aliases: ["Lúthien", "Tinúviel", "Nightingale"], race: "Elfo/Maia", alignment: "good", role: "Hija de Thingol y Melian", description: "La más hermosa de todos los Hijos de Ilúvatar.", details: "Lúthien fue la más hermosa de todas las criaturas vivientes. Hija de Thingol, Rey de Doriath, y Melian, una Maia, combinó lo mejor de ambos mundos. Se enamoró de Beren, un mortal proscrito, y desafió a su padre para casarse con él. Juntos lograron arrebatar un Silmaril de la corona de Morgoth, una hazaña que nadie creía posible. En el acto final de su amor, Lúthien eligió volverse mortal para compartir el breve destino de Beren.", titles: [{chapter: 5, text: "Princesa de Doriath"}, {chapter: 5, text: "La Más Hermosa"}, {chapter: 5, text: "Bailadora de los Bosques"}], notableDeeds: [{chapter: 20, text: "Se enamoró de Beren el mortal"}, {chapter: 20, text: "Hizo dormir a Morgoth con su magia"}, {chapter: 20, text: "Logró arrebatar un Silmaril"}, {chapter: 20, text: "Renunció a la inmortalidad por amor"}], importance: "CRITICAL", firstChapter: 5, relationships: [{characterId: "beren", type: "spouse"}, {characterId: "thingol", type: "father"}, {characterId: "melian", type: "mother"}], locations: ["Doriath", "Tol Galen"], events: ["Robo del Silmaril", "Renuncia a la inmortalidad"], greatTales: ["beren-luthien"] },
  { id: "feanor", name: "Fëanor", aliases: ["Fëanor", "Phëanor"], race: "Elfo Noldor", alignment: "neutral", role: "Creador de los Silmarils", description: "Su ardiente espíritu consumió su vida. Hacedor de grandes obras y de grandes males.", details: "Fëanor fue el más dotado de los Noldor en arte e ingenio. Creó las tres Silmarils, joyas que capturaban la luz pura de los Dos Árboles de Valinor. Su obsesión con estas gemas lo llevó a hacer un terrible juramento: recuperarlas cueste lo que cueste. Aunque su rebelión contra los Valar fue condenada, su legado fue la fuerza que sostuvo la resistencia élfica en la Tierra Media.", titles: [{chapter: 7, text: "El Gran Forjador"}, {chapter: 8, text: "Creador de los Silmarils"}, {chapter: 9, text: "Rey de los Noldor"}], notableDeeds: [{chapter: 7, text: "Inventó los Tengwar (letras élficas)"}, {chapter: 8, text: "Forjó los tres Silmarils"}, {chapter: 9, text: "Pronunció el Juramento de Fëanor"}, {chapter: 9, text: "Lideró la rebelión de los Noldor"}], importance: "CRITICAL", firstChapter: 7, deathInfo: { chapter: 10, description: "Murió a causa de heridas de batalla poco después de llegar a Beleriand, consumido por su fervor obsesivo." }, relationships: [{characterId: "finwe", type: "father"}], locations: ["Valinor", "Formenos", "Losgar"], events: ["Creación de los Silmarils", "Juramento de Fëanor", "Muerte en la Dagor-nuin-Giliath"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "fingolfin", name: "Fingolfin", aliases: ["Fingolfin", "Aran Gwarth"], race: "Elfo Noldor", alignment: "good", role: "Rey Supremo de los Noldor en el exilio", description: "Valeroso rey que cruzó el hielo y desafió a Morgoth a duelo singular.", details: "Fingolfin fue el medio hermano de Fëanor y rey de los Noldor después de la muerte de su padre Finwë. Aunque no fue el principal instigador de la rebelión, cruzó el peligroso Helcaraxë con su pueblo para entrar en la Tierra Media. Durante el Sitio de Angband, fue el único que se atrevió a retar a Morgoth a combate singular. En ese duelo épico, hirió al Señor Oscuro siete veces antes de caer, una hazaña nunca olvidada.", titles: [{chapter: 10, text: "Señor de los Noldor"}, {chapter: 14, text: "Rey de Hithlum"}, {chapter: 19, text: "El Valeroso"}], notableDeeds: [{chapter: 10, text: "Cruzó el Helcaraxë con su pueblo"}, {chapter: 14, text: "Estableció los reinos de Beleriand"}, {chapter: 19, text: "Retó a Morgoth en duelo singular"}, {chapter: 19, text: "Hirió siete veces al Señor Oscuro"}], importance: "CRITICAL", firstChapter: 7, lastChapter: 19, deathInfo: { chapter: 19, description: "Murió en duelo singular contra Morgoth. Hirió al Señor Oscuro siete veces, pero fue abatido.", killer: "melkor" }, relationships: [{characterId: "finwe", type: "father"}], locations: ["Hithlum"], events: ["El cruce del Helcaraxë", "Duelo con Morgoth"], greatTales: [] },
  { id: "finarfin", name: "Finarfin", race: "Elfo Noldor", alignment: "good", role: "Rey de los Noldor en Aman", description: "El único de los hijos de Finwë que regresó al arrepentirse de la rebelión.", importance: "MEDIUM", firstChapter: 7, relationships: [{characterId: "finwe", type: "father"}, {characterId: "galadriel", type: "child"}], locations: ["Tirion"], events: ["Arrepentimiento de Finarfin"], greatTales: [] },
  { id: "galadriel", name: "Galadriel", aliases: ["Galadriel", "Alatáriel"], race: "Elfo Noldor", alignment: "good", role: "Una de los líderes de la rebelión", description: "Deseaba ver la Tierra Media y gobernar un reino allí.", importance: "HIGH", firstChapter: 7, relationships: [{characterId: "finarfin", type: "father"}], locations: ["Doriath", "Nargothrond"], events: ["El cruce del Helcaraxë"], greatTales: [] },
  { id: "beren", name: "Beren Erchamion", aliases: ["Beren", "Erchamion"], race: "Hombre", alignment: "good", role: "El único mortal amado por un Elfo en la Primera Edad", description: "Proscrito valeroso que logró lo imposible por amor.", details: "Beren fue el hijo de Barahir, un mortal que luchó contra Morgoth. Proscrito y perseguido por el Señor Oscuro, fue el primer hombre que llegó a Doriath en los Años del Sol. Allí conoció a Lúthien, la hija del Rey Thingol, y se enamoraron profundamente. Cuando Thingol exigió un Silmaril como prueba de su amor, Beren aceptó esta misión imposible. Con la ayuda de Lúthien, logró lo que nadie creía posible: arrebatar un Silmaril de la mismísima corona de Morgoth.", titles: [{chapter: 20, text: "El Proscrito"}, {chapter: 20, text: "Portador del Silmaril"}, {chapter: 20, text: "El Valiente"}], notableDeeds: [{chapter: 20, text: "Ganó el amor de una Princesa Elfa"}, {chapter: 20, text: "Se enfrentó a Glaurung el dragón"}, {chapter: 20, text: "Logró arrebatar un Silmaril de Morgoth"}, {chapter: 24, text: "Su hijo fue Eärendil el Marinero"}], importance: "CRITICAL", firstChapter: 20, relationships: [{characterId: "luthien", type: "spouse"}], locations: ["Dorthonion", "Doriath", "Angband"], events: ["Búsqueda del Silmaril"], greatTales: ["beren-luthien"] },
  { id: "turin", name: "Túrin Turambar", aliases: ["Túrin", "Turambar", "Mormegil"], race: "Hombre", alignment: "neutral", role: "Portador de la maldición de Morgoth", description: "Trágico héroe humano. Matador de Glaurung.", details: "Túrin fue el hijo de Húrin, maldecido por Morgoth. Aunque fue un guerrero valiente y dotado, todo lo que tocaba se convertía en tragedia. Fue capturado en la Nirnaeth Arnoediad pero escapó. Luego llegó a Nargothrond, donde su orgullo causó la caída del reino. Su mayor logro fue matar a Glaurung, el padre de los dragones, pero el dragón vengador lo maldijo con un hechizo que lo llevó a casarse con su propia hermana sin saberlo. Cuando descubrió la verdad, su desesperación lo llevó al suicidio.", titles: [{chapter: 22, text: "Portador de la Maldición"}, {chapter: 22, text: "El Guerrero Negro"}, {chapter: 22, text: "Matador de Glaurung"}], notableDeeds: [{chapter: 22, text: "Fue el guerrero más temido de su tiempo"}, {chapter: 22, text: "Su espada era legendaria"}, {chapter: 22, text: "Defendió Nargothrond"}, {chapter: 22, text: "Mató a Glaurung el dragón"}], importance: "CRITICAL", firstChapter: 22, deathInfo: { chapter: 22, description: "Se suicidó con su propia espada al descubrir que se había casado con su hermana bajo el hechizo de Glaurung." }, relationships: [], locations: ["Doriath", "Nargothrond", "Brethil"], events: ["Caída de Nargothrond", "Muerte de Glaurung"], greatTales: ["turin"] },
  { id: "earendil", name: "Eärendil", aliases: ["Eärendil", "El Marinero Estrella"], race: "Medio-elfo", alignment: "good", role: "El marinero estrella", description: "Navegó a Valinor para pedir ayuda a los Valar por las Dos Razas.", details: "Eärendil fue el hijo de Tuor y la princesa elfa Idril, nacido en Gondolin. Cuando la ciudad cayó ante Morgoth, escapó con sus padres y el Silmaril recuperado de Beren y Lúthien. Intentó viajar a Valinor en un barco mágico para implorar a los Valar que fueran en ayuda de Elfos y Hombres. Los Valar le concedieron esta misión, colocando el Silmaril en su frente como una estrella brillante. Se convirtió en Gil-Eärendil, la Estrella de la Mañana, visible en el cielo nocturno de Arda para siempre, símbolo de esperanza.", titles: [{chapter: 24, text: "El Marinero Estrella"}, {chapter: 24, text: "Portador del Silmaril"}, {chapter: 24, text: "Mensajero de los Valar"}], notableDeeds: [{chapter: 24, text: "Escapó de la caída de Gondolin"}, {chapter: 24, text: "Viajó a Valinor contra toda probabilidad"}, {chapter: 24, text: "Dio inicio a la Guerra de la Cólera"}, {chapter: 24, text: "Se convirtió en una estrella eternal"}], importance: "CRITICAL", firstChapter: 24, relationships: [], locations: ["Gondolin", "Puertos del Sirion"], events: ["Navegación a Aman", "Guerra de la Cólera"], greatTales: ["fall-gondolin", "earendil"] }
];

export const locationsData: Location[] = [
  { id: "valinor", name: "Valinor", description: "El Reino Bendecido en el continente de Aman, hogar de los Valar y los Elfos de la Luz.", importance: "CRITICAL", type: "Realm", region: "Aman", status: "Active", firstChapter: 1, lat: 20, lng: -60, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo"], relatedEvents: ["t1", "t2", "t7"], greatTales: [] },
  { id: "angband", name: "Angband", description: "La fortaleza secundaria y luego principal de Morgoth en el norte de Beleriand.", importance: "CRITICAL", type: "Fortress", region: "Beleriand", status: "Active", firstChapter: 3, lat: 75, lng: -20, ruler: { characterId: "melkor", period: "Capítulos 3-24" }, relatedCharacters: ["melkor", "beren", "luthien", "turin"], relatedEvents: ["t12", "t13"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "doriath", name: "Doriath", aliases: ["El Reino Escondido", "Menegroth"], description: "El Reino Escondido de Thingol y Melian en los bosques centrales de Beleriand.", importance: "CRITICAL", type: "Kingdom", region: "Beleriand", status: "Destroyed", lastChapter: 23, firstChapter: 5, ruler: { characterId: "thingol", period: "Capítulos 5-23" }, relatedCharacters: ["thingol", "melian", "luthien", "beren"], relatedEvents: ["t4", "t16"], lat: 50, lng: 20, greatTales: ["beren-luthien"] },
  { id: "tirion", name: "Tirion", description: "La gran ciudad de los Elfos Noldor y Vanyar sobre la colina de Túna en Aman.", importance: "HIGH", type: "City", region: "Aman", status: "Active", firstChapter: 6, lat: 15, lng: -55, relatedCharacters: ["feanor", "fingolfin", "finarfin"], relatedEvents: ["t6", "t8"], greatTales: [] },
  { id: "formenos", name: "Formenos", description: "Fortaleza de Fëanor en el norte de Valinor.", importance: "MEDIUM", type: "Fortress", region: "Aman", status: "Destroyed", firstChapter: 8, lat: 25, lng: -58, relatedCharacters: ["feanor", "finwe"], relatedEvents: ["t7"], greatTales: [] },
  { id: "helcaraxe", name: "Helcaraxë", description: "El Hielo Crujiente, el estrecho estrecho en el extremo norte que conectaba Aman y la Tierra Media.", importance: "HIGH", type: "Other", region: "Mar", status: "Legendary", firstChapter: 14, lat: 90, lng: -60, relatedCharacters: ["fingolfin", "finarfin", "galadriel"], relatedEvents: ["t8"], greatTales: [] },
  { id: "hithlum", name: "Hithlum", description: "Región del norte de Beleriand, feudo principal de Fingolfin y los Altos Reyes.", importance: "HIGH", type: "Region", region: "Beleriand", status: "Destroyed", firstChapter: 15, lat: 70, lng: -40, ruler: { characterId: "fingolfin", period: "Capítulos 15-19" }, relatedCharacters: ["fingolfin"], relatedEvents: ["t12"], greatTales: [] },
  { id: "nargothrond", name: "Nargothrond", aliases: ["Fortaleza de Narog", "Castillo Subterráneo"], description: "Reino subterráneo fundado por Finrod Felagund cerca del río Narog.", importance: "HIGH", type: "Fortress", region: "Beleriand", status: "Destroyed", lastChapter: 22, firstChapter: 15, relatedCharacters: ["turin"], relatedEvents: ["t15"], lat: 35, lng: -50, greatTales: ["turin"] },
  { id: "gondolin", name: "Gondolin", aliases: ["La Ciudad Oculta", "Roca Oculta", "Ciudad de Turgon"], description: "La Ciudad Oculta de Turgon, rodeada por las Montañas Circundantes.", importance: "CRITICAL", type: "City", region: "Beleriand", status: "Destroyed", lastChapter: 24, firstChapter: 16, relatedCharacters: ["earendil", "tuor", "idril"], relatedEvents: ["t11", "t17"], lat: 55, lng: -15, greatTales: ["fall-gondolin"] },
  { id: "tolgalen", name: "Tol Galen", description: "La Isla Verde en Adurant, donde vivieron Beren y Lúthien.", importance: "MEDIUM", type: "Other", region: "Beleriand", status: "Legendary", firstChapter: 20, lat: 30, lng: 10, relatedCharacters: ["beren", "luthien"], relatedEvents: ["t13"], greatTales: ["beren-luthien"] },
  { id: "brethil", name: "Brethil", description: "El bosque de los Hombres de Haleth, escenario del fin trágico de Túrin.", importance: "MEDIUM", type: "Forest", region: "Beleriand", status: "Active", firstChapter: 18, lat: 40, lng: -10, relatedCharacters: ["turin"], relatedEvents: ["t15"], greatTales: ["turin"] }
];

export const timelineData: TimelineEvent[] = [
  { id: "t1", year: "Antes de los Días", title: "La Música de los Ainur", description: "Eru y los Ainur cantan la Gran Música, esbozando la historia de Arda.", importance: "CRITICAL", category: "Creation", firstChapter: 0, relatedCharacters: ["iluvatar", "manwe", "melkor"] },
  { id: "t2", year: "Años de las Lámparas", title: "Entrada de los Valar", description: "Los Valar descienden a Arda para darle forma.", importance: "CRITICAL", category: "Creation", firstChapter: 1, relatedCharacters: ["manwe", "varda", "aule", "yavanna"] },
  { id: "t3", year: "Años de las Lámparas", title: "Destrucción de las Lámparas", description: "Melkor destruye Illuin y Ormal. Los Valar se mudan a Aman.", importance: "CRITICAL", category: "Destruction", firstChapter: 2, relatedCharacters: ["melkor"], relatedLocations: ["valinor"] },
  { id: "t4", year: "Años de los Árboles", title: "Despertar de los Elfos", description: "Los Primeros Nacidos despiertan junto a Cuiviénen.", importance: "CRITICAL", category: "Birth", firstChapter: 4 },
  { id: "t5", year: "Años de los Árboles", title: "Nacimiento de Fëanor", description: "Nace el más dotado de los Noldor; muerte de Míriel.", importance: "HIGH", category: "Birth", firstChapter: 7, relatedCharacters: ["feanor", "finwe"] },
  { id: "t6", year: "Años de los Árboles", title: "Forja de los Silmarils", description: "Fëanor captura la luz de los Dos Árboles en tres grandes joyas.", importance: "CRITICAL", category: "Creation", firstChapter: 8, relatedCharacters: ["feanor"] },
  { id: "t7", year: "Años de los Árboles", title: "Oscurecimiento de Valinor", description: "Melkor y Ungoliant destruyen los Árboles y roban los Silmarils.", importance: "CRITICAL", category: "Destruction", firstChapter: 9, relatedCharacters: ["melkor"], relatedLocations: ["valinor"] },
  { id: "t8", year: "Años de los Árboles", title: "Vuelo de los Noldor", description: "Rebelión de Fëanor y matanza de Alqualondë.", importance: "HIGH", category: "Oath", firstChapter: 10, relatedCharacters: ["feanor", "fingolfin", "finarfin"] },
  { id: "t9", year: "Años del Sol, 1", title: "Primera salida del Sol", description: "Despertar de los Hombres en el este.", importance: "HIGH", category: "Birth", firstChapter: 12 },
  { id: "t10", year: "Años del Sol, 60", title: "Batalla Gloriosa", description: "Victoria élfica y comienzo del Sitio de Angband.", importance: "HIGH", category: "Battle", firstChapter: 15, relatedLocations: ["angband"] },
  { id: "t11", year: "Años del Sol, 116", title: "Terminación de Gondolin", description: "Turgon completa la ciudad oculta.", importance: "HIGH", category: "Creation", firstChapter: 16, relatedLocations: ["gondolin"] },
  { id: "t12", year: "Años del Sol, 455", title: "Dagor Bragollach", description: "Ruina del sitio de Angband y muerte de Fingolfin.", importance: "CRITICAL", category: "Battle", firstChapter: 19, relatedCharacters: ["fingolfin", "melkor"], relatedLocations: ["angband"], greatTaleId: "" },
  { id: "t13", year: "Años del Sol, 466", title: "La Búsqueda del Silmaril", description: "Beren y Lúthien recuperan un Silmaril; muerte de Finrod.", importance: "CRITICAL", category: "Journey", firstChapter: 20, relatedCharacters: ["beren", "luthien"], greatTaleId: "beren-luthien" },
  { id: "t14", year: "Años del Sol, 472", title: "Nirnaeth Arnoediad", description: "Desastrosa derrota de la alianza de elfos y hombres.", importance: "CRITICAL", category: "Battle", firstChapter: 21, relatedLocations: ["beleriand"] },
  { id: "t15", year: "Años del Sol, 495", title: "Caída de Nargothrond", description: "Glaurung destruye el reino subterráneo debido al orgullo de Túrin.", importance: "HIGH", category: "Destruction", firstChapter: 22, relatedCharacters: ["turin"], relatedLocations: ["nargothrond"], greatTaleId: "turin" },
  { id: "t16", year: "Años del Sol, 503", title: "Muerte de Thingol", description: "Ruina de Doriath a manos de los Enanos.", importance: "HIGH", category: "Death", firstChapter: 23, relatedCharacters: ["thingol"], relatedLocations: ["doriath"] },
  { id: "t17", year: "Años del Sol, 510", title: "Caída de Gondolin", description: "Morgoth destruye el último gran reino noldorin.", importance: "CRITICAL", category: "Destruction", firstChapter: 24, relatedCharacters: ["melkor", "earendil"], relatedLocations: ["gondolin"], greatTaleId: "fall-gondolin" }
];

export const greatTalesData: GreatTale[] = [
  {
    id: "beren-luthien",
    title: "Beren y Lúthien",
    description: "La historia más grande de la Primera Edad: un mortal proscrito y una princesa elfa desafían a Morgoth mismo. Su amor es tan poderoso que trasciende la frontera entre razas, y juntos logran arrebatar un Silmaril de la corona del Señor Oscuro.",
    details: "Beren, perseguido y maldito, llegó a Doriath donde conoció a Lúthien, la princesa más hermosa del mundo. Su amor fue instantáneo pero imposible: Thingol exigió un Silmaril como prueba. Con ayuda de Finrod, Beren fue capturado por Morgoth, pero Lúthien lo rescató con su magia. Juntos lograron lo que nadie creía posible: arrebatar un Silmaril de la corona del Señor Oscuro. La maldición persiguió su amor, pero su legado fue inmortal. Lúthien eligió la mortalidad, y de su unión nació Eärendil, quien se convertiría en la Estrella de la Mañana.",
    protagonists: ["beren", "luthien"],
    antagonists: ["melkor"],
    keyCharacters: ["thingol", "melian", "finrod"],
    relatedLocations: ["doriath", "angband", "tolgalen"],
    relatedEvents: ["t13"],
    themes: ["love conquers all", "sacrifice", "impossible quests", "mortality vs immortality"],
    needToKnow: [
      "Thingol exige un Silmaril como dote de Lúthien",
      "Beren y Finrod son capturados pero Lúthien los rescata",
      "Logran arrebatar un Silmaril de la corona de Morgoth",
      "Lúthien elige la mortalidad para estar con Beren",
      "Su hijo Eärendil es el marinero estrella"
    ],
    afterReadingShouldKnow: [
      "El amor puede desafiar el destino, pero no lo anula completamente",
      "La maldición de Morgoth persigue incluso los actos más gloriosos",
      "La mortalidad no es debilidad: es libertad y dignidad",
      "Un Silmaril fue recuperado, pero dos permanecen perdidos en las tinieblas",
      "De esta unión nació la esperanza del mundo: Eärendil"
    ],
    startChapter: 20,
    endChapter: 20
  },
  {
    id: "turin",
    title: "Túrin Turambar",
    description: "La maldición de Morgoth sobre Húrin se cierne como una sombra sobre su hijo Túrin. A través de traiciones, batallas perdidas y amores destruidos, Túrin busca redención, solo para encontrar tragedia en su victoria final.",
    details: "Túrin fue marcado desde el nacimiento por la maldición de Morgoth sobre su padre Húrin. El Señor Oscuro juró que la familia sufriría dolor infinito. A pesar de ser un guerrero sin igual, Túrin traía consigo la maldición. En Nargothrond, su orgullo causó la caída del reino. Perseguido por Glaurung, el padre de los dragones, Túrin logró matarlo en un acto de heroísmo extremo. Pero el dragón vengador lo hechizó, causando que se casara con su propia hermana sin saberlo. Al descubrir la verdad, incapaz de soportar el horror, Túrin se suicidó. Su historia es la más trágica del Silmarillion: ni siquiera la victoria puede redimir una vida marcada por la maldición.",
    protagonists: ["turin"],
    antagonists: ["melkor"],
    keyCharacters: ["glaurung"],
    relatedLocations: ["nargothrond", "brethil", "doriath"],
    relatedEvents: ["t15"],
    themes: ["curse and fate", "warrior's honor", "internal struggle", "tragic hero"],
    needToKnow: [
      "Morgoth maldice a Húrin y su familia",
      "Túrin es un gran guerrero pero la tragedia lo persigue",
      "Causa la caída de Nargothrond con su orgullo",
      "Mata a Glaurung, el padre de los dragones",
      "Se suicida al descubrir que se casó con su hermana bajo hechizo"
    ],
    afterReadingShouldKnow: [
      "La maldición de Morgoth es más poderosa que el heroísmo individual",
      "La victoria puede venir acompañada de traición y horror",
      "Incluso los más valientes pueden ser vencidos por el destino",
      "El libre albedrío existe, pero hay fuerzas que condenan nuestras elecciones",
      "La tragedia personal de Túrin es el corazón oscuro del Silmarillion"
    ],
    startChapter: 22,
    endChapter: 22
  },
  {
    id: "fall-gondolin",
    title: "La Caída de Gondolin",
    description: "La última y más gloriosa de las ciudades elfas es traicionada desde dentro. En una batalla épica con dragones y Balrogs, Gondolin cae, pero de sus cenizas emerge una nueva esperanza en el marinero Eärendil.",
    details: "Gondolin fue construida en secreto por Turgon en un valle escondido, protegida por montañas impenetrables. Durante siglos fue un faro de belleza y poder, inexpugnable frente a los ataques de Morgoth. Pero la traición llegó desde dentro: Maeglin, ambicioso hijo de Eöl, reveló la ubicación de la ciudad al Señor Oscuro. Morgoth envió su ejército final: dragones, Balrogs, y hordas de Orcos. En la batalla resultante, la Ciudad Oculta fue destruida. Sin embargo, Tuor y su familia escaparon, llevando el Silmaril de Beren y Lúthien. Su hijo Eärendil llevaría este tesoro a Valinor como imploración final. De la ruina de Gondolin nació la guerra que finalmente derrotaría a Morgoth.",
    protagonists: ["earendil", "tuor"],
    antagonists: ["melkor", "maeglin"],
    keyCharacters: ["turgon", "idril", "ulmo"],
    relatedLocations: ["gondolin", "angband"],
    relatedEvents: ["t17"],
    themes: ["betrayal", "last stand", "redemption from ashes", "sacrifice for future"],
    needToKnow: [
      "Gondolin fue construida en secreto por Turgon",
      "Maeglin traiciona su ubicación a Morgoth",
      "Cae en un asalto con fuego y dragones",
      "Tuor y su familia escapan, llevando el Silmaril recuperado de Beren",
      "Eärendil, su hijo, navegará a Valinor para buscar ayuda"
    ],
    afterReadingShouldKnow: [
      "Incluso la ciudad más bella y protegida puede caer por traición interior",
      "La lealtad de unos (Tuor, Idril) contrarresta la traición de otros (Maeglin)",
      "De la derrota nace la esperanza: Eärendil es el resultado",
      "Morgoth logra destruir los reinos élficos, pero no puede destruir el futuro",
      "Esta es la última batalla de la Primera Edad; lo que sigue es la venganza de los Valar"
    ],
    startChapter: 24,
    endChapter: 24
  },
  {
    id: "earendil",
    title: "Eärendil el Marinero",
    description: "El último acto de la Primera Edad. Eärendil, portador de un Silmaril en su frente, navega a Valinor para implorar a los Valar. Su viaje es el preludio a la Guerra de la Cólera que finalmente derrota a Morgoth.",
    details: "Eärendil nació en Gondolin, hijo de Tuor y la princesa Idril. Cuando la ciudad cayó, escapó con sus padres llevando el Silmaril de Beren y Lúthien. Creció en los Puertos del Sirion, oyendo historias de la lucha interminable contra Morgoth. Los Años del Sol avanzaban, y la esperanza menguaba. Eärendil decidió hacer lo imposible: navegar a Valinor y implorar a los Valar que intervinieron. Contra toda probabilidad, logró llegar. Los Valar le concedieron una tarea sin precedentes: portar el Silmaril en su frente como una estrella que brilla eternamente en el cielo de Arda. Se convirtió en Gil-Eärendil, símbolo de esperanza inmortal. Su viaje marcó el fin de la Primera Edad y el comienzo de la Guerra de la Cólera que destruyó a Morgoth.",
    protagonists: ["earendil"],
    antagonists: ["melkor"],
    keyCharacters: ["tuor", "idril", "elwing", "manwe"],
    relatedLocations: ["gondolin", "valinor"],
    relatedEvents: ["t17"],
    themes: ["hope and light", "intercession", "final battle", "stars and eternity"],
    needToKnow: [
      "Eärendil porpora un Silmaril en su frente como estrella",
      "Viaja a Valinor a pesar del Prohibición sobre los Hombres",
      "Los Valar le conceden la carga de llevar la luz",
      "Se convierte en una estrella visible: Gil-Eärendil",
      "Su llegada es el señal para la Guerra de la Cólera que destruye a Morgoth"
    ],
    afterReadingShouldKnow: [
      "La esperanza puede ser forjada en el acto de sacrificio",
      "Los Valar pueden ser movidos por la fe y la desesperación de los mortales",
      "Eärendil es el punto de giro: su victoria no es personal sino cósmica",
      "Un Silmaril escapa a las tinieblas y se convierte en luz eterna",
      "La Primera Edad termina con un acto de redención que trasciende el tiempo"
    ],
    startChapter: 24,
    endChapter: 24
  }
];

export const themesData: Theme[] = [
  {
    id: "inevitable-fall",
    name: "La Caída Inevitable",
    analysis: "El orgullo y la obsesión llevan invariablemente a la ruina. Fëanor, Túrin, Thingol: todos cayeron por sus propios defectos. Morgoth mismo, en su orgullo, no pudo imaginar que sería derrotado. El Silmarillion sugiere que el destino resuena en nuestras elecciones.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["feanor", "turin", "thingol", "melkor"]
  },
  {
    id: "love-transcendence",
    name: "El Amor que Trasciende",
    analysis: "El amor de Beren y Lúthien desafía las leyes naturales. Un mortal y un elfo, de razas diferentes, logran lo imposible. Lúthien renuncia a la inmortalidad; Beren se convierte en leyenda. El amor es la fuerza más poderosa del universo, más fuerte que la magia o el poder.",
    relatedGreatTales: ["beren-luthien"],
    relatedCharacters: ["beren", "luthien", "thingol", "melian"]
  },
  {
    id: "corruption-power",
    name: "La Corrupción del Poder",
    analysis: "El poder absoluto corrompe. Morgoth, como Vala, tenía poder casi ilimitado, pero su orgullo lo cegó. El Silmaril mismo, aunque hermoso, se convierte en maldición. Incluso los Elfos, seres inmortales y sabios, no están a salvo de la ambición y la codicia.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["melkor", "feanor", "thingol"]
  },
  {
    id: "mortality-gift",
    name: "La Mortalidad como Regalo",
    analysis: "Los Hombres, aunque tienen vidas breves, poseen algo que los Elfos no: la libertad verdadera. La mortalidad no es una maldición sino un don. Lúthien elige la mortalidad; Eärendil transcendencia. El Silmarillion sugiere que la brevedad de la vida humana es lo que la hace valiosa.",
    relatedGreatTales: ["beren-luthien", "earendil"],
    relatedCharacters: ["beren", "earendil", "luthien"]
  },
  {
    id: "light-darkness",
    name: "La Luz Contra la Oscuridad",
    analysis: "El conflicto entre la luz (Valinor, los Silmarils, el bien) y la oscuridad (Morgoth, Angband) es el hilo conductor de toda la época. Pero la oscuridad nunca puede extinguir completamente la luz. Eärendil se convierte en estrella, símbolo eterno de esperanza.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin", "earendil"],
    relatedCharacters: ["melkor", "earendil", "luthien", "fingolfin"]
  },
  {
    id: "fate-free-will",
    name: "El Destino y el Libre Albedrío",
    analysis: "¿Es nuestro destino inevitable o somos libres de elegir? Túrin lucha contra la maldición de Morgoth pero al final no puede escapar. Sin embargo, sus elecciones importan. El Silmarillion mantiene esta tensión sin resolverla, reflejando la naturaleza del drama humano.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["turin", "feanor", "earendil"]
  }
];

export const flowNodesData: FlowNode[] = [
  // Level 0: Ilúvatar (centered)
  { id: "iluvatar", characterId: "iluvatar", position: { x: 600, y: 0 } },

  // Level 1: Valar (wider spacing, pairs for spouses positioned closer)
  { id: "varda", characterId: "varda", position: { x: 150, y: 200 } },
  { id: "manwe", characterId: "manwe", position: { x: 350, y: 200 } },
  { id: "melkor", characterId: "melkor", position: { x: 600, y: 200 } },
  { id: "aule", characterId: "aule", position: { x: 850, y: 200 } },
  { id: "yavanna", characterId: "yavanna", position: { x: 1050, y: 200 } },
  { id: "ulmo", characterId: "ulmo", position: { x: 1300, y: 200 } },

  // Level 2: Children of Valar
  { id: "finwe", characterId: "finwe", position: { x: 200, y: 400 } },
  { id: "thingol", characterId: "thingol", position: { x: 600, y: 400 } },
  { id: "melian", characterId: "melian", position: { x: 800, y: 400 } },

  // Level 3: Children of Finwë and others
  { id: "feanor", characterId: "feanor", position: { x: 50, y: 600 } },
  { id: "fingolfin", characterId: "fingolfin", position: { x: 200, y: 600 } },
  { id: "finarfin", characterId: "finarfin", position: { x: 350, y: 600 } },
  { id: "luthien", characterId: "luthien", position: { x: 700, y: 600 } },

  // Level 4: Later generations
  { id: "galadriel", characterId: "galadriel", position: { x: 350, y: 800 } },
  { id: "beren", characterId: "beren", position: { x: 900, y: 800 } },
  { id: "turin", characterId: "turin", position: { x: 1100, y: 600 } },
  { id: "earendil", characterId: "earendil", position: { x: 1000, y: 800 } }
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
