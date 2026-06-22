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
  relationships: { characterId: string; type: 'father' | 'mother' | 'spouse' | 'sibling' | 'child' | 'enemy' | 'ally' | 'brother_in_thought' | 'instrument_of' }[];
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
];

// ==================== CHARACTERS - AINUR ====================
export const charactersData: Character[] = [
  {
    id: "iluvatar",
    name: "Ilúvatar",
    aliases: ["Eru", "El Único", "Padre de Todos", "El Que está Solo", "El Creador"],
    race: "Divino",
    alignment: "good",
    role: "Creador Supremo del Universo",
    description: "Ilúvatar es el Creador Único, eterno e infinito. Existe antes de todas las cosas. Creó a los Ainur de su pensamiento y les enseñó la Música mediante la cual se crearía el mundo. Su voluntad es absoluta y está más allá de la comprensión completa incluso de los Ainur.",
    details: "Ilúvatar es la fuente de toda existencia. No tiene forma, pero puede comunicarse con sus creaciones. En el Ainulindalë, propone tres temas musicales a los Ainur. Su poder es infinito: puede convertir la Música en realidad, puede limitar incluso a seres tan grandes como los Ainur, y puede entrelazar el mal mismo en un propósito mayor. Posee la Llama Imperecedera que anima a todos los seres. Es omnisciente respecto a la naturaleza del mundo, aunque permite el libre albedrío de sus creaciones. Es tan fundamental que se lo menciona constantemente pero nunca es un personaje visible después del Ainulindalë.",
    titles: [
      { chapter: 0, text: "El Único" },
      { chapter: 0, text: "Padre de Todos" },
      { chapter: 0, text: "El Creador" }
    ],
    notableDeeds: [
      { chapter: 0, text: "Creó a los Ainur de su pensamiento" },
      { chapter: 0, text: "Propuso los tres temas musicales para la Música de los Ainur" },
      { chapter: 0, text: "Mostró la Visión del Mundo a los Ainur" },
      { chapter: 0, text: "Incorporó la discordia de Melkor en un propósito mayor" },
      { chapter: 0, text: "Convirtió la Visión en realidad mediante la palabra 'Eä'" }
    ],
    importance: "CRITICAL",
    firstChapter: 0,
    lastChapter: 0,
    relationships: [
      { characterId: "melkor", type: "enemy" },
      { characterId: "manwe", type: "ally" },
      { characterId: "ulmo", type: "ally" },
      { characterId: "aule", type: "ally" }
    ],
    locations: ["palacios_intemporales", "vacio"],
    events: ["musica_ainur", "vision_mundo", "creacion_ea"],
    greatTales: []
  },
  {
    id: "melkor",
    name: "Melkor",
    aliases: ["El Enemigo", "Morgoth", "El Enemigo Negro", "Bauglir", "Sauron (sirviente)", "Maeglin"],
    race: "Ainur",
    alignment: "evil",
    role: "Antagonista Primario, Causante de Discordia",
    description: "Melkor es el Ainur más grande en poder después de Ilúvatar. Ambicioso, envidioso y rebelde, introduce discordia en la Gran Música tres veces. Aunque es derrotado en cada intento, su maldad da forma a todo lo que vendrá. Se convierte en Morgoth (El Enemigo Negro) y es el antagonista central de toda la Primera Edad.",
    details: "Melkor recibió dones de poder y conocimiento entre los mayores de todos los Ainur. Tenía parte en todos los dones de sus hermanos. Sin embargo, su deseo era dar forma a cosas propias y gobernar, no servir. En la Música, primero intenta asuntos de su propia imaginación, causando discordia. Ilúvatar responde con un nuevo tema; Melkor lucha contra él. Esto ocurre tres veces. Finalmente, cuando Melkor ve a los Hijos de Ilúvatar en la Visión, su envidia se inflama: desea gobernarlos y ser llamado Señor. Aunque otros Valar aman a los Hijos para protegerlos, Melkor los ama para esclavizarlos. Desciende a Arda con intenciones de tomar el reino para sí mismo. Es forzado a retirarse por Manwë y los otros Valar, pero nunca renuncia a su deseo de dominio. Se le llama Morgoth (El Enemigo Negro) desde que abandona el reino de Arda.",
    titles: [
      { chapter: 0, text: "El Ainur más grande" },
      { chapter: 0, text: "Morgoth (El Enemigo Negro)" }
    ],
    notableDeeds: [
      { chapter: 0, text: "Introduce discordia en el primer tema de la Música" },
      { chapter: 0, text: "Lucha contra el segundo tema de Ilúvatar" },
      { chapter: 0, text: "Contiene el tercer tema de Ilúvatar" },
      { chapter: 0, text: "Desciende a Arda con intención de conquistarlo" },
      { chapter: 0, text: "Es confrontado por Manwë y forzado a retirarse" }
    ],
    importance: "CRITICAL",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "enemy" },
      { characterId: "manwe", type: "brother_in_thought" },
      { characterId: "manwe", type: "enemy" },
      { characterId: "aule", type: "enemy" },
      { characterId: "ulmo", type: "enemy" }
    ],
    locations: ["palacios_intemporales", "arda", "angband"],
    events: ["musica_ainur", "vision_mundo", "creacion_ea", "batalla_valar_melkor"],
    greatTales: ["beren-luthien", "turin", "fall-gondolin"]
  },
  {
    id: "manwe",
    name: "Manwë",
    aliases: ["Súlimo", "Señor del Aire", "Señor del Aliento de Arda", "Rey de Arda", "El Más Caro al Corazón de Ilúvatar"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Líder de los Ainur, Rey de los Valar",
    description: "Manwë es el noble de nobles entre los Ainur. Hermano de Melkor en el pensamiento de Ilúvatar, pero opuesto a él en propósito. Es el más caro al corazón de Ilúvatar y comprende mejor sus propósitos. Lidera la resistencia contra Melkor y será designado Rey de Arda.",
    details: "Manwë fue el primer instrumento del segundo tema que Ilúvatar levantó contra la discordia de Melkor. Sus pensamientos se vuelven hacia los aires y vientos de Arda. Es noble no por orgullo sino por servicio. Cuando Melkor causa discordia, Manwë responde llamando a muchos espíritus menores para ayudar a gobernar Arda. Cuando Melkor intenta reclamar Arda para sí, Manwë lo confronta directamente: 'Este reino no lo tomarás para ti injustamente, pues muchos otros han trabajado en él no menos que tú.' Lidera la Primera Batalla de los Valar contra Melkor. Es leal a Ilúvatar y comprende que el propósito del Creador prevalecerá incluso sobre la maldad de Melkor. Se convierte en el rey supremo de los Valar.",
    titles: [
      { chapter: 0, text: "Noble de nobles entre los Ainur" },
      { chapter: 0, text: "Hermano de Melkor en el pensamiento" },
      { chapter: 0, text: "Primer instrumento del Segundo Tema" },
      { chapter: 1, text: "Rey de Arda" },
      { chapter: 1, text: "Súlimo, Señor del Aliento de Arda" }
    ],
    notableDeeds: [
      { chapter: 0, text: "Es instrumento del segundo tema contra la discordia de Melkor" },
      { chapter: 0, text: "Convoca espíritus para ayudar a gobernar Arda" },
      { chapter: 0, text: "Confronta directamente a Melkor en Arda" },
      { chapter: 0, text: "Lidera la Primera Batalla de los Valar" }
    ],
    importance: "CRITICAL",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "melkor", type: "brother_in_thought" },
      { characterId: "melkor", type: "enemy" },
      { characterId: "ulmo", type: "ally" },
      { characterId: "aule", type: "ally" }
    ],
    locations: ["palacios_intemporales", "aman", "valinor"],
    events: ["musica_ainur", "vision_mundo", "creacion_ea", "batalla_valar_melkor"],
    greatTales: []
  },
  {
    id: "ulmo",
    name: "Ulmo",
    aliases: ["Señor de las Aguas", "Rey del Mar", "El que Profundiza"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Protector de las Aguas y del Mundo",
    description: "Ulmo es el Ainur cuyo pensamiento se vuelve especialmente hacia el agua. Recibe instrucción especial de Ilúvatar en la música, más que cualquier otro Ainur. Es el protector de la belleza de las aguas contra los ataques de Melkor y trabajador leal en los planes de Ilúvatar.",
    details: "De todos los Ainur, Ilúvatar da a Ulmo la más profunda instrucción en música. Sus pensamientos se vuelven hacia el agua y los mares de Arda. Cuando Ilúvatar le muestra cómo Melkor ha intentado destruir la belleza del agua con frío y calor, Ulmo comprende que ninguno de sus ataques tuvo éxito completo. La música del agua permanece hermosa. Ulmo expresa admiración por la nieve, los copos de nieve, y la lluvia que no se había imaginado en su música. Promete trabajar con Manwë para hacer melodías que serán eterno deleite. Los Eldar creen que el eco de la Música de los Ainur vive en el agua más que en cualquier otra sustancia, y que los Hijos de Ilúvatar pueden escuchar sus voces en el mar, aunque no sepan lo que oyen.",
    titles: [
      { chapter: 0, text: "Señor de las Aguas" },
      { chapter: 0, text: "Rey del Mar" },
      { chapter: 1, text: "Protector de Númenor" }
    ],
    notableDeeds: [
      { chapter: 0, text: "Recibe instrucción especial de Ilúvatar en la música" },
      { chapter: 0, text: "Observa cómo la belleza del agua es protegida contra Melkor" },
      { chapter: 0, text: "Se alía con Manwë para los trabajos de Arda" }
    ],
    importance: "HIGH",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "manwe", type: "ally" },
      { characterId: "melkor", type: "enemy" }
    ],
    locations: ["palacios_intemporales", "aman", "arda"],
    events: ["musica_ainur", "vision_mundo", "creacion_ea"],
    greatTales: []
  },
  {
    id: "aule",
    name: "Aulë",
    aliases: ["El Forjador", "El Creador", "Señor de los Enanos"],
    race: "Ainur / Vala",
    alignment: "good",
    role: "Creador de Formas, Maestro de la Construcción",
    description: "Aulë es el Ainur cuyo pensamiento reflexiona sobre la materia de la Tierra. Posee poder de creación casi igual al de Melkor, pero lo usa para crear belleza y servir a los propósitos de Ilúvatar. Se deleita en la tarea de hacer, no en la posesión o maestría.",
    details: "A Aulë, Ilúvatar concedió una capacidad y conocimiento apenas menores que los de Melkor, pero mientras Melkor quería usar su poder para dominar, Aulë se deleita simplemente en la tarea de hacer. Lo que enorgullece a Aulë es la obra en sí, y las cosas hechas, no la posesión ni su propia maestría. Por tanto, da sin atesorar y está libre de cuidados, siempre emprende nuevas tareas. Reflexionó especialmente sobre la materia de la Tierra: hierro, piedra, plata, oro y otras sustancias. En los trabajos de Arda, junto con Manwë y Ulmo, se empeña más que otros. Cuando Melkor destruye lo que han creado, Aulë simplemente comienza de nuevo, sin amargura. Crea montañas, tallando valles; pero cuando Melkor las derriba, Aulë vuelve a crearlas. Este patrón continúa durante edades, pero eventualmente, a través de los trabajos constantes de Aulë y los otros, la Tierra se hace más firme y estable.",
    titles: [
      { chapter: 0, text: "El Forjador" },
      { chapter: 0, text: "Señor de las Creaciones" },
      { chapter: 3, text: "Señor de los Enanos" }
    ],
    notableDeeds: [
      { chapter: 0, text: "Reflexiona sobre la materia de la Tierra en la Música" },
      { chapter: 0, text: "Trabaja en la conformación de Arda junto a Manwë y Ulmo" },
      { chapter: 0, text: "Reconstruye constantemente lo que Melkor destruye" },
      { chapter: 3, text: "Crea secretamente a los Enanos" }
    ],
    importance: "HIGH",
    firstChapter: 0,
    lastChapter: 24,
    relationships: [
      { characterId: "iluvatar", type: "ally" },
      { characterId: "manwe", type: "ally" },
      { characterId: "ulmo", type: "ally" },
      { characterId: "melkor", type: "enemy" }
    ],
    locations: ["palacios_intemporales", "aman", "arda"],
    events: ["musica_ainur", "vision_mundo", "creacion_ea", "batalla_valar_melkor"],
    greatTales: []
  }
];

