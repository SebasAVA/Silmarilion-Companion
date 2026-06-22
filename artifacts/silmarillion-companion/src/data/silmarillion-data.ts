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

// ==================== CHAPTERS ====================
export const chaptersData: Chapter[] = [
  {
    id: 0,
    title: "Ainulindalë",
    subtitle: "La Música de los Ainur",
    description: "En el principio, Ilúvatar el Único creó a los Ainur de su pensamiento. Juntos cantaron una Gran Música que dio forma a la visión del mundo. Melkor, ambicioso, introdujo discordia en la música, pero Ilúvatar incorporó incluso su desarmonia en un propósito mayor. Tras la visión, algunos Ainur descendieron a Eä para darle forma.",
    needToKnow: [
      "Ilúvatar es el Creador Único, eterno y todopoderoso.",
      "Los Ainur son seres angelicales creados de los pensamientos de Ilúvatar antes de la existencia de todas las cosas.",
      "La creación ocurre a través de música: Ilúvatar propone temas, los Ainur cantan.",
      "Melkor es el Ainur más grande en poder, pero ambicioso, envidioso y rebelde.",
      "Melkor introduce discordia tres veces en la Música (tres temas), causando conflicto.",
      "Ilúvatar lidera cada intento de Melkor en un tema más grande, incorporando la discordia a Su propósito.",
      "Manwë es hermano de Melkor en el pensamiento y primer instrumento del segundo tema.",
      "Ulmo recibe instrucción especial de Ilúvatar y sus pensamientos se vuelven al agua.",
      "Aulë el Creador reflexiona sobre la materia de la Tierra con poder casi igual al de Melkor.",
      "La música causa que el mundo sea visto en una Visión: Ilúvatar muestra a los Ainur qué han creado.",
      "Los Hijos de Ilúvatar (Elfos y Hombres) aparecen en la Visión como criaturas nuevas y libres.",
      "Todos los Ainur, incluso Melkor, aman a los Hijos al verlos en la Visión.",
      "Ilúvatar convierte la Visión en realidad: declara 'Eä' (Que Sea) y el Mundo Es.",
      "Los Ainur que descienden a Eä se limitan al Mundo y se llaman los Valar.",
      "Algunos Ainur permanecen con Ilúvatar más allá de los confines del Mundo.",
      "Melkor comienza inmediatamente a interferir y destruir los trabajos de los otros Ainur en Arda.",
      "La Primera Batalla de los Valar comienza: Melkor vs. los otros Ainur por el dominio de Arda.",
      "El conflicto entre el bien y el mal es fundamental al mundo desde su creación misma.",
      "Este capítulo es la introducción a toda la mitología: nada en el Silmarillion puede entenderse sin él."
    ],
    shouldKnowAfter: [
      "La discordia de Melkor NO fue un error sino prevista por Ilúvatar.",
      "Incluso la rebelión y el mal son permitidos por el Creador como parte de Su propósito mayor.",
      "El conflicto cósmico que durará toda la Primera Edad fue sembrado en la Música misma.",
      "Melkor se convierte en 'Morgoth' (El Enemigo Negro), el antagonista primario de toda la historia.",
      "Los Ainur nombrados (Manwë, Ulmo, Aulë) serán figuras centrales en el resto del Silmarillion.",
      "La visión del mundo fue incompleta: los Valar no vieron el fin de la Tercera Edad.",
      "La Llama Imperecedera en el corazón del Mundo es la fuente de toda vida y poder.",
      "El concepto de libre albedrío existe incluso para seres tan grandes: Melkor eligió su rebelión.",
      "La música es tanto literal como metafórica: los eventos del mundo continúan la música de la creación.",
      "Eä (el Mundo Que Es) es tanto físico como espiritual: Arda es el reino material, pero hay más allá.",
      "Este es un cuento de CREACIÓN que prepara para un cuento de CAÍDA: todo lo hermoso será destruido.",
      "El tema del 'dolor en la belleza' aparece ya aquí: incluso la Música de Ilúvatar contiene 'dolor sin medida'.",
      "Los Hijos de Ilúvatar son el PROPÓSITO del mundo: todo existe para ellos.",
      "El riesgo de la libertad es real incluso en el universo de Tolkien: los seres libres pueden rechazar a su Creador.",
      "Esto NO es una cosmología simple de bien vs. mal, sino una reflexión teológica compleja.",
      "La esperanza reside en que incluso la maldad será usada para fines mayores que la maldad misma.",
      "El lector debe entender que NADA de lo que sigue puede ser entendido sin esta base cosmológica."
    ]
  },
  { id: 1, title: "Valaquenta", subtitle: "Historia de los Valar", description: "Los nombres y naturalezas de los Valar y los Maiar, los grandes poderes que rigen el mundo.", needToKnow: ["Los Valar son los mayores de los Ainur que entraron en Arda.", "Manwë es el Rey de Arda, señor del aire.", "Ulmo domina las aguas y Aulë es el gran forjador.", "Melkor perdió su estatus como Vala debido a su orgullo.", "Los Maiar son espíritus de menor poder que sirven a los Valar."] },
  { id: 2, title: "Quenta Silmarillion I", subtitle: "Del comienzo de los días", description: "La conformación inicial de Arda, las Primeras Guerras con Melkor y la destrucción de las Lámparas.", needToKnow: ["Los Valar dieron forma al mundo pese a los ataques de Melkor.", "Se crearon las Grandes Lámparas, Illuin y Ormal.", "Melkor destruyó las lámparas, arruinando la simetría original.", "Los Valar se retiraron a Aman, en el oeste.", "Allí fundaron el reino bendecido de Valinor."] },
  { id: 3, title: "Quenta Silmarillion II", subtitle: "De Aulë y Yavanna", description: "La creación secreta de los Enanos y el despertar de los Ents.", needToKnow: ["Aulë creó a los Enanos impaciente por tener a quién enseñar.", "Ilúvatar les dio vida verdadera, pero ordenó que durmieran hasta el Despertar de los Elfos.", "Yavanna temió por los bosques ante los futuros Enanos y Hombres.", "A petición de Yavanna, surgieron los Ents (Pastores de Árboles).", "El equilibrio entre la piedra y el bosque fue establecido."] },
  { id: 4, title: "Quenta Silmarillion III", subtitle: "Del advenimiento de los Elfos", description: "Bajo las estrellas, despiertan los Primeros Nacidos en Cuiviénen.", needToKnow: ["Los Elfos despertaron junto al lago Cuiviénen.", "Fueron encontrados primero por Melkor y luego por Oromë.", "Los Valar hicieron la guerra a Melkor para proteger a los Elfos.", "Melkor fue encadenado y llevado a Valinor.", "Los Valar invitaron a los Elfos a vivir con ellos en Aman."] },
  { id: 5, title: "Quenta Silmarillion IV", subtitle: "De Thingol y Melian", description: "Elwe Singollo se pierde en los bosques y encuentra un amor inmortal.", needToKnow: ["Elwë, líder de los Teleri, conoció a la Maia Melian en los bosques de Nan Elmoth.", "Cayeron en un profundo trance de amor.", "Muchos de su pueblo se quedaron a buscarlo, formando los Sindar.", "Elwë (Thingol) nunca llegó a Valinor.", "Fundaron el reino escondido de Doriath."] },
  { id: 6, title: "Quenta Silmarillion V", subtitle: "De Eldamar y los Príncipes", description: "Los Elfos que llegaron a Valinor fundan sus ciudades en la luz de los Árboles.", needToKnow: ["Los Vanyar, Noldor y parte de los Teleri llegaron a Aman.", "Construyeron la ciudad de Tirion y el puerto de Alqualondë.", "Finwë gobernaba a los Noldor.", "Olwë, hermano de Thingol, lideraba a los Teleri.", "Los Elfos prosperaron en conocimiento y arte bajo la tutela de los Valar."] },
  { id: 7, title: "Quenta Silmarillion VI", subtitle: "De Fëanor", description: "Nace el más grande y trágico de los Elfos, y se siembra la discordia en la casa de Finwë.", needToKnow: ["Fëanor nació de Míriel, quien murió de cansancio al darle a luz.", "Finwë volvió a casarse con Indis y tuvo a Fingolfin y Finarfin.", "Fëanor se convirtió en el herrero y erudito más talentoso.", "Inventó las letras Tengwar.", "La relación entre Fëanor y sus medios hermanos era tensa."] },
  { id: 8, title: "Quenta Silmarillion VII", subtitle: "De los Silmarils", description: "Fëanor encierra la luz de los Dos Árboles en tres joyas inigualables.", needToKnow: ["Fëanor forjó los tres Silmarils.", "Estas joyas contenían la luz pura de Laurelin y Telperion.", "Melkor, liberado de sus cadenas, empezó a codiciar las joyas.", "Esparció mentiras para enemistar a los Noldor con los Valar.", "Fëanor desenvainó su espada contra Fingolfin y fue exiliado."], shouldKnowAfter: ["La creación de los Silmarils, aunque hermosa, fue lo que atrajo la atención de Morgoth.", "El orgullo de Fëanor en su obra lo hizo vulnerable a la manipulación de Morgoth.", "Este es el momento en que la tragedia de los Elfos realmente comienza.", "El juramento de recuperar los Silmarils traerá infinito dolor a los Noldor durante edades."] },
  { id: 9, title: "Quenta Silmarillion VIII", subtitle: "Del oscurecimiento de Valinor", description: "La venganza de Melkor trae la oscuridad al Reino Bendecido.", needToKnow: ["Melkor se alió con Ungoliant, una criatura en forma de araña gigante.", "Juntos destruyeron los Dos Árboles de Valinor.", "Oscuridad total cayó sobre Aman.", "Melkor asesinó al Rey Finwë en Formenos.", "Melkor robó los Silmarils y huyó hacia la Tierra Media."] },
  { id: 10, title: "Quenta Silmarillion IX", subtitle: "De la fuga de los Noldor", description: "Fëanor encabeza la rebelión de los Noldor para recuperar los Silmarils y vengar la muerte de su padre.", needToKnow: ["Fëanor levantó a los Noldor en armas contra Morgoth.", "Jura un terrible juramento de recuperar los Silmarils a cualquier precio.", "Los Noldor se dividen entre los hijos de Finwë: Fingolfin y Finarfin.", "Finarfin se arrepiente y vuelve, pero sus hijos continúan.", "Los Noldor navegan hacia la Tierra Media en los barcos de los Teleri."] },
  { id: 11, title: "Quenta Silmarillion X", subtitle: "De Mithrim", description: "Llegada de los Noldor a la Tierra Media y primeros enfrentamientos con Morgoth.", needToKnow: ["Los Noldor llegan a las costas de Mithrim en el norte de Beleriand.", "Fingolfin aún estaba en Aman cuando Fëanor huyó, lo que causó divisiones.", "Los Noldor establecen sus primeros asentamientos en tierras hostiles.", "Morgoth envía orcos para atacarlos, pero los Noldor prevalecen inicialmente.", "Fëanor es mortalmente herido en batalla y muere poco después."] },
  { id: 12, title: "Quenta Silmarillion XI", subtitle: "El Cuento de los Hijos de Húrin", description: "Una de las mayores tragedias del Silmarillion: la maldición de Túrin Turambar.", needToKnow: ["Túrin es el hijo de Húrin, guerrero famoso de los Noldor.", "Morgoth pone una maldición sobre Túrin que lo persigue toda su vida.", "Su vida está marcada por tragedias y amores imposibles.", "Sus actos, aunque valientes, traen ruina a sus aliados.", "Su historia es la más trágica de la Primera Edad."] },
  { id: 13, title: "Quenta Silmarillion XII", subtitle: "De Beren y Lúthien", description: "La historia de un Hombre y una Elfa que desafían a los poderes del mal.", needToKnow: ["Beren es un Hombre que se enamora de Lúthien, hija del Rey Thingol.", "Thingol impone una prueba imposible: traer un Silmaril de la corona de Morgoth.", "Con la ayuda de Lúthien y su magia, Beren logra lo imposible.", "Ambos sufren grandes sufrimientos pero su amor los transciende.", "Esta es la historia de mayor belleza del Silmarillion."] },
  { id: 14, title: "Quenta Silmarillion XIII", subtitle: "De Nargothrond y su ruina", description: "El reino subterráneo de los Elfos es construido y destruido por orgullo y traición.", needToKnow: ["Nargothrond fue fundada por Finrod Felagund en el río Narog.", "Finrod fue honesto pero no lo suficientemente astuto.", "Túrin vino a Nargothrond y causó división entre sus elfos.", "El dragón Glaurung fue enviado por Morgoth y destruyó el reino.", "Los sobrevivientes huyeron, algunos hacia el este."] },
  { id: 15, title: "Quenta Silmarillion XIV", subtitle: "De Beleriand y sus Reinos", description: "Una descripción del mapa político y geográfico de Beleriand durante la Primera Edad.", needToKnow: ["Beleriand se divide en varios reinos entre los Elfos.", "El norte está bajo el dominio de Fingolfin y sus hijos.", "El sur tiene reinos como Nargothrond y Doriath.", "Cada reino tiene su propia historia y destino.", "El mapa es complejo pero crucial para entender la Primera Edad."] },
  { id: 16, title: "Quenta Silmarillion XV", subtitle: "De la Segunda y Tercera Edad", description: "El fin de la Primera Edad y el comienzo de nuevas épocas.", needToKnow: ["La Primera Edad termina con la Guerra de la Cólera.", "Los Valar finalmente intervienen directamente contra Morgoth.", "La mayoría de los Elfos parten hacia el Occidente.", "Algunos Elfos permanecen en la Tierra Media.", "Comienza la Segunda Edad con nuevas civilizaciones."] },
];

