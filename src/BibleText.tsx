
const verseOfTheDay = () => {
  const index = (127 * dayOfYear()) % verses.length
  return verses[index]
}

const dayOfYear = () => {
  const yearStart = new Date(new Date().getFullYear(), 0, 0).getTime()
  return Math.floor((new Date().getTime() - yearStart) / (1000*60*60*24))
}

const verses = [  
  //7.10.2020
  'Hän paljastaa syvät ja salatut asiat',
  'Joka ottaa vastaan sen, jonka minä lähetän, ottaa vastaan minut',
  'Hänen laupeutensa pysyy polvesta polveen häntä pelkääville',
  'Herra on kuningas aina ja ikuisesti',
  'Sinä unohdit Jumalan, joka antoi sinulle elämän',
  'Jumala pelasti hänet kaikista ahdistuksista',
  'Riisu kengät jalastasi, sillä paikka jossa seisot, on pyhää maata',
  'Eikö minun käteni ole tehnyt tätä kaikkea',
  'Sinä kudoit minut kokoon äitini kohdussa',
  'Samalla sanalla on nykyiset taivaat ja nykyinen maa säästetty tulelle',
  'Jeesuksen veri puhdistaa meidät kaikesta synnistä',
  'Minä olen tullut tuomaan elämän ja yltäkylläisyyden',
  'Sillä ilman minua te että voi mitään tehdä',
  'Hänen käskynsä eivät ole raskaat',
  'Jumalan sana on elävä ja voimallinen',
  'Hän on lähettänyt minut julistamaan vangituille vapautusta',
  'Hän johdattaa meidät kuoleman yli',
  'Me mietiskelemme armoasi sinun temppelissäsi',
  'Sinä rakastat vanhurskautta ja vihaat laittomuuta',
  'Hyvä paimen antaa henkensä lammasten edestä'


  /*
  'Parempi on luottaa Herraan, kuin turvata ihmisiin',
  'Jumalan armolahja on iankaikkinen elämä Kristuksessa Jeesuksessa',
  'Autuaita ne, jotka uskovat, vaikka eivät näe',
  'Alussa Jumala loi taivaan ja maan',
  'Jumalani, monet ovat sinun tekemäsi ihmeet',
  'Totuuden Henki johdattaa teidät kaikkeen totuuteen',
  'Tee askeleeni vakaiksi sanallasi, ettei mikään vääryys hallitsisi minua',
  'Odotamme hengessä uskon kautta sitä vanhurskautta, jota toivomme',
  'Minulle oli hyväksi, että minut nöyryytettiin, näin opin sinun lakisi',
  'Etsikää ennen kaikkea Jumalan valtakuntaa ja hänen vanhurskauttaan',
  'Ihmisen Poika on tullut etsimään ja pelastamaan sitä, mikä oli kadoksissa',
  'Tehkää siis parannus ja kääntykää, että syntinne pyyhittäisiin pois',
  'Jumala on antanut pakanoillekin mielenmuutkosen, joka koituu elämäksi',
  'Tulette tuntemaan totuuden ja totuus tekee teistä vapaita',
  'Olen kätkenyt sanasi sydämeeni, etten tekisi syntiä sinua vastaan',
  'Herran pelko on pahan vihaamista',
  'Sinä Jerusalem olet rakennettu kaupungiksi, joka on täysin yhtenäinen',
  'Suuret ovat Herran teot',
  'Sillä sinun luonasi on elämän lähde, sinun valossasi me näemme valon',
  'Sinun sanasi on jalkojeni lamppu ja valo minun polullani',
  'Kuka tämä on, joka antaa syntejäkin anteeksi?',*/


  /* 'Mikä on ihmisille mahdotonta, se on mahdollista Jumalalle',
  'Apu minulle tulee Herralta, taivaan ja maan luojalta',
  'Jos Herra ei taloa rakenna, turhaan sen rakentajat näkevät vaivaa',
  'Herra rakentaa Jerusalemin, hän kokoaa Israelin karkotetut',
  'Hän parantaa ne joilla on särkynyt sydän ja sitoo heidän haavansa',
  'Vanhurskaus kansan korottaa, mutta synti on kasojen häpeä',
  'Herran nimi on vahva torni',
  'Muista luojaa nuoruudessasi',
  'Jumalan mielen mukainen murhe johtaa parannukseen',
  'Tämä aarre on meillä saviastioissa',
  '"Kenen te sanotte minun olevan?" Jeesus kysyi',
  'Joka uskoo ja kastetaan, se pelastuu',
  'Niin kuin oli Nooan päivinä, niin on oleva myös Ihmisen Pojan päivinä',
  'Jumalan valtakunta on vanhurskautta, rauhaa ja iloa Pyhässä Hengessä',
  'Te saatte voiman, kun Pyhä Henki tulee teidän päällenne',
  'Rakastakaa toisianne, niin kuin minä olen rakastanut teitä',
  '...eikä kukaan ota teiltä pois iloanne',
  'Maailmassa teillä on ahdistus, mutta olkaa rohkeat',
  //UUDET 18.8.
  'Sydämen kyllyydestä suu puhuu'*/

]

export default verseOfTheDay