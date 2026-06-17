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
  race: string;
  alignment: 'good' | 'evil' | 'neutral';
  role: string;
  description: string;
  firstChapter: number;
  relationships: { name: string; type: string }[];
  locations: string[];
  events: string[];
};

export type Location = {
  id: string;
  name: string;
  description: string;
  firstChapter: number;
  lat: number;
  lng: number;
};

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  firstChapter: number;
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
  { id: 23, title: "Quenta Silmarillion XXII", subtitle: "De la ruina de Doriath", description: "La codicia por el Silmaril destruye el Reino Escondido.", needToería: ["Los Enanos asesinaron a Thingol por el collar Nauglamír y el Silmaril.", "Doriath fue saqueada, aunque Beren recuperó la joya temporalmente.", "Melian abandonó la Tierra Media en su dolor.", "Más tarde, los Hijos de Fëanor atacaron Doriath para recuperar el Silmaril.", "Doriath fue destruida para siempre."] },
  { id: 24, title: "Quenta Silmarillion XXIII", subtitle: "De Tuor y la Caída de Gondolin", description: "La última fortaleza de los Noldor es traicionada desde dentro, pero de sus cenizas nace una estrella.", needToKnow: ["Tuor, un Hombre mortal, fue guiado por Ulmo a Gondolin.", "Se casó con Idril, hija de Turgon, y tuvieron a Eärendil.", "Maeglin traicionó a Gondolin revelando su ubicación a Morgoth.", "La ciudad cayó en una batalla épica con dragones y Balrogs.", "Tuor, Idril y Eärendil escaparon hacia el mar."] }
];