// ==================== LOCATIONS ====================
export const locationsData: Location[] = [
  {
    id: "palacios_intemporales",
    name: "Los Palacios Intemporales",
    aliases: ["Las Estancias de Ilúvatar", "El Reino de Ilúvatar"],
    description: "Las moradas eternas donde Ilúvatar y los Ainur existen antes de la creación del mundo. Es un lugar fuera del Tiempo y el Espacio, de belleza indescriptible.",
    importance: "CRITICAL",
    type: "Realm",
    region: "Legendario",
    status: "Active",
    firstChapter: 0,
    relatedCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"],
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "vacio",
    name: "El Vacío",
    aliases: ["El Abismo del No-Ser", "Lo Vacío"],
    description: "El vacío infinito donde no existe nada, excepto la intención de Ilúvatar. Es aquí donde la Música se derrama y crea el mundo.",
    importance: "CRITICAL",
    type: "Other",
    region: "Legendario",
    status: "Active",
    firstChapter: 0,
    relatedCharacters: ["iluvatar", "melkor", "manwe"],
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "aman",
    name: "Aman",
    aliases: ["La Tierra Bendecida", "El Reino Bendecido", "El Occidente"],
    description: "La tierra sagrada más allá del Gran Mar, donde los Valar moran. Es libre de mal, de muerte y de cambio. El centro de Aman es Valinor, el reino de los Valar.",
    importance: "CRITICAL",
    type: "Realm",
    region: "Aman",
    status: "Active",
    firstChapter: 2,
    relatedCharacters: ["manwe", "ulmo", "aule"],
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "valinor",
    name: "Valinor",
    aliases: ["El Reino de los Valar", "La Tierra de los Valar", "El Reino Bendito"],
    description: "La ciudad sagrada y el reino de los Valar dentro de Aman. Contiene el Monte Taniquetil, los Dos Árboles (Telperion y Laurelin), y los palacios de los Valar.",
    importance: "CRITICAL",
    type: "Kingdom",
    region: "Aman",
    status: "Active",
    firstChapter: 2,
    ruler: { characterId: "manwe" },
    relatedCharacters: ["manwe", "ulmo", "aule"],
    lat: 0,
    lng: 0,
    greatTales: []
  },
  {
    id: "arda",
    name: "Arda",
    aliases: ["La Tierra", "El Mundo", "El Reino de la Tierra", "Eä"],
    description: "El mundo material creado por la Música de los Ainur. Contiene la Tierra Media y todas las tierras, mares, y criaturas vivientes.",
    importance: "CRITICAL",
    type: "Realm",
    region: "Este",
    status: "Active",
    firstChapter: 0,
    relatedCharacters: ["melkor", "manwe", "ulmo", "aule"],
    lat: 0,
    lng: 0,
    greatTales: []
  }
];

