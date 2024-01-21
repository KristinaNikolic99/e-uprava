-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: e_vrtic
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dete`
--

DROP TABLE IF EXISTS dete;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE dete (
  dete_id bigint NOT NULL AUTO_INCREMENT,
  datum_rodjenja date NOT NULL,
  ime varchar(255) NOT NULL,
  jmbg varchar(255) NOT NULL,
  pol enum('Musko','Zensko') NOT NULL,
  prezime varchar(255) NOT NULL,
  `status` enum('Prihvacen','Odbijen','Cekanje') NOT NULL,
  korisnik_id bigint DEFAULT NULL,
  PRIMARY KEY (dete_id),
  KEY FKhd5y83j8ddb8w4ge6nqfayuoa (korisnik_id),
  CONSTRAINT FKhd5y83j8ddb8w4ge6nqfayuoa FOREIGN KEY (korisnik_id) REFERENCES korisnik (korisnik_id)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dete`
--

LOCK TABLES dete WRITE;
/*!40000 ALTER TABLE dete DISABLE KEYS */;
INSERT INTO dete (dete_id, datum_rodjenja, ime, jmbg, pol, prezime, status, korisnik_id) VALUES (1,'2024-01-02','Mirko','12353464357','Musko','Mirkic','Cekanje',4),(2,'2024-01-02','Mirko','12353464357','Musko','Mirkic','Cekanje',4),(3,'2024-01-04','Lale','235434654356','Musko','Lalic','Cekanje',4),(4,'2004-01-19','Maras','13409878','Zensko','Maric','Cekanje',4),(5,'2024-01-22','dsaddsa','dsadsa','Zensko','dasdasd','Cekanje',4),(6,'2024-01-17','dsadadsadas','dsadasddsad','Zensko','dsadasddasd','Cekanje',4),(7,'2024-01-03','Kristina','1029384756','Zensko','Kristy','Cekanje',4);
/*!40000 ALTER TABLE dete ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS korisnik;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE korisnik (
  korisnik_id bigint NOT NULL AUTO_INCREMENT,
  drzava varchar(255) NOT NULL,
  grad varchar(255) NOT NULL,
  ime varchar(255) NOT NULL,
  jmbg varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  prezime varchar(255) NOT NULL,
  tip_korisnika enum('Admin','Roditelj') NOT NULL,
  username varchar(255) NOT NULL,
  PRIMARY KEY (korisnik_id),
  UNIQUE KEY UK_d7tnrllt9olfunnurk0gb24k9 (username)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnik`
--

LOCK TABLES korisnik WRITE;
/*!40000 ALTER TABLE korisnik DISABLE KEYS */;
INSERT INTO korisnik (korisnik_id, drzava, grad, ime, jmbg, password, prezime, tip_korisnika, username) VALUES (1,'Srbija','Novi Sad','Filip','1876238763','$2a$10$DmFwhIwUF1IqEDTO/e7I7e/IZqsVn9kbadyrzOx/o4IPyGgwoJ9/i','Nikolic','Roditelj','filipN'),(4,'Srbija','Novi Sad','Kristina','1876238763','$2a$10$vt2Xf78xHEoFkdrEIuehremwLh24Nc9vVfqCHoFvbMLyQX02.nb1m','Nikolic','Roditelj','krisN'),(5,'Albania','Bashkia Finiq','Kika','342342','$2a$10$R6FMrVyNwdkSZztF3PVhJ.B2zRYp89d3lJafuQfR7emUFYyDDiWyC','Kikic','Roditelj','kika'),(6,'Afghanistan','Farah','gg','gg','$2a$10$O5SHM/vyVbBEdruU99w0h.ZJVs5CU40pRBKELAD3aT31F.hz3vvfO','gg','Roditelj','gg'),(7,'Afghanistan','Farah','fffd','fdf','$2a$10$0b7yt436z78XTHGpvZta8.UrH3l4Zo/XrXszzWxso3q46JvCilv0C','ffd','Roditelj','fdfd');
/*!40000 ALTER TABLE korisnik ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vrtic`
--

DROP TABLE IF EXISTS vrtic;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE vrtic (
  vrtic_id bigint NOT NULL AUTO_INCREMENT,
  naziv varchar(255) NOT NULL,
  opis varchar(255) NOT NULL,
  slika varchar(255) NOT NULL,
  grad varchar(255) NOT NULL,
  PRIMARY KEY (vrtic_id)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vrtic`
--

LOCK TABLES vrtic WRITE;
/*!40000 ALTER TABLE vrtic DISABLE KEYS */;
INSERT INTO vrtic (vrtic_id, naziv, opis, slika, grad) VALUES (1,'Predškolska ustanova \"Čika Jova Zmaj\"','Ustanova je osnovana 1966. Ima 30 objekata, 4986 upisane dece i 759 zaposlenih radnika. Dopunski oblici rada sa decom su: učenje engleskog jezika i ples.','vrtic1.jpg','Beograd'),(2,'Predškolska ustanova \"Rakovica\"','Odluka o osnivanju obdaništa u Rakovici doneta je 24 oktobra 1945. godine kada je otvoreno „Obdanište broj 20“. ','vrtic2.jpg','Beograd'),(3,'Predškolska ustanova \"Poletarac\"','Osnovana je 1981. godine i jedna je od popularnijih ustanova za dečije obrazovanje u ovom delu Srbije.','vrtic3.jpg','Beograd'),(4,'Predškolska ustanova \"Zvezdara\"','PU Zvezdara ima ukupno 28 objekata. U ovoj ustanovi zaposleno je 918 radnika. Obuhvata oko 5000 dece, ima 291 i po grupa.PU Zvezdara ima ukupno 28 objekata. U ovoj ustanovi zaposleno je 918 radnika. Obuhvata oko 5000 dece, ima 291 i po grupa.','vrtic4.jpg','Beograd'),(5,'Predškolska ustanova \"Panda\"','PU Panda objekat je u skladu sa svim savremenim standardima kvaliteta rada ustanove. Multifunkcionalni prostor površine 300 m2 je adaptiran i prilagodjen deci predškolskog uzrasta I u potpunosti zadovoljava potrebe naših polaznika.','vrtic5.jpg','Beograd'),(6,'Predškolska ustanova \"Kung-fu Panda\"','Kung Fu Panda vrtići za sve one koji žele najbolje na 6 lokacija: Krnjača, Metro, Kotež, Borča, Centar 3 i Obrenovac. Engleski, ples, osiguranje dece, logoped i još mnogo toga sve uključeno u cenu vrtića.','vrtic6.jpg','Beograd'),(7,'Predškolska ustanova \"Zvončica\"','Osnovni cilj  rada PU Zvončica je podsticanje stvaralaštva i učenje kroz igru, kao i socijalno prilagođavanje dece, sa kojima radi visoko kvalifikovano osoblje.','vrtic7.jpg','Beograd'),(8,'Predškolska ustanova \"Plavi zvončići\"','Akreditovana predškolska ustanova Plavi zvončići je prilagođena za boravak dece od 12 meseci do predškolskog uzrasta. Nalazimo se u naselju Medaković, na teritoriji opštine Zvezdara, u mirnoj ulici, skrivenoj od gradske vreve.','vrtic8.jpg','Beograd'),(9,'Predškolska ustanova \"Zvezdice\"','Verifikovana privatna predškolska ustanova koja vodi brigu o deci uzrasta od 1-7 godine kroz JASLENU, MEŠOVITU I PREDŠKOLSKU GRUPU. Nalazimo se na tri lokacije.','vrtic9.jpg','Beograd'),(10,'Predškolska ustanova \"Guliver\"','„Guliver“ je svoj rad započeo kao kreativna radionica 2005. godine.','vrtic10.jpg','Beograd'),(11,'Predškolska ustanova \"Planinska kućica\"','Planinska kućica je porodičan posao. Vrtić je trenutno malog kapaciteta, od dvadesetpetoro dece. oravak u prirodi sa decom je naša svakodnevnica. ','vrtic11.jpg','Beograd'),(12,'Predškolska ustanova \"Srećica\"','U našoj ustanovi radi kreativan, profesionalan, iskusan i posvećen kadar. Vaspitno-obrazovni rad odvija se u manjim grupama, pa je svakom detetu omogućeno da se funkcionalno razvija, kao i da uživa u druženju sa vršnjacima.','vrtic12.jpg','Beograd'),(13,'Predškolska ustanova \"Magija\"','PU Magija je privatna predškolska ustanova, akreditovana od strane Ministarstva prosvete. Naš prostor je ispunjen smehom, vlada prijatna i topla atmosfera, zato dođite da uživamo zajedno u odrastanju!','vrtic13.jpg','Beograd'),(14,'Predškolska ustanova \"Dečije carstvo\"','Mi smo Predškolska ustanova “Dečije carstvo”, osnovana 2019. godine i verifikovana od strane Ministarstva prosvete, nauke i tehnološkog razvoja. Zato u naš vrtić možete upisati dete uz korišćenje subvencije Grada Beograda.','vrtic14.jpg','Beograd'),(15,'Predškolska ustanova \"Bambi\"','Predškolska Ustanova “Bambi” je  osnovana 2015. godine. Svojim stručnim kadrom, veselim ambijentom i ponuđenim kvalitetom rada, stekli smo poverenje dece i roditelja.','vrtic15.jpg','Beograd'),(16,'Predškolska ustanova \"Lunja i maza\"','Prijatna atmosfera i stručni vaspitači vode brigu o Vašem detetu, doprinoseći vaspitanju i obrazovanju. Savremeno opremljene radne sobe i prostrano dvorište obećavaju prijatan boravak i odlične uslove za psihofizički napredak deteta.','vrtic16.jpg','Novi Sad'),(17,'Predškolska ustanova \"Kermit\"','Vrtić Kermit je pravo dečije carstvo, puno zelenila i prostora za igru koje se nalazi u urbanom delu Novog Sada. Za učenje i nezaboravnu igru mališana obezbeđen je veliki broj edukativnih materijala i igračaka: alati, lutke, slagalice, kockice… ','vrtic17.jpg','Novi Sad'),(18,'Predškolska ustanova \"Radosno detinjstvo\"','Sedište ove ustanove nalazi se u Novom Sadu u ulici Pavla Simića broj 9. Ova ustanova obuhvata vrtiće na teritoriji grada Novog Sada i opštine Sremski Karlovci.','vrtic18.jpg','Novi Sad'),(19,'Predškolska ustanova \"Playroom\"','Predškolska ustanova „PU PLAYROOM“ nalazi u Ulici Kraljevića Marka br. 32 u stambeno-poslovnom kompleksu „Kraljev park“ u Novom Sadu. U projektovanju i izgradnji ustanove učestvovao je tim stručnih lica i velikih profesionalaca. ','vrtic19.jpg','Novi Sad'),(20,'Predškolska ustanova \"Delfin\"','U centru Novog Sada ljubazno smo otvorili vrata privatnog vrtića “Delfin”, akreditovanog i licenciranog od strane Pokrajinskog sekretarijata za obrazovanje, propise, upravu i nacionalne manjine.','vrtic20.jpg','Novi Sad'),(21,'Predškolska ustanova \"Dream Land\"','Program obrazovanja PU DreamLand je baziran na konceptu bilingvalnog učenja, tj. na uspostavljanju kvalitetnog i konkurentnog modela obrazovanja.','vrtic21.jpg','Novi Sad'),(22,'Predškolska ustanova \"Duga\"','Program rada vođen osnovnim idejama integrisanog učenja svake godine se kreira,','vrtic22.jpg','Novi Sad'),(23,'Predškolska ustanova \"Mazza\"',' PU svoju delatnost sa decom i roditeljima realizuje u četri objekta u Nišu obuhvatajuci decu od 6 meseci do polaska u školu.','vrtic23.jpg','Niš'),(24,'Predškolska ustanova \"Pčelica\"','Ustanova trenutno ima 28 vrtića. Deca sa vaspitačima obilaze biblioteku, pozorišta, muzeje i upoznavaju funkcionisanje lokalne samouprave.','vrtic24.jpg','Niš'),(25,'Predškolska ustanova \"Poletarac\"','Predškolska ustanova „Poletarac“ konstantno unapređuje program rada sa predškolskom decom, jer taj uzrast predstavlja osnov daljeg obrazovanja deteta, a predškolski period jedinstven i neponovljiv period odrastanja svakog pojedinca.','vrtic25.jpg','Niš'),(26,'Predškolska ustanova \"Dečiji kutak\"','Predškolska ustanova DEČIJI KUTAK – Niš je verifikovana predškolska ustanova od strane Ministarstva prosvete i nudi sve pogodnosti ugodnog odrastanja i obrazovanja dece.','vrtic26.jpg','Niš'),(27,'Predškolska ustanova \"Pionir\"','Predškolska ustanova Pionir je osnovana 1948. godine u Jagodini. Osnovna delatnost je dnevna briga o deci. Poslujemo na prostoru Jagodine i okoline.','vrtic27.jpg','Jagodina'),(28,'Predškolska ustanova \"Kids Club\"','U okviru obrazovnog sistema “Crnjanski” nalazi se i Predškolska ustanova “Kids Club” čiji se predškolski program realizuje u okviru Nacionalnog i Cambridge programa.','vrtic28.jpg','Jagodina'),(29,'Predškolska ustanova \"Đurđevdan\"','Na području grada Kregujevca nalazi se predškolska ustanova Đurđevdan koja se bavi negom, vaspitanjem i obrazovanjem dece do 7 godina.','vrtic29.jpg','Kragujevac'),(30,'Predškolska ustanova \"Nada Naumović\"','PU \"Nada Naumović\" u Kragujevcu ima devet vrtića, oko 320 zaposlenih i preko 2100 dece. Kao Ustanova postojimo 73 godine.','vrtic30.jpg','Kragujevac'),(31,'Predškolska ustanova \"Iskrica\"','Mi smo Predškolska ustanova „Iskrica“.  U vrtiću  koji ima 3 sprata  odgovorno vodimo računa i sprovodimo program vaspitno-obrazovnog rada sa decom uzrasta od 1 godine do polaska u školu. ','vrtic31.jpg','Kragujevac'),(32,'Predškolska ustanova \"Akvica\"','Mi smo predškolska ustanova koja raste zajedno sa decom, prati njihov razvoj, potrebe, inspiriše, podstiče na istraživanje i komunikaciju.','vrtic32.jpg','Kragujevac'),(33,'Predškolska ustanova \"Beli anđeo\"','PU „Beli Anđeo“ je privatna predškolska ustanova verifikovana od strane Ministarstva prosvete, nauke i tehnološkog razvoja.','vrtic33.jpg','Kragujevac'),(34,'Predškolska ustanova \"Olga Jovičić-Rita\"','Mi smo predškolska ustanova Olga Jovičić Rita Kraljevo i kontinuirano se trudimo da stvaramo što bolje uslove, za što srećnije detinjstvo.','vrtic34.jpg','Kraljevo'),(35,'Predškolska ustanova \"Kids house\"','Vrtić ”KIDS HOUSE” je jedinstven i kreativan prostor za decu uzrasta od 12 meseci do 7 godina. Prijatno mesto gde će se Vaše dete osećati sigurno i prihvaćeno.','vrtic35.jpg','Kraljevo'),(36,'Predškolska ustanova \"Milica Nožica\"','Ova predškolska ustanova obezbeđuje detetu sredinu za učenje i razvoj koja će zadovoljiti dečije potrebe i pružiti mu priliku da ostvari svoja prava na vaspitanje, obrazovanje, zdravstvenu i psihološku zaštitu.','vrtic36.jpg','Valjevo'),(37,'Predškolska ustanova \"Naše dete\"','Osnovna delatnost ove ustanove je ostvarivanje adekvatnog obrazovanja deteta uz najbolju negu, socijalnu i zdravstvenu zaštitu.','vrtic37.jpg','Vranje'),(38,'Predškolska ustanova \"Naša radost\"','Predškolska ustanova \"Naša radost\" Subotica je javna ustanova čiji je osnivač Grad Subotica. Nudi program vaspitno-obrazovnog rada s decom uzrasta od šest meseci do polaska u školu.','vrtic38.jpg','Subotica'),(39,'Predškolska ustanova \"Čika Jova Zmaj\"','Predškolska ustanova \"Čika Jova Zmaj\" u svom sastavu obuhvata sve vrtiće na teritoriji Pirota i u okolnim selima.','vrtic39.jpg','Pirot'),(40,'Predškolska ustanova \"Poletarac\"','Vaspitno – obrazovni rad je osnovna delatnost Ustanove koji se realizuje i razvija kao realni program,zasnivajući ga na koncepciji Osnova programa predškolskog vaspitanja i obrazovanja, simbolički nazvanoj „Godine uzleta“.','vrtic40.jpg','Ruma'),(41,'Predškolska ustanova \"Boško Buha\"','Osnovna delatnost ustanove je vasptanje i obrazovanje dece predškolskog uzrasta, u skladu sa Osnovama programa predškolskog vaspitanja i obrazovanja.','vrtic41.jpg','Inđija');
/*!40000 ALTER TABLE vrtic ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-20 19:52:03
