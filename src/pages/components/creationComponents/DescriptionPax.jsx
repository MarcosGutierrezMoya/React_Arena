

export default function Description(race) {

    let text = "";

    switch (race.race) {
        case "plains":
            text = "A lo largo de los años los humanos han preferido vivir en las llanuras, pues podían ver cualquier cosa que se les acercase. Fuertes de tanto arar el campo y acostumbrados a las plagas, enfermedades y epidemias han conseguido extenderse por mucho territorio y ahora son los que tienen la mayor población y, por lo tanto, el mayor ejercito";
            break;
        case "north":
            text = "Siguiendo las historias de una raza ya extinta, algunos humanos llegaron al norte, la zona mas fría del planeta, y se asentaron en busca de los míticas artefactos. Pasaron los años y no consiguieron descubrir nada, pero ya se habían acostumbrado a la vida en ese inhóspito lugar. Gracias a ello tienen una buena resistencia al frio y su piel es mas dura de lo normal";
            break;
        case "mountain":
            text = "Algunas personas no estaban contentas con el actual gobernador e intentaron iniciar una revolución, claramente fallida. Son un pueblo recluido que se ha ido especializando en la magia, para poder sobrevivir en el lugar al cual habían ido a parar";
            break;
        case "forest":
            text = "Las personas que no querían depender de un rey se fueron a los bosques a vivir en paz y armonía con la naturaleza. Allí se encontraron con los elfos, los cuales no les dieron una calurosa bienvenida, pero con el paso del tiempo y al ver que no han había casi ningún conflicto, empezaron a interactuar. Compartieron con los elfos sus conocimientos en el uso de las armas, y ellos les dieron un mayor entendimiento de la magia";
            break;
        case "grove":
            text = "Dicen ser los primeros pobladores de la tierra, y ciertamente son una de las razas mas antiguas, pero nadie sabe porque no dejan que nadie perturbe su hogar. Tienen una gran capacidad de supervivencia y han conseguido dominar algunos de los secretos de la curación";
            break;
        case "dark":
            text = "Un elfo muy sabio descubrió un terrible secreto de la curación, la posibilidad de revivir. A partir de ese día mas elfos se le han ido uniendo en la búsqueda de la resurrección perfecta, pues aunque haya vivido mas de 2.000.000 años, apenas le queda un soplo de vida. No hay que recordar que el jugar con los mueros esta prohibido y los experimentos con personas también, así que se les exilio y nadie sabe donde están viviendo. Renegados que lo único que buscan es la inmortalidad, se han sumergido en las profundidades de la magia negra";
            break;
        case "niveous":
            text = "Siguiendo el rastro de una extraña magia se adentraron en las profundidades heladas del norte, cuando encontraron a los enanos viviendo allí se sorprendieron y empezaron a espiarles hasta que descubrieron el origen de la extraña magia. Tienen un gran aguante al frio pero es inferior que el de los humanos ya que han estado utilizando la magia para calentarse";
            break;
        case "ancients":
            text = "Al mantener las tradiciones más antiguas estos elfos han desarrollado con el paso de los años una especie de magia innata, pero su cuerpo aún no está lo suficientemente desarrollado para aguantar el flujo constante de la magia y eso ha hecho que vivan menos que sus hermanos, pero para poder sobrevivir se han estado entrenando en el combate";
            break;
        case "rockskin":
            text = "Recios y de costumbres, estos enanos han defendido las montañas de los invasores y de las criaturas que las moran, no mantienen el contacto con nadie excepto, de vez en cuando, con los humanos que viven encima. Después de varios años han aprendido a moldear las rocas mas duras y las han utilizado para sus armas y armaduras";
            break;
        case "snowy":
            text = "Después de una de las guerras civiles, los perdedores tuvieron que abandonar las montañas y anduvieron hasta que se encontraron con el hielo. Al ver que debajo no hacia tanto frio como arriba, se asentaron allí. Unos años mas tarde descubrieron algo que no conocían, una piedra brillante, intentaron fundirla y tras varios accidentes se dieron cuenta de sus propiedades mágicas";
            break;
        case "sand":
            text = "Una patrulla expedicionaria en busca de montañas descubrió un lugar completamente opuesto al que buscaban, pero no se dieron por vencidos, y después de algunas muertes innecesarias decidieron volver. Durante el viaje iban bien provistos de todo lo necesario, pero no conocían los peligros de esa nueva tierra y al cabo de unos días cayeron en las arenas movedizas, con la suerte de que fueron a parar a una antigua ciudad de una cultura desconocida";
            break;
        case "insignes":
            text = "Un grupo de 12 personas decidieron ir a los bosques y consultar con los elfos algunas dudas, pues su curiosidad podía más que su orgullo. Allí vieron un gran árbol y con el consentimiento de los elfos se instalaron dentro de el. Crearon una librería ya que deseaban aprender sobre la ciencia por encima de la metalurgia y la excavación. Al cabo de un año se les unieron otros 27 enanos de diferentes culturas y después de tres años consiguieron dominar la ciencia. Al final eran un pequeño pueblo de enanos eruditos que prosperaba gracias a sus descubrimientos científicos";
            break;
        case "depths":
            text = "Tras haber aguantado tanto tiempo la presión de las fosas abisales su cuerpo se ha endurecido y aunque nunca han entrado en conflicto han perfeccionado la magia psicológica, dado que así pueden hablar con sus vecinos los animales acuáticos. Por desgracia para ellos eso les abrió un mundo completamente nuevo, pues descubrieron especies que no conocían con una psique inmensa. Entraron en guerra con esas especies hasta casi extinguirse, consiguieron una tregua y ahora son mucho mas fuertes";
            break;
        case "coasts":
            text = "Los más curiosos ascendieron a la superficie pero aun así hasta ahora no tuvieron ningún contacto con nadie. Son de los más listos de su especie y con solo observar, a lo que ellos consideran subespecies, aprendieron a utilizar sus herramientas incluyendo las armas. Han llegado a tal punto de entendimiento que han creado su propia arma capaz de partir escudos con el entrenamiento adecuado. Pero su más increíble don es el de la curiosidad, pues tienen una comprensión de lo que les rodea, increíble";
            break;
        case "river":
            text = "Los que no consiguieron aguantar en las profundidades se tuvieron que ir a aguas más tranquilas. En las guerras que hubo en la superficie nadie sabe a ciencia cierta que sucedió, pero hay rumores de extraños seres envueltos en mantos que acababan con ejércitos enteros. Así fue como poco a poco fueron perfeccionando su entrenamiento físico hasta alcanzar un poder increíble. Aun ahora han creado una arena de combate y han iniciado un torneo para ver quien es el más fuerte de todos, en los pocos años que lleva este torneo, no han perdido ni una sola vez";
            break;
        case "volcanics":
            text = "Hubo una vez un sabio erudito que consiguió controlar el calor y con eso creó vapor, nadie vio su utilidad, y el erudito cansado de las constantes burlas se fue a la superficie donde descubrió un calor aún más ardiente, el fuego. Después de dominarlo volvió a su casa con esa nueva sabiduría pero descubrió que no podía hacer fuego debajo del agua, y las burlas surgieron de nuevo. Volvió a la superficie odiando a su gente y fue cuando descubrió una montaña llena de fuego líquido, por suerte ese odio acumulado fue lo necesario para conquistar aquel calor. Cuando volvió y les enseño aquel poder todos le consideraron una especie de dios y muchos le siguieron hasta el que sería su nuevo hogar";
            break;
        case "losts":
            text = "No se sabe mucho de ellos, pero dicen ser los precursores, al parecer fueron ellos los que crearon la gran mayoría de armas que utilizamos hoy en día. Nadie sabe de donde vienen o quien es su líder, pero de vez en cuando se ve a uno o dos de ellos viajando sin aparente rumbo. Nunca se meten en problemas pero cuando los hay seguro que ves a uno por allí";
            break;
        case "unknowns":
            text = "No son tan imponentes como los perdidos, pero uno de ellos compitió en un torneo de los marinos y venció a todos casi sin ningún rasguño y, aunque perdió contra el campeón, al final del combate dijo que solo era un aprendiz. Viven en un edificio enorme de metal al que llaman nave, que al parecer puede volar. Son claramente superiores en físico pero aunque el edificio vuele no parecen tener un alto conocimiento de la magia";
            break;
        case "blazers":
            text = "De repente aparecen y al instante desaparecen, no hablan a menos que sea completamente necesario. Son científicamente muy avanzados y controlan una magia muy poderosa y desconocida que les permite moverse de un sitio a otro rápidamente. Parece que están buscando algo pero nunca han dicho una palabra, aunque algunos creen que es una cura pues se les a visto a menudo por los bosques";
            break;
        case "perfidious":
            text = "Aunque no esta confirmado, se cree que son un experimento fallido de los elfos oscuros en su afán por revivir los restos que había en unas ruinas muy antiguas. Claro esta que no han dicho nada al respecto, pero si ves a uno por la calle, será mejor que cambies de dirección. Son muy reservados y orgullosos pero también leales y honorables, la mayoría son solitarios cosa que no parece ser ningún problema a la hora de defender su honor, aunque sea contra 10. Han mantenido las grandes habilidades que tenían antes y han ganado una increíble resistencia a enfermedades";
            break;
        default:
            break;
    }

    return (
        <p className="description" >{text}</p>
    )
}