// ==================== TIMELINE EVENTS ====================
export const timelineData: TimelineEvent[] = [
  {
    id: "musica_ainur",
    year: "El Principio",
    title: "La Música de los Ainur",
    description: "Ilúvatar enseña a los Ainur mediante la música. Propone tres grandes temas. Melkor introduce discordia, pero Ilúvatar incorpora incluso la rebelión en su propósito.",
    importance: "CRITICAL",
    category: "Creation",
    firstChapter: 0,
    relatedCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"]
  },
  {
    id: "vision_mundo",
    year: "Después de la Música",
    title: "La Visión del Mundo",
    description: "Ilúvatar muestra a los Ainur una visión del mundo hecho visible. Ven el desarrollo de Arda a través de las edades, incluyendo la llegada de los Hijos de Ilúvatar (Elfos y Hombres).",
    importance: "CRITICAL",
    category: "Creation",
    firstChapter: 0,
    relatedCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"]
  },
  {
    id: "creacion_ea",
    year: "Después de la Visión",
    title: "La Creación de Eä",
    description: "Ilúvatar declara 'Eä' (Que Sea) y convierte la Visión en realidad. El mundo material comienza a existir. Algunos Ainur descienden a Arda para darle forma final.",
    importance: "CRITICAL",
    category: "Creation",
    firstChapter: 0,
    relatedCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"]
  },
  {
    id: "batalla_valar_melkor",
    year: "Tiempos Antiguos",
    title: "La Primera Batalla de los Valar",
    description: "Melkor intenta tomar Arda para sí mismo. Manwë y los otros Valar lo confrontan. Una batalla cósmica comienza entre el bien y el mal por el control del mundo.",
    importance: "CRITICAL",
    category: "Battle",
    firstChapter: 0,
    relatedCharacters: ["melkor", "manwe", "ulmo", "aule"]
  }
];

