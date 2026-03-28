import { StoryCardData } from "./storyboardTypes";

export const storyCards: StoryCardData[] = [
  // === SESSION 1: The Mission ===
  {
    id: "ch-1",
    session: 1,
    chapter: 1,
    title: "The Brave Adventurers of Saltmarsh",
    story:
      "In the coastal town of Saltmarsh, five unlikely heroes answered the call of the town council. Mornie, a skilled warrior-for-hire. Airell, a cunning linguist who speaks the tongue of dragons. Arienh, a gentle healer with a kind heart. Kellen, a young and curious wizard full of wonder. And Mah-Kaylah, a fierce fighter with a fiery spirit. Together, they were offered a handsome reward of 150 gold coins to journey north into the marshes and investigate rumors of lizardfolk stockpiling weapons. With packs loaded and spirits high, they prepared to set sail into the unknown.",
    imagePrompt:
      "Five fantasy adventurers standing on a wooden dock in a medieval coastal town at sunrise, ships in harbor, warm golden light",
    backgroundImage: "chapter_1.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Why Saltmarsh?",
        content:
          "Saltmarsh is a small fishing town on the coast of the Azure Sea, known for its salt trade and colorful council politics.",
      },
      {
        title: "The Party's Secret",
        content:
          "Each adventurer had their own hidden reason for joining. Some needed gold, some needed favors, and one was avoiding a year of hard labor!",
      },
    ],
  },
  {
    id: "ch-2",
    session: 1,
    chapter: 2,
    title: "Sailing Into the Fog",
    story:
      "Captain Kester and his bright sapphire kobold first mate, Bait, sailed the party northward along the coast. The sea was calm at first, but danger lurked everywhere. As they passed the mysterious Abbey Isle, they spotted the infamous pirate ship, the Falling Star! Thinking quickly, Kellen conjured an illusion of a great rock in the water. The pirates swerved to avoid it and, baffled by the phantom obstacle, blamed the priests of the Abbey and sailed away. But the sea had more surprises — a shark and two fish-warriors called sahuagin attacked the boat! After a thrilling battle on the waves, the heroes drove them off and continued their journey.",
    imagePrompt:
      "A small sailing boat in thick ocean fog with a ghostly pirate ship visible in the background, fantasy medieval style",
    backgroundImage: "chapter_2.jpg",
    animation: ["ship-rocking", "fog"],
    funFacts: [
      {
        title: "Captain Kester's Fear",
        content:
          "Poor Captain Kester lost half his face to a shark attack years ago. He really does not enjoy being on the water, but needs the work to make ends meet!",
      },
      {
        title: "Illusory Rock",
        content:
          "Kellen's fake rock trick fooled the entire crew of the Falling Star. They weren't the brightest pirates on the sea!",
      },
    ],
  },
  {
    id: "ch-3",
    session: 1,
    chapter: 3,
    title: "Into the Marsh",
    story:
      "Landing on the muddy shore, the adventurers waved goodbye to Kester and Bait, then plunged into the hot, humid swamp. Arienh, who knew the area well, tracked footprints through the muck while Kellen excitedly gathered water-storing plants. Mornie scouted ahead like a shadow. They battled a raging river crossing that left them exhausted, then stumbled upon a cave full of giant lizards. After a fierce fight, they discovered a mysterious sword and half-eaten remains. Just as they settled in to rest, angry shouts echoed through the tunnels — the lizardfolk had found them!",
    imagePrompt:
      "Adventurers trudging through a misty swamp with giant twisted trees and murky water, humid atmosphere, fantasy art",
    backgroundImage: "chapter_3.jpg",
    animation: ["fog"],
    funFacts: [
      {
        title: "Interpretive Dance",
        content:
          "When Airell scouted the cave and tried to silently communicate what he saw, his frantic hand gestures were so confusing that nobody understood a thing!",
      },
      {
        title: "Exotic Skins",
        content:
          "The party skinned the giant lizards because exotic skins fetch a fortune at the Saltmarsh market. Adventuring is expensive!",
      },
    ],
  },

  // === SESSION 2: The Lizard Queen ===
  {
    id: "ch-4",
    session: 2,
    chapter: 4,
    title: "The Lizard Queen's Court",
    story:
      "The lizardfolk warriors, shouting commands in Draconic, demanded the adventurers lay down their weapons. Airell tried bluffing that they were from the Falling Star, but it didn't work. A battle broke out — Kellen was dragged away and knocked unconscious, and something magical happened to her eye, turning it into a strange owl-like eye with a mysterious swirl. Eventually, overwhelmed by numbers, the party surrendered. Taken to prison cells, they spent an uneasy night. The next morning, the wise advisor Sauriv brought them before Queen Othokent, who made them a secret deal: kill the legendary giant crocodile Thousand Teeth, and earn the trust of her people.",
    imagePrompt:
      "A grand underground throne room with a regal lizardfolk queen on a bone throne, torches flickering, adventurers kneeling before her",
    backgroundImage: "chapter_4.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "Kellen's Owl Eye",
        content:
          "During the battle, something magical awakened in Kellen. One of her eyes transformed, gaining a mysterious swirling pattern that would become very important later.",
      },
      {
        title: "A Secret Mission",
        content:
          "The Queen publicly asked them to collect lizard eggs, but secretly she needed Thousand Teeth dead — some of her people worshipped the beast!",
      },
    ],
  },

  // === SESSION 3: Thousand Teeth ===
  {
    id: "ch-5",
    session: 3,
    chapter: 5,
    title: "Hunting Through the Storm",
    story:
      "Setting out with lizardfolk guides, the party first sent word to Captain Kester to return in a week. Then, as dark clouds rolled in and rain poured down in sheets, they marched into the marsh to find Thousand Teeth. Along the way, they were ambushed twice by Bullywugs — sneaky frog-creatures who lurk in the swamp. In the first ambush, Kellen and Airell distracted them with an illusion of a crocodile while the others struck swiftly. In the second, the Bullywugs tried to kidnap Arienh, but she magically teleported away in a flash of mist, leaving the dim-witted frog-folk utterly bewildered.",
    imagePrompt:
      "Fantasy adventurers fighting frog-like creatures in heavy rain in a dark swamp, lightning in the background, dramatic action scene",
    backgroundImage: "chapter_5.jpg",
    animation: ["storm"],
    funFacts: [
      {
        title: "Bullywugs",
        content:
          "Bullywugs are frog-like creatures who live in swamps and bogs. They're not very bright, but they make up for it with numbers and sneakiness!",
      },
      {
        title: "Misty Step",
        content:
          "Arienh's teleportation spell is called Misty Step — she vanishes in a puff of silver mist and reappears nearby. The Bullywugs had never seen anything like it!",
      },
    ],
  },
  {
    id: "ch-6",
    session: 3,
    chapter: 6,
    title: "The Battle with Thousand Teeth",
    story:
      "They found the legendary beast sunning himself in a lagoon — a crocodile so enormous that his name alone struck fear into hearts. The party planned carefully. Arienh cast glittering fairy fire to outline the monster, then transformed herself into a crocodile to wrestle it! While Thousand Teeth thrashed and pulled crocodile-Arienh underwater, the others attacked from every angle. Mornie and Airell struck blow after blow, and finally Mah-Kaylah delivered the killing strike — driving her sword through the beast's mighty skull. They took the head as proof and teeth as trophies, and discovered treasure on a long-dead adventurer in the lagoon.",
    imagePrompt:
      "Epic battle scene of adventurers fighting a massive crocodile in a jungle lagoon, one person transformed into a crocodile wrestling it, dramatic fantasy art",
    backgroundImage: "chapter_6.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Wild Shape",
        content:
          "Arienh is a druid who can transform into animals! She turned into a crocodile to fight Thousand Teeth on equal terms. Talk about fighting fire with fire!",
      },
      {
        title: "Lost Pearl",
        content:
          "After the battle, Kellen discovered her magical pearl was missing. She had a complete sobbing breakdown, but thankfully found it again later at the lizardfolk caves.",
      },
    ],
  },

  // === SESSION 4: The Tree Ent ===
  {
    id: "ch-7",
    session: 4,
    chapter: 7,
    title: "The Mysterious Fighter",
    story:
      "On their way back to the lizardfolk caves, the party passed a Bullywug village and heard a tremendous commotion. A lone warrior was fighting an entire camp of frog-creatures single-handedly! Without hesitation, the adventurers charged in to help. Arienh summoned a whole menagerie of magical animals — bears, insects, and even a fighting horse — to join the battle. The mysterious fighter was named Joza, a monk sent from her monastery to investigate dark cultists. The cultists had been performing a strange ritual before the Bullywugs killed them, and now a mysterious tree covered in glowing inscriptions stood at the center of the camp.",
    imagePrompt:
      "A lone female monk warrior fighting dozens of frog creatures in a swamp village, magical animals joining the battle, dynamic fantasy action",
    backgroundImage: "chapter_7.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Joza the Monk",
        content:
          "Joza fights with her fists and a chain weapon. She joined the party after they saved her from the Bullywugs, and Kellen immediately pinned a makeshift 'group pin' on her shirt!",
      },
      {
        title: "Immovable Rod",
        content:
          "Among the loot was a magical rod that stays perfectly still in the air when you click its button. Nothing can move it! It was being used to hold the mysterious tree in place.",
      },
    ],
  },
  {
    id: "ch-8",
    session: 4,
    chapter: 8,
    title: "The Awakened Tree",
    story:
      "The glowing tree held dark secrets. When Joza accidentally misread the ancient scrolls, the tree shuddered to life — a terrifying Tree Ent with branches like crushing arms! Worse still, it summoned quick, nasty little elf-creatures that darted in to strike and vanished before anyone could react. The battle was desperate. Arienh and Mah-Kaylah blasted the tree with fire while Kellen raced to undo the dark spell. Everyone fought to buy her time, and finally Mah-Kaylah's cutlass split the tree down the middle. Kellen finished breaking the curse, reaching inside the crumbling bark to retrieve something glowing with power. Exhausted but alive, they hurried back to the lizardfolk caves.",
    imagePrompt:
      "A massive evil tree creature with glowing runes coming to life in a dark swamp, adventurers casting fire spells at it, dramatic fantasy horror",
    backgroundImage: "chapter_8.jpg",
    animation: ["fire"],
    funFacts: [
      {
        title: "The Scrolls",
        content:
          "The scrolls were written in Abyssal, the language of demons. When read aloud, they could either activate or deactivate the spell on the tree. Joza read them so badly that the tree came alive!",
      },
      {
        title: "Kellen's Connection",
        content:
          "The swirling pattern on the tree matched the one in Kellen's magical eye. Something ancient and powerful was connecting them, though no one understood what yet.",
      },
    ],
  },

  // === SESSION 5: Celebration ===
  {
    id: "ch-9",
    session: 5,
    chapter: 9,
    title: "The Great Lizardfolk Feast",
    story:
      "Back at the caves with Thousand Teeth's massive head floating on Kellen's magic disk, the lizardfolk erupted in celebration! The Queen declared a grand feast — a binding ceremony between the two groups, like a wedding between peoples. They dined on Thousand Teeth's own meat alongside mountains of food. Kellen and Mah-Kaylah performed a dramatic retelling of the hunt with magical light effects. Then came the games: Mornie won an eating contest and earned a healing potion. Joza won a hot-water dance competition. Arienh beat the Queen herself at a lizardfolk board game called Shark. And Mah-Kaylah bested their greatest warriors in combat!",
    imagePrompt:
      "A festive underground cavern celebration with lizardfolk and human adventurers feasting together, a giant crocodile head mounted on the wall, torchlight and revelry",
    backgroundImage: "chapter_9.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "The Game of Shark",
        content:
          "Shark is a lizardfolk board game similar to chess. Sauriv taught it to the adventurers before the ceremony, and Arienh turned out to be a natural!",
      },
      {
        title: "Morning After",
        content:
          "Kellen had a bit too much fun at the celebration. The next morning, she was so sick she could barely walk, and accidentally told the guards 'Nice to meet you' while pointing at the mess she'd made!",
      },
    ],
  },
  {
    id: "ch-10",
    session: 5,
    chapter: 10,
    title: "Heroes Return to Saltmarsh",
    story:
      "Sailing home with Captain Kester — who complained the whole way about taxes and pirates — the adventurers returned to Saltmarsh as heroes. They presented their findings to the town council, where the politics were as tangled as seaweed. Gellan and Eda schemed against Commander Eliander. Manistrad the dwarf was furious when she recognized a dead dwarf's weapon among their loot. But the council was impressed, and the party was rewarded handsomely. Eliander even promised to serve as ambassador to the lizardfolk himself, speaking their language. Each hero received their 150 gold, and the town buzzed with tales of their bravery.",
    imagePrompt:
      "Adventurers arriving at a medieval coastal town dock to cheering crowds, flags waving, warm sunset light, triumphant homecoming",
    backgroundImage: "chapter_10.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "Council Drama",
        content:
          "The Saltmarsh town council is a nest of rivalries. Gellan the smuggler, Eda the merchant, Commander Eliander, and Manistrad the dwarf miner all have their own agendas!",
      },
      {
        title: "Pardoned!",
        content:
          "Eliander officially pardoned Mah-Kaylah for her past crimes. No more running from the law — she was a hero now!",
      },
    ],
  },

  // === SESSION 6: Richfest ===
  {
    id: "ch-11",
    session: 6,
    chapter: 11,
    title: "The Festival of Richfest",
    story:
      "A month of well-earned rest passed, and then the grand Festival of Richfest arrived! The whole town came alive with music, games, and merriment. Kellen won a frog race, cheering wildly as her little champion hopped across the finish line first. Mornie gambled and lost a drinking contest — even the toughest warrior has her weaknesses! Meanwhile, strange things were happening behind the scenes. Airell, under a secret disguise, had been weaving a complicated web of espionage involving a slave named Zvala who knew the secrets of making gunpowder. But for now, the festival was a time for joy and celebration.",
    imagePrompt:
      "A bustling medieval festival in a coastal town square with colorful banners, frog races, people dancing, warm festive atmosphere, fantasy art",
    backgroundImage: "chapter_11.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "Richfest",
        content:
          "Richfest is a seven-day festival week in the middle of summer. The whole town shuts down for parties, games, and feasting!",
      },
      {
        title: "Downtime Adventures",
        content:
          "During the month off, Mah-Kaylah trained by lifting fish barrels at the docks and accidentally dumped them on her head. The sailors never let her forget it!",
      },
    ],
  },
  {
    id: "ch-12",
    session: 6,
    chapter: 12,
    title: "The Dwarven March",
    story:
      "The morning after Richfest, drums thundered through the streets. A column of angry dwarves, led by the fierce Manistrad, marched through town carrying clubs. Their mines had been sabotaged — sealed shut with magical glue! They blamed Captain Xendros and wanted justice. The town guard blocked the bridge, and tensions exploded into a brawl. Mah-Kaylah fought dwarves, Arienh tangled them in magical vines, and Mornie tried desperately to grapple Manistrad. It was Kellen who saved the day, casting a spell that convinced Manistrad to 'stand down and be nice.' Meanwhile, poor Airell was woken by an assassin's knife to his throat — but that's another story entirely!",
    imagePrompt:
      "A column of armed dwarves marching across a stone bridge confronting town guards, tense medieval standoff, morning light, fantasy art",
    backgroundImage: "chapter_12.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Sovereign Glue",
        content:
          "The mines were sealed with Sovereign Glue, a magical adhesive so powerful that nothing can break it. The only cure is the equally rare Universal Solvent — or Oil of Etherealness!",
      },
      {
        title: "Airell's Rude Awakening",
        content:
          "While everyone was dealing with the dwarves, Airell was attacked by an assassin in his own bed! He escaped by jumping out a window. Joza saved him with her fighting chain.",
      },
    ],
  },

  // === SESSION 7: Aftermath ===
  {
    id: "ch-13",
    session: 7,
    chapter: 13,
    title: "Mysteries and Schemes",
    story:
      "With the dwarf crisis averted, the town settled into an uneasy calm. Captain Xendros revealed that only Oil of Etherealness could undo the magical glue sealing the mines, and she knew an alchemist in the far-off Styes who could make it. The councilman Anders hosted a grand brunch where the heroes learned they had become celebrities with nicknames throughout the town! But shadows lurked everywhere — Anders' servant Skerrin walked with a limp from Joza's chain, revealing he was the assassin who had attacked Airell. A storm rolled in, spoiling cargo on the docks while Kellen made illusory flying sharks dance in the rain. The adventurers prepared for their most dangerous voyage yet.",
    imagePrompt:
      "A stormy medieval coastal town with rain-soaked streets, a grand mansion in the background hosting a party, dark atmospheric fantasy art",
    backgroundImage: "chapter_13.jpg",
    animation: ["rain"],
    funFacts: [
      {
        title: "Celebrity Status",
        content:
          "The heroes of Saltmarsh became so famous that the townsfolk gave them all nicknames! They were treated like royalty wherever they went.",
      },
      {
        title: "Skerrin's Secret",
        content:
          "Anders' manservant Skerrin was secretly an assassin! He attacked Airell in disguise, but Joza wounded him with her chain — and the limp gave him away at the brunch.",
      },
    ],
  },

  // === SESSION 8: Battle of the Falling Star ===
  {
    id: "ch-14",
    session: 8,
    chapter: 14,
    title: "Battle on the High Seas",
    story:
      "Aboard Harer Zane's merchant ship, the party sailed toward the Styes with a fortune in pearls to buy the precious Oil. But the Falling Star — that same pirate ship they'd tricked with an illusion weeks ago — caught up to them. The pirate captain boarded their vessel and, without warning, shot their captain! Battle erupted across both ships. The enemy wizard unleashed a terrible spell, but Mah-Kaylah's enchanted sword flashed with light and cancelled it! Cannons roared, swords clashed, and in a moment of brilliance, someone fired into the Falling Star's own cannon, blasting a gaping hole in the pirate ship. Victory! But now they had a captured pirate ship and a web of secrets to untangle.",
    imagePrompt:
      "Two ships locked in naval combat with cannon fire and sword fighting, pirates boarding a merchant vessel, dramatic ocean battle, fantasy art",
    backgroundImage: "chapter_14.jpg",
    animation: ["ship-rocking", "waves"],
    funFacts: [
      {
        title: "Counterspell Cutlass",
        content:
          "Mah-Kaylah's magical sword could cancel enemy spells! When the pirate wizard cast his most powerful magic, her blade glowed and shattered the spell into nothing.",
      },
      {
        title: "A Ship Called Falling Star",
        content:
          "The Falling Star was the most feared pirate ship on the coast. After the battle, the adventurers claimed it as their own — making them the proud owners of an infamous vessel!",
      },
    ],
  },
  {
    id: "ch-15",
    session: 8,
    chapter: 15,
    title: "Secrets of the Fallen Ship",
    story:
      "With the pirates defeated, the adventurers explored the captured Falling Star from top to bottom. Airell found maps and a world atlas in the captain's quarters. Arienh discovered magical items in the wizard's room, including a clockwork parrot! Kellen explored the gun deck but was horrified by the aftermath of battle. Below decks, she found chains meant for slaves and defiantly carved 'Kellen was here' into the wood. The captured pirate Randal revealed a shocking truth — the Falling Star had been working as smugglers, moving goods to avoid taxes. Captain Harer Zane, their own employer, was part of the scheme! The web of deception grew ever more tangled.",
    imagePrompt:
      "Adventurers exploring the interior of a captured pirate ship, examining maps and treasure by lantern light, mysterious atmosphere, fantasy art",
    backgroundImage: "chapter_15.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Clockwork Parrot",
        content:
          "Among the pirate wizard's belongings was a mechanical parrot made of gears and springs. Magic and technology combined in this wonderful little creation!",
      },
      {
        title: "Smuggler's Web",
        content:
          "The smuggling operation connected powerful people in Saltmarsh, Port Torvin, and beyond. Even some council members were involved!",
      },
    ],
  },

  // === SESSION 9: Port Torvin ===
  {
    id: "ch-16",
    session: 9,
    chapter: 16,
    title: "The Port of Secrets",
    story:
      "Disguised as the former pirate captain, Airell sailed the Falling Star into Port Torvin to deliver the smuggled goods. The port was ruled by Yusgrolir, a wealthy dwarf mayor dripping with magical trinkets and guarded by four massive ogres. Airell played his role perfectly, even fooling the harbor master. Kellen created a fake fire on a rooftop as a distraction when Airell's disguise nearly faded — chaos erupted as everyone tried to put out a fire that didn't exist! The deal was done: the smuggled cargo was delivered and the party was paid handsomely. Then Yusgrolir invited them to a grand garden party as guests of honor. It sounded wonderful. It was a trap.",
    imagePrompt:
      "A bustling fantasy port town with a wealthy dwarf merchant surrounded by ogre bodyguards, market stalls and ships, warm afternoon light",
    backgroundImage: "chapter_16.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Master of Disguise",
        content:
          "Airell's magical disguise spell only lasts so long. Kellen's quick-thinking fake fire distraction saved them when it was about to wear off in public!",
      },
      {
        title: "Shopping Spree",
        content:
          "The ladies of the party went on a shopping spree for fancy party clothes, spending 83 gold. Looking good is important, even for adventurers!",
      },
    ],
  },

  // === SESSION 10: The Lightning Maze ===
  {
    id: "ch-17",
    session: 10,
    chapter: 17,
    title: "The Lightning Maze",
    story:
      "At Yusgrolir's garden party, crackling lightning towers heralded the evening's entertainment. The dwarf mayor gave a speech and raised a toast of fortified wine that left everyone but young Kellen dizzy. Then the lightning tower blazed — and Mornie, Mah-Kaylah, Arienh, and Randal were zapped into a magical maze on the Ethereal Plane! Ghostly walls surrounded them as they fought spectral monsters and collected owlbear claws (Randal thought they were all mad). Meanwhile, Airell and Kellen remained with Yusgrolir and confessed the truth about the pirate captain. Yusgrolir laughed coldly — anyone who survived the maze could leave alive, but he was keeping their ship.",
    imagePrompt:
      "A glowing ethereal maze with lightning towers crackling energy, ghostly translucent walls, adventurers fighting spectral creatures, magical purple atmosphere",
    backgroundImage: "chapter_17.jpg",
    animation: ["lightning"],
    funFacts: [
      {
        title: "The Ethereal Plane",
        content:
          "The Ethereal Plane is a ghostly dimension that overlaps with the normal world. Everything looks misty and translucent, and strange creatures lurk in its halls.",
      },
      {
        title: "Owlbear Claws",
        content:
          "Even in mortal danger, the adventurers couldn't resist collecting monster trophies. Randal, the practical pirate, just stared in disbelief!",
      },
    ],
  },
  {
    id: "ch-18",
    session: 10,
    chapter: 18,
    title: "Escape from Port Torvin",
    story:
      "With their friends trapped in the maze, Kellen hatched a desperate plan. She conjured spectacular fireworks that terrified Yusgrolir's ogre guards, who panicked and started shooting everything — including their own master! In the chaos, Kellen cast a spell on the wounded Yusgrolir, convincing him it was all a misunderstanding and he should bring everyone back from the maze. It worked! The party popped back from the Ethereal Plane just in time. They sprinted for the Falling Star, where Joza and Harer had just finished fighting off a raiding party. Sails unfurled, they fled Port Torvin under cover of night, heading for the Styes and their original mission — if anyone could still remember what it was!",
    imagePrompt:
      "Adventurers running through a nighttime port city with fireworks exploding overhead, racing toward a ship at the docks, dramatic escape scene, fantasy art",
    backgroundImage: "chapter_18.jpg",
    animation: ["fireworks"],
    funFacts: [
      {
        title: "Kellen's Fireworks",
        content:
          "Kellen's fireworks spell was so realistic that the ogre guards thought they were under attack and started firing their crossbows wildly at the colorful explosions!",
      },
      {
        title: "What Was Our Mission Again?",
        content:
          "By this point, the party had gotten so sidetracked with pirates, smuggling, and magical mazes that nobody remembered they were supposed to be buying Oil of Etherealness!",
      },
    ],
  },

  // === SESSION 11: The Styes ===
  {
    id: "ch-19",
    session: 11,
    chapter: 19,
    title: "Welcome to the Styes",
    story:
      "The party arrived at the Styes — a festering city of pollution, corruption, and misery built on rotting docks over foul water. After bribing the bridge guards and watching Mornie fall through a deliberately loosened plank into the sludge below, they tracked down Refrum, a healer secretly using Oil of Etherealness to free people from slavery under the local crime lord. They paid 3,000 gold in pearls for the Oil — their entire fortune — then discovered they'd forgotten to pay Mr. Dory's mandatory 50% 'tax.' Escorted directly to Dory's headquarters (a dripping ship hanging from a crane), they met a man who was clearly more than human. Dory took their pearls, took Airell's prized magical cloak, cursed Mornie so she couldn't lie, and generally ruined everyone's day. Kellen, inexplicably furious, set a fire on the way out that everyone ignored.",
    imagePrompt:
      "A grimy polluted city built on rotting wooden docks over black water, fog and haze everywhere, a dripping ship suspended from a crane over a warehouse, dark oppressive fantasy art",
    backgroundImage: "chapter_19.jpg",
    animation: ["smoke"],
    funFacts: [
      {
        title: "The Welcoming Bridge",
        content:
          "The bridge guards at the Styes deliberately loosen planks so visitors fall into the muck below. They then laugh. They also charge 30 gold plus 5 silver just to cross. The Styes is not a tourist destination.",
      },
      {
        title: "Mr. Dory's Office",
        content:
          "Mr. Dory runs his criminal empire from inside a ship suspended from a crane over the water. His office perpetually drips and reeks, and he sits in a pool of mysterious liquid. Something is very, very wrong with him.",
      },
    ],
  },
  {
    id: "ch-20",
    session: 11,
    chapter: 20,
    title: "Race for the Falling Star",
    story:
      "Refrum confessed the awful truth — Mr. Dory's men were already on their way to steal their ship. The party sprinted through the Styes, paid locals to row them across the lagoon at maximum speed, and Arienh cast Walk on Water so they could literally run across the harbor. Arienh, Joza, and Kellen all tripped and fell into the filthy water anyway. When they reached the Falling Star, it had been captured by hobgoblins and two hippogriffs! MK, Airell, and Mornie fought furiously while the wet stragglers caught up, and then a horrific water creature called a Scum rose from the depths. Arienh was knocked unconscious and splashed into the harbor, dropping the spell and dunking everyone nearby. Airell cast Spare the Dying on the submerged heroes and somehow they all made it back aboard. They fled the Styes immediately and resolved to return to destroy Mr. Dory.",
    imagePrompt:
      "Heroes fighting hobgoblins and hippogriffs on the deck of a tall ship in a polluted harbor, one figure running on water toward the ship, dramatic fantasy combat",
    backgroundImage: "chapter_20.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Hippogriff Hijackers",
        content:
          "The Falling Star's capture by hobgoblins riding hippogriffs was somehow even more embarrassing than losing it to pirates. At least pirates are a maritime tradition.",
      },
      {
        title: "The Stench Remains",
        content:
          "Several party members fell into the Styes harbor during the chaos. The smell reportedly lingered for days despite vigorous scrubbing. The Styes has a way of clinging to you.",
      },
    ],
  },

  // === SESSION 12: Heroes' Welcome ===
  {
    id: "ch-21",
    session: 12,
    chapter: 21,
    title: "Heroes' Welcome",
    story:
      "Sailing home with both ships and a story nobody would believe, the party returned to Saltmarsh to an explosive welcome. The Falling Star was too big to dock, so the heroes walked alongside the rowboat on the water — Arienh's magic casually performing a miracle. The town erupted in celebration: kids chased Kellen's illusory rainbow sharks, Eliander tried to give a speech but was drowned out by cheering, and Xendros literally jumped on MK and disappeared. Mornie followed the captured pirates to prison and argued loudly with Eliander about their fate. Anders invited everyone to collect their payment the next morning, where his manservant Skerrin gave everyone suspicious stink-eyes — until Kellen used her Wand of Smiles on him and he grinned creepily for a full minute. They were officially Heroes of Saltmarsh now, and Eliander had quietly decided the Falling Star belonged to the town. He was going to be very disappointed.",
    imagePrompt:
      "Adventurers arriving triumphantly at a medieval coastal town dock, crowds cheering, illusory rainbow sharks floating through the crowd, warm celebratory afternoon light",
    backgroundImage: "chapter_21.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "Room Assignments",
        content:
          "The heroes officially claimed their quarters on the Falling Star. Airell took the Captain's quarters, naturally. Mornie claimed the Dragonborn's room. Kellen got the Halfling's quarters — a perfect fit.",
      },
      {
        title: "Wand of Smiles",
        content:
          "The Wand of Smiles forces a target to grin uncontrollably. When used on the deeply suspicious Skerrin, the result was described as 'deeply unsettling.' Some smiles are more threatening than scowls.",
      },
    ],
  },

  // === SESSION 13: Abbey Isle ===
  {
    id: "ch-22",
    session: 13,
    chapter: 22,
    title: "The Red-Robed Guests",
    story:
      "Scaling the cliffs of Abbey Isle with levitation packs, the party found the ruins of the old abbey and signs of recent salvage. A cellar door led them to an underground chamber full of suspiciously cheerful 'priests' in red robes who were very relieved to see the Falling Star had arrived. Their leader Ozymandius was a terrible liar. Arienh quietly transformed into a spider and crawled in to eavesdrop while the others made polite conversation about the weather. The red robes were the wrong color for priests of Procan — Mornie suddenly remembered what they were: the Scarlet Brotherhood, an ancient and thoroughly evil cult. Spider-Arienh confirmed everything: they were planning to murder the party in their sleep and steal the ship. They also mentioned something called 'the Eye in the Deep.' The party made camp, taught each other hand signals for 'liar' and 'danger,' and waited for morning.",
    imagePrompt:
      "Adventurers discovering a candlelit underground chamber with suspicious figures in red robes, one person secretly watching as a spider on the wall, tense medieval fantasy atmosphere",
    backgroundImage: "chapter_22.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Spider Intelligence",
        content:
          "Arienh's wild shape as a spider has proven invaluable for espionage throughout the campaign. The Scarlet Brotherhood really should have checked their walls more carefully.",
      },
      {
        title: "Terrible at Lying",
        content:
          "Ozymandius was described by the whole party as 'the worst liar we have ever met.' For a secretive ancient evil cult, the Scarlet Brotherhood really should screen for this.",
      },
    ],
  },
  {
    id: "ch-23",
    session: 13,
    chapter: 23,
    title: "The Herald Revealed",
    story:
      "Before bed, Kellen felt a strange compulsion drawing her to the ancient obelisks in the abbey ruins. She touched the largest stone and had a terrifying vision — the Chained Oblivion itself spoke to her, and she gained a level from sheer magical terror. In the morning, with the Brotherhood still sleeping, the party crept inside: MK burned an entire room of lesser priests, Mornie knocked Ozymandius unconscious in his bed, and Airell whispered 'Papa, get up' before stabbing Odium to death. In the Brotherhood's library — books bound in manta ray skin — they found the shocking truth: Kellen was the Herald, a chosen vessel meant to bond with the Kraken and serve the Chained Oblivion. Arienh had been the original candidate twelve years ago but had refused the pact, surviving the storm that killed her family. Now the Brotherhood's whole terrible scheme made terrible sense.",
    imagePrompt:
      "Heroes discovering a dark underground library lined with tomes bound in manta ray skin, an obelisk crackling with arcane energy in the background, dramatic revelation scene",
    backgroundImage: "chapter_23.jpg",
    animation: ["lightning"],
    funFacts: [
      {
        title: "Papa, Get Up",
        content:
          "Airell's preferred method of waking someone before assassinating them was to whisper 'Papa, get up' in a tender voice. This is entirely consistent with his character.",
      },
      {
        title: "The Herald's Mark",
        content:
          "Kellen's mysterious swirling eye and strange dreams all suddenly made sense — she had unknowingly formed a pact with the Chained Oblivion by reading a lost magical book as a child. She had been a magical time bomb the whole time.",
      },
    ],
  },

  // === SESSION 14: The Winding Way ===
  {
    id: "ch-24",
    session: 14,
    chapter: 24,
    title: "Interrogations",
    story:
      "With the Brotherhood's survivors in custody, the party got to work. Bayleaf the half-elf mercenary helpfully told them everything — he'd never really wanted to join an evil cult anyway, and the Falling Star's pirate attack had just trapped him there. Ozymandius was a different story: preachy, fanatical, and ultimately useless. He didn't even know Kellen was the Herald! He thought the original Herald had died in the storm. Mornie trolled him extensively. What the party did learn: the Kraken was 'still downstairs, feeding off pathetic people.' They'd need to go into the Winding Way — a maze the Brotherhood had magically dug below the abbey, full of traps, guardians, and whatever they'd been keeping in the sea cave at the bottom.",
    imagePrompt:
      "Adventurers interrogating a fanatical robed prisoner in a stone chamber, maps and books spread on a table, torchlight, tense questioning scene",
    backgroundImage: "chapter_24.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "Bayleaf the Cooperative",
        content:
          "Bayleaf spilled everything voluntarily and immediately. He was a hired mercenary who had very quickly realized these priests were all insane but couldn't escape before the pirates arrived. He was happy to help.",
      },
      {
        title: "Mornie Trolls Evil",
        content:
          "Mornie spent the Ozymandius interrogation trolling him relentlessly whenever he got preachy. The notes simply say 'Mornie trolls him.' No further details were recorded. None were needed.",
      },
    ],
  },
  {
    id: "ch-25",
    session: 14,
    chapter: 25,
    title: "The Winding Way",
    story:
      "Down into the maze they went — and found a zombie ogre and a zombie beholder in the first room. They wisely retreated to rest first. After eight hours, the undead proved easier to kill than expected, and they pressed on through primitive traps, specter ambushes, and a jade vampire elf statue that put up more of a fight than anticipated. The most alarming discovery was a room containing a Sphere of Annihilation — a floating ball of void that destroys anything it touches — installed by the Brotherhood as a failsafe in case the Kraken got loose. One of the room's guardians got pushed into it and simply ceased to exist. They found treasure and a half-finished letter beyond, but the sea cave at the bottom held empty manacles and a broken cage: the Kraken had already escaped into the open ocean.",
    imagePrompt:
      "Adventurers in a dark underground maze fighting undead monsters, a black sphere of nothingness floating ominously in the center of a stone chamber, torchlight flickering",
    backgroundImage: "chapter_25.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Sphere of Annihilation",
        content:
          "The Sphere is exactly what it sounds like — a floating ball of void that destroys anything touching it. The Brotherhood placed one as a Kraken failsafe. Kellen later attempted to control it with magic and failed four times. They left it embedded in the floor.",
      },
      {
        title: "The Kraken Is Gone",
        content:
          "The sea cave at the bottom of the Winding Way held manacles built for a massive creature, but the bars were bent outward. The Kraken had broken free from the inside. The pirates had been firing cannons at an illusion of rock hiding the wrong entrance the whole time.",
      },
    ],
  },

  // === SESSION 15: In Chains ===
  {
    id: "ch-26",
    session: 15,
    chapter: 26,
    title: "In Chains",
    story:
      "The party rested in the abbey while Arienh dreamed of the night twelve years ago when she nearly became the Herald — and remembered Ferrin Kastilar finding her washed ashore, checking her eyes with visible relief. As they prepared to leave, a storm began building and they raced back to Saltmarsh — barely making it before the weather closed in. Arriving in the harbor, they found five ships flying the red flag of Duke Marik Feldren of Seaton blockading the port. His family had taken over the council building, his soldiers were patrolling house to house, he'd suspended all fishing, and Gellan had been arrested on a piracy charge for the crime of sending the party to Abbey Isle. The Duke wanted the Falling Star. An uncertain guard's voice called for them to surrender. Mornie used her magical shouting sword and declined.",
    imagePrompt:
      "A coastal town harbor with five warships flying red flags blockading the port, heroes on the deck of the Falling Star facing the fleet, storm clouds gathering overhead",
    backgroundImage: "chapter_26.jpg",
    animation: ["storm", "ship-rocking"],
    funFacts: [
      {
        title: "The Duke's Timing",
        content:
          "Duke Feldren arrived at Saltmarsh at the worst possible moment — exactly as the heroes returned exhausted from Abbey Isle. Political villains have a genuine gift for this.",
      },
      {
        title: "Arresting Gellan",
        content:
          "The Duke charged Gellan with piracy for the crime of voting to send the party to Abbey Isle. This was legally creative at best. Gellan, who was actually a smuggler, found the specific charge irritating.",
      },
    ],
  },

  // === SESSION 16: The Storm Breaks ===
  {
    id: "ch-27",
    session: 16,
    chapter: 27,
    title: "The Storm Breaks",
    story:
      "Eda briefed Mornie, Airell, and Arienh in furious whispers: the Duke wanted the Falling Star and had effectively occupied the town. The plan formed quickly — use Arienh's Walk on Water to board and capture the Duke's fleet during the storm. Sending stones went to MK and Kellen. All groups moved simultaneously in the dark and driving rain. Every ship fell. The Falling Star stood ready with cannons loaded, and the Dock Watch — who had refused the Duke's orders point blank — cheered from the shore. The Duke sent a negotiation boat the next morning bearing one representative: Sir Piersym of Seconforth, a knight with magnificently platinum-blond hair that immediately earned MK's admiration. Sir Piersym arranged a parlay on the docks with all of Saltmarsh watching. Fifteen hundred people lined the waterfront.",
    imagePrompt:
      "Heroes silently boarding warships by walking across storm-dark water at night, lanterns on the ships above, driving rain, a military takeover happening in complete silence",
    backgroundImage: "chapter_27.jpg",
    animation: ["storm"],
    funFacts: [
      {
        title: "Walk on Water, Take a Fleet",
        content:
          "Arienh's Walk on Water spell is usually a travel utility. Tonight it became a tactical weapon that captured five warships without firing a shot. The Duke's sailors never saw them coming.",
      },
      {
        title: "The Dock Watch",
        content:
          "The Dock Watch of Saltmarsh refused the Duke's orders point blank and remained loyal to the town throughout. They are consistently the bravest and most sensible institution in Saltmarsh.",
      },
    ],
  },
  {
    id: "ch-28",
    session: 16,
    chapter: 28,
    title: "The Parlay",
    story:
      "The Duke opened the formal parlay by yelling, making demands, and being insufferable. His wife tried to calm him. The priest of Heironeous looked increasingly pained. MK had heard enough and attacked the Duke. Mornie grabbed the magical sword and shouted to the crowd that the Duke was trying to steal their town — fifteen hundred Saltmarshians immediately started chanting 'Falling Star!' Xendros appeared from nowhere in full battle rage and blasted magic missiles everywhere. Arienh unleashed lightning on the Duke's guards. Kellen sent her owl to poop on the Duke, which it did, directly. Airell eventually shot the Duke unconscious. The priest of Heironeous later noted that since the Duke had violated his own oath of holy peace, everything that followed was technically the Duke's fault. Even he had to admit the logic was sound.",
    imagePrompt:
      "Chaotic battle on a seaside dock with 1500 onlookers, a woman firing magic missiles, lightning striking soldiers, an unconscious noble in fine armor surrounded by chaos",
    backgroundImage: "chapter_28.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Diplomatic Owl",
        content:
          "Kellen sent her owl to defecate on the Duke during the formal parlay. The owl achieved a direct hit. This contributed nothing strategically but was deeply satisfying to everyone present.",
      },
      {
        title: "His Own Fault",
        content:
          "The priest of Heironeous determined that since the Duke violated the terms of his own holy truce by threatening Mornie first, everything that followed was the Duke's responsibility. Even the priest couldn't argue with that.",
      },
    ],
  },

  // === SESSION 17: Negotiations ===
  {
    id: "ch-29",
    session: 17,
    chapter: 29,
    title: "Negotiations",
    story:
      "A second parlay was arranged at dawn. Eliander, backed by the full council and a contract making the party official guardians of Saltmarsh, faced the Duke calmly. The Duke threw the contract on the floor (his wife quietly picked it up and read it). Eda pointed out that the Duke couldn't have taken the Falling Star with his fleet anyway. The Duke tried to get physical — the guards stopped him. Eliander then delivered the speech of his career: the Duke had failed, his ships were now Saltmarsh's, he would be escorted home with enough supplies to get there, and they were done here. He walked out mid-conversation. Meanwhile Airell arrived bleeding from a head wound — Skerrin had ambushed him, pumping him for information about Abbey Isle before he escaped out a window. The web of deception was tightening, and Mornie was officially named Admiral of the Saltmarsh fleet. She got a hat.",
    imagePrompt:
      "A formal negotiation hall with a composed commander backed by a full council facing a furious noble, a contract on the floor, morning light through tall windows",
    backgroundImage: "chapter_29.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Eliander's Mic Drop",
        content:
          "Eliander's speech stripping the Duke of his authority, granting him just enough supplies to sail home, and walking out while the Duke was still speaking was considered one of the campaign's finest moments.",
      },
      {
        title: "Admiral Mornie",
        content:
          "Mornie was officially named Admiral of the Saltmarsh fleet. She requested an admiral's hat. She received one. It was worn with appropriate gravitas.",
      },
    ],
  },

  // === SESSION 18: The Free City of Saltmarsh ===
  {
    id: "ch-30",
    session: 18,
    chapter: 30,
    title: "The Free City of Saltmarsh",
    story:
      "With the Duke dealt with, the party had a few days to breathe — which they used to discover Skerrin was almost certainly Brotherhood, dig into Anders' surprisingly enormous merchant network, and visit the druid Ferrin Kastilar, who knew far more about Arienh's past than he should. Ferrin told her the Chained Oblivion had reached for her twelve years ago; he'd been glad she wasn't the Herald but warned that taking her in had put him on a path leading to his death. Arienh accepted this with the weight it deserved. The party also learned that Yusgrolir — the maze-building dwarf from Port Torvin — was gathering half a dozen ships and orc invaders to come for the Falling Star within the week. Mornie was named Admiral. Plans were made. The fleet was prepared. An orc army was coming, and Saltmarsh needed its heroes more than ever.",
    imagePrompt:
      "A thriving coastal medieval town at golden hour, the Falling Star docked in the harbor, heroes walking the busy streets as local celebrities, warmth and tension mixed",
    backgroundImage: "chapter_30.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Ferrin's Warning",
        content:
          "Ferrin told Arienh that taking her in as a child had put him on a path that would lead to his death. He said it calmly. He meant it. Arienh filed this information away with everything else she was carrying.",
      },
      {
        title: "Skerrin's Network",
        content:
          "Investigation revealed that Skerrin controlled Anders' entire business operation — making major decisions while making them look like Anders' ideas. Anders genuinely didn't know. He's not dumb; Skerrin was just very, very good.",
      },
    ],
  },

  // === SESSION 19: Beat to Quarters ===
  {
    id: "ch-31",
    session: 19,
    chapter: 31,
    title: "Beat to Quarters",
    story:
      "Yusgrolir's fleet was coming — six ships, orc invaders, planning to anchor at Abbey Isle and strike at dawn. Admiral Mornie gave the order: intercept them at sea before they could reach Saltmarsh. The Falling Star and its allies sailed out into the night to meet Yusgrolir's armada head-on. What followed was a tremendous naval battle — cannon fire roaring, lightning strikes crackling across the water, the Falling Star's broadside guns blazing. The party fought brilliantly, the Dock Watch sailors proved their worth, and Yusgrolir's fleet was shattered. The maze-loving dwarf escaped personally (of course), but several of his ships were captured or sunk. The fleet returned victorious, sails tattered and decks scorched, sailing home through the night. Then the news hit.",
    imagePrompt:
      "A massive night naval battle with cannon fire and lightning strikes, two fleets clashing on dark waters, the Falling Star dominant and blazing with gunfire",
    backgroundImage: "chapter_31.jpg",
    animation: ["ship-rocking", "smoke", "waves"],
    funFacts: [
      {
        title: "Yusgrolir Escapes Again",
        content:
          "The maze-building dwarf who had trapped them in an ethereal labyrinth managed to escape the naval battle personally. The party has a remarkable talent for almost — but not quite — catching their antagonists.",
      },
      {
        title: "Lightning Broadside",
        content:
          "Arienh's lightning spells combined with the Falling Star's cannons made for a devastatingly effective naval weapon. The combination of magic and gunpowder was exactly as spectacular as it sounds.",
      },
    ],
  },
  {
    id: "ch-32",
    session: 19,
    chapter: 32,
    title: "The Shadow over Invicem",
    story:
      "The returning heroes found Saltmarsh strangely subdued. The Sea Grove — a community of the lost and vulnerable that Ferrin Kastilar had built for years — had been massacred. Everyone killed. Ferrin was dead, his final hours marked by evidence of torture. Skerrin was waiting on the road — not to gloat, but to talk to Mornie. He revealed he worked for the Order of the Silent Ones, powerful Celoise wizards. He believed Eliander was a Scarlet Brotherhood impostor. He thought Airell worked for the Brotherhood. He told her Ferrin had been tortured for information about Arienh. Then he walked away. At Ferrin's house, the horror was complete. Arienh, who had shifted into an eagle and flown to the Grove against orders, spent a long moment considering simply flying away forever. She chose revenge instead and came back.",
    imagePrompt:
      "A quiet community utterly devastated, smoke rising from small homes, a woman in eagle form circling overhead, grief and fury in a somber dark fantasy scene",
    backgroundImage: "chapter_32.jpg",
    animation: ["smoke"],
    funFacts: [
      {
        title: "Arienh Almost Left",
        content:
          "Flying as an eagle over the destroyed Sea Grove, Arienh felt the pull to simply never come back. She stayed. Revenge turned out to be a stronger force than grief.",
      },
      {
        title: "Skerrin Was Right",
        content:
          "Nearly everything Skerrin told Mornie that night turned out to be accurate — about Ferrin, about the Brotherhood's plans, about the spy network. He was right about almost everything except who the Herald was.",
      },
    ],
  },

  // === SESSION 20: The King's Appeal ===
  {
    id: "ch-33",
    session: 20,
    chapter: 33,
    title: "The King's Appeal",
    story:
      "King Kimbertos Scotti arrived in Saltmarsh with a thousand soldiers and a very specific agenda. In the royal audience chamber, the heroes surrendered their weapons and answered six questions under magical oath covering smuggling, piracy, truce-breaking, and their intentions with the Falling Star. Kellen asked if the king planned to do anything about the Sea Princes and their gunpowder monopoly. He said no. The great proclamation followed: Duke Feldren was 'promoted' to fight giants in the mountains — everyone understood what that meant. Eliander became a noble. And Saltmarsh was declared a Free City with all the freedoms and responsibilities that entailed. As the celebration began, Mornie spotted her old teacher Nenredhe in the crowd — and following her led to a secret meeting, a hidden Refrum, and orders: go to the Styes, find Jarme, save him from execution.",
    imagePrompt:
      "A grand medieval throne room with a wise king announcing judgement to adventurers and nobles gathered before him, maps on the walls, golden banners and morning light",
    backgroundImage: "chapter_33.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "The Elegant Promotion",
        content:
          "Duke Feldren's 'promotion' to fight giants in the mountains was the king's way of removing a difficult noble without a political incident. Everyone understood the subtext. The Duke did not appreciate the subtext.",
      },
      {
        title: "Free City!",
        content:
          "A Free City governs itself — no duke, no direct crown interference. It also means handling your own problems, paying your own bills, and dealing with krakens and Scarlet Brotherhood cultists entirely on your own.",
      },
    ],
  },

  // === SESSION 21: Homecoming ===
  {
    id: "ch-34",
    session: 21,
    chapter: 34,
    title: "Homecoming",
    story:
      "The party sailed for the Styes on the first of Needfest with a strange crew: Nenredhe (Mornie's terrifying handler), Refrum, and a new addition named Eri-Xanaphia Aaliyax, who had a winged cat and a deeply uncomfortable history with Mornie. At sunset a wyvern attacked, killed a sailor, and was shot through the throat by Airell while it was grappling Arienh — casual heroism at this point. Arriving at the Styes, Captain Sohral was given the sending stone and told to return in two weeks or show up on the third of the month if she didn't hear from them. Then they hiked to Nenredhe's manor base of operations and found it devastated — bodies of trainees strewn across the grounds, killed in their nightgowns a week ago. Whatever had done this had quadruped tracks and had dragged every magical item into the basement. The Styes mission had just gotten much more complicated.",
    imagePrompt:
      "A ship sailing toward a grim city at sunset, a wyvern diving toward the deck with heroes bracing for battle, golden light turning to shadow",
    backgroundImage: "chapter_34.jpg",
    animation: ["ship-rocking"],
    funFacts: [
      {
        title: "Airhead",
        content:
          "Eri's nickname from Mornie's past training was 'Airhead.' Mornie explained this to Kellen as context. Kellen shrugged and dismissed the information entirely. As far as Kellen was concerned, everyone was fine.",
      },
      {
        title: "Wyvern Timing",
        content:
          "The wyvern attacked at sunset on the first leg of their secret two-week mission. Airell killed it with one arrow through the throat while Arienh was dangling from its claws. The crew found this unremarkable.",
      },
    ],
  },

  // === SESSION 22: Unwelcome Guests ===
  {
    id: "ch-35",
    session: 22,
    chapter: 35,
    title: "Unwelcome Guests",
    story:
      "The manor had been hit by Chuul — giant crab-like aberrations from the Far Realm — who had killed every trainee and were still inside, hauling magical books and items to the basement and piling them in a heap. The party killed two of them. Nenredhe discovered that what appeared to be Drawmij the Archmage's corpse was a magical duplicate — suggesting the real Drawmij might still be alive somewhere. She promptly teleported away with Refrum to a 'safe location,' leaving the party holding instructions: bury the bodies, burn the books, secure Jarme. They discovered Mornie's gun had been enchanted with Magic Mouth at some point — every confirmed kill was announced with a cheerful 'BOOM! HEADSHOT!' Someone had spent 10 gold on this enchantment. MK named one of the dead Chuul 'Jean-Claude.' They burned the bodies. Kellen kept several of the books.",
    imagePrompt:
      "Adventurers battling massive crab-like aberration monsters inside a ransacked mansion library, books scattered everywhere, dark magical atmosphere",
    backgroundImage: "chapter_35.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Jean-Claude",
        content:
          "MK named the dead Chuul aberration Jean-Claude. No explanation was offered. MK naming things is simply how she processes difficult situations, and no one questioned it.",
      },
      {
        title: "BOOM! HEADSHOT!",
        content:
          "Mornie's gun had been secretly enchanted to announce every kill. Someone spent 10 gold on this spell. It costs 10 gold and a wizard or bard's time. Mornie still doesn't know who did it.",
      },
    ],
  },

  // === SESSION 23: Needfest in the Styes ===
  {
    id: "ch-36",
    session: 23,
    chapter: 36,
    title: "Needfest in the Styes",
    story:
      "With the manor handled and Nenredhe gone, the party entered the Styes during Needfest — the new year festival, one of the few times this wretched city had any energy. Each quarter 'celebrated' differently: the Alchemy Quarter forced people to eat until they vomited, then eat more. After bribing the bridge guards they gathered information across the city. Jarme had already been executed weeks ago, ranting about 'the Whisperer' who made him do it. A new murder had occurred in the Lower Quarter. Mornie tried to investigate a massive whale-shaped shadow lurking beneath the harbor water — it turned out to be an aboleth, an ancient psychic creature. Kellen drank something from the local water supply and immediately developed the dreaded Water Sickness, a fatal illness with no cure. She seemed to recover somewhat. Airell picked pockets across the Styes and found nothing because everyone was already desperately poor.",
    imagePrompt:
      "A grimy fantasy city celebrating a chaotic festival by torchlight, bridges over dark water, shadowy massive shapes lurking beneath the surface, revelry and menace mixed",
    backgroundImage: "chapter_36.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Needfest Traditions",
        content:
          "The Alchemy Quarter's Needfest celebration involved forcing people to eat until physically unable, then making them eat more. Mr. Dory presided over this. No one in the quarter seemed to enjoy it except Mr. Dory.",
      },
      {
        title: "Water Sickness",
        content:
          "The Water Sickness kills in 3-5 days with no cure. Kellen contracted it from the Styes water supply during Needfest. She threw up immediately. She then seemed to recover without explanation, which was arguably more alarming.",
      },
    ],
  },

  // === SESSION 24: The Shadow over Invicem ===
  {
    id: "ch-37",
    session: 24,
    chapter: 37,
    title: "The Shadow over Invicem",
    story:
      "The party located the creepy beached ship that Jarme had drawn obsessively on his cell walls. Two cloaked figures stood on the deck, motionless, dripping despite no rain. Mornie tried to open dialogue. The figures attacked — translucent, mucus-coated, deeply inhuman. Then the aboleth surfaced behind the ship. Kellen accidentally cast Fear, which hit MK; MK's magical sword tried to counterspell it and failed, leaving MK frightened and armed with a counterspell failure at the worst moment. MK transformed into something demonic and fireballed most of the party. The aboleth, it turned out, didn't want them dead — its slime-covered scum creatures stabilized the fallen heroes in an extremely unpleasant fashion. Mornie was the last one standing, tried to maneuver around the aboleth, and failed. When the party woke up, they were breathing water, their skin was translucent and slimy, and a voice whispered 'You are mine now.'",
    imagePrompt:
      "Adventurers overwhelmed by translucent slime-covered creatures on a derelict beached ship, a massive squid-like aboleth emerging from dark water, horror fantasy scene",
    backgroundImage: "chapter_37.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "MK Fireballs Her Friends",
        content:
          "Under the aboleth's mental control, MK transformed into a demonic form and cast Fireball — hitting most of her own party. It is technically effective area damage. Her teammates were less focused on the silver lining.",
      },
      {
        title: "Friendly Stabilization",
        content:
          "The aboleth's scum minions stabilized the unconscious heroes by coating them in mucus and slime. This was the least pleasant form of healing anyone in the party had ever experienced, and they had experienced quite a lot.",
      },
    ],
  },
  {
    id: "ch-38",
    session: 24,
    chapter: 38,
    title: "In the Deep",
    story:
      "The party woke in an underwater grotto, breathing water, skin translucent and slimy. The aboleth — Sgothgah — had mentally enslaved them and had one demand: kill the two rival aboleths that had come to destroy the Kraken and claim its territory. Inter-aboleth politics, as it turned out, were deeply petty. Mornie submitted to Sgothgah's will first. Arienh and Eri held out one more day. MK and Kellen had already been under its influence for some time, which explained recent troubling behavior. Airell had escaped the whole situation by leaving before the fight started and was wandering the Styes alone with Water Sickness, looting warehouses and impersonating Emperor Mon for fun. 'You are mine,' Sgothgah's voice echoed in their collective minds. They had no plan, no equipment, and were made of slime. Things were bad.",
    imagePrompt:
      "Characters underwater with translucent glowing skin, trapped in a phosphorescent sea cave, a massive aboleth creature looming with tendrils, psychedelic horror fantasy",
    backgroundImage: "chapter_38.jpg",
    animation: ["underwater"],
    funFacts: [
      {
        title: "Aboleth Politics",
        content:
          "Aboleths have territorial disputes with each other and consider it beneath them to fight personally. Sgothgah wanted the party to fight its rivals because aboleths have rules about this sort of thing. Ancient squid politics.",
      },
      {
        title: "Airell Solo",
        content:
          "Airell escaped aboleth capture entirely by having already left before the fight started. He spent the following days sick with Water Sickness, impersonating Emperor Mon through the streets, and looting an abandoned warehouse. Very on brand.",
      },
    ],
  },

  // === SESSION 25: Landgrave's Folly ===
  {
    id: "ch-39",
    session: 25,
    chapter: 39,
    title: "Landgrave's Folly",
    story:
      "Forced to serve Sgothgah's will, the party dove into deeper water to fight the rival aboleths — a 'sovereign' and an 'enforcer.' The battle was spectacular: mind blasts, psychic compulsions, tentacles everywhere. Sgothgah then freed the Kraken believing it could control the beast — and was immediately proven wrong, as the juvenile Kraken wrapped tentacles around the enemy aboleths instead. Each party member broke free of Sgothgah's mental control when the enemy aboleths attacked them directly (getting hit in the face is apparently a reliable cure for mind control). MK single-handedly destroyed the enforcer. Mornie stabbed Sgothgah while screaming at it to get out of her head. Arienh finished the sovereign with her thorn whip. And in the chaos, Kellen briefly connected with the Kraken's mind — her eye spinning wildly — before the wounded creature fled into the open ocean. They had survived. They were still covered in slime.",
    imagePrompt:
      "An epic underwater battle between heroes and massive aboleth creatures, a juvenile kraken thrashing with tentacles in bioluminescent light, spectacular chaotic underwater combat",
    backgroundImage: "chapter_39.jpg",
    animation: ["underwater"],
    funFacts: [
      {
        title: "The Kraken Is Nice",
        content:
          "After her brief mental connection with the Kraken, Kellen woke up and reported it was 'nice' and that she had tried to control it. She seemed pleased. No one else was comforted by any part of this statement.",
      },
      {
        title: "Arienh Controls Water",
        content:
          "During the battle, Arienh discovered she could now control water itself. She briefly drained the entire battle area, leaving everyone fighting aboleths on suddenly dry ground at the bottom of the sea. The aboleths were very confused.",
      },
    ],
  },

  // === SESSION 26: Saturnine Reunions ===
  {
    id: "ch-40",
    session: 26,
    chapter: 40,
    title: "Saturnine Reunions",
    story:
      "Emerging from the grotto still translucent and shell-shocked, the party found Sgothgah's lair ransacked — Mr. Dory's men had cleaned it out while they were busy. They were slowly regaining the ability to breathe air. City guards arrived to arrest them, but were interrupted by a ragged man of obvious noble bearing who declared the heroes his retinue and ushered them home: the bizarre Emperor Mon, who genuinely believed himself ruler of the Styes and whose confidence made it work. His manservant Manfred made tea. Then Nenredhe arrived, then Drawmij the Archmage — polite, reasonable, and the only person who could make Nenredhe behave. Drawmij identified a dangerous demonic rune on MK's hand. He had Nenredhe perform a divine ritual that gave them all a full rest. Then Nenredhe called Mornie a failed experiment and threatened to 'clear' both her and Eri. Drawmij overruled her. Good archmage.",
    imagePrompt:
      "Slimed adventurers being welcomed by a dignified man in ragged noble clothes in a modest apartment, an archmage and a severe woman arriving through the doorway",
    backgroundImage: "chapter_40.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Emperor Mon",
        content:
          "Emperor Mon claims to be the rightful ruler of the Styes and governs himself accordingly. City guards actually defer to him. No one has explained why this works. He may simply be too committed to the bit to fail.",
      },
      {
        title: "Failed Experiment",
        content:
          "Nenredhe called Mornie a failed experiment and proposed disposing of her. Drawmij overruled this and called Mornie a 'passable hero.' This is the most enthusiastic endorsement Drawmij gives anyone and Mornie chose to take it as a compliment.",
      },
    ],
  },

  // === SESSION 27: Mr. Dory, I Presume? ===
  {
    id: "ch-41",
    session: 27,
    chapter: 41,
    title: "Mr. Dory, I Presume?",
    story:
      "Rested, de-slimed (mostly), and furious, the party turned their full attention to Mr. Dory — crime lord, extortionist, and the man who had taken their 3,000 gold pearls and Airell's cloak. They scouted his headquarters: a ship suspended from a crane over a warehouse, surrounded by two squadrons of hobgoblin musketeers, with manticores prowling the upper floors and Dory himself working in his dripping office. Arienh went in as a spider to confirm the layout. The plan was to wait for Dory to leave and enter as guards with 'prisoners.' Dory never left. So Arienh threw a flame at a barrel. The crane exploded. The ship crashed down into the warehouse. The plan had evolved significantly from where it started, but the result was the same: chaos, fire, and an opportunity.",
    imagePrompt:
      "A ship suspended from a crane high above a warehouse surrounded by hobgoblin soldiers on the rooftops, a dramatic moment before everything explodes",
    backgroundImage: "chapter_41.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Dory's Manticores",
        content:
          "Mr. Dory kept manticores as additional security. Manticores have lion bodies, human faces with three rows of teeth, dragon wings, and tails that fire spikes. They are not subtle guards.",
      },
      {
        title: "The Plan Changed",
        content:
          "The original plan involved patient infiltration and social engineering. Arienh setting a barrel on fire and collapsing the crane ended that plan in spectacular fashion. She has a gift for converting subtle into explosive.",
      },
    ],
  },

  // === SESSION 28: Conflagration ===
  {
    id: "ch-42",
    session: 28,
    chapter: 42,
    title: "Conflagration",
    story:
      "The crane's collapse was magnificent. Hobgoblins scrambled in the rubble, Kellen's Hunger of Hadar consumed the manticores, Arienh smothered fires, and Mornie's gun announced every kill. Then Dory's assassin Harid turned on his own employer and shot Dory. Wounded, Dory vanished — stepping through to the ethereal plane. MK used the Oil of Etherealness (their original mission objective, seventeen sessions later) to follow him there and finished the job. In the rubble they recovered all their stolen goods, including Airell's cloak. And they met Harid properly — a member of a different, arguably saner Scarlet Brotherhood faction who had infiltrated Dory's operation. He confirmed the crazy Brotherhood had been working toward this kraken ritual for thirty years, that the kraken could not be controlled, and that Kellen's connection to the Chained Oblivion was the most dangerous thing he'd ever heard of. Everyone agreed.",
    imagePrompt:
      "A warehouse in flames with a crashed ship in the rubble, heroes fighting through fire and smoke, a figure chasing another into a ghostly ethereal dimension",
    backgroundImage: "chapter_42.jpg",
    animation: ["fire"],
    funFacts: [
      {
        title: "Oil of Etherealness, Finally",
        content:
          "The Oil of Etherealness — the original mission from session 1 — was finally used in session 28 to chase Mr. Dory into the ethereal plane. The errand took seventeen sessions from purchase to application.",
      },
      {
        title: "The Sane Brotherhood",
        content:
          "Harid revealed the Scarlet Brotherhood has two factions: the Chained Oblivion cultists and the regular racists who just want to restore the Suloise Empire. In context, the second group was almost a relief.",
      },
    ],
  },

  // === SESSION 29: Somnolent Interruptions ===
  {
    id: "ch-43",
    session: 29,
    chapter: 43,
    title: "Somnolent Interruptions",
    story:
      "Returning to Saltmarsh covered in Styes grime, the party told Eda and Gellan what had happened. Mornie summarized: 'We battled an ancient creature, killed a couple local council members, turned into slime people, then back — the usual.' Eda said 'don't make me regret it' and walked away. Then Anders appeared at Arienh's door frantic — Skerrin was unwell, could she come heal him? They arrived to find Skerrin's room empty and a letter on the nightstand accusing everyone of everything (some fabricated, some accurate). Skerrin had fled with his Brotherhood allies. Kellen confessed she'd been casting Dream on Skerrin nightly for weeks to drive him mad. Then a sahuagin raid hit Saltmarsh — Arienh's house was demolished from inside when she transformed into a dinosaur to fight — and Eda was killed by the attackers, only to be brought back by Arienh's Revivify spell. Never a quiet night in Saltmarsh.",
    imagePrompt:
      "A coastal town under sahuagin attack at night, a massive dinosaur bursting through a house roof from inside, fish-warriors in the streets, heroes fighting in all directions",
    backgroundImage: "chapter_43.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Kellen's Dream Campaign",
        content:
          "Kellen had been secretly casting Dream on Skerrin every night for weeks, giving him vivid nightmares, hoping to drive him to madness. It worked. He figured it out, realized the artificial origin, and fled. This counts as a success.",
      },
      {
        title: "Death by Interior Decoration",
        content:
          "Arienh transformed into a dinosaur inside her own house to fight the sahuagin. The house did not survive. When pressed, she acknowledged she had not thought that particular step through.",
      },
    ],
  },

  // === SESSION 30: The Hunt for Skerrin ===
  {
    id: "ch-44",
    session: 30,
    chapter: 44,
    title: "The Hunt for Skerrin",
    story:
      "The party set off to find Skerrin before he could escape the continent. Tracking through hills and forest, they flew over troll country on conjured giant owls (including Kellen's pony Sparky, who handled this calmly), spoke with elven forest scouts who'd seen Skerrin's path, and eventually reached Turtleback Agatha's cottage — a hag whose green-glowing home sat in the middle of a burned village haunted by will-o'-wisps and red caps. Agatha knew exactly what they wanted and who they were. She had given Skerrin free passage and knew where he'd gone. After receiving a gift of one aboleth tentacle, Agatha made Arienh a deal: the location of Skerrin in exchange for Arienh permanently giving up the ability to cast Revivify. Arienh accepted without hesitation. Skerrin was heading to the coast to board a ship bound across the Azure Sea. They rode through the night.",
    imagePrompt:
      "A glowing green cottage in a desolate burned village surrounded by floating will-o-wisps, adventurers approaching a dangerous hag in the eerie light",
    backgroundImage: "chapter_44.jpg",
    animation: ["fog"],
    funFacts: [
      {
        title: "Agatha's Price",
        content:
          "Agatha offered three options: a year of Kellen's service, Arienh's house, or losing the Revivify spell permanently. Arienh chose option three without hesitating. Skerrin was worth it.",
      },
      {
        title: "Sparky Takes Flight",
        content:
          "Kellen's chestnut pony with white spots was carried through the air by conjured giant owls to avoid troll territory. Sparky reportedly accepted this with remarkable calm. Sparky has been through a lot.",
      },
    ],
  },

  // === SESSION 31: Seaton ===
  {
    id: "ch-45",
    session: 31,
    chapter: 45,
    title: "Seaton",
    story:
      "Giant owls carried the party to the Coast Road, where they met a travelling halfling family who asked breathlessly if they were the famous Boarders Three. They were. Arriving at Seaton after dark, they used Walk on Water to sneak past the closed city gates. Kellen's reunion with her family in the gnome quarter of Hurlem's Isle was warm, tearful, and involved her mother cornering her despite Kellen's attempt to use MK as a human shield. The family agreed to take precautions against Skerrin's threat. Mornie and Airell hit the docks separately and found what they needed: a Duxchani ship loading cargo fast in the rain, clearly trying to leave. The ship's lines were built like the Falling Star — both came from the same corner of the world. Skerrin was aboard and almost gone. They had until dawn.",
    imagePrompt:
      "A coastal city at night in the rain, a gnome community with multi-story stacked buildings, heroes sneaking through wet streets toward docks where a foreign ship loads urgently",
    backgroundImage: "chapter_45.jpg",
    animation: ["rain"],
    funFacts: [
      {
        title: "The Boarders Three",
        content:
          "A halfling family on the road recognized the party from songs and asked if they knew the Boarders Three — Kellen, MK, and Airell. They were somewhat embarrassed and entirely pleased.",
      },
      {
        title: "Gnomish Architecture",
        content:
          "The gnomish quarter of Seaton features human-sized first floors and gnome-sized upper stories stacked above. Kellen's family lives in one of these charmingly impractical multi-story buildings.",
      },
    ],
  },

  // === SESSION 32: Justice Delivered ===
  {
    id: "ch-46",
    session: 32,
    chapter: 46,
    title: "Justice Delivered",
    story:
      "With Skerrin about to flee, the party had minutes to act. Airell dove into the harbor and swam to the ship unseen. The others approached the docks as Arienh transformed into a giant eagle. Mornie used the sword to shout at the captain to hold position. What followed was a brilliant chaotic fight across the ship's deck — Kellen's sickening radiance burning through the crew, Airell throwing ball bearings through windows at enemy wizards, Arienh shot by a poisoned crossbow bolt and crashing down near death. Airell killed the enemy wizard and healed Arienh. Then Skerrin turned invisible and jumped overboard. MK, who had been running from shore the entire time, spotted his splash and grappled him the moment he climbed out of the water. Trapped, poisoned by his own dream curse, and staring at MK, Skerrin chose to stab himself rather than face justice. He died with a lie on his lips.",
    imagePrompt:
      "A desperate fight on a ship deck in a rainy harbor at dawn, a gnome firing radiant energy, a giant eagle crashing down, a figure in black grappled at the water's edge",
    backgroundImage: "chapter_46.jpg",
    animation: ["battle-shake", "rain"],
    funFacts: [
      {
        title: "Skerrin's Last Lie",
        content:
          "Even compelled to speak truth as a corpse in Speak with Dead, Skerrin lied — claiming MK had killed him. He had stabbed himself. He was dedicated to framing people even posthumously.",
      },
      {
        title: "The Whole Party in Prison",
        content:
          "Thirty guards surrounded the scene and the entire party spent a night in jail. Airell pretended to be a shell-shocked sailor and was placed in a different cell. He overheard a Brotherhood agent kill the ship captain overnight.",
      },
    ],
  },
  {
    id: "ch-47",
    session: 32,
    chapter: 47,
    title: "Cleared",
    story:
      "The next morning brought the full Saltmarsh delegation: Eda, Gellan, Kester, Captain Sohral, the Stoutly brothers, and even Kellen's halfling best friend Bait — all vouching for the party. The King had come in person, accompanied by Emperor Mon (who got several guards to address him as 'Your Majesty') and Archmage Drawmij who quietly confirmed Skerrin's Brotherhood connections to the court. Skerrin had sent Anders another letter; Anders had published both letters publicly, which inadvertently exposed Skerrin's timeline error — he'd claimed to know about the sahuagin attack before it happened, which was impossible unless he'd helped plan it. The case collapsed. The party was cleared of all charges and sent home with the Saltmarsh delegation. They returned to find their house fully restored by their new household staff and ready for whatever came next.",
    imagePrompt:
      "A medieval court scene with an entire delegation from a coastal town vouching for a group of adventurers, a king observing, an archmage in the background, justice served",
    backgroundImage: "chapter_47.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Emperor Mon, Courtroom Edition",
        content:
          "Emperor Mon attended the hearing and managed to get guards to address him formally. He also contributed meaningfully to the case. He remains the most inexplicably effective person in the Styes.",
      },
      {
        title: "Skerrin's Timeline Error",
        content:
          "Skerrin's farewell letter claimed concern for Anders about the sahuagin raid — but the letter was written before the raid happened. Anders published it. The contradiction proved Skerrin had advance knowledge of the attack.",
      },
    ],
  },

  // === SESSION 33: Brewing Storm ===
  {
    id: "ch-48",
    session: 33,
    chapter: 48,
    title: "Brewing Storm",
    story:
      "The party returned to a Saltmarsh transformed. Months of downtime had produced an economic boom: new neighborhoods sprawled across the hillsides, a lighthouse stood on Abbey Isle, the Skull Beach had been cleared by cannon fire, and the Falling Star patrolled the bay keeping trade routes safe. Kellen had an entire neighborhood named after her. Songs about the party played in every tavern. But not everything was celebration — the sahuagin had sunk their fortress two levels deeper underwater, and no scouting party sent to investigate had returned. The council needed answers. Mornie tried and failed to rehabilitate the increasingly-drunk Sir Piersym. Arienh learned that Graz'zt's spawn — a demon-god — was searching for her family line. Kellen built something mechanical in her room for two weeks straight, producing constant ozone smell and large blueprints. At the council meeting, she began reporting on the sahuagin and the warning bell rang.",
    imagePrompt:
      "A thriving, expanded coastal city with new neighborhoods and a distant lighthouse, the Falling Star sailing the bay, but storm clouds building on the horizon",
    backgroundImage: "chapter_48.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Kellenville",
        content:
          "Kellen was invited to live in a new gnomish neighborhood named Kellenville in her honor. She was also immediately asked to pay her guild dues. This is how fame works in Saltmarsh.",
      },
      {
        title: "Sharking Hour",
        content:
          "The town had developed an unofficial system: 'Sharking Hour' indicated Kellen was drunk and illusory rainbow sharks would soon appear across the sky. People planned their evenings around this forecast.",
      },
    ],
  },

  // === SESSION 34: Recon in Force ===
  {
    id: "ch-49",
    session: 34,
    chapter: 49,
    title: "Recon in Force",
    story:
      "Twelve miles out, the Falling Star dropped the party into the water. Arienh became a shark and Kellen rode her; the others swam. En route they carefully avoided sahuagin herding great sharks and passed a sunken Chained Oblivion temple that Kellen could feel like a cold pressure from a distance. The fortress itself had been rebuilt and partially sunk — larger and stranger than before, with 70 sahuagin drilling formations in the south entrance alone. Finding a hidden third entrance, they crept inside, found sahuagin torturers at work, and made short work of them. They freed a prisoner named Borgas. In another cell, a dark elf named Varsis sat controlling the water pressure around himself, summoned a shadow sickle from nothing, and calmly informed them he'd been waiting for their arrival, sent by the Raven Queen. They accepted this as normal at this point in their careers.",
    imagePrompt:
      "Heroes swimming underwater toward a massive half-submerged sahuagin fortress of dark stone, giant sharks circling above, bioluminescent creatures in the depths",
    backgroundImage: "chapter_49.jpg",
    animation: ["underwater"],
    funFacts: [
      {
        title: "Arienh the Shark-Taxi",
        content:
          "Arienh's shark wild shape serves dual purpose: combat form and Kellen transport. The great sharks they were evading presumably did not find a gnome riding a shark quite as funny as we did.",
      },
      {
        title: "Varsis",
        content:
          "Varsis, the imprisoned Raven Queen servant, had been sitting in his cell controlling the ambient water pressure and waiting to be rescued because 'the Raven Queen showed him it would happen.' He was very calm about all of this.",
      },
    ],
  },

  // === SESSION 35: The Sahuagin Lair ===
  {
    id: "ch-50",
    session: 35,
    chapter: 50,
    title: "The Sahuagin Lair",
    story:
      "Varsis confirmed the layout: the four-armed Baron and his High Priestess lived on the middle level, which also held the ritual chamber where gladiatorial fights were held for the Eye in the Deep every several days. While Varsis explained this, a sahuagin patrol of eight marched past the doorway — the party held completely still and the guards kept walking. Pressing upward to the middle level, they stumbled into an active ritual to the Eye in the Deep. Airell threw a Silence field over the chamber. Kellen dropped Hunger of Hadar into it. The ritual collapsed, the giant shark being controlled by the priests immediately turned on a sahuagin and ate it, and Arienh's octopi grappled the freed shark while MK fought the remaining priests. In the chaos, Airell spotted ancient Oeridian carved into the altar — a fishing prayer twisted into a storm-summoning rite for the Kraken. They kept going up.",
    imagePrompt:
      "Heroes interrupting a dark ritual in an alien stone underwater chamber, a giant shark breaking free and turning on sahuagin priests, chaotic bioluminescent underwater combat",
    backgroundImage: "chapter_50.jpg",
    animation: ["underwater"],
    funFacts: [
      {
        title: "Corrupted Prayer",
        content:
          "The sahuagin ritual was corrupted from an ancient Oeridian prayer for good fishing harvests. The Chained Oblivion worshippers had modified it into a storm-summoning rite for the Kraken. Religious plagiarism at its most sinister.",
      },
      {
        title: "The Shark Helps",
        content:
          "The giant shark freed from the sahuagin ritual's control immediately attacked its former masters. An accidentally freed apex predator is a tactically useful outcome.",
      },
    ],
  },

  // === SESSION 36: The Hallway Fight ===
  {
    id: "ch-51",
    session: 36,
    chapter: 51,
    title: "The Hallway Fight",
    story:
      "They were spotted. Sahuagin poured from every direction — ahead, behind, above — and the party fought running battles through dark stone corridors, killing groups only to find more around every corner. Wave after desperate wave. Kellen, running out of spell slots, reached out to the Chained Oblivion for power — and was immediately connected directly to the source. It offered to send the Kraken. She said yes, because things were dire and she wasn't thinking clearly. More fighting. They finally found stairs to the top level and barely made it through, leaving carnage behind them. The Kraken was now on its way. Kellen had not yet told anyone this.",
    imagePrompt:
      "Heroes in a desperate running battle through the dark alien stone corridors of an underwater fortress, sahuagin soldiers pouring from multiple directions, torches and chaos",
    backgroundImage: "chapter_51.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Kellen Called the Kraken",
        content:
          "Under extreme duress in the sahuagin fortress, Kellen accepted the Chained Oblivion's offer to send the Kraken. She would not mention this to anyone until they were safely on the ship. Some confessions require the right moment.",
      },
      {
        title: "Always More Sahuagin",
        content:
          "The sahuagin fortress appeared to have an effectively infinite supply of soldiers around every corner. For every group killed, two more appeared. This is excellent dungeon design and terrible luck.",
      },
    ],
  },

  // === SESSION 37: Expeditious Retreat ===
  {
    id: "ch-52",
    session: 37,
    chapter: 52,
    title: "Expeditious Retreat",
    story:
      "Top floor! Mornie freed every slave she found and now led a group of terrified non-combatants through an active sahuagin fortress. Airell found an exit but it passed through a room full of sahuagin playing games — the party sprinted through before anyone reacted. The slaves, mostly, were recaptured. One orc named Gedik made it. Outside, the water churned with movement. Arienh conjured giant owls to lift everyone into the night air. A sahuagin threw a spear; it missed. They flew toward the Falling Star barely faster than the great shark chasing them from below. Sails were up before the owls landed. They escaped into the dark. Kellen told them the Kraken wasn't coming — she had checked — and passed out cold. No one knew what she'd done. At 1 AM, a voice from the crow's nest screamed: 'Kraken!'",
    imagePrompt:
      "Giant owls carrying heroes away from a fortified tower into a dark night sky, a massive shark leaping from the water below, the Falling Star visible in the distance",
    backgroundImage: "chapter_52.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Gedik",
        content:
          "Of all the slaves the party tried to free, only one orc named Gedik made it out. He later ended up helping Ma Garret make meat pies at the Sea Grove. From sahuagin captive to pie maker — a happy ending.",
      },
      {
        title: "The Shark Was Fast",
        content:
          "The pursuing great shark was described as 'very fast. Very, very fast.' The conjured owls were only slightly faster. The Falling Star's crew got the sails up in record time, motivated entirely by what was chasing their passengers.",
      },
    ],
  },

  // === SESSION 38: Lessons Learned ===
  {
    id: "ch-53",
    session: 38,
    chapter: 53,
    title: "Lessons Learned",
    story:
      "Kellen's nightmare had called the Kraken through her pact — and it had manifested alongside the ship, its aurora-lit form rising from the water. MK solved the problem by squeezing Kellen until she couldn't breathe, breaking her concentration. The Kraken faded. Arienh cast Greater Restoration to lift the curse. Crisis over — for now. Returning to Saltmarsh, the council was furious about the leaked details of their 'secret' scouting mission. Xendros showed up at MK's door frantically packing to leave — she had to return home to Dorakaa. She gave MK every healing potion she had, plus a ritual to contain the inner demon for another year, and left. MK asked her not to go. The clock on the demon ritual was now ticking. Kellen spent the downtime asking the Chained Oblivion more questions. Mornie did not think this was a good idea.",
    imagePrompt:
      "The deck of the Falling Star at night, a spectral kraken form fading into dark water, heroes catching their breath, one gnome being firmly shaken awake by a very tall woman",
    backgroundImage: "chapter_53.jpg",
    animation: ["storm", "waves", "ship-rocking"],
    funFacts: [
      {
        title: "Squeeze Therapy",
        content:
          "The medically recommended cure for Kraken-summoning trance is apparently MK squeezing the afflicted person until they cannot breathe. It worked immediately. The medical community would have questions.",
      },
      {
        title: "Xendros Departs",
        content:
          "Xendros was the only person who knew how to help MK manage the demon inside her — and she left for Dorakaa. She gave MK everything she had. The demon control ritual had a year's duration. The clock started the moment she left.",
      },
    ],
  },

  // === SESSION 39: Best Laid Plans ===
  {
    id: "ch-54",
    session: 39,
    chapter: 54,
    title: "Best Laid Plans",
    story:
      "Three weeks of preparation. The plan was elegant: lure the sahuagin into Crabber's Cove using the party as bait, while the Saltmarsh fleet waited with cannons at point-blank range. Sir Piersym, somewhat less drunk than usual, demanded to participate and was taken on the Falling Star mostly to keep him supervised. The trap worked perfectly — the sahuagin came straight into the cove as predicted. The signal went up, cannons roared, Sir Piersym charged with his few loyal soldiers. The sahuagin High Priestess banished Mornie to another plane in the middle of the battle. Then Arienh killed the Priestess with her wand of magic missiles, collapsing all the sahuagin illusions at once. But a desperate scrying spell mid-battle revealed the terrible truth: while they fought here, a second sahuagin force was simultaneously sacking Saltmarsh. Kellenville was on fire.",
    imagePrompt:
      "A cove battle with cannon fire and sahuagin forces in the water, a ranger firing a magical wand at a fish-warrior priestess, smoke and chaos, ships in the background",
    backgroundImage: "chapter_54.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Sir Piersym's Charge",
        content:
          "Sir Piersym demanded to join the battle despite being in questionable condition. He fought until the cannon volleys nearly hit him and was found face-down afterward. It was a noble if impractical effort.",
      },
      {
        title: "The Simultaneous Strike",
        content:
          "The sahuagin strategy was elegant: draw all defenders out with one force and attack the undefended city with another. The party only discovered this mid-battle via a desperate scrying spell. It was too clever by half.",
      },
    ],
  },

  // === SESSION 40: The Battle of the Cove ===
  {
    id: "ch-55",
    session: 40,
    chapter: 55,
    title: "The Battle of the Cove",
    story:
      "No sahuagin survived the cove battle — but there was no time to celebrate. Arienh, Airell, and Mornie were already running on water toward Saltmarsh while MK and Kellen helped coordinate the fleet's return. The trio arrived at Kellanville's cliffs and were immediately almost shot by dwarves who didn't recognize them. Inside the dwarven headquarters, Manistred showed them the terrible situation map: the sahuagin Baron and Baroness were inside the city. Liup Wain — a Brotherhood sorcerer the party had killed before — was alive again and had been casting a ritual at the standing stones on Siren's Point since 2 AM. Three men they'd already killed were here, mysteriously resurrected. The fleet was an hour out. Saltmarsh needed them now, in the middle of a city under siege, facing enemies who apparently couldn't stay dead.",
    imagePrompt:
      "A coastal medieval city under sahuagin siege, heroes climbing cliffs at speed to reach defenders, a robed figure casting dark magic from ancient standing stones above the city",
    backgroundImage: "chapter_55.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Liup Wain, Again",
        content:
          "Liup Wain had been definitively killed before. His reappearance casting at the standing stones was extremely alarming. The Brotherhood had resurrection resources. The party took careful note.",
      },
      {
        title: "The Standing Stones",
        content:
          "The standing stones on Siren's Point were ancient Oeridian fishing prayer sites. The Brotherhood had been secretly carving Chained Oblivion symbols onto them to convert them into Kraken beacons. They are also apparently load-bearing for Saltmarsh's fish harvest.",
      },
    ],
  },

  // === SESSION 41: The Sack of Saltmarsh ===
  {
    id: "ch-56",
    session: 41,
    chapter: 56,
    title: "The Sack of Saltmarsh",
    story:
      "MK flew Kellen and Varsis across the storm-black water invisibly to join the fight at Siren's Point. Above the standing stones, Kellen launched sickening radiance at Liup, Streth, and Nhemir — the three Brotherhood agents running the ritual. Mornie was paralyzed by a spell for most of the fight. Airell collected heads. Varsis saw a diseased raven flying impossibly against the storm and said nothing. He landed, killed a sahuagin about to murder Eda — and then beheaded Eda himself. The Raven Queen's raven had brought him his real mission. He let the townspeople knock him unconscious without resistance. Over the next hour, the sahuagin were broken: one giant shark killed, another fled, dozens slain. When the dust settled, Eda was dead, Varsis was in chains, a third of the city's population was missing or dead, and 400 were confirmed killed. The cost had been catastrophic.",
    imagePrompt:
      "A nighttime city battle in a raging storm, lightning illuminating heroes fighting on cliff-top standing stones, a betrayal happening amid the chaos, devastation in every direction",
    backgroundImage: "chapter_56.jpg",
    animation: ["lightning", "rain"],
    funFacts: [
      {
        title: "Varsis's Mission",
        content:
          "Varsis saved Eda from a sahuagin, then killed her himself — the Raven Queen had sent him to collect Eda's secrets before they could be captured. He felt no guilt about this. The Raven Queen's servants have a very particular moral framework.",
      },
      {
        title: "The Real Cost",
        content:
          "The sahuagin sack killed 400 people confirmed, with estimates of 1,200 total casualties and a third of the population missing. Eda's house, Gellan's house, the council hall, the smithy, and Kellenville were all destroyed. The town gnomes blew up Kellenville themselves on the way out.",
      },
    ],
  },
  {
    id: "ch-57",
    session: 41,
    chapter: 57,
    title: "After the Storm",
    story:
      "Morning. Eda's funeral procession wound from Uphill to the cemetery, flowers thrown into the grave. Varsis was hanged afterward and didn't resist — a raven perched on the gallows post left the moment he died, confirming the Raven Queen received what she came for. Eda's daughter gave Arienh sealed documents revealing that Arienh and Eda shared family lineage, both descended from generals who had betrayed Iuz six hundred years ago — and Iuz had hunted their bloodlines ever since. Ferrin had known. In the chaos of reconstruction, Anders offered his warehouse as a hospital and his fish stores to feed survivors. He didn't wait to be asked. When Skerrin's manipulation ended, the real Anders had finally shown up. Eliander arrived from Seaton with five black ships. Kellen began reporting to the council on incoming threats. The warning bell rang. Five ships on the horizon.",
    imagePrompt:
      "A devastated medieval coastal town the morning after battle, a funeral procession carrying flowers past smoldering ruins, survivors gathering at a dwarven mining hall for council",
    backgroundImage: "chapter_57.jpg",
    animation: ["smoke"],
    funFacts: [
      {
        title: "The Real Anders",
        content:
          "Anders, manipulated by Skerrin his entire adult life, offered his entire fish warehouse and home as relief resources without being asked. Without Skerrin's control, who Anders actually was became clear.",
      },
      {
        title: "Six Hundred Years of Running",
        content:
          "Iuz's oath to hunt the descendants of his betrayers spans six centuries and reaches all the way to Saltmarsh. Arienh and Eda's families have been fleeing this divine vendetta their entire lives without knowing it.",
      },
    ],
  },

  // === SESSION 42: Counting the Cost ===
  {
    id: "ch-58",
    session: 42,
    chapter: 58,
    title: "Counting the Cost",
    story:
      "Days of slow reconstruction. Eliander gave Mornie the deed to his house. Kellen went on an awkward date with Nolan Oneshoe and had a surprisingly good time; he later brought her a chamber pot as a housewarming gift, which she appreciated. Arienh scryed on Skerrin — he was in Port Toli, very much alive again, planning to sail with enslaved passengers to a 'Sorrowful Place' in the ocean where the Kraken waited to be bound. The ritual required three hundred souls sacrificed simultaneously. They had days to catch him before the fleet launched. Mornie assembled every seaworthy ship Saltmarsh had left — Eliander's Fury of Gradsul plus the battered Falling Star — loaded the best soldiers, and set course to intercept. The Monmurg expedition was also moving. Everything was converging at sea.",
    imagePrompt:
      "A war council aboard a ship at sea, heroes planning around maps on a table, two ships visible through the porthole sailing toward a dark horizon",
    backgroundImage: "chapter_58.jpg",
    animation: ["ship-rocking", "waves"],
    funFacts: [
      {
        title: "Nolan's Housewarming Gift",
        content:
          "Nolan Oneshoe brought Kellen a chamber pot as a housewarming gift. Kellen found this extremely practical. They got along well. He also collects her guild dues. Multi-purpose relationship.",
      },
      {
        title: "The Sorrowful Place",
        content:
          "Arienh's scry on Skerrin revealed he was heading to a specific location in the ocean associated with sorrow — a place Kellen had felt as a cold pull from the sahuagin temple. The Kraken was waiting there.",
      },
    ],
  },

  // === SESSION 43: The Shopping Episode ===
  {
    id: "ch-59",
    session: 43,
    chapter: 59,
    title: "The Ashes of Skerrin",
    story:
      "The fleet sailed. On the third day out, Airell's owl spotted five sails in formation — Skerrin's ships. The Falling Star had the weather gauge. Then the Deceit rammed them and hand-to-hand combat erupted across both ships. Kellen made Skerrin see visions of everyone he'd killed at the Sea Grove, stabbing him while he suffered through the faces. MK disintegrated Skerrin — turned him into ash between one breath and the next. The battle ended. Four ships were captured, one surrendered at sea. MK needed to be healed back to consciousness and Kellen discovered a binding ritual inscribed in diamond dust and squid ink on the Deceit's hull — a Brotherhood prototype for binding the Kraken with three hundred souls. They had stopped it in time. The Fury of Gradsul was sent back to Saltmarsh with the captured ships. The Falling Star changed course for the Styes.",
    imagePrompt:
      "Two ships locked in battle on the open ocean, adventurers fighting across decks, a gnome making a man see visions of his victims, a woman turning into fire and disintegrating someone",
    backgroundImage: "chapter_59.jpg",
    animation: ["battle-shake", "waves"],
    funFacts: [
      {
        title: "Skerrin's Final Moments",
        content:
          "Kellen forced Skerrin to see every face from the Sea Grove massacre while she stabbed him. MK then disintegrated him. Arienh collected his ashes and remaining items. Some villains don't get a dramatic monologue.",
      },
      {
        title: "The Ritual Ship",
        content:
          "The Deceit's hull was inscribed with a binding ritual requiring 300 sacrificed souls — carved in diamond dust and squid ink. It was a copy of the Grimoire of the Deep's ritual. The Brotherhood had almost pulled it off.",
      },
    ],
  },

  // === SESSION 44: The Sword Awakens ===
  {
    id: "ch-60",
    session: 44,
    chapter: 60,
    title: "The Sword Awakens",
    story:
      "The Falling Star arrived at the Styes to find three Brotherhood ships bombarding the city with cannon fire. Captain Sohral made an immediate tactical decision: hit them fast from the fog. Kellen's sickening radiance killed the entire crew of the first ship. Arienh called lightning onto the second. Then a rolling darkness rose from the ocean floor. A tentacle coiled around the Falling Star. The third Brotherhood ship was crushed by something immense. The Kraken had arrived at the Styes. Mornie drew the Memory of Ruin and drove it into the Kraken's flesh — and when the creature's blood touched the blade, it shuddered, glowed, and woke up. The awakening artifact surged with cold fury through Mornie's arm. The Kraken shattered the ship in two. Kellen appeared on deck and broke her pact — her owl eye dissolved into white goo — and held the Kraken in place with her last reserves. Drawmij stepped through a dimensional door. 'Get to the beach,' he said. 'Now.'",
    imagePrompt:
      "The Falling Star being crushed by a massive kraken's tentacles at night near a burning city, a glowing sword awakening in a warrior's hands, a dimension door opening on the deck",
    backgroundImage: "chapter_60.jpg",
    animation: ["storm"],
    funFacts: [
      {
        title: "The Sword Awakens",
        content:
          "The Memory of Ruin — Mornie's ancient Suloise artifact made from a Tarrasque's femur — awakened when its blade touched Kraken blood. It now reflects spells, does necrotic damage, and surrounds Mornie with cold fury. Worth it.",
      },
      {
        title: "Kellen Breaks the Pact",
        content:
          "Kellen severed her connection to the Chained Oblivion by an act of will. Her magical owl eye dissolved into white goo. Her pact-keeper rod exploded. Then she told the Kraken to stay put. It did. Quitting is sometimes the most powerful thing you can do.",
      },
    ],
  },

  // === SESSION 45: One Man Ashore ===
  {
    id: "ch-61",
    session: 45,
    chapter: 61,
    title: "One Man Ashore",
    story:
      "With the Falling Star breaking apart, Drawmij ordered everyone to the beach point and began a teleportation ritual. The party fought desperately to hold the Kraken long enough — Arienh's conjured snakes, Mornie's awakened sword, Airell's arrows, MK's furious strikes. The Kraken's lightning hit Drawmij mid-cast and broke his concentration. The teleport failed. Airell, sensing what was coming, sprinted out of range. Drawmij grabbed everyone else and stepped through another door. Airell was alone on a dark beach with a kraken. He ran. The Kraken, distracted by Kellen's rainbow shark illusion, eventually turned back to sea. Airell walked into the burning Styes, looted a warehouse, and spent the night sleeping in a pile of empty crates while the archmage and the rest of the party sat in a small metal submarine sixty feet underwater, catching their breath.",
    imagePrompt:
      "Heroes fighting desperately on a dark beach against a massive kraken by night, lightning crashing everywhere, a lone figure sprinting away as others teleport to safety",
    backgroundImage: "chapter_61.jpg",
    animation: ["lightning", "rain"],
    funFacts: [
      {
        title: "Airell, Abandoned Again",
        content:
          "For the second time in recent memory, Airell was left alone when Drawmij's teleport excluded him. He was out of range intentionally. He survived by outrunning a kraken and then had a peaceful night looting a warehouse.",
      },
      {
        title: "The Grimoire Swims",
        content:
          "During the chaos, Kellen's owl familiar died and dropped the Grimoire of the Deep into the harbor. The book was last seen 'swimming and flopping in the water.' It is now unaccounted for somewhere in the Styes harbor.",
      },
    ],
  },
  {
    id: "ch-62",
    session: 45,
    chapter: 62,
    title: "The First Attempt",
    story:
      "The submarine — the Sea Cow — was Drawmij's private underwater vessel, forty feet long, with transparent walls and a kitchen replicator that could produce 'a passable version of any food.' Very comfortable for a post-kraken recovery. Drawmij briefed everyone with characteristic bluntness: the Kraken was 120 miles away, could sense Kellen, and would arrive in five days. His underwater citadel had been destroyed by the Kraken two months ago. The archmage had been stuck in Celene ever since, unable to return. He had no spellbook. His clones had been systematically murdered. He examined MK, identified the demonic rune in her hand, and in one devastating conversation revealed that MK was a constructed being — the failed first attempt at Mornie's process, her body belonging to a girl who died in an accident, with a demon that had burst out during creation. MK fainted. Then they discussed what to do about the Kraken.",
    imagePrompt:
      "Heroes inside a small underwater submarine with transparent walls showing the ocean depths, an archmage at the center briefing them on devastating information, exhausted faces",
    backgroundImage: "chapter_62.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Sea Cow",
        content:
          "Drawmij's submarine has transparent walls, a food replicator, a scrying sphere, and a full alchemical laboratory. It is the most comfortable place the party has been in several sessions, which says something.",
      },
      {
        title: "MK's Origin",
        content:
          "MK's body belonged to a wealthy landowner's daughter who died in an accident. The soul-combining experiment went wrong and produced a demon instead of a soldier. The demon killed a Drawmij clone and fought Nenredhe. They thought it had dissipated. It had not.",
      },
    ],
  },

  // === SESSION 46: A Polite Letter ===
  {
    id: "ch-63",
    session: 46,
    chapter: 63,
    title: "A Polite Letter",
    story:
      "On the Sea Cow, Drawmij explained his master plan for the Kraken: go to Hokar, find the archmage who controls the continent's gunpowder supply, and make the cannons themselves magical. Airell produced a teleportation scroll to Hokar that they'd taken from the Brotherhood months ago. They teleported — and landed in a Brotherhood safehouse in Hokar's western quarter. The Brotherhood agent they'd interrupted yelled 'It's the Keolanders!' and attacked. The party killed everyone except one prisoner. Drawmij sat down, wrote the Hokar archmage a polite note saying they'd found his Brotherhood infestation and left him one alive for questioning, then ordered coffee. The city's police force arrived, then the Custodians, then a delegation to escort them to the Plar of Hool — the strange worm-man who ruled Hokar's arcane elite and hated Drawmij personally. Things were about to get very diplomatic.",
    imagePrompt:
      "Adventurers inside a Brotherhood safehouse with maps and coded letters, an archmage calmly writing a note while police gather outside, a prisoner tied in the corner",
    backgroundImage: "chapter_63.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "Drawmij's Note",
        content:
          "After the fight, Drawmij sat down, drank coffee, and wrote the Hokar archmage a polite letter informing him of the Brotherhood infiltration and thanking him for his city's hospitality. Airell put back everything he'd pocketed. Mostly.",
      },
      {
        title: "The Plar of Hool",
        content:
          "The Plar of Hool rules Hokar's arcane establishment and is literally a worm-man — transformed by decades of magical experimentation. He and Drawmij have a long history of mutual attempted assassination. The meeting went about as expected.",
      },
    ],
  },

  // === SESSION 47: The Worm King ===
  {
    id: "ch-64",
    session: 47,
    chapter: 64,
    title: "The Worm King",
    story:
      "The Plar of Hool's audience chamber had a floor made entirely of gemstone-inlaid maps and pillars of magical light. He compelled several party members to speak only truth, asked MK what was really inside her, and asked Arienh her deepest desires. He was clearly using Legend Lore to know things about them he shouldn't. Then Kellen cast rainbow sharks — the entire room erupted in Selouise counter-glyphs, two dozen half-dragon guards leveled weapons, and the Plar looked at Kellen with genuine interest. Airell discretely offered to sell him the Grimoire of the Deep. Drawmij said absolutely not. The Polar then revealed something crucial: Kellen hadn't read the Grimoire's introduction — she'd skipped straight to the spells — which is why she couldn't control the Kraken. He agreed to magically enhance Hokar's cannons. They teleported immediately to Port Toli with a full delegation of half-dragons. The Kraken was ninety miles away and moving.",
    imagePrompt:
      "A grand audience chamber with a gemstone floor map, a worm-like creature on a throne facing adventurers, magical glyphs erupting from the walls, half-dragon guards at ready",
    backgroundImage: "chapter_64.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Introduction",
        content:
          "Kellen never read the Grimoire of the Deep's introduction. She skipped straight to the magic. The introduction explained how to actually control the Kraken. This oversight cost them considerably.",
      },
      {
        title: "Rainbow Sharks, Wrong Venue",
        content:
          "Kellen cast rainbow sharks in the Plar of Hool's audience chamber. The room's automatic Selouise counter-glyphs activated instantly and the guards leveled weapons. The Plar found this delightful. It is unclear if Kellen did this on purpose.",
      },
    ],
  },

  // === SESSION 48: Into the Kraken's Mind ===
  {
    id: "ch-65",
    session: 48,
    chapter: 65,
    title: "Into the Kraken's Mind",
    story:
      "Port Toli greeted them with controlled military chaos. Princess Glia Blackswan, priestess of Fharlanghn, ran the city from a massive town hall surrounded by soldiers and bureaucrats. She and Drawmij argued productively. The plan: load the party and Kellen onto a decoy ship outside the harbor, wait for the Kraken, and lead it into the magically-enhanced cannons lining the harbor walls. They spent the day on preparations. Airell got a new owl familiar and memorized the teleportation circle sigils. Kellen reached into the Kraken's mind one more time to find its location — it was ninety miles out, sleeping, two of its multiple minds running, one of them obsessively cataloguing its traumas and desired revenge. It noticed her. It threatened her family and friends in vivid detail. Kellen woke up screaming and immediately attacked Flicker the pseudodragon, who was sleeping on her face.",
    imagePrompt:
      "A military coastal city in urgent preparation, soldiers reinforcing harbor walls, a ship being loaded with adventurers as bait, storm clouds gathering to the north",
    backgroundImage: "chapter_65.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Kraken Has Two Minds Active",
        content:
          "The Kraken was artificially aged by Brotherhood ritual, giving it a fully grown body with an unstable juvenile mind. Kellen reported one of its active minds was 'obsessing about its traumas and revenge.' She was describing a teenager.",
      },
      {
        title: "Flicker Gets Hit",
        content:
          "When Kellen woke from her Kraken-mind nightmare screaming, she reflexively attacked Flicker the pseudodragon, who was innocently sleeping on her face. Flicker bit her back. An equitable outcome.",
      },
    ],
  },

  // === SESSION 49: The Wake ===
  {
    id: "ch-66",
    session: 49,
    chapter: 66,
    title: "The Wake",
    story:
      "The party spent a night aboard the decoy ship in the harbor mouth, watching for the Kraken on rotating watches. Drawmij joined Mornie on the second watch and gave her a list of spy contacts, cover identities, and recognition codes from his network — in case he died in the coming battle. He also asked her to find whoever had killed the Circle of Eight mages in Greyhawk. Then he kept writing something he kept hidden. At dawn, Airell spotted a tell-tale wake cutting across the waves toward them — no creature should move that fast underwater. They had minutes. MK heaved the anchor up single-handedly, Arienh spun the wheel, Mornie scaled the rigging to drop the sails in one sprint. The ship wheeled into the harbor at speed. Kellen was clinging to the mast. The Kraken's shadow crossed the harbor entrance. Every cannon in Port Toli was now loaded and ready. Everyone waited.",
    imagePrompt:
      "A ship racing back into a fortified harbor at dawn with a massive kraken wake cutting through the water behind it, harbor cannons rotating to track the incoming threat",
    backgroundImage: "chapter_66.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Drawmij's List",
        content:
          "Drawmij gave Mornie a list of two dozen spy contacts with cover identities and codes — 'in case he died.' He was genuinely uncertain about surviving the Kraken fight for the first time in the campaign. That is not a reassuring feeling.",
      },
      {
        title: "The Wake",
        content:
          "A kraken at full speed underwater creates a visible surface wake. Airell spotted it from the mast with his owl's vision. It was heading directly at them. They had less than ten minutes from sighting to harbor.",
      },
    ],
  },

  // === SESSION 50: Dead by C-Section ===
  {
    id: "ch-67",
    session: 50,
    chapter: 67,
    title: "Dead by C-Section",
    story:
      "The Kraken entered the harbor. Arienh raised the ocean floor into a trench that trapped it while the cannons unloaded — devastating. Then the Kraken released a magical antimagic pulse that shattered every spell effect in the harbor. It grappled Kellen, Airell, and Drawmij simultaneously. The Plar of Hool, watching from his golden floating throne, launched a Disintegrate spell that blew off one of the Kraken's tentacles — then the Kraken killed the throne's magic and the Plar teleported away, letting his seneschal fall into the harbor. Kellen was squeezed to death. MK was swallowed whole, fought from the inside, and died in the acid. Mornie shot the Kraken twice through its abdomen with her awakened pistol. The Kraken keeled over dead — killed by c-section, the bullet finding MK's location inside. Airell ran to MK and breathed life back into her. Arienh used her last diamonds to revive Kellen. The Kraken was dead.",
    imagePrompt:
      "The climactic harbor battle with a massive kraken being struck by magical cannons, a warrior shooting from point-blank range, a gnome being revived on the shore, victory and loss together",
    backgroundImage: "chapter_67.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Death by C-Section",
        content:
          "Mornie killed the Kraken by shooting it through the abdomen to reach MK inside. Captain Sohral received the message 'dead by c-section.' The phrase has entered Saltmarsh maritime vocabulary.",
      },
      {
        title: "The Plar Bails",
        content:
          "When the Kraken's antimagic pulse destroyed his floating throne, the Plar of Hool teleported away and let his loyal seneschal fall to the harbor floor. He is technically a dick. This is established fact.",
      },
    ],
  },

  // === SESSION 51: Beginning Again ===
  {
    id: "ch-68",
    session: 51,
    chapter: 68,
    title: "Beginning Again",
    story:
      "Three days aboard the Sea Cow, then home. Mornie stood on the hull and shouted through her sword: 'The Kraken is dead! We're back!' A ragged cheer rose from the shore. Kellen's family was waiting at the dock and immediately buried her in hugs, her mother furious and relieved in equal measure. Someone had found Drawmij's old spellbook on the Falling Star; Kellen gave it back and Drawmij looked like he might actually express gratitude. He left on the Sea Cow. The house had been fully cleaned and restocked while they were gone. In the weeks that followed: Gellan took over Eda's council seat and was miserable about it; Kellenville was almost completely rebuilt; Kellen built a mechanical fan system for the house; a Rakshasa shapeshifter showed up wearing Mornie's face and proved immune to everything they tried. And then Arienh scryed on a powerful mage in Scant and found Bigby. Time for Greyhawk.",
    imagePrompt:
      "Heroes returning to a recovering coastal town to cheering crowds at the dock, families reuniting, the damaged Falling Star being repaired in the harbor, cautious hope",
    backgroundImage: "chapter_68.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "The Fan System",
        content:
          "Kellen spent two weeks after the Kraken battle dismantling everything mechanical in the house and building a custom fan ventilation system. The house constantly smelled of ozone during construction. The fans work beautifully.",
      },
      {
        title: "The Rakshasa Problem",
        content:
          "A Rakshasa shapeshifter appeared wearing Mornie's face. Rakshasas are immune to all magic below 6th level and to non-magical weapons. Mornie shot it in the mask, which hurt it somehow and sent it fleeing via plane shift. Mystery unsolved.",
      },
    ],
  },

  // === SESSION 52: The Free City of Greyhawk ===
  {
    id: "ch-69",
    session: 52,
    chapter: 69,
    title: "The Free City of Greyhawk",
    story:
      "The party sailed to Greyhawk — the largest, most cosmopolitan city in the world — with Vohem trading gunpowder and spices to fund the trip. MK immediately grappled a man who ran into her in the crowd, accidentally broke a priceless figurine, and started a street brawl that ended with guards, a failed Suggestion spell, Kellen punched by an aggressor, and MK killing a guard she wasn't supposed to kill. Arienh paid for the broken figurine, healed the dead guard back to life, and everyone fled invisibly. MK hid in a portable hole while Arienh flew her back to the inn as a hawk. The rest of the party changed disguises and checked into the Black Dragon Inn under new names — Airell was 'Montana Smith,' which proved immediately problematic when they found wanted posters for the 'Garden Quarter Strangler' bearing a suspiciously familiar description.",
    imagePrompt:
      "An enormous medieval fantasy city with vast busy streets and markets, adventurers in disguise weaving through crowds, wanted posters on a wall, the grandeur and chaos of a great city",
    backgroundImage: "chapter_69.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Montana Smith",
        content:
          "Airell chose the alias 'Montana Smith' for Greyhawk, describing himself as an explorer-archaeologist. The city had wanted posters for murders connected to people he'd conned in the past. This is not a coincidence.",
      },
      {
        title: "MK's First Hour",
        content:
          "MK killed a city guard within one hour of arriving in Greyhawk. Arienh used a potion to revive him. The entire party was immediately in disguise and hiding. This is a record even for them.",
      },
    ],
  },

  // === SESSION 53: Cat and Mouse ===
  {
    id: "ch-70",
    session: 53,
    chapter: 70,
    title: "Cat and Mouse",
    story:
      "The Garden Quarter Strangler had been targeting wealthy Greyhawk citizens every two or three days — hanging victims from rafters and removing organs. Several victims were connected to people Airell had previously swindled. The Rakshasa was framing him. Airell decided the only way to clear his name was to submit to zone of truth at the Temple of St. Cuthbert and prove his innocence publicly. He dressed down, walked in, explained the situation to a priest, and dropped his disguise. The priest sent for a superior. The Bishop of St. Cuthbert arrived, cast a more powerful compulsion spell, and asked if he was the killer. Airell said no. The Bishop looked at the magistrate and said 'he is lying.' The Rakshasa had replaced the Bishop. Airell screamed 'Where is the real Bishop?!' and was immediately tackled by six guards. The Rakshasa gave him a look: 'Be seeing you.'",
    imagePrompt:
      "A formal temple court of justice, a man in disguise being confronted by a false bishop as magical lights reveal his answers, city guards closing in, a shapeshifter revealed",
    backgroundImage: "chapter_70.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Rakshasa's Long Game",
        content:
          "The Rakshasa had replaced the Bishop of St. Cuthbert — an institution designed to detect lies — specifically to frame Airell in the one place he'd gone to prove his innocence. That is genuinely clever villainy.",
      },
      {
        title: "The Strangler's Pattern",
        content:
          "The Garden Quarter Strangler murders followed a pattern of people connected to Airell's past schemes — but not all victims were connected to him. The Rakshasa was adapting real events to build a plausible frame. Patient and thorough.",
      },
    ],
  },
  {
    id: "ch-71",
    session: 53,
    chapter: 71,
    title: "The Rakshasa's Game",
    story:
      "While Airell sat in Greyhawk's prison loudly insisting he'd been framed by a shapeshifter, Kellen and Arienh hit the Great Library to research Rakshasas. The findings were grim: immune to all magic below 7th level, immune to non-magical weapons, only creatures of truly pure heart could harm one, and when killed a Rakshasa simply reincarnates in the Nine Hells. The only guaranteed solution was a fire elemental. Mornie meanwhile traced the Strangler's crime scenes and found a pattern suggesting the Rakshasa was selecting victims to maximize suspicion toward Airell — some connected to his past, some not, calibrated to look plausible without being obvious. Airell spent three days in prison, observed everything, and was eventually released when Eliander's name worked its magic. The party reunited at the inn with new information, a Rakshasa still at large, a Grimoire of the Deep floating somewhere in the Styes harbor, and a city full of mysteries that could fill another adventure entirely.",
    imagePrompt:
      "Adventurers in a vast library researching by candlelight, wanted posters on the wall, an uncomfortable reunion at a busy inn, a great city's mysteries stretching in every direction",
    backgroundImage: "chapter_71.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "Rakshasa Rules",
        content:
          "Rakshasas cannot be permanently killed on the material plane — they reincarnate in the Nine Hells. Only creatures of pure heart can wound them with normal attacks. Fire elementals work. Most things don't. It's a design philosophy.",
      },
      {
        title: "Session 53",
        content:
          "The campaign ends on a cliffhanger in the greatest city in the world, with a shapeshifter loose, a magical book lost in a harbor, a demon clock ticking in MK's chest, and Iuz still hunting Arienh's bloodline. Business as usual for Invicem Tolerandum.",
      },
    ],
  },

  // === SESSION 54: The Owl's Jig ===
  {
    id: "ch-72",
    session: 54,
    chapter: 72,
    title: "The Owl's Jig",
    story:
      "Airell sat in Greyhawk's prison swapping stories with the local drunks and pickpockets, very much not panicking. Then his owl familiar appeared at the cell window with a forked twig clenched in its beak — the components for a locate-object spell. Airell cast it through the bars and tracked down the whereabouts of his stolen gear. Meanwhile, the Rakshasa drifted invisibly through the cell block, whispering taunts directly into Airell's ear. Rattled but unbroken, Airell composed himself. A Brother Sebastian from the Church of Olidammara arrived to speak with the party — apparently he'd been tracking the same Rakshasa for months. Outside, Kellen had a better idea: she polymorphed Airell into a rat. A small, unimprisoned rat. Flicker the familiar crashed through the window in dramatic fashion as Airell-rat scurried through the prison's shadows. By the time the guards noticed anything wrong, Airell had borrowed a guard's cloak, walked through the front gate, and the whole party was reuniting at the Arena with their gear accounted for, a new clerical ally, and one very undignified story Airell would never be allowed to forget.",
    imagePrompt:
      "A small owl delivering a twig through prison bars to a cloaked elf, a shapeshifter lurking invisibly in the shadows, a tiny rat scurrying toward freedom",
    backgroundImage: "chapter_72.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "The Owl Delivery",
        content:
          "Airell's owl familiar navigated Greyhawk's winding streets, identified the correct prison block, and delivered spell components through the bars. Owls are smarter than they look. Or maybe Airell is just very lucky.",
      },
      {
        title: "A Rat's Dignity",
        content:
          "Being polymorphed into a rat and squeezed out of a prison by your friends is technically a successful jailbreak. Airell insists on being called a 'tactical escape artist.' Nobody agrees.",
      },
    ],
  },

  // === SESSION 55: The Rakshasa's Web ===
  {
    id: "ch-73",
    session: 55,
    chapter: 73,
    title: "The Rakshasa's Web",
    story:
      "Free from prison and full of righteous fury, Airell contacted other planes to speak with Eda, a powerful entity he trusted. The answers were grim and specific: the Rakshasa lived at the Bishop's house, and its next target was a man named Hacrar — specifically, a fanboy who'd been loudly admiring the creature in its Bishop disguise. Mornie sent her rat familiar to scout the Bishop's residence. The little rat squeezed inside and found fiends waiting in the shadows. Then it was killed. Mornie felt the snap of the familiar bond across the city. Grieving and angry, the party pivoted to protecting Hacrar. They tracked his movements and followed his companion Ilbryn, a poised woman who seemed out of place. As they watched, Ilbryn's form shifted — wings unfurled, her eyes went solid black, and the smell of brimstone hit the air. She was a succubus. Before the party could act, Flicker — brave, reckless, beloved Flicker — lunged to stop the attack. The succubus struck him down. The street went quiet. Flicker was gone.",
    imagePrompt:
      "A glamorous woman transforming into a winged demon on a Greyhawk street at night, a small creature lying still in the cobblestone shadows",
    backgroundImage: "chapter_73.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Cost of Scouting",
        content:
          "Familiars are not just tools — they are magical bonds. When Mornie's rat was killed, she felt it physically. Losing a familiar is genuinely traumatic for a spellcaster.",
      },
      {
        title: "Flicker",
        content:
          "Flicker had survived ambushes, sea battles, dungeon traps, and a Rakshasa's taunts. A succubus in an alley finally ended the streak. The party would not forget it.",
      },
    ],
  },

  // === SESSION 56: The Final Confrontation ===
  {
    id: "ch-74",
    session: 56,
    chapter: 74,
    title: "The Final Confrontation",
    story:
      "The party didn't grieve long — they had a succubus to kill. The fight was brutal and fast. Brother Sebastian saved the poisoned Hacrar's life while the rest of the group cornered the fiend. Then came a surprise: Zuterhes, an Arcanaloth — a fox-headed fiend scholar — approached the party with an offer of information in exchange for future favors. They accepted, warily. The real showdown came at Vivian's house, where the Rakshasa had retreated. After a fierce battle across parlor and hallway, Airell managed to trap the Rakshasa inside the Warden of the Fore, a magical bow, imprisoning it permanently. Victory — but at a price. Airell himself had died in the fighting and was reincarnated by magical ritual as a halfling. He was not thrilled. The Lord Mayor of Greyhawk received them as heroes and paid handsomely. The Thieves Guild, impressed by how much trouble they'd caused, offered a deal instead of a war. The arc was closed. A new one was opening.",
    imagePrompt:
      "A fox-headed demon scholar gesturing toward a glowing magical bow that traps a tiger-faced creature inside, heroes standing weary and triumphant in a destroyed parlor",
    backgroundImage: "chapter_74.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Trapped Forever",
        content:
          "A Rakshasa killed on the material plane just reincarnates in the Nine Hells. Trapping one inside a magical item is actually the better solution — it removes the threat without sending it home.",
      },
      {
        title: "Airell the Halfling",
        content:
          "Reincarnation magic brings back the soul in a new body — which the magic chooses randomly. Airell came back as a halfling. He is approximately three feet shorter than he was this morning.",
      },
    ],
  },

  // === SESSION 56 DT: MK's Family ===
  {
    id: "ch-75",
    session: 56,
    chapter: 75,
    title: "MK's Family",
    story:
      "While the rest of the party navigated Greyhawk's aftermath, MK slipped away on personal business that was long overdue. She traveled to the Yeomanry, a quiet land of small farms and strong people, to find the family she'd left behind years ago. Her father Ricart was older and quieter than she remembered. Her brother Arne was almost as tall as she was now. The reunion was awkward at first — words didn't come easily for any of them. Then a giant attacked the village. That broke the tension. MK and her family fought side by side, and something unspoken was understood between them. Afterward came harder business: Duke Feldrin confronted MK about a sword she'd taken years ago, a prized family heirloom she had needed and borrowed without asking. She returned it, and in exchange her father pressed something into her hands — the family mithril axe, passed down through generations, now hers to carry. She rode back to Greyhawk a little heavier and a little lighter at the same time.",
    imagePrompt:
      "A fierce blonde woman embracing an older human farmer while a young man watches, mithril axe gleaming on a rough-hewn table, green hills in the background",
    backgroundImage: "chapter_75.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Downtime Detours",
        content:
          "Between major sessions, the party often takes 'downtime' — time to handle personal matters, recover, and develop. MK's family trip is one of the campaign's most personal quiet moments.",
      },
      {
        title: "The Mithril Axe",
        content:
          "Mithril is rarer and lighter than steel but tougher than iron. A family mithril axe is not just a weapon — it's an inheritance, a statement, and a responsibility all in one.",
      },
    ],
  },

  // === SESSION 57: The Lightning Stairs ===
  {
    id: "ch-76",
    session: 57,
    chapter: 76,
    title: "The Lightning Stairs",
    story:
      "Castle Greyhawk loomed above the city like a broken crown, its upper towers collapsed, its lower depths mostly unexplored by anyone sane. The party arrived at the ruins with torches and curiosity and extremely poor judgment. The entrance opened into a corridor lined with lightning-bolt traps that fired at irregular intervals. Nine flights of stairs descended below the castle, each one stranger than the last. MK had been dreaming of Iuz again — the demon prince appeared in her sleep as a figure with smoke pouring from his eyes, kneeling before a naked king she didn't recognize. The dreams were getting more vivid. Below, skeletons began to appear in the corridors, not attacking yet, just watching. The walls bore inscriptions — not warnings but philosophical taunts written by Zagyg, the mad archmage who'd built this place, mocking explorers for assuming treasure justified danger. The party laughed. Then the skeletons started moving.",
    imagePrompt:
      "Adventurers descending a crackling lightning-filled staircase into darkness, skeletons watching from alcoves, bizarre philosophical text carved into ancient stone walls",
    backgroundImage: "chapter_76.jpg",
    animation: ["lightning"],
    funFacts: [
      {
        title: "Zagyg's Sense of Humor",
        content:
          "Zagyg the Archmage was famously eccentric to the point of madness. His dungeon inscriptions include jokes, riddles, and pointed philosophical observations about why anyone would be down here in the first place.",
      },
      {
        title: "Nine Flights Down",
        content:
          "Castle Greyhawk's dungeon descends much deeper than its towers ever rose. Adventurers have mapped perhaps a third of it over the years. Nobody has mapped all of it and come back reliably.",
      },
    ],
  },

  // === SESSION 58: The Skeleton Crypts ===
  {
    id: "ch-77",
    session: 58,
    chapter: 77,
    title: "The Skeleton Crypts",
    story:
      "The skeleton level was exactly as advertised: wall-to-wall undead, treasure rooms tucked between crypt alcoves, and traps designed by someone who really wanted people to stop coming down here. The party fought their way through swarms of animated bones while simultaneously committing enthusiastic theft from every chest they passed. Arienh built a wall of stone to seal off one corridor and buy breathing room. Then came the purple sword. It jutted from a stone plinth — beautiful, clearly magical, definitely trapped. Airell grabbed it. Nothing happened. Airell pulled. Nothing moved. The sword was immovable. MK walked over, grabbed the hilt, and pulled it free in one easy motion like it had been waiting for her specifically. Airell stood there for a long moment. Then came the staircase: a Fibonacci-sequence puzzle. Numbers carved into each step had to be solved in order to descend safely. Kellen cracked it, the stairs unlocked, and the party pressed deeper into Castle Greyhawk.",
    imagePrompt:
      "A powerful fighter effortlessly pulling a glowing purple sword from a stone plinth while a shorter companion stares in disbelief, skeleton warriors collapsing around them",
    backgroundImage: "chapter_77.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "The Fibonacci Sequence",
        content:
          "The Fibonacci sequence is a mathematical pattern where each number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13... Zagyg apparently appreciated mathematics. Or wanted to keep out people who didn't.",
      },
      {
        title: "The Sword Chose",
        content:
          "Airell, the party's most magically attuned member, couldn't budge the purple sword. MK, who hits things for a living, pulled it free immediately. Dungeons have opinions about their treasures.",
      },
    ],
  },

  // === SESSION 59: Flicker's Last Mission ===
  {
    id: "ch-78",
    session: 59,
    chapter: 78,
    title: "Flicker's Last Mission",
    story:
      "Kellen stood before a mysterious sealed door in the dungeon's lower reaches. The safe play was to send something expendable through first. She had a new familiar — a replacement for the Flicker who had been lost in Greyhawk's streets. She sent the new Flicker through the door. The door opened. The familiar was shot dead within seconds. Kellen made a sound that could charitably be described as ugly-crying, sat down on the dungeon floor, and refused to move for several minutes. MK described her recurring Iuz dreams in more detail to fill the silence — the demon's army, a king kneeling, a throne built from something she couldn't name. Arienh quietly tested the purple Sword of Betrayers on MK — the blade had no reaction, confirming MK was not currently a betrayer by the sword's reckoning. For the door they'd lost Flicker to, the solution turned out to be balloon packs — improvised magical flotation — and the party's owl, which survived. Barely.",
    imagePrompt:
      "A wizard weeping dramatically on a dungeon floor while her companions look on helplessly, a sealed mystical door glowing ominously behind them",
    backgroundImage: "chapter_78.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Second Flicker",
        content:
          "Kellen named each replacement familiar Flicker. It was both a tribute and a bad habit. The dungeon's hostile architecture had opinions about both.",
      },
      {
        title: "The Sword of Betrayers",
        content:
          "The purple sword reacts to betrayers — those who have turned against their companions or oaths. Arienh's test on MK came back clean. That's either reassuring or means the sword hasn't checked yet.",
      },
    ],
  },

  // === SESSION 60: The Goblin and the Medusa ===
  {
    id: "ch-79",
    session: 60,
    chapter: 79,
    title: "The Goblin and the Medusa",
    story:
      "The next level introduced illusions. A chasm stretched across the floor — Bearienh stepped confidently forward and fell twenty feet before the illusion gave out. Real floor, fake pit, real bruises. A goblin in an immaculate purple suit sprinted past them, dove at a wall, and disappeared through what looked like solid stone — a fake tunnel entrance. Someone was having fun. The party found teleportation circles hidden beneath ornate rugs, and a collection of orreries — mechanical models of the cosmos — that Arienh immediately considered stealing. She stole them. Then came the medusa: a creature so dangerous that looking at her face would turn flesh to stone. MK closed her eyes and fought her by sound alone, trusting instinct and muscle memory. It worked, mostly. Airell finished the job with a clean decapitation. In the chapel beyond, a statue caught MK's attention — a stone figure of a woman who looked exactly like the woman MK privately called her 'memory mom,' a face from before she could remember. No one could explain it.",
    imagePrompt:
      "A warrior fighting with eyes closed against a snake-haired medusa in a torchlit dungeon, a goblin in a purple suit fleeing through an illusory wall in the background",
    backgroundImage: "chapter_79.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Fighting Blind",
        content:
          "Medusas turn creatures to stone with their gaze. The only safe options are mirrors, blindfolds, or extreme confidence in your other senses. MK chose confidence. It is, statistically, not the safest option.",
      },
      {
        title: "The Goblin in Purple",
        content:
          "The well-dressed goblin reappeared throughout the dungeon without explanation, apparently living there, navigating its secrets, and occasionally enjoying the chaos. Nobody ever caught him.",
      },
    ],
  },

  // === SESSION 61: Haazir the Djinn ===
  {
    id: "ch-80",
    session: 61,
    chapter: 80,
    title: "Haazir the Djinn",
    story:
      "Deeper still, the dungeon opened into an aviary — a massive chamber filled with hybrid creatures, part bird and part something else, swooping through artificial updrafts. A secret door at the chamber's far end was wired with a lightning trap that Kellen disarmed with impressive calm. Beyond it waited the lowest floor — and Haazir, a powerful Djinn who regarded the party with the particular patience of someone who has been guarding the same room for several centuries. He wasn't hostile exactly, just uninterested in letting them pass. The walls of his chamber were painted with murals of the Company of Seven, a legendary adventuring group that had explored this dungeon decades ago. Kellen cast Contact Other Plane and reached something extraordinary: Hoapala, a celestial couatl — a feathered serpent of pure goodness — who answered questions about the Godtrap and a sorceress named Tasha with careful precision. The answers were unsettling. Tasha was not a myth. The Godtrap was real. And something was waiting for them at the bottom of the dungeon.",
    imagePrompt:
      "A magnificent blue djinn in swirling robes guards a chamber covered with painted murals of legendary adventurers, a feathered celestial serpent glowing in a magical summoning circle",
    backgroundImage: "chapter_80.jpg",
    animation: ["flickering-fire"],
    funFacts: [
      {
        title: "The Company of Seven",
        content:
          "The Company of Seven were legendary adventurers who explored Castle Greyhawk long before the current party. Their murals appear throughout the deepest levels, suggesting they made it very far — and that something eventually stopped them.",
      },
      {
        title: "Couatls",
        content:
          "Couatls are winged, feathered serpents from the upper planes — among the most purely good creatures in existence. Getting one to answer your questions directly means your cause has passed some kind of moral inspection.",
      },
    ],
  },

  // === SESSION 62: Automaton Chase ===
  {
    id: "ch-81",
    session: 62,
    chapter: 81,
    title: "Automaton Chase",
    story:
      "Rest in a dungeon is never truly restful. The party had barely settled when six iron automatons came clanking down the corridor — mechanical warriors running a patrol protocol that had apparently been set several hundred years ago and never updated. They were relentless, durable, and immune to most of the party's usual tricks. Mornie improvised: she scattered ball bearings across the floor. Three automatons went down in a clanging pile. The others kept coming. Kellen triggered the dimension-door cloaks — magical garments that let the party teleport short distances — and the group blinked to safety while the automatons stumped around looking confused. During the retreat, the goblin in the purple suit shot Arienh with a small crossbow from a gallery above, grinning, then vanished again. The party reached the lowest floor at last. The murals here depicted Zagyg himself — the mad archmage — in a series of elemental adventures: drowning, burning, flying, being buried, surviving all of it through stubbornness and impossible magic.",
    imagePrompt:
      "Six iron automatons clanging across a floor covered in ball bearings, adventurers disappearing through crackling dimension doors, a grinning goblin watching from an upper gallery",
    backgroundImage: "chapter_81.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Ball Bearings",
        content:
          "Ball bearings are a classic adventurer tool: cheap, light, and absurdly effective against anything that walks. Medieval ball bearings are small metal spheres. Modern ones are in every bicycle wheel.",
      },
      {
        title: "Dimension Door Cloaks",
        content:
          "Dimension door cloaks are rare enchanted garments that allow short-range teleportation on command — essentially an emergency exit button. Useful in a dungeon. Useful everywhere, really.",
      },
    ],
  },

  // === SESSION 63: Mirror Kellen ===
  {
    id: "ch-82",
    session: 63,
    chapter: 82,
    title: "Mirror Kellen",
    story:
      "A silver orb in the center of the lowest chamber hummed with barely contained magic. Before anyone could stop her, the orb activated and produced an exact copy of Kellen — same robes, same owl, same slightly distracted expression, and a complete mirror inversion of her alignment. The fight that followed was genuine chaos: nobody could reliably tell which Kellen was which, and both were casting the same spells. The real Kellen solved the problem by trapping mirror-Kellen inside a forcecage — an immovable cube of pure magical force. The duplicate raged silently inside while the real one dusted herself off. The gallery beyond contained Company of Seven portraits with biographical plaques telling the story of how that famous group had slowly fallen apart: betrayal, ambition, divergent goals, the usual heroic tragedy. And there, named in an old portrait, was Tasha — who the plaques identified by another name: Iggwilv. The Witch Queen. Arguably one of the most dangerous people to have ever lived. The couatl Hoapala appeared again to answer final questions. The party was much less comfortable than when they'd started.",
    imagePrompt:
      "Two identical wizards casting spells at each other in a portrait gallery, one trapped inside a glowing magical cube, Company of Seven paintings watching from the walls",
    backgroundImage: "chapter_82.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Iggwilv",
        content:
          "Iggwilv, known as the Witch Queen, is one of the most powerful and feared archmages in the history of the Flanaess. The party learning that Tasha and Iggwilv are the same person is like discovering a new acquaintance is actually the most dangerous person alive.",
      },
      {
        title: "The Forcecage Solution",
        content:
          "A forcecage creates an immovable prison of pure magical force — invisible walls that cannot be broken or phased through by most means. Kellen essentially built an instant magic jail mid-combat. The real Kellen, obviously.",
      },
    ],
  },

  // === SESSION 64: Waking Tasha ===
  {
    id: "ch-83",
    session: 64,
    chapter: 83,
    title: "Waking Tasha",
    story:
      "A teleportation circle at the lowest level carried the party to the Godtrap room — a chamber designed to contain something vast and old. In the center, a mirror held a demon mid-attack, frozen at the moment of impact. A central pillar offered four portal destinations. And against one wall, turned to stone, was a woman. Tasha. Iggwilv. The Witch Queen herself, petrified and waiting. Arienh reversed the petrification and Tasha drew her first breath in years. MK spotted the Demonicon — Tasha's legendary grimoire, the source of her power — and grabbed it. For three seconds MK's eyes went fully black and horns began to rise from her temples before she let go. Tasha was already proposing a deal: she could bind MK's demon heritage, preventing further transformations, and she could remove the scrying glyphs Xendros had placed on the party. The price was future service. As they negotiated, the demon imprisoned in the room's mirror turned its head and looked at Arienh. It whispered: 'She will betray you.'",
    imagePrompt:
      "A powerful sorceress returning to life from stone form, a blonde woman fighter briefly transforming with black eyes and emerging horns while holding an ancient grimoire, a demon watching from inside a mirror",
    backgroundImage: "chapter_83.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Demonicon",
        content:
          "The Demonicon of Iggwilv is one of the most dangerous books ever written — a comprehensive study of demons and the methods to summon and bind them. MK holding it for three seconds was already dangerous.",
      },
      {
        title: "Scrying Glyphs",
        content:
          "Xendros the arcanaloth had placed magical tracking marks on the party — invisible glyphs that allowed remote surveillance. Tasha's offer to remove them would restore the party's privacy for the first time in months.",
      },
    ],
  },

  // === SESSION 65: Zagyg's Tower ===
  {
    id: "ch-84",
    session: 65,
    chapter: 84,
    title: "Zagyg's Tower",
    story:
      "Tasha led them to a nine-sided chamber — the godtrap proper, shaped to match the geometry of divine imprisonment. Then she betrayed them. The walls sealed, magical wards snapped into place, and Tasha's simulacrum — a duplicate made of packed snow and stolen spells — stepped from behind a pillar to watch the party destroy themselves. Mornie rolled a natural twenty and shot the simulacrum directly in the head. It collapsed into slush. Kellen was killed in the chaos that followed, then revived by Arienh before the dust settled. Then the room changed. Zagyg appeared — the mad archmage himself, older than expected, sharper-eyed than his reputation suggested — and offered the truth. MK was a shard of Iuz. Not metaphorically. Literally. The demon prince had been shattered into nine pieces and scattered, and one of those pieces had become MK's identity, her soul, her selfhood. The obelisks dotting the world were anchors. Zagyg explained all of it with the tone of someone who had been waiting to deliver this particular speech for a long time. He gave Kellen a pearl amulet and a new patron to replace the one she had lost. The party walked out of Castle Greyhawk and into a completely different story.",
    imagePrompt:
      "An ancient eccentric archmage in nine-sided chamber delivering revelations to stunned adventurers, a simulacrum of snow collapsing in the background, glowing obelisk imagery on the walls",
    backgroundImage: "chapter_84.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Simulacrums",
        content:
          "A simulacrum is a magical duplicate of a creature, made from ice and snow and shaped by powerful illusion magic. It has half the original's abilities and dissolves when destroyed. Mornie's headshot was extremely satisfying.",
      },
      {
        title: "Shards of a God",
        content:
          "The idea that a demon prince could be broken into nine pieces and scattered as mortal souls is a genuinely terrifying cosmological concept. Each shard lives a life, makes choices, and doesn't know what it is. Until now.",
      },
    ],
  },

  // === SESSION 66: Dreams and Departures ===
  {
    id: "ch-85",
    session: 66,
    chapter: 85,
    title: "Dreams and Departures",
    story:
      "Drawmij, the mysterious wizard who'd been watching the party from a distance for months, finally reached out through dream conversations — speaking directly to MK while she slept. He explained what Zagyg had left incomplete: MK had been created as a memory-clone experiment, a deliberate vessel for Iuz's Memory shard. She wasn't an accident. She was designed. Elsewhere, the party unpetrified Irrik, a figure who had encountered Tasha before his stoning and knew things no one else did — including the location of a Word of Recall scroll that would matter later. Arienh cast scrying on Xendros and caught a glimpse of the arcanaloth in meeting with a shadowy figure named Baedron, whose purpose was unclear and whose name was new. Kellen made contact with the Circle of Eight through careful research and learned that only three of its eight members had survived recent events. The Lord Mayor of Greyhawk, shaken by everything the party had uncovered, asked them to leave the city for a year — not as punishment, but as protection. The city needed time. So did they.",
    imagePrompt:
      "A blonde warrior woman receiving dream communications from a distant wizard, an arcanaloth in secret meeting with a shadowed figure, adventurers departing a great city at dawn",
    backgroundImage: "chapter_85.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Drawmij",
        content:
          "Drawmij is a member of the Circle of Eight — a legendary conclave of archmages dedicated to maintaining balance in the world. His interest in MK is professional, personal, and deeply complicated.",
      },
      {
        title: "Memory Clone",
        content:
          "A memory-clone is a theoretical construct — a being created to carry the memories and identity of another. Discovering you were built for a purpose rather than born for one changes how you understand every choice you've ever made.",
      },
    ],
  },

  // === SESSION 67: The City of Scant ===
  {
    id: "ch-86",
    session: 67,
    chapter: 86,
    title: "The City of Scant",
    story:
      "A month at sea gave everyone time to breathe, argue, heal, and practice skills they'd been neglecting. The destination was Scant, a coastal city perched at the edge of the Pomarj — a tense, politically fractured region where Oeridian traditionalists and Selouise progressives argued constantly about governance, trade, and who really owned what. Airell reached into his pack on day two of the voyage and found his lost bonnet, which had been missing since a heist three sessions ago. He put it on and felt immediately better about everything. Scant itself was a city of layered intrigue: Kellen spent long hours in the lighthouse archives researching anything connected to Bigby, a legendary archmage she suspected was in the city. Mornie made contact with a spy named Aelar at a tavern called the Sturdy Spruce — a cheerful name for a place full of people with secrets. The news from Aelar was inconvenient: Bigby had a reputation for paranoia and only left the lighthouse once a month, on a schedule nobody could predict.",
    imagePrompt:
      "A coastal city of towers and political tension, an elf adjusting a battered bonnet with evident satisfaction, a ranger meeting a spy at a weathered tavern",
    backgroundImage: "chapter_86.jpg",
    animation: ["waves"],
    funFacts: [
      {
        title: "Bigby",
        content:
          "Bigby is one of the most famous archmages in history, best known for inventing a series of hand-shaped force spells. Bigby's Hand, Bigby's Crushing Grasp, and others all bear his name. He is extremely powerful and famously difficult to meet.",
      },
      {
        title: "The Lost Bonnet",
        content:
          "Airell's bonnet is a personal talisman — a battered piece of headwear that functions as a focus for his magic and his identity. Finding it again after weeks was, for Airell, genuinely emotional.",
      },
    ],
  },

  // === SESSION 68: Meeting Bigby ===
  {
    id: "ch-87",
    session: 68,
    chapter: 87,
    title: "Meeting Bigby",
    story:
      "A storm rolled in the night the party decided to approach the lighthouse. They swam and walked through driving rain to reach the door, led by a local guide named Aerie who claimed she could get them inside. She did. Bigby was waiting in his study, surrounded by stacked research notes and the particular energy of a man who has been interrupted by visitors before and never liked it. When he saw MK, he went very still. He recognized what she was — or rather, recognized the shard inside her. He named all six shards of Iuz he knew of, placing MK in a cosmological context that made her feel simultaneously more significant and more terrified. Iuz's Memory. Then Aerie stabbed Mornie in the back. It was a trap — Aerie had been working for someone else all along. Before anyone could fully process this, the door burst open and Nenredhe arrived with a force of armed followers. The lighthouse exploded into chaos.",
    imagePrompt:
      "A legendary elderly archmage staring in stunned recognition at a blonde warrior woman, a trusted guide turning a blade on a surprised ranger, armed forces breaking through the lighthouse door",
    backgroundImage: "chapter_87.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Six Shards",
        content:
          "Iuz was broken into pieces that became living souls. Each shard represents an aspect of the demon prince — Memory, Strength, and others. Finding them all is the kind of quest that reshapes the entire world.",
      },
      {
        title: "Trust in Dungeons and Dragons",
        content:
          "A trusted NPC guide betraying the party is one of the oldest storytelling moves in tabletop games. It works because players want to trust people. The blade in the back is always a surprise, even when it probably shouldn't be.",
      },
    ],
  },

  // === SESSION 69: The Lighthouse Falls ===
  {
    id: "ch-88",
    session: 69,
    chapter: 88,
    title: "The Lighthouse Falls",
    story:
      "The battle inside the lighthouse was enormous and messy. Spells flew in every direction, walls cracked, and Bigby — cornered and desperate — threw a fireball that hit practically everyone in the room, friend and foe alike. He died in the chaos, and his Strength shard tore free from his body and launched itself skyward, growing as it rose until a sixty-foot fire demon blazed above the ocean, roaring at the storm clouds. The party chased it into the sea. The battle continued in the waves, swords and spells against a towering elemental thing born from a broken god. Arienh was struck down beneath the water. Mornie, still bleeding from Aerie's blade, ripped the revivification ring from her own hand and pressed it to Arienh. She breathed again. The fire demon eventually collapsed into the sea in a hiss of steam. Behind them, the lighthouse groaned and fell into the ocean in pieces. Nenredhe's forces scattered. The party floated in the dark water, exhausted, victorious, and very wet.",
    imagePrompt:
      "A sixty-foot fire demon rising from the ocean during a storm, adventurers fighting in the crashing waves below, a great lighthouse crumbling into the sea behind them",
    backgroundImage: "chapter_88.jpg",
    animation: ["storm"],
    funFacts: [
      {
        title: "The Revivification Ring",
        content:
          "A ring of revivification is a single-use magic item — it brings one creature back from death, then the magic is spent. Mornie giving hers to Arienh in the middle of combat is the kind of move that defines friendships.",
      },
      {
        title: "The Strength Shard",
        content:
          "Bigby's shard was Strength — which is why he was one of the most powerful archmages in history. Power that large, released all at once, becomes something elemental and dangerous before it dissipates.",
      },
    ],
  },

  // === SESSION 70: Adrift ===
  {
    id: "ch-89",
    session: 70,
    chapter: 89,
    title: "Adrift",
    story:
      "The party flew home on owls through the pouring rain, soaked and processing what had just happened. That night, Drawmij appeared in Airell's dreams again — professional, focused, asking for a full debrief. Airell gave it. Drawmij asked one practical question: did they retrieve Nenredhe's head? They had not. Airell swam back through a fleet of anchored ships at dawn to retrieve it from the wreckage, navigating hostile patrols and very cold water. He returned with the head. Reunited aboard the Falling Star, the party took stock. Then the captain reported a stowaway: Hareed, a man who had been living quietly in the cargo hold for three days and seemed annoyed to be discovered. A dragon turtle had also been spotted in the nearby shipping lanes — massive, old, and methodically attacking merchant vessels. Everyone agreed to deal with Hareed before the dragon turtle. Only slightly before.",
    imagePrompt:
      "An elf swimming through rainy seas past warships to retrieve something from the water, adventurers reuniting aboard a sailing vessel, a massive turtle-dragon shape visible beneath dark waves",
    backgroundImage: "chapter_89.jpg",
    animation: ["rain", "ship-rocking"],
    funFacts: [
      {
        title: "Dragon Turtles",
        content:
          "Dragon turtles are among the most dangerous creatures in any ocean — part dragon, part turtle, entirely lethal. They breathe scalding steam instead of fire. Merchant ships encountering one rarely get to report it.",
      },
      {
        title: "The Dream Debrief",
        content:
          "Drawmij's dream communication technique is rare and difficult magic. That he uses it for intelligence debriefs suggests he considers the party important enough to spend significant magical resources monitoring.",
      },
    ],
  },

  // === SESSION 71: Hareed's Deal ===
  {
    id: "ch-90",
    session: 71,
    chapter: 90,
    title: "Hareed's Deal",
    story:
      "Hareed, extracted from the cargo hold and given something to eat, was remarkably forthcoming once it became clear that evasion wasn't working. He and Nenredhe had been partners for years — a fact he revealed with the particular tone of someone admitting to a past they're not proud of. His current goal was ambitious: he wanted to take the Hold of the Sea Princes, a nation built on piracy and exploitation, and deliver it to the Scarlet Brotherhood as a power base. In exchange for the party's help, he was offering access to the Tower of the Eye — a place they very much needed to reach. The deal was unappealing but tactically sound. While the adults argued politics, MK gathered the Falling Star's crew on deck and told them the full story of the fire demon battle in the ocean — gesturing broadly, imitating roaring flames, clearly enjoying the telling. The crew listened in rapt silence. The vote to trust Hareed, when it came, was not unanimous, but it was enough.",
    imagePrompt:
      "A weathered rogue explaining his ambitious plans to skeptical adventurers aboard a ship, while a blonde warrior woman tells dramatic battle stories to an enthralled crew on deck",
    backgroundImage: "chapter_90.jpg",
    animation: ["ship-rocking"],
    funFacts: [
      {
        title: "The Hold of the Sea Princes",
        content:
          "The Hold of the Sea Princes is a coastal nation built on centuries of piracy and the slave trade. It is not well-governed. The Scarlet Brotherhood wanting to control it is concerning for different but related reasons.",
      },
      {
        title: "MK the Storyteller",
        content:
          "MK's battle recounting is a tradition — after major encounters, she tells the story to whoever will listen, usually with significant dramatic embellishment. The crew of the Falling Star loves it.",
      },
    ],
  },

  // === SESSION 72: The Grimoire's Price ===
  {
    id: "ch-91",
    session: 72,
    chapter: 91,
    title: "The Grimoire's Price",
    story:
      "Mornie had been carrying the Grimoire of the Deep since the events in the Styes, and she finally decided to read it. She sat down with the ancient text, opened to the first page, and proceeded to go completely catatonic. She sat motionless for hours, breathing but entirely absent — whatever the book had done to her mind, it had done it thoroughly. A Greater Restoration spell eventually brought her back, pale and shaken and very reluctant to describe what she'd seen. That night, Arienh dreamed of a woman she'd never met who was clearly responsible for her parents' deaths — a face with no name, burned into her memory. Hareed, apparently, had been busy while they processed all this: he reappeared at a Scant bathhouse with a new plan involving infiltration and a stolen chalice he'd already acquired. Arienh cast an augury spell to evaluate the choice of working with him. The cosmic response was weal — better than not. The party accepted. Arienh read the Grimoire herself afterward, braced for the worst. She came out of it unsettled but functional. Some people just have better defenses.",
    imagePrompt:
      "A ranger sitting catatonic and glassy-eyed over an ancient open book while her companions look on in alarm, a healer casting restorative magic, storm lanterns swaying overhead",
    backgroundImage: "chapter_91.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "The Grimoire of the Deep",
        content:
          "The Grimoire of the Deep is not just a book — it is a repository of knowledge that actively resists being read by minds not prepared for it. Mornie's catatonia was the book making its opinion clear.",
      },
      {
        title: "Augury",
        content:
          "Augury is a divination spell that consults cosmic forces about a proposed action. The response is weal (good), woe (bad), weal and woe (complicated), or nothing (unknowable). Getting weal from Hareed's plan is the universe damning with faint praise.",
      },
    ],
  },

  // === SESSION 73: Into the Brotherhood ===
  {
    id: "ch-92",
    session: 73,
    chapter: 92,
    title: "Into the Brotherhood",
    story:
      "Airell and Kellen posed as an engaged couple to extract a sage's magical research notes, deploying the full weight of Airell's charm and Kellen's willingness to pretend she found him interesting. The notes were obtained without paying. Arienh read the Grimoire a second time — still unsettled, still no headache, still refusing to explain what she saw. Three thieves named Rath, Anselme, and Tiren joined the crew on a trial basis, reluctant and suspicious of everyone. A valuable statue was lifted from the Sage's collection. The stolen chalice was retrieved. Quietly, this was also the three-year anniversary of the party coming together in Saltmarsh — three years of marshes and sea battles and demon princes and lighthouse explosions. Nobody mentioned it aloud. They arrived at Kro Terlep wearing number collars — the Scarlet Brotherhood used them to mark the worth of their contacts — and presented themselves as people with something to sell. The Brotherhood was listening.",
    imagePrompt:
      "An elf and wizard posing as a couple charming a nervous scholar, three reluctant thieves being interviewed by a ranger, ships arriving at a fortified Brotherhood port wearing identification collars",
    backgroundImage: "chapter_92.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Three Years",
        content:
          "Three years of adventuring together means the party has survived dozens of encounters that should have killed them, changed the political landscape of multiple regions, and grown from a group of strangers into something that doesn't have a clean name.",
      },
      {
        title: "Number Collars",
        content:
          "The Scarlet Brotherhood assigns numerical ratings to people they deal with — a coldly transactional system where your value is literally worn around your neck. Nobody in the party liked wearing them.",
      },
    ],
  },

  // === SESSION 74: Escape from Kro Terlep ===
  {
    id: "ch-93",
    session: 74,
    chapter: 93,
    title: "Escape from Kro Terlep",
    story:
      "The negotiations in Kro Terlep went almost immediately sideways. The Brotherhood offered one hundred thousand gold pieces for the Falling Star's registration paperwork — a price that meant they wanted the ship's legitimate identity more than they wanted the ship. Kellen tried to banish a Brotherhood bodyguard as a negotiating point. She received daggers in the chest in response. The Brotherhood's counter-offer was less of an offer and more of a threat. The party went invisible and ran. Getting out with forty crew members still alive required a nine-success skill challenge — the kind of coordinated effort where every person does exactly the right thing at exactly the right time. Arienh coordinated the barracks extraction. MK cleared the gate. Mornie handled the docks. Wyverns launched from the harbor. Brotherhood ships cut off the sea lanes. The Falling Star made it to open water with her crew intact and two very large flying lizards in pursuit.",
    imagePrompt:
      "A party of invisible adventurers coordinating a mass rescue from fortified Brotherhood barracks, wyverns launching from harbor towers, a sailing ship breaking through naval blockade",
    backgroundImage: "chapter_93.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Skill Challenges",
        content:
          "A skill challenge is a structured encounter where the party needs to succeed on a set number of ability checks before accumulating too many failures. Nine successes for a mass crew extraction is an extremely high bar.",
      },
      {
        title: "Wyverns",
        content:
          "Wyverns are two-legged dragon relatives with a poisoned stinger in their tail. They are faster than sailing ships, don't get tired, and have no opinion on weather. The Brotherhood keeps them specifically for pursuit.",
      },
    ],
  },

  // === SESSION 75: Breaking Through ===
  {
    id: "ch-94",
    session: 75,
    chapter: 94,
    title: "Breaking Through",
    story:
      "The Brotherhood had a river blockade: a chain stretched across the waterway with a fortified cannon-ship anchored in the middle. The party developed a plan in the fifteen minutes they had before contact. Kellen and MK flew invisible above the cannon-ship, targeting the artillery before it could fire. Airell went aboard alone with nothing but his wits and a head start. Mornie climbed to the ship's rail and fought a wyvern bare-handed over open water, refusing to be knocked off the side. The chain itself was the real obstacle — strong enough to stop the hull and thick enough to resist most cutting tools. Arienh went into the water, reached underneath the chain, and lifted. The water surged. The chain came up. The Falling Star passed over it at full sail. The cannon-ship's surviving crew stared as the blockade simply ceased to be. The Falling Star hit open sea at speed, with Brotherhood ships in pursuit and the wind finally, mercifully in her favor.",
    imagePrompt:
      "A druid lifting a massive chain from beneath the river while a sailing ship passes overhead, a ranger fighting a wyvern on the ship's railing, two invisible figures destroying cannons above a warship",
    backgroundImage: "chapter_94.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Chain Blockades",
        content:
          "River chain blockades were a real historical naval tactic — a heavy chain suspended across a waterway at surface level could stop or damage ships attempting to pass. Lifting one from underwater is not the intended countermeasure.",
      },
      {
        title: "Mornie vs. Wyvern",
        content:
          "Mornie is a ranger — trained in tracking, archery, and wilderness survival. Fighting a wyvern with her bare hands on a ship's railing was not in any ranger training manual. She won anyway.",
      },
    ],
  },

  // === SESSION 76: After the Storm ===
  {
    id: "ch-95",
    session: 76,
    chapter: 95,
    title: "After the Storm",
    story:
      "Fourteen of the forty rescued crew were dead by the time the Falling Star cleared Brotherhood waters. Arienh moved through the ship methodically, triaging the wounded by severity, using every healing spell and potion she had. Fourteen. She knew all their names by the third day. MK's aquatic companions — creatures she had befriended in deeper waters during earlier adventures — surfaced near the ship and rejoined her, swimming alongside in formation. Mornie sat quietly with the two captured wyverns, not restraining them, just present. By the second day, she could read their moods. By the third, she had extracted useful tactical information about Brotherhood patrol routes from their recent memories. The wyverns were still circling the ship's masts at week's end, neither free nor imprisoned, apparently deciding. The ship needed repairs that would take days. The crew needed time that would take longer.",
    imagePrompt:
      "A healer moving through a damaged ship tending to the wounded, a ranger communicating with two circling wyverns on the mast, aquatic creatures swimming in formation alongside the vessel",
    backgroundImage: "chapter_95.jpg",
    animation: ["ship-rocking"],
    funFacts: [
      {
        title: "Animal Empathy",
        content:
          "Mornie's ability to read and communicate with animals extends even to creatures that tried to kill her recently. Wyverns are not domesticated — her rapport with them is a genuine magical talent.",
      },
      {
        title: "The Cost",
        content:
          "Fourteen deaths out of forty rescued is a success by rescue mission metrics. It doesn't feel like one. Arienh knowing every name is her way of refusing to let the math replace the people.",
      },
    ],
  },

  // === SESSION 77: Grimoire at Sea ===
  {
    id: "ch-96",
    session: 77,
    chapter: 96,
    title: "Grimoire at Sea",
    story:
      "The dog-headed warriors came over the rails without warning — Bosok'shar, servants of the Father of Obedience, boarding in numbers that suggested the Brotherhood had called in a debt. Arienh went over the side with the Grimoire clutched to her chest and transformed into a giant octopus in the water — eight arms, ink, and the full weight of the ocean as a defensive perimeter. Kellen went in after her as a giant shark, circling to guard the perimeter. On the deck above, MK's demon heritage broke its restraints. She went full transformation — eyes black, horns out, power radiating off her skin — and rained destruction across the boarding party. It was overwhelming and terrifying and extremely effective. Tiren was killed in the melee, then revivified by Arienh before permanent damage set in. The Bosok'shar attack was breaking when a new figure appeared on the deck: the Voice of the Father of Obedience, composed and polite, offering a truce.",
    imagePrompt:
      "A giant octopus clutching an ancient book beneath the ocean waves while a shark guards the perimeter, a blonde warrior woman in full demonic transformation defending a ship's deck against dog-headed warriors",
    backgroundImage: "chapter_96.jpg",
    animation: ["lightning"],
    funFacts: [
      {
        title: "Wildshape Extremes",
        content:
          "Druids in wildshape retain their mental faculties but gain the physical form of the chosen creature. Arienh as a giant octopus guarding an ancient grimoire in open ocean is one of the more creative defensive strategies the party has attempted.",
      },
      {
        title: "The Father of Obedience",
        content:
          "The Father of Obedience leads the Scarlet Brotherhood's enforcement arm — a figure of immense authority within the organization. Sending his Voice rather than coming personally means the Brotherhood considers this a negotiation, not an execution.",
      },
    ],
  },

  // === SESSION 78: The Father of Obedience ===
  {
    id: "ch-97",
    session: 78,
    chapter: 97,
    title: "The Father of Obedience",
    story:
      "The formal meeting happened back in Kro Terlep, arranged by the Voice's truce. The Father of Obedience sat across the table — older than expected, more controlled than anyone that dangerous has a right to be. Beside him sat Inzarne: a name Arienh recognized from years of private research. Inzarne had murdered her parents. She was sitting eight feet away and smiling pleasantly. Hareed was there too, damaged and pale, evidence of what the Brotherhood did to partners who failed. The Grimoire nearly enslaved the Father mid-meeting — it activated on its own, reaching for the most powerful mind in the room. Inzarne attacked. Fire elementals burst from nowhere. Shadow copies of each party member peeled off the walls and joined the fight. The Father escaped through a prepared ward. His Voice pulled the party out via emergency teleportation to the Tower of the Eye — apparently a relocation both sides found acceptable, for completely different reasons.",
    imagePrompt:
      "A tense formal meeting erupting into chaos as fire elementals appear, shadow-copies battle their originals, and a scarred noblewoman attacks across a conference table",
    backgroundImage: "chapter_97.jpg",
    animation: ["battle-shake"],
    funFacts: [
      {
        title: "Shadow Copies",
        content:
          "Magical shadow duplicates are illusions given temporary substance — they mimic their originals' combat style, which means the party had to fight versions of themselves that knew all their moves.",
      },
      {
        title: "A Face and a Name",
        content:
          "Arienh had been searching for the person responsible for her parents' deaths for years. Finally having a name and a face sitting across a table was the kind of moment that reorders everything — the question was no longer who, but when.",
      },
    ],
  },

  // === SESSION 79: Tower of the Eye ===
  {
    id: "ch-98",
    session: 79,
    chapter: 98,
    title: "Tower of the Eye",
    story:
      "The teleportation deposited them inside the Tower of the Eye, which was not in good condition. The Bosok'shar stationed there had gone berserk — something had driven the dog-headed warriors into a frenzy, and the blood on the walls suggested it had been going on for a while. The party fought through the remaining creatures floor by floor. Arienh located the Grimoire copies using her detection magic — the Brotherhood had been duplicating the book, which explained a great deal about how their power had grown so quickly. She burned them all. The copies went to ash one by one. Loh-zerhith, a Brotherhood commander they'd encountered before, was killed in a room sealed by magical silence, surrounded by the evidence of her work. Then Inzarne returned. She was faster and angrier than before, and the fight was tight. Arienh finished it with fire — a sustained blast that melted Inzarne's face. It was not a clean ending. It was an ending. The party wind-walked out of the tower toward the sea.",
    imagePrompt:
      "A druid burning a collection of ancient books while a ranger strikes down a Brotherhood commander, fire consuming forbidden copies, adventurers wind-walking out through a tower window toward the ocean",
    backgroundImage: "chapter_98.jpg",
    animation: ["fire"],
    funFacts: [
      {
        title: "Grimoire Copies",
        content:
          "If one Grimoire of the Deep could drive a ranger catatonic, a library of copies represents an exponential threat. The Brotherhood had been using them systematically. Burning the copies was necessary and deeply satisfying.",
      },
      {
        title: "Wind Walk",
        content:
          "Wind walk transforms the caster and companions into gaseous forms that travel at extraordinary speed — hundreds of miles in hours. As an escape route from a hostile tower, it is essentially unchallengeable.",
      },
    ],
  },

  // === SESSION 80: Into the Wind ===
  {
    id: "ch-99",
    session: 80,
    chapter: 99,
    title: "Into the Wind",
    story:
      "They wind-walked west from Ekul at speed, barely corporeal, trading altitude for distance as the Brotherhood's eastern holdings shrank behind them. The Voice of Obedience departed with the tower's forbidden books collected under his arm — he had, apparently, his own agenda that overlapped with the party's on this one point. The party flew north to a quiet cove, reassembled into solid bodies, and sat with the water for a while. That night, Arienh's nightmare returned: Iuz spreading like darkness across a map, allies falling silent one by one, a horizon that was simply absence. She didn't tell anyone what she'd seen until morning. When she did, nobody dismissed it. The crew of the Falling Star found them by midday — the ship had been following their projected course, and the reunion on the shore involved a great deal of shouting and at least one person crying who claimed not to be crying. The party was whole again. What came next was unclear. It was always unclear.",
    imagePrompt:
      "Translucent gaseous forms flying high above a coastline, adventurers solidifying in a peaceful cove, a ship appearing on the horizon to reunite with her crew",
    backgroundImage: "chapter_99.jpg",
    animation: ["none"],
    funFacts: [
      {
        title: "Iuz the Evil",
        content:
          "Iuz is a demigod of evil — literally half-human, half-demon — who rules a nation of cruelty and darkness. His spreading influence in Arienh's dreams is not metaphorical. He is actively expanding across the Flanaess.",
      },
      {
        title: "Reunions",
        content:
          "The Falling Star's crew has followed the party through two naval battles, a pirate encounter, a Brotherhood blockade, and a wyvern attack. At this point they are not just hired sailors. They are in on it.",
      },
    ],
  },

  // === SESSION 81: Richfest and the Dragon Turtle ===
  {
    id: "ch-100",
    session: 81,
    chapter: 100,
    title: "Richfest and the Dragon Turtle",
    story:
      "Richfest is a week of summer festival celebrated across the Flanaess, and Gryrax — a proudly dwarven city with excellent stonework and extremely competitive athletic traditions — throws the best version of it anyone has ever attended. The party arrived in time for the trials. MK entered everything. She won the sprint. She won the barrel race. She placed third overall in the combined standings, which she was loudly and cheerfully unhappy about. Kord's priests presented her with gold arm cuffs engraved with the athletic symbols of the god of strength — an honor almost no one receives. Kellen sold the wizard's statue they'd been hauling around for eighty gold pieces, which barely covered the trouble they'd had carrying it. Airell discovered that twelve of the Falling Star's crew had formed a small theft ring called 'the Hands of Airell,' using techniques they'd observed and half-understood from watching him work. He was horrified. He was also, clearly, a little bit proud. He agreed to teach them properly. In the Tilva Strait, a massive shape surfaced near the ship — a dragon turtle, ancient and enormous, that watched the ship with focused intelligence. Then it climbed aboard. It was a man. The man had questions.",
    imagePrompt:
      "A blonde warrior woman celebrating an athletic victory wearing gold arm cuffs at a dwarven festival, a dragon turtle transforming into a human figure stepping onto a ship's deck in open water",
    backgroundImage: "chapter_100.jpg",
    animation: ["celebration"],
    funFacts: [
      {
        title: "Richfest",
        content:
          "Richfest is the midsummer festival in the Greyhawk calendar — a week of games, feasting, and competition that falls between the sixth and seventh months. Athletic trials during Richfest are taken seriously. Very seriously.",
      },
      {
        title: "The Hands of Airell",
        content:
          "A crew theft ring named after their idol, using techniques they'd reverse-engineered from watching him. Airell's response — horrified pride followed by agreeing to teach them — is one of the most Airell things Airell has ever done.",
      },
    ],
  },
];

export const storyArcs = [
  { name: "The Danger at Dunwater", startChapter: 1, endChapter: 10 },
  { name: "The Free City of Saltmarsh", startChapter: 11, endChapter: 33 },
  { name: "The Scarlet Brotherhood", startChapter: 34, endChapter: 47 },
  { name: "The Eye in the Deep", startChapter: 48, endChapter: 67 },
  { name: "Greyhawk Bound", startChapter: 68, endChapter: 73 },
  { name: "Castle Greyhawk", startChapter: 74, endChapter: 84 },
  { name: "The Watchers of Oblivion", startChapter: 85, endChapter: 100 },
];
