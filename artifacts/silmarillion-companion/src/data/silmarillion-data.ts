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
  { id: 0, title: "Ainulindalë", subtitle: "La Música de los Ainur", description: "En el principio, Ilúvatar el Único creó a los Ainur de su pensamiento. Juntos cantaron la Gran Música que contenía la historia de Arda. Ilúvatar levantó tres temas contra la discordancia de Melkor, y en la Visión mostró a los Ainur todo cuanto acontecería. Cuando pronunció 'Eä', la Música se hizo real.", needToKnow: ["Eru Ilúvatar es el creador supremo, fuente de todo ser.", "Los Ainur son seres angelicales creados del pensamiento divino.", "La Gran Música de los Ainur fue el acto de creación, conteniendo toda la historia.", "Melkor introdujo disonancia en tres ocasiones; Ilúvatar la incorporó al propósito supremo.", "Ilúvatar levantó tres temas contrapuestos que Manwë llevó adelante.", "La Visión de Arda fue mostrada a los Ainur, revelando cuanto sucedería.", "Los Hijos de Ilúvatar (Elfos y Hombres) fueron previstos, dotados de libertad verdadera.", "Cuando Ilúvatar pronunció 'Eä', la Música se convirtió en realidad: nació Arda.", "Los Valar descendieron a Arda para completar su formación según la Visión.", "Manwë se convirtió en el instrumento principal de Ilúvatar en la Tierra Media."], shouldKnowAfter: ["La disonancia de Melkor no fue un error sino que fue prevista y permitida por Ilúvatar como parte de Su plan eterno.", "La soberanía absoluta de Ilúvatar implica que incluso el mal sirve a Sus propósitos.", "Los Hijos de Ilúvatar poseen libertad verdadera que ni los Ainur ni los Valar pueden coaccionar.", "La creación es dual: primero la Música en potencia, luego la Visión reveladora, finalmente 'Eä' como realidad.", "Los Valar aceptaron limitaciones voluntarias al descender a Arda, sometiéndose al orden creado.", "Las intenciones malignas de Melkor eran visibles desde el principio; su envidia es su característica definitoria.", "Ilúvatar promete que al final habrá una Música más grande que la primera, vindicando Su propósito.", "El mundo es precantado, es decir, su historia está tejida en la Música desde la eternidad.", "La Historia de Arda es la manifestación gradual de la Música ya existente.", "El conflicto entre el bien y el mal es fundamental y necesario en el plan divino."] },
  { id: 1, title: "Valaquenta", subtitle: "Historia de los Valar", description: "Registro de los catorce Valar (siete Señores y siete Reinas) que gobiernan Arda bajo la autoridad de Ilúvatar a través de Manwë. Incluye los ocho Aratar, los Maiar principales que los sirven, sus dominios y naturaleza. Termina con la expulsión de Melkor de la cuenta de los Valar.", needToKnow: ["Los Valar son catorce: siete Señores y siete Reinas, los más poderosos de los Ainur.", "Manwë es el Rey de Arda designado por Ilúvatar, Señor del Aire.", "Ulmo es el segundo en poder, Señor de todas las aguas, y nunca abandona Arda ni a sus habitantes.", "Aulë es el Herrero, Señor de la materia de Arda; los Noldor aprendieron más de él.", "Los ocho Aratar (Manwë, Varda, Ulmo, Yavanna, Aulë, Mandos, Nienna, Oromë) son los más poderosos de los Valar."], shouldKnowAfter: ["Las formas visibles de los Valar son como vestiduras, no su verdadera esencia; pueden ir sin forma.", "Los Maiar son espíritus menores que sirven a los Valar, algunos de los cuales tendrán papeles cruciales en la historia.", "Ulmo nunca participó plenamente en los edictos de los Valar que abandonaron Arda; siempre ama a Elfos y Hombres.", "Olórin (futuro Gandalf) aprendió de Nienna la piedad y la paciencia en las adversidades.", "Sauron fue en un principio Maia de Aulë antes de ser corrompido por Melkor; los Balrogs son Valaraukar, Maiar corrompidos."] },
  { id: 2, title: "Quenta Silmarillion I", subtitle: "Del comienzo de los días", description: "Tulkas llega a Arda y ahuyenta a Melkor. Los Valar crean las Grandes Lámparas (Illuin y Ormal) que iluminan la Tierra Media. Yavanna planta la Primavera de Arda. Pero Melkor regresa en secreto, construye Utumno, corrompe la Primavera y destruye las Lámparas. Los Valar se retiran a Aman, levantan las Pelóri, fundan Valinor, y Yavanna canta los Dos Árboles (Telperion y Laurelin) en Ezellohar.", needToKnow: ["La llegada de Tulkas trajo la primera paz a Arda; su risa ahuyentó a Melkor a las tinieblas exteriores.", "Las Grandes Lámparas (Illuin y Ormal) fueron construidas por Aulë, llenadas por Varda y consagradas por Manwë.", "Yavanna plantó la Primavera: la vida brotó por toda la Tierra Media en una época de belleza incomparable.", "Melkor regresó en secreto, construyó Utumno bajo la Tierra, corrompió la Primavera y destruyó las Lámparas, arruinando la simetría de Arda para siempre.", "Los Valar se retiraron a Aman, fundaron Valinor detrás de las Pelóri, y Yavanna cantó los Dos Árboles en Ezellohar, iniciando la Cuenta del Tiempo."], shouldKnowAfter: ["La simetría original de Arda nunca fue restaurada tras la destrucción de las Lámparas; cada victoria de Melkor causa daño permanente.", "Al retirarse a Valinor, los Valar dejaron la Tierra Media en penumbra; solo Ulmo, Yavanna y Oromë la visitaban en secreto.", "Los Dos Árboles (Telperion plateado y Laurelin dorado) son la creación más renombrada de Yavanna; en torno a su destino giran todos los relatos futuros.", "La Muerte de los Hombres es don de Ilúvatar, no castigo; Melkor la corrompió, convirtiéndola en fuente de miedo y odio.", "Los Elfos están atados a Arda hasta su fin; los Hombres tienen destino desconocido más allá del Mundo. Incluso los Poderes envidiarán esta libertad."] },
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
  { id: "iluvatar", name: "Eru Ilúvatar", aliases: ["El Único", "Manwë en Arda", "El Creador"], race: "Eru", alignment: "good", role: "El Único, fuente de todo ser", description: "El Ser Supremo que creó a los Ainur de su pensamiento infinito y propuso los Grandes Temas de la Música que dieron forma a Arda.", details: "Ilúvatar es el Único, el Ser que existe por sí mismo, fuente de toda existencia. Creó a los Ainur en acto de su voluntad, dotándoles de potencia para crear. Levantó tres temas contra la discordancia de Melkor, incorporando incluso la maldad al propósito supremo. Mostró la Visión de Arda a los Ainur, revelando todo cuanto sucedería. Al pronunciar 'Eä', convirtió la Música en realidad. Su soberanía es absoluta: incluso el sufrimiento y el conflicto sirven a Sus propósitos eternos.", titles: [{chapter: 0, text: "El Único"}, {chapter: 0, text: "El Creador"}, {chapter: 0, text: "Fuente de Todo Ser"}], notableDeeds: [{chapter: 0, text: "Creación de los Ainur"}, {chapter: 0, text: "Proposición de los tres Temas de la Música"}, {chapter: 0, text: "Incorporación de la discordancia al propósito"}, {chapter: 0, text: "Pronunciación de 'Eä'"}], importance: "CRITICAL", firstChapter: 0, relationships: [], locations: ["Vacío Intemporal", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "La Visión de Arda", "Pronunciación de Eä"], greatTales: ["creation-music", "eternal-struggle"] },
  { id: "manwe", name: "Manwë", aliases: ["Manwë Sulimo", "Rey de los Valar", "Señor de los Vientos"], race: "Vala", alignment: "good", role: "Rey de Arda, Señor de los Vientos", description: "El más querido por Ilúvatar, comprende mejor que nadie Sus propósitos. Llevó adelante los temas de la Música contra Melkor.", details: "Manwë es el Rey de los Valar y el Señor del Aire y los Vientos. Durante la Gran Música, fue elegido por Ilúvatar para contraponer sus temas a la discordancia de Melkor. Es el instrumento principal de la voluntad divina en Arda. Su autoridad sobre los Ainur es reconocida universalmente, y su lealtad a Ilúvatar es inquebrantable.", titles: [{chapter: 0, text: "Rey de los Valar"}, {chapter: 1, text: "Señor del Aire"}, {chapter: 0, text: "Instrumento de Ilúvatar"}], notableDeeds: [{chapter: 0, text: "Levantó los temas de la Música contra Melkor"}, {chapter: 0, text: "Descendió a Arda para darle forma"}], importance: "CRITICAL", firstChapter: 0, relationships: [{characterId: "varda", type: "spouse"}, {characterId: "iluvatar", type: "father"}], locations: ["Valinor", "Taniquetil", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Descenso a Arda"], greatTales: ["creation-music", "eternal-struggle"] },
  { id: "melkor", name: "Melkor / Morgoth", aliases: ["Melkor", "Morgoth", "El Enemigo", "El Señor Oscuro", "El Contramaestro"], race: "Vala corrompido", alignment: "evil", role: "El Señor Oscuro, mayor de los Ainur en poder pero corrompido", description: "El que se alzó en orgullo, deseando crear cosas propias como Ilúvatar, y trajo el mal al mundo. Introdujo tres veces disonancia en la Gran Música, pero incluso su maldad fue incorporada al propósito divino.", details: "Melkor fue uno de los grandes Ainur, dotado de poder casi igual al de los Valar. En el acto de creación, fue presa de la envidia y el orgullo: deseaba poseer la Llama Imperecedera y crear según su propia voluntad. Introdujo discordancia en la Música de los Ainur en tres ocasiones, buscando destruir los temas de Manwë. A pesar de sus intentos, Ilúvatar incorporó incluso su maldad al propósito supremo. Tras la caída de Valinor, se convirtió en Morgoth, el Señor Oscuro, y desde Angband atormentó a Elfos y Hombres durante las Primeras Edades.", titles: [{chapter: 0, text: "Vala"}, {chapter: 0, text: "Mayor de los Ainur en Poder"}, {chapter: 9, text: "Señor Oscuro"}, {chapter: 9, text: "El Enemigo"}], notableDeeds: [{chapter: 0, text: "Introdujo discordancia en la Música (tres intentos)"}, {chapter: 0, text: "Buscó poseer la Llama Imperecedera"}, {chapter: 2, text: "Destruyó las Lámparas de los Valar"}, {chapter: 9, text: "Robó los Silmarils"}, {chapter: 14, text: "Encadenó a Maedhros"}, {chapter: 22, text: "Maldijo a la casa de Húrin"}], importance: "CRITICAL", firstChapter: 0, relationships: [{characterId: "manwe", type: "enemy"}, {characterId: "iluvatar", type: "father"}], locations: ["Utumno", "Angband", "Vacío Intemporal"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "La Discordancia de Melkor", "Destrucción de las Lámparas", "Robo de los Silmarils"], greatTales: ["creation-music", "eternal-struggle", "beren-luthien", "turin", "fall-gondolin"] },
  { id: "varda", name: "Varda", aliases: ["Elbereth", "Reina de las Estrellas"], race: "Vala", alignment: "good", role: "Reina de los Valar, Señora de las Estrellas", description: "La más poderosa entre los Valar y la más reverenciada por los Elfos. Confidente de Manwë en la dirección del mundo.", importance: "CRITICAL", firstChapter: 0, relationships: [{characterId: "manwe", type: "spouse"}, {characterId: "iluvatar", type: "father"}], locations: ["Valinor", "Taniquetil", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Creación de las estrellas"], greatTales: ["creation-music", "eternal-struggle"] },
  { id: "aule", name: "Aulë", aliases: ["El Maestro Forjador", "Aulë el Supremo"], race: "Vala", alignment: "good", role: "El Maestro Forjador, modelador de la tierra", description: "Señor de las sustancias de las que está hecha la tierra. Ama el trabajo en sí mismo, no el poder ni la posesión. Durante la Música, participó en el canto con destreza.", importance: "HIGH", firstChapter: 0, relationships: [{characterId: "yavanna", type: "spouse"}, {characterId: "iluvatar", type: "father"}], locations: ["Valinor", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Descenso a Arda"], greatTales: ["creation-music"] },
  { id: "yavanna", name: "Yavanna", aliases: ["Dadora de Frutos", "Yavanna Palantíri"], race: "Vala", alignment: "good", role: "Dadora de Frutos, Señora de la Vida Vegetal", description: "Amante de todas las cosas que crecen en la tierra. Durante la Música, cantó con poder sobre el crecimiento y la renovación. Es confidente de los propósitos de Ilúvatar.", importance: "HIGH", firstChapter: 0, relationships: [{characterId: "aule", type: "spouse"}, {characterId: "iluvatar", type: "father"}], locations: ["Valinor", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Creación de los Dos Árboles", "Descenso a Arda"], greatTales: ["creation-music"] },
  { id: "ulmo", name: "Ulmo", aliases: ["Señor de las Aguas", "Ulmo de las Aguas Profundas"], race: "Vala", alignment: "good", role: "Señor de las Aguas y los Ríos", description: "Vive en el Océano Exterior y ama a los Elfos y los Hombres, guiándolos en secreto. Durante la Música, cantó con profundidad y poder. Es único entre los Valar: nunca abandonará Arda.", importance: "HIGH", firstChapter: 0, relationships: [{characterId: "iluvatar", type: "father"}, {characterId: "manwe", type: "ally"}], locations: ["Ekkaia", "Océano Exterior", "Aman"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Descenso a Arda", "Guía a Turgon", "Guía a Tuor"], greatTales: ["creation-music", "fall-gondolin", "earendil"] },
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
  { id: "earendil", name: "Eärendil", aliases: ["Eärendil", "El Marinero Estrella"], race: "Medio-elfo", alignment: "good", role: "El marinero estrella", description: "Navegó a Valinor para pedir ayuda a los Valar por las Dos Razas.", details: "Eärendil fue el hijo de Tuor y la princesa elfa Idril, nacido en Gondolin. Cuando la ciudad cayó ante Morgoth, escapó con sus padres y el Silmaril recuperado de Beren y Lúthien. Intentó viajar a Valinor en un barco mágico para implorar a los Valar que fueran en ayuda de Elfos y Hombres. Los Valar le concedieron esta misión, colocando el Silmaril en su frente como una estrella brillante. Se convirtió en Gil-Eärendil, la Estrella de la Mañana, visible en el cielo nocturno de Arda para siempre, símbolo de esperanza.", titles: [{chapter: 24, text: "El Marinero Estrella"}, {chapter: 24, text: "Portador del Silmaril"}, {chapter: 24, text: "Mensajero de los Valar"}], notableDeeds: [{chapter: 24, text: "Escapó de la caída de Gondolin"}, {chapter: 24, text: "Viajó a Valinor contra toda probabilidad"}, {chapter: 24, text: "Dio inicio a la Guerra de la Cólera"}, {chapter: 24, text: "Se convirtió en una estrella eternal"}], importance: "CRITICAL", firstChapter: 24, relationships: [], locations: ["Gondolin", "Puertos del Sirion"], events: ["Navegación a Aman", "Guerra de la Cólera"], greatTales: ["fall-gondolin", "earendil"] },
  { id: "mandos", name: "Mandos / Námo", aliases: ["Námo", "Guardián de las Casas de los Muertos", "Juez de los Valar"], race: "Vala", alignment: "good", role: "Guardián de los espíritus de los muertos", description: "El mayor de los Fëanturi. No olvida nada; conoce todas las cosas que serán, excepto las que dependen de la libertad de Ilúvatar. Condena solo por orden de Manwë.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "nienna", type: "sibling"}, {characterId: "irmo", type: "sibling"}, {characterId: "vaire", type: "spouse"}], locations: ["Valinor", "Mandos"], events: ["Hado de Mandos"], greatTales: [] },
  { id: "irmo", name: "Lórien / Irmo", aliases: ["Irmo", "Patrono de visiones y sueños", "El Menor de los Fëanturi"], race: "Vala", alignment: "good", role: "Señor de los sueños y las visiones", description: "El menor de los Fëanturi. Sus jardines en Lórien son el lugar más hermoso del mundo. Los mismos Valar acuden allí para encontrar reposo.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "mandos", type: "sibling"}, {characterId: "nienna", type: "sibling"}, {characterId: "este", type: "spouse"}], locations: ["Valinor", "Lórien"], events: ["Creación de Lórien"], greatTales: [] },
  { id: "nienna", name: "Nienna", aliases: ["Hermana de los Fëanturi"], race: "Vala", alignment: "good", role: "Señora del duelo y la compasión", description: "Más poderosa que Estë. Vive sola. Llora todas las heridas de Arda. No llora por sí misma. Quienes la escuchan aprenden piedad y firmeza en la esperanza. Convierte el dolor en sabiduría.", details: "Rara vez viene a Valimar. Visita los palacios de Mandos. Sus ventanas miran hacia afuera desde los muros del mundo.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "mandos", type: "sibling"}, {characterId: "irmo", type: "sibling"}], locations: ["Valinor", "Mandos", "Límites del Mundo"], events: [], greatTales: [] },
  { id: "vaire", name: "Vairë", aliases: ["La Tejedora"], race: "Vala", alignment: "good", role: "Tejedora de la Historia", description: "Teje todas las cosas que han sido en el Tiempo en tramas de historias. Las estancias de Mandos se adornan con sus obras.", importance: "LOW", firstChapter: 1, relationships: [{characterId: "mandos", type: "spouse"}], locations: ["Valinor", "Mandos"], events: [], greatTales: [] },
  { id: "este", name: "Estë", aliases: ["La Gentil", "La Curadora"], race: "Vala", alignment: "good", role: "Curadora de heridas y fatigas", description: "Viste de gris, reposo es su don. No camina durante el día. Duerme en una isla en el lago de Lórellin, sombreado de árboles.", importance: "LOW", firstChapter: 1, relationships: [{characterId: "irmo", type: "spouse"}], locations: ["Valinor", "Lórien"], events: [], greatTales: [] },
  { id: "tulkas", name: "Tulkas Astaldo", aliases: ["Astaldo", "El Valiente", "El más fuerte"], race: "Vala", alignment: "good", role: "El más fuerte en proezas físicas", description: "Último en llegar a Arda. Corre más rápido que toda criatura, no conoce la fatiga. Pelo y barba dorados, piel rojiza. Sus armas son las manos. Ríe siempre, incluso en guerra.", details: "No es buen consejero pero sí amigo intrépido. Poco caso hace del pasado o del futuro.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "nessa", type: "spouse"}], locations: ["Valinor"], events: [], greatTales: [] },
  { id: "orome", name: "Oromë", aliases: ["Aldaron", "Tauron", "Señor de los Bosques"], race: "Vala", alignment: "good", role: "Cazador, Señor de los Bosques", description: "Más terrible en cólera que Tulkas. Amaba la Tierra Media y la dejó de mala gana. Cazador de monstruos y bestias feroces. Ama caballos, perros y árboles.", details: "Su caballo Nahar es blanco al sol, plata por la noche. Su cuerno Valaróma suena como el ascenso del sol envuelto en luz escarlata.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "vana", type: "spouse"}, {characterId: "nessa", type: "sibling"}], locations: ["Valinor", "Tierra Media"], events: ["Descubrimiento de los Elfos"], greatTales: [] },
  { id: "vana", name: "Vána", aliases: ["La Siempre Joven"], race: "Vala", alignment: "good", role: "Señora de la juventud y las flores", description: "Hermana menor de Yavanna. Las flores brotan cuando ella pasa, se abren cuando ella las mira, y todos los pájaros cantan cuando ella se acerca.", importance: "LOW", firstChapter: 1, relationships: [{characterId: "orome", type: "spouse"}, {characterId: "yavanna", type: "sibling"}], locations: ["Valinor"], events: [], greatTales: [] },
  { id: "nessa", name: "Nessa", aliases: ["La Ágil"], race: "Vala", alignment: "good", role: "Señora de la danza y la carrera", description: "Hermana de Oromë. Ágil y ligera de pies. Ama a los ciervos y los vence en la carrera. Danza en los prados siempre verdes de Valinor.", importance: "LOW", firstChapter: 1, relationships: [{characterId: "tulkas", type: "spouse"}, {characterId: "orome", type: "sibling"}], locations: ["Valinor"], events: [], greatTales: [] },
  { id: "eonwe", name: "Eönwë", race: "Maia", alignment: "good", role: "Heraldo y portador del estandarte de Manwë", description: "Poder en el manejo de las armas que nadie sobrepasa en Arda. Sirve directamente a Manwë y es su voz entre los pueblos de Arda.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "manwe", type: "ally"}], locations: ["Valinor"], events: [], greatTales: [] },
  { id: "ilmare", name: "Ilmarë", race: "Maia", alignment: "good", role: "Doncella de Varda", description: "Sirve a Varda. La única Maia que habita comúnmente en Valinor con los Valar.", importance: "LOW", firstChapter: 1, relationships: [{characterId: "varda", type: "ally"}], locations: ["Valinor", "Taniquetil"], events: [], greatTales: [] },
  { id: "osse", name: "Ossë", race: "Maia", alignment: "neutral", role: "Amo de los mares costeros", description: "Vasallo de Ulmo. Ama las costas e islas. Se deleita en las tormentas y ríe en medio del rugir de las olas. Nunca perdió del todo el gusto por la violencia.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "ulmo", type: "ally"}, {characterId: "uinen", type: "spouse"}], locations: ["Mares costeros", "Océano"], events: [], greatTales: [] },
  { id: "uinen", name: "Uinen", race: "Maia", alignment: "good", role: "Señora de los Mares", description: "Vasalla de Ulmo. Sus cabellos se esparcen por todas las aguas bajo el cielo. Los marineros claman por ella para calmar las olas. Los Númenóreanos la veneraban como a los Valar.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "ulmo", type: "ally"}, {characterId: "osse", type: "spouse"}], locations: ["Océano", "Aguas del Mundo"], events: [], greatTales: [] },
  { id: "olorin", name: "Olórin", race: "Maia", alignment: "good", role: "El más sabio de los Maiar", description: "Vivía en Lórien. Sus caminos lo llevaban a menudo a casa de Nienna, de quien aprendió piedad y paciencia. Andaba entre los Elfos invisible o con forma élfica. Quienes lo escuchaban despertaban de la desesperación.", details: "Más tarde será amigo de todos los Hijos de Ilúvatar. Conocido en la Tierra Media como Gandalf.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "manwe", type: "ally"}, {characterId: "nienna", type: "ally"}], locations: ["Valinor", "Lórien", "Tierra Media"], events: [], greatTales: ["fall-gondolin", "earendil"] },
  { id: "salmar", name: "Salmar", aliases: ["Hechicero del Sonido"], race: "Maia", alignment: "good", role: "Heraldo y servidor de Ulmo", description: "Llegó a Arda con Ulmo en las aguas primigenias. Creador de los cuernos de Ulmo (los Ulumúri) hechos de conchas blancas. Su música es profunda y poderosa.", importance: "LOW", firstChapter: 2, relationships: [{characterId: "ulmo", type: "ally"}], locations: ["Océano Exterior", "Aguas profundas"], events: ["Llegada a Arda"], greatTales: [] },
  { id: "tulkas-expanded", name: "Tulkas", aliases: ["Astaldo", "El Valiente", "El más fuerte en proezas físicas"], race: "Vala", alignment: "good", role: "El Campeón de los Valar, llegó en defensa de Arda", description: "Último de los Valar en descender a Arda. Su llegada trajo la primera paz. Cabello y barba dorados, piel rojiza. Ríe siempre, incluso en batalla. Sus armas son sus manos. Rápido como el viento, sin conocer fatiga.", details: "Vino a Arda al oír la batalla en el Pequeño Reino. Su cólera y risa ahuyentaron a Melkor a las tinieblas exteriores. Se quedó para siempre. Desposó a Nessa en la fiesta de la Primavera en Almaren. Estaba dormido cuando Melkor regresó.", titles: [{chapter: 2, text: "Astaldo"}, {chapter: 2, text: "El Campeón"}, {chapter: 2, text: "El más Valiente"}], notableDeeds: [{chapter: 2, text: "Ahuyentó a Melkor a las tinieblas"}, {chapter: 2, text: "Trajo la primera paz a Arda"}, {chapter: 2, text: "Desposó a Nessa en Almaren"}], importance: "HIGH", firstChapter: 2, relationships: [{characterId: "nessa", type: "spouse"}], locations: ["Almaren", "Valinor", "Arda"], events: ["Llegada de Tulkas", "Boda de Tulkas y Nessa"], greatTales: ["primavera-caida-lamparas"] }
];

export const locationsData: Location[] = [
  { id: "void-timeless", name: "El Vacío Intemporal", aliases: ["Los Palacios Intemporales", "El Trono de Ilúvatar"], description: "El lugar sin tiempo donde Ilúvatar existe y crea. Aquí fueron cantados los Ainur y donde Ilúvatar pronunció 'Eä'. Es el origen de toda existencia.", importance: "CRITICAL", type: "Realm", region: "Legendario", status: "Legendary", firstChapter: 0, lat: 0, lng: 0, relatedCharacters: ["iluvatar", "manwe", "melkor", "varda"], relatedEvents: ["creation-ainur", "great-music", "eä"], greatTales: ["creation-music"] },
  { id: "valinor", name: "Valinor", description: "El Reino Bendecido en el continente de Aman, hogar de los Valar y los Elfos de la Luz. Aquí fue la Música cantada, los Árboles crecieron, y los Valar dirigieron el destino de Arda.", importance: "CRITICAL", type: "Realm", region: "Aman", status: "Active", firstChapter: 0, lat: 20, lng: -60, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo", "iluvatar"], relatedEvents: ["great-music", "vision-arda"], greatTales: ["creation-music"] },
  { id: "angband", name: "Angband", description: "La fortaleza secundaria y luego principal de Morgoth en el norte de Beleriand.", importance: "CRITICAL", type: "Fortress", region: "Beleriand", status: "Active", firstChapter: 3, lat: 75, lng: -20, ruler: { characterId: "melkor", period: "Capítulos 3-24" }, relatedCharacters: ["melkor", "beren", "luthien", "turin"], relatedEvents: ["t12", "t13"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "doriath", name: "Doriath", aliases: ["El Reino Escondido", "Menegroth"], description: "El Reino Escondido de Thingol y Melian en los bosques centrales de Beleriand.", importance: "CRITICAL", type: "Kingdom", region: "Beleriand", status: "Destroyed", lastChapter: 23, firstChapter: 5, ruler: { characterId: "thingol", period: "Capítulos 5-23" }, relatedCharacters: ["thingol", "melian", "luthien", "beren"], relatedEvents: ["t4", "t16"], lat: 50, lng: 20, greatTales: ["beren-luthien"] },
  { id: "tirion", name: "Tirion", description: "La gran ciudad de los Elfos Noldor y Vanyar sobre la colina de Túna en Aman.", importance: "HIGH", type: "City", region: "Aman", status: "Active", firstChapter: 6, lat: 15, lng: -55, relatedCharacters: ["feanor", "fingolfin", "finarfin"], relatedEvents: ["t6", "t8"], greatTales: [] },
  { id: "formenos", name: "Formenos", description: "Fortaleza de Fëanor en el norte de Valinor.", importance: "MEDIUM", type: "Fortress", region: "Aman", status: "Destroyed", firstChapter: 8, lat: 25, lng: -58, relatedCharacters: ["feanor", "finwe"], relatedEvents: ["t7"], greatTales: [] },
  { id: "helcaraxe", name: "Helcaraxë", description: "El Hielo Crujiente, el estrecho estrecho en el extremo norte que conectaba Aman y la Tierra Media.", importance: "HIGH", type: "Other", region: "Mar", status: "Legendary", firstChapter: 14, lat: 90, lng: -60, relatedCharacters: ["fingolfin", "finarfin", "galadriel"], relatedEvents: ["t8"], greatTales: [] },
  { id: "hithlum", name: "Hithlum", description: "Región del norte de Beleriand, feudo principal de Fingolfin y los Altos Reyes.", importance: "HIGH", type: "Region", region: "Beleriand", status: "Destroyed", firstChapter: 15, lat: 70, lng: -40, ruler: { characterId: "fingolfin", period: "Capítulos 15-19" }, relatedCharacters: ["fingolfin"], relatedEvents: ["t12"], greatTales: [] },
  { id: "nargothrond", name: "Nargothrond", aliases: ["Fortaleza de Narog", "Castillo Subterráneo"], description: "Reino subterráneo fundado por Finrod Felagund cerca del río Narog.", importance: "HIGH", type: "Fortress", region: "Beleriand", status: "Destroyed", lastChapter: 22, firstChapter: 15, relatedCharacters: ["turin"], relatedEvents: ["t15"], lat: 35, lng: -50, greatTales: ["turin"] },
  { id: "gondolin", name: "Gondolin", aliases: ["La Ciudad Oculta", "Roca Oculta", "Ciudad de Turgon"], description: "La Ciudad Oculta de Turgon, rodeada por las Montañas Circundantes.", importance: "CRITICAL", type: "City", region: "Beleriand", status: "Destroyed", lastChapter: 24, firstChapter: 16, relatedCharacters: ["earendil", "tuor", "idril"], relatedEvents: ["t11", "t17"], lat: 55, lng: -15, greatTales: ["fall-gondolin"] },
  { id: "tolgalen", name: "Tol Galen", description: "La Isla Verde en Adurant, donde vivieron Beren y Lúthien.", importance: "MEDIUM", type: "Other", region: "Beleriand", status: "Legendary", firstChapter: 20, lat: 30, lng: 10, relatedCharacters: ["beren", "luthien"], relatedEvents: ["t13"], greatTales: ["beren-luthien"] },
  { id: "brethil", name: "Brethil", description: "El bosque de los Hombres de Haleth, escenario del fin trágico de Túrin.", importance: "MEDIUM", type: "Forest", region: "Beleriand", status: "Active", firstChapter: 18, lat: 40, lng: -10, relatedCharacters: ["turin"], relatedEvents: ["t15"], greatTales: ["turin"] },
  { id: "aman", name: "Aman", aliases: ["Tierra Bendecida", "Tierra Inmortal", "Las Tierras Imperecederas"], description: "El continente sagrado en el lejano Oeste donde habitan los Valar y los Elfos elegidos. Protegido de las perecederas del mundo material. Es el destino final de los justos.", importance: "CRITICAL", type: "Realm", region: "Aman", status: "Active", firstChapter: 0, lat: 25, lng: -70, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo", "iluvatar"], relatedEvents: ["vision-arda", "descent-valar"], greatTales: ["creation-music"] },
  { id: "ocean", name: "El Océano Exterior", aliases: ["Ekkaia", "El Mar Externo", "Las Aguas Circundantes"], description: "La vastedad de agua que rodea a Arda. Ulmo mora en sus profundidades. Más allá de él se encuentran los Puertos de Aman, inaccesibles a los mortales sin don especial.", importance: "HIGH", type: "Other", region: "Mar", status: "Active", firstChapter: 0, lat: 50, lng: -100, relatedCharacters: ["ulmo"], relatedEvents: ["vision-arda"], greatTales: ["creation-music"] },
  { id: "taniquetil", name: "Taniquetil / Oiolossë", aliases: ["Taniquetil", "Oiolossë", "La Montaña Santa"], description: "La montaña más elevada de la Tierra. Morada de Manwë y Varda. Palacios sobre nieves eternas. Desde aquí se puede ver todo Arda.", importance: "HIGH", type: "Mountain", region: "Aman", status: "Active", firstChapter: 1, lat: 22, lng: -65, relatedCharacters: ["manwe", "varda"], relatedEvents: [], greatTales: [] },
  { id: "mandos-hall", name: "Mandos (Las Casas de los Muertos)", aliases: ["Casas de Mandos", "Fosa del Ahora"], description: "En el oeste de Valinor. Guardado por Námo. Las estancias se amplían con las edades y se adornan con los tapices de Vairë que registran toda la historia.", importance: "HIGH", type: "Fortress", region: "Aman", status: "Active", firstChapter: 1, lat: 18, lng: -62, ruler: {characterId: "mandos", period: "Desde la creación"}, relatedCharacters: ["mandos", "vaire", "nienna"], relatedEvents: [], greatTales: [] },
  { id: "lorien", name: "Lórien (Jardines de Irmo)", aliases: ["Jardines de Irmo", "Los Prados Dorados"], description: "El más hermoso de todos los lugares del mundo. Habitado por muchos espíritus. Contiene el lago de Lórellin. Incluso los Valar acuden allí por reposo. Olórin vivía en estos jardines.", importance: "MEDIUM", type: "Other", region: "Aman", status: "Active", firstChapter: 1, lat: 20, lng: -58, relatedCharacters: ["irmo", "este", "olorin"], relatedEvents: [], greatTales: [] },
  { id: "valimar", name: "Valimar (Ciudad de los Valar)", aliases: ["Valmar", "Valimar la de muchas campanas", "Ciudad de los Valar"], description: "Ciudad de los Valar en el corazón de Valinor, de excepcional belleza. Centro administrativo y político. Ante su portal occidental está Ezellohar. Contiene el Máhanaxar (Anillo del Juicio) donde se sientan en consejo.", importance: "HIGH", type: "City", region: "Aman", status: "Active", firstChapter: 2, lat: 20, lng: -62, relatedCharacters: ["manwe", "varda"], relatedEvents: ["Fundación de Valinor", "Nacimiento de los Dos Árboles"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "almaren", name: "Almaren", aliases: ["Isla del Almacén"], description: "Isla en el Gran Lago en el centro de la Tierra Media. Primera morada de los Valar. Donde la luz de ambas Grandes Lámparas (Illuin y Ormal) se mezclaba. Centro de la primavera de Arda. Destruida cuando cayeron las Lámparas.", importance: "HIGH", type: "Other", region: "Este", status: "Destroyed", firstChapter: 2, lastChapter: 2, lat: 50, lng: 50, relatedCharacters: ["manwe", "tulkas", "nessa"], relatedEvents: ["La Primavera de Arda", "Boda de Tulkas y Nessa", "Destrucción de las Lámparas"], greatTales: ["primavera-caida-lamparas"] },
  { id: "utumno-expanded", name: "Utumno", aliases: ["Fortaleza de Melkor", "Las Cavernas del Norte"], description: "Vasta fortaleza subterránea construida por Melkor bajo la Tierra, debajo de montañas oscuras en el norte lejano. Lugar donde los rayos de Illuin eran fríos y débiles. Refugio de Melkor y morada de sus servidores. Centro de la corrupción de la Primavera de Arda.", importance: "CRITICAL", type: "Fortress", region: "Este", status: "Active", firstChapter: 2, lat: 80, lng: 30, ruler: {characterId: "melkor", period: "Desde construcción"}, relatedCharacters: ["melkor"], relatedEvents: ["Construcción de Utumno", "Destrucción de las Lámparas"], greatTales: ["primavera-caida-lamparas"] },
  { id: "pelori", name: "Las Pelóri (Montañas de Aman)", aliases: ["Las Montañas de Aman", "Murallas de Aman"], description: "Las montañas más altas de toda la Tierra. Levantadas por los Valar como muralla de defensión contra Melkor. Intransitables salvo por los pasos secretos. Cima de Taniquetil se alza sobre todas ellas. Separan Valinor del Océano Exterior.", importance: "HIGH", type: "Mountain", region: "Aman", status: "Active", firstChapter: 2, lat: 20, lng: -70, relatedCharacters: ["manwe", "varda"], relatedEvents: ["Fundación de Valinor"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "ezellohar", name: "Ezellohar / Corollairë", aliases: ["Corollairë", "Montículo Verde", "Colina Roja"], description: "Montículo verde ante el portal occidental de Valimar. Consagrado por Yavanna. Regado por Nienna con lágrimas. Aquí cantó Yavanna la Canción de los Dos Árboles y de su canto nacieron Telperion y Laurelin. Lugar más sagrado de Valinor.", importance: "CRITICAL", type: "Other", region: "Aman", status: "Active", firstChapter: 2, lat: 21, lng: -62, relatedCharacters: ["yavanna", "nienna"], relatedEvents: ["Nacimiento de los Dos Árboles"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "mahanaxar", name: "Máhanaxar", aliases: ["El Anillo del Juicio", "Anillo de Juicio"], description: "Círculo de asientos consagradores cerca de los portales dorados de Valimar. Donde los Valar se reúnen en consejo. Lugar donde se juzgan los asuntos de Arda y se toman decisiones sobre el destino del Mundo.", importance: "MEDIUM", type: "Other", region: "Aman", status: "Active", firstChapter: 2, lat: 20.5, lng: -62, relatedCharacters: ["manwe"], relatedEvents: [], greatTales: [] }
];

export const timelineData: TimelineEvent[] = [
  { id: "creation-ainur", year: "Antes de los Días", title: "Creación de los Ainur", description: "Ilúvatar crea a los Ainur de su pensamiento, dotándoles de potencia para participar en la creación.", importance: "CRITICAL", category: "Creation", firstChapter: 0, relatedCharacters: ["iluvatar", "manwe", "varda", "melkor"], relatedLocations: ["void-timeless"], greatTaleId: "creation-music" },
  { id: "great-music", year: "Antes de los Días", title: "La Gran Música de los Ainur", description: "Ilúvatar levanta tres temas contra la discordancia de Melkor. Los Ainur cantan la Música que contiene toda la historia de Arda. Tres veces introduce Melkor disonancia; tres veces es contrapuesta.", importance: "CRITICAL", category: "Creation", firstChapter: 0, relatedCharacters: ["iluvatar", "manwe", "melkor", "varda"], relatedLocations: ["void-timeless"], greatTaleId: "creation-music" },
  { id: "discord-melkor", year: "Antes de los Días", title: "La Discordancia de Melkor", description: "Melkor introduce discordia en la Música tres veces, buscando destruir los temas de Ilúvatar. Ilúvatar incorpora incluso su maldad al propósito supremo.", importance: "CRITICAL", category: "Other", firstChapter: 0, relatedCharacters: ["melkor", "manwe", "iluvatar"], relatedLocations: ["void-timeless"], greatTaleId: "eternal-struggle" },
  { id: "vision-arda", year: "Antes de los Días", title: "La Visión de Arda", description: "Ilúvatar muestra a los Ainur la visión de todo cuanto sucedería: la historia de Arda desplegada antes que existiera. Los Ainur ven sus propias acciones y las de los Hijos de Ilúvatar.", importance: "CRITICAL", category: "Creation", firstChapter: 0, relatedCharacters: ["iluvatar", "manwe", "melkor"], relatedLocations: ["void-timeless", "valinor"], greatTaleId: "creation-music" },
  { id: "eä", year: "Año 1", title: "Pronunciación de 'Eä'", description: "Ilúvatar pronuncia 'Eä', convirtiendo la Música en realidad. Arda cobra existencia como mundo material. La Música se encarna en los Árboles, los Elementos, y la Tierra.", importance: "CRITICAL", category: "Creation", firstChapter: 0, relatedCharacters: ["iluvatar", "manwe"], relatedLocations: ["void-timeless", "valinor", "aman"], greatTaleId: "creation-music" },
  { id: "descent-valar", year: "Año 1", title: "Descenso de los Valar a Arda", description: "Los Valar descienden a Arda para completar su formación según la Visión. Escogen someterse a las limitaciones del mundo creado para cumplir los propósitos de Ilúvatar.", importance: "CRITICAL", category: "Other", firstChapter: 0, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo"], relatedLocations: ["aman", "valinor"], greatTaleId: "creation-music" },
  { id: "t1", year: "Años de las Lámparas", title: "Modelado de Arda", description: "Los Valar dan forma a Arda, creando montañas, valles, aguas y luz. La Música se manifiesta gradualmente en la creación material.", importance: "HIGH", category: "Creation", firstChapter: 0, relatedCharacters: ["manwe", "aule", "yavanna", "ulmo"], relatedLocations: ["aman", "ocean"], greatTaleId: "creation-music" },
  { id: "t2", year: "Años de las Lámparas", title: "Entrada de los Valar", description: "Los Valar descienden a Arda para darle forma.", importance: "CRITICAL", category: "Creation", firstChapter: 1, relatedCharacters: ["manwe", "varda", "aule", "yavanna"] },
  { id: "valar-take-form", year: "Años de las Lámparas", title: "Los Valar toman forma visible", description: "Los Valar se visten con galas del Mundo, tomando formas que se asemejan a los Hijos de Ilúvatar. Sus formas visibles son como vestiduras, no su verdadera naturaleza.", importance: "HIGH", category: "Other", firstChapter: 1, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo"], relatedLocations: ["valinor"], greatTaleId: "" },
  { id: "aratar-recognized", year: "Años de las Lámparas", title: "Los Aratar son reconocidos", description: "Se reconocen ocho como los principales de Arda: Manwë, Varda, Ulmo, Yavanna, Aulë, Mandos, Nienna, Oromë. Son los más poderosos y sus dominios gobiernan la mayor parte de Arda.", importance: "HIGH", category: "Other", firstChapter: 1, relatedCharacters: ["manwe", "varda", "ulmo", "yavanna", "aule", "mandos", "nienna", "orome"], relatedLocations: ["valinor"], greatTaleId: "" },
  { id: "tulkas-arrival", year: "Años de las Lámparas", title: "Llegada de Tulkas y huida de Melkor", description: "Tulkas llega a Arda al oír la batalla en el Pequeño Reino. Su risa y cólera ahuyentan a Melkor a las tinieblas exteriores, trayendo la primera paz a la Tierra Media.", importance: "HIGH", category: "Battle", firstChapter: 2, relatedCharacters: ["tulkas", "melkor"], relatedLocations: ["almaren"], greatTaleId: "" },
  { id: "lamps-creation", year: "Años de las Lámparas", title: "Construcción de las Grandes Lámparas", description: "Aulë construye Illuin (norte) y Ormal (sur), Varda las llena de luz sagrada, Manwë las consagra. Se elevan sobre pilares altísimos y la Tierra Media es iluminada en simetría perfecta.", importance: "CRITICAL", category: "Creation", firstChapter: 2, relatedCharacters: ["aule", "varda", "manwe"], relatedLocations: ["almaren"], greatTaleId: "primavera-caida-lamparas" },
  { id: "spring-arda", year: "Años de las Lámparas", title: "La Primavera de Arda", description: "Yavanna planta las semillas de vida en toda la Tierra Media. Del canto de su poder brotan flores, plantas, árboles y bestias. Los Valar moran en Almaren, en paz y regocijo. Es la época más bella de Arda.", importance: "HIGH", category: "Creation", firstChapter: 2, relatedCharacters: ["yavanna", "manwe"], relatedLocations: ["almaren"], greatTaleId: "primavera-caida-lamparas" },
  { id: "tulkas-nessa-wedding", year: "Años de las Lámparas", title: "Boda de Tulkas y Nessa en Almaren", description: "En la fiesta de la Primavera, Nessa baila sobre la hierba verde de Almaren ante todos los Valar. Desposada con Tulkas, celebrando la paz y la belleza del mundo.", importance: "LOW", category: "Other", firstChapter: 2, relatedCharacters: ["tulkas", "nessa"], relatedLocations: ["almaren"], greatTaleId: "" },
  { id: "lamps-destruction", year: "Años de las Lámparas", title: "Destrucción de las Lámparas", description: "Melkor regresa en secreto con ejército y espías. Construye Utumno bajo la Tierra. Corrompe la Primavera, envenena la vida. Derriba los pilares de las Lámparas. Illuin e Ormal caen, arruinando la simetría de Arda para siempre.", importance: "CRITICAL", category: "Destruction", firstChapter: 2, relatedCharacters: ["melkor"], relatedLocations: ["utumno-expanded", "almaren"], greatTaleId: "primavera-caida-lamparas" },
  { id: "valinor-founded", year: "Años de las Lámparas", title: "Fundación de Valinor y las Pelóri", description: "Los Valar abandonan la Tierra Media. Levantan las Montañas de Aman (Pelóri) como muralla de defensa. Fundan el reino sagrado de Valinor detrás de las montañas, donde nada se deteriora ni envejece.", importance: "CRITICAL", category: "Creation", firstChapter: 2, relatedCharacters: ["manwe", "varda"], relatedLocations: ["valinor", "pelori"], greatTaleId: "fundacion-valinor-arboles" },
  { id: "two-trees-birth", year: "Años de las Lámparas", title: "Nacimiento de los Dos Árboles", description: "Yavanna canta sobre Ezellohar ante los Valar. Nienna riega el montículo con lágrimas de piedad. De la Canción y las lágrimas nacen Telperion (plata, primero en florecer) y Laurelin (oro, de gran calor y luz). Comienza la Cuenta del Tiempo con su ciclo de 12 horas.", importance: "CRITICAL", category: "Creation", firstChapter: 2, relatedCharacters: ["yavanna", "nienna"], relatedLocations: ["ezellohar"], greatTaleId: "fundacion-valinor-arboles" },
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
    id: "primavera-caida-lamparas",
    title: "La Primavera y la Caída de las Lámparas",
    description: "Tulkas llega trayendo paz. Los Valar crean las Grandes Lámparas que iluminan Arda en simetría perfecta. Yavanna siembra la Primavera, la época más bella del mundo. Pero Melkor regresa, construye Utumno en secreto, corrompe la Primavera y destruye las Lámparas. La simetría de Arda nunca será restaurada.",
    details: "Cuando Tulkas llegó a Arda oyendo el battle en el Pequeño Reino, su cólera y risa ahuyentaron a Melkor, trayendo la primera paz al Mundo. Durante este tiempo de paz, Aulë construyó las dos Grandes Lámparas (Illuin y Ormal) sobre pilares altísimos, Varda las llenó de luz sagrada, y Manwë las consagró. Bajo la luz mezclada de ambas, Yavanna sembró la Primavera: de su canto brotaron flores, plantas, árboles y bestias en toda la Tierra Media. Los Valar moraron en Almaren, en la isla donde la luz de ambas Lámparas se mezclaba, en paz y regocijo. Pero Melkor, al caer el sueño de Tulkas, regresó en secreto. Construyó Utumno, una vasta fortaleza bajo la Tierra. Con espías entre los Maiar, corrompió la Primavera, envenenando la vida. Luego, en una noche terrible, derrumbó los pilares de las Lámparas. Illuin e Ormal cayeron, destruyendo la simetría original de Arda. Nunca fue restaurada.",
    protagonists: ["tulkas", "aule", "varda", "manwe", "yavanna"],
    antagonists: ["melkor"],
    keyCharacters: [],
    relatedLocations: ["almaren", "utumno-expanded"],
    relatedEvents: ["tulkas-arrival", "lamps-creation", "spring-arda", "lamps-destruction"],
    themes: ["Creación y Destrucción", "Traición", "Pérdida Irreversible", "Paz quebrada"],
    needToKnow: [
      "Tulkas llegó y ahuyentó a Melkor, trayendo la primera paz a Arda",
      "Las Lámparas Illuin y Ormal fueron creadas por Aulë, Varda y Manwë para iluminar la Tierra Media",
      "Melkor las destruyó en secreto, arruinando la simetría de Arda para siempre"
    ],
    afterReadingShouldKnow: [
      "Cada gran obra de los Valar será destruida por Melkor; este patrón se repite a través del Silmarillion",
      "Melkor ataca mientras los Valar celebran, aprovechando sus momentos de regocijo",
      "La Primavera de Arda fue la época más pura del Mundo y nunca volverá"
    ],
    startChapter: 2,
    endChapter: 2
  },
  {
    id: "fundacion-valinor-arboles",
    title: "La Fundación de Valinor y los Dos Árboles",
    description: "Los Valar se retiran a Aman y crean el reino sagrado de Valinor detrás de las Pelóri. Yavanna canta sobre Ezellohar y Nienna riega con lágrimas de piedad. Nacen Telperion y Laurelin, los Dos Árboles: fuente de toda luz sagrada. Comienza la Cuenta del Tiempo.",
    details: "Tras la destrucción de las Lámparas, los Valar abandonaron la Tierra Media a su destino oscuro. Levantaron las Montañas de Aman (Pelóri) como muralla de defensa contra Melkor. Detrás de estas montañas fundaron el reino sagrado de Valinor, donde nada se deteriora ni envejece. En el corazón de Valinor, ante el portal occidental de Valimar, se alza el montículo sagrado de Ezellohar. Allí, Yavanna cantó una Canción más poderosa que cualquier otra: cantó los Dos Árboles. Mientras ella cantaba, Nienna regaba el montículo con lágrimas de piedad. De la Canción y las lágrimas nacieron Telperion (plateado, hojas verde oscuro con plata por debajo) y Laurelin (dorado, de hojas verdes con bordes de oro y flores como cuernos encendidos de luz). Los Árboles tenían ciclos de 12 horas: cada uno florecía y brillaba durante 7 horas, luego menguaba durante 7. Había una hora dulce cuando ambos brillaban juntos. Con el nacimiento de los Árboles comenzó la Cuenta del Tiempo.",
    protagonists: ["yavanna", "nienna", "manwe"],
    antagonists: [],
    keyCharacters: ["varda", "aule"],
    relatedLocations: ["valinor", "ezellohar", "pelori", "valimar"],
    relatedEvents: ["valinor-founded", "two-trees-birth"],
    themes: ["Refugio Sagrado", "Luz Divina", "Belleza Preservada", "Esperanza en la Oscuridad"],
    needToKnow: [
      "Los Valar se retiraron a Aman y crearon Valinor como reino protegido",
      "Yavanna cantó los Dos Árboles sobre Ezellohar mientras Nienna lloraba",
      "Telperion (plata) y Laurelin (oro) crean un ciclo de 12 horas que inicia la Cuenta del Tiempo"
    ],
    afterReadingShouldKnow: [
      "Valinor es un paraíso protegido pero aislado de la Tierra Media, dejándola en oscuridad",
      "Los Dos Árboles son la creación más renombrada de Yavanna; su destino es central a todo el Silmarillion",
      "La luz de los Árboles es la más sagrada y será el origen del futuro Sol y Luna"
    ],
    startChapter: 2,
    endChapter: 2
  },
  {
    id: "creation-music",
    title: "La Creación del Mundo en la Música",
    description: "El acto supremo de creación: Ilúvatar levanta la Gran Música en la que los Ainur participan, tejiendo toda la historia de Arda. Tres veces Melkor intenta romper la armonía; tres veces es incorporado al propósito divino. La Música se vuelve real cuando Ilúvatar pronuncia 'Eä'.",
    details: "En el principio, antes del tiempo, Ilúvatar creó a los Ainur de su pensamiento. Les mostró tres temas y los invitó a cantar la Música de la creación. Juntos levantaron sus voces en un canto que contenía toda la historia de Arda desde su origen hasta su fin. Pero Melkor, presa de envidia, introdujo discordancia en tres ocasiones, buscando imponer su propia voluntad sobre la Música. Cada vez, Ilúvatar incorporó incluso la maldad al propósito supremo, transformando la discordancia en una parte mayor del plan. Luego Ilúvatar mostró a los Ainur la Visión de Arda: pudieron ver cómo la Música se manifestaría en realidad. Cuando Ilúvatar pronunció la palabra 'Eä', la Música cobró existencia. Los Valar descendieron entonces a Arda para completar lo que la Música había iniciado.",
    protagonists: ["iluvatar", "manwe", "varda", "aule", "yavanna", "ulmo"],
    antagonists: ["melkor"],
    keyCharacters: [],
    relatedLocations: ["void-timeless", "valinor", "aman", "ocean"],
    relatedEvents: ["creation-ainur", "great-music", "discord-melkor", "vision-arda", "eä", "descent-valar"],
    themes: ["Creación divina", "Orden vs Caos", "Soberanía absoluta", "Libertad responsable", "Incorporación del mal"],
    needToKnow: [
      "Ilúvatar crea a los Ainur como participantes en la creación",
      "La Gran Música contiene toda la historia de Arda antes de que exista",
      "Melkor introduce tres veces discordancia; Ilúvatar la incorpora al propósito",
      "La Visión muestra a los Ainur lo que sucederá en Arda",
      "Cuando Ilúvatar pronuncia 'Eä', la Música se vuelve realidad"
    ],
    afterReadingShouldKnow: [
      "La soberanía de Ilúvatar implica que incluso el mal sirve a Sus propósitos supremos",
      "La historia de Arda es el cumplimiento gradual de la Música ya tejida en la eternidad",
      "El sufrimiento y el conflicto son parte del plan divino, no accidentes",
      "Los Valar aceptan limitaciones voluntarias al descender a Arda",
      "El mundo es 'precantado': su historia existe en la Música antes de suceder"
    ],
    startChapter: 0,
    endChapter: 0
  },
  {
    id: "eternal-struggle",
    title: "La Eterna Lucha entre el Bien y el Mal",
    description: "Desde el momento de la Música, Melkor busca imponer su voluntad contra los propósitos de Ilúvatar. Su envidia y orgullo lo llevan a introducir discordancia, iniciando un conflicto que durará hasta la consumación de los tiempos.",
    details: "Desde que fue creado, Melkor fue el mayor de los Ainur en poder. Pero su corazón fue presa de la envidia: deseaba ser como Ilúvatar, capaz de crear según su propia voluntad. Buscó la Llama Imperecedera, el poder generador supremo. Cuando en la Música intentó imponer su discordancia, Ilúvatar la transformó cada vez. Pero Melkor no se arrepintió; su malicia se profundizó. Esta lucha entre la armonía que Ilúvatar propone y la discordancia que Melkor genera es la historia de Arda misma. Los Hijos de Ilúvatar—Elfos y Hombres—estarán en el centro de este conflicto. Incluso en su derrota final, Melkor habrá dejado huella en el mundo, pues Ilúvatar permitió que la libertad de sus criaturas significara la libertad incluso de rechazarlo.",
    protagonists: ["iluvatar", "manwe", "varda"],
    antagonists: ["melkor"],
    keyCharacters: [],
    relatedLocations: ["void-timeless", "valinor"],
    relatedEvents: ["great-music", "discord-melkor"],
    themes: ["Bien vs Mal", "Orden vs Caos", "Libre albedrío", "Envidia y soberbia", "Perseverancia en la luz"],
    needToKnow: [
      "Melkor es el mayor de los Ainur en poder pero está corrupto",
      "Busca la Llama Imperecedera y el poder de crear",
      "Introduce discordancia tres veces en la Música",
      "Ilúvatar transforma incluso su malicia en parte del propósito supremo",
      "La lucha entre el bien y el mal es fundamental a la existencia de Arda"
    ],
    afterReadingShouldKnow: [
      "El bien no triunfa automáticamente; requiere la perseverancia de los que aman la luz",
      "Incluso el poder casi divino puede ser corrompido por la envidia y el orgullo",
      "La libertad verdadera implica la posibilidad real de rechazar el bien",
      "La derrota de Melkor será victoria, pero su influencia permanecerá en Arda",
      "El Silmarillion es la historia del esfuerzo infinito de contrarrestar la discordancia"
    ],
    startChapter: 0,
    endChapter: 0
  },
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
    id: "irreversible-loss",
    name: "La Pérdida Irreversible",
    analysis: "Cada destrucción causada por Melkor produce daño permanente. La simetría original de Arda nunca fue restaurada tras la caída de las Lámparas. Este patrón se repetirá: los Dos Árboles serán destruidos, los Silmarils permanecerán perdidos. El Mundo está marcado por la marca de Melkor para siempre.",
    relatedGreatTales: ["primavera-caida-lamparas"],
    relatedCharacters: ["melkor", "manwe", "yavanna"]
  },
  {
    id: "valar-withdrawal",
    name: "La Retirada de los Valar",
    analysis: "Al retirarse a Valinor detrás de las Pelóri, los Valar crean un paraíso protegido pero se apartan de la Tierra Media, dejándola en penumbra. Solo Ulmo, Yavanna y Oromë la visitaban en secreto. Este aislamiento tendrá profundas consecuencias para Elfos y Hombres, obligándolos a luchar solos contra Melkor.",
    relatedGreatTales: ["fundacion-valinor-arboles"],
    relatedCharacters: ["manwe", "ulmo", "yavanna", "orome"]
  },
  {
    id: "death-as-gift",
    name: "La Muerte como Don",
    analysis: "La mortalidad humana es un regalo de Ilúvatar, no una maldición. Los Elfos están atados al Mundo; los Hombres son libres de partir a un destino desconocido. Melkor corrompió esta verdad, convirtiéndola en fuente de miedo y envidia. Incluso los Poderes envidiarán eventualmente la Muerte de los Hombres.",
    relatedGreatTales: ["fundacion-valinor-arboles"],
    relatedCharacters: ["iluvatar", "melkor"]
  },
  {
    id: "divine-hierarchy",
    name: "La Jerarquía Divina",
    analysis: "Los Valar (14) gobiernan bajo la autoridad de Ilúvatar, los Maiar sirven a los Valar, y todo está ordenado en una cadena clara de responsabilidad. Manwë es el Rey designado, pero todos están sometidos a la voluntad suprema de Ilúvatar. Esta jerarquía refleja el orden mismo de la creación.",
    relatedGreatTales: [],
    relatedCharacters: ["manwe", "varda", "ulmo", "iluvatar"]
  },
  {
    id: "forms-as-garments",
    name: "Las Formas como Vestiduras",
    analysis: "Los Valar pueden ir sin forma; sus apariencias visibles son como ropas que visten, no su esencia. La diferencia de género entre ellos viene de temperamento y naturaleza, no de la forma corporal. Esto refleja la naturaleza espiritual de los Ainur, que tienen poder sobre la materia pero no están confinados a ella.",
    relatedGreatTales: [],
    relatedCharacters: ["manwe", "varda", "aule", "yavanna"]
  },
  {
    id: "diversity-of-domains",
    name: "Diversidad de Dominios",
    analysis: "Cada Vala tiene un dominio específico (aire, agua, tierra, vida, muerte, sueños, fuerza, caza) que refleja la riqueza y complejidad de la creación. Estas esferas de influencia no entran en conflicto sino que se complementan, mostrando cómo la armonía puede existir dentro de la diferencia.",
    relatedGreatTales: [],
    relatedCharacters: ["manwe", "ulmo", "aule", "yavanna", "mandos", "nienna", "orome", "tulkas"]
  },
  {
    id: "divine-sovereignty",
    name: "La Soberanía Absoluta de Ilúvatar",
    analysis: "Ilúvatar es el Único cuya voluntad no puede ser frustrada. Incluso la maldad de Melkor, introducida en tres ocasiones en la Música, es transformada por Ilúvatar en parte de Su propósito supremo. Esto sugiere una visión del destino donde la libertad de las criaturas existe dentro de un plan divino inviolable. No hay conflicto entre la soberanía de Dios y la libertad humana; ambas son verdaderas simultáneamente.",
    relatedGreatTales: ["creation-music", "eternal-struggle"],
    relatedCharacters: ["iluvatar", "manwe", "melkor"]
  },
  {
    id: "good-evil-intertwined",
    name: "El Bien y el Mal Entretejidos",
    analysis: "Desde la Música misma, el bien y el mal no son fuerzas totalmente separadas sino aspectos de una realidad única. La discordancia de Melkor es incorporada a la Música, no eliminada de ella. Esto refleja una visión sofisticada donde el sufrimiento y el conflicto no son accidentes sino partes intencionales del diseño divino. La victoria sobre el mal no será su aniquilación sino su redención mediante Ilúvatar.",
    relatedGreatTales: ["creation-music", "eternal-struggle"],
    relatedCharacters: ["iluvatar", "melkor", "manwe"]
  },
  {
    id: "freedom-creation",
    name: "La Libertad en la Creación",
    analysis: "Los Ainur son creados con potencia para participar en la Música, no como marionetas. Incluso Melkor tiene verdadera libertad para rechazar los propósitos de Ilúvatar. Los Hijos de Ilúvatar—Elfos y Hombres—serán dotados de libertad tan profunda que sus elecciones importan eternamente. Esta libertad es el corazón del plan divino: Ilúvatar ama las criaturas libres, no criaturas forzadas a obediencia.",
    relatedGreatTales: ["creation-music"],
    relatedCharacters: ["iluvatar", "manwe"]
  },
  {
    id: "vision-realization",
    name: "Visión y Realización",
    analysis: "La Música es la Visión en potencia; la Visión es la Música revelada; 'Eä' es la Música hecha carne. Existe un triple movimiento de abstracción hacia lo concreto. La Historia de Arda es el despliegue lento de la Música que ya existe eternamente. Nada que suceda en Arda será sorpresa para Ilúvatar; todo fue cantado desde el principio.",
    relatedGreatTales: ["creation-music"],
    relatedCharacters: ["iluvatar"]
  },
  {
    id: "cosmic-order",
    name: "El Orden en el Cosmos",
    analysis: "Aunque la discordancia de Melkor introduce caos aparente en la Música, el orden fundamental permanece. Los Valar descienden a Arda no para crear de la nada sino para completar lo que la Música ya ha esbozado. El cosmos no es el resultado de accidente o de competencia sin fin, sino el cumplimiento ordenado de un plan eterno.",
    relatedGreatTales: ["creation-music"],
    relatedCharacters: ["iluvatar", "manwe", "aule", "yavanna"]
  },
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
  // Level 0: Ilúvatar (centered, supreme creator)
  { id: "iluvatar", characterId: "iluvatar", position: { x: 1050, y: 0 } },

  // Level 1: All 14 Valar in SAME horizontal line - well separated
  // Melkor (The adversary, at left)
  { id: "melkor", characterId: "melkor", position: { x: 100, y: 150 } },

  // Pair 1: Manwë and Varda (King and Queen)
  { id: "manwe", characterId: "manwe", position: { x: 320, y: 150 } },
  { id: "varda", characterId: "varda", position: { x: 540, y: 150 } },

  // Pair 2: Aulë and Yavanna (Crafter and Life)
  { id: "aule", characterId: "aule", position: { x: 760, y: 150 } },
  { id: "yavanna", characterId: "yavanna", position: { x: 980, y: 150 } },

  // Ulmo (Ally of Manwë)
  { id: "ulmo", characterId: "ulmo", position: { x: 1200, y: 150 } },

  // Pair 3: Mandos and Vairë (Death and History)
  { id: "mandos", characterId: "mandos", position: { x: 1420, y: 150 } },
  { id: "vaire", characterId: "vaire", position: { x: 1640, y: 150 } },

  // Pair 4: Irmo and Estë (Dreams and Rest)
  { id: "irmo", characterId: "irmo", position: { x: 1860, y: 150 } },
  { id: "este", characterId: "este", position: { x: 2080, y: 150 } },

  // Nienna (Compassion)
  { id: "nienna", characterId: "nienna", position: { x: 2300, y: 150 } },

  // Pair 5: Tulkas and Nessa (Strength and Dance)
  { id: "tulkas", characterId: "tulkas", position: { x: 2520, y: 150 } },
  { id: "nessa", characterId: "nessa", position: { x: 2740, y: 150 } },

  // Pair 6: Oromë and Vána (Hunt and Youth)
  { id: "orome", characterId: "orome", position: { x: 2960, y: 150 } },
  { id: "vana", characterId: "vana", position: { x: 3180, y: 150 } },

  // Level 2: Maiar and Elven characters
  { id: "finwe", characterId: "finwe", position: { x: 100, y: 400 } },
  { id: "olorin", characterId: "olorin", position: { x: 400, y: 400 } },
  { id: "melian", characterId: "melian", position: { x: 700, y: 400 } },
  { id: "thingol", characterId: "thingol", position: { x: 1000, y: 400 } },

  // Level 3: Children of Finwë and others
  { id: "feanor", characterId: "feanor", position: { x: 50, y: 600 } },
  { id: "fingolfin", characterId: "fingolfin", position: { x: 150, y: 600 } },
  { id: "finarfin", characterId: "finarfin", position: { x: 250, y: 600 } },
  { id: "luthien", characterId: "luthien", position: { x: 850, y: 600 } },
  { id: "turin", characterId: "turin", position: { x: 1250, y: 600 } },

  // Level 4: Later generations
  { id: "galadriel", characterId: "galadriel", position: { x: 250, y: 800 } },
  { id: "beren", characterId: "beren", position: { x: 900, y: 800 } },
  { id: "earendil", characterId: "earendil", position: { x: 1250, y: 800 } }
];

export const flowEdgesData: FlowEdge[] = [
  // Level 0-1: Ilúvatar creates Valar
  // Valar relationships - Spouses only (clean, no clutter)
  { id: "e-manwe-varda", source: "manwe", target: "varda", label: "esposos" },
  { id: "e-aule-yavanna", source: "aule", target: "yavanna", label: "esposos" },
  { id: "e-mandos-vaire", source: "mandos", target: "vaire", label: "esposos" },
  { id: "e-irmo-este", source: "irmo", target: "este", label: "esposos" },
  { id: "e-tulkas-nessa", source: "tulkas", target: "nessa", label: "esposos" },
  { id: "e-orome-vana", source: "orome", target: "vana", label: "esposos" },
  // Level 1-2: Other relationships from Ainulindalë forward
  { id: "e-finwe-feanor", source: "finwe", target: "feanor", label: "hijo" },
  { id: "e-finwe-fingolfin", source: "finwe", target: "fingolfin", label: "hijo" },
  { id: "e-finwe-finarfin", source: "finwe", target: "finarfin", label: "hijo" },
  { id: "e-finarfin-galadriel", source: "finarfin", target: "galadriel", label: "hija" },
  { id: "e-thingol-luthien", source: "thingol", target: "luthien", label: "hija" },
  { id: "e-melian-luthien", source: "melian", target: "luthien", label: "hija" },
  { id: "e-beren-luthien", source: "beren", target: "luthien", label: "esposos" }
];