// ==================== GREAT TALES ====================
export const greatTalesData: GreatTale[] = [
  {
    id: "ainulindale",
    title: "La Música de los Ainur",
    description: "El relato fundamental de la creación del mundo a través de la música divina de los Ainur bajo la dirección de Ilúvatar.",
    details: "En el principio existe solo Ilúvatar, el Creador Único. De su pensamiento crea a los Ainur, seres angelicales de gran poder. Ilúvatar les enseña música, proponiendo temas para que canten. Primero cantan individualmente o en pequeños grupos, luego juntos en armonía. Ilúvatar propone un primer tema poderoso, y los Ainur cantan en armonía durante un tiempo. Pero Melkor, el más grande de los Ainur en poder, desea aumentar su propia gloria y alterar el tema. Introduce discordia, causando conflicto en la música. Ilúvatar se incorpora y levanta su mano izquierda, proponiendo un segundo tema. Melkor lucha contra él nuevamente. Ilúvatar se levanta una tercera vez, su rostro serio, y levanta su mano derecha, proponiendo un tercer tema. La música continúa, pero ahora con dos corrientes: una bella y profunda que contiene dolor; otra estridente y vana que es la música de Melkor. Finalmente, Ilúvatar se pone de pie por tercera vez con rostro terrible. Levanta ambas manos en un acorde tan profundo como el Abismo, tan alto como el Firmamento, tan penetrante como sus propios ojos. La Música cesa. Ilúvatar habla: 'Poderosos son los Ainur, y entre ellos el más poderoso es Melkor; pero sepan él y todos los Ainur que yo soy Ilúvatar. Os mostraré las cosas que habéis cantado.' Ilúvatar conduce a los Ainur hacia el Vacío. Les dice: '¡Contemplad vuestra música!' Y les muestra el mundo hecho visible en una Visión. Ven el globo de Arda girar en el Vacío. Ven su historia desarrollarse. Ven con asombro a los Hijos de Ilúvatar: Elfos y Hombres, criaturas libres y distintas, sobre las que todos los Ainur, incluso Melkor, ponen su amor. Muchos desean descender al mundo para prepararlo para los Hijos. Ilúvatar muestra a Melkor que ningún tema puede tocarse sin que tenga su fuente en Ilúvatar mismo. Dice: 'Aquel que intente alterar la música probará que es solo mi instrumento para la creación de cosas más maravillosas todavía, que él no ha imaginado.' La Visión termina. Los Ainur creen que todo ha finalizado, pero Ilúvatar habla nuevamente: '¡Eä! ¡Que sean estas cosas!' Y envía la Llama Imperecedera al Vacío. El mundo Arda es creado. Los Ainur ven una luz como una nube con un corazón viviente de llamas. Algunos Ainur permanecen con Ilúvatar. Otros, incluyendo a los más grandes y hermosos, descienden a Arda. Ilúvatar impone una condición: desde ese momento, sus poderes se limitan al Mundo, y el Mundo se convierte en su vida. Se les llama los Valar, los Poderes de Arda. Comienzan los trabajos de conformar la Tierra. Manwë, Aulë, y Ulmo se empeñan más que otros. Pero Melkor también desciende, interfiriendo en todo, cambiando los trabajos según sus propios deseos, animando grandes fuegos. Cuando la Tierra es joven y está en llamas, Melkor la codicia y dice a los otros Valar: 'Este será mi reino, y para mí lo designo.' Manwë, hermano de Melkor en el pensamiento, convoca a muchos espíritus para ayudar. Confronta a Melkor: 'Este reino no lo tomarás para ti injustamente, pues muchos otros han trabajado en él no menos que tú.' Hay lucha entre Melkor y los otros Valar. Por ese momento, Melkor se retira a otras regiones. Pero nunca se quita del corazón el deseo de dominar Arda. Los Valar toman forma visible. Algunos se visten como hombres, otros como mujeres, ya que esa diferencia de temperamento la tuvieron desde el principio. Las formas no son necesarias para su ser, sino como vestiduras. Melkor también toma forma, pero la suya es terrible y oscura, una montaña que vadea el mar, con la cabeza por encima de las nubes, vestida de hielo y coronada de fuego y humo. Sus ojos brillan como llamas que marchitan con calor y traspassan con frío mortal. Así comienza la Primera Batalla de los Valar con Melkor. Los Elfos conocen poco de esto, pues ocurrió antes de su llegada. Los Valar se esfuerzan siempre por gobernar la Tierra y prepararla para la llegada de los Primeros Nacidos, a pesar de Melkor. Construyen tierras y Melkor las destruye. Cavan valles y Melkor los levanta. Tallan montañas y Melkor las derriba. Ahondan mares y Melkor los derrama. Nada puede conservarse en paz ni desarrollarse. Pero no todo es en vano. Aunque la voluntad de los Valar nunca se cumple exactamente, y todas las cosas tienen color y forma distintos de lo que ellos imaginaron, la Tierra poco a poco va ganando forma y se hace más firme. Así se establece la habitación de los Hijos de Ilúvatar en los Abismos del Tiempo y entre las estrellas innumerables.",
    protagonists: ["iluvatar", "manwe", "ulmo", "aule"],
    antagonists: ["melkor"],
    keyCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"],
    relatedLocations: ["palacios_intemporales", "vacio", "arda"],
    relatedEvents: ["musica_ainur", "vision_mundo", "creacion_ea", "batalla_valar_melkor"],
    themes: ["creation", "music and reality", "free will vs destiny", "good vs evil", "divine providence"],
    needToKnow: [
      "La creación del mundo ocurre a través de la Música de los Ainur.",
      "Ilúvatar es el Creador Único cuya voluntad es absoluta.",
      "Melkor es el Ainur más poderoso pero ambicioso y rebelde.",
      "Incluso la discordia de Melkor es incorporada a un propósito mayor.",
      "Los Hijos de Ilúvatar (Elfos y Hombres) son el propósito del mundo.",
      "Algunos Ainur descienden a Arda como los Valar (Poderes).",
      "Manwë es el líder noble de los Valar.",
      "Melkor intenta tomar Arda para sí mismo pero es forzado a retirarse.",
      "La lucha entre bien y mal comienza en la creación misma."
    ],
    afterReadingShouldKnow: [
      "La rebelión de Melkor fue prevista por Ilúvatar, no fue sorpresa.",
      "El conflicto cósmico es parte del propósito divino, no un accidente.",
      "Melkor se convierte en Morgoth, antagonista de toda la Primera Edad.",
      "La música es tanto literal como metafórica en el mundo de Tolkien.",
      "Incluso los seres más grandes pueden fallar si ceden a la ambición.",
      "La voluntad de Ilúvatar prevalece incluso sobre la malicia.",
      "Los Ainur que descienden se limitan al Mundo y dependen de él.",
      "El primer acto del drama es cosmológico, antes de los Elfos.",
      "La esperanza reside en que Ilúvatar es más poderoso que la maldad.",
      "Este capítulo es la base para entender todo lo que sigue."
    ],
    startChapter: 0,
    endChapter: 0
  }
];

