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
  { id: 3, title: "Quenta Silmarillion II", subtitle: "De Aulë y Yavanna", description: "Aulë, impaciente por la llegada de los Hijos de Ilúvatar, creó en secreto a los Siete Padres de los Enanos en un palacio bajo las montañas. Ilúvatar lo confrontó pero, al ver su arrepentimiento sincero, les concedió vida verdadera. Los Enanos duermen bajo la piedra hasta que los Elfos despierten primero. Yavanna, temiendo que dañen sus árboles, acude a Manwë, quien recibe una visión renovada de la Canción: Ilúvatar crearía Pastores de Árboles (Ents) y Águilas para proteger las creaciones de Yavanna.", needToKnow: ["Aulë creó a los Enanos impaciente por tener discípulos, pero lo hizo en humilde sumisión a la voluntad de Ilúvatar.", "Ilúvatar les concedió vida verdadera, pero impuso que durmieran bajo la piedra hasta que los Elfos (Primeros Nacidos) despertaran primero.", "Yavanna temió por el destino de sus árboles y criaturas ante los futuros Enanos e Hijos de Ilúvatar.", "A petición de Yavanna, Ilúvatar prometió Pastores de Árboles (Ents) para proteger los bosques y Águilas para morar en las montañas.", "El equilibrio entre la piedra (Enanos) y el bosque (Ents) fue establecido, sembrando futura tensión entre quienes trabajan la tierra y quienes la protegen."], shouldKnowAfter: ["La diferencia entre Aulë y Melkor es clave: ambos desean crear, pero Aulë lo hace con humildad y amor; Melkor con soberbia y deseo de dominio.", "Los Enanos son 'hijos adoptivos' de Ilúvatar, no Hijos directos; de aquí surgirán disputas entre Enanos y Elfos por recursos y tierras.", "Los Enanos llaman a Aulë 'Mahal' y creen que él los reúne en estancias apartadas de Mandos tras la muerte, esperando rehacer Arda.", "Los Ents y las Águilas no fueron inventos posteriores sino que estaban presentes en la Música original; Ilúvatar lo recordó a los Valar.", "El capítulo establece la tensión futura: entre civilización y naturaleza, entre quienes trabajan la tierra y quienes la protegen, entre Enanos y Elfos."] },
  { id: 4, title: "Quenta Silmarillion III", subtitle: "Del advenimiento de los Elfos y el cautiverio de Melkor", description: "Mientras los Valar viven en beatitud, Melkor se fortalece: reúne Balrogs y levanta Angband bajo Sauron. Varda crea nuevas estrellas con rocío de Telperion y lanza la Valacirca (Hoz de los Valar) como reto al norte. Cuando Menelmacar entra en el cielo, los Quendi despiertan en Cuiviénen y contemplan las estrellas. Melkor captura algunos Elfos y los corrompe: nacen los Orcos. Oromë los descubre y los llama Eldar. Los Valar declaran guerra a Melkor; Tulkas lo encadena con Angainor y es encarcelado en Mandos por tres edades, pero Sauron escapa. Tres embajadores visitan Valinor; quedan sobrecogidos por la luz de los Árboles. Los Elfos se dividen: los Eldar marchan al oeste en tres huestes (Vanyar, Noldor, Teleri); los Avari se quedan. Lenwë se separa con los Nandor. La Gran Marcha es lenta y llena de separaciones.", needToKnow: ["Varda crea nuevas estrellas con rocío de Telperion; al encenderse Menelmacar, los Quendi despiertan en Cuiviénen, contemplando primero las estrellas.", "Oromë descubre a los Elfos por azar, los llama Eldar (Pueblo de las Estrellas) y se convierte en su guía amado.", "Melkor captura Elfos antes de Oromë y los corrompe: así nacen los Orcos, la más vile de sus creaciones.", "Los Valar declaran guerra a Melkor; Tulkas lo encadena con Angainor (forjada por Aulë) e lo encarcelan en Mandos por tres edades, pero Sauron escapa de Angband.", "Los Elfos se dividen: Eldar marchan al oeste en tres huestes (Vanyar, Noldor, Teleri); Avari se quedan; Lenwë se separa con los Nandor."], shouldKnowAfter: ["Los Orcos nacieron de Elfos corrompidos: la más vil acción de Melkor y la más detestada por Ilúvatar.", "La convocatoria a Valinor fue disputada: Ulmo quería libertad para los Elfos en la Tierra Media; Mandos advirtió que 'esta decisión fue causa de muchos daños'.", "Los Valar no limpiaron completamente Utumno ni descubrieron todas las bóvedas de Angband; quedaron males ocultos que reaparecerán.", "Los tres embajadores (Ingwë, Finwë, Elwë) quedaron sobrecogidos por la luz de los Árboles de Valinor; Ingwë nunca volvió a la Tierra Media.", "Cada separación en la Gran Marcha responde a una elección y produce consecuencias irreversibles que modelarán la historia futura."] },
  { id: 5, title: "Quenta Silmarillion IV", subtitle: "De Thingol y Melian", description: "Melian, la Maia más hermosa y sabia de Lórien, partió a la Tierra Media cuando los Quendi despertaron. Elwë Singollo, señor de los Teleri, recorría los bosques visitando a Finwë cuando llegó solo a Nan Elmoth. Oyó el canto de los ruiseñores de Melian y cayó un hechizo sobre él. La encontró en un claro abierto a las estrellas, vio la luz de Aman en su rostro, le tomó la mano, y ambos permanecieron inmóviles mientras años pasaban y los árboles crecían altos y oscuros. Su pueblo no pudo encontrarlo; Olwë se convirtió en rey de los Teleri. Elwë nunca cruzó el mar. Se convirtió en Elu Thingol (Rey Mantogrís), señor de los Sindar (Elfos Grises). Thingol y Melian reinaron en Menegroth, las Mil Cavernas, capital de Doriath, el reino protegido por el poder de Melian. De su unión vinieron los más hermosos de todos los Hijos de Ilúvatar.", needToKnow: ["Melian era una Maia de Lórien, la más hermosa y sabia, maestra de canciones de encantamiento; los ruiseñores cantaban siempre con ella y los Valar cesaban sus obras al oírla.", "Elwë Singollo, señor de los Teleri, encontró a Melian en el bosque de Nan Elmoth; un hechizo cayó sobre ambos que duró años mientras permanecían inmóviles.", "Su pueblo lo buscó sin éxito; Olwë se convirtió en rey de los Teleri y continuó la marcha al oeste sin él.", "Elwë nunca volvió a Valinor; se convirtió en Elu Thingol (Rey Mantogrís), señor de los Sindar (Elfos Grises) de Beleriand.", "Thingol y Melian reinaron en Menegroth (las Mil Cavernas) en Doriath, el reino protegido por el poder de Melian; fue el más bello de los reinos élficos."], shouldKnowAfter: ["Melian le dio gran poder a Thingol; fue el único Sindar que vio los Dos Árboles, por lo que se lo contó entre los Elfos de la Luz, no entre los Moriquendi.", "La unión de Elwë y Melian es la primera entre un Ainu y un Elfo; su descendencia llevará sangre divina (fundamental para Lúthien y el futuro del mundo).", "La desaparición de Elwë fracturó definitivamente a los Teleri: los que lo esperaron fueron llamados Eglath (Pueblo Abandonado); otros siguieron a Olwë.", "Thingol gobernó a todos los Eldar de Beleriand; los Sindar (Elfos Grises/Elfos del Crepúsculo) son el pueblo que se quedó por él.", "Doriath y Menegroth serán el reino central de toda la Primera Edad, protegido por la magia de Melian hasta el fin."] },
  { id: 6, title: "Quenta Silmarillion V", subtitle: "De Eldamar y los Príncipes de los Eldalië", description: "Ulmo transportó a los Vanyar y Noldor a Aman en una isla arrancada del mar. Los Valar abrieron el Calacirya en las Pelóri, permitiendo que la luz de los Árboles iluminara el mar. Los Elfos fundaron Tirion sobre la colina de Túna, y los Noldor descubrieron gemas que tallaron y distribuyeron libremente. Los Teleri, que se quedaron atrás, fueron instruidos por Ossë en ciencias del mar; algunos se quedaron en Beleriand (Falathrim), mientras que otros fueron transportados a Tol Eressëa y luego a Aman, donde fundaron Alqualondë. El capítulo termina presentando la genealogía de los príncipes Noldor: Finwë tuvo tres hijos (Fëanor de Míriel, Fingolfin y Finarfin de Indis), cuyos temperamentos distintos marcarán el rumbo de los acontecimientos.", needToKnow: ["Ulmo transportó a los Vanyar y Noldor a Aman usando una isla arrancada del mar; su cuerno quebrado quedó como la Isla de Balar.", "Los Valar abrieron el Calacirya (Paso de la Luz) en las Pelóri; los Elfos levantaron Túna y fundaron Tirion, ciudad de los Noldor y Vanyar.", "Los Teleri se quedaron atrás; un grupo liderado por Círdan (Falathrim) se quedó en las costas; otro grupo (Eglath) esperaba a Elwë. Finalmente Olwë los llevó a Tol Eressëa.", "Los Teleri aprendieron a construir naves de cisnes, cruzaron a Aman y fundaron Alqualondë (Puerto de los Cisnes), ciudad de perlas.", "Finwë tuvo tres hijos: Fëanor (de Míriel), Fingolfin y Finarfin (de Indis de los Vanyar); cada línea tendrá un papel decisivo en la historia."], shouldKnowAfter: ["Ingwë es el Rey Supremo de todos los Elfos y mora a los pies de Manwë en Taniquetil; los Vanyar abandonaron Tirion para vivir con los Valar y se separaron de los Noldor.", "Los Noldor descubrieron gemas, las tallaron y las repartieron libremente; este amor por las gemas será la semilla de la tragedia de los Silmarils.", "Los siete hijos de Fëanor (Maedhros, Maglor, Celegorm, Caranthir, Curufin, Amrod, Amras) serán protagonistas centrales del conflicto futuro.", "Galadriel, hija de Finarfin, tenía cabellos de oro como si hubiera atrapado el resplandor de Laurelin; su importancia trasciende todas las edades.", "Finarfin se casó con Eärwen hija de Olwë de los Teleri, uniendo las casas Noldor y Teleri; esta unión será fuente de lealtades divididas."] },
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
  { id: "ulmo", name: "Ulmo", aliases: ["Señor de las Aguas", "Ulmo de las Aguas Profundas"], race: "Vala", alignment: "good", role: "Señor de las Aguas y los Ríos", description: "Vive en el Océano Exterior y ama a los Elfos y los Hombres, guiándolos en secreto. Durante la Música, cantó con profundidad y poder. Es único entre los Valar: nunca abandonará Arda.", details: "Nunca participó plenamente en los edictos de los Valar que abandonaron la Tierra Media. Siempre cuidó de Elfos y Hombres en secreto. Transportó a los Vanyar y Noldor a Aman usando una isla arrancada del mar, y luego transportó a los Teleri a Tol Eressëa.", titles: [{chapter: 0, text: "Señor de las Aguas"}, {chapter: 6, text: "Transportador de los Elfos"}], notableDeeds: [{chapter: 0, text: "Cantó en la Gran Música"}, {chapter: 6, text: "Transportó a Vanyar y Noldor a Aman"}, {chapter: 6, text: "Transportó a los Teleri a Tol Eressëa"}], importance: "HIGH", firstChapter: 0, relationships: [{characterId: "iluvatar", type: "father"}, {characterId: "manwe", type: "ally"}], locations: ["Ekkaia", "Océano Exterior", "Aman", "Bahía de Balar", "Bahía de Eldamar"], events: ["Creación de los Ainur", "La Gran Música de los Ainur", "Descenso a Arda", "Transporte a Aman", "Guía a Turgon", "Guía a Tuor"], greatTales: ["creation-music", "fall-gondolin", "earendil"] },
  { id: "finwe", name: "Finwë", race: "Elfo Noldor", alignment: "good", role: "Primer Rey de los Noldor", description: "Lideró a su pueblo a Valinor. Casado primero con Míriel (madre de Fëanor) y luego con Indis de los Vanyar (madre de Fingolfin y Finarfin). Su asesinato precipitó la rebelión de los Noldor.", details: "Finwë fue el primer embajador de los Noldor a Valinor. Tuvo tres hijos de temperamentos distintos: Fëanor de Míriel Serindë, feroz y ardiente; Fingolfin de Indis, fuerte y valiente; Finarfin también de Indis, hermoso y sabio. Finwë lamentaba la separación de los Teleri y la pérdida de Elwë. Reinó sobre los Noldor en Tirion hasta su muerte a manos de Morgoth.", titles: [{chapter: 4, text: "Rey de los Noldor"}, {chapter: 6, text: "Padre de Tres Casas"}], notableDeeds: [{chapter: 4, text: "Fue embajador a Valinor"}, {chapter: 6, text: "Reinó sobre los Noldor en Tirion"}], importance: "CRITICAL", firstChapter: 4, lastChapter: 9, relationships: [{characterId: "feanor", type: "child"}, {characterId: "fingolfin", type: "child"}, {characterId: "finarfin", type: "child"}, {characterId: "miriel", type: "spouse"}, {characterId: "indis", type: "spouse"}], locations: ["Valinor", "Tirion", "Formenos"], events: ["Llegada a Valinor", "Asesinato en Formenos"], greatTales: [] },
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
  { id: "osse", name: "Ossë", race: "Maia", alignment: "neutral", role: "Amo de los mares costeros", description: "Vasallo de Ulmo. Ama las costas e islas. Se deleita en las tormentas y ríe en medio del rugir de las olas. Nunca perdió del todo el gusto por la violencia. Instruyó a los Teleri en ciencias del mar.", details: "En el Capítulo 6, Ossë enseñó a los Teleri ciencias del mar desde una roca. Persuadió a algunos (Falathrim) de quedarse en las costas de Beleriand. Se entristeció cuando Ulmo vino a llevarse a los Teleri, pero de buen grado amarró Tol Eressëa en la Bahía de Eldamar. Regaló cisnes a los Teleri para que arrastren sus naves.", titles: [{chapter: 6, text: "Maestro de ciencias del mar"}], notableDeeds: [{chapter: 6, text: "Instruyó a los Teleri en las artes del mar"}, {chapter: 6, text: "Regaló cisnes a los Teleri para sus naves"}], importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "ulmo", type: "ally"}, {characterId: "uinen", type: "spouse"}], locations: ["Mares costeros", "Océano", "Costas de Beleriand", "Tol Eressëa", "Bahía de Eldamar"], events: [], greatTales: [] },
  { id: "uinen", name: "Uinen", race: "Maia", alignment: "good", role: "Señora de los Mares", description: "Vasalla de Ulmo. Sus cabellos se esparcen por todas las aguas bajo el cielo. Los marineros claman por ella para calmar las olas. Los Númenóreanos la veneraban como a los Valar.", importance: "MEDIUM", firstChapter: 1, relationships: [{characterId: "ulmo", type: "ally"}, {characterId: "osse", type: "spouse"}], locations: ["Océano", "Aguas del Mundo"], events: [], greatTales: [] },
  { id: "olorin", name: "Olórin", race: "Maia", alignment: "good", role: "El más sabio de los Maiar", description: "Vivía en Lórien. Sus caminos lo llevaban a menudo a casa de Nienna, de quien aprendió piedad y paciencia. Andaba entre los Elfos invisible o con forma élfica. Quienes lo escuchaban despertaban de la desesperación.", details: "Más tarde será amigo de todos los Hijos de Ilúvatar. Conocido en la Tierra Media como Gandalf.", importance: "HIGH", firstChapter: 1, relationships: [{characterId: "manwe", type: "ally"}, {characterId: "nienna", type: "ally"}], locations: ["Valinor", "Lórien", "Tierra Media"], events: [], greatTales: ["fall-gondolin", "earendil"] },
  { id: "cirdan", name: "Círdan", aliases: ["El Carpintero de Barcos", "Círdan el Sabio"], race: "Elfo (Teleri/Falathrim)", alignment: "good", role: "Señor de los Falathrim, Carpintero de Barcos", description: "Líder de los Falathrim, los Elfos de las Falas que se quedaron en Beleriand. Primeros marineros y constructores de naves de la Tierra Media. Fue persuadido por Ossë de quedarse en las costas.", details: "Círdan fue el primero en construir barcos en la Tierra Media, aprendido de Ossë. Los Falathrim se establecieron en Brithombar y Eglarest, los puertos de las Falas, bajo su liderazgo. Aunque se quedó atrás cuando otros Teleri cruzaron a Aman, Círdan era sabio y valiente, y sus astilleros serían lugares de gran importancia en los tiempos venideros.", titles: [{chapter: 6, text: "Señor de los Falathrim"}, {chapter: 6, text: "Carpintero de Barcos"}], notableDeeds: [{chapter: 6, text: "Fue el primero en construir barcos en la Tierra Media"}], importance: "MEDIUM", firstChapter: 6, relationships: [{characterId: "osse", type: "ally"}], locations: ["Costas de Beleriand", "Brithombar", "Eglarest"], events: [], greatTales: [] },
  { id: "miriel", name: "Míriel Serindë", aliases: ["Míriel", "Serindë"], race: "Elfo (Noldo)", alignment: "good", role: "Primera esposa de Finwë, madre de Fëanor", description: "Primera esposa de Finwë y madre del mayor de los Noldor. Poseedora de suprema habilidad en tejido y bordado. Su alumbración de Fëanor agotó su espíritu y cuerpo.", details: "Míriel fue una Elfa de gran talento artístico. El esfuerzo de dar a luz a Fëanor consumió toda su vitalidad espiritual. Tras ello, su espíritu abandonó su cuerpo y partió a las Casas de Mandos. Aunque fue sólo brevemente mencionada en el Capítulo 6, su importancia es fundamental al ser la madre del más grande de los Noldor.", titles: [{chapter: 6, text: "Primera Reina de los Noldor"}], notableDeeds: [{chapter: 6, text: "Madre de Fëanor"}], importance: "MEDIUM", firstChapter: 6, relationships: [{characterId: "finwe", type: "spouse"}, {characterId: "feanor", type: "child"}], locations: ["Tirion"], events: [], greatTales: [] },
  { id: "indis", name: "Indis", race: "Elfo (Vanya)", alignment: "good", role: "Segunda esposa de Finwë, madre de Fingolfin y Finarfin", description: "De los Vanyar. Segunda esposa de Finwë y madre de Fingolfin y Finarfin.", details: "Indis fue una Elfa Vanya que se convirtió en segunda reina de los Noldor al casarse con Finwë. Sus dos hijos con Finwë serían de importancia vital en la historia de los Noldor. Su unión con Finwë fue fuente de cierta tensión con Fëanor, quien veía a sus medio hermanos como rivales.", titles: [{chapter: 6, text: "Segunda Reina de los Noldor"}], notableDeeds: [],importance: "LOW", firstChapter: 6, relationships: [{characterId: "finwe", type: "spouse"}, {characterId: "fingolfin", type: "child"}, {characterId: "finarfin", type: "child"}], locations: ["Tirion"], events: [], greatTales: [] },
  { id: "earwen", name: "Eärwen", aliases: ["La Doncella Cisne de Alqualondë"], race: "Elfo (Teleri)", alignment: "good", role: "Hija de Olwë, esposa de Finarfin", description: "Hija del Rey Olwë de los Teleri. Su matrimonio con Finarfin unió las casas Noldor y Teleri, creando lealtades divididas que afectarían profundamente la historia.", details: "Eärwen fue una princesa Teleri de gran belleza. Su casamiento con Finarfin fue un acto importante que unió las dos mayores casas de los Noldor con los Teleri. A través de ella, la sangre de Olwë pasó a los hijos de Finarfin, incluyendo a Galadriel.", titles: [{chapter: 6, text: "Princesa de Alqualondë"}], notableDeeds: [],importance: "LOW", firstChapter: 6, relationships: [{characterId: "olwe", type: "father"}, {characterId: "finarfin", type: "spouse"}, {characterId: "galadriel", type: "child"}], locations: ["Alqualondë"], events: [], greatTales: [] },
  { id: "fingon", name: "Fingon", race: "Elfo (Noldor)", alignment: "good", role: "Hijo de Fingolfin", description: "Hijo de Fingolfin. Fue un señor valiente de los Noldor. Luego se convirtió en Rey de los Noldor en el norte durante los Años del Sol.", details: "Fingon era de espíritu guerrero, hijo del valeroso Fingolfin. Aunque sólo brevemente mencionado en el Capítulo 6 por su genealogía, su importancia crecería enormemente en los tiempos venideros.", titles: [{chapter: 6, text: "Príncipe de los Noldor"}], notableDeeds: [],importance: "MEDIUM", firstChapter: 6, relationships: [{characterId: "fingolfin", type: "father"}, {characterId: "turgon", type: "sibling"}, {characterId: "aredhel", type: "sibling"}], locations: ["Tirion"], events: [], greatTales: [] },
  { id: "turgon", name: "Turgon", race: "Elfo (Noldor)", alignment: "good", role: "Hijo de Fingolfin", description: "Hijo de Fingolfin. Príncipe sabio de los Noldor. Luego descubrió el valle oculto de Tumladen y fundó Gondolin, la ciudad más gloriosa de la Primera Edad.", details: "Turgon fue un príncipe sabio y fuerza al ver. Aunque sólo mencionado por genealogía en el Capítulo 6, su importancia sería inmensa al fundar la más hermosa ciudad de Elfos en la Tierra Media.", titles: [{chapter: 6, text: "Príncipe de los Noldor"}], notableDeeds: [],importance: "MEDIUM", firstChapter: 6, relationships: [{characterId: "fingolfin", type: "father"}, {characterId: "fingon", type: "sibling"}, {characterId: "aredhel", type: "sibling"}], locations: ["Tirion"], events: [], greatTales: [] },
  { id: "aredhel", name: "Aredhel", aliases: ["Ar-Feiniel", "La Blanca Señora de los Noldor"], race: "Elfo (Noldo)", alignment: "good", role: "Hija de Fingolfin", description: "Hija de Fingolfin. Alta y fuerte, amaba cabalgar y cazar. Pálida de cabellos oscuros, vestía solo de plata y blanco. Estaba con frecuencia en compañía de los hijos de Fëanor.", details: "Aredhel fue una guerrera y cazadora, no típica de las Elfas en su amor por la acción y el movimiento. Sus cabellos eran oscuros como la noche, contrastando con su piel pálida. Su belleza era del tipo valiente y activo. En tiempos posteriores, su unión con Eöl tendría trágicas consecuencias.", titles: [{chapter: 6, text: "Princesa de los Noldor"}, {chapter: 6, text: "La Blanca Señora"}], notableDeeds: [],importance: "MEDIUM", firstChapter: 6, relationships: [{characterId: "fingolfin", type: "father"}, {characterId: "fingon", type: "sibling"}, {characterId: "turgon", type: "sibling"}], locations: ["Tirion"], events: [], greatTales: [] },
  { id: "salmar", name: "Salmar", aliases: ["Hechicero del Sonido"], race: "Maia", alignment: "good", role: "Heraldo y servidor de Ulmo", description: "Llegó a Arda con Ulmo en las aguas primigenias. Creador de los cuernos de Ulmo (los Ulumúri) hechos de conchas blancas. Su música es profunda y poderosa.", importance: "LOW", firstChapter: 2, relationships: [{characterId: "ulmo", type: "ally"}], locations: ["Océano Exterior", "Aguas profundas"], events: ["Llegada a Arda"], greatTales: [] },
  { id: "seven-fathers-dwarves", name: "Los Siete Padres de los Enanos", aliases: ["Khazâd", "Los Padres de los Enanos", "Durin y los Seis"], race: "Enanos", alignment: "neutral", role: "Primeros de todas las razas de Enanos, creados por Aulë", description: "Creados por Aulë en secreto bajo las montañas de la Tierra Media. Hechos fuertes e inquebrantables para sobrevivir a los días del poder de Melkor. Duros como la piedra, empeñosos, leales en amistad y enemistad, capaces de soportar trabajo y hambre más que ninguna criatura con don de palabra.", details: "Durin fue el más notable entre ellos, padre del pueblo más amistoso con los Elfos, cuyas mansiones están en Khazad-dûm. Los Enanos creen que Aulë los reúne en Mandos tras la muerte y que ayudarán a rehacer Arda después de la Última Batalla. Fueron puestos a dormir en sitios distintos y apartados hasta que los Elfos despertaran primero.", titles: [{chapter: 3, text: "Primeros Enanos"}, {chapter: 3, text: "Hijos adoptivos de Aulë"}, {chapter: 3, text: "Maestros artesanos"}], notableDeeds: [{chapter: 3, text: "Fueron creados por Aulë"}, {chapter: 3, text: "Recibieron vida verdadera de Ilúvatar"}, {chapter: 3, text: "Durin fundó el pueblo de Khazad-dûm"}], importance: "HIGH", firstChapter: 3, relationships: [{characterId: "aule", type: "father"}], locations: ["Palacio bajo las montañas", "Khazad-dûm"], events: ["Creación de los Enanos", "Confrontación de Ilúvatar con Aulë", "Los Enanos puestos a dormir"], greatTales: ["creation-dwarves-ents"] },
  { id: "tulkas-expanded", name: "Tulkas", aliases: ["Astaldo", "El Valiente", "El más fuerte en proezas físicas"], race: "Vala", alignment: "good", role: "El Campeón de los Valar, llegó en defensa de Arda", description: "Último de los Valar en descender a Arda. Su llegada trajo la primera paz. Cabello y barba dorados, piel rojiza. Ríe siempre, incluso en batalla. Sus armas son sus manos. Rápido como el viento, sin conocer fatiga.", details: "Vino a Arda al oír la batalla en el Pequeño Reino. Su cólera y risa ahuyentaron a Melkor a las tinieblas exteriores. Se quedó para siempre. Desposó a Nessa en la fiesta de la Primavera en Almaren. Estaba dormido cuando Melkor regresó. En la Batalla de los Poderes, gritó a favor de la guerra sin demora, se adelantó como campeón, luchó con Melkor, lo tendió de bruces y lo sujetó con Angainor.", titles: [{chapter: 2, text: "Astaldo"}, {chapter: 2, text: "El Campeón"}, {chapter: 4, text: "Encadenador de Melkor"}], notableDeeds: [{chapter: 2, text: "Ahuyentó a Melkor a las tinieblas"}, {chapter: 2, text: "Trajo la primera paz a Arda"}, {chapter: 2, text: "Desposó a Nessa en Almaren"}, {chapter: 4, text: "Encadenó a Melkor con Angainor"}], importance: "HIGH", firstChapter: 2, relationships: [{characterId: "nessa", type: "spouse"}], locations: ["Almaren", "Valinor", "Arda", "Utumno"], events: ["Llegada de Tulkas", "Boda de Tulkas y Nessa", "La Batalla de los Poderes"], greatTales: ["primavera-caida-lamparas", "despertar-batalla-poderes"] },
  { id: "ingwe", name: "Ingwë", race: "Elfo (Vanya)", alignment: "good", role: "Señor supremo de los Elfos Vanyar", description: "El más grande de los señores élficos. Primer embajador enviado a Valinor. Líder de los Vanyar, la primera y más reducida hueste de Eldar. Entró en Valinor y se sentó a los pies de los Poderes. Nunca volvió a la Tierra Media.", importance: "HIGH", firstChapter: 4, relationships: [{characterId: "finwe", type: "ally"}, {characterId: "elwe-singollo", type: "ally"}], locations: ["Cuiviénen", "Valinor"], events: ["Oromë descubre a los Elfos", "Tres embajadores visitan Valinor", "La Gran Marcha de los Eldar"], greatTales: ["despertar-batalla-poderes", "gran-marcha-division"] },
  { id: "elwe-singollo", name: "Elwë Singollo", aliases: ["Singollo", "Mantogrís", "Elu Thingol", "Rey Mantogrís"], race: "Elfo (Teleri / Sindar)", alignment: "good", role: "Señor de los Teleri, Rey de los Sindar, Rey de Doriath", description: "Tercer embajador de los Teleri. Co-señor con su hermano Olwë. Deseaba volver a Valinor y sentía gran amistad por Finwë. En Beleriand, encontró a Melian en Nan Elmoth; cayó un hechizo sobre ambos que duró años. Nunca cruzó el mar. Se convirtió en Elu Thingol, Rey Mantogrís, señor de los Sindar (Elfos Grises), y reinó con Melian en Menegroth, capital de Doriath.", details: "Era de estatura mayor que ninguno de los Hijos de Ilúvatar. Cabellos de plata gris. Quedó sobrecogido por la luz de los Dos Árboles. En la marcha hacia el oeste, guió a los Teleri, siempre el primero en partir. Tras encontrar a Melian, adquirió aspecto y poder de señor de los Maiar. Fue el único Sindar contado entre los Elfos de la Luz por haber visto los Árboles. Mandaba a todos los Eldar de Beleriand desde Menegroth.", titles: [{chapter: 4, text: "Señor de los Teleri"}, {chapter: 5, text: "Elu Thingol"}, {chapter: 5, text: "Rey de los Sindar"}, {chapter: 5, text: "Rey de Doriath"}], notableDeeds: [{chapter: 4, text: "Fue embajador a Valinor"}, {chapter: 5, text: "Se unió a Melian en Nan Elmoth"}, {chapter: 5, text: "Fundó el reino de Doriath"}], importance: "CRITICAL", firstChapter: 4, lastChapter: 5, relationships: [{characterId: "melian", type: "spouse"}, {characterId: "olwe", type: "sibling"}, {characterId: "finwe", type: "ally"}], locations: ["Cuiviénen", "Valinor", "Eriador", "Nan Elmoth", "Menegroth", "Doriath"], events: ["Oromë descubre a los Elfos", "Tres embajadores visitan Valinor", "La Gran Marcha de los Eldar", "Melian parte de Valinor", "Encuentro de Elwë y Melian", "Fundación de Doriath"], greatTales: ["despertar-batalla-poderes", "gran-marcha-division", "amor-thingol-melian"] },
  { id: "olwe", name: "Olwë", race: "Elfo (Teleri)", alignment: "good", role: "Señor de los Teleri en Aman", description: "Hermano de Elwë Singollo. Se convirtió en rey de los Teleri cuando Elwë desapareció. Lideró a los Teleri a través de la Gran Marcha, y luego a Tol Eressëa y a Aman. Fundó y reinó en Alqualondë, la ciudad de los Teleri en Aman.", details: "Olwë fue el co-señor de los Teleri durante la Gran Marcha, siendo siempre el último en el camino. Cuando su hermano Elwë no apareció, Olwë se convirtió en rey de los Teleri. Los guió hasta las costas de Beleriand, donde Ossë los instruyó en ciencias del mar. Finalmente, Ulmo los transportó a Tol Eressëa y luego a Aman. En Aman, Olwë fundó Alqualondë, una ciudad de perlas con naves en forma de cisnes. Su hija Eärwen se casó con Finarfin, uniendo las casas Noldor y Teleri.", titles: [{chapter: 4, text: "Co-señor de los Teleri"}, {chapter: 6, text: "Rey de los Teleri en Aman"}, {chapter: 6, text: "Fundador de Alqualondë"}], notableDeeds: [{chapter: 4, text: "Lideró la Gran Marcha"}, {chapter: 6, text: "Fundó Alqualondë, el Puerto de los Cisnes"}], importance: "HIGH", firstChapter: 4, relationships: [{characterId: "elwe-singollo", type: "sibling"}, {characterId: "earwen", type: "child"}], locations: ["Cuiviénen", "Eriador", "Beleriand", "Costas de Beleriand", "Tol Eressëa", "Alqualondë", "Aman"], events: ["Oromë descubre a los Elfos", "La Gran Marcha de los Eldar", "Fundación de Alqualondë"], greatTales: ["gran-marcha-division"] },
  { id: "sauron", name: "Sauron", aliases: ["Teniente de Melkor", "Señor de Angband"], race: "Maia", alignment: "evil", role: "Teniente supremo de Melkor, comandante de Angband", description: "Fue en un principio Maia de Aulë antes de ser corrompido por Melkor. Comandaba Angband, la fortaleza costera del noroeste. No fue encontrado cuando los Valar derribaron Utumno tras la Batalla de los Poderes.", importance: "HIGH", firstChapter: 4, relationships: [{characterId: "melkor", type: "ally"}, {characterId: "aule", type: "father"}], locations: ["Angband"], events: ["Construcción de Angband", "La Batalla de los Poderes"], greatTales: ["despertar-batalla-poderes"] },
  { id: "melian", name: "Melian", aliases: ["La Reina de Doriath", "Reina de los Sindar"], race: "Maia", alignment: "good", role: "Reina de Doriath, Maia de los jardines de Lórien", description: "Moraba en los jardines de Lórien antes de partir a la Tierra Media al despertar de los Quendi. Nadie más hermosa, más sabia, ni que conociese mejor las canciones de encantamiento. Los ruiseñores la acompañaban siempre y ella les enseñaba a cantar.", details: "Cuando cantaba en Lórien, los Valar abandonaban el trabajo, los pájaros callaban, las campanas de Valmar enmudecían y las fuentes dejaban de fluir. Antes del Mundo se parecía a Yavanna. Partió a la Tierra Media y encontró a Elwë en Nan Elmoth. Un hechizo cayó sobre ambos y permanecieron inmóviles mientras años pasaban y los árboles crecían altos y oscuros. Se convirtió en reina de los Sindar. En poder y dignidad fue contada entre los Grandes Poderes del Mundo. Su magia tejida alrededor de Doriath lo protegió de todo mal.", titles: [{chapter: 5, text: "Reina de Doriath"}, {chapter: 5, text: "Reina de los Sindar"}, {chapter: 5, text: "Maestra de canciones"}], notableDeeds: [{chapter: 5, text: "Partió de Valinor a la Tierra Media"}, {chapter: 5, text: "Se unió a Elwë en Nan Elmoth bajo un hechizo"}, {chapter: 5, text: "Fundó el reino de Doriath con Thingol"}], importance: "CRITICAL", firstChapter: 5, relationships: [{characterId: "elwe-singollo", type: "spouse"}], locations: ["Lórien", "Nan Elmoth", "Menegroth", "Doriath"], events: ["Melian parte de Valinor", "Encuentro de Elwë y Melian", "Fundación de Doriath"], greatTales: ["amor-thingol-melian"] }
];