export const charactersData: Character[] = [
  { id: "iluvatar", name: "Eru Ilúvatar", race: "Eru", alignment: "good", role: "El Único, fuente de todo ser", description: "El Ser Supremo que creó a los Ainur y propuso los Grandes Temas de la Música.", firstChapter: 0, relationships: [], locations: ["Timeless Halls"], events: ["La creación de los Ainur", "La Música de los Ainur"] },
  { id: "manwe", name: "Manwë", race: "Vala", alignment: "good", role: "Rey de Arda, Señor de los Vientos", description: "El más querido por Ilúvatar, comprende mejor que nadie sus propósitos.", firstChapter: 0, relationships: [{name: "Varda", type: "spouse"}], locations: ["Valinor", "Taniquetil"], events: ["Descenso a Arda"] },
  { id: "melkor", name: "Melkor / Morgoth", race: "Vala corrompido", alignment: "evil", role: "Señor Oscuro, el más poderoso de los Ainur", description: "El que se alzó en orgullo, deseando crear cosas propias, y trajo el mal al mundo.", firstChapter: 0, relationships: [], locations: ["Utumno", "Angband"], events: ["La Discordia en la Música", "Destrucción de las Lámparas", "Robo de los Silmarils"] },
  { id: "varda", name: "Varda", race: "Vala", alignment: "good", role: "Reina de las Estrellas", description: "La más reverenciada por los Elfos, hacedora de las estrellas.", firstChapter: 0, relationships: [{name: "Manwe", type: "spouse"}], locations: ["Valinor"], events: ["Creación de las estrellas"] },
  { id: "aule", name: "Aulë", race: "Vala", alignment: "good", role: "Forjador, creador de los Enanos", description: "Señor de las sustancias de las que está hecha la tierra.", firstChapter: 1, relationships: [{name: "Yavanna", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Enanos"] },
  { id: "yavanna", name: "Yavanna", race: "Vala", alignment: "good", role: "Dadora de Frutos", description: "Amante de todas las cosas que crecen en la tierra.", firstChapter: 1, relationships: [{name: "Aule", type: "spouse"}], locations: ["Valinor"], events: ["Creación de los Dos Árboles", "Petición de los Ents"] },
  { id: "ulmo", name: "Ulmo", race: "Vala", alignment: "good", role: "Señor de las Aguas", description: "Vive en el Océano Exterior y ama a los Elfos y los Hombres, guiándolos en secreto.", firstChapter: 1, relationships: [], locations: ["Ekkaia"], events: ["Guía a Turgon", "Guía a Tuor"] },
  { id: "finwe", name: "Finwë", race: "Elfo Noldor", alignment: "good", role: "Primer Rey de los Noldor", description: "Lideró a su pueblo a Valinor, su asesinato precipitó la rebelión de los Noldor.", firstChapter: 4, relationships: [{name: "Feanor", type: "parent"}, {name: "Fingolfin", type: "parent"}, {name: "Finarfin", type: "parent"}], locations: ["Valinor", "Tirion"], events: ["Llegada a Valinor", "Asesinato en Formenos"] },
  { id: "thingol", name: "Elwë / Thingol", race: "Elfo Sindar", alignment: "good", role: "Rey de Doriath", description: "Vio la Luz de los Árboles pero se quedó en la Tierra Media por amor.", firstChapter: 5, relationships: [{name: "Melian", type: "spouse"}, {name: "Luthien", type: "parent"}], locations: ["Doriath", "Menegroth"], events: ["Encuentro con Melian", "Demanda del Silmaril"] },
  { id: "melian", name: "Melian", race: "Maia", alignment: "good", role: "Reina de Doriath", description: "Espíritu de gran poder que protegió su reino con una cintura de encantamiento.", firstChapter: 5, relationships: [{name: "Thingol", type: "spouse"}, {name: "Luthien", type: "parent"}], locations: ["Doriath"], events: ["La Cintura de Melian"] },
  { id: "luthien", name: "Lúthien Tinúviel", race: "Elfo/Maia", alignment: "good", role: "Hija de Thingol y Melian", description: "La más hermosa de todos los Hijos de Ilúvatar.", firstChapter: 5, relationships: [{name: "Beren", type: "spouse"}], locations: ["Doriath", "Tol Galen"], events: ["Robo del Silmaril", "Renuncia a la inmortalidad"] },
  { id: "feanor", name: "Fëanor", race: "Elfo Noldor", alignment: "neutral", role: "Creador de los Silmarils", description: "Su ardiente espíritu consumió su vida. Hacedor de grandes obras y de grandes males.", firstChapter: 7, relationships: [{name: "Finwe", type: "child"}], locations: ["Valinor", "Formenos", "Losgar"], events: ["Creación de los Silmarils", "Juramento de Fëanor", "Muerte en la Dagor-nuin-Giliath"] },
  { id: "fingolfin", name: "Fingolfin", race: "Elfo Noldor", alignment: "good", role: "Rey Supremo de los Noldor en el exilio", description: "Valeroso rey que cruzó el hielo y desafió a Morgoth a duelo singular.", firstChapter: 7, relationships: [{name: "Finwe", type: "child"}], locations: ["Hithlum"], events: ["El cruce del Helcaraxë", "Duelo con Morgoth"] },
  { id: "finarfin", name: "Finarfin", race: "Elfo Noldor", alignment: "good", role: "Rey de los Noldor en Aman", description: "El único de los hijos de Finwë que regresó al arrepentirse de la rebelión.", firstChapter: 7, relationships: [{name: "Finwe", type: "child"}, {name: "Galadriel", type: "parent"}], locations: ["Tirion"], events: ["Arrepentimiento de Finarfin"] },
  { id: "galadriel", name: "Galadriel", race: "Elfo Noldor", alignment: "good", role: "Una de los líderes de la rebelión", description: "Deseaba ver la Tierra Media y gobernar un reino allí.", firstChapter: 7, relationships: [{name: "Finarfin", type: "child"}], locations: ["Doriath", "Nargothrond"], events: ["El cruce del Helcaraxë"] },
  { id: "beren", name: "Beren Erchamion", race: "Hombre", alignment: "good", role: "El único mortal amado por un Elfo en la Primera Edad", description: "Proscrito valeroso que logró lo imposible por amor.", firstChapter: 20, relationships: [{name: "Luthien", type: "spouse"}], locations: ["Dorthonion", "Doriath", "Angband"], events: ["Búsqueda del Silmaril"] },
  { id: "turin", name: "Túrin Turambar", race: "Hombre", alignment: "neutral", role: "Portador de la maldición de Morgoth", description: "Trágico héroe humano. Matador de Glaurung.", firstChapter: 22, relationships: [], locations: ["Doriath", "Nargothrond", "Brethil"], events: ["Caída de Nargothrond", "Muerte de Glaurung"] },
  { id: "earendil", name: "Eärendil", race: "Medio-elfo", alignment: "good", role: "El marinero estrella", description: "Navegó a Valinor para pedir ayuda a los Valar por las Dos Razas.", firstChapter: 24, relationships: [], locations: ["Gondolin", "Puertos del Sirion"], events: ["Navegación a Aman", "Guerra de la Cólera"] }
];

export const locationsData: Location[] = [
  { id: "valinor", name: "Valinor", description: "El Reino Bendecido en el continente de Aman, hogar de los Valar y los Elfos de la Luz.", firstChapter: 1, lat: 20, lng: -60 },
  { id: "angband", name: "Angband", description: "La fortaleza secundaria y luego principal de Morgoth en el norte de Beleriand.", firstChapter: 3, lat: 60, lng: -10 },
  { id: "doriath", name: "Doriath", description: "El Reino Escondido de Thingol y Melian en los bosques centrales de Beleriand.", firstChapter: 5, lat: 45, lng: -15 },
  { id: "tirion", name: "Tirion", description: "La gran ciudad de los Elfos Noldor y Vanyar sobre la colina de Túna en Aman.", firstChapter: 6, lat: 15, lng: -55 },
  { id: "formenos", name: "Formenos", description: "Fortaleza de Fëanor en el norte de Valinor.", firstChapter: 8, lat: 25, lng: -58 },
  { id: "helcaraxe", name: "Helcaraxë", description: "El Hielo Crujiente, el estrecho estrecho en el extremo norte que conectaba Aman y la Tierra Media.", firstChapter: 14, lat: 75, lng: -40 },
  { id: "hithlum", name: "Hithlum", description: "Región del norte de Beleriand, feudo principal de Fingolfin y los Altos Reyes.", firstChapter: 15, lat: 55, lng: -20 },
  { id: "nargothrond", name: "Nargothrond", description: "Reino subterráneo fundado por Finrod Felagund cerca del río Narog.", firstChapter: 15, lat: 40, lng: -25 },
  { id: "gondolin", name: "Gondolin", description: "La Ciudad Oculta de Turgon, rodeada por las Montañas Circundantes.", firstChapter: 16, lat: 52, lng: -12 },
  { id: "tolgalen", name: "Tol Galen", description: "La Isla Verde en Adurant, donde vivieron Beren y Lúthien.", firstChapter: 20, lat: 35, lng: -10 },
  { id: "brethil", name: "Brethil", description: "El bosque de los Hombres de Haleth, escenario del fin trágico de Túrin.", firstChapter: 18, lat: 48, lng: -18 }
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