// ==================== CHARACTERS ====================
export const charactersData: Character[] = [
  {
    id: "iluvatar",
    name: "Ilúvatar",
    aliases: ["Eru", "El Único", "Padre de Todos"],
    race: "Divino",
    alignment: "good",
    role: "Creador Supremo",
    description: "El Creador Único y eterno. Propone la Música de los Ainur mediante la cual el mundo es creado.",
    importance: "CRITICAL",
    firstChapter: 0,
    relationships: [
      { characterId: "melkor", type: "enemy" },
      { characterId: "manwe", type: "ally" }
    ],
    locations: [],
    events: [],
    greatTales: []
  },
  {
    id: "melkor",
    name: "Melkor",
    aliases: ["El Enemigo", "Morgoth", "El Enemigo Negro"],
    race: "Ainur",
    alignment: "evil",
    role: "Antagonista Principal",
    description: "El Ainur más poderoso después de Ilúvatar. Ambicioso y rebelde, introduce discordia en la Música y después en Arda. Más tarde conocido como Morgoth.",
    importance: "CRITICAL",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "enemy" },
      { characterId: "manwe", type: "enemy" },
      { characterId: "aule", type: "enemy" },
      { characterId: "ulmo", type: "enemy" }
    ],
    locations: ["arda", "angband"],
    events: [],
    greatTales: ["beren-luthien", "turin", "fall-gondolin"]
  },
  {
    id: "manwe",
    name: "Manwë",
    aliases: ["Súlimo", "Señor del Aire", "Rey de Arda"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Líder de los Valar",
    description: "El más noble de los Ainur. Hermano de Melkor en el pensamiento, pero opuesto en propósito. Líder de la resistencia contra Melkor y futuro Rey de Arda.",
    importance: "CRITICAL",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "melkor", type: "enemy" },
      { characterId: "ulmo", type: "ally" },
      { characterId: "aule", type: "ally" }
    ],
    locations: ["aman", "valinor"],
    events: [],
    greatTales: []
  },
  {
    id: "ulmo",
    name: "Ulmo",
    aliases: ["Señor de las Aguas", "Rey del Mar"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Señor de las Aguas",
    description: "El Ainur cuyo pensamiento se vuelve al agua. Recibe instrucción especial de Ilúvatar. Protector de la belleza acuática.",
    importance: "HIGH",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "manwe", type: "ally" },
      { characterId: "melkor", type: "enemy" }
    ],
    locations: ["aman", "arda"],
    events: [],
    greatTales: []
  },
  {
    id: "aule",
    name: "Aulë",
    aliases: ["El Forjador", "Señor de la Tierra"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Creador de Formas",
    description: "El Ainur cuyo pensamiento reflexiona sobre la materia. Creador de obras bellas y duraderas. Poder casi igual a Melkor pero dedicado al bien.",
    importance: "HIGH",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "manwe", type: "ally" },
      { characterId: "melkor", type: "enemy" }
    ],
    locations: ["aman", "arda"],
    events: [],
    greatTales: []
  },
  {
    id: "finwe",
    name: "Finwë",
    aliases: ["Rey de los Noldor"],
    race: "Elfo",
    alignment: "good",
    role: "Rey de los Noldor",
    description: "Primer Rey de los Noldor en Aman. Padre de Fëanor, Fingolfin y Finarfin.",
    importance: "HIGH",
    firstChapter: 6,
    relationships: [
      { characterId: "feanor", type: "child" },
      { characterId: "fingolfin", type: "child" },
      { characterId: "finarfin", type: "child" }
    ],
    locations: ["valinor"],
    events: [],
    greatTales: []
  },
  {
    id: "feanor",
    name: "Fëanor",
    aliases: ["El Mayor de los Elfos", "Creador de los Silmarils"],
    race: "Elfo",
    alignment: "good",
    role: "Maestro Artesano y Rebelde",
    description: "El más talentoso de los Elfos. Creador de los Silmarils. Su orgullo y obsesión con sus creaciones lo llevan a la rebelión.",
    importance: "CRITICAL",
    firstChapter: 6,
    deathInfo: {
      chapter: 10,
      description: "Muere de sus heridas en batalla contra Morgoth"
    },
    relationships: [
      { characterId: "finwe", type: "child" },
      { characterId: "fingolfin", type: "sibling" },
      { characterId: "finarfin", type: "sibling" }
    ],
    locations: ["valinor", "beleriand"],
    events: [],
    greatTales: []
  },
  {
    id: "fingolfin",
    name: "Fingolfin",
    aliases: ["Segundo Rey de los Noldor"],
    race: "Elfo",
    alignment: "good",
    role: "Rey de los Noldor",
    description: "Hijo de Finwë y medio hermano de Fëanor. Más cuerdo y menos arrogante. Líder noble de los Noldor en la Tierra Media.",
    importance: "HIGH",
    firstChapter: 6,
    relationships: [
      { characterId: "finwe", type: "child" },
      { characterId: "feanor", type: "sibling" },
      { characterId: "finarfin", type: "sibling" }
    ],
    locations: ["valinor", "beleriand"],
    events: [],
    greatTales: []
  },
  {
    id: "finarfin",
    name: "Finarfin",
    aliases: ["Tercero de los Noldor"],
    race: "Elfo",
    alignment: "good",
    role: "Rey de los Noldor",
    description: "Hijo de Finwë. Más sabio y reflexivo. Regresa a Valinor cuando reconoce el error de la rebelión.",
    importance: "MEDIUM",
    firstChapter: 6,
    relationships: [
      { characterId: "finwe", type: "child" },
      { characterId: "feanor", type: "sibling" },
      { characterId: "fingolfin", type: "sibling" }
    ],
    locations: ["valinor", "beleriand"],
    events: [],
    greatTales: []
  },
  {
    id: "thingol",
    name: "Thingol",
    aliases: ["Elwë Singollo", "Rey de Doriath"],
    race: "Elfo",
    alignment: "good",
    role: "Rey del Bosque de Doriath",
    description: "Líder de los Teleri que se perdió en los bosques y encontró amor con Melian. Funda el reino de Doriath.",
    importance: "HIGH",
    firstChapter: 5,
    relationships: [
      { characterId: "melian", type: "spouse" }
    ],
    locations: ["doriath"],
    events: [],
    greatTales: []
  },
  {
    id: "melian",
    name: "Melian",
    aliases: ["Reina de Doriath"],
    race: "Maia",
    alignment: "good",
    role: "Reina de Doriath",
    description: "Una Maia que amó a Thingol. Reina de Doriath. Posee gran poder y sabiduría.",
    importance: "HIGH",
    firstChapter: 5,
    relationships: [
      { characterId: "thingol", type: "spouse" }
    ],
    locations: ["doriath"],
    events: [],
    greatTales: []
  },
  {
    id: "luthien",
    name: "Lúthien",
    aliases: ["La Más Bella de los Elfos", "Lúthien Tinúviel"],
    race: "Elfo",
    alignment: "good",
    role: "Heroína de Mayor Belleza",
    description: "Hija de Thingol y Melian. Se enamora de Beren y desafía a los poderes del mal.",
    importance: "CRITICAL",
    firstChapter: 12,
    relationships: [
      { characterId: "thingol", type: "child" },
      { characterId: "melian", type: "child" },
      { characterId: "beren", type: "spouse" }
    ],
    locations: ["doriath", "beleriand"],
    events: [],
    greatTales: ["beren-luthien"]
  },
  {
    id: "beren",
    name: "Beren",
    aliases: ["Camarog", "Beren el Valiente"],
    race: "Hombre",
    alignment: "good",
    role: "Guerrero y Héroe",
    description: "Un Hombre que se enamora de la Elfa Lúthien. Realiza hazañas imposibles movido por su amor.",
    importance: "CRITICAL",
    firstChapter: 12,
    relationships: [
      { characterId: "luthien", type: "spouse" }
    ],
    locations: ["beleriand"],
    events: [],
    greatTales: ["beren-luthien"]
  },
  {
    id: "turin",
    name: "Túrin",
    aliases: ["Mormegil", "Gorthol", "Turambar", "El Hombre Salvaje"],
    race: "Hombre",
    alignment: "good",
    role: "Guerrero Maldecido",
    description: "Hijo de Húrin. Bajo una maldición de Morgoth que lo persigue toda su vida. Su historia es la más trágica.",
    importance: "CRITICAL",
    firstChapter: 12,
    relationships: [
      { characterId: "hurin", type: "child" }
    ],
    locations: ["beleriand"],
    events: [],
    greatTales: ["turin"]
  },
  {
    id: "hurin",
    name: "Húrin",
    aliases: ["Thalion", "El Fuerte"],
    race: "Hombre",
    alignment: "good",
    role: "Señor de Dor-lómin",
    description: "Guerrero valiente. Padre de Túrin. Capturado por Morgoth pero permanece desafiante.",
    importance: "HIGH",
    firstChapter: 12,
    relationships: [
      { characterId: "turin", type: "child" }
    ],
    locations: ["beleriand"],
    events: [],
    greatTales: ["turin"]
  },
  {
    id: "galadriel",
    name: "Galadriel",
    aliases: ["La Sabia", "Reina de Lothlórien"],
    race: "Elfo",
    alignment: "good",
    role: "Sabia Elfa",
    description: "Hija de Finarfin. Sabia y poderosa. Sobrevive la Primera Edad y continúa en la Segunda y Tercera.",
    importance: "HIGH",
    firstChapter: 6,
    relationships: [
      { characterId: "finarfin", type: "child" }
    ],
    locations: ["valinor", "beleriand"],
    events: [],
    greatTales: []
  },
  {
    id: "finrod",
    name: "Finrod Felagund",
    aliases: ["Rey de Nargothrond"],
    race: "Elfo",
    alignment: "good",
    role: "Rey de Nargothrond",
    description: "Hijo de Finarfin. Funda el reino de Nargothrond. Ayuda a Beren en su misión.",
    importance: "HIGH",
    firstChapter: 10,
    relationships: [
      { characterId: "finarfin", type: "child" }
    ],
    locations: ["nargothrond"],
    events: [],
    greatTales: ["beren-luthien"]
  },
  {
    id: "earendil",
    name: "Eärendil",
    aliases: ["El Marinero", "Gil-Eärendil", "La Estrella Matutina"],
    race: "Hombre/Elfo",
    alignment: "good",
    role: "Portador de Luz",
    description: "Hijo de Tuor. Último gran héroe de la Primera Edad. Navega a Valinor cargando un Silmaril en su frente.",
    importance: "CRITICAL",
    firstChapter: 24,
    relationships: [
      { characterId: "tuor", type: "child" }
    ],
    locations: ["gondolin", "valinor"],
    events: [],
    greatTales: ["earendil"]
  },
  {
    id: "tuor",
    name: "Tuor",
    aliases: ["El Valiente", "Padre de Eärendil"],
    race: "Hombre",
    alignment: "good",
    role: "Héroe de Gondolin",
    description: "Guerrero valiente que llega a Gondolin. Padre de Eärendil.",
    importance: "HIGH",
    firstChapter: 23,
    relationships: [
      { characterId: "earendil", type: "child" }
    ],
    locations: ["gondolin"],
    events: [],
    greatTales: []
  },
  {
    id: "turgon",
    name: "Turgon",
    aliases: ["El Sabio", "Rey de Gondolin"],
    race: "Elfo",
    alignment: "good",
    role: "Rey de Gondolin",
    description: "Hijo de Fingolfin. Funda la ciudad escondida de Gondolin. Sabio pero orgulloso.",
    importance: "HIGH",
    firstChapter: 10,
    relationships: [
      { characterId: "fingolfin", type: "child" }
    ],
    locations: ["gondolin"],
    events: [],
    greatTales: ["fall-gondolin"]
  },
  {
    id: "idril",
    name: "Idril",
    aliases: ["Celebrindal", "Pies de Plata"],
    race: "Elfo",
    alignment: "good",
    role: "Princesa de Gondolin",
    description: "Hija de Turgon. Se enamora de Tuor. Madre de Eärendil.",
    importance: "MEDIUM",
    firstChapter: 23,
    relationships: [
      { characterId: "turgon", type: "child" },
      { characterId: "tuor", type: "spouse" },
      { characterId: "earendil", type: "child" }
    ],
    locations: ["gondolin"],
    events: [],
    greatTales: []
  }
];

