// ---------------------------------------------------------
// EXOTIC ARMOR LISTS
// ---------------------------------------------------------
// Add exotic armor names as quoted strings inside each list below,
// separated by commas. Example:
//
//   Solar: [
//     "Starfire Protocol",
//     "Sunbracers",
//   ],
//
// Optional: tag a name with [PVP] or [PVE] if it's lopsided toward one
// mode (e.g. "Frost-EE5 [PVP]") - see the tagging note near the bottom
// of this file for details. Most names can stay untagged.
//
// "Neutral" = exotics that work fine on any subclass for that class.
// These get combined with the matching subclass's list automatically.
//
// "Prismatic" = the single exotic class item for that class. Kept
// separate since it works differently (its own perk pool). Leave it
// as a single-item list, or empty until you're ready to set it up.
// ---------------------------------------------------------
const EXOTICS = {
  Titan: {
    Solar: [
      "Khepri's Horn", 
      "Loreley Splendor Helm", 
      "Ashen Wake",
      "Pyrogale Gauntlets", 
      "Melas Panoplia", 
      "Hallowfire Heart",
      "Pheonix Cradle",
      "The Path of Burning Steps",
      "Peregrine Greaves",
    ],
    Arc: [
      "An Insurmountable Skullfort",
      "Etternal Warrior",
      "Point-Contact Cannon Brace",
      "Cuirass of the Falling Star", 
      "Praxic Vestment",
      "Mk. 44 Stand Asides",
      "Peregrine Greaves",
    ],
    Void: [
      "Peregrine Greaves",
      "Helm of Saint-14",
      "Mask of the Quiet One",
      "Doom Fang Pauldron",
      "Ursa Furiosa",
      "No Backup Plans",
      "Second Chance", 
    ],
    Strand: [
      "Wishful Ignorance",
      "Abeyant Leap",
    ],
    Stasis: [
      "Cadmus Ridge Lancecap",
      "Hoarfrost-Z",
      "Blastwave Striders",
    ],
    Neutral: [
      "One-Eyed Mask [PVP]",
      "Precious Scars",
      "ACD/0 Feedback Fence",
      "Synthoceps",
      "Aeon Safe",
      "Wormgod Caress",
      "Stronghold",
      "Citans’s Ramparts",
      "Crest of Alpha Lupi",
      "Actium War Rig",
      "Armamentarium",
      "Heart of Inmost Light",
      "Severance Enclosure",
      "Arbor Warden",
      "Hazardous Propulsion",
      "Lion Rampant",
      "Peacekeepers",
      "Dunemarchers",
      "Anteus Wards", 
    ],
    Prismatic: [
      "Peregrine Greaves",
      "Stoicism",
    ],
  },
  Hunter: {
    Solar: [
      "Caliban's Hand",
      "Wormhusk Crown",
      "Celestial Nighthawk",
      "Young Ahamkara's Spine",
      "Athry's Embrace [PVP]",
      "Shards of Galanor",
      "Ophidia Spathe",
    ],
    Arc: [
      "Mask of Bakris",
      "Blight Ranger",
      "Shinobu's Vow",
      "Liar's Handshake",
      "Mothkeeper's Wraps",
      "Raiden Flux",
      "Lucky Rasberry",
      "Raiju's Harness",
      "Gifted Conviction",
    ],
    Void: [
      "Graviton Forfeit",
      "Khepri's Sting",
      "Gwisin Vest",
      "Omnioculus",
      "Gyrfalcon's Hauberk",
      "Orpheus Rig",
    ],
    Strand: [
      "Cyrtarachne's Facade",
      "Moirai",
      "Balance of Power",
    ],
    Stasis: [
      "Mask of Fealty",
      "Mask of Bakris",
      "Renewal Grasps",
    ],
    Neutral: [
      "Knucklehead Radar [PVP]",
      "Foetracer",
      "Sealed Ahamkara Grasps",
      "Mechaneer's Tricksleeves",
      "Aeon Swift",
      "Oathkeeper",
      "Assassin's Cowl",
      "Triton Vice",
      "The Dragon's Shadow [PVP]",
      "The Sixth Coyote",
      "Luckypants",
      "St0mp-EE5",
      "Gemini Jester [PVP]",
      "Fr0st-EE5 [PVP]",
      "The Bombardiers",
      "Star-Eater Scales",
      "Radiant Dance Machines [PVP]",
      "Speedloader Slacks",
      "Fortune's Favor",
    ],
    Prismatic: [
      "Relativism",
    ],
  },
  Warlock: {
    Solar: [
      "Dawn Chorus",
      "Speaker's Sight",
      "Sunbracers",
      "Eunoia",
      "Starfire Protocol",
      "Wings of Sacred Dawn",
      "Phoenix Protocol",
      "Promethium Spur",
      "Rain of Fire",
    ],
    Arc: [
      "Crown of Tempests",
      "Fallen Sunstar",
      "Getaway Artist",
      "Vesper of Radius",
      "Stormdancer's Brace",
      "Geomag Stabilizers",
    ],
    Void: [
      "Skull of Dire Ahamkara",
      "Nezarec's Sin",
      "Astrocyte Verse",
      "Contraverse Hold",
      "Nothing Manacles",
      "Briarbinds",
    ],
    Strand: [
      "Deimosuffusion",
      "Mataiodoxia",
      "Swarmers",
    ],
    Stasis: [
      "Osmiomancy Gloves",
      "Ballidorse Wrathweavers",
      "Rime-coat Raiment",
    ],
    Neutral: [
      "Eye of Another World",
      "The Stag",
      "Verity's Brow",
      "Apotheosis Veil",
      "Felwinter's Helm",
      "Cenotaph Mask",
      "Karnstein Armlets",
      "Winter's Guille",
      "Aeon Soul",
      "Ophidian Aspect [PVP]",
      "Claws of Ahamkara",
      "Necrotic Grip",
      "Sanguine Alchemy",
      "Chromatic Fire",
      "Mantle of Battle Harmony",
      "Transversive Steps [PVP]",
      "Lunafaction Boots [PVP]",
      "Boots of the Assembler",
      "Secant Filaments",
    ],
    Prismatic: [
      "Solipsism",
    ],
  },
};

// ---------------------------------------------------------
// PVP / PVE TAGGING (optional)
// ---------------------------------------------------------
// By default, every exotic above is treated as fine for BOTH PvE and
// PvP. If one is genuinely lopsided toward a single mode, just add
// a tag directly onto the end of its name, right in the lists above:
//
//   "Frost-EE5 [PVP]"
//   "Starfire Protocol [PVE]"
//
// The tag is stripped off automatically before it's shown anywhere -
// it's only used to decide whether it should show up when the
// "Include PvP-only" / "Include PvE-only" filter checkboxes are off.
// Leave a name untagged and it's treated as fine for both, same as
// before.
// ---------------------------------------------------------
