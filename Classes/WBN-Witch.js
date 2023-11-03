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
		"witchraft" : {
				name : "Witchcraft",
				source : [["WBN:W", 3],],
				minlevel : 1,
				description : desc([
					"I can create a token using 1 hr of labor and expending a spell slot of whatever spell I put in it",
					"I must make a wis check using artisan's tools, DC 10+ spell level",
					"I can do this once per short/long rest, and can have a number of tokens = PB",
					"",
					"I can also permanently sacrifice a spell slot to create a talisman",
					"I must spend 24 total hours of labor and make a DC 20 wis check using artisan's tools",
					"A talisman can be used to cast a spell once per day, resetting at dawn.",
					"I can instead sacrifice a 3rd or 6th level spell slot to craft a magic item as shown on the table on p. 4"
				}),
				recovery : "short or long rest",
				action : ["1 hr", "Craft Token"],
				action : ["24 hr", "Craft Talisman"]
		},
		"witch's familiar" : {
				name : "Witch's Familiar",
				source : [["WBN:W", 3],],
				minlevel : 1,
				description : desc([
					"I have a magical familiar who acts independently of me but generally heeds my requests",
					"When they drop to 0 hp I can expend a spell slot of 1st level or higher to keep them at 1 hp as a reaction",
					"If they die I can revive them during a short or long rest, expending 10gp of herbs or incense",
					"I can communicate telepathically with them and can see through their eyes and ears as an action.",
					"When I cast a spell with a range of touch, my familiar can deliver the spell within 100 ft with their reaction.",
					"I can transfer a spell's concentration to my familiar as a bonus action, but cannot concentrate on a spell myself while doing so"
				}),
				action : ["reaction", "Save Familiar"],
				action : ["bonus action", "Transfer Concentration"]
		},
		"subclassfeature2" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Coven",
			source : ["WBN:W", 6],
			minlevel : 2,
			description : "\n   " + "Choose a Coven you identify with and put it in the \"Class\" field" + "\n   " + "Choose either Coven of the Claw, Coven of the Green, or Coven of the Heart",
		},
		"subclassfeature2.1" : {
			name : "", //any feature who's name is empty like this one is, will be ignored. Since v12.5 of the sheet, an entry like this serves no function
			minlevel : 2,
		},
		"retributive curses" : { 
			name : "Retributive Curses",
			source : ["WBN:W", 5],
			minlevel : 3,
			description :  desc([
					"When a creature within 60 feet of me damages me or causes me to make a saving throw, I can cast a curse spell on that creature as a reaction",
					"I can also use this reaction when a creature within range forces a saving throw from a creature holding a token or talisman I've created"
				})
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName == ["bane", "hideous laughter", "witch's grasp", "blindness/deafness", "ray of enfeeblement", "tongue-tie", "bestow curse", "phantasmal killer", "othershoes", "irresistable dance", "flesh to stone", "miser's menace", "imprisonment"]) {
							spellObj.firstCol = "(curse)";
							spellObj.range = What("Unit System") === "metric" ? ConvertToMetric("60 ft", 0.5) : "60 ft";
							spellObj.time = "1 rea";
						};
					},
					"When a creature within 60 feet of me damages me or causes me to make a saving throw, I can cast a curse spell on that creature as a reaction."
				]
			}
		},
		"wracking curses" : {
			name : "Wracking Curses",
			source : ["WBN:W", 5],
			minlevel : 5,
			additional : levels.map(function (n) {
					if (n < 5) return "";
					var cr = n < 11 ? "1" : "2";
				}),
			description :  desc([
					"Once per turn when I deal damage to a creature under the effects of a Curse, I can deal an extra " + cr + "d10 psychic damage to it."
				})
		},
		"willful walls" : {
				name : "Willful Walls",
				source : [["WBN:W", 5],],
				minlevel : 18,
				description : desc([
					"I can create a sanctum in 8 hours. I must have taken a long rest there and have permission from the owner",
					"I determine my sanctum's boundaries, but must be able to travel its perimeter in an hour or less",
					"When it is 7 days old I can cast the Hallow spell on one 60 ft. radius area without material components",
					"If I am in my sanctum when a creature tries to force entry into this area, I can impose disadvantage on its Cha save",
					"I can only have one sanctum at a time. If I designate a new one, the Hallow spell cast on a previous sanctum immediately ends."
				})
		},
		"true craft" : {
				name : "True Craft",
				source : [["WBN:W", 5],],
				minlevel : 20,
				description : desc([
					"I can create a token or talisman using a spell of 8th level or lower from any class's spell list",
					"To do so I must expend a spell slot one level higher than the spell I choose"
				})
		},
	}
}
}