// ==================== LOCATIONS ====================
export const locationsData: Location[] = [
  {
    id: "valinor",
    name: "Valinor",
    aliases: ["Reino de los Valar", "Reino Bendecido"],
    description: "Ciudad de los Valar. Ubicada en Aman, al occidente del Gran Mar.",
    importance: "CRITICAL",
    type: "Kingdom",
    region: "Aman",
    status: "Active",
    firstChapter: 2,
    ruler: { characterId: "manwe" },
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "aman",
    name: "Aman",
    aliases: ["Tierra Bendecida", "El Occidente"],
    description: "La tierra sagrada más allá del Gran Mar donde los Valar moran.",
    importance: "CRITICAL",
    type: "Realm",
    region: "Aman",
    status: "Active",
    firstChapter: 2,
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "beleriand",
    name: "Beleriand",
    aliases: ["La Tierra de los Elfos"],
    description: "Gran región en el norte de la Tierra Media. Contiene los principales reinos elfos.",
    importance: "CRITICAL",
    type: "Region",
    region: "Beleriand",
    status: "Destroyed",
    firstChapter: 10,
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "doriath",
    name: "Doriath",
    aliases: ["Bosque Escondido", "Tierra de Thingol"],
    description: "Reino de Thingol protegido por la magia de Melian.",
    importance: "HIGH",
    type: "Kingdom",
    region: "Beleriand",
    status: "Destroyed",
    firstChapter: 5,
    ruler: { characterId: "thingol" },
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "nargothrond",
    name: "Nargothrond",
    aliases: ["Fortaleza Subterránea"],
    description: "Gran fortaleza subterránea de los Elfos fundada por Finrod Felagund.",
    importance: "HIGH",
    type: "Fortress",
    region: "Beleriand",
    status: "Destroyed",
    firstChapter: 12,
    ruler: { characterId: "finrod" },
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "gondolin",
    name: "Gondolin",
    aliases: ["Ciudad Escondida", "La Gran Fortaleza"],
    description: "Ciudad escondida de los Elfos fundada por Turgon en las montañas.",
    importance: "HIGH",
    type: "City",
    region: "Beleriand",
    status: "Destroyed",
    firstChapter: 10,
    ruler: { characterId: "turgon" },
    lat: 0,
    lng: 0,
    greatTales: ["fall-gondolin"]
  },
  {
    id: "angband",
    name: "Angband",
    aliases: ["Fortaleza de Morgoth"],
    description: "Fortaleza de Morgoth en el norte de la Tierra Media. Su principal bastión.",
    importance: "CRITICAL",
    type: "Fortress",
    region: "Beleriand",
    status: "Destroyed",
    firstChapter: 10,
    lat: 0,
    lng: 0,
    greatTales: []
  }
];

