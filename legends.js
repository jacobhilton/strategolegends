var legendsconstructor=function(){

  var legends=this;

  var legendsproperties={

    "server":{
      "socket":"http://192.168.1.76:3000",
      "imagedirectory":"images/",
      "gameid":-1,
      "waitforreply":true,
      "messagereceived":true
    },

    "styles":{
      "marginsize":20,
      "tilesize":80,
      "pieceheight":54,
      "piecewidth":36,
      "goodcolour":"beige",
      "goodbordercolour":"#ffffff",
      "evilcolour":"black",
      "evilbordercolour":"#666666",
      "bordersize":2,
      "armypieceheight":57,
      "armypiecewidth":38,
      "armypiecemarginsize":2,
      "armypieceborderradius":6,
      "pieceopacity":0.35,
      "alttextwait":250,
      "alttextcss":{
        "max-width":"400px",
        "background-color":"#ffff80",
        "border":"1px solid black",
        "padding":"2px",
        "margin":"16px 0px 0px 0px",
      }
    },

    "piecedata":[
      null,
      {"name":"Landor","power":"10","race":"ranger","abilities":"<i>Action</i>: Reveal Landor to move Landor one space diagonally. Landor can also attack diagonally.","colour":"green","side":"good","expansion":false},
      {"name":"Vellec","power":"10","race":"elf","abilities":"<i>Death Curse</i>: All Elves get +1.","colour":"green","side":"good","expansion":false},
      {"name":"King Migol","power":"9","race":"dwarf","abilities":"<i>Ability</i>: Reveal King Migol to give an adjacent Dwarf +2 until the end of the turn. Use this ability only once per turn. Reveal the adjacent Dwarf.","colour":"green","side":"good","expansion":false},
      {"name":"Aubrey","power":"9","race":"elf","abilities":"<i>Action</i>: Reveal Aubrey ( while on a forest space ) to move her to any empty forest space.","colour":"green","side":"good","expansion":false},
      {"name":"Lockin Elves","power":"8","race":"elf","abilities":"<i>Ability</i>: Reveal and destroy Lockin Elves to give an adjacent green piece +2 until the end of the turn. Reveal the affected green piece.","colour":"green","side":"good","expansion":false},
      {"name":"Dwarven Knight","power":"8","race":"dwarf","abilities":"<i>Action</i>: Quickness","colour":"green","side":"good","expansion":false},
      {"name":"Hunter","power":"8","race":"ranger","abilities":"<i>Action</i>: Charging","colour":"green","side":"good","expansion":false},
      {"name":"Srik","power":"7","race":"elf","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"green","side":"good","expansion":false},
      {"name":"Dwarven General","power":"7","race":"dwarf","abilities":"<i>Action</i>: Surround","colour":"green","side":"good","expansion":false},
      {"name":"Emeraldis","power":"7","race":"dragon","abilities":"<i>Innate</i>: Berzerk<br><i>Action</i>: Flying","colour":"green","side":"good","expansion":false},
      {"name":"High Elf","power":"6","race":"elf","abilities":"<i>Ability</i>: Reveal High Elf and an adjacent Elf to give the adjacent Elf +1 until the end of the turn. Use this ability only once per turn.","colour":"green","side":"good","expansion":false},
      {"name":"Migol's Royal Guard","power":"6","race":"dwarf","abilities":"<i>Ability</i>: If King Migol is attacked and destroyed while adjacent to Migol's Royal Guard, you may reveal and destroy Migol's Royal Guard and immediately replace him with King Migol (in the space that Migol's Royal Royal Guard formerly occupied).","colour":"green","side":"good","expansion":false},
      {"name":"Wannok","power":"6","race":"sprite","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Flying","colour":"green","side":"good","expansion":false},
      {"name":"Frodnaj Archer","power":"5","race":"elf","abilities":"<i>Action</i>: Distance Strike","colour":"green","side":"good","expansion":false},
      {"name":"Poy","power":"5","race":"dwarf","abilities":"<i>Innate</i>: +1 on mountain spaces.<br><i>Ability</i>: If Poy is revealed by a piece with Distance Strike, Poy is not destroyed. Instead, destroy the piece with Distance Strike.","colour":"green","side":"good","expansion":false},
      {"name":"Grundin","power":"5","race":"ranger","abilities":"<i>Innate</i>: +2 on forest spaces.","colour":"green","side":"good","expansion":false},
      {"name":"Relfreod Archer","power":"4","race":"elf","abilities":"<i>Action</i>: Distance Strike","colour":"green","side":"good","expansion":false},
      {"name":"Dwarven Hero","power":"4","race":"dwarf","abilities":"<i>Action</i>: Surround","colour":"green","side":"good","expansion":false},
      {"name":"Bakus","power":"4","race":"dragon","abilities":"<i>Action</i>: Teleport","colour":"green","side":"good","expansion":false},
      {"name":"Tilloak Theugist","power":"3","race":"elf","abilities":"<i>Action</i>: Slashing<br><i>Action</i>: Charging","colour":"green","side":"good","expansion":false},
      {"name":"Dwarven Warrior","power":"3","race":"dwarf","abilities":"<i>Innate</i>: Dispel Magic","colour":"green","side":"good","expansion":false},
      {"name":"Strangling Vines","power":"3","race":"plantlife","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all peces that occupy forest spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","expansion":false},
      {"name":"Wood Elf","power":"2","race":"elf","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Slashing","colour":"green","side":"good","expansion":false},
      {"name":"Dwarven Scout","power":"2","race":"dwarf","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal any 2 of your opponent's pieces.","colour":"green","side":"good","expansion":false},
      {"name":"Flood bringer","power":"2","race":"plantlife","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all pieces adjacent to water spaces. Destroy any one non-stationary piece revealed.","colour":"green","side":"good","expansion":false},
      {"name":"Elven Assassin","power":"1","race":"elf","abilities":"<i>Action</i>: Reveal any piece up to 2 spaces away. If that piece has a base strenth of 10, destroy it. If the revealed piece is anything but a base strength 10, destroy Elven Assassin.","colour":"green","side":"good","expansion":false},
      {"name":"Clevut","power":"1","race":"doppelganger","abilities":"<i>Innate</i>: Cannot attack<br><i>Ability</i>: If Clevut is attacked, destroy hm and take control of the attacking piece. Place the piece on the space that Clevut occupied.","colour":"green","side":"good","expansion":false},
      {"name":"Quicksand","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Quicksand is attacked, destroy it and its attacker.<br><i>Death Curse</i>: when this Death Curse ends, reveal all pieces on march spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","expansion":false},
      {"name":"Earthquake","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Earthquake is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, reveal all pices on plains spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","expansion":false},
      {"name":"Eruption","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Eruption is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, reveal all pices on mountain spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","expansion":false},
      {"name":"Dwaren Ambush","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Dwarven Ambush is attacked, destroy it and its attacker. You may then move and reveal any living Dwarf under your control to the space Dwarven Ambush occupied.","colour":"green","side":"good","expansion":false},
      {"name":"Elven Ambush","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Elven Ambush is attacked, destroy it and its attacker. You may then move and reveal any living Elf under your control to the space Elven Ambush occupied.","colour":"green","side":"good","expansion":false},
      {"name":"Woodland tower","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Woodland Tower to force an opponent to reveal his/her castle","colour":"green","side":"good","expansion":false},
      {"name":"Guarded Fortress","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Guarded Fortress to reveal any adjacent piece. If the revealed piece's base strength is 4 or less, destroy that piece","colour":"green","side":"good","expansion":false},
      {"name":"Sir Urgwaine","power":"10","race":"paladin","abilities":"<i>Ability</i>: Reveal Sir Urgwaine and one Paladin adjacent to Sir Urgwaine to give that Paladin +1 until the end of the turn. Use this ability only once per turn.","colour":"gold","side":"good","expansion":false},
      {"name":"Saravannus","power":"10","race":"wizard","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all pieces on a terrain of your choice.","colour":"gold","side":"good","expansion":false},
      {"name":"Tiera","power":"9","race":"cleric","abilities":"<i>Innate</i>: -5 on marsh spaces.<br><i>Innate</i>: -5 on forest spaces.<br><i>Innate</i>: After Tiera successfully attacks, force an oppenent to choose and destroy any piece under his/her control.","colour":"gold","side":"good","expansion":false},
      {"name":"Sir Gilbert","power":"9","race":"paladin","abilities":"<i>Death Curse</i>: When this Death Curse ends, place any destroyed gold piece with base power of 6 or lower on an empty town space.","colour":"gold","side":"good","expansion":false},
      {"name":"Oreld the Deliverer","power":"8","race":"wizard","abilities":"<i>Ability</i>: At the end of your turn, you may reveal and destroy Oreld the Deliverer to take another turn.","colour":"gold","side":"good","expansion":false},
      {"name":"Craglor","power":"8","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Quickness","colour":"gold","side":"good","expansion":false},
      {"name":"Gold Knight","power":"8","race":"paladin","abilities":"<i>Innate</i>: +1 againist red pieces.","colour":"gold","side":"good","expansion":false},
      {"name":"Lamorak","power":"7","race":"wizard","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"gold","side":"good","expansion":false},
      {"name":"Hillstone Priest","power":"7","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"gold","side":"good","expansion":false},
      {"name":"Gray Knight","power":"7","race":"paladin","abilities":"<i>Innate</i>: +1 againist red pieces.<br><i>Action</i>: Quickness","colour":"gold","side":"good","expansion":false},
      {"name":"Loovius","power":"6","race":"wizard","abilities":"<i>Action</i>: Slashing","colour":"gold","side":"good","expansion":false},
      {"name":"Humble Clergy","power":"6","race":"cleric","abilities":"<i>Death Curse</i>: All pieces with a base strength of 2 get +6","colour":"gold","side":"good","expansion":false},
      {"name":"Crailton Martyr","power":"6","race":"paladin","abilities":"<i>Ability</i>: After Crailton Martyr makes a successful attack, you may destroy him to place one of your destroyed gold pieces on the space that Crailton Martyr occupied.","colour":"gold","side":"good","expansion":false},
      {"name":"Redillian Sage","power":"5","race":"wizard","abilities":"<i>Innate</i>: After Redillian Sage has successfully attacked, force an opponent to choose and destroy one piece under his/her control<br><i>Action</i>: Slashing","colour":"gold","side":"good","expansion":false},
      {"name":"Hillstone Curate","power":"5","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"gold","side":"good","expansion":false},
      {"name":"Holy Knight","power":"5","race":"paladin","abilities":"<i>Innate</i>: +4 on town spaces.<br><i>Action</i>: Quickness","colour":"gold","side":"good","expansion":false},
      {"name":"Redillian Evoker","power":"4","race":"wizard","abilities":"<i>Action</i>: Charging<br><i>Death Curse</i>: All Wizard pieces get +1.","colour":"gold","side":"good","expansion":false},
      {"name":"Noble Cleric","power":"4","race":"cleric","abilities":"<i>Ability</i>: After Noble Cleric makes a successful attack, yu may destroy Noble cleric to place one ofyour previously destroyed pieces on the space that Novle Clice occpied.","colour":"gold","side":"good","expansion":false},
      {"name":"Ulaniva Crusader","power":"4","race":"paladin","abilities":"<i>Innate</i>: +2 on desert spaces.<br><i>Action</i>: Move from desert to desert space.","colour":"gold","side":"good","expansion":false},
      {"name":"Pearl Wizard","power":"3","race":"wizard","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"gold","side":"good","expansion":false},
      {"name":"Jillus","power":"3","race":"cleric","abilities":"<i>Death Curse</i>: All Clerics gain Dispel Magic","colour":"gold","side":"good","expansion":false},
      {"name":"Ulaniva Defender","power":"3","race":"paladin","abilities":"<i>Innate</i>: +3 on desert spaces.<br><i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"gold","side":"good","expansion":false},
      {"name":"Jenzik","power":"2","race":"wizard","abilities":"<i>Action</i>: Teleport","colour":"gold","side":"good","expansion":false},
      {"name":"Hillstone Acolyte","power":"2","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Charging","colour":"gold","side":"good","expansion":false},
      {"name":"Urgwaine's Knights","power":"2","race":"paladin","abilities":"<i>Ability</i>: Reveal and destroy Urgwaine's Knights to give anadjacent Paladin +2 until the end of the turn. Reveal the adjacent Paladin.","colour":"gold","side":"good","expansion":false},
      {"name":"Psychic Devourer","power":"1","race":"wizard","abilities":"<i>Innate</i>: If Psychic Devourer attacks, guess the name of the defending piece. If you are correct,that piece and Psychic Devourer are destroyed. If you are wrong, destroy Psychic Devourer.","colour":"gold","side":"good","expansion":false},
      {"name":"Reb the Zombie Slayer","power":"1","race":"cleric","abilities":"<i>Innate</i>: If Reb attacks a piece with a base strength of 10, that piece is destroyed.<br><i>Innate</i>: If Reb attacks any Zombie, destroy that Zombie.","colour":"gold","side":"good","expansion":false},
      {"name":"Holy Light","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Holy Light is attacked, destroy it and its attacker.","colour":"gold","side":"good","expansion":false},
      {"name":"Holy Vision","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannont attack<br><i>Magic</i>: If Holy vision is attacked, it is destroyed and you may look at any 2 pieces.","colour":"gold","side":"good","expansion":false},
      {"name":"Exorcism","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Exorcim is attacked, destroy it and its attacker. Then you may reveal any one opponent's piece on any marsh space. If the revealed piece is red, it is destroyed.","colour":"gold","side":"good","expansion":false},
      {"name":"Alter of Deliverance","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Alter of Deliverance is attacked, destroy it and its attacker. Then force an oppenent to choose and destroy one piece under his/her control.","colour":"gold","side":"good","expansion":false},
      {"name":"Cleansing Mist","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot Attack<br><i>Action</i>: Reveal and destroy Cleansing Mist to force an opponent to choose and destroy any piece under his/her control.<br><i>Magic</i>: If Cleansing Mist is attacked, destroy it and its attacker.","colour":"gold","side":"good","expansion":false},
      {"name":"Urgwaine's Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Urgwaine's Castle to give Sir Urgwaine or Urgwaine's Knights Quickness action until the end of the turn.","colour":"gold","side":"good","expansion":false},
      {"name":"Mirage Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Mirage Castle to place it on any empty desert space. this may be done only once per game.","colour":"gold","side":"good","expansion":false},
      {"name":"Uaivad","power":"10","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: All Dragons get +1.","colour":"blue","side":"good","expansion":false},
      {"name":"Elementus the Airlord","power":"10","race":"spirit","abilities":"<i>Ability</i>: Reveal Elementus to give any spirit Flying Action until the end of the turn.","colour":"blue","side":"good","expansion":false},
      {"name":"Electibra","power":"9","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: All pieces with Flying Action get +1.","colour":"blue","side":"good","expansion":false},
      {"name":"Almaetis","power":"9","race":"spirit","abilities":"<i>Ability</i>: Reveal and destroy Almaetis to place any piece you control on any empty forest space. Reveal the placed piece.","colour":"blue","side":"good","expansion":false},
      {"name":"Dagin Genie","power":"8","race":"spirit","abilities":"<i>Innate</i>: +1 on desert spaces.","colour":"blue","side":"good","expansion":false},
      {"name":"Aras","power":"8","race":"angel","abilities":"<i>Action</i>: Vision<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Tael","power":"8","race":"chimera","abilities":"<i>Innate</i>: +1 on mountain spaces.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Wrath","power":"7","race":"spirit","abilities":"<i>Innate</i>: Berzerk<br><i>Action</i>: Switching","colour":"blue","side":"good","expansion":false},
      {"name":"Armagged","power":"7","race":"angel","abilities":"<i>Innate</i>: After Armagged has attacked successfully, reveal all adjacent pieces.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Lord of Eagles","power":"7","race":"eagle","abilities":"<i>Ability</i>: You may reveal all pieces Lord of Eagles flies over.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Forest","power":"6","race":"spirit","abilities":"<i>Action</i>: Move from forest to forest space.","colour":"blue","side":"good","expansion":false},
      {"name":"Fray","power":"6","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Reveal Fray to move up to 3 non-stationary blue pieces to any empty spaces adjacent to Fray. Reveal all pieces moved.","colour":"blue","side":"good","expansion":false},
      {"name":"Vinin Satyr","power":"6","race":"satyr","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Sea","power":"5","race":"spirit","abilities":"<i>Action</i>: Move from adjacent water to adjacent water space.","colour":"blue","side":"good","expansion":false},
      {"name":"Montika","power":"5","race":"ram","abilities":"<i>Action</i>: slashing","colour":"blue","side":"good","expansion":false},
      {"name":"Dancing Sword","power":"5","race":"weapon","abilities":"<i>Ability</i>: Reveal and destroy Dancing Sword to give an adjacent piece +2 unitl the end of the turn. Reveal the adjacent piece affected.","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Negation","power":"4","race":"spirit","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Switching","colour":"blue","side":"good","expansion":false},
      {"name":"Gallat","power":"4","race":"angel","abilities":"<i>Innate</i>: If Gallat is revealed by a piece with Vision Action, the piece with Vision Action is destroyed.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Tar'n","power":"4","race":"centaur","abilities":"<i>Ability</i>: If Tar'n is adjacent to Tiera, reveal both pieces to give Tiera +1 until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Vision","power":"3","race":"spirit","abilities":"<i>Action</i>: Vision","colour":"blue","side":"good","expansion":false},
      {"name":"Angellin","power":"3","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Teleport","colour":"blue","side":"good","expansion":false},
      {"name":"Delik","power":"3","race":"unicorn","abilities":"<i>Ability</i>: If Delik is adjacent to Aubrey, reveal both pieces to give Aubrey +1 until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Desert","power":"2","race":"spirit","abilities":"<i>Innate</i>: +3 on desert spaces.<br><i>Action</i>: Move from desert to desert space.","colour":"blue","side":"good","expansion":false},
      {"name":"Julisa","power":"2","race":"dragon","abilities":"<i>Action</i>: Slashing<br><i>Magic</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Forillian Panther","power":"2","race":"panther","abilities":"<i>Ability</i>: Reveal all pieces Forillian Panther flies over.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":false},
      {"name":"Spirit of Justice","power":"1","race":"spirit","abilities":"<i>Innate</i>: If Spirit of Justice attacks or is attacked by a base strength 10 piece, the base strength piece is destroyed.<br><i>Action</i>: Switching","colour":"blue","side":"good","expansion":false},
      {"name":"Placton","power":"1","race":"sphinx","abilities":"<i>Innate</i>: If Placton attacks or is attacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Action</i>: Quickness","colour":"blue","side":"good","expansion":false},
      {"name":"Haunted Grove","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Haunted Grove is attacked, destroy it and its attacker. If attacked on a forest space, reveal all pieces on all forest spaces. Destroy all non-stationary purple pieces that were revealed.","colour":"blue","side":"good","expansion":false},
      {"name":"Anti-Purple Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Purple Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All purple pieces get -1.","colour":"blue","side":"good","expansion":false},
      {"name":"Anti-Silver Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Silver Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All silver pieces get -1.","colour":"blue","side":"good","expansion":false},
      {"name":"Anti-Red Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Red Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All red pieces get -1.","colour":"blue","side":"good","expansion":false},
      {"name":"Dragon Talisman","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Dragon Talisman is attacked, destroy it. If all town spaces are empty, place any destroyed Dragon on an empty town space under your control.","colour":"blue","side":"good","expansion":false},
      {"name":"Wind Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal this piece once per game to move Wind Castle to any empty adjacent space.","colour":"blue","side":"good","expansion":false},
      {"name":"Cloud Citadel","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Cloud Citadel and a non-stationary piece adjacent to Cloud Citadel to give the non-stationary piece Flying Action until the end of the turn.","colour":"blue","side":"good","expansion":false},
      {"name":"Kralc","power":"10","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Reveal Kralc to force an opponent to reveal one piece on a town space of your choice.","colour":"silver","side":"evil","expansion":false},
      {"name":"Ultimadus","power":"10","race":"titan","abilities":"<i>Death Curse</i>: All Titans gain Berserk.","colour":"silver","side":"evil","expansion":false},
      {"name":"Namhel","power":"9","race":"giant","abilities":"<i>Ability</i>: Reveal Namhel and an adjacent Giant to give the adjacent Giant +1 until the end of the turn. Use this ability only once per turn. Reveal the Giant piece affected.","colour":"silver","side":"evil","expansion":false},
      {"name":"Crevcor","power":"9","race":"ogre","abilities":"<i>Death Curse</i>: All Silver pieces get +1.","colour":"silver","side":"evil","expansion":false},
      {"name":"Evit","power":"8","race":"titan","abilities":"<i>Ability</i>: At the end of your turn, you may reveal and destroy Evit to take another turn.","colour":"silver","side":"evil","expansion":false},
      {"name":"Girr","power":"8","race":"giant","abilities":"<i>Action</i>: Vision","colour":"silver","side":"evil","expansion":false},
      {"name":"Cave Beast","power":"8","race":"beast","abilities":"<i>Action</i>: Reveal Cave Beast (while on a Mountain space) to move it to any empty Mountain space.","colour":"silver","side":"evil","expansion":false},
      {"name":"Akillon","power":"7","race":"titan","abilities":"<i>Innate</i>: Berzerk","colour":"silver","side":"evil","expansion":false},
      {"name":"Great Shaman","power":"7","race":"giant","abilities":"<i>Action</i>: Reveal and destroy Great Shaman to place any number of destroyed Silver Magic Pieces onto any empty spaces.","colour":"silver","side":"evil","expansion":false},
      {"name":"Medusa","power":"7","race":"gorgon","abilities":"<i>Action</i>: Reveal and destroy Medusa to destroy all adjacent pieces.","colour":"silver","side":"evil","expansion":false},
      {"name":"Golladus","power":"6","race":"titan","abilities":"<i>Action</i>: Charging","colour":"silver","side":"evil","expansion":false},
      {"name":"Crush","power":"6","race":"giant","abilities":"<i>Innate</i>: Berzerk","colour":"silver","side":"evil","expansion":false},
      {"name":"Helcar","power":"6","race":"beast","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: flying","colour":"silver","side":"evil","expansion":false},
      {"name":"Neptillion","power":"5","race":"titan","abilities":"<i>Innate</i>: +2 while adjacent to a water space.","colour":"silver","side":"evil","expansion":false},
      {"name":"Rock Giant","power":"5","race":"giant","abilities":"<i>Action</i>: Distance Strike","colour":"silver","side":"evil","expansion":false},
      {"name":"Enchanted Shield","power":"5","race":"weapon","abilities":"<i>Ability</i>: Reveal and destroy Enchanted Shield to give an adjacent piece +2 until the end of the turn. Reveal the adjacent piece.","colour":"silver","side":"evil","expansion":false},
      {"name":"Colossor","power":"4","race":"titan","abilities":"<i>Innate</i>: +3 against pieces with Flying Action.<br><i>Ability</i>: If Colossor is revealed by a piece with Distance Strike, Colossor is not destroyed. Instead, destroy the piece with Distance Strike.","colour":"silver","side":"evil","expansion":false},
      {"name":"Mist Giant","power":"4","race":"giant","abilities":"<i>Innate</i>: +2 while adjacent to a water Space.","colour":"silver","side":"evil","expansion":false},
      {"name":"H'caor Ogre Mage","power":"4","race":"ogre","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Reveal H'caor (while on a Mountain space) to move him to any other empty mountain space.","colour":"silver","side":"evil","expansion":false},
      {"name":"Marr","power":"3","race":"titan","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Charging","colour":"silver","side":"evil","expansion":false},
      {"name":"Dumes","power":"3","race":"giant","abilities":"<i>Ability</i>: Dumes may attack a piece under your control.<br><i>Action</i>: Charging","colour":"silver","side":"evil","expansion":false},
      {"name":"Linghorn","power":"3","race":"minotaur","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"silver","side":"evil","expansion":false},
      {"name":"Smektor","power":"2","race":"titan","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"silver","side":"evil","expansion":false},
      {"name":"Uzelis","power":"2","race":"giant","abilities":"<i>Innate</i>: If Uzelis attacks a Sprite piece, destroy the Sprite piece.","colour":"silver","side":"evil","expansion":false},
      {"name":"Gnarak","power":"2","race":"beast","abilities":"<i>Innate</i>: +7 on Mountain Spaces.<br><i>Innate</i>: After Gnarak successfully attacks, you must choose an opponent to move Gnarak onto any empty space.","colour":"silver","side":"evil","expansion":false},
      {"name":"Gwarf","power":"1","race":"giant","abilities":"<i>Innate</i>: If Gwarf attacks a piece with a base strength of 10, the attacked piece is destroyed.","colour":"silver","side":"evil","expansion":false},
      {"name":"Cerebin","power":"1","race":"beast","abilities":"<i>Innate</i>: If Cerebin attacks a piece with a base strength of 10, the attacked piece is destroyed.<br><i>Action</i>: Charging","colour":"silver","side":"evil","expansion":false},
      {"name":"Lightning Bolt","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Lightning Bolt is attacked, destroy it and its attacker. Any pieces on the 2 spaces in front of Lightning Bolt (non-label side) are also destroyed.","colour":"silver","side":"evil","expansion":false},
      {"name":"Ground Lightning","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Ground Lightning is attacked, destroy it and its attacker. If the attacker has Flying, you may destroy any one additional piece on the same terrain as Ground Lightning.","colour":"silver","side":"evil","expansion":false},
      {"name":"Living Statue","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack.<br><i>Magic</i>: If Living Statue is attacked, destroy it and its attacker.","colour":"silver","side":"evil","expansion":false},
      {"name":"Eternal Idol","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Eternal Idol is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, place Eternal Idol on any empty space.","colour":"silver","side":"evil","expansion":false},
      {"name":"Wheel of Energy","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal and destroy Wheel of Energy to give an adjacent piece +1 until the end of the turn. Reveal the adjacent piece affected.<br><i>Magic</i>: If Wheel of Energy is attacked, destroy it and its attacker.","colour":"silver","side":"evil","expansion":false},
      {"name":"Titan Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Titan Castle to give an adjacent Titan +1 until the end of the turn. Use this ability once per turn. Reveal the Titan piece affected.","colour":"silver","side":"evil","expansion":false},
      {"name":"Ogre Fort","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Ogre Fort to reveal and place an Ogre you control on any empty Mountain space adjacent to Ogre Fort.","colour":"silver","side":"evil","expansion":false},
      {"name":"Oppolifnas","power":"10","race":"dragon","abilities":"<i>Ability</i>: Reveal Oppolifnas and an adjacent piece you control to give the adjacent piece Flying Action until the end of the turn.<br><i>Action</i>: Flying","colour":"red","side":"evil","expansion":false},
      {"name":"Lord Esenwein","power":"10","race":"vampire","abilities":"<i>Ability</i>: Reveal Lord Esenwein and any Vampire to give that Vampire Flying Action until the end of the turn.","colour":"red","side":"evil","expansion":false},
      {"name":"Lord of Bones","power":"9","race":"skeleton","abilities":"<i>Ability</i>: Reveal Lord of Bones and any Skeleton to give that Skeleton Charging Action until the end of the turn.","colour":"red","side":"evil","expansion":false},
      {"name":"Lord of the Dead","power":"9","race":"zombie","abilities":"<i>Ability</i>: After Lord of the Dead successfully attacks, you may put one destroyed Zombie back into play on any empty Marsh space. If there are no empty Marsh spaces, you cannot return a destroyed Zombie to the board.","colour":"red","side":"evil","expansion":false},
      {"name":"Daemin","power":"8","race":"vampire","abilities":"<i>Innate</i>: If Daemin attacks a piece with a base strength of 2, 3, 4 or 5, put that piece into the space from which Daemin attacked. The attacked piece is now under your control.","colour":"red","side":"evil","expansion":false},
      {"name":"Skeleton Horde","power":"8","race":"skeleton","abilities":"<i>Innate</i>: +1 on marsh spaces.","colour":"red","side":"evil","expansion":false},
      {"name":"Mummy","power":"8","race":"zombie","abilities":"<i>Innate</i>: +1 on desert spaces.","colour":"red","side":"evil","expansion":false},
      {"name":"Renil","power":"7","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"red","side":"evil","expansion":false},
      {"name":"Moridium","power":"7","race":"angel","abilities":"<i>Innate</i>: If Moridium is revealed by a piece with the Vision Action, the piece with Vision is destroyed.<br><i>Action</i>: Flying","colour":"red","side":"evil","expansion":false},
      {"name":"Murkis","power":"7","race":"zombie","abilities":"<i>Action</i>: Reveal Murkis (while on a Marsh space) to move it to any empty Marsh space.","colour":"red","side":"evil","expansion":false},
      {"name":"Keelian","power":"6","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"red","side":"evil","expansion":false},
      {"name":"Scythe","power":"6","race":"skeleton","abilities":"<i>Innate</i>: +2 against pieces with Flying Action.<br><i>Action</i>: Flying","colour":"red","side":"evil","expansion":false},
      {"name":"Lingering Death","power":"6","race":"zombie","abilities":"<i>Action</i>: Reveal Lingering Death (while on a Marsh space) to move it to any empty Marsh space.","colour":"red","side":"evil","expansion":false},
      {"name":"Crimson","power":"5","race":"werewolf","abilities":"<i>Action</i>: Slashing","colour":"red","side":"evil","expansion":false},
      {"name":"Sinakus","power":"5","race":"skeleton","abilities":"<i>Innate</i>: +1 on marsh spaces.<br><i>Action</i>: Quickness","colour":"red","side":"evil","expansion":false},
      {"name":"Giant Zombie Rat","power":"5","race":"zombie","abilities":"<i>Innate</i>: +2 on marsh spaces.","colour":"red","side":"evil","expansion":false},
      {"name":"Sarro","power":"4","race":"vampire","abilities":"<i>Action</i>: Teleport","colour":"red","side":"evil","expansion":false},
      {"name":"Kutbone","power":"4","race":"skeleton","abilities":"<i>Action</i>: Distance Strike","colour":"red","side":"evil","expansion":false},
      {"name":"Plague Bearer","power":"4","race":"zombie","abilities":"<i>Innate</i>: +7 on town spaces.","colour":"red","side":"evil","expansion":false},
      {"name":"Dark Witch","power":"3","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"red","side":"evil","expansion":false},
      {"name":"Bone Legion","power":"3","race":"skeleton","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"red","side":"evil","expansion":false},
      {"name":"Crazed Terror","power":"3","race":"zombie","abilities":"<i>Ability</i>: Reveal and destroy Crazed Terror to give an adjacent Zombie +2 until the end of the turn. Reveal the Zombie piece affected.","colour":"red","side":"evil","expansion":false},
      {"name":"Bloodsucker","power":"2","race":"vampire","abilities":"<i>Ability</i>: Reveal and destroy a piece you control adjacent to Bloodsucker. Add the destroyed piece's current strength to Bloodsucker's current strength. Bloodsucker's increased strength lasts until the end of the turn.","colour":"red","side":"evil","expansion":false},
      {"name":"Skeleton Warlock","power":"2","race":"skeleton","abilities":"<i>Action</i>: Quickness<br><i>Death Curse</i>: : All Skeleton pieces get +1.","colour":"red","side":"evil","expansion":false},
      {"name":"Gloomis","power":"2","race":"zombie","abilities":"<i>Action</i>: Reveal and destroy Gloomis to force your opponent to choose and destroy a piece under his/her control.","colour":"red","side":"evil","expansion":false},
      {"name":"Wascyo","power":"1","race":"vampire","abilities":"<i>Innate</i>: : If Wascyo attacks or is attacked by a piece with a base strength of 10, the base strength 10 piece is destroyed.","colour":"red","side":"evil","expansion":false},
      {"name":"Jezrak","power":"1","race":"skeleton","abilities":"<i>Innate</i>: If Jezrak attacks a piece with a base strength of 9 or 10, the attacked piece is destroyed.","colour":"red","side":"evil","expansion":false},
      {"name":"Zombie Grave","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: : If Zombie Grave is attacked, destroy it and its attacker. Replace Zombie Grave with any destroyed Zombie under your control. (The destroyed Zombie piece has been brought back to life.)","colour":"red","side":"evil","expansion":false},
      {"name":"Skeleton Grave","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Skeleton Grave is attacked, destroy it and its attacker. Replace Skeleton Grave with any destroyed Skeleton. The destroyed Skeleton piece has been brought back to life.","colour":"red","side":"evil","expansion":false},
      {"name":"Decay","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: : Reveal and destroy Decay to destroy all adjacent pieces.<br><i>Magic</i>: : If Decay is attacked, destroy it and its attacker.","colour":"red","side":"evil","expansion":false},
      {"name":"Skull of Gorion","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Skull of Gorion is attacked, destroy it and its attacker. If the attacker is a Gold piece, you may destroy any piece on a Marsh space.","colour":"red","side":"evil","expansion":false},
      {"name":"Fire Wall","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: : Reveal and destroy Fire Wall to reveal an opponent's piece adjacent to Fire Wall. That piece gets -2 until the end of the turn.<br><i>Magic</i>: : If Fire Wall is attacked, destroy it and its attacker.","colour":"red","side":"evil","expansion":false},
      {"name":"Rancid Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Rancid Castle to give an adjacent Red piece +1 until the end of the turn. Use this ability only once per turn. Reveal the Red piece affected.","colour":"red","side":"evil","expansion":false},
      {"name":"Bone Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal to give an adjacent Skeleton Slashing Action until the end of the turn.","colour":"red","side":"evil","expansion":false},
      {"name":"Bremmuk","power":"10","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 8) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","expansion":false},
      {"name":"Queen Kiova","power":"10","race":"insectoid","abilities":"<i>Action</i>: Reveal Queen Kiova to place up to 3 Insectoid pieces you control onto any empty spaces adjacent to Queen Kiova. Reveal all Insectoid pieces placed.","colour":"purple","side":"evil","expansion":false},
      {"name":"Gangis Wind","power":"9","race":"mold","abilities":"<i>Action</i>: Reveal Gangis Wind (while on a Town space) to move it to any empty Town space.","colour":"purple","side":"evil","expansion":false},
      {"name":"Frinhorn","power":"9","race":"dragon","abilities":"<i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Flying","colour":"purple","side":"evil","expansion":false},
      {"name":"Mrmrm","power":"8","race":"insectoid","abilities":"<i>Innate</i>: +1 against pieces with Flying.","colour":"purple","side":"evil","expansion":false},
      {"name":"Oeroed","power":"8","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 6) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","expansion":false},
      {"name":"Garpus","power":"8","race":"worm","abilities":"<i>Action</i>: Reveal Garpus and your Castle to move Garpus to any empty space adjacent to your Castle.","colour":"purple","side":"evil","expansion":false},
      {"name":"Yorkus","power":"7","race":"insectoid","abilities":"<i>Action</i>: Reveal Yorkus (while on a desert space) to move him to any empty desert space.","colour":"purple","side":"evil","expansion":false},
      {"name":"Bactillion","power":"7","race":"mold","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Flying","colour":"purple","side":"evil","expansion":false},
      {"name":"Perplexon","power":"7","race":"mutant","abilities":"<i>Innate</i>: After Perplexon successfully attacks, choose an opponent to select one piece under his/her control. Then, you choose one piece under your control. The 2 pieces switch places without either piece being revealed. Ownership of the pieces does not change.","colour":"purple","side":"evil","expansion":false},
      {"name":"Accissejo","power":"6","race":"insectoid","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Slashing","colour":"purple","side":"evil","expansion":false},
      {"name":"Slud","power":"6","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 4) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","expansion":false},
      {"name":"yarbu the Magic Eater","power":"6","race":"worm","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"purple","side":"evil","expansion":false},
      {"name":"Hades Giant","power":"5","race":"insectoid","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"purple","side":"evil","expansion":false},
      {"name":"Smerdim","power":"5","race":"mold","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Innate</i>: Berzerk","colour":"purple","side":"evil","expansion":false},
      {"name":"Lizarkus","power":"5","race":"reptillian","abilities":"<i>Innate</i>: -2 on desert spaces.<br><i>Action</i>: Reveal Lizarkus (while adjacent to a water space) to move him to any empty space adjacent to any water space.","colour":"purple","side":"evil","expansion":false},
      {"name":"Marbas","power":"4","race":"insectoid","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Reveal and destroy Marbas to reveal any one opponent's piece.","colour":"purple","side":"evil","expansion":false},
      {"name":"Spitting Mushrooms","power":"4","race":"mold","abilities":"<i>Action</i>: Distance Strike","colour":"purple","side":"evil","expansion":false},
      {"name":"Parasitix","power":"4","race":"worm","abilities":"<i>Action</i>: Reveal and destroy Parasitix to force an opponent to choose any piece under his/her control. You gain control of that piece.","colour":"purple","side":"evil","expansion":false},
      {"name":"Kzz't","power":"3","race":"insectoid","abilities":"<i>Innate</i>: +3 against pieces with Flying Action.<br><i>Action</i>: Flying","colour":"purple","side":"evil","expansion":false},
      {"name":"Slime of Bremmuk","power":"3","race":"mold","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Charging","colour":"purple","side":"evil","expansion":false},
      {"name":"Silwom the Confusing","power":"3","race":"mutant","abilities":"<i>Innate</i>: After Silwon the Confusing successfully attacks, you gain control of any one opponent's piece adjacent to Silwon. (Your choice.)","colour":"purple","side":"evil","expansion":false},
      {"name":"Nazint","power":"2","race":"insectoid","abilities":"<i>Ability</i>: Reveal and destroy Nazint to give an adjacent Purple piece +1 until the end of the turn. Reveal the Purple piece affected.","colour":"purple","side":"evil","expansion":false},
      {"name":"Foulis","power":"2","race":"mold","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Innate</i>: Dispel Magic","colour":"purple","side":"evil","expansion":false},
      {"name":"Nosimaj","power":"2","race":"mutant","abilities":"<i>Death Curse</i>: All non-stationary pieces gain Flying Action.","colour":"purple","side":"evil","expansion":false},
      {"name":"Helliton","power":"1","race":"insectoid","abilities":"<i>Innate</i>: +4 on mountain space.<br><i>Ability</i>: If Helliton attacks a piece with a base strength of 9 or 10, that piece is destroyed.","colour":"purple","side":"evil","expansion":false},
      {"name":"Demarn the Putrid","power":"1","race":"mold","abilities":"<i>Innate</i>: If Demarn is revealed by a piece with Distance Strike, Demarn is not destroyed. Instead, destroy the revealing piece that has Distance Strike.<br><i>Ability</i>: If Demarn attacks a piece with a base strength of 10, that piece is destroyed.","colour":"purple","side":"evil","expansion":false},
      {"name":"Paranos","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Paranos is attacked, destroy Paranos and its attacker.","colour":"purple","side":"evil","expansion":false},
      {"name":"Spore of Parasitix","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Action</i>: Reveal and destroy Spore of Parasitix to force an opponent to choose any piece under his/her control. Gain control of the chosen piece.<br><i>Magic</i>: If Spore of Parasitix is attacked, destroy it and its attacker.","colour":"purple","side":"evil","expansion":false},
      {"name":"Flit Spore","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Flit Spore is attacked, destroy it and its attacker.<br><i>Death Curse</i>: All Purple pieces get +1.","colour":"purple","side":"evil","expansion":false},
      {"name":"Fungus of Bremmuk","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Fungus of Bremmuk is attacked, destroy it. Then choose an opponent to reveal all Magic pieces under his/her control.","colour":"purple","side":"evil","expansion":false},
      {"name":"Larva","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Larva is attacked, destroy Larva and its attacker.<br><i>Death Curse</i>: All Insectoid pieces get +1.","colour":"purple","side":"evil","expansion":false},
      {"name":"The Hidden Hive","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal The Hidden Hive to place it on any empty Forest space. Use this action only once per game.","colour":"purple","side":"evil","expansion":false},
      {"name":"Infested Nest","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Infested nest to give an adjacent Purple piece +1. Use this ability only once per turn. Reveal the Purple piece affected.","colour":"purple","side":"evil","expansion":false},
      {"name":"Delmikra","power":"10","race":"spirit","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: When this Death Curse ends, force an opponent to choose 2 pieces under his/her control. You gain control of the chosen pieces.","colour":"blue","side":"good","expansion":false},
      {"name":"Dalious","power":"10","race":"ogre","abilities":"<i>Death Curse</i>: When this Death Curse ends, all players must reveal and destroy all Magic pieces under their control. The magic spells of those pieces are not cast.","colour":"silver","side":"evil","expansion":false},
      {"name":"Celams","power":"10","race":"dragon","abilities":"<i>Ability</i>: Reveal Celams when a piece flies over her to destroy the piece that flew over Celams.<br><i>Action</i>: Flying","colour":"gold","side":"good","expansion":false},
      {"name":"Noslrac","power":"10","race":"mutant","abilities":"<i>Ability</i>: Reveal Noslrac and an adjacent Mutant to give that Mutant +2 until the end of the turn. Use this ability only once per turn.<br><i>Death Curse</i>: When this Death Curse ends, chosen opponent destroys 5 pieces under his control simultaneously. Then choose and destroy 3 pieces under your control simultaneously.","colour":"purple","side":"evil","expansion":false},
      null,
      null,
      {"name":"Galrien","power":"10","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: When this Death Curse ends, Place any blue destroyed piece with a base strength of 9 or lower on an empty town space.","colour":"blue","side":"good","expansion":true},
      {"name":"Minchu","power":"9","race":"dragon","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Reveal Minchu to regain control of a piece adjacent to Minchu. The adjacent piece must be a beige army piece that an opponent has previously taken control of.<br><i>Action</i>: Reveal Minchu (while on a town space) to move him to any empty town space.","colour":"blue","side":"good","expansion":true},
      {"name":"Zanofor Bowdode","power":"8","race":"wizard","abilities":"<i>Innate</i>: Conversion. When constructing your army, you may build your army with Zanofor and 5 pieces with a base power of 7 instead of 3 pieces with a base power of 8 and 3 pieces with a base power of 7.<br><i>Innate</i>: +1 on town spaces.","colour":"blue","side":"good","expansion":true},
      {"name":"Adellin","power":"7","race":"angel","abilities":"<i>Innate</i>: Dispel Magic<br><i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Quickness","colour":"blue","side":"good","expansion":true},
      {"name":"Concan","power":"6","race":"dragon","abilities":"<i>Action</i>: Assassination. Reveal and destroy Concan to force an opponent to reveal and destroy all pieces he or she controls with the name Evit.<br><i>Action</i>: Flying","colour":"blue","side":"good","expansion":true},
      {"name":"Wyatt Yarg","power":"5","race":"wizard","abilities":"<i>Innate</i>: +2 on town spaces.<br><i>Action</i>: Conversion. When constructing your army, you may build your army with Wyatt Yarg and 5 pieces with a base power of 4 instead of 3 pieces with a base power of 5 and 3 pieces with a base power of 4.","colour":"blue","side":"good","expansion":true},
      {"name":"Angela's Amulet","power":"4","race":"artifact","abilities":"<i>Ability</i>: Reveal Angela's Amulet and an adjacent Angel to give the adjacent Angel +1 until the end of the turn. Use this ability only once per turn.<br><i>Action</i>: Quickness","colour":"blue","side":"good","expansion":true},
      {"name":"Warbrin","power":"3","race":"dragon","abilities":"<i>Innate</i>: +8 against pieces with Berserk.<br><i>Innate</i>: +2 on forest spaces.<br><i>Death Curse</i>: When this death curse ends, reveal all pieces on town spaces. Destroy all non-stationary pieces revealed.","colour":"blue","side":"good","expansion":true},
      {"name":"Wizard's Familiar","power":"2","race":"familiar","abilities":"<i>Innate</i>: If Wizard's Familiar is attacked and destroyed, reveal all adjacent pieces. Any wizards revealed are destroyed.<br><i>Ability</i>: Reveal Wizard's Familiar and an adjacent Wizard to add the Familiar's current power to the Wizard until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","expansion":true},
      {"name":"Mystical Mirror","power":"1","race":"artifact","abilities":"<i>Innate</i>: If Mystical Mirror attacks or is attacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Action</i>: Assassination. Reveal and destroy Mystical Mirror to force an opponent to reveal and destroy all pieces he or she controls with the name Medusa.","colour":"blue","side":"good","expansion":true},
      {"name":"Galrien's Mist","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Galrien's Mist is attacked, destroy it. If the attacker's current strength is 7 or higher destroy it.","colour":"blue","side":"good","expansion":true},
      {"name":"Galrien's Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Galrien's Castle and a Galrien's Mist piece. Destroy the Galrien's Mist piece and place Galrien's Castle on the space Galrien's Mist occupied.","colour":"blue","side":"good","expansion":true},
      {"name":"Ursatoar","power":"10","race":"mutant","abilities":"<i>Action</i>: Reveal Ursatoar to choose and reveal any piece adjacent to Ursatoar. If the piece is a Magic piece, gain control of it. If it is any other type of piece, destroy Ursatoar.","colour":"purple","side":"evil","expansion":true},
      {"name":"Yeroms","power":"9","race":"worm","abilities":"<i>Death Curse</i>: All Worms gain Slashing Action","colour":"purple","side":"evil","expansion":true},
      {"name":"Sinnue","power":"8","race":"reptillian","abilities":"<i>Innate</i>: If Sinnue destroys a piece with a Death Curse, the Death Curse piece does not go into effect and is immediately put into the destroyed piece area.<br><i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Charging","colour":"purple","side":"evil","expansion":true},
      {"name":"Rekabevets","power":"7","race":"worm","abilities":"<i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Reveal and destroy Rekabevets to force an opponent to simultaneously destroy all pieces under his or her control with a base power of 2. Then destroy all pieces under your control with a base power of 2 simultaneously.","colour":"purple","side":"evil","expansion":true},
      {"name":"Lawok","power":"6","race":"mutant","abilities":"<i>Innate</i>: +1 against gold pieces.<br><i>Action</i>: Assassination. Reveal and destroy Lawok to force an opponent to reveal and destroy all pieces he or she controls with the name Oreld the Deliverer.<br><i>Action</i>: Slashing","colour":"purple","side":"evil","expansion":true},
      {"name":"Coyote","power":"5","race":"mutant","abilities":"<i>Action</i>: Evolution. Reveal and destroy Coyote while on a plains space to place any one of your destroyed pieces with a base power of 6 on the space that Coyote occupied.","colour":"purple","side":"evil","expansion":true},
      {"name":"Gallikon","power":"4","race":"worm","abilities":"<i>Action</i>: Vision<br><i>Death Curse</i>: All Worms gain Quickness Action.","colour":"purple","side":"evil","expansion":true},
      {"name":"Ilopanid","power":"3","race":"worm","abilities":"<i>Action</i>: Evolution. Reveal and destroy Ilopanid while on a plains space to place any one of your destroyed pieces with a base power of 4 on the space that Ilopanid occupied.","colour":"purple","side":"evil","expansion":true},
      {"name":"Oplit","power":"2","race":"worm","abilities":"<i>Innate</i>: Dispel Magic<br><i>Innate</i>: +9 against pieces with Berserk.<br><i>Action</i>: Charging","colour":"purple","side":"evil","expansion":true},
      {"name":"Vulad","power":"1","race":"worm","abilities":"<i>Innate</i>: If Vulad attacks or is atacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Death Curse</i>: All Worms pieces get +1.","colour":"purple","side":"evil","expansion":true},
      {"name":"Wonder Egg","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot Attack<br><i>Action</i>: Evolution. Reveal and destroy Wonder Egg while on a plains space to place any one of your destroyed pieces with a base power of 2 on the space that Wonder Egg occupied.<br><i>Magic</i>: If Wonder Egg is attacked, destroy Wonder Egg and its attacker.","colour":"purple","side":"evil","expansion":true},
      {"name":"Plattenuis","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Plattenuis(while on a plains space) to move a piece under your control adjcent to Plattenuis to any empty plains space.","colour":"purple","side":"evil","expansion":true}
    ],

    "powerquantities":{
      "C":1,
      "10":1,
      "9":1,
      "8":3,
      "7":3,
      "6":3,
      "5":3,
      "4":3,
      "3":3,
      "2":3,
      "1":1,
      "*":5
    },

    "getboxcoordinates":function(power,number){
      if(power=="C"){
        return {"x":0,"y":0};
      }
      else if(power=="10"){
        return {"x":1,"y":0};
      }
      else if(power=="9"){
        return {"x":2,"y":0};
      }
      else if(power=="8"){
        return {"x":3+number,"y":0};
      }
      else if(power=="1"){
        return {"x":0,"y":4};
      }
      else if(power=="*"){
        return {"x":1+number,"y":4};
      }
      else{
        return {"x":7-power,"y":1+number};
      }
    },

    "board":{},

    "armies":[],

    "revealedarmynumber":-1,

    "boardrotations":"default",

    "boardrotate":function(dimension,multiple,x,y){
      if(multiple<0){
        var boardwidth=legends.getdisplayedboardsize("x");
        var boardheight=legends.getdisplayedboardsize("y");
      }
      else{
        var boardwidth=legends.board.width;
        var boardheight=legends.board.height;
      }
      return [x,y,boardwidth-1-x,boardheight-1-y][(((legends.boardrotations*multiple+(dimension=="x"?0:1))%4)+4)%4];
    },

    "getdisplayedboardsize":function(dimension){
      return [legends.board.width,legends.board.height][(((legends.boardrotations+(dimension=="x"?0:1))%2)+2)%2];
    },

    "getpieces":function(armycode,side){
      var armyids=armycode.split(",");
      var armypieces={
        "C":[],
        "10":[],
        "9":[],
        "8":[],
        "7":[],
        "6":[],
        "5":[],
        "4":[],
        "3":[],
        "2":[],
        "1":[],
        "*":[]
      }
      if(armyids.length<30){
        return {"error":"not enough pieces in "+side+" army"};
      }
      else if(armyids.length>30){
        return {"error":"too many pieces in "+side+" army"};
      }
      else{
        for(var i=0;i<30;i++){
          if(!legends.piecedata[armyids[i]]){
            return {"error":"non-existent piece number "+armyids[i]+" in "+side+" army"};
          }
          else if(legends.piecedata[armyids[i]].side!=side){
            return {"error":legends.piecedata[armyids[i]].side+" piece number "+armyids[i]+" ("+legends.piecedata[armyids[i]].name+") in "+side+" army"};
          }
        }
      }
      if(!armypieces.error){
        for(var i=0;i<30;i++){
          armypieces[legends.piecedata[armyids[i]].power].push(armyids[i]);
        }
        if(armypieces["8"].length==1&&armypieces["8"][0]=="213"){
          armypieces["8"]=armypieces["8"].concat(armypieces["7"].splice(0,2));
        }
        if(armypieces["5"].length==1&&armypieces["5"][0]=="216"){
          armypieces["5"]=armypieces["5"].concat(armypieces["4"].splice(0,2));
        }
        for(var power in legends.powerquantities){
          if(legends.powerquantities.hasOwnProperty(power)){
            if(armypieces[power].length<legends.powerquantities[power]){
              return {"error":"not enough pieces of power "+power+" in "+side+" army"};
            }
            else if(armypieces[power].length>legends.powerquantities[power]){
              return {"error":"too many pieces of power "+power+" in "+side+" army"};
            }
          }
        }
      }
      return armypieces;
    },

    "randompiecesetup":function(){
      var piecekeys=[];
      for(var power in legends.powerquantities){
        if(legends.powerquantities.hasOwnProperty(power)){
          for(var number=0;number<legends.powerquantities[power];number++){
            piecekeys.push({"power":power,"number":number});
          }
        }
      }
      var returnvalue=[];
      while(piecekeys.length>0){
        returnvalue=returnvalue.concat(piecekeys.splice(Math.floor(Math.random()*piecekeys.length),1));
      }
      returnvalue.splice(15+Math.floor(Math.random()*16),0,false);
      returnvalue.splice(Math.floor(Math.random()*16),0,false);
      return returnvalue;
    },

    "setboard":function(){
      legends.board={
        "tiles":[],
        "width":0,
        "height":0,
        "deathcurse":{
          "piecekeys":[]
        }
      };
      for(var armynumber=0;armynumber<legends.armies.length;armynumber++){
        var piecesetup=legends.randompiecesetup();
        for(var square=0;square<2;square++){
          var x=legends.armies[armynumber].coordinates[square].x;
          var y=legends.armies[armynumber].coordinates[square].y;
          for(var c=0;c<16;c++){
            var piecekey=piecesetup[square*16+c];
            var a=Math.floor(c/4);
            var b=c%4;
            if(typeof(legends.board.tiles[x+a])=="undefined"){
              legends.board.tiles[x+a]=[];
            }
            if(piecekey){
              legends.board.width=Math.max(legends.board.width,x+a+1);
              legends.board.height=Math.max(legends.board.height,y+b+1);
              legends.board.tiles[x+a][y+b]={
                "terrain":["plains","marsh","forest","mountain","desert"][Math.floor(Math.random()*5)],
                "piecekeys":[{"armynumber":armynumber,"power":piecekey.power,"number":piecekey.number}]
              };
              legends.armies[armynumber].pieces[piecekey.power][piecekey.number]={
                "id":legends.armies[armynumber].pieces[piecekey.power][piecekey.number],
                "armynumber":armynumber,
                "power":piecekey.power,
                "number":piecekey.number,
                "x":x+a,
                "y":y+b,
                "z":0,
                "alive":true,
                "deathcurse":false,
                "revealed":false
                //,"highlighted":false
              };
            }
            else{
              legends.board.tiles[x+a][y+b]={
                "terrain":"water",
                "piecekeys":[]
              };
            }
          }
          c=Math.floor(Math.random()*15);
          a=Math.floor(c/4);
          b=c%4;
          if(legends.board.tiles[x+a][y+b].terrain=="water"){
            a=3;
            b=3;
          }
          legends.board.tiles[x+a][y+b].terrain="town";
        }
      }
    },

    "drawpiece":function(piece){
      if(piece.alive&&(piece.deathcurse||(typeof(piece.x)=="number"&&typeof(piece.y)=="number"))){
        var numberofpiecesontile=(piece.deathcurse?legends.board.deathcurse:legends.board.tiles[piece.x][piece.y]).piecekeys.length;
        var tilemarginleft=legends.styles.tilesize-legends.styles.piecewidth-legends.styles.bordersize*2;
        if(numberofpiecesontile==1){
          tilemarginleft*=1/2;
        }
        else if(numberofpiecesontile==2){
          tilemarginleft*=(1/4)+piece.z/2;
        }
        else{
          tilemarginleft*=piece.z/(numberofpiecesontile-1);
        }
        var tilemargintop=legends.styles.tilesize/2-legends.styles.pieceheight/2-legends.styles.bordersize;
        piece.boarddiv.css({
          "left":((piece.deathcurse?legends.styles.marginsize*2+legends.styles.tilesize*legends.getdisplayedboardsize("x"):legends.styles.marginsize+legends.styles.tilesize*legends.boardrotate("x",1,piece.x,piece.y))+tilemarginleft)+"px",
          "top":((piece.deathcurse?legends.styles.marginsize+legends.styles.tilesize*((legends.getdisplayedboardsize("y")-1)/2):legends.styles.marginsize+legends.styles.tilesize*legends.boardrotate("y",1,piece.x,piece.y))+tilemargintop)+"px",
          "z-index":(piece.z+1)+""
        });
      }
      piece.boarddiv.css({
        "display":piece.alive?"block":"none"
      });
      piece.boarddiv.image.css({
        "opacity":piece.revealed?"1":(legends.revealedarmynumber==piece.armynumber||legends.revealedarmynumber==-1?legends.styles.pieceopacity+"":"0"),
        "filter":"alpha(opacity="+(piece.revealed?"100":(legends.revealedarmynumber==piece.armynumber||legends.revealedarmynumber==-1?(legends.styles.pieceopacity*100)+"":"0"))+")"
      });
      piece.armiesdiv.css({
        "opacity":piece.alive?legends.styles.pieceopacity+"":"1",
        "filter":"alpha(opacity="+(piece.alive?(legends.styles.pieceopacity*100)+"":"100")+")"
      });
    },

    "drawtile":function(tile){
      for(var i=0;i<tile.piecekeys.length;i++){
        legends.drawpiece(legends.armies[tile.piecekeys[i].armynumber].pieces[tile.piecekeys[i].power][tile.piecekeys[i].number]);
      }
    },

    "remove":function(armynumber,power,number){
      var piece=legends.armies[armynumber].pieces[power][number];
      if(piece.alive&&(piece.deathcurse||(typeof(piece.x)=="number"&&typeof(piece.y)=="number"))){
        if(piece.deathcurse){
          var tile=legends.board.deathcurse;
        }
        else{
          var tile=legends.board.tiles[piece.x][piece.y];
        }
        tile.piecekeys.splice(piece.z,1);
        for(var i=0;i<tile.piecekeys.length;i++){
          legends.armies[tile.piecekeys[i].armynumber].pieces[tile.piecekeys[i].power][tile.piecekeys[i].number].z=i;
        }
        if(!legends.server.messagereceived){
          legends.drawtile(tile);
        }
      }
    },

    "reveal":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"reveal","armynumber":armynumber,"power":power,"number":number,"gameid":legends.server.gameid});
      }
      if((!legends.server.waitforreply)||(!sendmessage)){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=true;
        if(!legends.server.messagereceived){
          legends.drawpiece(piece);
        }
      }
    },

    "unreveal":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"unreveal","armynumber":armynumber,"power":power,"number":number,"gameid":legends.server.gameid});
      }
      if((!legends.server.waitforreply)||(!sendmessage)){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=false;
        if(!legends.server.messagereceived){
          legends.drawpiece(piece);
        }
      }
    },

    "kill":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"kill","armynumber":armynumber,"power":power,"number":number,"gameid":legends.server.gameid});
      }
      if((!legends.server.waitforreply)||(!sendmessage)){
        legends.remove(armynumber,power,number);
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.alive=false;
        piece.deathcurse=false;
        piece.x="box";
        piece.y="box";
        piece.z=0;
        if(!legends.server.messagereceived){
          legends.drawpiece(piece);
        }
      }
    },

    "moveto":function(armynumber,power,number,sendmessage,x,y){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"moveto","armynumber":armynumber,"power":power,"number":number,"x":x,"y":y,"gameid":legends.server.gameid});
      }
      if((!legends.server.waitforreply)||(!sendmessage)){
        legends.remove(armynumber,power,number);
        var piece=legends.armies[armynumber].pieces[power][number];
        if(x=="deathcurse"||y=="deathcurse"){
          if(legends.board.deathcurse.piecekeys.length>0){
            var olddeathcursepiece=legends.board.deathcurse.piecekeys[0]
            legends.kill(olddeathcursepiece.armynumber,olddeathcursepiece.power,olddeathcursepiece.number,sendmessage);
          }
          piece.alive=true;
          piece.deathcurse=true;
          piece.revealed=true;
          var tile=legends.board.deathcurse;
        }
        else{
          piece.alive=true;
          piece.deathcurse=false;
          var tile=legends.board.tiles[x][y];
          if(tile.piecekeys.length==1&&legends.armies[tile.piecekeys[0].armynumber].side!=legends.armies[piece.armynumber].side){
            piece.revealed=true;
            for(var i=0;i<tile.piecekeys.length;i++){
              legends.reveal(tile.piecekeys[i].armynumber,tile.piecekeys[i].power,tile.piecekeys[i].number,sendmessage);
            }
          }
        }
        piece.x=x;
        piece.y=y;
        piece.z=tile.piecekeys.length;
        tile.piecekeys.push({"armynumber":armynumber,"power":power,"number":number});
        if(!legends.server.messagereceived){
          legends.drawtile(tile);
        }
      }
    },

    "alttext":{
      "starttimer":function(pageX,pageY){
        legends.alttext.timer=window.setTimeout((function(pageX,pageY){
          return function(){
            if(!legends.dragging.activepiece){
              legends.alttext.div.css({
                "display":"block",
                "left":pageX+"px",
                "top":pageY+"px",
                "z-index":(legends.armies.length*30+2)+""
              });
            }
          };
        })(pageX,pageY),legends.styles.alttextwait);
      },
      "init":function(){
        legends.alttext.timer=false;
        legends.alttext.div=$("<div></div>").appendTo(legends.div).css(jQuery.extend({
          "position":"absolute",
          "display":"none"
        },legends.styles.alttextcss));
        $(document).mousemove(function(event){
          if(legends.alttext.timer){
            window.clearTimeout(legends.alttext.timer);
            legends.alttext.starttimer(event.pageX,event.pageY);
          }
        });
      },
      "hide":function(){
        legends.alttext.div.css({
          "display":"none"
        });
        window.clearTimeout(legends.alttext.timer);
        legends.alttext.timer=false;
      },
      "set":function(piece){
        var data=legends.piecedata[piece.id];
        piece.alttext="<u><b>"+data.power+" "+data.name+"</b> ("+data.race+")</u><br>"+data.abilities;
        piece.boarddiv.mouseover((function(piece){
          return function(event){
            if(piece.revealed||legends.revealedarmynumber==piece.armynumber||legends.revealedarmynumber==-1){
              legends.alttext.div.html(piece.alttext);
              legends.alttext.starttimer(event.pageX,event.pageY);
            }
          };
        })(piece));
        piece.boarddiv.mouseout((function(piece){
          return function(event){
            if(piece.revealed||legends.revealedarmynumber==piece.armynumber||legends.revealedarmynumber==-1){
              legends.alttext.hide();
              legends.alttext.div.css({
                "display":"none"
              });
              window.clearTimeout(legends.alttext.timer);
              legends.alttext.timer=false;
            }
          };
        })(piece));
        piece.armiesdiv.mouseover((function(piece){
          return function(event){
            legends.alttext.div.html(piece.alttext);
            legends.alttext.starttimer(event.pageX,event.pageY);
          };
        })(piece));
        piece.armiesdiv.mouseout(function(event){
          legends.alttext.hide();
        });
      }
    },

    "dragging":{
      "init":function(){
        legends.dragging.activepiece=false;
        legends.dragging.offsetX=0;
        legends.dragging.offsetY=0;
        $(document).mousemove(function(event){
          if(legends.dragging.activepiece){
            legends.dragging.activepiece.boarddiv.css({
              "left":(event.pageX-legends.dragging.offsetX)+"px",
              "top":(event.pageY-legends.dragging.offsetY)+"px",
              "z-index":(legends.armies.length*30+1)+""
            });
          }
        });
      },
      "set":function(piece){
        piece.boarddiv.click((function(piece){
          return function(event){
            if(legends.dragging.activepiece){
              var boardx=parseFloat(legends.dragging.activepiece.boarddiv.css("left"))+(legends.styles.piecewidth/2)+legends.styles.bordersize-legends.styles.marginsize;
              var boardy=parseFloat(legends.dragging.activepiece.boarddiv.css("top"))+(legends.styles.pieceheight/2)+legends.styles.bordersize-legends.styles.marginsize;
              var deathcursex=boardx-legends.styles.tilesize*legends.getdisplayedboardsize("x")-legends.styles.marginsize;
              var deathcursey=boardy-legends.styles.tilesize*((legends.getdisplayedboardsize("y")-1)/2);
              var x=legends.boardrotate("x",-1,Math.floor(boardx/legends.styles.tilesize),Math.floor(boardy/legends.styles.tilesize));
              var y=legends.boardrotate("y",-1,Math.floor(boardx/legends.styles.tilesize),Math.floor(boardy/legends.styles.tilesize));
              if(typeof(legends.board.tiles[x])!="undefined"&&typeof(legends.board.tiles[x][y])!="undefined"){
                if(legends.board.tiles[x][y].piecekeys.length>1){
                  if(piece.x=="box"||piece.y=="box"){
                    legends.kill(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true);
                  }
                  else if(piece.x=="deathcurse"||piece.y=="deathcurse"){
                    legends.moveto(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true,"deathcurse","deathcurse");
                  }
                  else{
                    legends.moveto(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true,piece.x,piece.y);
                  }
                }
                else{
                  legends.moveto(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true,x,y);
                }
              }
              else if(deathcursex>=0&&deathcursex<=legends.styles.tilesize&&deathcursey>=0&&deathcursey<=legends.styles.tilesize){
                legends.moveto(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true,"deathcurse","deathcurse");
              }
              else{
                legends.kill(legends.dragging.activepiece.armynumber,legends.dragging.activepiece.power,legends.dragging.activepiece.number,true);
              }
              legends.dragging.activepiece=false;
            }
            else{
              legends.dragging.activepiece=piece;
              legends.dragging.offsetX=event.pageX-parseFloat(piece.boarddiv.css("left"));
              legends.dragging.offsetY=event.pageY-parseFloat(piece.boarddiv.css("top"));
              legends.alttext.hide();
            }
          };
        })(piece));
        piece.armiesdiv.click((function(piece){
          return function(event){
            if((!piece.alive)&&(!legends.dragging.activepiece)){
              piece.alive=true;
              piece.revealed=true;
              legends.drawpiece(piece);
              legends.dragging.activepiece=piece;
              legends.dragging.offsetX=legends.styles.piecewidth/2+legends.styles.bordersize;
              legends.dragging.offsetY=legends.styles.pieceheight/2+legends.styles.bordersize;
              legends.alttext.hide();
            }
          };
        })(piece));
      },
    },

    "games":{
      "join":{
        "gameslist":[],
        "joingame":function(gameid,revealedarmynumber,boardrotations){
          if(boardrotations=="default"){
            boardrotations=revealedarmynumber%2==0?2:0;
          }
          legends.server.gameid=gameid;
          legends.revealedarmynumber=revealedarmynumber;
          legends.boardrotations=boardrotations;
          legends.socket.emit("joingame",{
            "gameid":legends.server.gameid
          });
        }
      },
      "create":{
        "revealedarmynumber":-1,
        "boardrotations":"default",
        "players":[],
        "getarmycodes":function(){
          returnvalue=[];
          for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
            returnvalue.push({
              "side":legends.games.create.players[armynumber].sidedropdown.val(),
              "coordinates":[{"x":legends.games.create.players[armynumber].x1input.val()*1,"y":legends.games.create.players[armynumber].y1input.val()*1},{"x":legends.games.create.players[armynumber].x2input.val()*1,"y":legends.games.create.players[armynumber].y2input.val()*1}],
              "code":legends.games.create.players[armynumber].codeinput.val()
            });
          }
          return returnvalue;
        },
        "addplayer":function(){
          var armynumber=legends.games.create.players.length;
          legends.games.create.players[armynumber]={
            "playernameinput":$("<input type=\"text\" size=\"10\" value=\"player "+(armynumber+1)+"\">"),
            "sidedropdown":$("<select><option value=\"good\""+(armynumber%2==0?" selected":"")+">good</option><option value=\"evil\""+(armynumber%2==0?"":" selected")+">evil</select>"),
            "codeinput":$("<input type=\"text\" size=\"25\" value=\""+(armynumber%2==0?"28,84,93,66,87,10,40,44,50,53,59,69,80,90,100,63,81,7,19,41,47,56,62,71,78,83,89,92,95,102":"144,150,168,185,188,191,194,141,159,112,121,134,138,183,200,176,182,147,153,156,179,202,118,124,163,169,174,177,195,201")+"\">"),
            "x1input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(Math.floor(armynumber/2)*8)+"\">").css({"width":"2.5em"}),
            "y1input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(armynumber%2==0?0:4)+"\">").css({"width":"2.5em"}),
            "x2input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(Math.floor(armynumber/2)*8+4)+"\">").css({"width":"2.5em"}),
            "y2input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(armynumber%2==0?0:4)+"\">").css({"width":"2.5em"})
          };
          legends.games.create.playerspan.append(document.createTextNode("Player: "),legends.games.create.players[armynumber].playernameinput,document.createTextNode(" with "),legends.games.create.players[armynumber].sidedropdown,document.createTextNode(" army code "),legends.games.create.players[armynumber].codeinput,document.createTextNode(" at coordinates ("),legends.games.create.players[armynumber].x1input,document.createTextNode(","),legends.games.create.players[armynumber].y1input,document.createTextNode(") and ("),legends.games.create.players[armynumber].x2input,document.createTextNode(","),legends.games.create.players[armynumber].y2input,document.createTextNode(")"),$("<br>"));
          legends.games.create.players[armynumber].button=$("<button>Create and join as player "+(armynumber+1)+"</button>").appendTo(legends.games.create.joinspan).click((function(armynumber){
            return function(event){
              legends.games.create.creategame(legends.games.create.getarmycodes(),armynumber,legends.games.create.boardrotationdropdown.val());
            };
          })(armynumber));
          legends.games.create.joinspan.append(document.createTextNode(" "));
        },
        "validatecoordinates":function(coordinates){
          var bijection=function(x,y){return (((x+y)*(x+y+1))/2)+y;}
          var numbers=[];
          for(var i=0;i<coordinates.length;i++){
            if(Math.floor(coordinates[i].x)!=coordinates[i].x||coordinates[i].x<0||Math.floor(coordinates[i].y)!=coordinates[i].y||coordinates[i].y<0){
              return "coordinates must be non-negative integers";
            }
            else{
              for(var a=0;a<4;a++){
                for(var b=0;b<4;b++){
                  numbers.push(Math.floor(bijection(coordinates[i].x+a,coordinates[i].y+b)));
                }
              }
            }
          }
          numbers=numbers.sort();
          for(var i=0;i<numbers.length-1;i++){
            if(numbers[i]==numbers[i+1]){
              return "coordinates give overlapping boards";
            }
          }
          return false;
        },
        "creategame":function(armycodes,revealedarmynumber,boardrotations){
          legends.games.create.revealedarmynumber=revealedarmynumber;
          legends.games.create.boardrotations=boardrotations;
          var coordinates=[];
          for(var armynumber=0;armynumber<armycodes.length;armynumber++){
            armycodes[armynumber].pieces=legends.getpieces(armycodes[armynumber].code,armycodes[armynumber].side);
            legends.armies[armynumber]=armycodes[armynumber];
            if(legends.armies[armynumber].pieces.error){
              alert("Error: "+legends.armies[armynumber].pieces.error+".");
              return;
            }
            coordinates=coordinates.concat(armycodes[armynumber].coordinates);
          }
          var coordinatevalidationerror=legends.games.create.validatecoordinates(coordinates);
          if(coordinatevalidationerror){
            alert("Error: "+coordinatevalidationerror+".");
            return;
          }
          legends.setboard();
          legends.socket.emit("creategame",{"board":legends.board,"armies":legends.armies});
        }
      }
    },

    "init":function(){
      legends.div=$("<div></div>").appendTo($(document.body));
      legends.alttext.init();
      legends.dragging.init();
      legends.socket=io(legends.server.socket);

      legends.socket.on("gameslist",function(gameslist){
        if(legends.server.messagereceived){
          legends.server.messagereceived=false;
          var boardrotationdropdownhtml="<select><option value=\"default\">default</option><option value=\"2\">north</option><option value=\"3\">east</option><option value=\"0\">south</option><option value=\"1\">west</option></select>";
          legends.games.join.gameslist=gameslist;
          legends.games.div=$("<div></div>").appendTo(legends.div).append($("<h1>Stratego Legends</h1>"),$("<h2>Controls</h2>"),$("<p>Left-click on pieces to move them, right-click to reveal or unreveal them and drop them off the board or middle click to move them to the box.</p>"),$("<h2>Create a game</h2>"));
          legends.games.create.playerp=$("<p></p>").appendTo(legends.games.div);
          legends.games.create.playerspan=$("<span></span>").appendTo(legends.games.create.playerp);
          legends.games.create.gamenameinput=$("<input type=\"text\" size=\"20\">");
          legends.games.create.playerspan.append(document.createTextNode("Game name: "),legends.games.create.gamenameinput,$("<br>"));
          legends.games.create.addplayerbutton=$("<button>Add a player</button>").appendTo(legends.games.create.playerp).click(legends.games.create.addplayer);
          legends.games.create.joinp=$("<p></p>").appendTo(legends.games.div);
          legends.games.create.joinspan=$("<span></span>").appendTo(legends.games.create.joinp);
          legends.games.create.observerbutton=$("<button>Create and join as an observer</button>").appendTo(legends.games.create.joinp).click(function(event){
            legends.games.create.creategame(legends.games.create.getarmycodes(),-1,legends.games.create.boardrotationdropdown.val());
          });
          legends.games.create.joinp.append(document.createTextNode(" facing "));
          legends.games.create.boardrotationdropdown=$(boardrotationdropdownhtml).appendTo(legends.games.create.joinp);
          for(var armynumber=0;armynumber<2;armynumber++){
            legends.games.create.addplayer();
          }
          if(legends.games.join.gameslist.length>0){
            legends.games.div.append($("<h2>Join a game</h2>"));
            legends.games.join.p=$("<p></p>").appendTo(legends.games.div);
            for(var gameid=0;gameid<legends.games.join.gameslist.length;gameid++){
              legends.games.join.p.append(document.createTextNode("Game "+(gameid+1)+": "));
              for(var armynumber=0;armynumber<=legends.games.join.gameslist[gameid].length;armynumber++){
                if(armynumber==legends.games.join.gameslist[gameid].length){
                  legends.games.join.gameslist[gameid].observerbutton=$("<button>Join as an observer</button>").appendTo(legends.games.join.p).click((function(gameid){
                    return function(event){
                      legends.games.join.joingame(gameid,-1,legends.games.join.gameslist[gameid].boardrotationdropdown.val());
                    };
                  })(gameid));
                }
                else{
                  legends.games.join.gameslist[gameid][armynumber].button=$("<button>Join as player "+(armynumber+1)+" ("+legends.games.join.gameslist[gameid][armynumber].side+")</button>").appendTo(legends.games.join.p).click((function(gameid,armynumber){
                    return function(event){
                      legends.games.join.joingame(gameid,armynumber,legends.games.join.gameslist[gameid].boardrotationdropdown.val());
                    };
                  })(gameid,armynumber));
                }
                legends.games.join.p.append(document.createTextNode(" "));
              }
              legends.games.join.p.append(document.createTextNode("facing "));
              legends.games.join.gameslist[gameid].boardrotationdropdown=$(boardrotationdropdownhtml).appendTo(legends.games.join.p);
              if(gameid<legends.games.join.gameslist.length-1){
                legends.games.join.p.append($("<br>"));
              }
            }
          }
          legends.games.div.append($("<h2>Design an army</h2>"));
        }
      });

      legends.socket.on("gamecreated",function(gameid){
        legends.games.join.joingame(gameid,legends.games.create.revealedarmynumber,legends.games.create.boardrotations);
      });

      legends.socket.on("init",function(boardandarmies){
        legends.games.div.remove();
        legends.armies=boardandarmies.armies;
        legends.board=boardandarmies.board;
        legends.board.div=$("<div></div>").appendTo(legends.div);
        for(var x=0;x<legends.board.tiles.length;x++){
          if(typeof(legends.board.tiles[x])!="undefined"){
            for(var y=0;y<legends.board.tiles[x].length;y++){
              if(typeof(legends.board.tiles[x][y])!="undefined"){
                legends.board.tiles[x][y].div=$("<div></div>").appendTo(legends.board.div).css({
                  "position":"absolute",
                  "left":(legends.styles.marginsize+legends.styles.tilesize*legends.boardrotate("x",1,x,y))+"px",
                  "top":(legends.styles.marginsize+legends.styles.tilesize*legends.boardrotate("y",1,x,y))+"px",
                  "width":legends.styles.tilesize+"px",
                  "height":legends.styles.tilesize+"px",
                  "background-image":"url('"+legends.server.imagedirectory+"terrains/"+legends.board.tiles[x][y].terrain+".jpg')",
                  "background-size":"100% 100%"
                });
              }
            }
          }
        }
        legends.board.deathcurse.div=$("<div></div>").appendTo(legends.board.div).css({
          "position":"absolute",
          "left":(legends.styles.marginsize*2+legends.styles.tilesize*legends.getdisplayedboardsize("x"))+"px",
          "top":(legends.styles.marginsize+legends.styles.tilesize*((legends.getdisplayedboardsize("y")-1)/2))+"px",
          "width":legends.styles.tilesize+"px",
          "height":legends.styles.tilesize+"px",
          "background-image":"url('"+legends.server.imagedirectory+"deathcurse.png')",
          "background-size":"100% 100%"
        });
        legends.armies.div=$("<div></div>").appendTo(legends.div).css({
          "position":"absolute",
          "left":(legends.styles.marginsize*3+legends.styles.tilesize*(legends.getdisplayedboardsize("x")+1))+"px",
          "top":"0px"
        });
        var reverseorder=legends.boardrotations%4==2||legends.boardrotations%4==3;
        for(var armynumber=reverseorder?legends.armies.length-1:0;reverseorder?(armynumber>=0):(armynumber<legends.armies.length);armynumber+=reverseorder?-1:1){
          $("<div>"+(legends.armies.length>2?("Army "+(armynumber+1)):(legends.armies[armynumber].side.substr(0,1).toUpperCase()+legends.armies[armynumber].side.substr(1)+" army"))+"</div>").appendTo(legends.armies.div).css({
            "margin-top":legends.styles.marginsize+"px",
            "font-family":"sans-serif",
            "font-weight":"bold",
            "text-align":"center"
          });
          legends.armies[armynumber].div=$("<div></div>").appendTo(legends.armies.div).css({
            "position":"relative",
            "width":(legends.styles.armypiecewidth*6)+"px",
            "height":(legends.styles.armypieceheight*5)+"px",
            "background-image":"url('"+legends.server.imagedirectory+"box.png')",
            "background-size":"100% 100%"
          });
          for(var power in legends.powerquantities){
            if(legends.powerquantities.hasOwnProperty(power)){
              for(var number=0;number<legends.powerquantities[power];number++){
                var piece=legends.armies[armynumber].pieces[power][number];
                piece.boarddiv=$("<div></div>").appendTo(legends.board.div).css({
                  "position":"absolute",
                  "width":legends.styles.piecewidth+"px",
                  "height":legends.styles.pieceheight+"px",
                  "background-color":legends.armies[armynumber].side=="good"?legends.styles.goodcolour:legends.styles.evilcolour,
                  "border":legends.styles.bordersize+"px outset "+(legends.armies[armynumber].side=="good"?legends.styles.goodbordercolour:legends.styles.evilbordercolour)
                });
                piece.boarddiv.image=$("<div></div>").appendTo(piece.boarddiv).css({
                  "position":"absolute",
                  "left":"0px",
                  "top":"0px",
                  "width":"100%",
                  "height":"100%",
                  "background-image":"url('"+legends.server.imagedirectory+"pieces/"+piece.id+".jpg')",
                  "background-size":"100% 100%"
                });
                var coordinates=legends.getboxcoordinates(power,number);
                piece.armiesdiv=$("<div></div>").appendTo(legends.armies[armynumber].div).css({
                  "position":"absolute",
                  "left":(coordinates.x*legends.styles.armypiecewidth)+"px",
                  "top":(coordinates.y*legends.styles.armypieceheight)+"px",
                  "width":(legends.styles.armypiecewidth-legends.styles.armypiecemarginsize*2)+"px",
                  "height":(legends.styles.armypieceheight-legends.styles.armypiecemarginsize*2)+"px",
                  "margin":legends.styles.armypiecemarginsize+"px",
                  "-webkit-border-radius":legends.styles.armypieceborderradius+"px",
                  "-moz-border-radius":legends.styles.armypieceborderradius+"px",
                  "border-radius":legends.styles.armypieceborderradius+"px",
                  "background-image":"url('"+legends.server.imagedirectory+"pieces/"+piece.id+".jpg')",
                  "background-size":"100% 100%"
                });
                legends.drawpiece(piece);
                legends.alttext.set(piece);
                legends.dragging.set(piece);
                piece.boarddiv.on("contextmenu",(function(piece){
                  return function(event){
                    if(piece.revealed){
                      legends.unreveal(piece.armynumber,piece.power,piece.number,true);
                    }
                    else{
                      legends.reveal(piece.armynumber,piece.power,piece.number,true);
                    }
                    event.preventDefault();
                  };
                })(piece));
                piece.boarddiv.mousedown((function(piece){
                  return function(event){
                    if(event.which==2){
                      legends.kill(piece.armynumber,piece.power,piece.number,true);
                      event.preventDefault();
                    }
                  };
                })(piece));
              }
            }
          }
        }
      });

      legends.socket.on("pieceaction",function(data){
        if(data.gameid==legends.server.gameid){
          legends[data.action](data.armynumber,data.power,data.number,false,data.x,data.y);
        }
      });

      legends.socket.on("errormessage",function(message){
        alert("Error: "+message+".");
        window.location.reload(false);
      });

    }

  }

  for(var property in legendsproperties){
    if(legendsproperties.hasOwnProperty(property)){
      legends[property]=legendsproperties[property];
    }
  }

};

if(typeof(module)=="undefined"){
  var legends;
  (function($,window,document,undefined){
    jQuery(function(){
      legends=new legendsconstructor();
      legends.init();
    });
  })(jQuery,this,this.document);
}
else{
  module.exports=legendsconstructor;
}