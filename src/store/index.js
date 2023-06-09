import { createStore } from 'redux';
const defaultState = {customers : ['Aayla Secura', 'Adi Gallia', 'Admiral Dodd Rancit',
'Admiral Firmus Piett', 'Admiral Gial Ackbar', 'Admiral Ozzel',
'Admiral Raddus', 'Admiral Terrinald Screed', 'Admiral Trench',
'Admiral U.O. Statura', 'Agen Kolar', 'Agent Kallus', 'Aiolin and Morit Astarte', 'Aks Moe', 'Almec', 
'Alton Kastle', 'Amee', 'AP-5',
'Armitage Hux', 'Artoo', 'Arvel Crynyd', 'Asajj Ventress', 'Aurra Sing', 'AZI-3', 'Bala-Tik', 'Barada', 
'Bargwill Tomder', 'Baron Papanoida', 'Barriss Offee', 'Baze Malbus', 'Bazine Netal', 'BB-8',
'BB-9E', 'Ben Quadinaros', 'Berch Teller', 'Beru Lars', 'Bib Fortuna',
'Biggs Darklighter', 'Black Krrsantan', 'Bo-Katan Kryze', 'Boba Fett',
'Bobbajo', 'Bodhi Rook', 'Borvo the Hutt', 'Boss Nass', 'Bossk',
'Breha Antilles-Organa', 'Bren Derlin', 'Brendol Hux', 'BT-1', 'C-3PO', 
'C1-10P', 'Cad Bane', 'Caluan Ematt', 'Captain Gregor', 'Captain','Phasma', 'Captain Quarsh Panaka', 'Captain Rex', 'Carlist Rieekan',
'Casca Panzoro', 'Cassian Andor', 'Cassio Tagge', 'Cham Syndulla',
'Che Amanwe Papanoida', 'Chewbacca', 'Chi Eekway Papanoida', 'ChiefChirpa', 'Chirrut Îmwe', 'Ciena Ree', 'Cin Drallig', 'Clegg Holdfast',
'Cliegg Lars', 'Coleman Kcaj', 'Coleman Trebor', 'Colonel Kaplan',
'Commander Bly', 'Commander Cody (CC-2224)', 'Commander Fil (CC-3714)', 
'Commander Fox', 'Commander Gree', 'Commander Jet', 'Commander','Wolffe', 'Conan Antonio Motti', 'Conder Kyl', 'Constable Zuvio',
'Cordé', 'Cpatain Typho', 'Crix Madine', 'Cut Lawquane', 'Dak Ralter',
'Dapp', 'Darth Bane', 'Darth Maul', 'Darth Tyranus', 'Daultay Dofine',
'Del Meeko', 'Delian Mors', 'Dengar', 'Depa Billaba', 'Derek Klivian',
'Dexter Jettster', 'Dineé Ellberger', 'DJ', 'Doctor Aphra', 'Doctor','Evazan', 'Dogma', 'Dormé', 'Dr. Cylo', 'Droidbait', 'Droopy McCool',
'Dryden Vos', 'Dud Bolt', 'Ebe E. Endocott', 'Echuu Shen-Jon', 'EethKoth', 'Eighth Brother', 'Eirtaé', 'Eli Vanto', 'Ellé', 'Ello Asty',
'Embo', 'Eneb Ray', 'Enfys Nest', 'EV-9D9', 'Evaan Verlaine', 'EvenPiell', 'Ezra Bridger', 'Faro Argyus', 'Feral', 'Fifth Brother',
'Finis Valorum', 'Finn', 'Fives', 'FN-1824', 'FN-2003', 'Fodesinbeed','Annodue', 'Fulcrum', 'FX-7', 'GA-97', 'Galen Erso', 'Gallius Rax',
'Garazeb &quot;Zeb&quot; Orrelios', 'Gardulla the Hutt', 'Garrick Versio',
'Garven Dreis', 'Gavyn Sykes', 'Gideon Hask', 'Gizor Dellso', 'Gonkdroid', 'Grand Inquisitor', 'Greeata Jendowanian', 'Greedo', 
'GreerSonnel', 'Grievous', 'Grummgar', 'Gungi', 'Hammerhead', 'Han Solo',
'Harter Kalonia', 'Has Obbit', 'Hera Syndulla', 'Hevy', 'HondoOhnaka', 'Huyang', 'Iden Versio', 'IG-88', 'Ima-Gun Di',
'Inquisitors', 'Inspector Thanoth', 'Jabba', 'Jacen Syndulla', 'JanDodonna', 'Jango Fett', 'Janus Greejatus', 'Jar Jar Binks', 
'JasEmari', 'Jaxxon', 'Jek Tono Porkins', 'Jeremoch Colton', 'Jira',
'Jobal Naberrie', 'Jocasta Nu', 'Joclad Danva', 'Joh Yowza', 'JomBarell', 'Joph Seastriker', 'Jova Tarkin', 'Jubnuk', 'Jyn Erso', 
'K-2SO', 'Kanan Jarrus', 'Karbin', 'Karina the Great', 'Kes Dameron',
'Ketsu Onyo', 'Ki-Adi-Mundi', 'King Katuunko', 'Kit Fisto', 'KitsterBanai', 'Klaatu', 'Klik-Klak', 'Korr Sella', 'Kylo Ren', 'L3-37',
'Lama Su', 'Lando Calrissian', 'Lanever Villecham', 'Leia Organa',
'Letta Turmond', 'Lieutenant Kaydel Ko Connix', 'Lieutenant Thire',
'Lobot', 'Logray', 'Lok Durd', 'Longo Two-Guns', 'Lor San Tekka',
'Lorth Needa', 'Lott Dod', 'Luke Skywalker', 'Lumat', 'LuminaraUnduli', 'Lux Bonteri', 'Lyn Me', 'Lyra Erso', 'Mace Windu',
'Malakili', 'Mama the Hutt', 'Mars Guo', 'Mas Amedda', 'Mawhonic',
'Max Rebo', 'Maximilian Veers', 'Maz Kanata', 'ME-8D9', 'Meena Tills',
'Mercurial Swift', 'Mina Bonteri', 'Miraj Scintel', 'Mister Bones',
'Mod Terrik', 'Moden Canady', 'Mon Mothma', 'Moradmin Bast', 'MoraloEval', 'Morley', 'Mother Talzin', 'Nahdar Vebb', 'Nahdonnis Praji',
'Nien Nunb', 'Niima the Hutt', 'Nines', 'Norra Wexley', 'Nute Gunray',
'Nuvo Vindi', 'Obi-Wan Kenobi', 'Odd Ball', 'Ody Mandrell', 'Omi',
'Onaconda Farr', 'Oola', 'OOM-9', 'Oppo Rancisis', 'Orn Free Taa',
'Oro Dassyne', 'Orrimarko', 'Osi Sobeck', 'Owen Lars', 'Pablo-Jill',
'Padmé Amidala', 'Pagetti Rook', 'Paige Tico', 'Paploo', 'PettyOfficer Thanisson', 'Pharl McQuarrie', 'Plo Koon', 'Po Nudo', 
'PoeDameron', 'Poggle the Lesser', 'Pong Krell', 'Pooja Naberrie', 'PZ-4CO', 'Quarrie', 'Quay Tolsite', 'Queen Apailana', 'Queen Jamillia',
'Queen Neeyutnee', 'Qui-Gon Jinn', 'Quiggold', 'Quinlan Vos', 'R2-D2',
'R2-KT', 'R3-S6', 'R4-P17', 'R5-D4', 'RA-7', 'Rabé', 'Rako Hardeen',
'Ransolm Casterfo', 'Rappertunie', 'Ratts Tyerell', 'Raymus Antilles',
'Ree-Yees', 'Reeve Panzoro', 'Rey', 'Ric Olié', 'Riff Tamson',
'Riley', 'Rinnriyin Di', 'Rio Durant', 'Rogue Squadron', 'Romba',
'Roos Tarpals', 'Rose Tico', 'Rotta the Hutt', 'Rukh', 'Rune Haako',
'Rush Clovis', 'Ruwee Naberrie', 'Ryoo Naberrie', 'Sabé', 'SabineWren', 'Saché', 'Saelt-Marae', 'Saesee Tiin', 'Salacious B. Crumb',
'San Hill', 'Sana Starros', 'Sarco Plank', 'Sarkli', 'Satine Kryze',
'Savage Opress', 'Sebulba', 'Senator Organa', 'Sergeant Kreel',
'Seventh Sister', 'Shaak Ti', 'Shara Bey', 'Shmi Skywalker', 'ShuMai', 'Sidon Ithano', 'Sifo-Dyas', 'Sim Aloo', 'Siniir Rath Velus', 
'Sio Bibble', 'Sixth Brother', 'Slowen Lo', 'Sly Moore',
'Snaggletooth', 'Snap Wexley', 'Snoke', 'Sola Naberrie', 'Sora Bulq',
'Strono Tuggs', 'Sy Snootles', 'Tallissan Lintra', 'Tarfful', 'TasuLeech', 'Taun We', 'TC-14', 'Tee Watt Kaa', 'Teebo', 'Teedo', 
'TeemtoPagalies', 'Temiri Blagg', 'Tessek', 'Tey How', 'Thane Kyrell', 'TheBendu', 'The Smuggler', 'Thrawn', 'Tiaan Jerjerrod', 'Tion Medon',
'Tobias Beckett', 'Tulon Voidgazer', 'Tup', 'U9-C4', 'Unkar Plutt',
'Val Beckett', 'Vanden Willard', 'Vice Admiral Amilyn Holdo', 'VoberDand', 'WAC-47', 'Wag Too', 'Wald', 'Walrus Man', 'Warok', 'WatTambor', 'Watto', 'Wedge Antilles', 'Wes Janson', 'Wicket W. Warrick',
'Wilhuff Tarkin', 'Wollivan', 'Wuher', 'Wullf Yularen', 'XamuelLennox', 'Yaddle', 'Yarael Poof', 'Yoda', 'Zam Wesell', 'Zev Senesca',
'Ziro the Hutt', 'Zuckuss' ]}
//const ADD = 'ADD'
const QUERY = 'QUERY';