AddSubClass( 
	"witch", 
	"claw", 
	{ 
		regExpSearch : /claw/i, 
		subname : "Coven of the Claw", 
		source : ["WBN:W", 6], 
		features : {
			"subclassfeature2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Claw Spells",
				source : ["WBN:W", 6],
				minlevel : 2,
				description : desc([
					"I learn the Poison Spray and Primal Savagery cantrips and gain the ability to cast certain spells",
					"These are always prepared, but don't count against the number of spells I can prepare"
				]),
				spellcastingBonus : {
					name : "Claw Spells",
					spells : ["poison spray", "primal savagery"],
					selection : ["poison spray", "primal savagery"]
				},
				spellcastingExtra : ["hunter's mark", "speak with animals", "alter self", "spider climb", "conjure animals", "haste", "dominate beast", "wyrding", "insect plague", "hold monster"]
			},
			"subclassfeature2.1" : {
				name : "Curse of the Claw",
				source : ["WBN:W", 6],
				minlevel : 2,
				description : "When I cast Hunter's Mark or a curse spell on a creature, I can use a bonus action to make a male weapon attack against an unaffected creature within 5 feet of me",
				action : ["bonus action", "Curse of the Claw"]
			},
			"subclassfeature2.2" : {
				name : "Crimson Gift",
				source : ["WBN:W", 6],
				minlevel : 2,
				description : desc([
					"I gain proficiency with light and medium armor, and with shields",
					"My hit point maximum increases by an additional 1 hp per level",
					"I can use Wisdom instead of Strength or Dexterity for weapon attack and damage rolls",
				]),
				armorProfs : [true, true, false, true],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (What('Wis Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
								fields.Mod = 5;
							};
						},
					]
				}
				calcChanges : {
					hp : function (totalHD) {
						if (classes.known.witch) {
							return [classes.known.witch.level, "Crimson Gift (witch level)"];
						}
					}
				}
			},
			"subclassfeature6" : {
				name : "Call to the Hunter",
				source : ["WBN:W", 6],
				minlevel : 6,
				description :  desc([
					"I can call on an allied beast in times of need. I choose either Air, Land, or Water",
					"The creature disappears after 1 minute or when it is reduced to 0 hp",
					"It shares my initiative count in combat but acts immediately after me. It obeys my commands or takes the Dodge action",
					"I can expend a spell slot of 2nd level or higher as an action to regain the use of this feature."
				]),
				recovery: "short or long rest"
				uses : 1
				action : ["action", "Call to the Hunter"]
				creaturesAdd : [["Allied Hunter", true]],
				creatureOptions : [{
					name : "Allied Hunter",
					source : [["WBN:W", 7]],
					size : 4,
					type : "Beast",
					alignment : "",
					ac : 13,
					hp : 20,
					had : [],
					speed : "30 ft, fly 30 ft (hover)",
					scores : [10, 14, 14, 13, 15, 11],
					damage_immunities : "fire",
					condition_immunities : "charmed, frightened, grappled, prone, restrained",
					senses : "Darkvision 60 ft",
					passivePerception : 12,
					languages : "understands the languages of its creator",
					challengeRating : "1/2",
					proficiencyBonus : 2,
					proficiencyBonusLinked : true,
					attacksAction : 1,
					attacks : [{
						name : "Flame Seed",
						ability : 5,
						damage : [1, 6, "fire"],
						range : "60 ft",
						description : "Ranged weapon attack",
						modifiers : ["", "Prof"],
						abilitytodamage : false,
						useSpellMod : "druid"
					}, {
						name : "Fiery Teleportation",
						ability : 5,
						damage : [1, 6, "fire"],
						range : "5-ft radius",
						description : "Dex save for all within 5 ft of teleportation origin, success - no damage; See traits",
						dc : true,
						modifiers : ["", "Prof"],
						abilitytodamage : false,
						useSpellMod : "druid"
					}, {
						name : "Fiery Manifestation",
						ability : 5,
						damage : [2, 6, "fire"],
						range : "10-ft radius",
						description : "Dex save for all within 10 ft where spirit is summoned, success - no damage",
						dc : true,
						abilitytodamage : false,
						useSpellMod : "druid"
					}],
					features : [{
						name : "Creator",
						description : "The spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
					}],
					actions : [{
						name : "Fiery Teleportation",
						description : "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 15 ft to unoccupied spaces its creator can see. Then each creature within 5 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take fire damage equal to 1d6 + its proficiency bonus."
					}],
					traits : [{
						name : "Fiery Manifestation",
						description : "The spirit appears in an unoccupied space of its creator's choice that its creator can see within 30 ft. Each creature within 10 ft of the spirit (other than its creator) when it appears must succeed on a Dexterity saving throw against its creator's spell save DC or take 2d6 fire damage."
					}],
					header : "Wildfire",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.witch) return;
							var drdLvl = classes.known.witch.level;
							var drdLvl5 = 5 * drdLvl;
							HDobj.alt.push(5 + drdLvl5);
							HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its creator's witch level (" + drdLvl5 + ")");
						},
						setAltHp : true
					}	
				}]
			},
			"subclassfeature10" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
			"subclassfeature14" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
		}
	}
);