// ==================== TIMELINE EVENTS ====================
export const timelineData: TimelineEvent[] = [
  {
    id: "silmarils_forjados",
    year: "FA 1500 (aprox)",
    title: "Los Silmarils son forjados",
    description: "Fëanor crea las tres gemas que encierran la luz de los Árboles.",
    importance: "CRITICAL",
    category: "Creation",
    firstChapter: 8,
    relatedCharacters: ["feanor"]
  },
  {
    id: "arboles_destruidos",
    year: "FA 1502",
    title: "Los Dos Árboles son destruidos",
    description: "Melkor y Ungoliant destruyen los Dos Árboles de Valinor. Melkor roba los Silmarils.",
    importance: "CRITICAL",
    category: "Destruction",
    firstChapter: 9,
    relatedCharacters: ["melkor", "feanor"]
  },
  {
    id: "noldor_rebelion",
    year: "FA 1502",
    title: "Rebelión de los Noldor",
    description: "Fëanor encabeza a los Noldor en rebelión contra los Valar para recuperar los Silmarils.",
    importance: "CRITICAL",
    category: "Oath",
    firstChapter: 10,
    relatedCharacters: ["feanor", "fingolfin"]
  },
  {
    id: "beren_luthien_encuentro",
    year: "FA 465",
    title: "Encuentro de Beren y Lúthien",
    description: "Beren llega a Doriath y ve a Lúthien, iniciando la historia de mayor belleza.",
    importance: "CRITICAL",
    category: "Journey",
    firstChapter: 12,
    relatedCharacters: ["beren", "luthien"]
  },
  {
    id: "silmaril_recuperado",
    year: "FA 466",
    title: "Un Silmaril es recuperado",
    description: "Beren logra obtener un Silmaril de la corona de Morgoth con ayuda de Lúthien.",
    importance: "CRITICAL",
    category: "Battle",
    firstChapter: 12,
    relatedCharacters: ["beren", "luthien", "melkor"]
  },
  {
    id: "caida_nargothrond",
    year: "FA 495",
    title: "Caída de Nargothrond",
    description: "El dragón Glaurung destruye el reino de Nargothrond causando su ruina.",
    importance: "HIGH",
    category: "Destruction",
    firstChapter: 14,
    relatedCharacters: ["finrod"]
  },
  {
    id: "caida_gondolin",
    year: "FA 510",
    title: "Caída de Gondolin",
    description: "Morgoth destruye la ciudad escondida de Gondolin en un ataque sorpresa.",
    importance: "CRITICAL",
    category: "Destruction",
    firstChapter: 23,
    relatedCharacters: ["turgon", "tuor", "idril"],
    relatedLocations: ["gondolin"]
  },
  {
    id: "guerra_colera",
    year: "FA 545",
    title: "La Guerra de la Cólera",
    description: "Los Valar intervienen directamente. Morgoth es derrotado. Fin de la Primera Edad.",
    importance: "CRITICAL",
    category: "Battle",
    firstChapter: 24,
    relatedCharacters: ["melkor", "earendil", "manwe"]
  }
];