export const reducer = (state = defaultState, action) => {
    switch(action.type){
        // case QUERY :
        //     console.log(action.query)
        //     return  [...state.customers].filter(item => item.toLowerCase().includes(action.query.toLowerCase())) 
        default : 
            return state
    }
}

export const store = createStore(reducer);

//export const getFilterCustomers = (query) => ({type : QUERY, query})





/*
const defaultState = {customers : ['Aayla Secura', 'Adi Gallia', 'Admiral Dodd Rancit',
'Admiral Firmus Piett', 'Admiral Gial Ackbar', 'Admiral Ozzel',
'Admiral Raddus', 'Admiral Terrinald Screed', 'Admiral Trench',
'Admiral U.O. Statura', 'Agen Kolar', 'Agent Kallus', 'Aiolin and Morit Astarte', 'Aks Moe', 'Almec', 
'Alton Kastle', 'Amee', 'AP-5',
'Armitage Hux', 'Artoo', 'Arvel Crynyd', 'Asajj Ventress', 'Aurra Sing', 'AZI-3', 'Bala-Tik', 'Barada', 
'Bargwill Tomder', 'Baron Papanoida', 'Barriss Offee', 'Baze Malbus', 'Bazine Netal', 'BB-8',
'BB-9E', 'Ben Quadinaros', 'Berch Teller', 'Beru Lars', 'Bib Fortuna',
'Biggs Darklighter', 'Black Krrsantan', 'Bo-Katan Kryze', 'Boba Fett',
'Bobbajo', 'Bodhi Rook', 'Borvo the Hutt', 'Boss Nass', 'Bossk',
'Breha Antilles-Organa', 'Bren Derlin', 'Brendol Hux', 'BT-1', 'C-3PO', 
'C1-10P', 'Cad Bane', 'Caluan Ematt', 'Captain Gregor', 'Captain','Phasma', 'Captain Quarsh Panaka', 'Captain Rex', 'Carlist Rieekan',
'Casca Panzoro', 'Cassian Andor', 'Cassio Tagge', 'Cham Syndulla',
'Che Amanwe Papanoida', 'Chewbacca', 'Chi Eekway Papanoida', 'ChiefChirpa', 'Chirrut Îmwe', 'Ciena Ree', 'Cin Drallig', 'Clegg Holdfast',
'Cliegg Lars', 'Coleman Kcaj', 'Coleman Trebor', 'Colonel Kaplan',
'Commander Bly', 'Commander Cody (CC-2224)', 'Commander Fil (CC-3714)', 
'Commander Fox', 'Commander Gree', 'Commander Jet', 'Commander','Wolffe', 'Conan Antonio Motti', 'Conder Kyl', 'Constable Zuvio',
'Cordé', 'Cpatain Typho', 'Crix Madine', 'Cut Lawquane', 'Dak Ralter',
'Dapp', 'Darth Bane', 'Darth Maul', 'Darth Tyranus', 'Daultay Dofine',
'Del Meeko', 'Delian Mors', 'Dengar', 'Depa Billaba', 'Derek Klivian',
'Dexter Jettster', 'Dineé Ellberger', 'DJ', 'Doctor Aphra', 'Doctor','Evazan', 'Dogma', 'Dormé', 'Dr. Cylo', 'Droidbait', 'Droopy McCool',
'Dryden Vos', 'Dud Bolt', 'Ebe E. Endocott', 'Echuu Shen-Jon', 'EethKoth', 'Eighth Brother', 'Eirtaé', 'Eli Vanto', 'Ellé', 'Ello Asty',
'Embo', 'Eneb Ray', 'Enfys Nest', 'EV-9D9', 'Evaan Verlaine', 'EvenPiell', 'Ezra Bridger', 'Faro Argyus', 'Feral', 'Fifth Brother',
'Finis Valorum', 'Finn', 'Fives', 'FN-1824', 'FN-2003', 'Fodesinbeed','Annodue', 'Fulcrum', 'FX-7', 'GA-97', 'Galen Erso', 'Gallius Rax',
'Garazeb &quot;Zeb&quot; Orrelios', 'Gardulla the Hutt', 'Garrick Versio',
'Garven Dreis', 'Gavyn Sykes', 'Gideon Hask', 'Gizor Dellso', 'Gonkdroid', 'Grand Inquisitor', 'Greeata Jendowanian', 'Greedo', 
'GreerSonnel', 'Grievous', 'Grummgar', 'Gungi', 'Hammerhead', 'Han Solo',
'Harter Kalonia', 'Has Obbit', 'Hera Syndulla', 'Hevy', 'HondoOhnaka', 'Huyang', 'Iden Versio', 'IG-88', 'Ima-Gun Di',
'Inquisitors', 'Inspector Thanoth', 'Jabba', 'Jacen Syndulla', 'JanDodonna', 'Jango Fett', 'Janus Greejatus', 'Jar Jar Binks', 
'JasEmari', 'Jaxxon', 'Jek Tono Porkins', 'Jeremoch Colton', 'Jira',
'Jobal Naberrie', 'Jocasta Nu', 'Joclad Danva', 'Joh Yowza', 'JomBarell', 'Joph Seastriker', 'Jova Tarkin', 'Jubnuk', 'Jyn Erso', 
'K-2SO', 'Kanan Jarrus', 'Karbin', 'Karina the Great', 'Kes Dameron',
'Ketsu Onyo', 'Ki-Adi-Mundi', 'King Katuunko', 'Kit Fisto', 'KitsterBanai', 'Klaatu', 'Klik-Klak', 'Korr Sella', 'Kylo Ren', 'L3-37',
'Lama Su', 'Lando Calrissian', 'Lanever Villecham', 'Leia Organa',
'Letta Turmond', 'Lieutenant Kaydel Ko Connix', 'Lieutenant Thire',
'Lobot', 'Logray', 'Lok Durd', 'Longo Two-Guns', 'Lor San Tekka',
'Lorth Needa', 'Lott Dod', 'Luke Skywalker', 'Lumat', 'LuminaraUnduli', 'Lux Bonteri', 'Lyn Me', 'Lyra Erso', 'Mace Windu',
'Malakili', 'Mama the Hutt', 'Mars Guo', 'Mas Amedda', 'Mawhonic',
'Max Rebo', 'Maximilian Veers', 'Maz Kanata', 'ME-8D9', 'Meena Tills',
'Mercurial Swift', 'Mina Bonteri', 'Miraj Scintel', 'Mister Bones',
'Mod Terrik', 'Moden Canady', 'Mon Mothma', 'Moradmin Bast', 'MoraloEval', 'Morley', 'Mother Talzin', 'Nahdar Vebb', 'Nahdonnis Praji',
'Nien Nunb', 'Niima the Hutt', 'Nines', 'Norra Wexley', 'Nute Gunray',
'Nuvo Vindi', 'Obi-Wan Kenobi', 'Odd Ball', 'Ody Mandrell', 'Omi',
'Onaconda Farr', 'Oola', 'OOM-9', 'Oppo Rancisis', 'Orn Free Taa',
'Oro Dassyne', 'Orrimarko', 'Osi Sobeck', 'Owen Lars', 'Pablo-Jill',
'Padmé Amidala', 'Pagetti Rook', 'Paige Tico', 'Paploo', 'PettyOfficer Thanisson', 'Pharl McQuarrie', 'Plo Koon', 'Po Nudo', 
'PoeDameron', 'Poggle the Lesser', 'Pong Krell', 'Pooja Naberrie', 'PZ-4CO', 'Quarrie', 'Quay Tolsite', 'Queen Apailana', 'Queen Jamillia',
'Queen Neeyutnee', 'Qui-Gon Jinn', 'Quiggold', 'Quinlan Vos', 'R2-D2',
'R2-KT', 'R3-S6', 'R4-P17', 'R5-D4', 'RA-7', 'Rabé', 'Rako Hardeen',
'Ransolm Casterfo', 'Rappertunie', 'Ratts Tyerell', 'Raymus Antilles',
'Ree-Yees', 'Reeve Panzoro', 'Rey', 'Ric Olié', 'Riff Tamson',
'Riley', 'Rinnriyin Di', 'Rio Durant', 'Rogue Squadron', 'Romba',
'Roos Tarpals', 'Rose Tico', 'Rotta the Hutt', 'Rukh', 'Rune Haako',
'Rush Clovis', 'Ruwee Naberrie', 'Ryoo Naberrie', 'Sabé', 'SabineWren', 'Saché', 'Saelt-Marae', 'Saesee Tiin', 'Salacious B. Crumb',
'San Hill', 'Sana Starros', 'Sarco Plank', 'Sarkli', 'Satine Kryze',
'Savage Opress', 'Sebulba', 'Senator Organa', 'Sergeant Kreel',
'Seventh Sister', 'Shaak Ti', 'Shara Bey', 'Shmi Skywalker', 'ShuMai', 'Sidon Ithano', 'Sifo-Dyas', 'Sim Aloo', 'Siniir Rath Velus', 
'Sio Bibble', 'Sixth Brother', 'Slowen Lo', 'Sly Moore',
'Snaggletooth', 'Snap Wexley', 'Snoke', 'Sola Naberrie', 'Sora Bulq',
'Strono Tuggs', 'Sy Snootles', 'Tallissan Lintra', 'Tarfful', 'TasuLeech', 'Taun We', 'TC-14', 'Tee Watt Kaa', 'Teebo', 'Teedo', 
'TeemtoPagalies', 'Temiri Blagg', 'Tessek', 'Tey How', 'Thane Kyrell', 'TheBendu', 'The Smuggler', 'Thrawn', 'Tiaan Jerjerrod', 'Tion Medon',
'Tobias Beckett', 'Tulon Voidgazer', 'Tup', 'U9-C4', 'Unkar Plutt',
'Val Beckett', 'Vanden Willard', 'Vice Admiral Amilyn Holdo', 'VoberDand', 'WAC-47', 'Wag Too', 'Wald', 'Walrus Man', 'Warok', 'WatTambor', 'Watto', 'Wedge Antilles', 'Wes Janson', 'Wicket W. Warrick',
'Wilhuff Tarkin', 'Wollivan', 'Wuher', 'Wullf Yularen', 'XamuelLennox', 'Yaddle', 'Yarael Poof', 'Yoda', 'Zam Wesell', 'Zev Senesca',
'Ziro the Hutt', 'Zuckuss' ]}
*/