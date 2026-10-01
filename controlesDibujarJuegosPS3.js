import { crearElemento, eliminarTodosLosChildren, obtenerElementoHTML } from "./funcionesHTML.js";

let arrayLetraAJuegosPS3 = [
                     ["recursos/letraA/aceCombatAssaultHorizon.jpg", "Ace Combat - Assault Horizon", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, sangre, Temas levemente sugerentes, Lenguaje, Referencias al alcohol <br> <b>En español</b> <br> <b>Peso:</b> 7,04 GB"],
                     ["recursos/letraA/ATnameless.webp", "Adventure Time - Secret of the Nameless Kingdom", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia de dibujos animados, travesuras cómicas<br> <b>En español</b> <br> <b>Peso:</b> 578 MB"],
                     ["recursos/letraA/ATdungeon.webp", "Adventure Time - Explore the dungeon because I don't know", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia de dibujos animados, travesuras cómicas<br> <b>En español</b> <br> <b>Peso:</b> 1,08 GB"],
                     ["recursos/letraA/ATinvestigations.webp", "Adventure Time - Finn & Jake Investigations", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia de dibujos animados, travesuras cómicas<br> <b>En español</b> <br> <b>Peso:</b> 1,47 GB"],
                     ["recursos/letraA/tintin.webp", "Adventures of Tintin", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia de dibujos animados<br> <b>En español</b> <br> <b>Peso:</b> 7,30 GB"],
                     ["recursos/letraA/airConflictsPacific.jpg", "Air Conflicts - Pacific Carriers", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Sangre y lenguaje leves, violencia<br> <b>En español</b> <br> <b>Peso:</b> 3,19 GB"],
                     ["recursos/letraA/airConflictsSecret.webp", "Air Conflicts - Secret Wars", "<b>Edad recomendada:</b> 13+ <br> <b>Contenido:</b> Sangre, lenguaje, violencia<br> <b>En español</b> <br> <b>Peso:</b> 2,57 GB"],
                     ["recursos/letraA/airConflictsVietnam.webp", "Air Conflicts - Vietnam", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Sangre, lenguaje, violencia<br> <b>En español</b> <br> <b>Peso:</b> 4,76 GB"],
                     ["recursos/letraA/AMR_cover.webp", "Alice: Madness Returns", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, temas sexuales, lenguaje fuerte, violencia<br> <b>En español</b> <br> <b>Peso:</b> 4,71 GB"],
                     ["recursos/letraA/alienIsolation.webp", "Alien: Isolation", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, lenguaje fuerte, violencia<br> <b>En español</b> <br> <b>Peso:</b> 8,94 GB"],
                     ["recursos/letraA/alienColonial.webp", "Alien: Colonial Marines", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, lenguaje fuerte, violencia intensa<br> <b>En español</b> <br> <b>Peso:</b> 6,63 GB"],
                     ["recursos/letraA/alienPredator.webp", "Alien Vs Predator", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, lenguaje fuerte, violencia intensa, temas sugerentes<br> <b>En español</b> <br> <b>Peso:</b> 6,40 GB"],
                     ["recursos/letraA/alone.webp", "Alone In the Dark: Inferno", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, lenguaje fuerte, violencia<br> <b>En español</b> <br> <b>Peso:</b> 5,86 GB"],
                     ["recursos/letraA/alphaProtocol.webp", "Alpha Protocol", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Sangre, lenguaje fuerte, violencia intensa, drogas, contenido sexual<br> <b>En español</b> <br> <b>Peso:</b> 5,63 GB"],
                     ["recursos/letraA/amazing1.jpeg", "Amazing Spiderman 1", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Lenguaje leve, violencia moderada, temas sugerentes leves<br> <b>En español</b> <br> <b>Peso:</b> 6,94 GB"],
                     ["recursos/letraA/amazing2.webp", "Amazing Spiderman 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Lenguaje leve, violencia, temas sugerentes leves<br> <b>En español</b> <br> <b>Peso:</b> 6,44 GB"],
                     ["recursos/letraA/anarchy.webp", "Anarchy Reigns", "<b>Edad recomendada:</b> 17+ <br> <b>Contenido:</b> Sangre, violencia intensa, desnudez parcial, temas sexuales, lenguaje fuerte<br> <b>En español</b> <br> <b>Peso:</b> 11,40 GB"],
                     ["recursos/letraA/angryStar.webp", "Angry Birds Star Wars", "<b>Edad recomendada:</b> Todas <br> <b>Contenido:</b> Violencia caricaturesca leve<br> <b>En español</b> <br> <b>Peso:</b> 685 MB"],
                     ["recursos/letraA/angryTrilogy.webp", "Angry Birds Trilogy", "<b>Edad recomendada:</b> Todas <br> <b>Contenido:</b> Violencia caricaturesca<br> <b>En español</b> <br> <b>Peso:</b> 2,09 GB"],
                     ["recursos/letraA/apache.webp", "Apache Air Assault", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Referencias a la drogas, lenguaje, temas sugerentes leves, violencia<br> <b>En español</b> <br> <b>Peso:</b> 2,19 GB"],
                     ["recursos/letraA/coreFor.webp", "Armored Core - For Answer", "<b>Edad recomendada:</b> 13+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 14,2 GB"], 
                     ["recursos/letraA/coreVerdict.webp", "Armored Core - Verdict Day", "<b>Edad recomendada:</b> 13+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 5,66 GB"], 
                     ["recursos/letraA/core4.webp", "Armored Core 4", "<b>Edad recomendada:</b> 13+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En inglés</b> <br> <b>Peso:</b> 14,4 GB"],
                     ["recursos/letraA/core5.webp", "Armored Core 5", "<b>Edad recomendada:</b> 13+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 4,28 GB"],
                     ["recursos/letraA/army.webp", "Army of Two", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 4,89 GB"],
                     ["recursos/letraA/army40.webp", "Army of Two - The 40th Day", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 4,64 GB"],        
                     ["recursos/letraA/armyDevil.webp", "Army of Two - The Devil's Cartel", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 7,22 GB"],
                     ["recursos/letraA/AC1.webp", "Assassin's Creed", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 7,87 GB"],
                     ["recursos/letraA/ACtri.avif", "Assassin's Creed - The Ezio Collection", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 21,9 GB <br> <b>Nota:</b> Trae el 2, Brotherhood y Revelations"],
                     ["recursos/letraA/AC3.jpg", "Assassin's Creed 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 10,7 GB"],
                     ["recursos/letraA/AC4.jpg", "Assassin's Creed 4", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 10,0 GB"],
                     ["recursos/letraA/ACrogue.webp", "Assassin's Creed Rogue", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 6,52 GB"], 
                     ["recursos/letraA/asura.webp", "Asura's Wrath", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje<br> <b>En español</b> <br> <b>Peso:</b> 6,73 GB"]              
                    ];

let arrayLetraBJuegosPS3 = [
                     ["recursos/letraB/bakuganBattle.jpg", "Bakugan Battle Brawlers", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,25 GB"],
                     ["recursos/letraB/bakuganCore.jpg", "Bakugan Defenders of the Core", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,80 GB"],
                     ["recursos/letraB/batmanOrigins.webp", "Batman Arkham Origins", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 14,3 GB"],
                     ["recursos/letraB/batmanAsylum.webp", "Batman Arkham Asylum GOTY Edition", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,41 GB"],  
                     ["recursos/letraB/batmanCity.jpg", "Batman Arkham City GOTY Edition", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,15 GB"],
                     ["recursos/letraB/bfbc1.jpg", "Battlefield Bad Company Gold Edition", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 6,93 GB"],
                     ["recursos/letraB/bfbc2.webp", "Battlefield Bad Company 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 8,09 GB"],
                     ["recursos/letraB/bf3.jpg", "Battlefield 3", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 12,3 GB"],
                     ["recursos/letraB/bf4.jpg", "Battlefield 4", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 10,1 GB <br> <b>Nota: </b> +18 por las microtransacciones, pero en hen eso no aplica, realmente es +16"],
                     ["recursos/letraB/bfh.webp", "Battlefield Hardline", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, drogas <br> <b>En español</b> <br> <b>Peso:</b> 13,3 GB"],
                     ["recursos/letraB/b10galactic.webp", "Ben 10 Galactic Racing", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> N/A <br> <b>En español</b> <br> <b>Peso:</b> 2,76 GB"],
                     ["recursos/letraB/b10o.webp", "Ben 10 Omniverse", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,05 GB"],
                     ["recursos/letraB/b10o2.webp", "Ben 10 Omniverse 2", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 2,19 GB"],
                     ["recursos/letraB/b10ucd.jpg", "Ben 10 Ultimate Alien: Cosmic Destruction", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,95 GB"],
                     ["recursos/letraB/beyond.avif", "BEYOND: Two Souls", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 31,5 GB"],
                     ["recursos/letraB/binary.webp", "Binary Domain", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 11,4 GB"],
                     ["recursos/letraB/bionic.jpg", "Bionic Commando", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,11 GB"],
                     ["recursos/letraB/bioulti.webp", "Bioshock Ultimate Rapture Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 26,7 GB <br> <b>Nota: </b> Trae el 1 y 2"],
                     ["recursos/letraB/bioinfi.jpg", "Bioshock Infinite Complete Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 13,8 GB"],
                     ["recursos/letraB/blur.webp", "Blur", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 6,25 GB"],
                     ["recursos/letraB/bodycount.webp", "Bodycount", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,88 GB"],
                     ["recursos/letraB/brink.webp", "Brink", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,64 GB"],
                     ["recursos/letraB/brothers.avif", "Brothers In Arms Hell's Highway", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,64 GB"],
                     ["recursos/letraB/bullet.jpg", "Bulletstorm", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,94 GB"],
                     ["recursos/letraB/BP.jpg", "Burnout Paradise", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,51 GB"],
                     ["recursos/letraB/xcom.jpg", "The Bureau: Xcom Declassified", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,12 GB"],
                     ["recursos/letraB/bleach.jpg", "Bleach: Soul Resurrection", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En inglés</b> <br> <b>Peso:</b> 3,89 GB"],
                     ["recursos/letraB/borderlands.webp", "Borderlands GOTY Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,97 GB"],
                     ["recursos/letraB/borderlands2.png", "Borderlands 2 + Contenido Extra", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 11,55 GB"],
                     ["recursos/letraB/borderlandspre.jpg", "Borderlands - The Pre-Sequel", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 5,72 GB"],
                     ["recursos/letraB/brutal.jpg", "Brutal Legend", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,59 GB"],                                                                     
                    ];

let arrayLetraCJuegosPS3 = [
                     ["recursos/letraC/crysis1.webp", "Crysis", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 2,95 GB"],
                     ["recursos/letraC/crysis2.webp", "Crysis 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,78 GB"],
                     ["recursos/letraC/crysis3.jpg", "Crysis 3", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,77 GB"],
                     ["recursos/letraC/cod1.jpg", "Call Of Duty Classic", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En inglés</b> <br> <b>Peso:</b> 940 MB"],
                     ["recursos/letraC/cod3.jpg", "Call Of Duty 3", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,29 GB"],
                     ["recursos/letraC/codmw1.webp", "Call Of Duty Modern Warfare 1", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,86 GB"],
                     ["recursos/letraC/codmw2.webp", "Call Of Duty Modern Warfare 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,41 GB"],
                     ["recursos/letraC/mw3.webp", "Call Of Duty Modern Warfare 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 8,30 GB"],
                     ["recursos/letraC/codaw.jpg", "Call Of Duty Advanced Warfare", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 13,80 GB"],
                     ["recursos/letraC/codwaw.jpg", "Call Of Duty World At War", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 11,10 GB"],
                     ["recursos/letraC/codghosts.webp", "Call Of Duty Ghosts", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 11,10 GB"],
                     ["recursos/letraC/bo1.webp", "Call Of Duty Black Ops", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 17,90 GB"],
                     ["recursos/letraC/bo2.png", "Call Of Duty Black Ops 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 19,90 GB"],
                     ["recursos/letraC/bo3.webp", "Call Of Duty Black Ops 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,28 GB <br> <b>Nota:</b> Este juego no trae campaña, solo zombies y online"],
                     ["recursos/letraC/cojblood.webp", "Call Of Juarez Bound In Blood", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 3,67 GB"],
                     ["recursos/letraC/cojcartel.webp", "Call Of Juarez The Cartel", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,25 GB"],
                     ["recursos/letraC/cojgunslinger.jpg", "Call Of Juarez Gunslinger", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>Idioma por determinar</b> <br> <b>Peso:</b> 1,93 GB"],
                     ["recursos/letraC/america.webp", "Captain America Super Soldier", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 6,48 GB"],
                     ["recursos/letraC/cartoon.webp", "Cartoon Network Punch Time Explosion XL", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,39 GB"],
                     ["recursos/letraC/castle1.webp", "Castlevania Lords Of Shadow 1", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 11,90 GB"],
                     ["recursos/letraC/castle2.webp", "Castlevania Lords Of Shadow 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,24 GB"],
                     ["recursos/letraC/comdemned.webp", "Comdemned 2 Bloodshot", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia explicita <br> <b>En español</b> <br> <b>Peso:</b> 6,48 GB"],
                     ["recursos/letraC/eden.jpg", "Child Of Eden", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 2,11 GB"],
                     ["recursos/letraC/conflict.webp", "Conflict Denied Ops", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,86 GB"],
                     ["recursos/letraC/csi.webp", "CSI Fatal Conspiracy", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 2,69 GB"],
                     ["recursos/letraC/riddick.webp", "Chronicles of Riddick: Assault on Dark Athena", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 8,97 GB"],
                     ["recursos/letraC/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraDJuegosPS3 = [
                     ["recursos/letraD/damnation.webp", "Damnation", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,96 GB"],
                     ["recursos/letraD/dante.webp", "Dante's Inferno", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,14 GB"],
                     ["recursos/letraD/darksector.webp", "Dark Sector", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 1,46 GB"],
                     ["recursos/letraD/ds0.webp", "Demon's Souls", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,39 GB"],
                     ["recursos/letraD/ds1.webp", "Dark Souls 1 Prepare To Die Edition", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,25 GB"],
                     ["recursos/letraD/ds2.webp", "Dark Souls 2 Scholar Of The First Sin", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,37 GB"],
                     ["recursos/letraD/void.webp", "Dark Void", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,99 GB"],
                     ["recursos/letraD/siders1.webp", "Darksiders", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 18,80 GB"],
                     ["recursos/letraD/siders2.jpg", "Darksiders 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,74 GB"],
                     ["recursos/letraD/island.webp", "Dead Island GOTY", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,72 GB"],
                     ["recursos/letraD/islandrip.webp", "Dead Island Riptide Complete Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 3,51 GB"],
                     ["recursos/letraD/dr2off.jpg", "Dead Rising 2 Off The Record", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,59 GB"],
                     ["recursos/letraD/space1.webp", "Dead Space 1", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 9,83 GB"],
                     ["recursos/letraD/space2.webp", "Dead Space 2 Limited Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 13,80 GB"],
                     ["recursos/letraD/space3.jpg", "Dead Space 3 + DLC Historia", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 12,30 GB"],
                     ["recursos/letraD/dtrr.webp", "Dead To Rights Retribution", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, drogas <br> <b>En español</b> <br> <b>Peso:</b> 6,31 GB"],
                     ["recursos/letraD/dp.webp", "Deadly Premonition Director's Cut", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 11,8 GB"],
                     ["recursos/letraD/deadpool.webp", "Deadpool", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,58 GB"],
                     ["recursos/letraD/def.webp", "Def Jam Icon", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En inglés</b> <br> <b>Peso:</b> 7,45 GB"],
                     ["recursos/letraD/destiny.webp", "Destiny", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,63 GB"],
                     ["recursos/letraD/deus.jpg", "Deus Ex Human Revolution Director's Cut", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 15,20 GB"],
                     ["recursos/letraD/maycry.jpg", "Devil May Cry HD Collection", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 10,0 GB"],
                     ["recursos/letraD/dmc4.jpg", "Devil May Cry 4", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 10,0 GB"],
                     ["recursos/letraD/dirt.jpg", "Dirt 1", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,81 GB"],
                     ["recursos/letraD/dirt2.webp", "Dirt 2", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,81 GB"],
                     ["recursos/letraD/dirt3.webp", "Dirt 3 Complete Edition", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,78 GB"],
                     ["recursos/letraD/dirtshowdown.webp", "Dirt Showdown", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,32 GB"],
                     ["recursos/letraD/dishonored.webp", "Dishonored", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 11,50 GB"],
                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

export function crearOpcionJuego(array){

    let contenedorTarjetaJuego = crearElemento("div");

    contenedorTarjetaJuego.classList.add("card", "tarjetaJuego");

    let imagen = crearElemento("img");

    imagen.src = array[0];
    imagen.style.height = "17rem";
    imagen.classList.add("card-img-top");

    contenedorTarjetaJuego.appendChild(imagen);

    let contenedorDatosJuego = crearElemento("div");
    contenedorDatosJuego.classList.add("card-body");

        let h5 = crearElemento("h5");
        h5.classList.add("card-title");
        h5.textContent = array[1];

        let p = crearElemento("p");
        p.classList.add("card-text");
        p.innerHTML = array[2];

    contenedorDatosJuego.appendChild(h5);
    contenedorDatosJuego.appendChild(p);

    contenedorTarjetaJuego.appendChild(contenedorDatosJuego);

    let contenedorJuegos = obtenerElementoHTML("contenedorJuegosPS3");

    contenedorJuegos.appendChild(contenedorTarjetaJuego);

}

export function ponerJuegosLetraA(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraAJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraAJuegosPS3[i]);

    }

}

export function ponerJuegosLetraB(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraBJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraBJuegosPS3[i]);

    }

}

export function ponerJuegosLetraC(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraCJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraCJuegosPS3[i]);

    }

}

export function ponerJuegosLetraD(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraDJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraDJuegosPS3[i]);

    }

}