// ==================== GREAT TALES ====================
export const greatTalesData: GreatTale[] = [
  {
    id: "beren-luthien",
    title: "Beren y Lúthien",
    description: "Historia de amor entre un Hombre y una Elfa. Amor que desafía la muerte y el mal mismo.",
    details: "Beren es un Hombre que llega a Doriath huyendo de la persecución de Morgoth. Allí ve a Lúthien, la hija del Rey Thingol, y se enamora de ella. Thingol, ofendido por que un Hombre ose amar a su hija, impone una prueba imposible: traer un Silmaril de la corona de Morgoth. Con la ayuda de Lúthien y su poder de hechicera, Beren logra infiltrarse en Angband. Lúthien pone a dormir a Morgoth con su canción. Beren corta un Silmaril de su corona. Pero escapan de Angband y son perseguidos. En el camino, la bestia Carcharoth los atrapa y muere al tragar el Silmaril. Beren es mortalmente herido. Lúthien lo ama tan profundamente que obtiene el poder de volver de la muerte. Ambos son restituidos a la vida como semi-mortales. Esta es la historia de mayor belleza en el Silmarillion: un amor que trasciende la muerte y el tiempo.",
    protagonists: ["beren", "luthien"],
    antagonists: ["melkor", "carcharoth"],
    keyCharacters: ["thingol", "melian", "orome"],
    relatedLocations: ["angband", "doriath"],
    relatedEvents: ["beren_luthien_encuentro", "silmaril_recuperado"],
    themes: ["amor que trasciende", "belleza en la tragedia", "poder del sacrificio", "redencion"],
    needToKnow: [
      "Un Hombre (Beren) se enamora de una Elfa (Lúthien).",
      "El Rey Thingol impone una prueba imposible: obtener un Silmaril.",
      "Con magia y amor, logran lo imposible.",
      "Es la historia de mayor belleza del Silmarillion."
    ],
    afterReadingShouldKnow: [
      "El amor puede cambiar el destino incluso en un mundo maldecido.",
      "Los Hijos de Ilúvatar (Hombres y Elfos) pueden lograr grandes cosas juntos.",
      "La belleza verdadera surge del sufrimiento y el sacrificio.",
      "Este acto salva un Silmaril del servicio al mal."
    ],
    startChapter: 12,
    endChapter: 12
  },
  {
    id: "turin",
    title: "Túrin Turambar",
    description: "La mayor tragedia del Silmarillion. Un guerrero bajo maldición.",
    details: "Túrin es hijo de Húrin, el guerrero. Está bajo una terrible maldición de Morgoth: todo lo que haga llevará a la ruina. Es valiente y noble, pero incapaz de escapar a su maldición. Va de un lugar a otro, y cada reino en el que llega es destruido. Ama a Finduilas pero ella es capturada. Entra en Nargothrond y causa división entre sus líderes. El reino es destruido poco después. Va a Brethil donde se enamora nuevamente, pero sin saber que es su hermana. Cuando se da cuenta, destruido por la vergüenza, se mata. Su historia es el mayor ejemplo de tragedia: un hombre noble pero maldecido, que causa ruina a todo lo que toca simplemente con su presencia.",
    protagonists: ["turin"],
    antagonists: ["melkor", "glaurung"],
    keyCharacters: ["hurin", "morwen", "nienor", "finduilas"],
    relatedLocations: ["nargothrond", "brethil"],
    relatedEvents: ["caida_nargothrond"],
    themes: ["destino maldito", "tragedia noble", "el costo de la valentía", "impotencia ante el mal"],
    needToKnow: [
      "Túrin es un guerrero noble bajo una maldición.",
      "Todo lo que intenta llevar a la ruina.",
      "Ama dos veces pero pierde a ambas.",
      "Es la tragedia más profunda de la Primera Edad."
    ],
    afterReadingShouldKnow: [
      "Incluso la nobleza y valentía no pueden vencer a una maldición de Morgoth.",
      "La libertad y el destino están en tensión constante.",
      "El sufrimiento de Túrin fuerza a Morgoth a mostrar su verdadera naturaleza.",
      "Su muerte no es derrota sino liberación de la maldición."
    ],
    startChapter: 12,
    endChapter: 21
  },
  {
    id: "fall-gondolin",
    title: "La Caída de Gondolin",
    description: "La ciudad escondida cae. La última esperanza se va.",
    details: "Gondolin es la ciudad más grande y hermosa de los Elfos, escondida en las montañas. Su rey Turgon la gobierna con sabiduría. Pero Morgoth, con paciencia, descubre su ubicación. Envía un ejército masivo de orcos y demonios. La ciudad es sitiada y quemada. La mayoría de sus habitantes mueren. Los pocos sobrevivientes huyen. Entre ellos está Tuor, su esposa Idril (hija de Turgon), y su hijo Eärendil. Esta caída marca el fin de la resistencia organizada de los Elfos. Después de esto, solo quedan pequeños grupos dispersos.",
    protagonists: ["turgon", "tuor", "idril"],
    antagonists: ["melkor", "sauron"],
    keyCharacters: ["earendil", "maeglin"],
    relatedLocations: ["gondolin"],
    relatedEvents: ["caida_gondolin"],
    themes: ["caída de la civilización", "fin de la esperanza", "el poder del mal", "supervivencia"],
    needToKnow: [
      "Gondolin es la ciudad más bella de los Elfos.",
      "Morgoth descubre su ubicación y la ataca.",
      "La ciudad cae. Pocos sobreviven.",
      "Marca el fin de la Primera Edad."
    ],
    afterReadingShouldKnow: [
      "Incluso la belleza escondida puede ser encontrada y destruida.",
      "Tuor y Idril escapan llevando esperanza al futuro.",
      "Su hijo Eärendil será crucial en la derrota final de Morgoth.",
      "De la ruina viene la redención en la edad siguiente."
    ],
    startChapter: 23,
    endChapter: 24
  },
  {
    id: "earendil",
    title: "Eärendil el Marinero",
    description: "El último acto de la Primera Edad. Esperanza hecha estrella.",
    details: "Eärendil nace en Gondolin de Tuor e Idril. Crece en los Puertos del Sirion oyendo historias de la lucha contra Morgoth. Viendo que todo se pierde, decide hacer lo imposible: navegar a Valinor para implorar a los Valar que intervengan. Es un acto de fe en tiempos de desesperación. Contra toda probabilidad, logra llegar. Los Valar, movidos por su fe, le conceden una tarea sin precedentes: portar el Silmaril en su frente como una estrella eternamente brillante en el cielo. Se convierte en Gil-Eärendil. Su viaje marca el fin de la Primera Edad y el comienzo de la Guerra de la Cólera que derrota a Morgoth. La Estrella de la Mañana es símbolo eterno de esperanza.",
    protagonists: ["earendil"],
    antagonists: ["melkor"],
    keyCharacters: ["tuor", "idril", "manwe", "elwing"],
    relatedLocations: ["gondolin", "valinor", "puertos-sirion"],
    relatedEvents: ["guerra_colera"],
    themes: ["esperanza en la desesperación", "fe en lo divino", "redención final", "luz eterna"],
    needToKnow: [
      "Eärendil navega a Valinor.",
      "Los Valar le conceden un Silmaril.",
      "Se convierte en una estrella.",
      "Su acto derrota a Morgoth en la Guerra de la Cólera."
    ],
    afterReadingShouldKnow: [
      "Un solo acto de fe puede cambiar el destino de una edad.",
      "La esperanza no es ingenuidad: es poder.",
      "Eärendil es la Estrella de la Mañana que Frodo ve en El Señor de los Anillos.",
      "De la Primera Edad oscura viene luz eterna."
    ],
    startChapter: 24,
    endChapter: 24
  }
];