AddSubClass( 
	"witch", 
	"green", 
	{ 
		regExpSearch : /green/i, 
		subname : "Coven of the Green", 
		source : ["WBN:W", 7], 
		features : {
			"subclassfeature2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Rallying Cry",
				source : ["S", 128],
				minlevel : 3,
				description : "\n   " + "When I use Second Wind, I can also heal three allies within 60 that can see or hear me",
				additional : ["", "", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
				eval : "RemoveAction(\"bonus action\", \"Second Wind\"); AddAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\", \"Purple Dragon Knight\")", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
				removeeval : "RemoveAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\"); AddAction(\"bonus action\", \"Second Wind\", \"Fighter\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
			},
			"subclassfeature2.1" : {
				name : "Royal Envoy",
				source : ["S", 128],
				minlevel : 7,
				description : "\n   " + "I gain proficiency and expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Perform.",
				skillstxt : "\n\n" + toUni("Purple Dragon Knight (Royal Envoy)") + ": Persuasion proficiency and expertise; if already proficient, choose one from Animal Handling, Insight, Intimidation, and Performance.",
				skills : ["Persuasion"],
			},
			"subclassfeature6" : {
				name : "Inspiring Surge",
				source : ["S", 128],
				minlevel : 10,
				description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
				additional : ["", "", "", "", "", "", "", "", "", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "2 allies", "2 allies", "2 allies"],
			},
			"subclassfeature10" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
			"subclassfeature14" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
		}
	}
);

AddSubClass( 
	"witch", 
	"heart", 
	{ 
		regExpSearch : /heart/i, 
		subname : "Coven of the Heart", 
		source : ["WBN:W", 8], 
		features : {
			"subclassfeature2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Rallying Cry",
				source : ["S", 128],
				minlevel : 3,
				description : "\n   " + "When I use Second Wind, I can also heal three allies within 60 that can see or hear me",
				additional : ["", "", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
				eval : "RemoveAction(\"bonus action\", \"Second Wind\"); AddAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\", \"Purple Dragon Knight\")", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
				removeeval : "RemoveAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\"); AddAction(\"bonus action\", \"Second Wind\", \"Fighter\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
			},
			"subclassfeature2.1" : {
				name : "Royal Envoy",
				source : ["S", 128],
				minlevel : 7,
				description : "\n   " + "I gain proficiency and expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Perform.",
				skillstxt : "\n\n" + toUni("Purple Dragon Knight (Royal Envoy)") + ": Persuasion proficiency and expertise; if already proficient, choose one from Animal Handling, Insight, Intimidation, and Performance.",
				skills : ["Persuasion"],
			},
			"subclassfeature6" : {
				name : "Inspiring Surge",
				source : ["S", 128],
				minlevel : 10,
				description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
				additional : ["", "", "", "", "", "", "", "", "", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "2 allies", "2 allies", "2 allies"],
			},
			"subclassfeature10" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
			"subclassfeature14" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
		}
	}
);

AddSubClass( 
	"witch", 
	"wicked", 
	{ 
		regExpSearch : /wicked/i, 
		subname : "Coven of the Wicked", 
		source : ["WBN:W", 9], 
		features : {
			"subclassfeature2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Rallying Cry",
				source : ["S", 128],
				minlevel : 3,
				description : "\n   " + "When I use Second Wind, I can also heal three allies within 60 that can see or hear me",
				additional : ["", "", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
				eval : "RemoveAction(\"bonus action\", \"Second Wind\"); AddAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\", \"Purple Dragon Knight\")", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
				removeeval : "RemoveAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\"); AddAction(\"bonus action\", \"Second Wind\", \"Fighter\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
			},
			"subclassfeature2.1" : {
				name : "Royal Envoy",
				source : ["S", 128],
				minlevel : 7,
				description : "\n   " + "I gain proficiency and expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Perform.",
				skillstxt : "\n\n" + toUni("Purple Dragon Knight (Royal Envoy)") + ": Persuasion proficiency and expertise; if already proficient, choose one from Animal Handling, Insight, Intimidation, and Performance.",
				skills : ["Persuasion"],
			},
			"subclassfeature6" : {
				name : "Inspiring Surge",
				source : ["S", 128],
				minlevel : 10,
				description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
				additional : ["", "", "", "", "", "", "", "", "", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "2 allies", "2 allies", "2 allies"],
			},
			"subclassfeature10" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
			"subclassfeature14" : {
				name : "Bulwark",
				source : ["S", 128],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
		}
	}
);