export const locationsData: Location[] = [
  { id: "valinor", name: "Valinor", description: "El Reino Bendecido en el continente de Aman, hogar de los Valar y los Elfos de la Luz. Aquí fue la Música cantada, los Árboles crecieron, y los Valar dirigieron el destino de Arda.", importance: "CRITICAL", type: "Realm", region: "Aman", status: "Active", firstChapter: 0, lat: 20, lng: -60, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo", "iluvatar"], relatedEvents: ["great-music", "vision-arda"], greatTales: ["creation-music"] },
  { id: "angband", name: "Angband", description: "La fortaleza secundaria y luego principal de Morgoth en el norte de Beleriand.", importance: "CRITICAL", type: "Fortress", region: "Beleriand", status: "Active", firstChapter: 3, lat: 75, lng: -20, ruler: { characterId: "melkor", period: "Capítulos 3-24" }, relatedCharacters: ["melkor", "beren", "luthien", "turin"], relatedEvents: ["t12", "t13"], greatTales: ["beren-luthien", "turin", "fall-gondolin"] },
  { id: "doriath", name: "Doriath", aliases: ["El Reino Escondido", "Menegroth"], description: "El Reino Escondido de Thingol y Melian en los bosques centrales de Beleriand.", importance: "CRITICAL", type: "Kingdom", region: "Beleriand", status: "Destroyed", lastChapter: 23, firstChapter: 5, ruler: { characterId: "thingol", period: "Capítulos 5-23" }, relatedCharacters: ["thingol", "melian", "luthien", "beren"], relatedEvents: ["t4", "t16"], lat: 50, lng: 20, greatTales: ["beren-luthien"] },
  { id: "tirion", name: "Tirion", description: "La gran ciudad de los Elfos Noldor y Vanyar sobre la colina de Túna en Aman.", importance: "HIGH", type: "City", region: "Aman", status: "Active", firstChapter: 6, lat: 15, lng: -55, relatedCharacters: ["feanor", "fingolfin", "finarfin"], relatedEvents: ["t6", "t8"], greatTales: [] },
  { id: "formenos", name: "Formenos", description: "Fortaleza de Fëanor en el norte de Valinor.", importance: "MEDIUM", type: "Fortress", region: "Aman", status: "Destroyed", firstChapter: 8, lat: 25, lng: -58, relatedCharacters: ["feanor", "finwe"], relatedEvents: ["t7"], greatTales: [] },
  { id: "helcaraxe", name: "Helcaraxë", description: "El Hielo Crujiente, el estrecho estrecho en el extremo norte que conectaba Aman y la Tierra Media.", importance: "HIGH", type: "Other", region: "Mar", status: "Legendary", firstChapter: 14, lat: 82, lng: -10, relatedCharacters: ["fingolfin", "finarfin", "galadriel"], relatedEvents: ["t8"], greatTales: [] },
  { id: "hithlum", name: "Hithlum", description: "Región del norte de Beleriand, feudo principal de Fingolfin y los Altos Reyes.", importance: "HIGH", type: "Region", region: "Beleriand", status: "Destroyed", firstChapter: 15, lat: 70, lng: -40, ruler: { characterId: "fingolfin", period: "Capítulos 15-19" }, relatedCharacters: ["fingolfin"], relatedEvents: ["t12"], greatTales: [] },
  { id: "nargothrond", name: "Nargothrond", aliases: ["Fortaleza de Narog", "Castillo Subterráneo"], description: "Reino subterráneo fundado por Finrod Felagund cerca del río Narog.", importance: "HIGH", type: "Fortress", region: "Beleriand", status: "Destroyed", lastChapter: 22, firstChapter: 15, relatedCharacters: ["turin"], relatedEvents: ["t15"], lat: 35, lng: -50, greatTales: ["turin"] },
  { id: "gondolin", name: "Gondolin", aliases: ["La Ciudad Oculta", "Roca Oculta", "Ciudad de Turgon"], description: "La Ciudad Oculta de Turgon, rodeada por las Montañas Circundantes.", importance: "CRITICAL", type: "City", region: "Beleriand", status: "Destroyed", lastChapter: 24, firstChapter: 16, relatedCharacters: ["earendil", "tuor", "idril"], relatedEvents: ["t11", "t17"], lat: 55, lng: -15, greatTales: ["fall-gondolin"] },
  { id: "tolgalen", name: "Tol Galen", description: "La Isla Verde en Adurant, donde vivieron Beren y Lúthien.", importance: "MEDIUM", type: "Other", region: "Beleriand", status: "Legendary", firstChapter: 20, lat: 30, lng: 10, relatedCharacters: ["beren", "luthien"], relatedEvents: ["t13"], greatTales: ["beren-luthien"] },
  { id: "brethil", name: "Brethil", description: "El bosque de los Hombres de Haleth, escenario del fin trágico de Túrin.", importance: "MEDIUM", type: "Forest", region: "Beleriand", status: "Active", firstChapter: 18, lat: 40, lng: -10, relatedCharacters: ["turin"], relatedEvents: ["t15"], greatTales: ["turin"] },
  { id: "aman", name: "Aman", aliases: ["Tierra Bendecida", "Tierra Inmortal", "Las Tierras Imperecederas"], description: "El continente sagrado en el lejano Oeste donde habitan los Valar y los Elfos elegidos. Protegido de las perecederas del mundo material. Es el destino final de los justos.", importance: "CRITICAL", type: "Realm", region: "Aman", status: "Active", firstChapter: 0, lat: 25, lng: -70, relatedCharacters: ["manwe", "varda", "aule", "yavanna", "ulmo", "iluvatar"], relatedEvents: ["vision-arda", "descent-valar"], greatTales: ["creation-music"] },
  { id: "ocean", name: "El Océano Exterior", aliases: ["Ekkaia", "El Mar Externo", "Las Aguas Circundantes"], description: "La vastedad de agua que rodea a Arda. Ulmo mora en sus profundidades. Más allá de él se encuentran los Puertos de Aman, inaccesibles a los mortales sin don especial.", importance: "HIGH", type: "Other", region: "Mar", status: "Active", firstChapter: 0, lat: 50, lng: -100, relatedCharacters: ["ulmo"], relatedEvents: ["vision-arda"], greatTales: ["creation-music"] },
  { id: "taniquetil", name: "Taniquetil / Oiolossë", aliases: ["Taniquetil", "Oiolossë", "La Montaña Santa"], description: "La montaña más elevada de la Tierra. Morada de Manwë y Varda. Palacios sobre nieves eternas. Desde aquí se puede ver todo Arda.", importance: "HIGH", type: "Mountain", region: "Aman", status: "Active", firstChapter: 1, lat: 0, lng: -40, relatedCharacters: ["manwe", "varda"], relatedEvents: [], greatTales: [] },
  { id: "mandos-hall", name: "Mandos (Las Casas de los Muertos)", aliases: ["Casas de Mandos", "Fosa del Ahora"], description: "En el oeste de Valinor. Guardado por Námo. Las estancias se amplían con las edades y se adornan con los tapices de Vairë que registran toda la historia.", importance: "HIGH", type: "Fortress", region: "Aman", status: "Active", firstChapter: 1, lat: 70, lng: -77, ruler: {characterId: "mandos", period: "Desde la creación"}, relatedCharacters: ["mandos", "vaire", "nienna"], relatedEvents: [], greatTales: [] },
  { id: "lorien", name: "Lórien (Jardines de Irmo)", aliases: ["Jardines de Irmo", "Los Prados Dorados"], description: "El más hermoso de todos los lugares del mundo. Habitado por muchos espíritus. Contiene el lago de Lórellin. Incluso los Valar acuden allí por reposo. Olórin vivía en estos jardines.", importance: "MEDIUM", type: "Other", region: "Aman", status: "Active", firstChapter: 1, lat: -20, lng: -58, relatedCharacters: ["irmo", "este", "olorin"], relatedEvents: [], greatTales: [] },
  { id: "valimar", name: "Valimar (Ciudad de los Valar)", aliases: ["Valmar", "Valimar la de muchas campanas", "Ciudad de los Valar"], description: "Ciudad de los Valar en el corazón de Valinor, de excepcional belleza. Centro administrativo y político. Ante su portal occidental está Ezellohar. Contiene el Máhanaxar (Anillo del Juicio) donde se sientan en consejo.", importance: "HIGH", type: "City", region: "Aman", status: "Active", firstChapter: 2, lat: 20, lng: -62, relatedCharacters: ["manwe", "varda"], relatedEvents: ["Fundación de Valinor", "Nacimiento de los Dos Árboles"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "almaren", name: "Almaren", aliases: ["Isla del Almacén"], description: "Isla en el Gran Lago en el centro de la Tierra Media. Primera morada de los Valar. Donde la luz de ambas Grandes Lámparas (Illuin y Ormal) se mezclaba. Centro de la primavera de Arda. Destruida cuando cayeron las Lámparas.", importance: "HIGH", type: "Other", region: "Este", status: "Destroyed", firstChapter: 2, lastChapter: 2, lat: 50, lng: 50, relatedCharacters: ["manwe", "tulkas", "nessa"], relatedEvents: ["La Primavera de Arda", "Boda de Tulkas y Nessa", "Destrucción de las Lámparas"], greatTales: ["primavera-caida-lamparas"] },
  { id: "utumno-expanded", name: "Utumno", aliases: ["Fortaleza de Melkor", "Las Cavernas del Norte"], description: "Vasta fortaleza subterránea construida por Melkor bajo la Tierra, debajo de montañas oscuras en el norte lejano. Lugar donde los rayos de Illuin eran fríos y débiles. Refugio de Melkor y morada de sus servidores. Centro de la corrupción de la Primavera de Arda.", importance: "CRITICAL", type: "Fortress", region: "Este", status: "Active", firstChapter: 2, lat: 80, lng: 30, ruler: {characterId: "melkor", period: "Desde construcción"}, relatedCharacters: ["melkor"], relatedEvents: ["Construcción de Utumno", "Destrucción de las Lámparas"], greatTales: ["primavera-caida-lamparas"] },
  { id: "pelori", name: "Las Pelóri (Montañas de Aman)", aliases: ["Las Montañas de Aman", "Murallas de Aman"], description: "Las montañas más altas de toda la Tierra. Levantadas por los Valar como muralla de defensión contra Melkor. Intransitables salvo por los pasos secretos. Cima de Taniquetil se alza sobre todas ellas. Separan Valinor del Océano Exterior.", importance: "HIGH", type: "Mountain", region: "Aman", status: "Active", firstChapter: 2, lat: 20, lng: -70, relatedCharacters: ["manwe", "varda"], relatedEvents: ["Fundación de Valinor"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "ezellohar", name: "Ezellohar / Corollairë", aliases: ["Corollairë", "Montículo Verde", "Colina Roja"], description: "Montículo verde ante el portal occidental de Valimar. Consagrado por Yavanna. Regado por Nienna con lágrimas. Aquí cantó Yavanna la Canción de los Dos Árboles y de su canto nacieron Telperion y Laurelin. Lugar más sagrado de Valinor.", importance: "CRITICAL", type: "Other", region: "Aman", status: "Active", firstChapter: 2, lat: 21, lng: -62, relatedCharacters: ["yavanna", "nienna"], relatedEvents: ["Nacimiento de los Dos Árboles"], greatTales: ["fundacion-valinor-arboles"] },
  { id: "mahanaxar", name: "Máhanaxar", aliases: ["El Anillo del Juicio", "Anillo de Juicio"], description: "Círculo de asientos consagradores cerca de los portales dorados de Valimar. Donde los Valar se reúnen en consejo. Lugar donde se juzgan los asuntos de Arda y se toman decisiones sobre el destino del Mundo.", importance: "MEDIUM", type: "Other", region: "Aman", status: "Active", firstChapter: 2, lat: 20.5, lng: -62, relatedCharacters: ["manwe"], relatedEvents: [], greatTales: [] },
  { id: "palace-dwarves", name: "Palacio bajo las montañas", aliases: ["Taller secreto de Aulë", "Morada de los Siete Padres"], description: "Lugar secreto excavado bajo las montañas de la Tierra Media donde Aulë creó en secreto a los Siete Padres de los Enanos. Fue abandonado después de que Ilúvatar concediera vida verdadera a los Enanos y Aulë los pusiera a dormir.", importance: "MEDIUM", type: "Other", region: "Este", status: "Abandoned", firstChapter: 3, lat: 70, lng: 30, relatedCharacters: ["aule", "seven-fathers-dwarves"], relatedEvents: ["Creación de los Enanos", "Los Enanos puestos a dormir"], greatTales: ["creation-dwarves-ents"] },
  { id: "khazad-dum", name: "Khazad-dûm", aliases: ["Mansiones de Durin", "Ciudad bajo la Montaña"], description: "Mansiones del pueblo de Durin, el más notable de los Siete Padres de los Enanos. Ubicada bajo la montaña. Mencionada como lugar importante de los Enanos en los tiempos venideros.", importance: "MEDIUM", type: "Fortress", region: "Este", status: "Active", firstChapter: 3, lat: 65, lng: 35, relatedCharacters: ["seven-fathers-dwarves"], relatedEvents: [], greatTales: [] },
  { id: "cuivienen", name: "Cuiviénen", aliases: ["Agua del Despertar", "Bahía de Helcar"], description: "Laguna iluminada de estrellas donde los Elfos (Quendi) despertaron. Bahía del Mar Interior de Helcar, lejos al este y hacia el norte. Donde estaban las raíces de la montaña de Illuin. Lugar donde primero vieron las estrellas.", importance: "CRITICAL", type: "Other", region: "Este", status: "Legendary", firstChapter: 4, lat: 80, lng: 60, relatedCharacters: ["ingwe", "finwe", "elwe-singollo", "olwe"], relatedEvents: ["Despertar de los Elfos en Cuiviénen", "Oromë descubre a los Elfos"], greatTales: ["despertar-batalla-poderes"] },
  { id: "helcar", name: "Helcar", aliases: ["Mar Interior de Helcar"], description: "Mar interior de la Tierra Media donde habían estado las raíces de Illuin. Cuiviénen era una bahía profunda de este mar en su extremo oriental y septentrional.", importance: "MEDIUM", type: "Other", region: "Este", status: "Legendary", firstChapter: 4, lat: 75, lng: 50, relatedEvents: ["Despertar de los Elfos en Cuiviénen"], greatTales: [] },
  { id: "ered-luin", name: "Ered Luin", aliases: ["Montañas Azules"], description: "Montañas entre Eriador y Beleriand. Primera barrera que encontraron los Eldar en su marcha hacia el oeste. Los Vanyar y Noldor las cruzaron primero; los Teleri llegaron después. Sitio de separaciones durante la Gran Marcha.", importance: "HIGH", type: "Mountain", region: "Beleriand", status: "Active", firstChapter: 4, lat: 60, lng: 10, relatedCharacters: ["ingwe", "finwe", "elwe-singollo"], relatedEvents: ["La Gran Marcha de los Eldar"], greatTales: ["gran-marcha-division"] },
  { id: "anduin", name: "Anduin", aliases: ["El Gran Río"], description: "El mayor río que fluye hacia el norte de la Tierra Media. Frontera occidental de Eriador. Los Teleri habitaron su orilla oriental durante algún tiempo; los Vanyar y Noldor lo cruzaron. Sitio crítico en la Gran Marcha.", importance: "MEDIUM", type: "Other", region: "Este", status: "Active", firstChapter: 4, lat: 50, lng: 20, relatedCharacters: ["elwe-singollo"], relatedEvents: ["La Gran Marcha de los Eldar"], greatTales: ["gran-marcha-division"] },
  { id: "hithaeglir", name: "Hithaeglir", aliases: ["Torres de la Niebla", "Montañas Nubladas"], description: "Montañas levantadas por Melkor en los límites de Eriador para entorpecer las cabalgatas de Oromë. Ante ellas, Lenwë se separó con los Nandor hacia el sur, no deseando cruzarlas.", importance: "MEDIUM", type: "Mountain", region: "Este", status: "Active", firstChapter: 4, lat: 45, lng: 15, relatedCharacters: ["olwe"], relatedEvents: ["La Gran Marcha de los Eldar"], greatTales: ["gran-marcha-division"] },
  { id: "balar", name: "Bahía de Balar", aliases: ["Bahía de Balar"], description: "Bahía principal del Gran Golfo en el oeste de Beleriand. Desembocadura del Río Sirion que descendía de Dorthonion y las montañas en torno a Hithlum. Punto de llegada para los Eldar en su viaje al oeste.", importance: "MEDIUM", type: "Other", region: "Beleriand", status: "Active", firstChapter: 4, lat: 30, lng: -20, relatedEvents: ["La Gran Marcha de los Eldar"], greatTales: ["gran-marcha-division"] },
  { id: "nan-elmoth", name: "Nan Elmoth", aliases: ["Bosque Sombrío"], description: "Bosque iluminado por las estrellas en Beleriand donde Elwë encontró a Melian en un claro abierto. Un hechizo cayó sobre ambos y permanecieron inmóviles mientras años pasaban y los árboles crecían altos y oscuros. Sitio del encuentro más importante del Silmarillion.", importance: "CRITICAL", type: "Forest", region: "Beleriand", status: "Active", firstChapter: 5, lat: 35, lng: -10, relatedCharacters: ["elwe-singollo", "melian"], relatedEvents: ["Encuentro de Elwë y Melian"], greatTales: ["amor-thingol-melian"] },
  { id: "menegroth", name: "Menegroth", aliases: ["Las Mil Cavernas", "Mil Cavernas"], description: "Estancias ocultas y cavernas maravillosas donde Thingol y Melian establecieron su reino. Capital del reino de Doriath. Construida bajo la montaña con habitaciones preciosas, salones vastos y arquitectura élfica de gran belleza.", importance: "CRITICAL", type: "Fortress", region: "Beleriand", status: "Active", firstChapter: 5, lat: 25, lng: -15, relatedCharacters: ["elwe-singollo", "melian"], relatedEvents: ["Fundación de Doriath"], greatTales: ["amor-thingol-melian"] },
  { id: "doriath", name: "Doriath", aliases: ["Reino de Thingol", "Reino Gris"], description: "Reino protegido de Thingol y Melian en Beleriand. Gobernado sobre todos los Sindar (Elfos Grises). Protegido por la magia de Melian que tejió un cerco invisible alrededor del reino. El más bello y seguro de los reinos élficos durante la Primera Edad.", importance: "CRITICAL", type: "Kingdom", region: "Beleriand", status: "Active", firstChapter: 5, lat: 30, lng: -10, relatedCharacters: ["elwe-singollo", "melian"], relatedEvents: ["Fundación de Doriath"], greatTales: ["amor-thingol-melian"] },
  { id: "tol-eressea", name: "Tol Eressëa", aliases: ["La Isla Solitaria"], description: "Isla arrancada del mar por Ulmo, usada como navío para transportar a los Elfos. Amarrada por Ossë en la Bahía de Eldamar. Los Teleri habitaron allí largo tiempo bajo las estrellas, a la vista de Aman. De aquí cruzaron finalmente a Aman.", importance: "HIGH", type: "Other", region: "Mar", status: "Active", firstChapter: 6, lat: 5, lng: -50, relatedCharacters: ["ulmo", "osse", "olwe"], relatedEvents: ["Transporte de Teleri a Tol Eressëa"], greatTales: [] },
  { id: "tuna", name: "Túna", description: "Colina verde elevada en un valle del Calacirya. La luz de los Dos Árboles se derramaba sobre ella desde el oeste. Sobre ella se levantó la ciudad de Tirion, blanca de muros y torres.", importance: "HIGH", type: "Other", region: "Aman", status: "Active", firstChapter: 6, lat: 18, lng: -55, relatedCharacters: ["finwe", "feanor"], relatedEvents: ["Fundación de Tirion"], greatTales: [] },
  { id: "calacirya", name: "Calacirya", aliases: ["Paso de la Luz"], description: "Hueco abierto en las Pelóri por los Valar. Por él fluye el resplandor de Valinor hacia el mar, encendiendo las ondas de plata y oro. Permitió que la luz de los Dos Árboles iluminara la bahía de Eldamar.", importance: "HIGH", type: "Other", region: "Aman", status: "Active", firstChapter: 6, lat: 20, lng: -60, relatedCharacters: ["manwe"], relatedEvents: ["Fundación de Valinor"], greatTales: [] },
  { id: "alqualonde", name: "Alqualondë", aliases: ["Puerto de los Cisnes"], description: "Ciudad y puerto de los Teleri en los confines de Eldamar. Mansiones de perlas, naves con forma de cisnes con picos de oro. Portal: arco tallado en roca viva por las aguas. Olwë reinaba aquí como Rey de los Teleri.", importance: "CRITICAL", type: "City", region: "Aman", status: "Active", firstChapter: 6, lat: 10, lng: -48, ruler: { characterId: "olwe", period: "Capítulo 6 en adelante" }, relatedCharacters: ["olwe", "earwen"], relatedEvents: ["Fundación de Alqualondë"], greatTales: [] },
  { id: "isla-balar", name: "Isla de Balar", description: "Cuerno oriental de la isla de Ulmo que se quebró al encallar en los bajíos del Sirion. Ossë la visitó con frecuencia. Luego se convirtió en refugio de Elfos en tiempos posteriores.", importance: "LOW", type: "Other", region: "Beleriand", status: "Active", firstChapter: 6, lat: 20, lng: -10, relatedCharacters: ["ossE"], relatedEvents: [], greatTales: [] },
  { id: "brithombar-eglarest", name: "Brithombar y Eglarest", aliases: ["Puertos de las Falas"], description: "Los dos puertos principales de las Falas en Beleriand. Morada de los Falathrim bajo el señorío de Círdan. Primeros puertos y astilleros de la Tierra Media. Lugares de importancia en el comercio y la guerra.", importance: "MEDIUM", type: "City", region: "Beleriand", status: "Active", firstChapter: 6, lat: 25, lng: -35, ruler: { characterId: "cirdan", period: "Desde el Capítulo 6" }, relatedCharacters: ["cirdan", "osse"], relatedEvents: [], greatTales: [] },
  { id: "eldamar-bay", name: "Bahía de Eldamar", aliases: ["Hogar de los Elfos"], description: "Bahía donde Ossë amarró Tol Eressëa. La luz del Calacirya la bañaba. En sus costas, los Teleri navegaban entre cisnes. Los Noldor esparcían gemas que brillaban bajo el resplandor de la luz de Valinor.", importance: "HIGH", type: "Other", region: "Aman", status: "Active", firstChapter: 6, lat: 8, lng: -50, relatedCharacters: ["ulmo", "osse"], relatedEvents: ["Transporte de Teleri a Tol Eressëa"], greatTales: [] }
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
  { id: "dwarves-creation", year: "Años de las Lámparas", title: "Creación de los Siete Padres de los Enanos", description: "Aulë, impaciente por la llegada de los Hijos de Ilúvatar, crea en secreto a los Siete Padres de los Enanos en un palacio bajo las montañas de la Tierra Media. Hechos fuertes e inquebrantables para los días del poder de Melkor.", importance: "CRITICAL", category: "Creation", firstChapter: 3, relatedCharacters: ["aule", "seven-fathers-dwarves"], relatedLocations: ["palace-dwarves"], greatTaleId: "creation-dwarves-ents" },
  { id: "iluvatar-aule-confrontation", year: "Años de las Lámparas", title: "Confrontación de Ilúvatar con Aulë", description: "Ilúvatar confronta a Aulë, revelándole que sus criaturas carecen de vida propia. Aulë se arrepiente con humildad y ofrece destruirlos. Ilúvatar, movido por su arrepentimiento sincero, les concede vida verdadera pero impone que durmieran hasta que los Elfos despierten primero.", importance: "CRITICAL", category: "Other", firstChapter: 3, relatedCharacters: ["iluvatar", "aule"], relatedLocations: ["palace-dwarves"], greatTaleId: "creation-dwarves-ents" },
  { id: "dwarves-sleep", year: "Años de las Lámparas", title: "Los Enanos puestos a dormir", description: "Aulë pone a los Siete Padres de los Enanos a dormir en sitios distintos y apartados, bajo la piedra y la tierra, esperando que los Elfos (Primeros Nacidos) despierten primero en el Mundo.", importance: "HIGH", category: "Other", firstChapter: 3, relatedCharacters: ["aule", "seven-fathers-dwarves"], relatedLocations: ["palace-dwarves"], greatTaleId: "creation-dwarves-ents" },
  { id: "yavanna-consultation", year: "Años de las Lámparas", title: "Yavanna consulta a Manwë sobre protección", description: "Yavanna, al enterarse de los Enanos, teme por el destino de sus árboles y criaturas. Acude a Manwë en Ezellohar, bajo los Dos Árboles, pidiendo protección para sus obras contra el daño de los Enanos e Hijos de Ilúvatar.", importance: "HIGH", category: "Other", firstChapter: 3, relatedCharacters: ["yavanna", "manwe"], relatedLocations: ["ezellohar"], greatTaleId: "creation-dwarves-ents" },
  { id: "ents-eagles-promise", year: "Años de las Lámparas", title: "Promesa de los Ents y las Águilas", description: "Manwë recibe una visión renovada de la Canción original de Ilúvatar. Ilúvatar revela que los Pastores de Árboles (Ents) andarán por los bosques para protegerlos, y las Águilas de los Señores del Occidente morarán en las montañas. Todo estaba previsto en la Música original.", importance: "CRITICAL", category: "Creation", firstChapter: 3, relatedCharacters: ["manwe", "yavanna", "iluvatar"], relatedLocations: ["ezellohar"], greatTaleId: "creation-dwarves-ents" },
  { id: "balrogs-gathered", year: "Años de las Lámparas (final)", title: "Los Balrogs se reúnen en Utumno", description: "Melkor reúne a los espíritus de fuego con látigos de llamas (Valaraukar / Balrogs) en su fortaleza de Utumno, preparando la guerra contra los Valar.", importance: "HIGH", category: "Other", firstChapter: 4, relatedCharacters: ["melkor"], relatedLocations: ["utumno-expanded"], greatTaleId: "despertar-batalla-poderes" },
  { id: "angband-built", year: "Años de las Lámparas (final)", title: "Construcción de Angband", description: "Melkor levanta la fortaleza de Angband sobre las costas noroccidentales de la Tierra Media, mandada por Sauron, para resistir ataques desde Aman. Sus cavernas serán ocultas a los Valar.", importance: "HIGH", category: "Creation", firstChapter: 4, relatedCharacters: ["melkor", "sauron"], relatedLocations: ["angband"], greatTaleId: "despertar-batalla-poderes" },
  { id: "stars-created", year: "Años de los Árboles (primeros)", title: "Varda crea las nuevas estrellas", description: "Varda recoge rocío de Telperion y crea estrellas nuevas y más brillantes incluyendo Carnil, Luinil, Nénar, Lumbar y Alcarinquë. Lanza la Valacirca (Hoz de los Valar) como reto al norte. Cuando Menelmacar entra en el cielo, los Elfos despertarán.", importance: "CRITICAL", category: "Creation", firstChapter: 4, relatedCharacters: ["varda"], relatedLocations: ["valinor"], greatTaleId: "despertar-batalla-poderes" },
  { id: "t4", year: "Años de los Árboles (primeros)", title: "Despertar de los Elfos en Cuiviénen", description: "Los Quendi (Elfos) despiertan junto al lago Cuiviénen cuando Menelmacar entra en el cielo. Contemplan las estrellas como lo primero que ven. Melkor ya ha capturado algunos y los ha corrompido antes de la llegada de Oromë.", importance: "CRITICAL", category: "Birth", firstChapter: 4, relatedCharacters: ["ingwe", "finwe", "elwe-singollo", "olwe"], relatedLocations: ["cuivienen"], greatTaleId: "despertar-batalla-poderes" },
  { id: "orome-discovers", year: "Años de los Árboles (primeros)", title: "Oromë descubre a los Elfos", description: "Oromë, Señor de los Bosques, cabalgando en su caballo blanco Nahar, los descubre por azar mientras caza. Nahar relincha; Oromë oye voces que cantan. Los llama Eldar (Pueblo de las Estrellas). Se convierte en su guía y amigo más amado.", importance: "CRITICAL", category: "Other", firstChapter: 4, relatedCharacters: ["orome", "ingwe", "finwe", "elwe-singollo"], relatedLocations: ["cuivienen"], greatTaleId: "despertar-batalla-poderes" },
  { id: "battle-of-powers", year: "Años de los Árboles (primeros)", title: "La Batalla de los Poderes", description: "Los Valar atacan a Melkor. Largo sitio de Utumno. Tulkas encadena a Melkor con Angainor (forjada por Aulë). Melkor es encarcelado en las Casas de Mandos por tres edades del mundo. Sauron escapa de Angband. Muchas cosas malignas se dispersan. Victoria incompleta de los Valar.", importance: "CRITICAL", category: "Battle", firstChapter: 4, relatedCharacters: ["melkor", "tulkas", "manwe", "mandos", "sauron"], relatedLocations: ["utumno-expanded", "angband", "mandos-hall"], greatTaleId: "despertar-batalla-poderes" },
  { id: "three-ambassadors", year: "Años de los Árboles (primeros)", title: "Tres embajadores visitan Valinor", description: "Ingwë (Vanyar), Finwë (Noldor) y Elwë (Teleri) viajan a Aman como embajadores de los Elfos. Ven la luz de los Dos Árboles y quedan sobrecogidos por su belleza. Regresan a aconsejar la marcha al oeste.", importance: "HIGH", category: "Journey", firstChapter: 4, relatedCharacters: ["ingwe", "finwe", "elwe-singollo"], relatedLocations: ["valinor", "ezellohar"], greatTaleId: "gran-marcha-division" },
  { id: "great-march", year: "Años de los Árboles (primeros años)", title: "La Gran Marcha de los Eldar", description: "Los Eldar marchan hacia el oeste en tres huestes: Vanyar (Ingwë), Noldor (Finwë) y Teleri (Elwë/Olwë). Oromë los guía. Los Avari se quedan. Lenwë se separa con los Nandor al llegar a Hithaeglir. La marcha es lenta y llena de separaciones que modelarán la historia futura.", importance: "CRITICAL", category: "Journey", firstChapter: 4, relatedCharacters: ["ingwe", "finwe", "elwe-singollo", "olwe", "orome"], relatedLocations: ["cuivienen", "eriador", "ered-luin", "anduin", "hithaeglir", "balar"], greatTaleId: "gran-marcha-division" },
  { id: "melian-departs", year: "Años de los Árboles (tempranos)", title: "Melian parte de Valinor a la Tierra Media", description: "Melian, la Maia más hermosa y sabia de los jardines de Lórien, parte a la Tierra Media cuando los Quendi despiertan. Su voz y los pájaros que la siguen llenan el silencio de la Tierra Media.", importance: "HIGH", category: "Journey", firstChapter: 5, relatedCharacters: ["melian"], relatedLocations: ["lorien"], greatTaleId: "amor-thingol-melian" },
  { id: "encounter-elwe-melian", year: "Años de los Árboles (tempranos)", title: "Encuentro de Elwë y Melian en Nan Elmoth", description: "Elwë Singollo, buscando a su amigo Finwë, llega al bosque de Nan Elmoth. Oye el canto de los ruiseñores de Melian y cae un hechizo sobre él. La encuentra en un claro abierto a las estrellas, ve la luz de Aman en su rostro, le toma la mano. Ambos permanecen inmóviles durante años mientras los árboles crecen altos y oscuros.", importance: "CRITICAL", category: "Other", firstChapter: 5, relatedCharacters: ["elwe-singollo", "melian"], relatedLocations: ["nan-elmoth"], greatTaleId: "amor-thingol-melian" },
  { id: "doriath-founded", year: "Años de los Árboles (tempranos)", title: "Fundación del reino de Doriath", description: "Elwë despierta del trance como Elu Thingol, Rey Mantogrís, transformado por el poder de Melian. Se reúne con su pueblo y establece el reino de Doriath bajo su gobierno. Thingol y Melian reinan en Menegroth, las Mil Cavernas. Doriath se convierte en el más bello y protegido de los reinos élficos.", importance: "CRITICAL", category: "Creation", firstChapter: 5, relatedCharacters: ["elwe-singollo", "melian"], relatedLocations: ["menegroth", "doriath", "nan-elmoth"], greatTaleId: "amor-thingol-melian" },
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
  { id: "t17", year: "Años del Sol, 510", title: "Caída de Gondolin", description: "Morgoth destruye el último gran reino noldorin.", importance: "CRITICAL", category: "Destruction", firstChapter: 24, relatedCharacters: ["melkor", "earendil"], relatedLocations: ["gondolin"], greatTaleId: "fall-gondolin" },
  { id: "t6a", year: "Años de los Árboles", title: "Transporte de Vanyar y Noldor a Aman", description: "Ulmo arranca una isla del mar y transporta a los Vanyar y Noldor a las costas de Aman. Su cuerno oriental se quiebra y queda como la Isla de Balar.", importance: "CRITICAL", category: "Journey", firstChapter: 6, relatedCharacters: ["ulmo", "ingwe", "finwe"], relatedLocations: ["isla-balar", "balar"], greatTaleId: "" },
  { id: "t6b", year: "Años de los Árboles", title: "Fundación de Tirion sobre Túna", description: "Los Valar abren el Calacirya en las Pelóri. Los Elfos levantan la colina de Túna y construyen Tirion con muros blancos. Sobre ella se alza la torre Mindon Eldaliéva.", importance: "CRITICAL", category: "Creation", firstChapter: 6, relatedCharacters: ["finwe", "ingwe"], relatedLocations: ["calacirya", "tuna", "tirion"], greatTaleId: "" },
  { id: "t6c", year: "Años de los Árboles", title: "Los Falathrim se quedan en las Falas", description: "Ossë persuade a un grupo de Teleri de quedarse en las costas de Beleriand. Círdan se convierte en su señor. Establecen los puertos de Brithombar y Eglarest.", importance: "MEDIUM", category: "Other", firstChapter: 6, relatedCharacters: ["osse", "cirdan"], relatedLocations: ["brithombar-eglarest"], greatTaleId: "" },
  { id: "t6d", year: "Años de los Árboles", title: "Los Teleri llegan a Tol Eressëa", description: "Ulmo transporta al grupo principal de Teleri a Tol Eressëa. Ossë amarra la isla en la Bahía de Eldamar. Los Teleri aprenden a construir naves de cisnes de Ossë.", importance: "HIGH", category: "Journey", firstChapter: 6, relatedCharacters: ["ulmo", "osse", "olwe"], relatedLocations: ["tol-eressea", "eldamar-bay"], greatTaleId: "" },
  { id: "t6e", year: "Años de los Árboles", title: "Los Noldor descubren las gemas", description: "Los albañiles de Finwë hallan gemas en las rocas, las tallan con gran destreza y las reparten libremente, enriqueciendo la luz de Valinor.", importance: "HIGH", category: "Creation", firstChapter: 6, relatedCharacters: ["finwe"], relatedLocations: ["tirion"], greatTaleId: "" },
  { id: "t6f", year: "Años de los Árboles", title: "Fundación de Alqualondë", description: "Los Teleri llegan a Aman. Fundación de Alqualondë, el Puerto de los Cisnes, ciudad de perlas donde Olwë reina sobre los Teleri.", importance: "CRITICAL", category: "Creation", firstChapter: 6, relatedCharacters: ["olwe"], relatedLocations: ["alqualonde"], greatTaleId: "" },
  { id: "t6g", year: "Años de los Árboles", title: "Presentación de los Príncipes Noldor", description: "Se establece la genealogía: Finwë tuvo tres hijos: Fëanor (de Míriel), Fingolfin y Finarfin (de Indis). Se presentan sus características distintivas y descendientes.", importance: "CRITICAL", category: "Other", firstChapter: 6, relatedCharacters: ["finwe", "feanor", "fingolfin", "finarfin"], relatedLocations: ["tirion"], greatTaleId: "" }
];

export const greatTalesData: GreatTale[] = [
  {
    id: "amor-thingol-melian",
    title: "El Amor de Thingol y Melian",
    description: "Melian, la Maia más hermosa y sabia de Lórien, parte a la Tierra Media. Elwë Singollo la encuentra en Nan Elmoth y cae un hechizo sobre ambos. Se convierte en Elu Thingol, rey de los Sindar, y reina con Melian en Menegroth. De su unión nacerán los más hermosos de todos los Hijos de Ilúvatar.",
    details: "Melian moraba en los jardines de Lórien, la más hermosa, sabia y conocedora de canciones de encantamiento. Cuando los Quendi despertaron en Cuiviénen bajo las nuevas estrellas de Varda, Melian partió de Valinor a la Tierra Media. Los Teleri descansaban en Beleriand Oriental, pero Elwë, que amaba los bosques, abandonaba a menudo el campamento para buscar a Finwë, que estaba al oeste. Un día llegó al bosque de Nan Elmoth. Oyó allí el canto de los ruiseñores de Melian y un encantamiento cayó sobre él. Avanzó hacia adelante sin pensar en su pueblo ni en sus deberes, y la encontró en un claro abierto a las estrellas. Vio la luz de Aman en su rostro, le tomó la mano, y ambos permanecieron inmóviles, absortos el uno en el otro. Los años pasaban, las estrellas medían largas edades, los árboles crecían altos y oscuros alrededor de ellos, pero ellos no se movían ni hablaban, perdidos en una dicha que va más allá del tiempo. Su pueblo lo buscó sin poder encontrarlo. Olwë, hermano de Elwë, fue hecho rey de los Teleri y continuó el camino hacia el oeste. Elwë nunca llegó a Valinor. Despertó por fin del trance como Elu Thingol, Rey Mantogrís, transformado. Parecía ahora un señor de los Maiar en poder y dignidad. Se reunió con su pueblo y los Sindar (Elfos Grises, los que lo esperaron) lo reconocieron como su rey. Thingol y Melian gobernaron juntos el reino de Doriath en Beleriand, estableciendo su corte en Menegroth, las Mil Cavernas. Su reino fue el más bello y más protegido de todos, cercado por la magia de Melian. De su amor nacieron descendientes de incomparable belleza y sabiduría, quienes llevaban sangre de los Ainur (los Poderes) en sus venas.",
    protagonists: ["melian", "elwe-singollo"],
    antagonists: [],
    keyCharacters: ["olwe", "finwe"],
    relatedLocations: ["nan-elmoth", "menegroth", "doriath"],
    relatedEvents: ["melian-departs", "encounter-elwe-melian", "doriath-founded"],
    themes: ["Amor transformador", "Unión entre razas", "Destino y Encantamiento", "Belleza suprema"],
    needToKnow: [
      "Melian era la Maia más hermosa y sabia de Lórien; partió a la Tierra Media al despertar los Elfos",
      "Elwë la encontró en Nan Elmoth; un hechizo los mantuvo inmóviles durante años",
      "Elwë se convirtió en Thingol, rey de los Sindar; Melian fue su reina en Menegroth, Doriath"
    ],
    afterReadingShouldKnow: [
      "Esta unión Ainu-Elfo es única y su descendencia llevará sangre divina (fundamental para el futuro de los Hijos de Ilúvatar)",
      "La desaparición de Elwë fracturó definitivamente a los Teleri: los que esperaron se llamaron Eglath (Pueblo Abandonado)",
      "Thingol es el único Sindar contado entre los Elfos de la Luz por haber visto los Árboles de Valinor"
    ],
    startChapter: 5,
    endChapter: 5
  },
  {
    id: "despertar-batalla-poderes",
    title: "El Despertar de los Elfos y la Batalla de los Poderes",
    description: "Varda crea nuevas estrellas con rocío de Telperion. Cuando Menelmacar brilla, los Quendi despiertan en Cuiviénen. Oromë los descubre y los llama Eldar. Melkor ha capturado algunos Elfos y los ha corrompido: nacen los Orcos. Los Valar declaran guerra a Melkor. Tulkas lo encadena con Angainor. Es encarcelado en Mandos, pero Sauron escapa de Angband.",
    details: "Varda, la Reina de las Estrellas, realizó una de sus mayores obras: recogió rocío de los árboles sagrados y creó estrellas nuevas y más brillantes. Creó Carnil, Luinil, Nénar y Lumbar, y reunió antiguas estrellas como signos y coronas: Wilwarin, Telumendil, Soronúmë, Anarríma, Menelmacar. Cuando Menelmacar entró en el cielo, bajo su luz, los Quendi despertaron junto a Cuiviénen y contemplaron por primera vez las estrellas. Pero Melkor ya había estado atento. Capturó algunos de los Elfos recién despertados y los corrompió, torturándolos en secreto: así nacieron los Orcos, la creación más vile de Melkor. Cuando Oromë, cazando en los bosques, los descubrió por azar (Nahar relinchó y se detuvo; Oromë oyó voces que cantaban), quedó maravillado. Los llamó Eldar (Pueblo de las Estrellas) y se convirtió en su guía amado. Al saber de los Elfos, los Valar decidieron reclamar el dominio de Arda. Manwë, en Taniquetil, pensó largo tiempo y buscó consejo de Ilúvatar. Luego convocó a los Valar al Anillo del Juicio. Todos acordaron excepto Ulmo, quien deseaba que los Elfos fueran libres en la Tierra Media. Mandos advirtió que 'esta decisión fue causa de muchos daños'. Los Valar lanzaron la Batalla de los Poderes. Largo fue el sitio de Utumno. Tulkas lucho con Melkor, lo tendió de bruces y lo encadenó con Angainor (la cadena forjada por Aulë). Melkor fue llevado con los ojos vendados, pies y manos atados, a las Casas de Mandos, donde fue encarcelado por tres edades completas del mundo. Pero los Valar no limpiaron completamente Utumno ni descubrieron Angband. Sauron, el teniente de Melkor, escapó. Muchas cosas malignas se dispersaron por la Tierra Media. La victoria fue incompleta.",
    protagonists: ["varda", "orome", "manwe", "tulkas"],
    antagonists: ["melkor"],
    keyCharacters: ["mandos", "ulmo", "sauron"],
    relatedLocations: ["cuivienen", "utumno-expanded", "angband", "mandos-hall"],
    relatedEvents: ["stars-created", "t4", "orome-discovers", "battle-of-powers"],
    themes: ["Luz vs. Oscuridad", "Despertar", "Victoria incompleta", "Nacimiento del Mal"],
    needToKnow: [
      "Varda crea estrellas nuevas con rocío de Telperion; cuando Menelmacar brilla, los Quendi despiertan en Cuiviénen",
      "Oromë descubre a los Elfos, los llama Eldar y se convierte en su guía amado",
      "Melkor captura Elfos y los corrompe: así nacen los Orcos, la más vile creación de Melkor"
    ],
    afterReadingShouldKnow: [
      "Los Orcos nacieron de Elfos corrompidos: la más vile acción de Melkor y la más detestada por Ilúvatar",
      "Los Valar no limpiaron completamente Utumno ni descubrieron Angband; quedaron males ocultos que reaparecerán",
      "Ulmo se opuso a la convocatoria de los Elfos; Mandos advirtió que traería muchos daños"
    ],
    startChapter: 4,
    endChapter: 4
  },
  {
    id: "gran-marcha-division",
    title: "La Gran Marcha y la División de los Elfos",
    description: "Tres embajadores (Ingwë, Finwë, Elwë) visitan Valinor y quedan sobrecogidos por la luz de los Dos Árboles. Regresan a aconsejar la marcha al oeste. Los Eldar marchan en tres huestes. Los Avari se quedan. Lenwë se separa con los Nandor. Cada separación modelará la historia futura.",
    details: "Después de la Batalla de los Poderes, los Valar decidieron convocar a los Elfos a Valinor. Eligieron tres embajadores: Ingwë, señor de los Vanyar; Finwë, señor de los Noldor; y Elwë Singollo, co-señor de los Teleri con su hermano Olwë. Los tres viajaron a Aman y vieron la luz de los Dos Árboles de Valinor. Quedaron sobrecogidos por su belleza incomparable. Regresaron a la Tierra Media para aconsejar que sus pueblos marcharan al oeste. Los Valar prepararon el viaje. Oromë guiaría la marcha como guardián y amigo. El viaje comenzó. Los Eldar se dividieron en tres huestes: los Vanyar (Ingwë), primero y más reducido; los Noldor (Finwë), pueblo amigo de Aulë; y los Teleri (Elwë y Olwë), el más numeroso. Los Avari, los Renuentes, se negaron a marchar y se quedaron en la Tierra Media, rechazando la llamada. Durante la marcha, al llegar a las Montañas Nubladas (Hithaeglir), Lenwë se separó con los Nandor (el pueblo de los Teleri que no deseaba cruzar las montañas) y se dirigió al sur. Esta separación sería fatídica: los Nandor nunca llegarían a Aman y permanecerían en la Tierra Media. Los Teleri, divididos y mermados, continuaron bajo el liderazgo de Olwë, quien siempre era el último en partir. La marcha fue lenta y llena de separaciones que modelarían la división futura de los pueblos élficos.",
    protagonists: ["ingwe", "finwe", "elwe-singollo"],
    antagonists: [],
    keyCharacters: ["olwe", "orome"],
    relatedLocations: ["valinor", "eriador", "ered-luin", "anduin", "hithaeglir", "balar"],
    relatedEvents: ["three-ambassadors", "great-march"],
    themes: ["División", "Elección", "Viaje sin retorno", "Fraccionamiento"],
    needToKnow: [
      "Tres embajadores visitaron Valinor y quedaron sobrecogidos por la luz de los Dos Árboles",
      "Los Elfos se dividieron en Eldar (marcharon) y Avari (se quedaron); los Eldar en tres huestes",
      "Lenwë se separó con los Nandor al llegar a Hithaeglir, marcando una división fatal"
    ],
    afterReadingShouldKnow: [
      "Los Vanyar (Ingwë) son los más amados de Manwë y Varda; nunca volvieron a la Tierra Media",
      "Los Noldor (Finwë) son amigos de Aulë y los más hábiles; protagonizarán conflictos futuros",
      "Los Teleri eran los más numerosos pero los más lentos; su división marcará la historia"
    ],
    startChapter: 4,
    endChapter: 4
  },
  {
    id: "creation-dwarves-ents",
    title: "La Creación de los Enanos y la Promesa de los Ents",
    description: "Aulë, impaciente por la llegada de los Hijos de Ilúvatar, crea en secreto a los Siete Padres de los Enanos. Ilúvatar lo confronta, pero al ver su arrepentimiento sincero, les concede vida verdadera. Yavanna, temiendo por sus árboles, obtiene de Ilúvatar la promesa de los Pastores de Árboles (Ents) y las Águilas para proteger la naturaleza.",
    details: "Aulë, cuya impaciencia por tener discípulos lo consumía, trabajó en secreto bajo las montañas de la Tierra Media. Allí creó a los Siete Padres de los Enanos, hechos fuertes e inquebrantables para soportar los días del poder de Melkor. Inventó una lengua para ellos y los hizo empeñosos, leales y capaces de soportar más que ninguna criatura. Pero cuando Aulë los presentó a Ilúvatar, el Único lo confrontó: sus criaturas carecían de vida propia, eran solo marionetas de su voluntad. Aulë, en profundo arrepentimiento, lloró e incluso alzó el martillo para destruirlos. Pero Ilúvatar, viendo la humildad y el amor de Aulë, transformó su transgresión en bendición: les concedió vida verdadera. Sin embargo, impuso que durmieran bajo la piedra hasta que los Elfos (Hijos directos de Ilúvatar) despertaran primero. Aulë puso a los Siete Padres en sitios distintos y apartados para dormir. Cuando Yavanna se enteró de los Enanos, sintió miedo por el destino de sus árboles y criaturas. Acudió a Manwë en Ezellohar, bajo los Dos Árboles, pidiendo protección. Manwë la escuchó y recibió una visión renovada de la Canción original: Ilúvatar reveló que había previsto todo. Los Pastores de Árboles (Ents) andarían por los bosques protegiéndolos, y las Águilas de los Señores del Occidente morarían en las montañas. Todo estaba en la Música desde el principio.",
    protagonists: ["aule", "yavanna", "iluvatar"],
    antagonists: [],
    keyCharacters: ["manwe", "seven-fathers-dwarves"],
    relatedLocations: ["palace-dwarves", "ezellohar", "khazad-dum"],
    relatedEvents: ["dwarves-creation", "iluvatar-aule-confrontation", "dwarves-sleep", "yavanna-consultation", "ents-eagles-promise"],
    themes: ["Humildad vs. Soberbia", "Creación por Amor", "Protección de la Naturaleza", "Previsión Divina"],
    needToKnow: [
      "Aulë creó a los Enanos por impaciencia y deseo de enseñar, no por dominio como Melkor",
      "Ilúvatar les concedió vida verdadera pero impuso que durmieran hasta después del despertar de los Elfos",
      "Yavanna obtuvo la promesa de los Pastores de Árboles y las Águilas para proteger sus obras contra daños"
    ],
    afterReadingShouldKnow: [
      "La humildad ante Ilúvatar transforma el error en bendición; esta es la diferencia clave entre Aulë y Melkor",
      "Los Ents y las Águilas no fueron inventos posteriores sino que estaban presentes en la Canción original desde siempre",
      "La tensión entre quienes trabajan la tierra (Enanos) y quienes la protegen (Ents) está sembrada desde antes de que ningún Hijo despierte"
    ],
    startChapter: 3,
    endChapter: 3
  },
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
  },
  {
    id: "viaje-fundacion-eldamar",
    title: "El Viaje a Aman y la Fundación de Eldamar",
    description: "Ulmo transporta a los Vanyar y Noldor a Aman en una isla arrancada del mar. Los Valar abren el Calacirya y los Elfos fundan Tirion y Alqualondë. Los Teleri se dividen: algunos se quedan en Beleriand con Círdan, otros son transportados a Tol Eressëa y finalmente a Aman.",
    details: "Después de la Batalla de los Poderes y el Despertar de los Elfos, los Valar decidieron convocar a los Eldar a Valinor. Ulmo, quien amaba a los Elfos y nunca los abandonaría, fue encargado de transportarlos. El Señor de las Aguas arrancó una isla del mar e hizo que la Vanyar y Noldor subieran a ella. Cuando navegaba hacia el oeste, su cuerno se quebró al encallar en los bajíos del Sirion, dejando la Isla de Balar. Los transportó a las costas de Aman con seguridad. Los Valar abrieron el Calacirya (Paso de la Luz) en las Pelóri, permitiendo que la luz de los Dos Árboles iluminara el mar. Los Elfos levantaron la colina de Túna en el valle del Calacirya y construyeron sobre ella la ciudad de Tirion, de muros blancos y torres bellas, donde Finwë reinaba sobre los Noldor e Ingwë sobre los Vanyar. Los Noldor descubrieron gemas en las piedras y las tallaron con gran destreza, repartiendo sus tesoros libremente. Los Teleri, sin embargo, se quedaron atrás. Algunos oyeron la llamada de Ossë y no deseaban viajar hacia el oeste. Círdan y los Falathrim se quedaron en Brithombar y Eglarest, los puertos de las Falas, donde se convirtieron en los primeros marineros de la Tierra Media. Los Eglath, Pueblo Abandonado, esperaban a Elwë. Finalmente, Ulmo llevó al grupo principal de los Teleri a Tol Eressëa en la Bahía de Eldamar. Ossë les enseñó a construir naves de cisnes, dándoles sus criaturas de forma de aves. Los Teleri navegaban en sus naves de cisne y finalmente llegaron a Aman, donde fundaron Alqualondë, el Puerto de los Cisnes, bajo el reinado de Olwë.",
    protagonists: ["ulmo", "ossE", "olwe", "finwe", "ingwe"],
    antagonists: [],
    keyCharacters: ["cirdan", "yavanna", "varda"],
    relatedLocations: ["balar", "calacirya", "tuna", "tirion", "tol-eressea", "alqualonde", "eldamar-bay"],
    relatedEvents: ["t6a", "t6b", "t6c", "t6d", "t6f"],
    themes: ["Viaje y Llegada", "Fundación", "Generosidad", "División de Pueblos"],
    needToKnow: [
      "Ulmo transportó a los Vanyar y Noldor a Aman en una isla arrancada del mar; su cuerno quebrado quedó como la Isla de Balar",
      "Los Valar abrieron el Calacirya y los Elfos fundaron Tirion (Noldor/Vanyar) y Alqualondë (Teleri)",
      "Algunos Teleri se quedaron en Beleriand: Falathrim con Círdan y Eglath esperando a Elwë"
    ],
    afterReadingShouldKnow: [
      "Tol Eressëa, Tirion y Alqualondë son las tres grandes moradas élficas de Aman, cada una con carácter propio",
      "Los Noldor descubrieron gemas y las repartieron libremente; este amor por las gemas es preludio de los Silmarils",
      "Galathilion (imagen de Telperion) fue plantado en Tirion; de su semilla nacerá Nimloth en Númenor"
    ],
    startChapter: 6,
    endChapter: 6
  },
  {
    id: "principes-noldor",
    title: "Los Príncipes de los Noldor",
    description: "Finwë tiene tres hijos de temperamentos distintos: Fëanor de Míriel (ardiente y genial), Fingolfin de Indis (fuerte y valiente), y Finarfin también de Indis (hermoso y sabio). Cada uno encabezará una línea que tendrá papeles cruciales en la historia futura. Finarfin se casa con Eärwen hija de Olwë, uniendo Noldor y Teleri.",
    details: "En el Capítulo 6, se establece la genealogía de los príncipes Noldor. Finwë, Rey de los Noldor en Tirion, tuvo en total tres hijos. Su primera esposa fue Míriel Serindë, una Elfa de suprema habilidad en tejido y bordado. El parto de Fëanor consumió toda la vitalidad espiritual de Míriel; su espíritu partió a las Casas de Mandos. Fëanor fue el mayor de los Noldor en poder e ingenio, su espíritu ardía como fuego. Finwë se volvió a casar con Indis de los Vanyar. De esta segunda unión nacieron dos hijos: Fingolfin, el más fuerte, firme y valiente de los hijos de Finwë; y Finarfin, el más hermoso de corazón y el más sabio. Las tres líneas de Finwë encarnan diferentes virtudes: la genialidad ardiente de Fëanor, la fuerza valerosa de Fingolfin, la belleza sabia de Finarfin. Cada uno lidera hijos que heredan sus cualidades. Fëanor tuvo siete hijos (Maedhros, Maglor, Celegorm, Caranthir, Curufin, Amrod, Amras) que lo acompañarán en sus empresas futuras, vinculados por su juramento. Fingolfin tuvo tres hijos: Fingon el valiente, Turgon el sabio (futuro fundador de Gondolin), y Aredhel la guerrera. Finarfin tuvo varios hijos, incluyendo a Galadriel, la más hermosa de todos, con cabellos como si hubiera atrapado el resplandor de Laurelin. La unión de Finarfin con Eärwen, hija de Olwë de los Teleri, fue de gran importancia, uniendo las casas Noldor y Teleri pero también sembrando lealtades divididas que tendrían consecuencias futuras.",
    protagonists: ["finwe", "feanor", "fingolfin", "finarfin"],
    antagonists: [],
    keyCharacters: ["miriel", "indis", "earwen", "galadriel", "fingon", "turgon", "aredhel"],
    relatedLocations: ["tirion", "valinor"],
    relatedEvents: ["t6g"],
    themes: ["Linaje", "Carácter y Destino", "Semilla del Conflicto", "Unión de Casas"],
    needToKnow: [
      "Finwë tuvo tres hijos de dos esposas: Fëanor (de Míriel), Fingolfin y Finarfin (de Indis la Vanya)",
      "Fëanor: ardiente y poderoso. Fingolfin: fuerte y valiente. Finarfin: hermoso y sabio",
      "Finarfin se casó con Eärwen hija de Olwë, uniendo las casas Noldor y Teleri"
    ],
    afterReadingShouldKnow: [
      "Las tres líneas de Finwë tendrán destinos muy diferentes y su rivalidad será motor del conflicto Noldor",
      "Los siete hijos de Fëanor serán figuras centrales en la tragedia de los Silmarils",
      "Galadriel (hija de Finarfin) es la única mujer nombrada con cabellos como el resplandor de Laurelin, presagiando su importancia futura"
    ],
    startChapter: 6,
    endChapter: 6
  }
];

export const themesData: Theme[] = [
  {
    id: "incomplete-victory",
    name: "Victoria Incompleta",
    analysis: "Los Valar derrotaron a Melkor en la Batalla de los Poderes, pero no descubrieron completamente ni Utumno ni Angband. Sauron escapó. Cosas malignas se dispersaron por la Tierra Media. Este patrón se repite a lo largo del Silmarillion: cada victoria contra el mal deja cabos sueltos que alimentan desastres futuros. La incompletud es tan importante como la victoria misma.",
    relatedGreatTales: ["despertar-batalla-poderes"],
    relatedCharacters: ["melkor", "sauron", "tulkas", "manwe"]
  },
  {
    id: "division-of-peoples",
    name: "La División de los Pueblos",
    analysis: "Los Elfos se fracturan en cada etapa: Eldar vs. Avari, Vanyar/Noldor/Teleri, Nandor vs. Teleri. Cada separación responde a una elección (luz vs. libertad, marcha vs. quedarse) y produce consecuencias irreversibles. La división es un tema constante: modelará conflictos futuros, diferentes destinos, y explicará la variedad de pueblos élficos. Cada elección ramifica la historia.",
    relatedGreatTales: ["gran-marcha-division"],
    relatedCharacters: ["ingwe", "finwe", "elwe-singollo", "olwe"]
  },
  {
    id: "questionable-decision-valar",
    name: "La Decisión Cuestionable de los Valar",
    analysis: "Ulmo deseaba que los Elfos fueran libres en la Tierra Media. La mayoría de los Valar los convocó a Valinor. Mandos advirtió que 'esta decisión fue causa de muchos daños'. El paternalismo de los Valar, aunque bien intencionado, generará resentimiento futuro, especialmente entre los Noldor que se sentirán atados a Valinor. Las intenciones nobles pueden producir consecuencias negativas.",
    relatedGreatTales: ["despertar-batalla-poderes"],
    relatedCharacters: ["ulmo", "manwe", "mandos"]
  },
  {
    id: "humility-vs-pride-aule-melkor",
    name: "Humildad vs. Soberbia (Aulë vs. Melkor)",
    analysis: "Aulë y Melkor comparten el deseo de crear, pero sus motivaciones y reacciones son opuestas. Aulë crea por amor, por impaciencia por tener discípulos a los que enseñar. Cuando Ilúvatar lo confronta, se arrepiente con humildad sincera, llora y ofrece destruir su obra. Melkor, por el contrario, crea por deseo de dominio y se rebela contra Ilúvatar. La humildad de Aulë transforma su transgresión en bendición; la soberbia de Melkor lo condena eternamente.",
    relatedGreatTales: ["creation-dwarves-ents"],
    relatedCharacters: ["aule", "melkor", "iluvatar"]
  },
  {
    id: "protection-of-nature",
    name: "La Protección de la Naturaleza",
    analysis: "Yavanna teme que los Enanos y los Hijos de Ilúvatar destruyan sus árboles y criaturas. Su preocupación genuina por la naturaleza da origen a los Pastores de Árboles (Ents) y las Águilas de los Señores del Occidente. Este tema anticipa conflictos futuros entre civilización (Enanos, Hombres trabajando la tierra) y la naturaleza (Ents, criaturas salvajes). La naturaleza no es pasiva sino que tiene guardianes activos que la protegen.",
    relatedGreatTales: ["creation-dwarves-ents"],
    relatedCharacters: ["yavanna", "manwe"]
  },
  {
    id: "all-in-the-song",
    name: "Todo estaba en la Canción",
    analysis: "Los Ents y las Águilas no fueron añadidos al mundo como una reparación posterior; ya estaban presentes en la Música original de Ilúvatar. Manwë recibe una 'visión renovada' de la Canción, lo que significa que Ilúvatar recuerda a los Valar algo que siempre estuvo allí. Nada escapa a Su plan, ni siquiera el deseo de Aulë de crear o el temor de Yavanna. Incluso los errores de los Ainur son incorporados al propósito divino desde el principio.",
    relatedGreatTales: ["creation-dwarves-ents"],
    relatedCharacters: ["iluvatar", "manwe", "yavanna"]
  },
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