// ==================== THEMES ====================
export const themesData: Theme[] = [
  {
    id: "inevitable-fall",
    name: "La Caída Inevitable",
    analysis: "El orgullo y la obsesión llevan invariablemente a la ruina. Fëanor, Túrin, Thingol: todos cayeron por sus propios defectos. El Silmarillion sugiere que el destino resuena en nuestras elecciones.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["feanor", "turin", "thingol", "melkor"]
  },
  {
    id: "love-transcendence",
    name: "El Amor que Trasciende",
    analysis: "El amor de Beren y Lúthien desafía las leyes naturales. Un mortal y un elfo logran lo imposible. El amor es la fuerza más poderosa del universo.",
    relatedGreatTales: ["beren-luthien"],
    relatedCharacters: ["beren", "luthien", "thingol", "melian"]
  },
  {
    id: "corruption-power",
    name: "La Corrupción del Poder",
    analysis: "El poder absoluto corrompe. Morgoth tenía poder casi ilimitado, pero su orgullo lo cegó. Incluso los Elfos no están a salvo de la ambición.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["melkor", "feanor", "thingol"]
  },
  {
    id: "mortality-gift",
    name: "La Mortalidad como Regalo",
    analysis: "Los Hombres tienen vidas breves pero poseen libertad verdadera. La mortalidad no es maldición sino don. El Silmarillion sugiere que la brevedad hace valiosa la vida.",
    relatedGreatTales: ["beren-luthien", "earendil"],
    relatedCharacters: ["beren", "earendil", "luthien"]
  },
  {
    id: "light-darkness",
    name: "La Luz Contra la Oscuridad",
    analysis: "El conflicto entre la luz y la oscuridad es el hilo conductor. Pero la oscuridad nunca extingue completamente la luz. Eärendil es estrella eterna.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin", "earendil"],
    relatedCharacters: ["melkor", "earendil", "luthien", "fingolfin"]
  },
  {
    id: "fate-free-will",
    name: "El Destino y el Libre Albedrío",
    analysis: "¿Es nuestro destino inevitable o somos libres de elegir? Túrin lucha contra su maldición pero no puede escapar. El Silmarillion mantiene esta tensión sin resolverla.",
    relatedGreatTales: ["beren-luthien", "turin", "fall-gondolin"],
    relatedCharacters: ["turin", "feanor", "earendil"]
  }
];

