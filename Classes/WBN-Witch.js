/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-

	Subject:	Class: Witch (Worlds Beyond Number Playtest v1.0)

	Effect:		This script adds the Witch class playtest from Worlds Beyond Number (https://www.patreon.com/worldsbeyondnumber)

	Code by:	/u/satanner1s

	Date:		2023-11-02

	Sheet:		v13.0.6 and newer

*/

var iFileName = "Worlds Beyond Number: Witch Class Playtest v1.0.js";
RequiredSheetVersion("13.0.6");

SourceList["WBN:W"] = {
	name : "Worlds Beyond Number Patreon Early Access: Playtestable Witch Class",
	abbreviation : "WBN:W",
	group : "Worlds Beyond Number",
	url : "https://www.patreon.com/posts/patreon-early-91306717",
	date : "2023/10/19"
};

//first make the sheet know which spells are shaman spells
[//level 0 (cantrips)
	"acid splash", "cackle", "guidance", "light", "mending", "message", "minor illusion", "produce flame", "resistance", "shillelagh", "true strike",

	//level 1
	"animal friendship", "alarm", "bane", "bless", "command", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "disguise self", "fog cloud", "heroism", "hideous laughter", "inflict wounds", "protection from evil and good", "shield", "silent image", "sleep", "speak with animals", "witch's grasp",
	
	//level 2
	"aid", "animal messenger", "arcane lock", "augury", "blindness/deafness", "breath of belladonna", "cleansing crystal", "continual flame", "darkness", "darkvision", "detect thoughts", "enhance ability", "enlarge/reduce", "gust of wind", "heat metal", "hold person", "invisibility", "lesser restoration", "levitate", "magic mouth", "misty step", "protection from poison", "ray of enfeeblement", "see invisibility", "scorching ray", "shatter", "silence", "spider climb", "tongue-tie", "web",

	//level 3
	"bestow curse", "clairvoyance", "counterspell", "create poppet", "dispel magic", "fear", "fly", "gaseous form", "glyph of warding", "hypnotic pattern", "magic circle", "major image", "nondetection", "phantom steed", "protection from energy", "remove curse", "sending", "slow", "speak with dead", "swineskin", "tiny hut", "tongues", "water breathing", "water walk",

	//level 4
	"arcane eye", "banishment", "confusion", "conjure minor elementals", "conjure woodland beings", "control water", "death ward", "dimension door", "divination", "fabricate", "faithful hound", "fire shield", "giant insect", "locate creature", "polymorph", "private sanctum", "secret chest", "spellwarping curse", "stone shape", "stoneskin", "wall of fire", "wyrding",

	//level 5
	"animate hut", "animate objects", "arcane hand", "awaken", "commune", "conjure elemental", "contact other plane", "creation", "dispel evil and good", "dream", "geas", "greater restoration", "hallow", "insect plague", "legend lore", "mass cure wounds", "modify memory", "othershoes", "passwall", "planar binding", "scrying", "seeming", "telekinesis", "telepathic bond", "teleportation circle", "wall of force", "wall of stone",

	//level 6
	"conjure fey", "contingency", "create undead", "eyebite", "find the path", "flesh to stone", "forbiddance", "globe of invulnerability", "guards and wards", "harm", "heal", "heroes' feast", "instant summons", "irresistible dance", "magic jar", "move earth", "planar ally", "programmed illusion", "transport via plants", "true seeing", "wall of ice", "wall of thorns",

	//level 7
	"etherealness", "finger of death", "forcecage", "magnificent mansion", "mirage arcane", "plane shift", "prismatic spray", "project image", "regenerate", "reverse gravity", "sequester", "simulacrum", "symbol", "teleport",

	//level 8
	"animal shapes", "antimagic field", "antipathy/sympathy", "control weather", "demiplane", "earthquake", "feeblemind", "maze", "mind blank", "miser's menace", "power word stun",

	//level 9
	"astral projection", "foresight", "gate", "imprisonment", "mass heal", "power word kill", "prismatic wall", "shapechange", "true polymorph", "weird", "wish"
].forEach( function (s) {
	if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("witch") === -1) SpellsList[s].classes.push("witch");
});