// ==================== THEMES ====================
export const themesData: Theme[] = [
  {
    id: "creation-through-music",
    name: "Creación a Través de la Música",
    analysis: "El mundo no es creado mediante poder bruto sino mediante el arte de la música. Esta idea sugiere que la creación es fundamentalmente bella, armoniosa, y que incluso la destrucción y el mal son notas en una composición más grande. La música es tanto metáfora como realidad literal.",
    relatedGreatTales: ["ainulindale"],
    relatedCharacters: ["iluvatar", "melkor", "manwe", "ulmo", "aule"]
  },
  {
    id: "divine-providence",
    name: "Providencia Divina",
    analysis: "Ilúvatar ve todo, incluida la rebelión de Melkor, antes de que ocurra. Incorpora incluso el mal en su propósito. Esto sugiere una visión de la historia donde nada escapa al conocimiento o propósito de lo divino, aunque el libre albedrío existe.",
    relatedGreatTales: ["ainulindale"],
    relatedCharacters: ["iluvatar", "melkor"]
  },
  {
    id: "free-will-corruption",
    name: "Libre Albedrío y Corrupción",
    analysis: "Los Ainur tienen libre albedrío, y Melkor elige la rebelión. Aunque es el mayor en poder, su ambición lo ciega. El poder sin sabiduría, la libertad sin virtud, conducen a la caída.",
    relatedGreatTales: ["ainulindale"],
    relatedCharacters: ["melkor", "iluvatar"]
  },
  {
    id: "pain-in-beauty",
    name: "El Dolor en la Belleza",
    analysis: "La música de Ilúvatar es descrita como 'profunda, vasta y hermosa, pero lenta y mezclada con un dolor sin medida que era la fuente principal de su belleza.' Esto sugiere que la verdadera belleza contiene sufrimiento, y que la existencia del mal permite una belleza más profunda.",
    relatedGreatTales: ["ainulindale"],
    relatedCharacters: ["iluvatar"]
  }
];