// ==================== FLOW VISUALIZATION ====================
export const flowNodesData: FlowNode[] = [
  // Level 0: Ainulindalë
  { id: "iluvatar", characterId: "iluvatar", position: { x: 600, y: 0 } },

  // Level 1: Valar del Ainulindalë
  { id: "manwe", characterId: "manwe", position: { x: 200, y: 200 } },
  { id: "melkor", characterId: "melkor", position: { x: 600, y: 200 } },
  { id: "aule", characterId: "aule", position: { x: 800, y: 200 } },
  { id: "ulmo", characterId: "ulmo", position: { x: 1000, y: 200 } },

  // Level 2: Cap 6 - Casa de Finwë
  { id: "finwe", characterId: "finwe", position: { x: 150, y: 400 } },
  { id: "feanor", characterId: "feanor", position: { x: 50, y: 600 } },
  { id: "fingolfin", characterId: "fingolfin", position: { x: 200, y: 600 } },
  { id: "finarfin", characterId: "finarfin", position: { x: 350, y: 600 } },

  // Level 3: Cap 5 - Thingol y Melian
  { id: "thingol", characterId: "thingol", position: { x: 600, y: 400 } },
  { id: "melian", characterId: "melian", position: { x: 750, y: 400 } },
  { id: "luthien", characterId: "luthien", position: { x: 700, y: 600 } },

  // Level 4: Cap 12+ - Beren
  { id: "beren", characterId: "beren", position: { x: 900, y: 600 } },

  // Level 5: Cap 23+ - Tuor y Gondolin
  { id: "turgon", characterId: "turgon", position: { x: 350, y: 800 } },
  { id: "tuor", characterId: "tuor", position: { x: 500, y: 800 } },
  { id: "idril", characterId: "idril", position: { x: 650, y: 800 } },
  { id: "earendil", characterId: "earendil", position: { x: 800, y: 800 } }
];

