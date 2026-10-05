import { crearElemento, eliminarTodosLosChildren, obtenerElementoHTML } from "./funcionesHTML.js";

let arrayLetra0JuegosPS3 = [
                     ["recursos/letra0/fantasticos.webp", "Los 4 Fantasticos - Rise of The Silver Sulfer", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,50 GB"],
            
                    ];

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
                     ["recursos/letraB/bolt.webp", "Bolt", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 7,66 GB"],
                     ["recursos/letraB/valiente.webp", "Brave (Valiente)", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 2,87 GB"],                     
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
                     ["recursos/letraC/crash4.webp", "Crash Bandicoot La Venganza de Cortex", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> N/A <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],
                     ["recursos/letraC/twinsanity.jpg", "Crash Twinsanity", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> N/A <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                     
                     ["recursos/letraC/nitro.jpg", "Crash Nitro Kart", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> N/A <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                     
                     ["recursos/letraC/tag.webp", "Crash Tag Team Racing", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                     
                     ["recursos/letraC/mom.webp", "Crash Mind Over Mutant", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                     
                     ["recursos/letraC/carsMate.webp", "Cars La Copa Internacional de Mate", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 3,59 GB"],
                     ["recursos/letraC/carsRace.webp", "Cars Race o Rama", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 4,18 GB"],
                     ["recursos/letraC/cars2.webp", "Cars 2", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 3,76 GB"],
                     ["recursos/letraC/cars3.webp", "Cars 3", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 4,72 GB"],                     
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
                     ["recursos/letraD/ducktales.webp", "Ducktales Remastered", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 900 MB"],
                     ["recursos/letraD/universe.webp", "Disney Universe", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 5,55 GB"],
                     ["recursos/letraD/infinity1.webp", "Disney Infinity", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 8,28 GB"],
                     ["recursos/letraD/infinity2.webp", "Disney Infinity 2.0", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 8,97 GB"],
                     ["recursos/letraD/infinity3.jpg", "Disney Infinity 3.0", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 15,90 GB"],
                     ["recursos/letraD/xenoverse.webp", "Dragon Ball Xenoverse", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,67 GB"],
                     ["recursos/letraD/z.webp", "Dragon Ball Battle Of Z", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 2,13 GB"],
                     ["recursos/letraD/limit.webp", "Dragon Ball Z Burst Limit", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 3,50 GB"],                     
                     ["recursos/letraD/uTenkaichi.webp", "Dragon Ball Z Ultimate Tenkaichi", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,23 GB"],                     
                     ["recursos/letraD/budokai.webp", "Dragon Ball Z Budokai HD Collection", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,91 GB"],                      
                     ["recursos/letraD/raging1.webp", "Dragon Ball Raging Blast", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,40 GB"],                     
                     ["recursos/letraD/raging2.webp", "Dragon Ball Raging Blast 2", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 7,15 GB"],                     
                     ["recursos/letraD/damnation.webp", "Damnation", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,96 GB"],
                     ["recursos/letraD/dante.webp", "Dante's Inferno", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,14 GB"],
                     ["recursos/letraD/darksector.webp", "Dark Sector", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 1,46 GB"],
                     ["recursos/letraD/ds0.webp", "Demon's Souls", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,39 GB"],
                     ["recursos/letraD/ds1.webp", "Dark Souls 1 Prepare To Die Edition", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,25 GB"],
                     ["recursos/letraD/ds2.webp", "Dark Souls 2 Scholar Of The First Sin", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,37 GB"],
                     ["recursos/letraD/void.webp", "Dark Void", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,99 GB"],
                     ["recursos/letraD/siders1.webp", "Darksiders", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 18,80 GB"],
                     ["recursos/letraD/siders2.jpg", "Darksiders 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,74 GB"],
                     ["recursos/letraD/doom3.jpg", "Doom 3 BFG Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"],                     
                     ["recursos/letraD/island.webp", "Dead Island GOTY", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 5,72 GB"],
                     ["recursos/letraD/islandrip.webp", "Dead Island Riptide Complete Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 3,51 GB"],
                     ["recursos/letraD/dr2off.jpg", "Dead Rising 2 Off The Record", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,59 GB"],
                     ["recursos/letraD/inquisition.webp", "Dragon Age Inquisition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 16,80 GB"],                           
                     ["recursos/letraD/age2.webp", "Dragon Age II", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 6,48 GB"],                      
                     ["recursos/letraD/age.jpg", "Dragon Age Origins Ultimate Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 15,10 GB"],                      
                     ["recursos/letraD/crown.webp", "Dragon's Crown", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje, elementos sugerentes <br> <b>En inglés</b> <br> <b>Peso:</b> 1,56 GB"],                      
                     ["recursos/letraD/dogma.webp", "Dragon's Dogma", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,90 GB"], 
                     ["recursos/letraD/dogmadark.jpg", "Dragon's Dogma Dark Arisen", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 11,70 GB"],                      
                     ["recursos/letraD/who.webp", "Dr Who The Eternity Clock", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 1,71 GB"],                     
                     ["recursos/letraD/darkness.webp", "The Darkness", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 17,50 GB"],                     
                     ["recursos/letraD/darkness2.jpg", "The Darkness 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,04 GB"],                     
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

let arrayLetraEJuegosPS3 = [
                     ["recursos/letraE/mickey.webp", "Epic Mickey 2 The Power Of Two", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 6,55 GB"],
                     ["recursos/letraE/chavo.webp", "El Chavo Kart", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> N/A <br> <b>En español</b> <br> <b>Peso:</b> 2,13 GB"],
                     ["recursos/letraE/enemy.webp", "Enemy Front", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,82 GB"],
                     ["recursos/letraE/quake.webp", "Enemy Territory Quake Wars", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,75 GB"],
                     ["recursos/letraE/escape.webp", "Escape Dead Island ", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,42 GB"],
                     ["recursos/letraE/oblivion.webp", "The Elder Scrolls IV - Oblivion 5th Aniversary", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 19,30 GB"],
                     ["recursos/letraE/skyrim.webp", "The Elder Scrolls V - Skyrim Legendary Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 12,90 GB"],
                     ["recursos/letraE/within.webp", "The Evil Within", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 6,85 GB"],
                     ["recursos/letraE/lead.webp", "Eat Lead The Return Of Matt Hazard", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 5,69 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraFJuegosPS3 = [
                     ["recursos/letraF/ffx.jpg", "Final Fantasy X & X-2 HD", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 23,00 GB"],
                     ["recursos/letraF/ffxiii.jpg", "Final Fantasy XIII", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 44,60 GB"],                     
                     ["recursos/letraF/ffxiii2.webp", "Final Fantasy XIII-2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 14,30 GB"],                     
                     ["recursos/letraF/ffxiiiL.webp", "Final Fantasy XIII - Lightning Returns", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,82 GB"],                     
                     ["recursos/letraF/fracture.jpg", "Fracture", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 4,32 GB"],                     
                     ["recursos/letraF/front.webp", "Front Mission Evolved", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 9,67 GB"],                     
                     ["recursos/letraF/fuse.webp", "Fuse", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 10,60 GB"],                     
                     ["recursos/letraF/skies.jpg", "Falling Skies - El Videojuego", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 2,29 GB"],
                     ["recursos/letraF/falloutgoty.jpg", "Fallout 3 - GOTY Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 9,82 GB"],                     
                     ["recursos/letraF/vegas.jpg", "Fallout New Vegas - Ultimate Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 12,70 GB"],
                     ["recursos/letraF/far1.webp", "Far Cry Classic", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 2,78 GB"],                     
                     ["recursos/letraF/far2.webp", "Far Cry 2", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,05 GB"],                     
                     ["recursos/letraF/far3.webp", "Far Cry 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 5,76 GB"],                     
                     ["recursos/letraF/farblood.webp", "Far Cry 3 Blood Dragon", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 1,73 GB"],                      
                     ["recursos/letraF/far4.webp", "Far Cry 4", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 9,63 GB"],                     
                     ["recursos/letraF/miedo.jpg", "F.E.A.R", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 3,83 GB"],
                     ["recursos/letraF/miedo2.jpg", "F.E.A.R 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 4,04 GB"],
                     ["recursos/letraF/miedo3.jpg", "F.E.A.R 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 13,00 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraGJuegosPS3 = [
                     ["recursos/letraG/gforce.webp", "G-Force", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 3,85 GB"],
                     ["recursos/letraG/generador.jpg", "Generador Rex Agente de Providencia", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,90 GB"],                     
                     ["recursos/letraG/ghost.jpg", "Ghostbusters", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 12,60 GB"],                     
                     ["recursos/letraG/gtav.webp", "Grand Theft Auto V", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 17,40 GB"],                     
                     ["recursos/letraG/gta4.webp", "Grand Theft Auto IV & Episodes From Liberty City", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia, drogas <br> <b>En español</b> <br> <b>Peso:</b> 17,60 GB"],                     
                     ["recursos/letraG/andreas.webp", "Grand Theft Auto San Andreas Version PS3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia, apuestas <br> <b>En español</b> <br> <b>Peso:</b> 2,31 GB <br> <b>Nota: </b> Dicen que tiene bugs"],
                     ["recursos/letraG/andreas.webp", "Grand Theft Auto San Andreas Version PS2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia, apuestas <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br>"],                     
                     ["recursos/letraG/liberty.webp", "Grand Theft Auto Liberty City Stories", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                      
                     ["recursos/letraG/vicestories.jpg", "Grand Theft Auto Vice City Stories", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                       
                     ["recursos/letraG/vice.webp", "Grand Theft Auto Vice City", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],
                     ["recursos/letraG/gta3.webp", "Grand Theft Auto III", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> violencia <br> <b>En español</b> <br> <b>Peso:</b> ? GB <br> <b>Nota: </b> Emulado de PS2"],                     
                     ["recursos/letraG/trono.jpg", "Game Of Thrones", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,07 GB"],                     
                     ["recursos/letraG/origins.jpg", "God Of War Origins", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 22,30 GB <br> <b>Nota: </b> Trae Chains of Olympus y Ghost of Sparta"],
                     ["recursos/letraG/warCollection.jpg", "God Of War Collection", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 23,20 GB <br> <b>Nota: </b> Trae el 1 y 2"],
                     ["recursos/letraG/war3.webp", "God Of War 3", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 40,20 GB"],
                     ["recursos/letraG/waras.webp", "God Of War Ascension", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 46,10 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraHJuegosPS3 = [
                     ["recursos/letraH/hitman.jpg", "Hitman Absolution", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, Lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 16,30 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraLJuegosPS3 = [
                     ["recursos/letraL/lluvia.webp", "Lluvia de Hamburguesas", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 3,49 GB"],
                     ["recursos/letraL/lanoire.webp", "L.A Noire Complete Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Violencia, lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 39,30 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraPJuegosPS3 = [
                     ["recursos/letraP/phineas.webp", "Phineas y Ferb - A Través de la 2da Dimension", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 17,10 GB"],
                     ["recursos/letraP/piratas.jpg", "Piratas del Caribe - En el Fin del Mundo", "<b>Edad recomendada:</b> 16+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 5,69 GB"],
                     ["recursos/letraP/padrino1.webp", "El Padrino - The Don's Edition", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, Violencia <br> <b>En español</b> <br> <b>Peso:</b> 8,92 GB"],
                     ["recursos/letraP/padrino2.webp", "El Padrino 2", "<b>Edad recomendada:</b> 18+ <br> <b>Contenido:</b> Lenguaje, Violencia <br> <b>En español</b> <br> <b>Peso:</b> 10,60 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraRJuegosPS3 = [
                     ["recursos/letraR/rata.webp", "Ratatouille", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 5,80 GB"],
                     ["recursos/letraR/rapido.jpg", "Rapido y Furioso Confrontación", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia, Lenguaje <br> <b>En español</b> <br> <b>Peso:</b> 2,02 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraTJuegosPS3 = [
                     ["recursos/letraT/toy3.webp", "Toy Story 3 Toy Box Special Edition", "<b>Edad recomendada:</b> 7+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 6,80 GB"],
                     ["recursos/letraT/toyMania.webp", "Toy Story Mania", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 2,90 GB"],
                     ["recursos/letraT/tron.webp", "Tron Evolution", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 4,87 GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];
    
let arrayLetraUJuegosPS3 = [
                     ["recursos/letraU/up.jpg", "Up", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> CORREGIR GB"],

                     //["recursos/letraD/narnia.webp", "Las Cronicas de Narnia: El Principe Caspian", "<b>Edad recomendada:</b> 12+ <br> <b>Contenido:</b> Violencia <br> <b>En español</b> <br> <b>Peso:</b> 7,27 GB"]                                                                        
                    ];

let arrayLetraWJuegosPS3 = [
                     ["recursos/letraW/walle.webp", "Wall-E", "<b>Edad recomendada:</b> 3+ <br> <b>Contenido:</b> PEGI ESTA CAIDO <br> <b>En español</b> <br> <b>Peso:</b> 5,13 GB"],

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

export function ponerJuegosLetra0(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetra0JuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetra0JuegosPS3[i]);

    }

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

export function ponerJuegosLetraE(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraEJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraEJuegosPS3[i]);

    }

}

export function ponerJuegosLetraF(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraFJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraFJuegosPS3[i]);

    }

}

export function ponerJuegosLetraG(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraGJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraGJuegosPS3[i]);

    }

}

export function ponerJuegosLetraH(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraHJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraHJuegosPS3[i]);

    }

}

export function ponerJuegosLetraL(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraLJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraLJuegosPS3[i]);

    }

}

export function ponerJuegosLetraP(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraPJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraPJuegosPS3[i]);

    }

}

export function ponerJuegosLetraR(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraRJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraRJuegosPS3[i]);

    }

}

export function ponerJuegosLetraT(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraTJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraTJuegosPS3[i]);

    }

}

export function ponerJuegosLetraU(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraUJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraUJuegosPS3[i]);

    }

}

export function ponerJuegosLetraW(){

    eliminarTodosLosChildren("contenedorJuegosPS3");

    for(let i = 0; i <= arrayLetraWJuegosPS3.length - 1; i++){

        crearOpcionJuego(arrayLetraWJuegosPS3[i]);

    }

}