// ==================== FLOW VISUALIZATION ====================
export const flowNodesData: FlowNode[] = [
  // Level 0: Ilúvatar (centered)
  { id: "iluvatar", characterId: "iluvatar", position: { x: 600, y: 0 } },

  // Level 1: Valar principales (espaciado amplio)
  { id: "manwe", characterId: "manwe", position: { x: 200, y: 200 } },
  { id: "melkor", characterId: "melkor", position: { x: 600, y: 200 } },
  { id: "aule", characterId: "aule", position: { x: 800, y: 200 } },
  { id: "ulmo", characterId: "ulmo", position: { x: 1000, y: 200 } },
];

export const flowEdgesData: FlowEdge[] = [
  // Ilúvatar a Ainur
  { id: "e-iluvatar-manwe", source: "iluvatar", target: "manwe", label: "crea" },
  { id: "e-iluvatar-melkor", source: "iluvatar", target: "melkor", label: "crea" },
  { id: "e-iluvatar-aule", source: "iluvatar", target: "aule", label: "crea" },
  { id: "e-iluvatar-ulmo", source: "iluvatar", target: "ulmo", label: "crea" },

  // Melkor vs Manwë
  { id: "e-melkor-manwe-enemy", source: "melkor", target: "manwe", label: "enemigos" },
  { id: "e-manwe-melkor-instrument", source: "manwe", target: "melkor", label: "instrumento contra" },

  // Alianzas contra Melkor
  { id: "e-manwe-aule-allies", source: "manwe", target: "aule", label: "aliados" },
  { id: "e-manwe-ulmo-allies", source: "manwe", target: "ulmo", label: "aliados" },
  { id: "e-aule-ulmo-allies", source: "aule", target: "ulmo", label: "aliados" },

  // Melkor es enemigo de todos
  { id: "e-melkor-aule-enemy", source: "melkor", target: "aule", label: "enemigos" },
  { id: "e-melkor-ulmo-enemy", source: "melkor", target: "ulmo", label: "enemigos" },
];