export const flowEdgesData: FlowEdge[] = [
  // Ilúvatar a los Valar del Ainulindalë
  { id: "e0-1", source: "iluvatar", target: "manwe", label: "crea" },
  { id: "e0-2", source: "iluvatar", target: "melkor", label: "crea" },
  { id: "e0-3", source: "iluvatar", target: "aule", label: "crea" },
  { id: "e0-4", source: "iluvatar", target: "ulmo", label: "crea" },

  // Finwë y sus hijos (Cap 6)
  { id: "e1-1", source: "finwe", target: "feanor", label: "hijo" },
  { id: "e1-2", source: "finwe", target: "fingolfin", label: "hijo" },
  { id: "e1-3", source: "finwe", target: "finarfin", label: "hijo" },

  // Finarfin y sus hijos
  { id: "e1-4", source: "finarfin", target: "galadriel", label: "hija" },

  // Thingol y Melian (Cap 5)
  { id: "e2-1", source: "thingol", target: "melian", label: "esposos" },
  { id: "e2-2", source: "thingol", target: "luthien", label: "hija" },
  { id: "e2-3", source: "melian", target: "luthien", label: "hija" },

  // Beren y Lúthien (Cap 12)
  { id: "e3-1", source: "beren", target: "luthien", label: "esposos" },

  // Turgon, Tuor, Idril (Cap 23)
  { id: "e4-1", source: "turgon", target: "idril", label: "hija" },
  { id: "e4-2", source: "tuor", target: "idril", label: "esposos" },
  { id: "e4-3", source: "idril", target: "earendil", label: "hijo" },

  // Relaciones del conflicto cósmico
  { id: "e5-1", source: "melkor", target: "manwe", label: "enemigos" },
  { id: "e5-2", source: "melkor", target: "aule", label: "enemigos" },
  { id: "e5-3", source: "melkor", target: "ulmo", label: "enemigos" }
];