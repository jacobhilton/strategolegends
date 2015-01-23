var legendsconstructor=function(){

  var legends=this;

  var legendsproperties={

    "server":{
      "socket":"",
      "imagedirectory":"images/",
      "waitforreply":true,
      "ping":function(){
        var image=new Image();
        image.src=legends.server.imagedirectory+"empty.gif?timestamp="+(new Date()).getTime();
      }
    },

    "styles":{
      "headerwidth":600,
      "smallfontsize":0.8,
      "marginsize":20,
      "tilesize":80,
      "playernamehighlightcolour":"#ffff66",
      "pieceheight":54,
      "piecewidth":36,
      "goodcolour":"beige",
      "goodbordercolour":"#ffffff",
      "evilcolour":"black",
      "evilbordercolour":"#666666",
      "bordersize":3,
      "pieceshadow":"0px 0px 4px 4px #ffff00",
      "shadowtimeout":2500,
      "armypieceheight":51,
      "armypiecewidth":34,
      "armypiecemarginsize":2,
      "armypieceborderradius":6,
      "designarmypieceheight":57,
      "designarmypiecewidth":38,
      "designarmypiecemarginsize":2,
      "designarmypieceborderradius":6,
      "pieceopacity":0.35,
      "alttextthreshold":0.6,
      "alttextwait":200,
      "alttextfastwait":100,
      "alttextmarginsize":{
        "top":4,
        "bottom":20
      },
      "alttextcss":{
        "max-width":"400px",
        "background-color":"#ffff80",
        "border":"1px solid black",
        "padding":"4px"
      }
    },

    "piecedata":[
      null,
      {"name":"Landor","power":"10","race":"ranger","abilities":"<i>Action</i>: Reveal Landor to move Landor one space diagonally. Landor can also attack diagonally.","colour":"green","side":"good","set":"original","image":"1.jpg"},
      {"name":"Vellec","power":"10","race":"elf","abilities":"<i>Death Curse</i>: All Elves get +1.","colour":"green","side":"good","set":"original","image":"2.jpg"},
      {"name":"King Migol","power":"9","race":"dwarf","abilities":"<i>Ability</i>: Reveal King Migol to give an adjacent Dwarf +2 until the end of the turn. Use this ability only once per turn. Reveal the adjacent Dwarf.","colour":"green","side":"good","set":"original","image":"3.jpg"},
      {"name":"Aubrey","power":"9","race":"elf","abilities":"<i>Action</i>: Reveal Aubrey ( while on a forest space ) to move her to any empty forest space.","colour":"green","side":"good","set":"original","image":"4.jpg"},
      {"name":"Lockin Elves","power":"8","race":"elf","abilities":"<i>Ability</i>: Reveal and destroy Lockin Elves to give an adjacent green piece +2 until the end of the turn. Reveal the affected green piece.","colour":"green","side":"good","set":"original","image":"5.jpg"},
      {"name":"Dwarven Knight","power":"8","race":"dwarf","abilities":"<i>Action</i>: Quickness","colour":"green","side":"good","set":"original","image":"6.jpg"},
      {"name":"Hunter","power":"8","race":"ranger","abilities":"<i>Action</i>: Charging","colour":"green","side":"good","set":"original","image":"7.jpg"},
      {"name":"Srik","power":"7","race":"elf","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"green","side":"good","set":"original","image":"8.jpg"},
      {"name":"Dwarven General","power":"7","race":"dwarf","abilities":"<i>Action</i>: Surround","colour":"green","side":"good","set":"original","image":"9.jpg"},
      {"name":"Emeraldis","power":"7","race":"dragon","abilities":"<i>Innate</i>: Berzerk<br><i>Action</i>: Flying","colour":"green","side":"good","set":"original","image":"10.jpg"},
      {"name":"High Elf","power":"6","race":"elf","abilities":"<i>Ability</i>: Reveal High Elf and an adjacent Elf to give the adjacent Elf +1 until the end of the turn. Use this ability only once per turn.","colour":"green","side":"good","set":"original","image":"11.jpg"},
      {"name":"Migol's Royal Guard","power":"6","race":"dwarf","abilities":"<i>Ability</i>: If King Migol is attacked and destroyed while adjacent to Migol's Royal Guard, you may reveal and destroy Migol's Royal Guard and immediately replace him with King Migol (in the space that Migol's Royal Royal Guard formerly occupied).","colour":"green","side":"good","set":"original","image":"12.jpg"},
      {"name":"Wannok","power":"6","race":"sprite","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Flying","colour":"green","side":"good","set":"original","image":"13.jpg"},
      {"name":"Frodnaj Archer","power":"5","race":"elf","abilities":"<i>Action</i>: Distance Strike","colour":"green","side":"good","set":"original","image":"14.jpg"},
      {"name":"Poy","power":"5","race":"dwarf","abilities":"<i>Innate</i>: +1 on mountain spaces.<br><i>Ability</i>: If Poy is revealed by a piece with Distance Strike Action, Poy is not destroyed. Instead, the piece with Distance Strike is destroyed.","colour":"green","side":"good","set":"original","image":"15.jpg"},
      {"name":"Grundin","power":"5","race":"ranger","abilities":"<i>Innate</i>: +2 on forest spaces.","colour":"green","side":"good","set":"original","image":"16.jpg"},
      {"name":"Relfreod Archer","power":"4","race":"elf","abilities":"<i>Action</i>: Distance Strike","colour":"green","side":"good","set":"original","image":"17.jpg"},
      {"name":"Dwarven Hero","power":"4","race":"dwarf","abilities":"<i>Action</i>: Surround","colour":"green","side":"good","set":"original","image":"18.jpg"},
      {"name":"Bakus","power":"4","race":"dragon","abilities":"<i>Action</i>: Teleport","colour":"green","side":"good","set":"original","image":"19.jpg"},
      {"name":"Tilloak Theugist","power":"3","race":"elf","abilities":"<i>Action</i>: Slashing<br><i>Action</i>: Charging","colour":"green","side":"good","set":"original","image":"20.jpg"},
      {"name":"Dwarven Warrior","power":"3","race":"dwarf","abilities":"<i>Innate</i>: Dispel Magic","colour":"green","side":"good","set":"original","image":"21.jpg"},
      {"name":"Strangling Vines","power":"3","race":"plantlife","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all peces that occupy forest spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","set":"original","image":"22.jpg"},
      {"name":"Wood Elf","power":"2","race":"elf","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Slashing","colour":"green","side":"good","set":"original","image":"23.jpg"},
      {"name":"Dwarven Scout","power":"2","race":"dwarf","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal any 2 of your opponent's pieces.","colour":"green","side":"good","set":"original","image":"24.jpg"},
      {"name":"Flood bringer","power":"2","race":"plantlife","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all pieces adjacent to water spaces. Destroy any one non-stationary piece revealed.","colour":"green","side":"good","set":"original","image":"25.jpg"},
      {"name":"Elven Assassin","power":"1","race":"elf","abilities":"<i>Action</i>: Reveal any piece up to 2 spaces away. If that piece has a base strenth of 10, destroy it. If the revealed piece is anything but a base strength 10, destroy Elven Assassin.","colour":"green","side":"good","set":"original","image":"26.jpg"},
      {"name":"Clevut","power":"1","race":"doppelganger","abilities":"<i>Innate</i>: Cannot attack<br><i>Ability</i>: If Clevut is attacked, destroy him and take control of the attacking piece. Place the piece on the space that Clevut occupied.","colour":"green","side":"good","set":"original","image":"27.jpg"},
      {"name":"Quicksand","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Quicksand is attacked, destroy it and its attacker.<br><i>Death Curse</i>: when this Death Curse ends, reveal all pieces on marsh spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","set":"original","image":"28.jpg"},
      {"name":"Earthquake","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Earthquake is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, reveal all pices on plains spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","set":"original","image":"29.jpg"},
      {"name":"Eruption","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Eruption is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, reveal all pices on mountain spaces. Destroy one revealed non-stationary piece.","colour":"green","side":"good","set":"original","image":"30.jpg"},
      {"name":"Dwaren Ambush","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Dwarven Ambush is attacked, destroy it and its attacker. You may then move and reveal any living Dwarf under your control to the space Dwarven Ambush occupied.","colour":"green","side":"good","set":"original","image":"31.jpg"},
      {"name":"Elven Ambush","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Elven Ambush is attacked, destroy it and its attacker. You may then move and reveal any living Elf under your control to the space Elven Ambush occupied.","colour":"green","side":"good","set":"original","image":"32.jpg"},
      {"name":"Woodland tower","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Woodland Tower to force an opponent to reveal his/her castle","colour":"green","side":"good","set":"original","image":"33.jpg"},
      {"name":"Guarded Fortress","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Guarded Fortress to reveal any adjacent piece. If the revealed piece's base strength is 4 or less, destroy that piece","colour":"green","side":"good","set":"original","image":"34.jpg"},
      {"name":"Sir Urgwaine","power":"10","race":"paladin","abilities":"<i>Ability</i>: Reveal Sir Urgwaine and one Paladin adjacent to Sir Urgwaine to give that Paladin +1 until the end of the turn. Use this ability only once per turn.","colour":"gold","side":"good","set":"original","image":"35.jpg"},
      {"name":"Saravannus","power":"10","race":"wizard","abilities":"<i>Death Curse</i>: When this Death Curse ends, reveal all pieces on a terrain of your choice.","colour":"gold","side":"good","set":"original","image":"36.jpg"},
      {"name":"Tiera","power":"9","race":"cleric","abilities":"<i>Innate</i>: -5 on marsh spaces.<br><i>Innate</i>: -5 on forest spaces.<br><i>Innate</i>: After Tiera successfully attacks, force an oppenent to choose and destroy any piece under his/her control.","colour":"gold","side":"good","set":"original","image":"37.jpg"},
      {"name":"Sir Gilbert","power":"9","race":"paladin","abilities":"<i>Death Curse</i>: When this Death Curse ends, place any destroyed gold piece with base power of 6 or lower on an empty town space.","colour":"gold","side":"good","set":"original","image":"38.jpg"},
      {"name":"Oreld the Deliverer","power":"8","race":"wizard","abilities":"<i>Ability</i>: At the end of your turn, you may reveal and destroy Oreld the Deliverer to take another turn.","colour":"gold","side":"good","set":"original","image":"39.jpg"},
      {"name":"Craglor","power":"8","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Quickness","colour":"gold","side":"good","set":"original","image":"40.jpg"},
      {"name":"Gold Knight","power":"8","race":"paladin","abilities":"<i>Innate</i>: +1 againist red pieces.","colour":"gold","side":"good","set":"original","image":"41.jpg"},
      {"name":"Lamorak","power":"7","race":"wizard","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"gold","side":"good","set":"original","image":"42.jpg"},
      {"name":"Hillstone Priest","power":"7","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"gold","side":"good","set":"original","image":"43.jpg"},
      {"name":"Gray Knight","power":"7","race":"paladin","abilities":"<i>Innate</i>: +1 againist red pieces.<br><i>Action</i>: Quickness","colour":"gold","side":"good","set":"original","image":"44.jpg"},
      {"name":"Loovius","power":"6","race":"wizard","abilities":"<i>Action</i>: Slashing","colour":"gold","side":"good","set":"original","image":"45.jpg"},
      {"name":"Humble Clergy","power":"6","race":"cleric","abilities":"<i>Death Curse</i>: All pieces with a base strength of 2 get +6","colour":"gold","side":"good","set":"original","image":"46.jpg"},
      {"name":"Crailton Martyr","power":"6","race":"paladin","abilities":"<i>Ability</i>: After Crailton Martyr makes a successful attack, you may destroy him to place one of your destroyed gold pieces on the space that Crailton Martyr occupied.","colour":"gold","side":"good","set":"original","image":"47.jpg"},
      {"name":"Redillian Sage","power":"5","race":"wizard","abilities":"<i>Innate</i>: After Redillian Sage has successfully attacked, force an opponent to choose and destroy one piece under his/her control<br><i>Action</i>: Slashing","colour":"gold","side":"good","set":"original","image":"48.jpg"},
      {"name":"Hillstone Curate","power":"5","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"gold","side":"good","set":"original","image":"49.jpg"},
      {"name":"Holy Knight","power":"5","race":"paladin","abilities":"<i>Innate</i>: +4 on town spaces.<br><i>Action</i>: Quickness","colour":"gold","side":"good","set":"original","image":"50.jpg"},
      {"name":"Redillian Evoker","power":"4","race":"wizard","abilities":"<i>Action</i>: Charging<br><i>Death Curse</i>: All Wizard pieces get +1.","colour":"gold","side":"good","set":"original","image":"51.jpg"},
      {"name":"Noble Cleric","power":"4","race":"cleric","abilities":"<i>Ability</i>: After Noble Cleric makes a successful attack, you may destroy Noble Cleric to place one of your previously destroyed pieces on the space that Noble Cleric occupied.","colour":"gold","side":"good","set":"original","image":"52.jpg"},
      {"name":"Ulaniva Crusader","power":"4","race":"paladin","abilities":"<i>Innate</i>: +2 on desert spaces.<br><i>Action</i>: Move from desert to desert space.","colour":"gold","side":"good","set":"original","image":"53.jpg"},
      {"name":"Pearl Wizard","power":"3","race":"wizard","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"gold","side":"good","set":"original","image":"54.jpg"},
      {"name":"Jillus","power":"3","race":"cleric","abilities":"<i>Death Curse</i>: All Clerics gain Dispel Magic","colour":"gold","side":"good","set":"original","image":"55.jpg"},
      {"name":"Ulaniva Defender","power":"3","race":"paladin","abilities":"<i>Innate</i>: +3 on desert spaces.<br><i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"gold","side":"good","set":"original","image":"56.jpg"},
      {"name":"Jenzik","power":"2","race":"wizard","abilities":"<i>Action</i>: Teleport","colour":"gold","side":"good","set":"original","image":"57.jpg"},
      {"name":"Hillstone Acolyte","power":"2","race":"cleric","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Charging","colour":"gold","side":"good","set":"original","image":"58.jpg"},
      {"name":"Urgwaine's Knights","power":"2","race":"paladin","abilities":"<i>Ability</i>: Reveal and destroy Urgwaine's Knights to give an adjacent Paladin +2 until the end of the turn. Reveal the adjacent Paladin.","colour":"gold","side":"good","set":"original","image":"59.jpg"},
      {"name":"Psychic Devourer","power":"1","race":"wizard","abilities":"<i>Innate</i>: If Psychic Devourer attacks, guess the name of the defending piece. If you are correct, that piece and Psychic Devourer are destroyed. If you are wrong, destroy Psychic Devourer.","colour":"gold","side":"good","set":"original","image":"60.jpg"},
      {"name":"Reb the Zombie Slayer","power":"1","race":"cleric","abilities":"<i>Innate</i>: If Reb attacks a piece with a base strength of 10, that piece is destroyed.<br><i>Innate</i>: If Reb attacks any Zombie, destroy that Zombie.","colour":"gold","side":"good","set":"original","image":"61.jpg"},
      {"name":"Holy Light","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Holy Light is attacked, destroy it and its attacker.","colour":"gold","side":"good","set":"original","image":"62.jpg"},
      {"name":"Holy Vision","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Holy vision is attacked, it is destroyed and you may look at any 2 pieces.","colour":"gold","side":"good","set":"original","image":"63.jpg"},
      {"name":"Exorcism","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Exorcim is attacked, destroy it and its attacker. Then you may reveal any one opponent's piece on any marsh space. If the revealed piece is red, it is destroyed.","colour":"gold","side":"good","set":"original","image":"64.jpg"},
      {"name":"Alter of Deliverance","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Alter of Deliverance is attacked, destroy it and its attacker. Then force an oppenent to choose and destroy one piece under his/her control.","colour":"gold","side":"good","set":"original","image":"65.jpg"},
      {"name":"Cleansing Mist","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot Attack<br><i>Action</i>: Reveal and destroy Cleansing Mist to force an opponent to choose and destroy any piece under his/her control.<br><i>Magic</i>: If Cleansing Mist is attacked, destroy it and its attacker.","colour":"gold","side":"good","set":"original","image":"66.jpg"},
      {"name":"Urgwaine's Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Urgwaine's Castle to give Sir Urgwaine or Urgwaine's Knights Quickness action until the end of the turn.","colour":"gold","side":"good","set":"original","image":"67.jpg"},
      {"name":"Mirage Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Mirage Castle to place it on any empty desert space. this may be done only once per game.","colour":"gold","side":"good","set":"original","image":"68.jpg"},
      {"name":"Uaivad","power":"10","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: All Dragons get +1.","colour":"blue","side":"good","set":"original","image":"69.jpg"},
      {"name":"Elementus the Airlord","power":"10","race":"spirit","abilities":"<i>Ability</i>: Reveal Elementus to give any spirit Flying Action until the end of the turn.","colour":"blue","side":"good","set":"original","image":"70.jpg"},
      {"name":"Electibra","power":"9","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: All pieces with Flying Action get +1.","colour":"blue","side":"good","set":"original","image":"71.jpg"},
      {"name":"Almaetis","power":"9","race":"spirit","abilities":"<i>Action</i>: Reveal and destroy Almaetis to place any piece you control on any empty forest space. Reveal the placed piece.","colour":"blue","side":"good","set":"original","image":"72.jpg"},
      {"name":"Dagin Genie","power":"8","race":"spirit","abilities":"<i>Innate</i>: +1 on desert spaces.","colour":"blue","side":"good","set":"original","image":"73.jpg"},
      {"name":"Aras","power":"8","race":"angel","abilities":"<i>Action</i>: Vision<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"74.jpg"},
      {"name":"Tael","power":"8","race":"chimera","abilities":"<i>Innate</i>: +1 on mountain spaces.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"75.jpg"},
      {"name":"Spirit of Wrath","power":"7","race":"spirit","abilities":"<i>Innate</i>: Berzerk<br><i>Action</i>: Switching","colour":"blue","side":"good","set":"original","image":"76.jpg"},
      {"name":"Armagged","power":"7","race":"angel","abilities":"<i>Innate</i>: After Armagged has attacked successfully, reveal all adjacent pieces.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"77.jpg"},
      {"name":"Lord of Eagles","power":"7","race":"eagle","abilities":"<i>Ability</i>: You may reveal all pieces Lord of Eagles flies over.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"78.jpg"},
      {"name":"Spirit of Forest","power":"6","race":"spirit","abilities":"<i>Action</i>: Move from forest to forest space.","colour":"blue","side":"good","set":"original","image":"79.jpg"},
      {"name":"Fray","power":"6","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Reveal Fray to move up to 3 non-stationary blue pieces to any empty spaces adjacent to Fray. Reveal all pieces moved.","colour":"blue","side":"good","set":"original","image":"80.jpg"},
      {"name":"Vinin Satyr","power":"6","race":"satyr","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"blue","side":"good","set":"original","image":"81.jpg"},
      {"name":"Spirit of Sea","power":"5","race":"spirit","abilities":"<i>Action</i>: Move from adjacent water to adjacent water space.","colour":"blue","side":"good","set":"original","image":"82.jpg"},
      {"name":"Montika","power":"5","race":"ram","abilities":"<i>Action</i>: slashing","colour":"blue","side":"good","set":"original","image":"83.jpg"},
      {"name":"Dancing Sword","power":"5","race":"weapon","abilities":"<i>Ability</i>: Reveal and destroy Dancing Sword to give an adjacent piece +2 unitl the end of the turn. Reveal the adjacent piece affected.","colour":"blue","side":"good","set":"original","image":"84.jpg"},
      {"name":"Spirit of Negation","power":"4","race":"spirit","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Switching","colour":"blue","side":"good","set":"original","image":"85.jpg"},
      {"name":"Gallat","power":"4","race":"angel","abilities":"<i>Innate</i>: If Gallat is revealed by a piece with Vision Action, the piece with Vision Action is destroyed.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"86.jpg"},
      {"name":"Tar'n","power":"4","race":"centaur","abilities":"<i>Ability</i>: If Tar'n is adjacent to Tiera, reveal both pieces to give Tiera +1 until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","set":"original","image":"87.jpg"},
      {"name":"Spirit of Vision","power":"3","race":"spirit","abilities":"<i>Action</i>: Vision","colour":"blue","side":"good","set":"original","image":"88.jpg"},
      {"name":"Angellin","power":"3","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Teleport","colour":"blue","side":"good","set":"original","image":"89.jpg"},
      {"name":"Delik","power":"3","race":"unicorn","abilities":"<i>Ability</i>: If Delik is adjacent to Aubrey, reveal both pieces to give Aubrey +1 until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","set":"original","image":"90.jpg"},
      {"name":"Spirit of Desert","power":"2","race":"spirit","abilities":"<i>Innate</i>: +3 on desert spaces.<br><i>Action</i>: Move from desert to desert space.","colour":"blue","side":"good","set":"original","image":"91.jpg"},
      {"name":"Julisa","power":"2","race":"dragon","abilities":"<i>Action</i>: Slashing<br><i>Magic</i>: Flying","colour":"blue","side":"good","set":"original","image":"92.jpg"},
      {"name":"Forillian Panther","power":"2","race":"panther","abilities":"<i>Ability</i>: Reveal all pieces Forillian Panther flies over.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"original","image":"93.jpg"},
      {"name":"Spirit of Justice","power":"1","race":"spirit","abilities":"<i>Innate</i>: If Spirit of Justice attacks or is attacked by a base strength 10 piece, the base strength piece is destroyed.<br><i>Action</i>: Switching","colour":"blue","side":"good","set":"original","image":"94.jpg"},
      {"name":"Placton","power":"1","race":"sphinx","abilities":"<i>Innate</i>: If Placton attacks or is attacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Action</i>: Quickness","colour":"blue","side":"good","set":"original","image":"95.jpg"},
      {"name":"Haunted Grove","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Haunted Grove is attacked, destroy it and its attacker. If attacked on a forest space, reveal all pieces on all forest spaces. Destroy all non-stationary purple pieces that were revealed.","colour":"blue","side":"good","set":"original","image":"96.jpg"},
      {"name":"Anti-Purple Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Purple Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All purple pieces get -1.","colour":"blue","side":"good","set":"original","image":"97.jpg"},
      {"name":"Anti-Silver Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Silver Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All silver pieces get -1.","colour":"blue","side":"good","set":"original","image":"98.jpg"},
      {"name":"Anti-Red Wind","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Anti-Red Wind is attacked, destroy it and its attacker<br><i>Death Curse</i>: All red pieces get -1.","colour":"blue","side":"good","set":"original","image":"99.jpg"},
      {"name":"Dragon Talisman","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Dragon Talisman is attacked, destroy it. If all town spaces are empty, place any destroyed Dragon on an empty town space under your control.","colour":"blue","side":"good","set":"original","image":"100.jpg"},
      {"name":"Wind Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal this piece once per game to move Wind Castle to any empty adjacent space.","colour":"blue","side":"good","set":"original","image":"101.jpg"},
      {"name":"Cloud Citadel","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Cloud Citadel and a non-stationary piece adjacent to Cloud Citadel to give the non-stationary piece Flying Action until the end of the turn.","colour":"blue","side":"good","set":"original","image":"102.jpg"},
      {"name":"Kralc","power":"10","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Reveal Kralc to force an opponent to reveal one piece on a town space of your choice.","colour":"silver","side":"evil","set":"original","image":"103.jpg"},
      {"name":"Ultimadus","power":"10","race":"titan","abilities":"<i>Death Curse</i>: All Titans gain Berserk.","colour":"silver","side":"evil","set":"original","image":"104.jpg"},
      {"name":"Namhel","power":"9","race":"giant","abilities":"<i>Ability</i>: Reveal Namhel and an adjacent Giant to give the adjacent Giant +1 until the end of the turn. Use this ability only once per turn. Reveal the Giant piece affected.","colour":"silver","side":"evil","set":"original","image":"105.jpg"},
      {"name":"Crevcor","power":"9","race":"ogre","abilities":"<i>Death Curse</i>: All Silver pieces get +1.","colour":"silver","side":"evil","set":"original","image":"106.jpg"},
      {"name":"Evit","power":"8","race":"titan","abilities":"<i>Ability</i>: At the end of your turn, you may reveal and destroy Evit to take another turn.","colour":"silver","side":"evil","set":"original","image":"107.jpg"},
      {"name":"Girr","power":"8","race":"giant","abilities":"<i>Action</i>: Vision","colour":"silver","side":"evil","set":"original","image":"108.jpg"},
      {"name":"Cave Beast","power":"8","race":"beast","abilities":"<i>Action</i>: Reveal Cave Beast (while on a mountain space) to move it to any empty mountain space.","colour":"silver","side":"evil","set":"original","image":"109.jpg"},
      {"name":"Akillon","power":"7","race":"titan","abilities":"<i>Innate</i>: Berzerk","colour":"silver","side":"evil","set":"original","image":"110.jpg"},
      {"name":"Great Shaman","power":"7","race":"giant","abilities":"<i>Action</i>: Reveal and destroy Great Shaman to place any number of destroyed Silver Magic Pieces onto any empty spaces.","colour":"silver","side":"evil","set":"original","image":"111.jpg"},
      {"name":"Medusa","power":"7","race":"gorgon","abilities":"<i>Action</i>: Reveal and destroy Medusa to destroy all adjacent pieces.","colour":"silver","side":"evil","set":"original","image":"112.jpg"},
      {"name":"Golladus","power":"6","race":"titan","abilities":"<i>Action</i>: Charging","colour":"silver","side":"evil","set":"original","image":"113.jpg"},
      {"name":"Crush","power":"6","race":"giant","abilities":"<i>Innate</i>: Berzerk","colour":"silver","side":"evil","set":"original","image":"114.jpg"},
      {"name":"Helcar","power":"6","race":"beast","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: flying","colour":"silver","side":"evil","set":"original","image":"115.jpg"},
      {"name":"Neptillion","power":"5","race":"titan","abilities":"<i>Innate</i>: +2 while adjacent to a water space.","colour":"silver","side":"evil","set":"original","image":"116.jpg"},
      {"name":"Rock Giant","power":"5","race":"giant","abilities":"<i>Action</i>: Distance Strike","colour":"silver","side":"evil","set":"original","image":"117.jpg"},
      {"name":"Enchanted Shield","power":"5","race":"weapon","abilities":"<i>Ability</i>: Reveal and destroy Enchanted Shield to give an adjacent piece +2 until the end of the turn. Reveal the adjacent piece.","colour":"silver","side":"evil","set":"original","image":"118.jpg"},
      {"name":"Colossor","power":"4","race":"titan","abilities":"<i>Innate</i>: +3 against pieces with Flying Action.<br><i>Ability</i>: If Colossor is revealed by a piece with Distance Strike, Colossor is not destroyed. Instead, destroy the piece with Distance Strike.","colour":"silver","side":"evil","set":"original","image":"119.jpg"},
      {"name":"Mist Giant","power":"4","race":"giant","abilities":"<i>Innate</i>: +2 while adjacent to a water space.","colour":"silver","side":"evil","set":"original","image":"120.jpg"},
      {"name":"H'caor Ogre Mage","power":"4","race":"ogre","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Reveal H'caor (while on a mountain space) to move him to any other empty mountain space.","colour":"silver","side":"evil","set":"original","image":"121.jpg"},
      {"name":"Marr","power":"3","race":"titan","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Charging","colour":"silver","side":"evil","set":"original","image":"122.jpg"},
      {"name":"Dumes","power":"3","race":"giant","abilities":"<i>Ability</i>: Dumes may attack a piece under your control.<br><i>Action</i>: Charging","colour":"silver","side":"evil","set":"original","image":"123.jpg"},
      {"name":"Linghorn","power":"3","race":"minotaur","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"silver","side":"evil","set":"original","image":"124.jpg"},
      {"name":"Smektor","power":"2","race":"titan","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"silver","side":"evil","set":"original","image":"125.jpg"},
      {"name":"Uzelis","power":"2","race":"giant","abilities":"<i>Innate</i>: If Uzelis attacks a Sprite piece, destroy the Sprite piece.","colour":"silver","side":"evil","set":"original","image":"126.jpg"},
      {"name":"Gnarak","power":"2","race":"beast","abilities":"<i>Innate</i>: +7 on mountain Spaces.<br><i>Innate</i>: After Gnarak successfully attacks, you must choose an opponent to move Gnarak onto any empty space.","colour":"silver","side":"evil","set":"original","image":"127.jpg"},
      {"name":"Gwarf","power":"1","race":"giant","abilities":"<i>Innate</i>: If Gwarf attacks a piece with a base strength of 10, the attacked piece is destroyed.","colour":"silver","side":"evil","set":"original","image":"128.jpg"},
      {"name":"Cerebin","power":"1","race":"beast","abilities":"<i>Innate</i>: If Cerebin attacks a piece with a base strength of 10, the attacked piece is destroyed.<br><i>Action</i>: Charging","colour":"silver","side":"evil","set":"original","image":"129.jpg"},
      {"name":"Lightning Bolt","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Lightning Bolt is attacked, destroy it and its attacker. Any pieces on the 2 spaces in front of Lightning Bolt (non-label side) are also destroyed.","colour":"silver","side":"evil","set":"original","image":"130.jpg"},
      {"name":"Ground Lightning","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Ground Lightning is attacked, destroy it and its attacker. If the attacker has Flying, you may destroy any one additional piece on the same terrain as Ground Lightning.","colour":"silver","side":"evil","set":"original","image":"131.jpg"},
      {"name":"Living Statue","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack.<br><i>Magic</i>: If Living Statue is attacked, destroy it and its attacker.","colour":"silver","side":"evil","set":"original","image":"132.jpg"},
      {"name":"Eternal Idol","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Eternal Idol is attacked, destroy it and its attacker.<br><i>Death Curse</i>: When this Death Curse ends, place Eternal Idol on any empty space.","colour":"silver","side":"evil","set":"original","image":"133.jpg"},
      {"name":"Wheel of Energy","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal and destroy Wheel of Energy to give an adjacent piece +1 until the end of the turn. Reveal the adjacent piece affected.<br><i>Magic</i>: If Wheel of Energy is attacked, destroy it and its attacker.","colour":"silver","side":"evil","set":"original","image":"134.jpg"},
      {"name":"Titan Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Titan Castle to give an adjacent Titan +1 until the end of the turn. Use this ability once per turn. Reveal the Titan piece affected.","colour":"silver","side":"evil","set":"original","image":"135.jpg"},
      {"name":"Ogre Fort","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Ogre Fort to reveal and place an Ogre you control on any empty mountain space adjacent to Ogre Fort.","colour":"silver","side":"evil","set":"original","image":"136.jpg"},
      {"name":"Oppolifnas","power":"10","race":"dragon","abilities":"<i>Ability</i>: Reveal Oppolifnas and an adjacent piece you control to give the adjacent piece Flying Action until the end of the turn.<br><i>Action</i>: Flying","colour":"red","side":"evil","set":"original","image":"137.jpg"},
      {"name":"Lord Esenwein","power":"10","race":"vampire","abilities":"<i>Ability</i>: Reveal Lord Esenwein and any Vampire to give that Vampire Flying Action until the end of the turn.","colour":"red","side":"evil","set":"original","image":"138.jpg"},
      {"name":"Lord of Bones","power":"9","race":"skeleton","abilities":"<i>Ability</i>: Reveal Lord of Bones and any Skeleton to give that Skeleton Charging Action until the end of the turn.","colour":"red","side":"evil","set":"original","image":"139.jpg"},
      {"name":"Lord of the Dead","power":"9","race":"zombie","abilities":"<i>Ability</i>: After Lord of the Dead successfully attacks, you may put one destroyed Zombie back into play on any empty Marsh space. If there are no empty Marsh spaces, you cannot return a destroyed Zombie to the board.","colour":"red","side":"evil","set":"original","image":"140.jpg"},
      {"name":"Daemin","power":"8","race":"vampire","abilities":"<i>Innate</i>: If Daemin attacks a piece with a base strength of 2, 3, 4 or 5, put that piece into the space from which Daemin attacked. The attacked piece is now under your control.","colour":"red","side":"evil","set":"original","image":"141.jpg"},
      {"name":"Skeleton Horde","power":"8","race":"skeleton","abilities":"<i>Innate</i>: +1 on marsh spaces.","colour":"red","side":"evil","set":"original","image":"142.jpg"},
      {"name":"Mummy","power":"8","race":"zombie","abilities":"<i>Innate</i>: +1 on desert spaces.","colour":"red","side":"evil","set":"original","image":"143.jpg"},
      {"name":"Renil","power":"7","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Slashing","colour":"red","side":"evil","set":"original","image":"144.jpg"},
      {"name":"Moridium","power":"7","race":"angel","abilities":"<i>Innate</i>: If Moridium is revealed by a piece with the Vision Action, the piece with Vision is destroyed.<br><i>Action</i>: Flying","colour":"red","side":"evil","set":"original","image":"145.jpg"},
      {"name":"Murkis","power":"7","race":"zombie","abilities":"<i>Action</i>: Reveal Murkis (while on a narsh space) to move it to any empty marsh space.","colour":"red","side":"evil","set":"original","image":"146.jpg"},
      {"name":"Keelian","power":"6","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"red","side":"evil","set":"original","image":"147.jpg"},
      {"name":"Scythe","power":"6","race":"skeleton","abilities":"<i>Innate</i>: +2 against pieces with Flying Action.<br><i>Action</i>: Flying","colour":"red","side":"evil","set":"original","image":"148.jpg"},
      {"name":"Lingering Death","power":"6","race":"zombie","abilities":"<i>Action</i>: Reveal Lingering Death (while on a marsh space) to move it to any empty Marsh space.","colour":"red","side":"evil","set":"original","image":"149.jpg"},
      {"name":"Crimson","power":"5","race":"werewolf","abilities":"<i>Action</i>: Slashing","colour":"red","side":"evil","set":"original","image":"150.jpg"},
      {"name":"Sinakus","power":"5","race":"skeleton","abilities":"<i>Innate</i>: +1 on marsh spaces.<br><i>Action</i>: Quickness","colour":"red","side":"evil","set":"original","image":"151.jpg"},
      {"name":"Giant Zombie Rat","power":"5","race":"zombie","abilities":"<i>Innate</i>: +2 on marsh spaces.","colour":"red","side":"evil","set":"original","image":"152.jpg"},
      {"name":"Sarro","power":"4","race":"vampire","abilities":"<i>Action</i>: Teleport","colour":"red","side":"evil","set":"original","image":"153.jpg"},
      {"name":"Kutbone","power":"4","race":"skeleton","abilities":"<i>Action</i>: Distance Strike","colour":"red","side":"evil","set":"original","image":"154.jpg"},
      {"name":"Plague Bearer","power":"4","race":"zombie","abilities":"<i>Innate</i>: +7 on town spaces.","colour":"red","side":"evil","set":"original","image":"155.jpg"},
      {"name":"Dark Witch","power":"3","race":"vampire","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"red","side":"evil","set":"original","image":"156.jpg"},
      {"name":"Bone Legion","power":"3","race":"skeleton","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Quickness","colour":"red","side":"evil","set":"original","image":"157.jpg"},
      {"name":"Crazed Terror","power":"3","race":"zombie","abilities":"<i>Ability</i>: Reveal and destroy Crazed Terror to give an adjacent Zombie +2 until the end of the turn. Reveal the Zombie piece affected.","colour":"red","side":"evil","set":"original","image":"158.jpg"},
      {"name":"Bloodsucker","power":"2","race":"vampire","abilities":"<i>Ability</i>: Reveal and destroy a piece you control adjacent to Bloodsucker. Add the destroyed piece's current strength to Bloodsucker's current strength. Bloodsucker's increased strength lasts until the end of the turn.","colour":"red","side":"evil","set":"original","image":"159.jpg"},
      {"name":"Skeleton Warlock","power":"2","race":"skeleton","abilities":"<i>Action</i>: Quickness<br><i>Death Curse</i>: All Skeleton pieces get +1.","colour":"red","side":"evil","set":"original","image":"160.jpg"},
      {"name":"Gloomis","power":"2","race":"zombie","abilities":"<i>Action</i>: Reveal and destroy Gloomis to force your opponent to choose and destroy a piece under his/her control.","colour":"red","side":"evil","set":"original","image":"161.jpg"},
      {"name":"Wascyo","power":"1","race":"vampire","abilities":"<i>Innate</i>: If Wascyo attacks or is attacked by a piece with a base strength of 10, the base strength 10 piece is destroyed.","colour":"red","side":"evil","set":"original","image":"162.jpg"},
      {"name":"Jezrak","power":"1","race":"skeleton","abilities":"<i>Innate</i>: If Jezrak attacks a piece with a base strength of 9 or 10, the attacked piece is destroyed.","colour":"red","side":"evil","set":"original","image":"163.jpg"},
      {"name":"Zombie Grave","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Zombie Grave is attacked, destroy it and its attacker. Replace Zombie Grave with any destroyed Zombie under your control. (The destroyed Zombie piece has been brought back to life.)","colour":"red","side":"evil","set":"original","image":"164.jpg"},
      {"name":"Skeleton Grave","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Skeleton Grave is attacked, destroy it and its attacker. Replace Skeleton Grave with any destroyed Skeleton. The destroyed Skeleton piece has been brought back to life.","colour":"red","side":"evil","set":"original","image":"165.jpg"},
      {"name":"Decay","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal and destroy Decay to destroy all adjacent pieces.<br><i>Magic</i>: If Decay is attacked, destroy it and its attacker.","colour":"red","side":"evil","set":"original","image":"166.jpg"},
      {"name":"Skull of Gorion","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Skull of Gorion is attacked, destroy it and its attacker. If the attacker is a Gold piece, you may destroy any piece on a marsh space.","colour":"red","side":"evil","set":"original","image":"167.jpg"},
      {"name":"Fire Wall","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal and destroy Fire Wall to reveal an opponent's piece adjacent to Fire Wall. That piece gets -2 until the end of the turn.<br><i>Magic</i>: If Fire Wall is attacked, destroy it and its attacker.","colour":"red","side":"evil","set":"original","image":"168.jpg"},
      {"name":"Rancid Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Rancid Castle to give an adjacent Red piece +1 until the end of the turn. Use this ability only once per turn. Reveal the Red piece affected.","colour":"red","side":"evil","set":"original","image":"169.jpg"},
      {"name":"Bone Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal to give an adjacent Skeleton Slashing Action until the end of the turn.","colour":"red","side":"evil","set":"original","image":"170.jpg"},
      {"name":"Bremmuk","power":"10","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 8) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","set":"original","image":"171.jpg"},
      {"name":"Queen Kiova","power":"10","race":"insectoid","abilities":"<i>Action</i>: Reveal Queen Kiova to place up to 3 Insectoid pieces you control onto any empty spaces adjacent to Queen Kiova. Reveal all Insectoid pieces placed.","colour":"purple","side":"evil","set":"original","image":"172.jpg"},
      {"name":"Gangis Wind","power":"9","race":"mold","abilities":"<i>Action</i>: Reveal Gangis Wind (while on a town space) to move it to any empty town space.","colour":"purple","side":"evil","set":"original","image":"173.jpg"},
      {"name":"Frinhorn","power":"9","race":"dragon","abilities":"<i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Flying","colour":"purple","side":"evil","set":"original","image":"174.jpg"},
      {"name":"Mrmrm","power":"8","race":"insectoid","abilities":"<i>Innate</i>: +1 against pieces with Flying.","colour":"purple","side":"evil","set":"original","image":"175.jpg"},
      {"name":"Oeroed","power":"8","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 6) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","set":"original","image":"176.jpg"},
      {"name":"Garpus","power":"8","race":"worm","abilities":"<i>Action</i>: Reveal Garpus and your Castle to move Garpus to any empty space adjacent to your Castle.","colour":"purple","side":"evil","set":"original","image":"177.jpg"},
      {"name":"Yorkus","power":"7","race":"insectoid","abilities":"<i>Action</i>: Reveal Yorkus (while on a desert space) to move him to any empty desert space.","colour":"purple","side":"evil","set":"original","image":"178.jpg"},
      {"name":"Bactillion","power":"7","race":"mold","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Flying","colour":"purple","side":"evil","set":"original","image":"179.jpg"},
      {"name":"Perplexon","power":"7","race":"mutant","abilities":"<i>Innate</i>: After Perplexon successfully attacks, choose an opponent to select one piece under his/her control. Then, you choose one piece under your control. The 2 pieces switch places without either piece being revealed. Ownership of the pieces does not change.","colour":"purple","side":"evil","set":"original","image":"180.jpg"},
      {"name":"Accissejo","power":"6","race":"insectoid","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Slashing","colour":"purple","side":"evil","set":"original","image":"181.jpg"},
      {"name":"Slud","power":"6","race":"mold","abilities":"<i>Death Curse</i>: When this Death Curse ends, take any number of destroyed Mold pieces (with a total base strength value not exceeding 4) and place them on any empty forest spaces. (These Mold pieces have been brought back to life.)","colour":"purple","side":"evil","set":"original","image":"182.jpg"},
      {"name":"yarbu the Magic Eater","power":"6","race":"worm","abilities":"<i>Innate</i>: Dispel Magic<br><i>Action</i>: Charging","colour":"purple","side":"evil","set":"original","image":"183.jpg"},
      {"name":"Hades Giant","power":"5","race":"insectoid","abilities":"<i>Innate</i>: +2 on mountain spaces.","colour":"purple","side":"evil","set":"original","image":"184.jpg"},
      {"name":"Smerdim","power":"5","race":"mold","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Innate</i>: Berzerk","colour":"purple","side":"evil","set":"original","image":"185.jpg"},
      {"name":"Lizarkus","power":"5","race":"reptillian","abilities":"<i>Innate</i>: -2 on desert spaces.<br><i>Action</i>: Reveal Lizarkus (while adjacent to a water space) to move him to any empty space adjacent to any water space.","colour":"purple","side":"evil","set":"original","image":"186.jpg"},
      {"name":"Marbas","power":"4","race":"insectoid","abilities":"<i>Innate</i>: +2 on mountain spaces.<br><i>Action</i>: Reveal and destroy Marbas to reveal any one opponent's piece.","colour":"purple","side":"evil","set":"original","image":"187.jpg"},
      {"name":"Spitting Mushrooms","power":"4","race":"mold","abilities":"<i>Action</i>: Distance Strike","colour":"purple","side":"evil","set":"original","image":"188.jpg"},
      {"name":"Parasitix","power":"4","race":"worm","abilities":"<i>Action</i>: Reveal and destroy Parasitix to force an opponent to choose any piece under his/her control. You gain control of that piece.","colour":"purple","side":"evil","set":"original","image":"189.jpg"},
      {"name":"Kzz't","power":"3","race":"insectoid","abilities":"<i>Innate</i>: +3 against pieces with Flying Action.<br><i>Action</i>: Flying","colour":"purple","side":"evil","set":"original","image":"190.jpg"},
      {"name":"Slime of Bremmuk","power":"3","race":"mold","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Action</i>: Charging","colour":"purple","side":"evil","set":"original","image":"191.jpg"},
      {"name":"Silwon the Confusing","power":"3","race":"mutant","abilities":"<i>Innate</i>: After Silwon the Confusing successfully attacks, you gain control of any one opponent's piece adjacent to Silwon. (Your choice.)","colour":"purple","side":"evil","set":"original","image":"192.jpg"},
      {"name":"Nazint","power":"2","race":"insectoid","abilities":"<i>Ability</i>: Reveal and destroy Nazint to give an adjacent Purple piece +1 until the end of the turn. Reveal the Purple piece affected.","colour":"purple","side":"evil","set":"original","image":"193.jpg"},
      {"name":"Foulis","power":"2","race":"mold","abilities":"<i>Innate</i>: +2 on forest spaces.<br><i>Innate</i>: Dispel Magic","colour":"purple","side":"evil","set":"original","image":"194.jpg"},
      {"name":"Nosimaj","power":"2","race":"mutant","abilities":"<i>Death Curse</i>: All non-stationary pieces gain Flying Action.","colour":"purple","side":"evil","set":"original","image":"195.jpg"},
      {"name":"Helliton","power":"1","race":"insectoid","abilities":"<i>Innate</i>: +4 on mountain space.<br><i>Ability</i>: If Helliton attacks a piece with a base strength of 9 or 10, that piece is destroyed.","colour":"purple","side":"evil","set":"original","image":"196.jpg"},
      {"name":"Demarn the Putrid","power":"1","race":"mold","abilities":"<i>Innate</i>: If Demarn is revealed by a piece with Distance Strike, Demarn is not destroyed. Instead, destroy the revealing piece that has Distance Strike.<br><i>Ability</i>: If Demarn attacks a piece with a base strength of 10, that piece is destroyed.","colour":"purple","side":"evil","set":"original","image":"197.jpg"},
      {"name":"Paranos","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Paranos is attacked, destroy Paranos and its attacker.","colour":"purple","side":"evil","set":"original","image":"198.jpg"},
      {"name":"Spore of Parasitix","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Action</i>: Reveal and destroy Spore of Parasitix to force an opponent to choose any piece under his/her control. Gain control of the chosen piece.<br><i>Magic</i>: If Spore of Parasitix is attacked, destroy it and its attacker.","colour":"purple","side":"evil","set":"original","image":"199.jpg"},
      {"name":"Flit Spore","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Flit Spore is attacked, destroy it and its attacker.<br><i>Death Curse</i>: All Purple pieces get +1.","colour":"purple","side":"evil","set":"original","image":"200.jpg"},
      {"name":"Fungus of Bremmuk","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Fungus of Bremmuk is attacked, destroy it. Then choose an opponent to reveal all Magic pieces under his/her control.","colour":"purple","side":"evil","set":"original","image":"201.jpg"},
      {"name":"Larva","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Larva is attacked, destroy Larva and its attacker.<br><i>Death Curse</i>: All Insectoid pieces get +1.","colour":"purple","side":"evil","set":"original","image":"202.jpg"},
      {"name":"The Hidden Hive","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal The Hidden Hive to place it on any empty Forest space. Use this action only once per game.","colour":"purple","side":"evil","set":"original","image":"203.jpg"},
      {"name":"Infested Nest","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Ability</i>: Reveal Infested nest to give an adjacent Purple piece +1. Use this ability only once per turn. Reveal the Purple piece affected.","colour":"purple","side":"evil","set":"original","image":"204.jpg"},
      {"name":"Delmikra","power":"10","race":"spirit","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: When this Death Curse ends, force an opponent to choose 2 pieces under his/her control. You gain control of the chosen pieces.","colour":"blue","side":"good","set":"promotional","image":"205.jpg"},
      {"name":"Dalious","power":"10","race":"ogre","abilities":"<i>Death Curse</i>: When this Death Curse ends, all players must reveal and destroy all Magic pieces under their control. The magic spells of those pieces are not cast.","colour":"silver","side":"evil","set":"promotional","image":"206.jpg"},
      {"name":"Celams","power":"10","race":"dragon","abilities":"<i>Ability</i>: Reveal Celams when a piece flies over her to destroy the piece that flew over Celams.<br><i>Action</i>: Flying","colour":"gold","side":"good","set":"promotional","image":"207.jpg"},
      {"name":"Noslrac","power":"10","race":"mutant","abilities":"<i>Ability</i>: Reveal Noslrac and an adjacent Mutant to give that Mutant +2 until the end of the turn. Use this ability only once per turn.<br><i>Death Curse</i>: When this Death Curse ends, chosen opponent destroys 5 pieces under his control simultaneously. Then choose and destroy 3 pieces under your control simultaneously.","colour":"purple","side":"evil","set":"promotional","image":"208.jpg"},
      null,null,
      {"name":"Galrien","power":"10","race":"angel","abilities":"<i>Action</i>: Flying<br><i>Death Curse</i>: When this Death Curse ends, place any blue destroyed piece with a base strength of 9 or lower on an empty town space.","colour":"blue","side":"good","set":"expansion","image":"211.jpg"},
      {"name":"Minchu","power":"9","race":"dragon","abilities":"<i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Reveal Minchu to regain control of a piece adjacent to Minchu. The adjacent piece must be a beige army piece that an opponent has previously taken control of.<br><i>Action</i>: Reveal Minchu (while on a town space) to move him to any empty town space.","colour":"blue","side":"good","set":"expansion","image":"212.jpg"},
      {"name":"Zanofor Bowdode","power":"8","race":"wizard","abilities":"<i>Innate</i>: Conversion. When constructing your army, you may build your army with Zanofor and 5 pieces with a base power of 7 instead of 3 pieces with a base power of 8 and 3 pieces with a base power of 7.<br><i>Innate</i>: +1 on town spaces.","colour":"blue","side":"good","set":"expansion","image":"213.jpg"},
      {"name":"Adellin","power":"7","race":"angel","abilities":"<i>Innate</i>: Dispel Magic<br><i>Innate</i>: +1 on forest spaces.<br><i>Action</i>: Quickness","colour":"blue","side":"good","set":"expansion","image":"214.jpg"},
      {"name":"Concan","power":"6","race":"dragon","abilities":"<i>Action</i>: Assassination. Reveal and destroy Concan to force an opponent to reveal and destroy all pieces he or she controls with the name Evit.<br><i>Action</i>: Flying","colour":"blue","side":"good","set":"expansion","image":"215.jpg"},
      {"name":"Wyatt Yarg","power":"5","race":"wizard","abilities":"<i>Innate</i>: +2 on town spaces.<br><i>Action</i>: Conversion. When constructing your army, you may build your army with Wyatt Yarg and 5 pieces with a base power of 4 instead of 3 pieces with a base power of 5 and 3 pieces with a base power of 4.","colour":"blue","side":"good","set":"expansion","image":"216.jpg"},
      {"name":"Angela's Amulet","power":"4","race":"artifact","abilities":"<i>Ability</i>: Reveal Angela's Amulet and an adjacent Angel to give the adjacent Angel +1 until the end of the turn. Use this ability only once per turn.<br><i>Action</i>: Quickness","colour":"blue","side":"good","set":"expansion","image":"217.jpg"},
      {"name":"Warbrin","power":"3","race":"dragon","abilities":"<i>Innate</i>: +8 against pieces with Berserk.<br><i>Innate</i>: +2 on forest spaces.<br><i>Death Curse</i>: When this death curse ends, reveal all pieces on town spaces. Destroy all non-stationary pieces revealed.","colour":"blue","side":"good","set":"expansion","image":"218.jpg"},
      {"name":"Wizard's Familiar","power":"2","race":"familiar","abilities":"<i>Innate</i>: If Wizard's Familiar is attacked and destroyed, reveal all adjacent pieces. Any wizards revealed are destroyed.<br><i>Ability</i>: Reveal Wizard's Familiar and an adjacent Wizard to add the Familiar's current power to the Wizard until the end of the turn. Use this ability only once per turn.","colour":"blue","side":"good","set":"expansion","image":"219.jpg"},
      {"name":"Mystical Mirror","power":"1","race":"artifact","abilities":"<i>Innate</i>: If Mystical Mirror attacks or is attacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Action</i>: Assassination. Reveal and destroy Mystical Mirror to force an opponent to reveal and destroy all pieces he or she controls with the name Medusa.","colour":"blue","side":"good","set":"expansion","image":"220.jpg"},
      {"name":"Galrien's Mist","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move.<br><i>Magic</i>: If Galrien's Mist is attacked, destroy it. If the attacker's current strength is 7 or higher destroy it.","colour":"blue","side":"good","set":"expansion","image":"221.jpg"},
      {"name":"Galrien's Castle","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Galrien's Castle and a Galrien's Mist piece. Destroy the Galrien's Mist piece and place Galrien's Castle on the space Galrien's Mist occupied.","colour":"blue","side":"good","set":"expansion","image":"222.jpg"},
      {"name":"Ursatoar","power":"10","race":"mutant","abilities":"<i>Action</i>: Reveal Ursatoar to choose and reveal any piece adjacent to Ursatoar. If the piece is a Magic piece, gain control of it. If it is any other type of piece, destroy Ursatoar.","colour":"purple","side":"evil","set":"expansion","image":"223.jpg"},
      {"name":"Yeroms","power":"9","race":"worm","abilities":"<i>Death Curse</i>: All Worms gain Slashing Action","colour":"purple","side":"evil","set":"expansion","image":"224.jpg"},
      {"name":"Sinnue","power":"8","race":"reptillian","abilities":"<i>Innate</i>: If Sinnue destroys a piece with a Death Curse, the Death Curse piece does not go into effect and is immediately put into the destroyed piece area.<br><i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Charging","colour":"purple","side":"evil","set":"expansion","image":"225.jpg"},
      {"name":"Rekabevets","power":"7","race":"worm","abilities":"<i>Innate</i>: +1 on plains spaces.<br><i>Action</i>: Reveal and destroy Rekabevets to force an opponent to simultaneously destroy all pieces under his or her control with a base power of 2. Then destroy all pieces under your control with a base power of 2 simultaneously.","colour":"purple","side":"evil","set":"expansion","image":"226.jpg"},
      {"name":"Lawok","power":"6","race":"mutant","abilities":"<i>Innate</i>: +1 against gold pieces.<br><i>Action</i>: Assassination. Reveal and destroy Lawok to force an opponent to reveal and destroy all pieces he or she controls with the name Oreld the Deliverer.<br><i>Action</i>: Slashing","colour":"purple","side":"evil","set":"expansion","image":"227.jpg"},
      {"name":"Coyote","power":"5","race":"mutant","abilities":"<i>Action</i>: Evolution. Reveal and destroy Coyote while on a plains space to place any one of your destroyed pieces with a base power of 6 on the space that Coyote occupied.","colour":"purple","side":"evil","set":"expansion","image":"228.jpg"},
      {"name":"Gallikon","power":"4","race":"worm","abilities":"<i>Action</i>: Vision<br><i>Death Curse</i>: All Worms gain Quickness Action.","colour":"purple","side":"evil","set":"expansion","image":"229.jpg"},
      {"name":"Ilopanid","power":"3","race":"worm","abilities":"<i>Action</i>: Evolution. Reveal and destroy Ilopanid while on a plains space to place any one of your destroyed pieces with a base power of 4 on the space that Ilopanid occupied.","colour":"purple","side":"evil","set":"expansion","image":"230.jpg"},
      {"name":"Oplit","power":"2","race":"worm","abilities":"<i>Innate</i>: Dispel Magic<br><i>Innate</i>: +9 against pieces with Berserk.<br><i>Action</i>: Charging","colour":"purple","side":"evil","set":"expansion","image":"231.jpg"},
      {"name":"Vulad","power":"1","race":"worm","abilities":"<i>Innate</i>: If Vulad attacks or is atacked by a base strength 10 piece, the base strength 10 piece is destroyed.<br><i>Death Curse</i>: All Worms pieces get +1.","colour":"purple","side":"evil","set":"expansion","image":"232.jpg"},
      {"name":"Wonder Egg","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot Attack<br><i>Action</i>: Evolution. Reveal and destroy Wonder Egg while on a plains space to place any one of your destroyed pieces with a base power of 2 on the space that Wonder Egg occupied.<br><i>Magic</i>: If Wonder Egg is attacked, destroy Wonder Egg and its attacker.","colour":"purple","side":"evil","set":"expansion","image":"233.jpg"},
      {"name":"Plattenuis","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move.<br><i>Action</i>: Reveal Plattenuis (while on a plains space) to move a piece under your control adjcent to Plattenuis to any empty plains space.","colour":"purple","side":"evil","set":"expansion","image":"234.jpg"},
      null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
      {"name":"Books of Knowledge","power":"10","race":"Artifact","abilities":"<i>Action:</i> Reveal Books of Knowledge along with an adjacent Alchemist and Material. Destroy the Material and place it in the Death Curse Area. The Material's effect is now a Death Curse, it affects all Alchemists until it ends.<br><i>Death Curse:</i> When this Death Curse ends, place any destroyed gold piece with a base strength of 8 or lower on an empty plains space.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/500.jpg"},
      {"name":"Yamato","power":"9","race":"Alchemist","abilities":"<i>Action:</i> Reveal and destroy Yamato to place any of your destroyed base strength 2 pieces onto empty spaces adjacent to pieces under your control.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/501.jpg"},
      {"name":"Kataka","power":"8","race":"Alchemist","abilities":"<i>Innate:</i> +1 on plains spaces.<br><i>Action:</i> Reveal Kataka and any adjacent material to swap that material with any material currently in the death curse area.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/502.jpg"},
      {"name":"Lightning Rod","power":"7","race":"Artifact","abilities":"<i>Ability:</i> Reveal Lightning Rod to negate any magic cast on an adjacent piece, any magic abilities are cancelled.<br><i>Action:</i> Quickness. Reveal Lightning Rod to move it 2 spaces.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/503.jpg"},
      {"name":"Tiandan","power":"6","race":"Alchemist","abilities":"<i>Innate:</i> +2 on plains spaces.<br><i>Action:</i>  Reveal Tiandan to move one material piece to any empty space adjacent to Tiandan. Reveal the material moved.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/504.jpg"},
      {"name":"Mercury","power":"5","race":"Material","abilities":"<i>Ability:</i> Reveal and Destroy Mercury to give an adjacent Alchemist Slashing Action until the end of the turn. Reveal the Alchemist affected.<br><i>Effect:</i> Slashing Action.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/505.jpg"},
      {"name":"Cinnabar","power":"4","race":"Material","abilities":"<i>Ability:</i> Reveal and Destroy Cinnabar to give an adjacent Alchemist Charging Action until the end of the turn. Reveal the Alchemist affected.<br><i>Effect:</i> Charging Action.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/506.jpg"},
      {"name":"Crystal Vapor","power":"3","race":"Material","abilities":"<i>Ability:</i> Reveal and Destroy Crystal Vapor to give an adjacent Alchemist Vision Action until the end of the turn. Reveal the Alchemist affected.<br><i>Effect:</i> Vision Action.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/507.jpg"},
      {"name":"Liquid Sapphire","power":"2","race":"Material","abilities":"<i>Ability:</i> Reveal and Destroy Liquid Sapphire to give an adjacent gold piece +1 until the end of the turn. Reveal the piece affected.<br><i>Effect:</i> +1 to Alchemists.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/508.jpg"},
      {"name":"Wang Tan","power":"1","race":"Alchemist","abilities":"<i>Innate:</i> If Wang Tan attacks a piece with a base strength of 10, that piece is destroyed.<br><i>Innate:</i> If Wang Tan is revealed by a piece with Distance Strike, Wang Tan is not Destroyed.<br><i>Action:</i> Reveal Wang Tan and an adjacent material. Destroy Wang Tan to place the material in the Death Curse Area, The Material's effect is now a Death Curse, it affects all Alchemists until it ends.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/509.jpg"},
      {"name":"Porous Pit","power":"*","race":"Magic","abilities":"<i>Innate:</i> Porous Pit cannot attack.<br><i>Action:</i> Reveal and destroy Porous Pit to move an adjacent piece to any empty town space. Do not reveal the piece being moved.<br><i>Magic:</i> If Porous Pit is attacked, destroy it and its attacker.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/510.jpg"},
      {"name":"Chamber of Elixirs","power":"C","race":"Castle","abilities":"<i>Stationary:</i> The Chamber of Elixirs cannot move.<br><i>Action:</i> Reveal the Chamber of Elixirs and 2 adjacent Materials. Destroy the 2 materials and place one destroyed Alchemist (whose base strength is equal to or less than the combined current strength of the 2 Materials) on an empty space adjacent to the Chamber.<br><i>Action:</i> Reveal the Chamber of Elixirs to put one destoyed piece (with a Death Curse or Effect), under your control, in the Death Curse Area. Use this Action only once per game.","colour":"gold","side":"good","set":"thunderpoint","image":"thunderpoint/511.jpg"},
      null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
      {"name":"Great Beast","power":"10","race":"Beast","abilities":"<i>Action:</i> Flying. Reveal Great Beast to jump him over any numer of pieces or water spaces vertically or horizontally. Great Beast must land on the first empty space when Flying.<br><i>Death Curse:</i> When this Death Curse ends reveal any 2 opponent's pieces. Destroy one of the pieces revealed (base strength 9 or lower).","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/536.jpg"},
      {"name":"Rakumus","power":"9","race":"Minotaur","abilities":"<i>Ability:</i> Reveal Rakumus and any Minotaur (before or after an action) to move that Minotaur to an empty adjacent space. Use this ability only once per game.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/537.jpg"},
      {"name":"Vrock","power":"8","race":"Harpy","abilities":"<i>Innate:</i> Vrock negates all opponents innate abilities that she attackes or is attacked by.<br><i>Action:</i> Flying. Reveal Vrock to jump her over any numer of pieces or water spaces vertically or horizontally. Vrock must land on the first empty space when Flying.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/538.jpg"},
      {"name":"Gorgimera","power":"7","race":"Gorgon","abilities":"<i>Action:</i> Switching: Reveal Gorgemera and any Living Statue you control. Then switch spaces with that piece.<br><i>Action:</i> Reveal Gorgimera and an adjacent opponent's piece. If the piece is stationary, that piece is destroyed. If the piece is not stationary, destroy Gorgimera.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/539.jpg"},
      {"name":"Lucious","power":"6","race":"Minotaur","abilities":"<i>Innate:</i> Berzerk. After Lucious has a successfully attack, he must attack an opponent's piece again if possible.<br><i>Innate:</i> If Lucious attacks a piece with base strength of 3, destroy Lucious. The base strength 3 piece is not destoryed.<br><i>Innate:</i> +1 against Blue Pieces.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/540.jpg"},
      {"name":"Yedusee","power":"5","race":"Paladin","abilities":"<i>Innate:</i> +3 against all Gold Pieces.<br><i>Death Curse:</i> All gold pieces get -1.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/541.jpg"},
      {"name":"K'russ Ogre Mage","power":"4","race":"Orge","abilities":"<i>Innate:</i> +2 against all wizards.<br><i>Innate:</i> +2 on mountains.<br><i>Action:</i> Quickness. Reveal K'russ Ogre Mage to move him 2 spaces","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/542.jpg"},
      {"name":"Druegar","power":"3","race":"Orge","abilities":"<i>Innate:</i> If Druegar attacks a piece with Dispell Magic, the piece with Dispell Magic is destroyed.<br><i>Action:</i> Charging. Reveal Druegar to move him any number of spaces vertically or horizotally.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/543.jpg"},
      {"name":"Beast-Tamer","power":"2","race":"Beast","abilities":"<i>Innate:</i> If Beast-Tamer makes a sucessful attack, reveal all adjacent pieces. destroy one piece revealed.<br><i>Ability:</i> Reveal Beast-Tamer and an adjacent Beast to give that Beast +1 til the end of the turn.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/544.jpg"},
      {"name":"Dragonslayer","power":"1","race":"Titan","abilities":"<i>Innate:</i> If dragonslayer attacks a piece with a base strengh of 10, destroy that piece.<br><i>Innate:</i> If dragonslayer attacks any Dragon, destroy the Dragon.<br><i>Action:</i> Quickness. Reveal Dragonslayer to move him 2 spaces.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/545.jpg"},
      {"name":"Hurricane","power":"*","race":"Magic","abilities":"<i>Innate:</i> Hurricane cannot attack.<br><i>Innate:</i> If Hurricane is revealed by a piece with Distance Strike, destroy the piece with Distant Strike.<br><i>Magic:</i> If Hurricane is attacked, destroy it and its attacker.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/546.jpg"},
      {"name":"Minotaur Maze","power":"C","race":"Castle","abilities":"<i>Stationary:</i> Minotaur Maze cannot move.<br><i>Action:</i> Reveal Minotaur Maze and any Minotaur piece. Destroy the Minotaur piece and place Minotaur Maze on the space the Minotaur occupied. Use this action only once per game.<br><i>Ability:</i> Reveal Minotaur Maze and any Minotaur to give that Minotaur Charging Action until the end of the turn. Use this Ability only once per game.","colour":"silver","side":"evil","set":"thunderpoint","image":"thunderpoint/547.jpg"},
      null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
      {"name":"Harry Potter","power":"10","race":"Hogwarts student","abilities":"<i>Action</i>: Flying<br><i>Ability</i>: If Harry is adjacent to Ron and/or Hermione, reveal Harry and Ron and/or Hermione to give them +1 until the end of the turn. Use this ability only once per turn.<br><i>Innate</i>: +1 against snakes","side":"good","set":"harrypotter","image":"harrypotter/harrypotter.png"},
      {"name":"Professor McGonagall","power":"9","race":"Hogwarts teacher and member of the Order of the Phoenix","abilities":"<i>Death Curse</i>: All Hogwarts students get +1.","side":"good","set":"harrypotter","image":"harrypotter/mcgonagall.png"},
      {"name":"Hagrid","power":"8","race":"Hogwarts teacher and member of the Order of the Phoenix","abilities":"<i>Innate</i>: +1 on forest spaces<br><i>Innate</i>: +1 against beasts","side":"good","set":"harrypotter","image":"harrypotter/hagrid.png"},
      {"name":"Ron Weasley","power":"8","race":"Hogwarts student","abilities":"<i>Ability</i>: If Ron is adjacent to Harry and/or Hermione, reveal Ron and Harry and/or Hermione to give them +1 until the end of the turn. Use this ability only once per turn.","side":"good","set":"harrypotter","image":"harrypotter/ronweasley.png"},
      {"name":"Sirius Black","power":"8","race":"member of the Order of the Phoenix","abilities":"<i>Action</i>: Switching (with any non-human)<br><i>Innate</i>: +1 against dementors","side":"good","set":"harrypotter","image":"harrypotter/siriusblack.png"},
      {"name":"Hermione Granger","power":"7","race":"Hogwarts student","abilities":"<i>Ability</i>: If Hermione is adjacent to Harry and/or Ron, reveal Hermione and Harry and/or Ron to give them +1 until the end of the turn. Use this ability only once per turn.<br><i>Innate</i>: +1 on town spaces<br><i>Innate</i>: Dispel magic","side":"good","set":"harrypotter","image":"harrypotter/hermionegranger.png"},
      {"name":"Mad-eye Moody","power":"7","race":"member of the Order of the Phoenix","abilities":"<i>Action</i>: Vision","side":"good","set":"harrypotter","image":"harrypotter/madeyemoody.png"},
      {"name":"Fawkes","power":"7","race":"phoenix","abilities":"<i>Action</i>: Flying<br><i>Action</i>: Reveal Fawkes (whilst on a mountain space) to move him to any empty mountain space.","side":"good","set":"harrypotter","image":"harrypotter/fawkes.png"},
      {"name":"Buckbeak","power":"6","race":"hippogriff","abilities":"<i>Action</i>: Flying<br><i>Innate</i>: Berzerk","side":"good","set":"harrypotter","image":"harrypotter/buckbeak.png"},
      {"name":"Hogwarts Express","power":"6","race":"train","abilities":"<i>Action</i>: Reveal the Hogwarts Express and an adjacent Hogwarts student or teacher to give them quickness until the end of the turn.","side":"good","set":"harrypotter","image":"harrypotter/hogwartsexpress.png"},
      {"name":"Remus Lupin","power":"6","race":"member of the Order of the Phoenix","abilities":"<i>Innate</i>: Berzerk<br><i>Ability</i>: Lupin may attack a piece under your control.<br><i>Innate</i>: +1 when attacking","side":"good","set":"harrypotter","image":"harrypotter/remuslupin.png"},
      {"name":"Charlie Weasley","power":"5","race":"dragon keeper","abilities":"<i>Innate</i>: +3 against dragons<br><i>Action</i>: Flying","side":"good","set":"harrypotter","image":"harrypotter/charlieweasley.png"},
      {"name":"Rufus Scrimgeour","power":"5","race":"Minister of Magic","abilities":"<i>Action</i>: Surround","side":"good","set":"harrypotter","image":"harrypotter/rufusscrimgeour.png"},
      {"name":"Sword of Gryffindor","power":"5","race":"sword","abilities":"<i>Ability</i>: Reveal the Sword of Griffindor and an adjacent piece to give the adjacent piece +1 until the end of the turn. Use this ability only once per turn.","side":"good","set":"harrypotter","image":"harrypotter/swordofgryffindor.png"},
      {"name":"Kingsley Shacklebolt","power":"4","race":"member of the Order of the Phoenix","abilities":"<i>Death Curse</i>: All Death Eaters get -1.","side":"good","set":"harrypotter","image":"harrypotter/kingsleyshacklebolt.png"},
      {"name":"Firebolt","power":"4","race":"broomstick","abilities":"<i>Ability</i>: Reveal Firebolt and an adjacent piece to give the adjacent piece flying action until the end of the turn.","side":"good","set":"harrypotter","image":"harrypotter/firebolt.png"},
      {"name":"Archer","power":"4","race":"centaur","abilities":"<i>Action</i>: Distance Strike","side":"good","set":"harrypotter","image":"harrypotter/archer.png"},
      {"name":"Fluffy","power":"3","race":"three-headed dog","abilities":"<i>Innate</i>: Berzerk","side":"good","set":"harrypotter","image":"harrypotter/fluffy.png"},
      {"name":"Unicorn","power":"3","race":"unicorn","abilities":"<i>Ability</i>: After Unicorn successfully attacks, gain control of any adjacent piece.","side":"good","set":"harrypotter","image":"harrypotter/unicorn.png"},
      {"name":"Professor Flitwick","power":"3","race":"Hogwarts teacher","abilities":"<i>Innate</i>: Dispel magic<br><i>Action</i>: Quickness","side":"good","set":"harrypotter","image":"harrypotter/flitwick.png"},
      {"name":"Madam Pomfrey","power":"2","race":"nurse","abilities":"<i>Ability</i>: Reveal this piece when an attack happens.  If both pieces involved in the attack have the same current strength, instead of both pieces being destroyed, neither is destroyed and the attacking piece moves onto the square it last occupied.<br><i>Innate</i>: If Madam Pomfrey has been revealed, she must use her ability whenever possible.","side":"good","set":"harrypotter","image":"harrypotter/madampomfrey.png"},
      {"name":"Dobby","power":"2","race":"house-elf","abilities":"<i>Innate</i>: If Dobby attacks or is attacked by a piece which destroyed Harry Potter, the piece is destroyed.<br><i>Innate</i>: -1.5 when attacking","side":"good","set":"harrypotter","image":"harrypotter/dobby.png"},
      {"name":"Neville Longbottom","power":"2","race":"Hogwarts student","abilities":"<i>Death Curse</i>: All members of the Order of the Phoenix get +1.","side":"good","set":"harrypotter","image":"harrypotter/nevillelongbottom.png"},
      {"name":"Priori Incantatem","power":"1","race":"spell","abilities":"<i>Innate</i>: If Priori Incantatem attacks or is attacked by Voldemort, Voldemort is destroyed.","side":"good","set":"harrypotter","image":"harrypotter/prioriincantatem.png"},
      {"name":"Wingardium Leviosa","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Wingardium Leviosa is attacked, destroy it and its attacker.","side":"good","set":"harrypotter","image":"harrypotter/wingardiumleviosa.png"},
      {"name":"Impedimenta","power":"*","race":"magic","abilities":"<i>Stationary</i>: Cannot move<br><i>Magic</i>: If Impedimenta is attacked, destroy it. Good gets an extra turn after the next good turn.","side":"good","set":"harrypotter","image":"harrypotter/impedimenta.png"},
      {"name":"Patronus","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Patronus is attacked, destroy it and its attacker. If the attacker is a dementor, you may bring back a destroyed beast or non-human magical creature on any emtpy space. If the attacker is not a dementor, you may reveal any two pieces.","side":"good","set":"harrypotter","image":"harrypotter/patronus.png"},
      {"name":"Protego","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Protego is attacked, destroy it and its attacker.<br><i>Death Curse</i>: All humans get +1","side":"good","set":"harrypotter","image":"harrypotter/protego.png"},
      {"name":"Azkaban","power":"*","race":"magic prison","abilities":"<i>Stationary</i>: Cannot move<br><i>Magic</i>: If Azkaban is attacked by a non-muggle human, place the attacker on the first empty water space, going clockwise from the top left. The attacker is now imprisoned and cannot move, perform any actions or use any abilities until they are freed. If all water spaces are full, free the imprisoned piece which first attacked Azkaban by placing it on the last space the attacker occupied and imprison the attacker by placing it on the now empty water space.","side":"good","set":"harrypotter","image":"harrypotter/azkaban.png"},
      {"name":"Hogwarts","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move<br><i>Action</i>: Reveal Hogwarts and an adjacent Hogwarts student or teacher to give them +1 until the end of the turn. Use this ability only once per turn.","side":"good","set":"harrypotter","image":"harrypotter/hogwarts.png"},
      {"name":"Lord Voldemort","power":"10","race":"human","abilities":"<i>Innate</i>: Imperius. If Voldemort attacks a piece with a base strength of 2, 3 or 4, put that piece onto the space from which Voldemort attacked. The attacked piece is now under your control.","side":"evil","set":"harrypotter","image":"harrypotter/voldemort.png"},
      {"name":"Snape","power":"9","race":"Hogwarts teacher and Death Eater","abilities":"<i>Action</i>: Reveal Snape and an adjacent piece to give the adjacent piece +1, lasting from the beginning of the next good turn to the end of the next evil turn.<br><i>Action</i>: Reveal Snape to give -1 to an adjacent piece which does not have a base strength of 1, lasting from the beginning of the next good turn to the end of the next evil turn.","side":"evil","set":"harrypotter","image":"harrypotter/severussnape.png"},
      {"name":"Dementor","power":"8","race":"dementor","abilities":"<i>Innate</i>: +1 against humans and magical creatures with souls<br><i>Innate</i>: -1 against beasts and magical creatures without souls","side":"evil","set":"harrypotter","image":"harrypotter/dementor.png"},
      {"name":"Lucius Malfoy","power":"8","race":"Death Eater","abilities":"<i>Ability</i>: Reveal Lucius Malfoy and an adjacent Death Eater to give that Death Eater quickness until the end of the turn.","side":"evil","set":"harrypotter","image":"harrypotter/luciusmalfoy.png"},
      {"name":"Nagini","power":"7","race":"snake","abilities":"<i>Action</i>: Quickness<br><i>Death Curse</i>: -1.5 to the piece which destroyed Nagini","side":"evil","set":"harrypotter","image":"harrypotter/nagini.png"},
      {"name":"Draco Malfoy","power":"7","race":"Hogwarts student and Death Eater","abilities":"<i>Ability</i>: Reveal Draco Malfoy to give -1 to an adjacent Hogwarts student until the end of the turn. Use this ability only once per turn.<br><i>Innate</i>: Dispel magic<br><i>Innate</i>: -1 against adult wizards and witches","side":"evil","set":"harrypotter","image":"harrypotter/dracomalfoy.png"},
      {"name":"Basilisk","power":"7","race":"snake","abilities":"<i>Action</i>: Reveal and destroy the Basilisk to destroy all adjacent pieces.","side":"evil","set":"harrypotter","image":"harrypotter/basilisk.png"},
      {"name":"Hungarian Horntail","power":"6","race":"dragon","abilities":"<i>Action</i>: Flying<br><i>Ability</i>: Reveal the Hungarian Horntail to give -0.5 to a piece 2 spaces away until the end of the turn. Use this ability only once per turn.","side":"evil","set":"harrypotter","image":"harrypotter/hungarianhorntail.png"},
      {"name":"Bellatrix Lestrange","power":"6","race":"Death Eater","abilities":"<i>Ability</i>: Crucio. When Bellatrix Lestrange attacks or is attacked, you may ignore the effects of any innate powers or abilities of the piece which is attacking or being attacked.<br><i>Action</i>: Quickness","side":"evil","set":"harrypotter","image":"harrypotter/bellatrixlestrange.png"},
      {"name":"Fenrir Greyback","power":"6","race":"werewolf","abilities":"<i>Action</i>: Slashing<br><i>Action</i>: Quickness","side":"evil","set":"harrypotter","image":"harrypotter/fenrirgreyback.png"},
      {"name":"Chimera","power":"5","race":"chimera","abilities":"<i>Innate</i>: +1 on mountain spaces<br><i>Action</i>: Flying","side":"evil","set":"harrypotter","image":"harrypotter/chimera.png"},
      {"name":"Hand of Glory","power":"5","race":"magical artifact","abilities":"<i>Ability</i>: Reveal and destroy the Hand of Glory to give an adjacent piece +1 until the end of the turn. Reveal the adjacent piece affected.","side":"evil","set":"harrypotter","image":"harrypotter/handofglory.png"},
      {"name":"Macnair","power":"5","race":"Death Eater and executioner","abilities":"<i>Action</i>: Vision<br><i>Innate</i>: +1 against beasts and non-human magical creatures","side":"evil","set":"harrypotter","image":"harrypotter/macnair.png"},
      {"name":"Wormtail","power":"4","race":"Death Eater","abilities":"<i>Ability</i>: After Wormtail makes a successful attack, you may destroy him to place a destroyed piece on the space Wormtail occupied.","side":"evil","set":"harrypotter","image":"harrypotter/wormtail.png"},
      {"name":"Mountain troll","power":"4","race":"troll","abilities":"<i>Innate</i>: +2 on mountain spaces.","side":"evil","set":"harrypotter","image":"harrypotter/mountaintroll.png"},
      {"name":"Rogue bludger","power":"4","race":"bludger","abilities":"<i>Action</i>: Distance Strike","side":"evil","set":"harrypotter","image":"harrypotter/bludger.png"},
      {"name":"Crabbe","power":"3","race":"Hogwarts student and Death Eater","abilities":"<i>Death Curse</i>: All Death Eaters gain dispel magic.","side":"evil","set":"harrypotter","image":"harrypotter/crabbe.png"},
      {"name":"Goyle","power":"3","race":"Hogwarts student and Death Eater","abilities":"<i>Death curse</i>: All good pieces with dispel magic lose dispel magic.","side":"evil","set":"harrypotter","image":"harrypotter/goyle.png"},
      {"name":"Narcissa Malfoy","power":"3","race":"Death Eater","abilities":"<i>Death Curse</i>: All Death Eaters get +1.","side":"evil","set":"harrypotter","image":"harrypotter/narcissamalfoy.png"},
      {"name":"Grim","power":"2","race":"dog and death omen","abilities":"<i>Ability</i>: Reveal the Grim to give -1 to an adjacent non-member of the Order of the Phoenix human until the end of the turn. Use this ability only once per turn.","side":"evil","set":"harrypotter","image":"harrypotter/grim.png"},
      {"name":"Serpent","power":"2","race":"snake","abilities":"<i>Action</i>: Charging<br><i>Action</i>: Quickness<br><i>Innate</i>: +1 on forest spaces","side":"evil","set":"harrypotter","image":"harrypotter/serpent.png"},
      {"name":"Avery","power":"2","race":"Death Eater","abilities":"<i>Innate</i>: Dispel magic<br><i>Innate</i>: +1 on marsh spaces","side":"evil","set":"harrypotter","image":"harrypotter/avery.png"},
      {"name":"Dursleys","power":"1","race":"muggles","abilities":"<i>Innate</i>: If the Dursleys attack or are attacked by Harry Potter, Harry Potter is destroyed.","side":"evil","set":"harrypotter","image":"harrypotter/vernondursley.png"},
      {"name":"Horcrux","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If this Horcrux is attacked, destroy it.<br><i>Action</i>: If Voldemort has been destroyed, reveal and destroy this Horcrux to place him on the space this Horcrux occupied.","side":"evil","set":"harrypotter","image":"harrypotter/horcrux.png"},
      {"name":"Horcrux","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If this Horcrux is attacked, destroy it.<br><i>Action</i>: If Voldemort has been destroyed, reveal and destroy this Horcrux to place him on the space this Horcrux occupied.","side":"evil","set":"harrypotter","image":"harrypotter/horcrux.png"},
      {"name":"Horcrux","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If this Horcrux is attacked, destroy it.<br><i>Action</i>: If Voldemort has been destroyed, reveal and destroy this Horcrux to place him on the space this Horcrux occupied.","side":"evil","set":"harrypotter","image":"harrypotter/horcrux.png"},
      {"name":"Horcrux","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If this Horcrux is attacked, destroy it.<br><i>Action</i>: If Voldemort has been destroyed, reveal and destroy this Horcrux to place him on the space this Horcrux occupied.","side":"evil","set":"harrypotter","image":"harrypotter/horcrux.png"},
      {"name":"Avada Kedavra","power":"*","race":"magic","abilities":"<i>Innate</i>: Cannot attack<br><i>Magic</i>: If Avada Kedavra is attacked, destroy it and its attacker.","side":"evil","set":"harrypotter","image":"harrypotter/avadakedavra.png"},
      {"name":"Riddle House","power":"C","race":"castle","abilities":"<i>Stationary</i>: Cannot move<br><i>Ability</i>: Reveal the Riddle House and an adjacent Death Eater to give the adjacent Death Eater +1 until the end of the turn. Use this ability only once per turn.","side":"evil","set":"harrypotter","image":"harrypotter/riddlehouse.png"}
    ],

    "powers":["10","9","8","7","6","5","4","3","2","1","*","C"],

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

    "gamedata":{},

    "boardrotate":function(dimension,multiple,x,y){
      if(multiple<0){
        var boardwidth=legends.getdisplayedboardsize("x");
        var boardheight=legends.getdisplayedboardsize("y");
      }
      else{
        var boardwidth=legends.board.width;
        var boardheight=legends.board.height;
      }
      return [x,y,boardwidth-1-x,boardheight-1-y][(((legends.gamedata.boardrotations*multiple+(dimension=="x"?0:1))%4)+4)%4];
    },

    "getdisplayedboardsize":function(dimension){
      return [legends.board.width,legends.board.height][(((legends.gamedata.boardrotations+(dimension=="x"?0:1))%2)+2)%2];
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

    "terrain":{
      "presetboards":{
        "1A":[["desert","mountain","forest","town"],["mountain","mountain","forest","plains"],["mountain","mountain","mountain","marsh"],["town","water","mountain","mountain"]],
        "1B":[["marsh","forest","desert","forest"],["marsh","forest","water","plains"],["marsh","marsh","marsh","mountain"],["marsh","town","marsh","marsh"]],
        "1C":[["forest","forest","forest","mountain"],["forest","town","forest","plains"],["forest","forest","forest","desert"],["marsh","marsh","water","marsh"]],
        "1D":[["plains","plains","forest","mountain"],["plains","plains","mountain","desert"],["plains","plains","plains","desert"],["plains","water","town","marsh"]],
        "2A":[["desert","desert","desert","forest"],["desert","desert","desert","forest"],["desert","mountain","plains","plains"],["desert","water","marsh","town"]],
        "2B":[["town","plains","marsh","mountain"],["water","forest","town","mountain"],["town","marsh","forest","marsh"],["desert","marsh","marsh","town"]],
        "2C":[["mountain","mountain","desert","plains"],["mountain","water","town","marsh"],["mountain","mountain","marsh","marsh"],["mountain","marsh","forest","marsh"]],
        "2D":[["mountain","desert","plains","town"],["forest","forest","mountain","mountain"],["forest","forest","mountain","marsh"],["forest","forest","mountain","water"]],
        "3A":[["mountain","forest","town","water"],["plains","plains","marsh","desert"],["plains","plains","plains","plains"],["mountain","mountain","mountain","mountain"]],
        "3B":[["forest","forest","mountain","mountain"],["forest","town","forest","mountain"],["plains","forest","forest","mountain"],["desert","marsh","water","mountain"]],
        "3C":[["marsh","mountain","marsh","plains"],["forest","forest","marsh","desert"],["forest","forest","marsh","town"],["forest","water","forest","marsh"]],
        "3D":[["water","mountain","desert","desert"],["mountain","town","desert","desert"],["mountain","mountain","mountain","desert"],["plains","forest","mountain","marsh"]],
        "4A":[["plains","forest","town","water"],["forest","plains","forest","mountain"],["forest","forest","plains","plains"],["marsh","forest","plains","desert"]],
        "4B":[["plains","forest","town","desert"],["forest","forest","desert","desert"],["forest","forest","marsh","water"],["mountain","forest","desert","desert"]],
        "4C":[["plains","plains","desert","desert"],["forest","mountain","plains","desert"],["plains","town","marsh","desert"],["plains","desert","water","plains"]],
        "4D":[["marsh","marsh","town","plains"],["water","marsh","marsh","forest"],["marsh","marsh","desert","mountain"],["desert","desert","desert","desert"]],
        "5A":[["marsh","plains","mountain","desert"],["plains","plains","forest","plains"],["plains","marsh","marsh","marsh"],["marsh","town","marsh","water"]],
        "5B":[["water","mountain","forest","desert"],["forest","town","forest","plains"],["forest","forest","forest","forest"],["forest","marsh","plains","marsh"]],
        "5C":[["marsh","plains","marsh","water"],["desert","mountain","forest","marsh"],["desert","town","town","forest"],["forest","town","mountain","desert"]],
        "5D":[["mountain","town","mountain","plains"],["plains","mountain","forest","mountain"],["mountain","marsh","mountain","marsh"],["water","mountain","desert","mountain"]],
        "6A":[["forest","desert","forest","marsh"],["plains","forest","town","forest"],["forest","plains","forest","mountain"],["plains","forest","water","forest"]],
        "6B":[["marsh","town","forest","forest"],["marsh","forest","marsh","desert"],["marsh","marsh","mountain","plains"],["marsh","water","marsh","mountain"]],
        "6C":[["desert","town","desert","forest"],["mountain","desert","forest","desert"],["desert","water","desert","plains"],["plains","desert","marsh","desert"]],
        "6D":[["forest","forest","marsh","marsh"],["forest","forest","marsh","marsh"],["water","plains","mountain","mountain"],["desert","town","mountain","mountain"]],
        "7A":[["forest","forest","forest","mountain"],["forest","marsh","water","forest"],["forest","desert","forest","forest"],["forest","town","forest","plains"]],
        "7B":[["forest","forest","forest","town"],["forest","forest","plains","marsh"],["forest","desert","mountain","water"],["forest","forest","forest","forest"]],
        "7C":[["plains","desert","mountain","water"],["plains","plains","marsh","plains"],["plains","forest","plains","plains"],["plains","plains","town","plains"]],
        "7D":[["plains","desert","plains","plains"],["plains","marsh","mountain","plains"],["plains","town","plains","forest"],["water","plains","plains","plains"]]
      },
      "presetboardids":[],
      "randomboardid":function(){
        if(legends.terrain.presetboardids.length==0){
          var boardids=[];
          for(var i=0;i<7;i++){
            for(var j=0;j<4;j++){
              boardids.push((i+1)+["A","B","C","D"][j]);
            }
          }
          while(boardids.length>0){
            legends.terrain.presetboardids=legends.terrain.presetboardids.concat(boardids.splice(Math.floor(Math.random()*boardids.length),1));
          }
        }
        return legends.terrain.presetboardids.splice(0,1)[0];
        return (Math.floor(Math.random()*7)+1)+["A","B","C","D"][Math.floor(Math.random()*4)];
      },
      "randomboard":function(){
        var watera=Math.floor(Math.random()*4);
        var waterb=Math.floor(Math.random()*4);
        var townc=Math.floor(Math.random()*15);
        var towna=Math.floor(townc/4);
        var townb=townc%4;
        if(towna==watera&&townb==waterb){
          towna=3;
          townb=3;
        }
        var returnvalue=[];
        for(var a=0;a<4;a++){
          returnvalue[a]=[];
          for(var b=0;b<4;b++){
            if(a==watera&&b==waterb){
              returnvalue[a][b]="water";
            }
            else if(a==towna&&b==townb){
              returnvalue[a][b]="town";
            }
            else{
              returnvalue[a][b]=["plains","marsh","forest","mountain","desert"][Math.floor(Math.random()*5)];
            }
          }
        }
        return returnvalue;
      },
      "randomrotation":function(board){
        var rotation=Math.floor(Math.random()*4);
        var returnvalue=[];
        for(var a=0;a<4;a++){
          returnvalue[a]=[];
          for(var b=0;b<4;b++){
            returnvalue[a][b]=[board[a][b],board[b][3-a],board[3-a][3-b],board[3-b][a]][rotation];
          }
        }
        return returnvalue;
      },
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
      var boardids=[];
      for(var armynumber=0;armynumber<legends.armies.length;armynumber++){
        for(var square=0;square<2;square++){
          if(legends.armies[armynumber].boardids[square]=="official"){
            boardids.push(legends.terrain.randomboardid());
          }
          else{
            boardids.push(legends.armies[armynumber].boardids[square]);
          }
        }
      }
      for(var armynumber=0;armynumber<legends.armies.length;armynumber++){
        var piecesetup=legends.randompiecesetup();
        var waterspacessofar=0;
        for(var square=0;square<2;square++){
          var x=legends.armies[armynumber].coordinates[square].x;
          var y=legends.armies[armynumber].coordinates[square].y;
          var boardid=boardids.splice(Math.floor(Math.random()*boardids.length),1)[0];
          if(boardid=="random"){
            var terrainsetup=legends.terrain.randomboard();
          }
          else{
            var terrainsetup=legends.terrain.randomrotation(legends.terrain.presetboards[boardid]);
          }
          for(var c=0;c<16;c++){
            var a=Math.floor(c/4);
            var b=c%4;
            if(!legends.board.tiles[x+a]){
              legends.board.tiles[x+a]=[];
            }
            if(terrainsetup[a][b]=="water"){
              legends.board.tiles[x+a][y+b]={
                "terrain":"water",
                "piecekeys":[]
              };
              waterspacessofar++;
            }
            else{
              var piecekey=piecesetup[square*16+c-waterspacessofar];
              legends.board.width=Math.max(legends.board.width,x+a+1);
              legends.board.height=Math.max(legends.board.height,y+b+1);
              legends.board.tiles[x+a][y+b]={
                "terrain":terrainsetup[a][b],
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
                "revealed":false,
                "allegiance":legends.armies[armynumber].side
              };
            }
          }
        }
      }
    },

    "drawpiece":function(piece,highlight){
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
      piece.boarddiv.toggle(piece.alive||(piece==legends.dragging.activepiece));
      piece.boarddiv.css({
        "border-color":piece.allegiance=="good"?legends.styles.goodbordercolour:legends.styles.evilbordercolour
      });
      piece.boarddiv.image.css({
        "opacity":piece.revealed?"1":(legends.gamedata.revealedarmynumber==piece.armynumber||legends.gamedata.revealedarmynumber==-1?legends.styles.pieceopacity+"":"0"),
        "filter":"alpha(opacity="+(piece.revealed?"100":(legends.gamedata.revealedarmynumber==piece.armynumber||legends.gamedata.revealedarmynumber==-1?(legends.styles.pieceopacity*100)+"":"0"))+")"
      });
      piece.armiesdiv.css({
        "opacity":piece.alive?legends.styles.pieceopacity+"":"1",
        "filter":"alpha(opacity="+(piece.alive?(legends.styles.pieceopacity*100)+"":"100")+")"
      });
      if(highlight){
        var setboxshadowcss={
          "-webkit-box-shadow":legends.styles.pieceshadow,
          "-moz-box-shadow":legends.styles.pieceshadow,
          "box-shadow":legends.styles.pieceshadow
        };
        var clearboxshadowcss={
          "-webkit-box-shadow":"none",
          "-moz-box-shadow":"none",
          "box-shadow":"none"
        };
        piece.boarddiv.css(setboxshadowcss);
        piece.armiesdiv.css(piece.alive?clearboxshadowcss:setboxshadowcss);
        if(piece.clearboxshadowtimeout){
          window.clearTimeout(piece.clearboxshadowtimeout);
          piece.clearboxshadowtimeout=false;
        }
        piece.clearboxshadowtimeout=window.setTimeout((function(piece){
          return function(){
            piece.boarddiv.css(clearboxshadowcss);
            piece.armiesdiv.css(clearboxshadowcss);
          };
        }(piece)),legends.styles.shadowtimeout);
      }
    },

    "drawtile":function(tile){
      for(var i=0;i<tile.piecekeys.length;i++){
        legends.drawpiece(legends.armies[tile.piecekeys[i].armynumber].pieces[tile.piecekeys[i].power][tile.piecekeys[i].number],false);
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
        if(legends.games.status!="server"){
          legends.drawtile(tile);
        }
      }
    },

    "reveal":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"reveal","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=true;
        if(legends.games.status!="server"){
          legends.drawpiece(piece,true);
        }
      }
    },

    "unreveal":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"unreveal","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=false;
        if(legends.games.status!="server"){
          legends.drawpiece(piece,true);
        }
      }
    },

    "kill":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"kill","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        legends.remove(armynumber,power,number);
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.alive=false;
        piece.deathcurse=false;
        piece.revealed=true;
        piece.allegiance=legends.armies[armynumber].side;
        piece.x="box";
        piece.y="box";
        piece.z=0;
        if(legends.games.status!="server"){
          legends.drawpiece(piece,true);
        }
      }
    },

    "moveto":function(armynumber,power,number,sendmessage,x,y){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"moveto","armynumber":armynumber,"power":power,"number":number,"x":x,"y":y,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        legends.remove(armynumber,power,number);
        var piece=legends.armies[armynumber].pieces[power][number];
        if(x=="deathcurse"||y=="deathcurse"){
          if(legends.board.deathcurse.piecekeys.length>0&&(legends.server.waitforreply?legends.games.status=="server":(sendmessage&&legends.games.status!="server"))){
            for(var i=0;i<legends.board.deathcurse.piecekeys.length;i++){
              legends.kill(legends.board.deathcurse.piecekeys[i].armynumber,legends.board.deathcurse.piecekeys[i].power,legends.board.deathcurse.piecekeys[i].number,sendmessage);
            }
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
          if(tile.piecekeys.length==1&&legends.armies[tile.piecekeys[0].armynumber].pieces[tile.piecekeys[0].power][tile.piecekeys[0].number].allegiance!=legends.armies[piece.armynumber].pieces[piece.power][piece.number].allegiance&&(legends.server.waitforreply?legends.games.status=="server":(sendmessage&&legends.games.status!="server"))){
            legends.reveal(piece.armynumber,piece.power,piece.number,sendmessage);
            for(var i=0;i<tile.piecekeys.length;i++){
              legends.reveal(tile.piecekeys[i].armynumber,tile.piecekeys[i].power,tile.piecekeys[i].number,sendmessage);
            }
          }
        }
        piece.x=x;
        piece.y=y;
        piece.z=tile.piecekeys.length;
        tile.piecekeys.push({"armynumber":armynumber,"power":power,"number":number});
        if(legends.games.status!="server"){
          legends.drawtile(tile);
          legends.drawpiece(piece,true);
        }
      }
    },

    "makegood":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"makegood","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=true;
        piece.allegiance="good";
        if(legends.games.status!="server"){
          legends.drawpiece(piece,true);
        }
      }
    },

    "makeevil":function(armynumber,power,number,sendmessage){
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"makeevil","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        var piece=legends.armies[armynumber].pieces[power][number];
        piece.revealed=true;
        piece.allegiance="evil";
        if(legends.games.status!="server"){
          legends.drawpiece(piece,true);
        }
      }
    },

    "togglehighlightplayername":function(armynumber,power,number,sendmessage){
      var toggle=power;
      var highlight=number;
      if(toggle){
        highlight=!legends.armies[armynumber].playernamehighlighted;
        power=false;
        number=highlight;
      }
      if(sendmessage){
        legends.socket.emit("pieceaction",{"action":"togglehighlightplayername","armynumber":armynumber,"power":power,"number":number,"gameid":legends.gamedata.gameid,"authentication":legends.gamedata.authentication,"password":legends.gamedata.password});
      }
      if((!legends.server.waitforreply)||(!sendmessage)||legends.games.status=="server"){
        legends.armies[armynumber].playernamehighlighted=highlight;
        if(legends.games.status!="server"){
          legends.armies[armynumber].playernamespan.css({
            "background-color":highlight?legends.styles.playernamehighlightcolour:"transparent"
          })
        }
      }
    },

    "alttext":{
      "starttimer":function(pageX,pageY){
        legends.alttext.timer=window.setTimeout((function(pageX,pageY){
          return function(){
            if(!legends.dragging.activepiece){
              legends.alttext.div.show().css({
                "left":pageX+"px",
                "top":pageY+"px",
                "z-index":(legends.dragging.zindex+1)+""
              });
              if((pageY-$(window).scrollTop())/$(window).height()<legends.styles.alttextthreshold){
                legends.alttext.innerdiv.css({
                  "top":legends.styles.alttextmarginsize.bottom+"px",
                  "bottom":"auto"
                });
              }
              else{
                legends.alttext.innerdiv.css({
                  "top":"auto",
                  "bottom":legends.styles.alttextmarginsize.top+"px"
                });
              }
            }
          };
        })(pageX,pageY),legends.alttext.fast?legends.styles.alttextfastwait:legends.styles.alttextwait);
      },
      "init":function(){
        legends.alttext.timer=false;
        legends.alttext.fast=true;
        legends.alttext.div=$("<div></div>").appendTo(legends.div).hide().css({
          "position":"absolute",
          "right":"0px"
        });
        legends.alttext.innerdiv=$("<div></div>").appendTo(legends.alttext.div).css(jQuery.extend({
          "position":"absolute",
          "left":"0px"
        },legends.styles.alttextcss));
        $(document).mousemove(function(event){
          if(legends.alttext.timer){
            window.clearTimeout(legends.alttext.timer);
            legends.alttext.starttimer(event.pageX,event.pageY);
          }
        });
      },
      "hide":function(){
        legends.alttext.div.hide();
        window.clearTimeout(legends.alttext.timer);
        legends.alttext.timer=false;
      },
      "set":function(piece){
        var data=legends.piecedata[piece.id];
        piece.alttext="<u><b>"+data.power+" "+data.name+"</b> ("+data.race+")</u><br>"+data.abilities;
        var mouseoverfunction=(function(piece){
          return function(event){
            if(piece.revealed||legends.gamedata.revealedarmynumber==piece.armynumber||legends.gamedata.revealedarmynumber==-1){
              legends.alttext.innerdiv.html(piece.alttext);
              legends.alttext.starttimer(event.pageX,event.pageY);
            }
          };
        })(piece);
        piece.boarddiv.mouseover(mouseoverfunction);
        piece.boarddiv.mouseup(mouseoverfunction);
        piece.boarddiv.mouseout(legends.alttext.hide);
        piece.armiesdiv.mouseover((function(piece){
          return function(event){
            legends.alttext.innerdiv.html(piece.alttext);
            legends.alttext.starttimer(event.pageX,event.pageY);
          };
        })(piece));
        piece.armiesdiv.mouseout(legends.alttext.hide);
      },
      "setextra":function(object,pieceid,overwrite){
        if(pieceid==-1){
          object.alttext="";
        }
        else{
          var data=legends.piecedata[pieceid];
          object.alttext="<u>"+pieceid+": <b>"+data.power+" "+data.name+"</b> ("+data.race+")</u><br>"+data.abilities;
        }
        if(!overwrite){
          object.mouseover((function(object){
            return function(event){
              legends.alttext.innerdiv.html(object.alttext);
              legends.alttext.starttimer(event.pageX,event.pageY);
            };
          })(object));
          object.mouseout(legends.alttext.hide);
        }
      }
    },

    "dragging":{
      "mousemovefunction":function(event){
        if(legends.dragging.activepiece){
          legends.dragging.activepiece.boarddiv.css({
            "left":(event.pageX-legends.dragging.offsetX)+"px",
            "top":(event.pageY-legends.dragging.offsetY)+"px",
            "z-index":legends.dragging.zindex+"",
            "-webkit-box-shadow":"none",
            "-moz-box-shadow":"none",
            "box-shadow":"none"
          });
        }
      },
      "init":function(){
        legends.dragging.zindex=1;
        legends.dragging.activepiece=false;
        legends.dragging.offsetX=0;
        legends.dragging.offsetY=0;
        $(document).mousemove(legends.dragging.mousemovefunction);
      },
      "set":function(piece){
        legends.dragging.zindex++;
        piece.boarddiv.mousedown((function(piece){
          return function(event){
            if(event.which==1&&(!event.ctrlKey)){
              if(legends.dragging.activepiece){
                legends.dragging.zindex++;
                var boardx=parseFloat(legends.dragging.activepiece.boarddiv.css("left"))+(legends.styles.piecewidth/2)+legends.styles.bordersize-legends.styles.marginsize;
                var boardy=parseFloat(legends.dragging.activepiece.boarddiv.css("top"))+(legends.styles.pieceheight/2)+legends.styles.bordersize-legends.styles.marginsize;
                var deathcursex=boardx-legends.styles.tilesize*legends.getdisplayedboardsize("x")-legends.styles.marginsize;
                var deathcursey=boardy-legends.styles.tilesize*((legends.getdisplayedboardsize("y")-1)/2);
                var x=legends.boardrotate("x",-1,Math.floor(boardx/legends.styles.tilesize),Math.floor(boardy/legends.styles.tilesize));
                var y=legends.boardrotate("y",-1,Math.floor(boardx/legends.styles.tilesize),Math.floor(boardy/legends.styles.tilesize));
                if(legends.board.tiles[x]&&legends.board.tiles[x][y]){
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
            }
          };
        })(piece));
        piece.armiesdiv.mousedown((function(piece){
          return function(event){
            if(event.which==1&&(!piece.alive)&&(!legends.dragging.activepiece)){
              piece.alive=true;
              legends.drawpiece(piece,false);
              legends.dragging.activepiece=piece;
              legends.dragging.offsetX=legends.styles.piecewidth/2+legends.styles.bordersize;
              legends.dragging.offsetY=legends.styles.pieceheight/2+legends.styles.bordersize;
              legends.alttext.hide();
              legends.dragging.mousemovefunction(event);
            }
          };
        })(piece));
      },
    },

    "games":{
      "askforpassword":function(gamenumber){
        return legends.games.join.gameslist[gamenumber].haspassword?prompt("Please enter the password for "+legends.games.join.gameslist[gamenumber].gamename+":",""):"";
      },
      "join":{
        "gameslist":[],
        "joingame":function(gameid,authentication,revealedarmynumber,boardrotations,password){
          if(legends.games.status=="lobby"){
            window.history.pushState(null,"");
          }
          legends.games.div.empty().html("<p>Joining game...</p>");
          legends.designarmy.status=false;
          legends.games.status="joining";
          if(boardrotations=="default"){
            legends.gamedata.boardrotations=revealedarmynumber%2==0?2:0;
          }
          else{
            legends.gamedata.boardrotations=boardrotations*1;
          }
          legends.gamedata.gameid=gameid;
          legends.gamedata.authentication=authentication;
          legends.gamedata.revealedarmynumber=revealedarmynumber;
          legends.gamedata.password=password;
          legends.socket.emit("joingame",{
            "gameid":legends.gamedata.gameid,
            "authentication":legends.gamedata.authentication,
            "password":legends.gamedata.password
          });
        }
      },
      "create":{
        "showingcoordinates":false,
        "players":[],
        "shuffleplayernames":function(){
          var playernames=[];
          for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
            playernames.push(legends.games.create.players[armynumber].playernameinput.val());
          }
          for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
            var playername=playernames.splice(Math.floor(Math.random()*playernames.length),1)[0];
            legends.games.create.players[armynumber].playernameinput.val(playername);
            legends.games.create.players[armynumber].button.text("Create and join as "+playername);
          }
        },
        "getarmycodes":function(){
          returnvalue=[];
          for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
            returnvalue.push({
              "side":legends.games.create.players[armynumber].sidedropdown.val(),
              "coordinates":[{"x":legends.games.create.players[armynumber].x1input.val()*1,"y":legends.games.create.players[armynumber].y1input.val()*1},{"x":legends.games.create.players[armynumber].x2input.val()*1,"y":legends.games.create.players[armynumber].y2input.val()*1}],
              "boardids":[legends.games.create.players[armynumber].boardid1dropdown.val(),legends.games.create.players[armynumber].boardid2dropdown.val()],
              "code":legends.games.create.players[armynumber].codeinput.val(),
              "playername":legends.games.create.players[armynumber].playernameinput.val(),
              "playernamehighlighted":false
            });
          }
          return returnvalue;
        },
        "addplayer":function(){
          var armynumber=legends.games.create.players.length;
          var boardiddropdownhtml="<select><option value=\"official\">random official</option><option value=\"random\">random</option>";
          for(var i=0;i<7;i++){
            for(var j=0;j<4;j++){
              var boardid=(i+1)+["A","B","C","D"][j];
              boardiddropdownhtml+="<option value=\""+boardid+"\">official "+boardid+"</option>";
            }
          }
          boardiddropdownhtml+="</select>";
          legends.games.create.players[armynumber]={
            "playernameinput":$("<input type=\"text\" size=\"10\" value=\"Player "+(armynumber+1)+"\">").change((function(armynumber){
              return function(event){
                legends.games.create.players[armynumber].button.text("Create and join as "+legends.games.create.players[armynumber].playernameinput.val());
              };
            })(armynumber)),
            "sidedropdown":$("<select><option value=\"good\""+(armynumber%2==0?" selected":"")+">good</option><option value=\"evil\""+(armynumber%2==0?"":" selected")+">evil</select>"),
            "codeinput":$("<input type=\"text\" size=\"25\" value=\""+legends.designarmy.presetarmycodes[armynumber%2==0?"good":"evil"][Math.floor(Math.random()*legends.designarmy.presetarmycodes[armynumber%2==0?"good":"evil"].length)]+"\">"),
            "x1input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(Math.floor(armynumber/2)*8)+"\">").css({"width":"2.5em"}),
            "y1input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(armynumber%2==0?0:4)+"\">").css({"width":"2.5em"}),
            "x2input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(Math.floor(armynumber/2)*8+4)+"\">").css({"width":"2.5em"}),
            "y2input":$("<input type=\"number\" size=\"2\" min=\"0\" step=\"1\" value=\""+(armynumber%2==0?0:4)+"\">").css({"width":"2.5em"}),
            "boardid1dropdown":$(boardiddropdownhtml),
            "boardid2dropdown":$(boardiddropdownhtml)
          };
          legends.games.create.players[armynumber].coordinatespan=$("<span></span>").css({"font-size":legends.styles.smallfontsize+"em"}).toggle(legends.games.create.showingcoordinates).append($("<br>"),document.createTextNode("at coordinates ("),legends.games.create.players[armynumber].x1input,document.createTextNode(","),legends.games.create.players[armynumber].y1input,document.createTextNode(") and ("),legends.games.create.players[armynumber].x2input,document.createTextNode(","),legends.games.create.players[armynumber].y2input,document.createTextNode(") contributing "),legends.games.create.players[armynumber].boardid1dropdown,document.createTextNode(" and "),legends.games.create.players[armynumber].boardid2dropdown,document.createTextNode(" terrain"));
          legends.games.create.playerspan.append(document.createTextNode("Player "+(armynumber+1)+": player name "),legends.games.create.players[armynumber].playernameinput,document.createTextNode(" with "),legends.games.create.players[armynumber].sidedropdown,document.createTextNode(" army code "),legends.games.create.players[armynumber].codeinput,legends.games.create.players[armynumber].coordinatespan,$("<br>"));
          legends.games.create.players[armynumber].button=$("<button></button>").text("Create and join as Player "+(armynumber+1)).appendTo(legends.games.create.joinspan).click((function(armynumber){
            return function(event){
              legends.games.create.creategame(armynumber,legends.games.create.boardrotationdropdown.val());
            };
          })(armynumber));
          legends.games.create.joinspan.append(document.createTextNode(" "));
        },
        "removeplayers":function(){
          legends.games.create.players.splice(0,legends.games.create.players.length);
          legends.games.create.joinspan.empty();
          legends.games.create.playerspan.empty();
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
        "creategame":function(revealedarmynumber,boardrotations){
          legends.games.status="creating";
          legends.designarmy.status=false;
          var armycodes=legends.games.create.getarmycodes();
          legends.gamedata.gamename=legends.games.create.gamenameinput.val();
          legends.gamedata.password=legends.games.create.passwordinput.val();
          legends.gamedata.revealedarmynumber=revealedarmynumber;
          legends.gamedata.boardrotations=boardrotations;
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
          window.history.pushState(null,"");
          legends.games.div.empty().html("<p>Creating game...</p>");
          legends.socket.emit("creategame",{"board":legends.board,"armies":legends.armies,"gamename":legends.gamedata.gamename,"password":legends.gamedata.password});
        }
      }
    },

    "init":function(){
      legends.games.windowfocused=true;
      $(window).blur(function(){
        legends.games.windowfocused=false;
      });
      $(window).focus(function(){
        legends.games.windowfocused=true;
      });
      window.setInterval(legends.server.ping,600000);
      window.onpopstate=function(event){
        window.location.reload(false);
      };
      legends.games.status="init";
      $(document.body).css({
        "font-family":"sans-serif"
      });
      legends.div=$("<div></div>").appendTo($(document.body));
      legends.alttext.init();
      legends.dragging.init();
      legends.socket=io(legends.server.socket,{"reconnection":false});

      legends.socket.on("gameslist",function(gameslist){
        var boardrotationdropdownhtml="<select><option value=\"default\">default</option><option value=\"2\">north</option><option value=\"3\">east</option><option value=\"0\">south</option><option value=\"1\">west</option></select>";
        if(legends.games.status=="init"){
          legends.games.status="lobby";
          legends.games.div=$("<div></div>").appendTo(legends.div).append($("<h1></h1>").css({"text-align":"center"}).append($("<img src=\""+legends.server.imagedirectory+"header.jpg\" alt=\"Stratego Legends\">").css({"width":legends.styles.headerwidth+"px"})),$("<img src=\""+legends.server.imagedirectory+"boxart.jpg\">").css({"float":"right","width":"562px","margin-left":legends.styles.marginsize+"px","margin-bottom":legends.styles.marginsize+"px"}),$("<h2>How to play</h2>"),$("<ul><li>Left-click on pieces to move them.</li><li>Right-click on pieces to reveal them to your opponents.</li><li>Ctrl+click on pieces to change their allegiance.</li><li>Either drop pieces off the board or middle-click on them to move them to the box.</li></ul><p><a href=\"official/rules.pdf\" target=\"_blank\">Official rulebook of Stratego Legends</a></p>"),$("<h2>Create a new game</h2>"));
          legends.games.create.playerp=$("<p></p>").appendTo(legends.games.div).append(document.createTextNode("Game name: "));
          legends.games.create.gamenameinput=$("<input type=\"text\" size=\"20\" value=\"Game 1\">").appendTo(legends.games.create.playerp).css({"font-weight":"bold"});
          legends.games.create.playerp.append($("<br>"),document.createTextNode("Password (optional): "));
          legends.games.create.passwordinput=$("<input type=\"text\" size=\"20\">").appendTo(legends.games.create.playerp);
          legends.games.create.playerp.append($("<br>"));
          legends.games.create.playerspan=$("<span></span>").appendTo(legends.games.create.playerp);
          legends.games.create.playerp.append($("<button>Add a player</button>").click(legends.games.create.addplayer),document.createTextNode(" "),$("<button>Shuffle player names</button>").click(legends.games.create.shuffleplayernames),document.createTextNode(" "));
          legends.games.create.editcoordinatespan=$("<span></span>").appendTo(legends.games.create.playerp).append($("<button>Edit layout and terrain</button>").click(function(event){
            legends.games.create.showingcoordinates=true;
            for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
              legends.games.create.players[armynumber].coordinatespan.show();
            }
            legends.games.create.editcoordinatespan.empty().append($("<a href=\"official/terrainlayouts.pdf\" target=\"_blank\">Official terrain layouts</a>"));
          }));
          legends.games.create.joinp=$("<p></p>").appendTo(legends.games.div);
          legends.games.create.joinspan=$("<span></span>").appendTo(legends.games.create.joinp);
          legends.games.create.observerbutton=$("<button>Create and join as an observer</button>").appendTo(legends.games.create.joinp).click(function(event){
            legends.games.create.creategame(-1,legends.games.create.boardrotationdropdown.val());
          });
          legends.games.create.joinp.append(document.createTextNode(" facing "));
          legends.games.create.boardrotationdropdown=$(boardrotationdropdownhtml).appendTo(legends.games.create.joinp);
          for(var armynumber=0;armynumber<2;armynumber++){
            legends.games.create.addplayer();
          }
          legends.games.div.append($("<h2>Join an existing game</h2>"));
          legends.games.join.p=$("<p></p>").appendTo(legends.games.div);
          legends.designarmy.div=$("<div></div>").appendTo(legends.games.div);
          legends.designarmy.div.append($("<h2>Design an army</h2>"));
          legends.designarmy.initbutton=$("<button>Show army design tool</button>").appendTo(legends.designarmy.div).click(legends.designarmy.init);
        }
        if(legends.games.status=="lobby"){
          if(legends.games.create.gamenameinput.val()=="Game "+(legends.games.join.gameslist.length+1)){
            legends.games.create.gamenameinput.val("Game "+(gameslist.length+1));
          }
          legends.games.join.p.empty();
          legends.games.join.gameslist=gameslist;
          var nogamesavailable=true;
          for(var gamenumber=legends.games.join.gameslist.length-1;gamenumber>=0;gamenumber--){
            if(legends.games.join.gameslist[gamenumber]){
              if(nogamesavailable){
                nogamesavailable=false;
              }
              else{
                legends.games.join.p.append($("<br>"));
              }
              var gameid=legends.games.join.gameslist[gamenumber].gameid;
              legends.games.join.gameslist[gamenumber].reusebutton=$("<button>Reuse settings</button>").appendTo(legends.games.join.p).click((function(gamenumber){
                return function(event){
                  if(confirm("This will overwrite all the current settings. Are you sure you want to continue?")){
                    legends.games.create.removeplayers();
                    for(var armynumber=0;armynumber<legends.games.join.gameslist[gamenumber].players.length;armynumber++){
                      legends.games.create.addplayer();
                      legends.games.create.players[armynumber].playernameinput.val(legends.games.join.gameslist[gamenumber].players[armynumber].playername);
                      legends.games.create.players[armynumber].button.text("Create and join as "+legends.games.join.gameslist[gamenumber].players[armynumber].playername);
                      legends.games.create.players[armynumber].sidedropdown.val(legends.games.join.gameslist[gamenumber].players[armynumber].side);
                      legends.games.create.players[armynumber].codeinput.val(legends.games.join.gameslist[gamenumber].players[armynumber].code);
                      legends.games.create.players[armynumber].x1input.val(legends.games.join.gameslist[gamenumber].players[armynumber].coordinates[0].x);
                      legends.games.create.players[armynumber].y1input.val(legends.games.join.gameslist[gamenumber].players[armynumber].coordinates[0].y);
                      legends.games.create.players[armynumber].x2input.val(legends.games.join.gameslist[gamenumber].players[armynumber].coordinates[1].x);
                      legends.games.create.players[armynumber].y2input.val(legends.games.join.gameslist[gamenumber].players[armynumber].coordinates[1].y);
                      legends.games.create.players[armynumber].boardid1dropdown.val(legends.games.join.gameslist[gamenumber].players[armynumber].boardids[0]);
                      legends.games.create.players[armynumber].boardid2dropdown.val(legends.games.join.gameslist[gamenumber].players[armynumber].boardids[1]);
                    }
                  }
                };
              })(gamenumber));
              legends.games.join.p.append(document.createTextNode(" "));
              legends.games.join.gameslist[gamenumber].deletebutton=$("<button>Delete game</button>").appendTo(legends.games.join.p).click((function(gamenumber,gameid){
                return function(event){
                  if(confirm("Are you sure you want to delete this game?")){
                    legends.socket.emit("deletegame",{"gameid":gameid,"authentication":legends.games.join.gameslist[gamenumber].authentication,"password":legends.games.askforpassword(gamenumber)});
                  }
                };
              })(gamenumber,gameid));
              legends.games.join.p.append(document.createTextNode(" "),$("<b></b>").text(legends.games.join.gameslist[gamenumber].gamename),document.createTextNode(": "));
              for(var armynumber=0;armynumber<=legends.games.join.gameslist[gamenumber].players.length;armynumber++){
                if(armynumber==legends.games.join.gameslist[gamenumber].players.length){
                  legends.games.join.gameslist[gamenumber].observerbutton=$("<button>Join as an observer</button>").appendTo(legends.games.join.p).click((function(gamenumber,gameid){
                    return function(event){
                      legends.games.join.joingame(gameid,legends.games.join.gameslist[gamenumber].authentication,-1,legends.games.join.gameslist[gamenumber].boardrotationdropdown.val(),legends.games.askforpassword(gamenumber));
                    };
                  })(gamenumber,gameid));
                }
                else{
                  legends.games.join.gameslist[gamenumber].players[armynumber].button=$("<button></button>").text("Join as "+legends.games.join.gameslist[gamenumber].players[armynumber].playername+" ("+legends.games.join.gameslist[gamenumber].players[armynumber].side+")").appendTo(legends.games.join.p).click((function(gamenumber,gameid,armynumber){
                    return function(event){
                      legends.games.join.joingame(gameid,legends.games.join.gameslist[gamenumber].authentication,armynumber,legends.games.join.gameslist[gamenumber].boardrotationdropdown.val(),legends.games.askforpassword(gamenumber));
                    };
                  })(gamenumber,gameid,armynumber));
                }
                legends.games.join.p.append(document.createTextNode(" "));
              }
              legends.games.join.p.append(document.createTextNode("facing "));
              legends.games.join.gameslist[gamenumber].boardrotationdropdown=$(boardrotationdropdownhtml).appendTo(legends.games.join.p);
            }
          }
          if(nogamesavailable){
            legends.games.join.p.html("No games available.");
          }
        }
      });

      legends.socket.on("gamecreated",function(data){
        if(legends.games.status=="creating"){
          legends.games.join.joingame(data.gameid,data.authentication,legends.gamedata.revealedarmynumber,legends.gamedata.boardrotations,legends.gamedata.password);
        }
      });

      legends.socket.on("init",function(data){
        if(legends.games.status=="joining"){
          legends.games.status="ingame";
          legends.alttext.fast=false;
          legends.games.div.remove();
          legends.armies=data.armies;
          legends.board=data.board;
          legends.gamedata.gamename=data.gamename;
          legends.board.div=$("<div></div>").appendTo(legends.div);
          for(var x=0;x<legends.board.tiles.length;x++){
            if(legends.board.tiles[x]){
              for(var y=0;y<legends.board.tiles[x].length;y++){
                if(legends.board.tiles[x][y]){
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
          var reverseorder=legends.gamedata.boardrotations%4==2;
          var headercss={
            "margin-top":legends.styles.marginsize+"px",
            "font-weight":"bold",
            "text-align":"center"
          };
          $("<h2></h2>").text(legends.gamedata.gamename).appendTo(legends.armies.div).css(headercss);
          for(var armynumber=reverseorder?legends.armies.length-1:0;reverseorder?(armynumber>=0):(armynumber<legends.armies.length);armynumber+=reverseorder?-1:1){
            legends.armies[armynumber].playernamespan=$("<span></span>").text(legends.armies[armynumber].playername+"'s army ("+legends.armies[armynumber].side+")").css({
              "cursor":"pointer",
              "background-color":legends.armies[armynumber].playernamehighlighted?legends.styles.playernamehighlightcolour:"transparent"
            }).mousedown((function(armynumber){
              return function(event){
                var armynumbertohighlight=armynumber;
                var toggle=true;
                if(event.which==3){
                  armynumbertohighlight=Math.floor(Math.random()*legends.armies.length);
                  toggle=false;
                }
                for(var otherarmynumber=0;otherarmynumber<legends.armies.length;otherarmynumber++){
                  legends.togglehighlightplayername(otherarmynumber,otherarmynumber==armynumbertohighlight&&toggle,otherarmynumber==armynumbertohighlight,true);
                }
              };
            })(armynumber)).on("contextmenu",function(event){
              event.preventDefault();
            });;
            $("<div></div>").append(legends.armies[armynumber].playernamespan).appendTo(legends.armies.div).css(headercss);
            legends.armies[armynumber].div=$("<div></div>").appendTo(legends.armies.div).css({
              "position":"relative",
              "width":(legends.styles.armypiecewidth*6)+"px",
              "height":(legends.styles.armypieceheight*5)+"px",
              "margin":"auto",
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
                    "border-width":legends.styles.bordersize+"px",
                    "border-style":"outset",
                    "border-color":piece.allegiance=="good"?legends.styles.goodbordercolour:legends.styles.evilbordercolour
                  });
                  piece.boarddiv.image=$("<div></div>").appendTo(piece.boarddiv).css({
                    "position":"absolute",
                    "left":"0px",
                    "top":"0px",
                    "width":"100%",
                    "height":"100%",
                    "background-image":"url('"+legends.server.imagedirectory+"pieces/"+legends.piecedata[piece.id].image+"')",
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
                    "background-image":"url('"+legends.server.imagedirectory+"pieces/"+legends.piecedata[piece.id].image+"')",
                    "background-size":"100% 100%"
                  });
                  legends.drawpiece(piece,false);
                  legends.alttext.set(piece);
                  legends.dragging.set(piece);
                  piece.boarddiv.on("contextmenu",function(event){
                    event.preventDefault();
                  });
                  piece.boarddiv.mousedown((function(piece){
                    return function(event){
                      if(!legends.dragging.activepiece){
                        if(event.which==2){
                          legends.kill(piece.armynumber,piece.power,piece.number,true);
                          event.preventDefault();
                        }
                        else if(event.which==3){
                          if(piece.revealed){
                            legends.unreveal(piece.armynumber,piece.power,piece.number,true);
                          }
                          else{
                            legends.reveal(piece.armynumber,piece.power,piece.number,true);
                          }
                        }
                        else if(event.which==1&&event.ctrlKey){
                          if(piece.allegiance=="good"){
                            legends.makeevil(piece.armynumber,piece.power,piece.number,true);
                          }
                          else{
                            legends.makegood(piece.armynumber,piece.power,piece.number,true);
                          }
                        }
                      }
                    };
                  })(piece));
                }
              }
            }
          }
        }
      });

      legends.socket.on("pieceaction",function(data){
        if(legends.games.status=="ingame"&&data.gameid==legends.gamedata.gameid&&data.authentication==legends.gamedata.authentication&&(legends.gamedata.password==""||data.password==legends.gamedata.password)){
          legends[data.action](data.armynumber,data.power,data.number,false,data.x,data.y);
          if(!legends.games.windowfocused){
            legends.games.windowfocused=true;
            alert("An opponent has moved.");
          }
        }
      });

      legends.socket.on("errormessage",function(message){
        alert("Error: "+message+".");
        window.location.reload(false);
      });

      legends.socket.on("disconnect",function(message){
        if(legends.games.status=="lobby"||legends.games.status=="joining"||legends.games.status=="creating"){
          if(legends.designarmy.status){
            legends.div.append(legends.designarmy.div);
            legends.designarmy["good"].usecodebutton.hide();
            legends.designarmy["evil"].usecodebutton.hide();
          }
          legends.games.div.empty();
        }
        else if(legends.games.status=="ingame"){
          legends.board.div.empty();
          legends.armies.div.empty();
        }
        legends.alttext.hide();
        legends.div.prepend($("<div></div>").append($("<p>Lost connection to server.</p>"),$("<p></p>").append($("<button>Refresh page</button>").click(function(){
          window.location.reload(false);
        }))));
      });

    },

    "designarmy":{
      "status":false,
      "sides":["good","evil"],
      "presetarmycodes":{
        "good":["28,30,52,58,63,70,73,76,77,81,82,84,85,88,93,7,22,29,37,43,46,49,55,66,74,79,87,91,94,101","28,84,93,66,87,10,40,44,50,53,59,69,80,90,100,63,81,7,19,41,47,56,62,71,78,83,89,92,95,102","10,40,100,92,73,85,88,29,79,13,48,54,60,68,72,83,30,76,82,22,91,36,39,42,45,51,57,64,65,86","52,43,1,5,8,11,14,15,17,20,23,24,32,96,98,58,46,49,55,3,6,9,12,18,21,31,33,61,75,97","5,8,11,14,17,23,32,97,48,54,19,77,2,25,99,20,96,75,39,42,45,51,57,64,80,90,4,16,26,34","25,15,24,98,9,12,18,31,44,50,53,41,62,89,35,99,16,6,21,13,65,86,59,47,56,78,74,27,38,67"],
        "evil":["111,120,126,131,144,150,168,171,176,182,185,188,191,194,198,108,114,117,123,130,141,147,153,156,159,173,179,197,202,204","144,150,168,185,188,191,194,141,159,112,121,134,138,183,200,176,182,147,153,156,179,202,118,124,163,169,174,177,195,201","134,183,120,126,108,114,117,105,128,142,157,165,170,180,192,168,112,195,111,123,130,109,137,148,151,154,160,186,189,199","165,148,151,160,121,200,118,132,145,172,175,178,187,190,193,142,157,180,109,154,124,163,201,131,115,127,139,181,184,203","145,115,192,186,189,199,103,107,110,116,125,133,155,161,166,127,177,113,119,122,129,135,140,143,146,149,152,158,164,167","107,110,125,155,161,166,113,119,146,152,158,132,184,198,104,116,133,122,143,149,164,175,178,187,190,193,181,106,136,196"],
        "goodexpansion":"211,212,213,214,214,214,214,214,215,215,215,216,217,217,217,217,217,218,218,218,219,219,219,220,221,221,221,221,221,222",
        "evilexpansion":"223,224,225,225,225,226,226,226,227,227,227,228,228,228,229,229,229,230,230,230,231,231,231,232,233,233,233,233,233,234",
        "goodthunderpoint":"500,501,502,502,502,503,503,503,504,504,504,505,505,505,506,506,506,507,507,507,508,508,508,509,510,510,510,510,510,511",
        "evilthunderpoint":"536,537,538,538,538,539,539,539,540,540,540,541,541,541,542,542,542,543,543,543,544,544,544,545,546,546,546,546,546,547",
        "goodharrypotter":"600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629",
        "evilharrypotter":"630,631,632,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658"
      },
      "randomarmycode":function(side,expansion){
        var returnvalue=[];
        for(var j=0;j<legends.powers.length;j++){
          var power=legends.powers[j];
          var pieceids=[];
          for(var pieceid=0;pieceid<legends.piecedata.length;pieceid++){
            if(legends.piecedata[pieceid]&&(legends.piecedata[pieceid].set=="original"||legends.piecedata[pieceid].set=="promotional"||(expansion&&legends.piecedata[pieceid].set=="expansion"))&&legends.piecedata[pieceid].side==side&&legends.piecedata[pieceid].power==power){
              pieceids.push(pieceid);
            }
          }
          for(var number=0;number<legends.powerquantities[power];number++){
            returnvalue.push(pieceids[Math.floor(Math.random()*pieceids.length)]);
          }
        }
        return returnvalue;
      },
      "selectpiece":function(side,power,pieceid){
        var number=legends.designarmy[side].boxpieces[power].numberadded%legends.powerquantities[power];
        if(side=="good"&&power=="7"&&legends.designarmy[side].boxpieces[power].numberadded==3&&legends.designarmy[side].boxpieces["8"].pieceids.length==1&&legends.designarmy[side].boxpieces["8"].pieceids[0]==213){
          legends.designarmy.specialeightmode=true;
        }
        if(side=="good"&&power=="4"&&legends.designarmy[side].boxpieces[power].numberadded==3&&legends.designarmy[side].boxpieces["5"].pieceids.length==1&&legends.designarmy[side].boxpieces["5"].pieceids[0]==216){
          legends.designarmy.specialfivemode=true;
        }
        var newpower=power;
        if(side=="good"&&((power=="7"&&legends.designarmy.specialeightmode)||(power=="4"&&legends.designarmy.specialfivemode))){
          number=legends.designarmy[side].boxpieces[power].numberadded%5;
          if(number>=3){
            newpower=(power*1+1)+"";
            number=number-2;
            legends.designarmy[side].boxpieces[newpower].numberadded++;
          }
        }
        if((!(side=="good"&&power=="8"&&legends.designarmy.specialeightmode))&&(!(side=="good"&&power=="5"&&legends.designarmy.specialfivemode))){
          legends.designarmy[side].boxpieces[newpower].pieceids[number]=pieceid;
          legends.designarmy[side].boxpieces[power].numberadded++;
          legends.designarmy[side].boxpieces[newpower].divs[number].show().css({
            "background-image":"url('"+legends.server.imagedirectory+"pieces/"+legends.piecedata[pieceid].image+"')",
            "cursor":"pointer"
          });
          legends.alttext.setextra(legends.designarmy[side].boxpieces[newpower].divs[number],pieceid,true);
        }
        legends.designarmy.updatearmycode(side);
      },
      "removepiece":function(side,pieceid){
        var allids=legends.designarmy[side].armycodetextarea.val().split(",");
        for(var i=0;i<allids.length;i++){
          if(allids[i]==pieceid){
            allids.splice(i,1);
            i=allids.length;
          }
        }
        legends.designarmy[side].armycodetextarea.val(allids.join(","));
        legends.designarmy.updatefromarmycode(side);
      },
      "updatearmycode":function(side){
        var pieceids=[];
        for(var j=0;j<legends.powers.length;j++){
          var power=legends.powers[j];
          for(var number=0;number<legends.powerquantities[power];number++){
            var pieceid=legends.designarmy[side].boxpieces[power].pieceids[number];
            if(pieceid){
              pieceids.push(pieceid);
            }
          }
        }
        legends.designarmy[side].armycodetextarea.val(pieceids.join(","));
      },
      "updatefromarmycode":function(side){
        legends.designarmy.specialeightmode=false;
        legends.designarmy.specialfivemode=false;
        for(var j=0;j<legends.powers.length;j++){
          var power=legends.powers[j];
          for(var number=0;number<legends.powerquantities[power];number++){
            legends.designarmy[side].boxpieces[power].pieceids=[];
            legends.designarmy[side].boxpieces[power].numberadded=0;
            legends.designarmy[side].boxpieces[power].divs[number].hide().css({
              "pointer":"auto",
              "background-image":"none"
            });
          }
        }
        var pieceids=legends.designarmy[side].armycodetextarea.val().split(",");
        for(var i=0;i<pieceids.length;i++){
          var pieceid=pieceids[i]*1;
          if(legends.piecedata[pieceid]&&legends.piecedata[pieceid].side==side){
            legends.designarmy.selectpiece(side,legends.piecedata[pieceid].power,pieceid);
          }
        }
        legends.designarmy.updatearmycode(side);
      },
      "init":function(){
        legends.designarmy.status=true;
        legends.designarmy.specialeightmode=false;
        legends.designarmy.specialfivemode=false;
        legends.designarmy.initbutton.remove();
        for(var i=0;i<2;i++){
          var side=legends.designarmy.sides[i];
          legends.designarmy.div.append($("<h3>"+side.substr(0,1).toUpperCase()+side.substr(1)+" army</h3>"));
          legends.designarmy[side]={
            "table":$("<table></table>").appendTo(legends.designarmy.div),
            "rows":[],
            "imagecells":[],
            "boxcell":$("<td rowspan=\""+legends.powers.length+"\"></td>").css({"padding-left":legends.styles.marginsize}),
            "boxdiv":$("<div></div>").css({
              "position":"relative",
              "width":(legends.styles.designarmypiecewidth*6)+"px",
              "height":(legends.styles.designarmypieceheight*5)+"px",
              "background-image":"url('"+legends.server.imagedirectory+"box.png')",
              "background-size":"100% 100%"
            }),
            "boxpieces":{},
            "armycodetextarea":$("<textarea wrap=\"off\" rows=\"1\"></textarea>").css({"width":(legends.styles.designarmypiecewidth*6)+"px"}).change((function(side){
              return function(event){
                legends.designarmy.updatefromarmycode(side);
              };
            })(side)),
            "armycodebuttonsp":$("<p></p>")
          };
          for(var j=0;j<legends.powers.length;j++){
            var power=legends.powers[j];
            legends.designarmy[side].rows[j]=$("<tr></tr>").appendTo(legends.designarmy[side].table);
            legends.designarmy[side].rows[j].append($("<td></td>").html("<b>"+power+"</b>:").css({
              "font-size":"1.2em",
              "width":legends.styles.piecewidth+"px",
              "height":legends.styles.pieceheight+"px"
            }));
            legends.designarmy[side].imagecells[j]=$("<td></td>").appendTo(legends.designarmy[side].rows[j]);
            for(var pieceid=0;pieceid<legends.piecedata.length;pieceid++){
              if(legends.piecedata[pieceid]&&(legends.piecedata[pieceid].set=="original"||legends.piecedata[pieceid].set=="promotional"||legends.piecedata[pieceid].set=="expansion")&&legends.piecedata[pieceid].side==side&&legends.piecedata[pieceid].power==power){
                legends.alttext.setextra($("<img src=\""+legends.server.imagedirectory+"pieces/"+legends.piecedata[pieceid].image+"\">").appendTo(legends.designarmy[side].imagecells[j]).css({
                  "margin":"2px",
                  "width":legends.styles.piecewidth+"px",
                  "height":legends.styles.pieceheight+"px",
                  "border-width":legends.styles.bordersize+"px",
                  "border-style":"outset",
                  "border-color":(side=="good"?legends.styles.goodbordercolour:legends.styles.evilbordercolour),
                  "vertical-align":"middle",
                  "cursor":"pointer"
                }).click((function(side,power,pieceid){
                  return function(event){
                    legends.designarmy.selectpiece(side,power,pieceid);
                    legends.designarmy.updatearmycode(side);
                  };
                })(side,power,pieceid)),pieceid,false);
              }
            }
            if(j==0){
              legends.designarmy[side].rows[j].append(legends.designarmy[side].boxcell);
            }
            legends.designarmy[side].boxpieces[power]={
              "numberadded":0,
              "pieceids":[],
              "divs":[],
            }
            for(var number=0;number<legends.powerquantities[power];number++){
              var coordinates=legends.getboxcoordinates(power,number);
              legends.designarmy[side].boxpieces[power].divs[number]=$("<div></div>").appendTo(legends.designarmy[side].boxdiv).hide().css({
                "position":"absolute",
                "left":(coordinates.x*legends.styles.designarmypiecewidth)+"px",
                "top":(coordinates.y*legends.styles.designarmypieceheight)+"px",
                "width":(legends.styles.designarmypiecewidth-legends.styles.designarmypiecemarginsize*2)+"px",
                "height":(legends.styles.designarmypieceheight-legends.styles.designarmypiecemarginsize*2)+"px",
                "margin":legends.styles.designarmypiecemarginsize+"px",
                "-webkit-border-radius":legends.styles.designarmypieceborderradius+"px",
                "-moz-border-radius":legends.styles.designarmypieceborderradius+"px",
                "border-radius":legends.styles.designarmypieceborderradius+"px",
                "background-size":"100% 100%"
              }).click((function(side,power,number){
                return function(event){
                  var pieceid=legends.designarmy[side].boxpieces[power].pieceids[number];
                  if(pieceid){
                    legends.designarmy.removepiece(side,pieceid);
                  }
                };
              })(side,power,number));
              legends.alttext.setextra(legends.designarmy[side].boxpieces[power].divs[number],-1,false);
            }
          }
          legends.designarmy[side].usecodebutton=$("<button>Use code</button>").click((function(side){
            return function(event){
              for(var armynumber=0;armynumber<legends.games.create.players.length;armynumber++){
                if(legends.games.create.players[armynumber].sidedropdown.val()==side){
                  if(confirm("This will overwrite the army code for "+legends.games.create.players[armynumber].playernameinput.val()+". Are you sure you want to continue?")){
                    legends.games.create.players[armynumber].codeinput.val(legends.designarmy[side].armycodetextarea.val());
                  }
                  armynumber=legends.games.create.players.length;
                }
              }
            };
          })(side));
          legends.designarmy[side].boxcell.append(legends.designarmy[side].boxdiv,$("<button>Clear all</button>").click((function(side){
            return function(event){
              if(confirm("Are you sure?")){
                legends.designarmy[side].armycodetextarea.val("");
                legends.designarmy.updatefromarmycode(side);
              }
            };
          })(side)),$("<p></p>").append(document.createTextNode("Army code: "),$("<button>Select all</button>").click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.select();
            };
          })(side)),document.createTextNode(" "),legends.designarmy[side].usecodebutton,$("<br>"),legends.designarmy[side].armycodetextarea),legends.designarmy[side].armycodebuttonsp);
          $("<button>Random non-expansion army</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.val(legends.designarmy.randomarmycode(side,false));
              legends.designarmy.updatefromarmycode(side);
            };
          })(side));
          legends.designarmy[side].armycodebuttonsp.append($("<br>"));
          $("<button>Random army</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.val(legends.designarmy.randomarmycode(side,true));
              legends.designarmy.updatefromarmycode(side);
            };
          })(side));
          legends.designarmy[side].armycodebuttonsp.append($("<br>"));
          for(var k=0;k<legends.designarmy.presetarmycodes[side].length;k++){
            $("<button>Official army pack "+(k+1)+"</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side,k){
              return function(event){
                legends.designarmy[side].armycodetextarea.val(legends.designarmy.presetarmycodes[side][k]);
                legends.designarmy.updatefromarmycode(side);
              };
            })(side,k));
            legends.designarmy[side].armycodebuttonsp.append($("<br>"));
          }
          $("<button>Official expansion army ("+(side=="good"?"Celestial Vengeance":"Qa'ans Resurgence")+")</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.val(legends.designarmy.presetarmycodes[side+"expansion"]);
              legends.designarmy.updatefromarmycode(side);
            };
          })(side));
          legends.designarmy[side].armycodebuttonsp.append($("<br>"));
          $("<button>Thunder Point expansion army ("+(side=="good"?"Dalbac's Alchemists":"Artolis' Betrayal")+")</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.val(legends.designarmy.presetarmycodes[side+"thunderpoint"]);
              legends.designarmy.updatefromarmycode(side);
            };
          })(side));
          legends.designarmy[side].armycodebuttonsp.append($("<br>"));
          $("<button>Harry Potter version army</button>").appendTo(legends.designarmy[side].armycodebuttonsp).click((function(side){
            return function(event){
              legends.designarmy[side].armycodetextarea.val(legends.designarmy.presetarmycodes[side+"harrypotter"]);
              legends.designarmy.updatefromarmycode(side);
            };
          })(side));
        }
        legends.designarmy.div.append($("<h3>Official reference charts</h3>"));
        $("<p></p>").append("<a href=\"official/good.jpg\">Good original</a>").append("<a href=\"official/evil.jpg\">Evil original</a>").append("<a href=\"official/goodexpansion.jpg\">Good expansion</a>").append("<a href=\"official/evilexpansion.jpg\">Evil expansion</a>").appendTo(legends.designarmy.div);
      }
    }

  };

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