ClassList["witch"] = {
	name : "Witch",
	regExpSearch : /witch/i,
	source : ["WBN:01", 2],
	defaultExcluded : false,
	primaryAbility : "Wisdom",
	prereqs : "Wisdom 13",
	die : 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Wis", "Cha"],


// EVERYTHING BELOW THIS LINE IS NOT UPDATED TO v13 YET!

	skills : ["\n\n" + toUni("Witch") + ": Choose three from Animal Handling, Arcana, Insight, Intimidation, Medicine, Nature, Perception, Persuasion, and Survival.", "\n\n" + toUni("MyClass") + ": Choose three from Animal Handling, Arcana, Insight, Intimidation, Medicine, Nature, Perception, Persuasion, and Survival."], 
	toolProfs : { 
		primary : [["Artisan's Tool", 2]],
		secondary : [["Artisan's Tool", 2]]
	}
	armor : [ 
		[false, false, false, false], 
		[false, false, false, false]
	],
	weapons : [ 
		[true, false, false], 
		[true, false, false] 
	],
	equipment : "Witch starting equipment:\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A component pouch -or- an arcane focus;\n \u2022 A scholar's pack -or- an explorer's pack;\n \u2022 Two daggers.",
	subclasses : ["Coven", ["coven of the claw", "coven of the green", "coven of the heart", "coven of the wicked"]], 
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 5, 
	spellcastingFactor : 1, 
	spellcastingKnown : { 
		spells : "list"
		prepared : true, 
	},


//	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"], //Optional; An array of spells that are added to the spell list from which the class can choose. If the class prepares spells, than this list of spells are always considered prepared. Each entry has to match the name of the entry of the spell in the SpellsList exactly
	//You can also have the list be added to the known spells of a class by making the 101th entry in the array read "AddToKnown" (i.e. spellcastingExtra[100] = "AddToKnown");

	features : {

		"spellcasting" : {
				name : "Spellcasting",
				source : [["WBN:W", 3],],
				minlevel : 1,
				description : desc([
					"I can cast prepared witch cantrips/spells, using Wisdom as my spellcasting ability",
					"I can use an arcane focus or household object as a spellcasting focus for my witch spells",
					"I can cast my prepared witch spells as rituals if they have the ritual tag"
				})
			},

		"fighting style" : { //note the use of lower case characters
			name : "Fighting Style", //required; the name of the class feature
			source : ["P", 72], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above", //required; the text to put in the "Class Features" field
			choices : ["Great Weapon Fighting", "Protection", "Two-Weapon Fighting"], //optional; choices the feature offers, if any.
			choicesNotInMenu : true, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"great weapon fighting" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Great Weapon Fighting Style", //required;
				description : "\n   " + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands" //required;
			},

			"protection" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Protection Fighting Style",
				description : "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I need to be wielding a shield and be able to see the attacker to do this",
				action : ["reaction", ""] //optional; adds the name of this choice to the reaction list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			},

			"two-weapon fighting" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Two-Weapon Fighting Style",
				description : "\n   " + "I can add my ability modifier to the damage of my off-hand attacks",

				calcChanges : { //optional; adds stuff to the calculation of attacks and/or HP

					hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += \"\\n + \" + classes.known.sorcerer.level + \" from Draconic Resilience (Sorcerer)\";};", //optional; string to be run using eval() when calculating the number of HP in the HP tooltip and automation

					atkCalc : ["if (isOffHand) {output.modToDmg = true; }; ", "When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks."], //optional; ["eval string", "explanation string"]; change something in the calculation of the Damage and To Hit of attacks; The first value in the array is stringified code that is run using eval(), the second entry is an explanation of what is being altered so that it can be displayed in a dialogue. This second entry can be left empty, as ""

					atkAdd : ["if (WeaponName.match(/unarmed strike/i)) {fields.Description += 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."], //optional;  ["eval string", "explanation string"]; works just like atkDmg, but affects the weapon attributes when they are applied to the sheet. With this you can change the weapon's description, range, damage die, attribute, etc. etc. However, this will only be applied to recognized weapons

						// Note that you need to use two back slashes for things in the eval code here, because it is first added to a string, and then run as code. See the hp for an example, with the \\n

						// For the eval strings for the attack calculations ('atkCalc' or 'atkAdd') there are some variables that you can use to test against:

							// The variable WeaponName contains the recognized weapon object name as it is used in the WeaponsList object (or "" in atkCalc if the weapon is not a recognized weapon);

							// The object "theWea" is the WeaponsList[WeaponName] object for the recognized weapon (or 'undefined' in atkCalc if the weapon is not a recognized weapon);

							// You can use the booleans 'isOffHand', 'isMeleeWeapon', 'isRangedWeapon', 'isSpell' (also true for cantrips), 'isDC'

							// If the attack is a spell that is found on the SpellList, the variable thisWeapon[3] contains the name of the entry in the SpellList

							// The object "fields" has all the values of the different fields of the attack (fields.Proficiency, fields.Mod, fields.Range, fields.Damage_Type, fields.Description, fields.To_Hit_Bonus, fields.Damage_Bonus, fields.Damage_Die, fields.Weight);

							// You can change the attributes of the "fields" object with the eval-string of atkAdd to affect what is put into the fields.

							// You can use the attributes of the "fields" object with the eval-string of atkCalc to check for things, but changing them will have no effect on the sheet.

							// With the atkCalc you have to change the "output" object in order to affect the outcome of the calculations. This object has the following attributes: output.prof (wether or not to add the proficiency bonus to the To Hit), output.die (Damage Die to use), output.mod (ability modifier), output.modToDmg (whether or not to add the ability modifier to Damage), output.magic (any magic bonus that's to be added to both To Hit and Damage), output.bHit (the To Hit bonus from the Blue Text/Modifier field), output.bDmg (the Damage bonus from the Blue Text/Modifier field), output.extraHit (a number added to the To Hit that is reserved for this eval), output.extraDmg (a number added to the damage that is reserved for this eval)
				}
			},
		},

		"arcane initiate" : {
			name : "Arcane Initiate",
			source : ["S", 125],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",

			skills : ["Arcana"], //optional; an array of skills with which proficiency is gained

			skillstxt : "\n\n" + toUni("Arcane Domain") + ": Arcana.", //optional; the text that has to be added to the skill tooltips

			spellcastingBonus : { //optional; an object that adds something to the "Bonus Spells" section of the spell selection dialog //this object can have all the same attributes as the "spellcastingList" object, but must also have a "name" defined" //the other things that can be defined in this that are not in the "spellcastingList" object, are the "selection", "times" and "prepared" values

				name : "Arcane Initiate", //required; this is used to identify the object, so must be an unique name

				class : "wizard", //optional but required if not including the "spells" entry; see "spellcastingList" object

				level : [0, 0], //optional; see "spellcastingList" object

				school : ["Necro"], //optional; see "spellcastingList" object

				spells : ["light"], //optional, but required if not including the "class" entry; see "spellcastingList" object

				notspells : ["mending"], //optional; see "spellcastingList" object

				selection : ["light"], //optional if "spells" is defined; this is the default selection for the array specified in "spells"

				times : 2, //optional; this is the number of times the bonus spells should be added. //This can also be an array of 20 values. That way the number of times are level-dependent

				prepared : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to automatically get a checked off checkbox in the first column, similar to domain spells for a cleric

				atwill : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "At Will" in the first column

				oncesr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×SR" in the first column

				oncelr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×LR" in the first column

				firstCol : "8", //optional; if set to any value, this makes the spell selected for this/these bonus spells to get the first two letters/numbers of that value in the first column
			},

			spellFirstColTitle : "Ki", //optional, only works if spellcastingBonus exists; if set to any value, this makes the first column of the captions on the spell sheet be set to the first two letters/numbers of that value

			vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense
		},

		"spellcasting" : {
			name : "Spellcasting",
			source : ["P", 114],
			minlevel : 1,
			description : "\n   " + "I can cast prepared wizard cantrips/spells, using Intelligence as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I can cast all wizard spells in my spellbook as rituals if they have the ritual tag",
			additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"], //optional; text to display in the header of the feature. This can be one value, but can also be an array of 20 values, one for each level.
		},

		"second wind" : {
			name : "Second Wind",
			source : ["P", 72],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I regain 1d10 + fighter level HP; I can use this once per short rest",
			additional : ["1d10+1", "1d10+2", "1d10+3", "1d10+4", "1d10+5", "1d10+6", "1d10+7", "1d10+8", "1d10+9", "1d10+10", "1d10+11", "1d10+12", "1d10+13", "1d10+14", "1d10+15", "1d10+16", "1d10+17", "1d10+18", "1d10+19", "1d10+20"],
			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			recovery : "short rest", //required if "usages" is defined; way of getting the limited feature recharged. Only if you define both the 'usages' and 'recovery' will the feature be added to the limited features
			action : ["bonus action", ""] //optional; adds the name of this feature to the bonus action list when chosen. The options are "action", "bonus action", and "reaction"
		},

		"action surge" : {
			name : "Action Surge",
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //example of usages varying per level
			recovery : "short rest",

			armor : [false, false, true, false], //optional; the 4 entries are for proficiency in: ["light", "medium", "heavy", "shields"]. Be sure to always add all four statements of true/false!

			weapons : [true, false, ["hand crossbow"]], //optional; the 3 entries are for: ["simple", "martial", "other"]. Be sure to always add both statements of true/false!

			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }, //optional; This is an object, or an array of similar objects, for adding a modifier to a modifier field. Using this will make it so that the modifier is added to any value that is already there. // The 'mod' attribute can be any combination of numbers, mathematical operators, and three-letter ability score abbreviations // The 'type' attribute can be "skill" or "save", but can also be left empty "" // The 'field' attribute depends on the type, for "skill" it can be the name of a skill, or "Init" for initiative, or "All" for the all skills modifier; for "save" it can be the three-letter abbreviation of an ability score, or "All" for the all saves modifier. // If the 'type' attribute is left empty, the 'field' attribute has to be the exact name of the field the modifier has to be added to // The 'text' attribute is an explanation of why the modifier was added //NOTE: for modifiers to attacks, use calcChanges

			addarmor : "Stone's Durability", //optional; a string of the name of the armour that is literally put in the Armor Description field when the class feature is applicable, and removed if not
		},

		"subclassfeature3" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Martial Archetype",
			source : ["P", 72],
			minlevel : 3,
			description : "\n   " + "Choose a Martial Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Champion, Battle Master, Eldritch Knight, or Purple Dragon Knight",
		},

		"subclassfeature3.1" : {
			name : "", //any feature who's name is empty like this one is, will be ignored. Since v12.5 of the sheet, an entry like this serves no function
			minlevel : 3,
		},

		"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature",
				"I gain proficiency with Constitution saving throws"
			]),

			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

				text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

				immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"

				adv_vs : ["traps", "charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
			},

			dmgres : ["Poison"], //optional; an array of damage types that the class gets resistance against. // If the resistance has a condition attached to it, like only being against nonmagical attacks, substitute the entry in the array with an array of 2: [the damage type, the damage type with the condition]. // For example: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]

			saves : ["Con"], //optional; an array of the ability scores with which the class feature grants proficiency in saving throws

			toolProfs : [["Musical instrument", 3], ["Thieves' tools", "Dex"]], // optional; this is an array with the tool proficiencies gained. Each entry can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated

			languageProfs : [1, "Elvish"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

			speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

				// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

				walk : { spd : 30, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.

				climb : { spd : "+50", enc : 0 }, // instead of numbers, you can also have modifiers. Modifiers are a string, starting with a mathematical operator, followed by a number (e.g. "-10", "+20"). // a value that is zero is ignored

				fly : { spd : "walk", enc : 0 }, // instead of a number/modifier, you can also set the attribute to "walk". This makes the speed mode assume the walking speed // Using an underscore as the first character means the value is only added if the value would be non-zero

				swim : { spd : "fixed 60", enc : "fixed 60" }, // if you include the word "fixed" together with a number, the movement mode will be that number, without any modifiers from other sources (like the Monk's speed bonus). However, if another entry that isn't 'fixed' does end up with a higher total while including any modifiers, that speed is used instead

				allModes : "+10" // the 'allModes' attribute can only consist of a modifier. This modifier is applied to all speed modes, both normal and encumbered. It is only applied if the speed mode exists, it won't give the character a burrow speed if it would otherwise have none, for example
			},
		},
	}
}


/* CHANGES SINCE V12.999:
	1. 'armor' attribute has been replaced with 'armorProfs', but is otherwise identical.
	2. 'weapons' attribute has been replaced with 'weaponProfs', but is otherwise identical.
	3. 'primaryAbility' should no longer have the class' name in it, nor a line break at the start, a bullet point, or a semicolon at the end.
	4. 'prereqs' should no longer have the class' name in it, nor a line break at the start, a bullet point, or a semicolon at the end.
*/
