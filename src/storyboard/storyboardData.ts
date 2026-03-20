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
    backgroundImage: "chapter_1.png",
    animation: "fog",
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
    backgroundImage: "chapter_2.png",
    animation: "ship-rocking",
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
    backgroundImage: "chapter_3.png",
    animation: "fog",
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
    backgroundImage: "chapter_4.png",
    animation: "none",
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
    backgroundImage: "chapter_5.png",
    animation: "storm",
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
    backgroundImage: "chapter_6.png",
    animation: "battle-shake",
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
    backgroundImage: "chapter_7.png",
    animation: "battle-shake",
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
    backgroundImage: "chapter_8.png",
    animation: "fire",
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
    backgroundImage: "chapter_9.png",
    animation: "celebration",
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
    backgroundImage: "chapter_10.png",
    animation: "ship-rocking",
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
    backgroundImage: "chapter_11.png",
    animation: "celebration",
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
    backgroundImage: "chapter_12.png",
    animation: "battle-shake",
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
    backgroundImage: "chapter_13.png",
    animation: "fog",
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
    backgroundImage: "chapter_14.png",
    animation: "ship-rocking",
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
    backgroundImage: "chapter_15.png",
    animation: "fog",
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
    backgroundImage: "chapter_16.png",
    animation: "none",
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
    backgroundImage: "chapter_17.png",
    animation: "lightning",
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
    backgroundImage: "chapter_18.png",
    animation: "fireworks",
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
];
