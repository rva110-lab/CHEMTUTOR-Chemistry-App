// ============================================================
// CHEM//TUTOR
// Offline Chemistry Learning App
// ============================================================

let currentGrade = 11;
let currentTopic = null;
let currentCard = 0;
let showingAnswer = false;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;


// ============================================================
// CHEMISTRY CONTENT
// ============================================================

const chemistry = {

11: [

{
title: "Some Basic Concepts of Chemistry",
description: "Mole concept, molar mass, concentration and calculations.",
lesson: {
simple: "Chemistry is basically the study of matter and how matter changes.",
sections: [
["What is a mole?",
"A mole is a counting unit. Just like a dozen means 12 objects, one mole means 6.022 × 10²³ particles."],
["Molar Mass",
"Molar mass is the mass of one mole of a substance. For water, H₂O = 2(1) + 16 = 18 g/mol."],
["Concentration",
"Concentration tells us how much solute is present in a certain amount of solution."],
["Memory Trick",
"Think: MOLE = chemistry's giant counting box."]
]
},
cards: [
["What is a mole?", "6.022 × 10²³ particles."],
["What is molar mass?", "Mass of one mole of a substance."],
["What is Avogadro's number?", "6.022 × 10²³."]
],
quiz: [
["How many particles are in one mole?", ["6.022 × 10²³", "1000", "6.022", "3.14"], 0],
["Molar mass of H₂O is:", ["16 g/mol", "18 g/mol", "20 g/mol", "2 g/mol"], 1]
]
},

{
title: "Structure of Atom",
description: "Particles, atomic number, mass number and electronic structure.",
lesson: {
simple: "Atoms are the tiny building blocks that make up matter.",
sections: [
["Subatomic Particles",
"Protons have positive charge, electrons have negative charge, and neutrons have no charge."],
["Atomic Number",
"Atomic number = number of protons in an atom."],
["Mass Number",
"Mass number = number of protons + number of neutrons."],
["Easy Example",
"Carbon has 6 protons and 6 neutrons. Its atomic number is 6 and mass number is 12."]
]
},
cards: [
["What is atomic number?", "Number of protons."],
["Charge of an electron?", "Negative."],
["Mass number?", "Protons + neutrons."]
],
quiz: [
["Which particle has a negative charge?", ["Proton", "Neutron", "Electron", "Nucleus"], 2],
["Carbon has atomic number:", ["4", "6", "8", "12"], 1]
]
},

{
title: "Classification of Elements",
description: "Periodic table, groups, periods and periodic trends.",
lesson: {
simple: "The periodic table organizes elements according to their atomic structure and properties.",
sections: [
["Groups",
"Vertical columns in the periodic table are called groups."],
["Periods",
"Horizontal rows are called periods."],
["Atomic Radius",
"Atomic radius generally decreases across a period and increases down a group."],
["Ionization Energy",
"Ionization energy is the energy needed to remove an electron from an isolated gaseous atom."]
]
},
cards: [
["Vertical columns are called?", "Groups."],
["Horizontal rows are called?", "Periods."],
["What is ionization energy?", "Energy required to remove an electron."]
],
quiz: [
["Vertical columns are called:", ["Periods", "Groups", "Blocks", "Series"], 1]
]
},

{
title: "Chemical Bonding",
description: "Ionic bonds, covalent bonds, Lewis structures and hybridization.",
lesson: {
simple: "Atoms form chemical bonds because bonded arrangements are often more stable.",
sections: [
["Ionic Bond",
"An ionic bond forms mainly through transfer of electrons and attraction between oppositely charged ions."],
["Covalent Bond",
"A covalent bond involves sharing of electrons between atoms."],
["Electronegativity",
"Electronegativity describes how strongly an atom attracts shared electrons."],
["Memory Trick",
"IONIC = transfer. COVALENT = sharing."]
]
},
cards: [
["Ionic bond?", "Electron transfer followed by electrostatic attraction."],
["Covalent bond?", "Sharing of electrons."],
["Electronegativity?", "Ability to attract shared electrons."]
],
quiz: [
["NaCl mainly contains:", ["Covalent bonding", "Ionic bonding", "Metallic bonding", "No bonding"], 1]
]
},

{
title: "Thermodynamics",
description: "Heat, work, enthalpy, entropy and Gibbs energy.",
lesson: {
simple: "Thermodynamics studies energy changes during physical and chemical processes.",
sections: [
["System and Surroundings",
"The system is the part we are studying. Everything outside it is the surroundings."],
["Enthalpy",
"Enthalpy change tells us about heat change at constant pressure."],
["Entropy",
"Entropy is related to the dispersal or randomness of energy and matter."],
["Gibbs Energy",
"Gibbs energy helps us determine whether a process is thermodynamically favourable under specified conditions."]
]
},
cards: [
["What does thermodynamics study?", "Energy changes."],
["What is enthalpy?", "A thermodynamic quantity related to heat at constant pressure."],
["What is entropy?", "A measure related to energy/matter dispersal."]
],
quiz: [
["Thermodynamics mainly deals with:", ["Energy", "Only colour", "Only density", "Only atoms"], 0]
]
},

{
title: "Equilibrium",
description: "Chemical equilibrium, Le Chatelier's principle and equilibrium constants.",
lesson: {
simple: "Chemical equilibrium happens when forward and reverse reactions occur at equal rates.",
sections: [
["Dynamic Equilibrium",
"At equilibrium, reactions do not stop. Forward and reverse reactions continue at equal rates."],
["Equilibrium Constant",
"K describes the relationship between concentrations of products and reactants at equilibrium."],
["Le Chatelier's Principle",
"When an equilibrium system is disturbed, it tends to shift in a direction that opposes the disturbance."],
["Important",
"Equilibrium does NOT mean equal concentrations."]
]
},
cards: [
["Does equilibrium mean reactions stop?", "No. Both directions continue."],
["What is K?", "Equilibrium constant."],
["Le Chatelier principle?", "System shifts to oppose a disturbance."]
],
quiz: [
["At equilibrium, forward and reverse rates are:", ["Equal", "Zero", "Always increasing", "Unrelated"], 0]
]
},

{
title: "Redox Reactions",
description: "Oxidation, reduction, oxidation numbers and electron transfer.",
lesson: {
simple: "Redox reactions involve transfer of electrons.",
sections: [
["Oxidation",
"Oxidation is loss of electrons."],
["Reduction",
"Reduction is gain of electrons."],
["Memory Trick",
"OIL RIG = Oxidation Is Loss, Reduction Is Gain."],
["Oxidizing Agent",
"An oxidizing agent causes oxidation and itself undergoes reduction."]
]
},
cards: [
["Oxidation?", "Loss of electrons."],
["Reduction?", "Gain of electrons."],
["OIL RIG?", "Oxidation Is Loss, Reduction Is Gain."]
],
quiz: [
["Reduction involves:", ["Loss of electrons", "Gain of electrons", "Loss of neutrons", "Gain of protons"], 1]
]
},

{
title: "Organic Chemistry Basics",
description: "Functional groups, nomenclature, electronic effects and reaction basics.",
lesson: {
simple: "Organic chemistry mainly studies carbon compounds.",
sections: [
["Carbon",
"Carbon forms a huge number of compounds because it can form strong covalent bonds and bond with itself."],
["Functional Group",
"A functional group is an atom or group of atoms responsible for characteristic chemical behaviour."],
["Electrophile",
"An electrophile is an electron-deficient species that can accept an electron pair."],
["Nucleophile",
"A nucleophile is an electron-rich species that can donate an electron pair."]
]
},
cards: [
["What is a functional group?", "A group responsible for characteristic chemical behaviour."],
["Electrophile?", "Electron-pair acceptor."],
["Nucleophile?", "Electron-pair donor."]
],
quiz: [
["A nucleophile is generally:", ["Electron rich", "Electron deficient", "A neutron", "Always positive"], 0]
]
},

{
title: "Hydrocarbons",
description: "Alkanes, alkenes, alkynes and aromatic hydrocarbons.",
lesson: {
simple: "Hydrocarbons contain only carbon and hydrogen.",
sections: [
["Alkanes",
"Alkanes contain only single carbon-carbon bonds."],
["Alkenes",
"Alkenes contain at least one carbon-carbon double bond."],
["Alkynes",
"Alkynes contain at least one carbon-carbon triple bond."],
["Aromatic Compounds",
"Benzene is the classic example of an aromatic hydrocarbon."]
]
},
cards: [
["Alkanes contain?", "Only single C–C bonds."],
["Alkenes contain?", "At least one C=C bond."],
["Alkynes contain?", "At least one C≡C bond."]
],
quiz: [
["Which contains a triple bond?", ["Alkane", "Alkene", "Alkyne", "Alcohol"], 2]
]
}

],


12: [

{
title: "Solutions",
description: "Concentration, solubility, colligative properties and related calculations.",
lesson: {
simple: "A solution is a homogeneous mixture of two or more components.",
sections: [
["Solute",
"The solute is the component that is dissolved."],
["Solvent",
"The solvent is the component that dissolves the solute."],
["Molarity",
"Molarity = moles of solute / volume of solution in litres."],
["Molality",
"Molality = moles of solute / mass of solvent in kilograms."]
]
},
cards: [
["Solute?", "The substance being dissolved."],
["Solvent?", "The substance doing the dissolving."],
["Molarity?", "Moles of solute per litre of solution."]
],
quiz: [
["Molarity uses volume in:", ["kg", "litres", "grams", "moles"], 1]
]
},

{
title: "Electrochemistry",
description: "Redox reactions, cells, electrode potential and electrolysis.",
lesson: {
simple: "Electrochemistry connects chemical reactions with electrical energy.",
sections: [
["Galvanic Cell",
"A galvanic cell converts chemical energy into electrical energy through a spontaneous redox reaction."],
["Oxidation",
"Oxidation occurs at the anode."],
["Reduction",
"Reduction occurs at the cathode."],
["Memory Trick",
"AN OX, RED CAT = Anode Oxidation, Reduction Cathode."]
]
},
cards: [
["Oxidation occurs at?", "Anode."],
["Reduction occurs at?", "Cathode."],
["AN OX RED CAT?", "Anode oxidation, reduction cathode."]
],
quiz: [
["Reduction occurs at the:", ["Anode", "Cathode", "Salt bridge", "Wire"], 1]
]
},

{
title: "Chemical Kinetics",
description: "Reaction rate, rate law, order and activation energy.",
lesson: {
simple: "Chemical kinetics studies how quickly chemical reactions happen.",
sections: [
["Reaction Rate",
"Reaction rate describes how fast reactants are consumed or products are formed."],
["Factors",
"Temperature, concentration, surface area and catalysts can affect reaction rates."],
["Catalyst",
"A catalyst provides an alternative reaction pathway and changes the rate without being consumed overall."],
["Activation Energy",
"Activation energy is the minimum energy barrier associated with a reaction pathway."]
]
},
cards: [
["What does kinetics study?", "Reaction rates."],
["What is a catalyst?", "A substance that changes reaction rate through an alternative pathway."],
["Activation energy?", "Energy barrier associated with a reaction pathway."]
],
quiz: [
["Which can affect reaction rate?", ["Temperature", "Concentration", "Catalyst", "All of these"], 3]
]
},

{
title: "d and f Block Elements",
description: "Transition elements, oxidation states and important compounds.",
lesson: {
simple: "The d-block contains transition elements and the f-block contains inner transition elements.",
sections: [
["Transition Elements",
"Many transition elements show variable oxidation states and form coloured compounds."],
["Magnetic Behaviour",
"Unpaired electrons can give rise to paramagnetism."],
["f-Block",
"The f-block contains lanthanoids and actinoids."],
["Important",
"Properties arise from partially filled d or f subshells."]
]
},
cards: [
["What does d-block contain?", "Transition elements."],
["f-block series?", "Lanthanoids and actinoids."],
["Why can compounds be coloured?", "Electronic transitions can absorb visible light."]
],
quiz: [
["The f-block contains:", ["Halogens", "Lanthanoids and actinoids", "Noble gases", "Alkali metals"], 1]
]
},

{
title: "Coordination Compounds",
description: "Ligands, coordination number, nomenclature and bonding.",
lesson: {
simple: "Coordination compounds contain a central metal atom or ion surrounded by ligands.",
sections: [
["Central Metal",
"The central metal ion accepts electron pairs from ligands."],
["Ligand",
"A ligand donates an electron pair to the central metal."],
["Coordination Number",
"It is the number of donor atoms directly bonded to the central metal."],
["Example",
"In [Cu(NH₃)₄]²⁺, four NH₃ ligands surround the copper ion."]
]
},
cards: [
["What is a ligand?", "Electron-pair donor to a central metal."],
["Coordination number?", "Number of donor atoms bonded to the metal."],
["Central metal accepts?", "Electron pairs."]
],
quiz: [
["NH₃ acts as a:", ["Ligand", "Metal", "Anion only", "Solvent only"], 0]
]
},

{
title: "Haloalkanes and Haloarenes",
description: "C–X compounds, reactions and mechanisms.",
lesson: {
simple: "Haloalkanes contain a halogen attached to an alkyl group.",
sections: [
["General Idea",
"Halogens such as F, Cl, Br and I can replace hydrogen in hydrocarbons."],
["Nucleophilic Substitution",
"A nucleophile replaces the halogen-containing leaving group in many reactions."],
["Leaving Group",
"A leaving group is an atom or group that leaves with the electron pair during a reaction."],
["Important",
"Reaction conditions strongly affect which pathway occurs."]
]
},
cards: [
["Common halogens?", "F, Cl, Br and I."],
["What is substitution?", "One group replaces another."],
["Nucleophile?", "Electron-pair donor."]
],
quiz: [
["Which is a halogen?", ["OH", "NH₂", "Cl", "COOH"], 2]
]
},

{
title: "Alcohols, Phenols and Ethers",
description: "Structures, properties and important reactions.",
lesson: {
simple: "These compounds contain oxygen in different bonding environments.",
sections: [
["Alcohol",
"An alcohol contains a hydroxyl group attached to a saturated carbon."],
["Phenol",
"Phenol has an –OH group directly attached to an aromatic ring."],
["Ether",
"An ether has an oxygen atom bonded to two carbon-containing groups."],
["Example",
"Ethanol is an alcohol; phenol contains an aromatic ring with –OH."]
]
},
cards: [
["Functional group of alcohol?", "–OH."],
["Phenol has OH attached to?", "An aromatic ring."],
["Ether contains?", "O bonded to two carbon groups."]
],
quiz: [
["Ethanol is a:", ["Phenol", "Alcohol", "Ether", "Aldehyde"], 1]
]
},

{
title: "Aldehydes, Ketones and Carboxylic Acids",
description: "Carbonyl chemistry and important reactions.",
lesson: {
simple: "These compounds contain important oxygen-containing functional groups.",
sections: [
["Aldehyde",
"Contains a terminal carbonyl group with at least one hydrogen attached to the carbonyl carbon."],
["Ketone",
"Contains a carbonyl group bonded to two carbon-containing groups."],
["Carboxylic Acid",
"Contains the –COOH functional group."],
["Carbonyl",
"The C=O group is called a carbonyl group."]
]
},
cards: [
["Carbonyl group?", "C=O."],
["Carboxylic acid group?", "–COOH."],
["Aldehyde contains?", "A terminal carbonyl group with hydrogen attached."]
],
quiz: [
["Which contains –COOH?", ["Alcohol", "Carboxylic acid", "Ether", "Amine"], 1]
]
},

{
title: "Amines",
description: "Nitrogen-containing organic compounds and their properties.",
lesson: {
simple: "Amines are organic compounds derived from ammonia by replacing hydrogen atoms with carbon-containing groups.",
sections: [
["Primary Amine",
"Nitrogen is attached to one carbon-containing group."],
["Basic Nature",
"Many amines behave as bases because nitrogen has a lone pair."],
["Aniline",
"Aniline is an aromatic amine."],
["Important",
"The availability of the nitrogen lone pair affects basicity."]
]
},
cards: [
["Amines contain which key atom?", "Nitrogen."],
["Why can amines act as bases?", "Nitrogen has a lone pair."],
["Aniline?", "An aromatic amine."]
],
quiz: [
["Amines contain:", ["Oxygen", "Nitrogen", "Sulfur only", "Chlorine"], 1]
]
},

{
title: "Biomolecules",
description: "Carbohydrates, proteins, enzymes, vitamins and nucleic acids.",
lesson: {
simple: "Biomolecules are molecules important for living organisms.",
sections: [
["Carbohydrates",
"They include sugars and polysaccharides and are important energy sources and structural materials."],
["Proteins",
"Proteins are polymers of amino acids and perform many biological functions."],
["Enzymes",
"Enzymes are biological catalysts."],
["Nucleic Acids",
"DNA and RNA are nucleic acids involved in genetic information."]
]
},
cards: [
["Proteins are polymers of?", "Amino acids."],
["Biological catalysts?", "Enzymes."],
["Examples of nucleic acids?", "DNA and RNA."]
],
quiz: [
["Proteins are made from:", ["Fatty acids", "Amino acids", "Glucose only", "Nucleotides only"], 1]
]
}

]

};


// ============================================================
// FORMULAS
// ============================================================

const formulas = [

["Molarity", "M = moles of solute / volume of solution (L)", "Used for concentration of solutions."],
["Molality", "m = moles of solute / mass of solvent (kg)", "Useful because it is independent of temperature-related volume changes."],
["Mole", "n = given mass / molar mass", "Converts mass into amount of substance."],
["Ideal Gas Equation", "PV = nRT", "Connects pressure, volume, amount and temperature."],
["Density", "d = mass / volume", "Mass per unit volume."],
["Gibbs Energy", "ΔG = ΔH − TΔS", "Relates enthalpy, entropy and temperature."],
["Cell Potential", "E°cell = E°cathode − E°anode", "Standard cell potential."],
["First-order half-life", "t½ = 0.693 / k", "Half-life for a first-order reaction."],
["pH", "pH = −log[H⁺]", "Measures acidity of a solution."],
["pOH", "pOH = −log[OH⁻]", "Measures hydroxide ion concentration."],
["Equilibrium Constant", "Kc = products / reactants", "Expression depends on the balanced reaction."]
];


// ============================================================
// PAGE NAVIGATION
// ============================================================

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.remove("active");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "chapters") renderChapters();
  if (pageId === "flashcards") renderFlashcards();
  if (pageId === "formulas") renderFormulas();
  if (pageId === "progress") updateProgress();
}


// ============================================================
// CHAPTERS
// ============================================================

function setGrade(grade) {

  currentGrade = grade;

  document.querySelectorAll(".grade-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelectorAll(".grade-btn")[grade === 11 ? 0 : 1]
    .classList.add("active");

  renderChapters();
}


function renderChapters() {

  const container = document.getElementById("chapterList");

  container.innerHTML = "";

  chemistry[currentGrade].forEach((chapter, index) => {

    const card = document.createElement("div");

    card.className = "chapter-card";

    card.onclick = () => openLesson(index);

    const completed = localStorage.getItem(
      `completed-${currentGrade}-${index}`
    );

    card.innerHTML = `
      <div class="chapter-number">
        ${completed ? "✓" : String(index + 1).padStart(2,"0")}
      </div>

      <div>
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}


// ============================================================
// LESSON
// ============================================================

function openLesson(index) {

  currentTopic = index;

  const chapter = chemistry[currentGrade][index];

  const content = document.getElementById("lessonContent");

  content.innerHTML = `
    <div class="lesson-header">

      <p class="eyebrow">
        CLASS ${currentGrade}
      </p>

      <h1>${chapter.title}</h1>

      <p>${chapter.description}</p>

    </div>

    <div class="lesson-section">

      <p class="eyebrow">✨ IN SIMPLE WORDS</p>

      <h2>${chapter.lesson.simple}</h2>

    </div>

    ${chapter.lesson.sections.map(section => `
      <div class="lesson-section">

        <h2>${section[0]}</h2>

        <p>${section[1]}</p>

        <div class="simple-box">
          💡 ${getTip(section[0])}
        </div>

      </div>
    `).join("")}

    <div class="lesson-section">

      <h2>🧠 Ready to test yourself?</h2>

      <p>
        You've finished the core explanation.
        Now try the flashcards or take the quiz.
      </p>

      <br>

      <button class="primary-btn"
        onclick="renderTopicFlashcards(${index})">
        🃏 Flashcards
      </button>

      <button class="secondary-btn"
        onclick="startQuiz(${index})">
        🧪 Take Quiz
      </button>

    </div>
  `;

  localStorage.setItem(
    `completed-${currentGrade}-${index}`,
    "true"
  );

  localStorage.setItem(
    "sessions",
    Number(localStorage.getItem("sessions") || 0) + 1
  );

  showPage("lesson");

  updateProgress();
}


function getTip(title) {

  const tips = {
    "What is a mole?": "Think of a mole as a giant counting unit.",
    "Molar Mass": "Mass of one mole.",
    "Atomic Number": "Number of protons.",
    "Mass Number": "Protons + neutrons.",
    "Ionic Bond": "Transfer.",
    "Covalent Bond": "Sharing.",
    "Oxidation": "OIL RIG!",
    "Reduction": "OIL RIG!",
    "Functional Group": "It controls characteristic chemistry.",
    "Catalyst": "Alternative pathway.",
    "Coordination Number": "Count donor atoms around the metal.",
    "Electrophile": "Electron-pair acceptor.",
    "Nucleophile": "Electron-pair donor."
  };

  return tips[title] || "Understand the idea first, then memorize the details.";
}


// ============================================================
// FLASHCARDS
// ============================================================

function renderFlashcards() {

  currentGrade = currentGrade || 11;

  renderTopicFlashcards(0);
}


function renderTopicFlashcards(index) {

  const chapter = chemistry[currentGrade][index];

  currentCard = 0;
  showingAnswer = false;

  showPage("flashcards");

  displayFlashcard(chapter);
}


function displayFlashcard(chapter) {

  const card = chapter.cards[currentCard];

  const container = document.getElementById("flashcardContainer");

  const text = showingAnswer ? card[1] : card[0];

  container.innerHTML = `

    <div class="flashcard" onclick="flipCard()">

      <div class="label">
        ${showingAnswer ? "ANSWER" : "QUESTION"}
      </div>

      <h2>${text}</h2>

      <p style="color:#8c96a5;margin-top:25px;">
        Tap to ${showingAnswer ? "see question" : "reveal answer"}
      </p>

    </div>

    <div class="flashcard-actions">

      <button class="secondary-btn"
        onclick="previousCard()">
        ← Previous
      </button>

      <button class="primary-btn"
        onclick="nextCard()">
        Next →
      </button>

    </div>
  `;
}


function flipCard() {

  showingAnswer = !showingAnswer;

  const chapter = chemistry[currentGrade][currentTopic || 0];

  displayFlashcard(chapter);
}


function nextCard() {

  const chapter =
    chemistry[currentGrade][currentTopic || 0];

  currentCard++;

  if (currentCard >= chapter.cards.length) {
    currentCard = 0;
  }

  showingAnswer = false;

  displayFlashcard(chapter);
}


function previousCard() {

  const chapter =
    chemistry[currentGrade][currentTopic || 0];

  currentCard--;

  if (currentCard < 0) {
    currentCard = chapter.cards.length - 1;
  }

  showingAnswer = false;

  displayFlashcard(chapter);
}


// ============================================================
// QUIZ
// ============================================================

function startQuiz(index) {

  const chapter = chemistry[currentGrade][index];

  quizQuestions = [...chapter.quiz];

  quizIndex = 0;
  quizScore = 0;

  showPage("quiz");

  displayQuestion();
}


function startRandomQuiz() {

  const grade = Math.random() > .5 ? 11 : 12;

  currentGrade = grade;

  const chapters = chemistry[grade];

  const index =
    Math.floor(Math.random() * chapters.length);

  startQuiz(index);
}


function displayQuestion() {

  const container =
    document.getElementById("quizContainer");

  if (quizIndex >= quizQuestions.length) {

    finishQuiz();

    return;
  }

  const question = quizQuestions[quizIndex];

  container.innerHTML = `

    <div class="quiz-card">

      <div class="question-number">
        QUESTION ${quizIndex + 1} / ${quizQuestions.length}
      </div>

      <div class="quiz-question">
        ${question[0]}
      </div>

      <div id="options">

        ${question[1].map((option, index) => `

          <button class="option"
            onclick="answerQuestion(${index})">

            ${String.fromCharCode(65 + index)}.
            ${option}

          </button>

        `).join("")}

      </div>

      <div id="feedback"></div>

    </div>
  `;
}


function answerQuestion(selected) {

  const question = quizQuestions[quizIndex];

  const options =
    document.querySelectorAll(".option");

  options.forEach(option => {
    option.disabled = true;
  });

  if (selected === question[2]) {

    options[selected].classList.add("correct");

    document.getElementById("feedback").innerHTML = `
      <div class="feedback">
        ✅ <strong>Correct!</strong>
        Great thinking. 🔥
      </div>

      <br>

      <button class="primary-btn"
        onclick="nextQuestion()">
        Next →
      </button>
    `;

    quizScore++;

  } else {

    options[selected].classList.add("wrong");
    options[question[2]].classList.add("correct");

    document.getElementById("feedback").innerHTML = `
      <div class="feedback">
        ❌ Not quite!

        <br><br>

        The correct answer is:
        <strong>
        ${question[1][question[2]]}
        </strong>

      </div>

      <br>

      <button class="primary-btn"
        onclick="nextQuestion()">
        Next →
      </button>
    `;
  }
}


function nextQuestion() {

  quizIndex++;

  displayQuestion();
}


function finishQuiz() {

  const percentage =
    Math.round((quizScore / quizQuestions.length) * 100);

  let message;

  if (percentage === 100) {
    message = "🔥 PERFECT. You're absolutely cooking!";
  } else if (percentage >= 70) {
    message = "💪 Strong work. A little revision will make it even better.";
  } else if (percentage >= 40) {
    message = "📚 Good start. Revise the concepts you missed.";
  } else {
    message = "🌱 Don't worry. Understanding comes before mastery.";
  }

  const oldScore =
    Number(localStorage.getItem("quizScore") || 0);

  localStorage.setItem(
    "quizScore",
    oldScore + quizScore
  );

  document.getElementById("quizContainer").innerHTML = `

    <div class="big-progress-card">

      <div class="eyebrow">QUIZ COMPLETE</div>

      <div class="big-number">
        ${percentage}%
      </div>

      <h2>
        ${quizScore} / ${quizQuestions.length}
      </h2>

      <p style="margin-top:15px;">
        ${message}
      </p>

      <br>

      <button class="primary-btn"
        onclick="showPage('chapters')">
        Keep Learning →
      </button>

    </div>
  `;

  updateProgress();
}


// ============================================================
// FORMULAS
// ============================================================

function renderFormulas() {

  const query =
    (document.getElementById("formulaSearch")?.value || "")
      .toLowerCase();

  const container =
    document.getElementById("formulaList");

  if (!container) return;

  const filtered =
    formulas.filter(formula =>
      formula.join(" ").toLowerCase().includes(query)
    );

  container.innerHTML = filtered.map(formula => `

    <div class="formula-card">

      <h3>${formula[0]}</h3>

      <div class="formula">
        ${formula[1]}
      </div>

      <p>${formula[2]}</p>

    </div>

  `).join("");

}


// ============================================================
// SEARCH
// ============================================================

function openSearch() {

  showPage("search");

  setTimeout(() => {
    document.getElementById("globalSearch").focus();
  }, 100);
}


function globalSearch() {

  const query =
    document.getElementById("globalSearch")
      .value
      .toLowerCase()
      .trim();

  const results =
    document.getElementById("searchResults");

  if (!query) {

    results.innerHTML = `
      <div class="search-result">
        <h3>🔎 Search Chemistry</h3>
        <p>
          Try searching for "mole", "equilibrium",
          "electrochemistry", "nucleophile" or "pH".
        </p>
      </div>
    `;

    return;
  }

  let matches = [];

  [11,12].forEach(grade => {

    chemistry[grade].forEach((chapter, index) => {

      if (
        chapter.title.toLowerCase().includes(query) ||
        chapter.description.toLowerCase().includes(query) ||
        chapter.lesson.simple.toLowerCase().includes(query)
      ) {

        matches.push({
          grade,
          index,
          chapter
        });

      }

    });

  });

  if (matches.length === 0) {

    results.innerHTML = `
      <div class="search-result">
        <h3>No results found</h3>
        <p>
          Try another Chemistry term.
        </p>
      </div>
    `;

    return;
  }

  results.innerHTML = matches.map(result => `

    <div class="search-result"
      onclick="currentGrade=${result.grade};openLesson(${result.index})"
      style="cursor:pointer">

      <p class="eyebrow">
        CLASS ${result.grade}
      </p>

      <h3>${result.chapter.title}</h3>

      <p>${result.chapter.description}</p>

    </div>

  `).join("");
}


// ============================================================
// PROGRESS
// ============================================================

function updateProgress() {

  let completed = 0;

  [11,12].forEach(grade => {

    chemistry[grade].forEach((chapter,index) => {

      if (
        localStorage.getItem(
          `completed-${grade}-${index}`
        )
      ) {
        completed++;
      }

    });

  });

  const total =
    chemistry[11].length + chemistry[12].length;

  const percent =
    Math.round((completed / total) * 100);

  const score =
    Number(localStorage.getItem("quizScore") || 0);

  const sessions =
    Number(localStorage.getItem("sessions") || 0);

  document.getElementById("progressPercent").textContent =
    percent + "%";

  document.getElementById("progressFill").style.width =
    percent + "%";

  document.getElementById("topicsStudied").textContent =
    completed;

  document.getElementById("quizScore").textContent =
    score;

  document.getElementById("studyStreak").textContent =
    sessions;

  document.getElementById("bigProgress").textContent =
    percent + "%";

  document.getElementById("bigProgressFill").style.width =
    percent + "%";

  document.getElementById("pTopics").textContent =
    completed;

  document.getElementById("pQuiz").textContent =
    score;

  document.getElementById("pSessions").textContent =
    sessions;

  if (percent === 0) {
    document.getElementById("progressMessage").textContent =
      "Start your first lesson. You've got this. 🧪";
  } else if (percent < 50) {
    document.getElementById("progressMessage").textContent =
      "You're building your Chemistry foundation. 🔥";
  } else if (percent < 100) {
    document.getElementById("progressMessage").textContent =
      "You're more than halfway there. Keep going!";
  } else {
    document.getElementById("progressMessage").textContent =
      "You've explored the entire curriculum! 🏆";
  }
}


// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  renderChapters();

  renderFormulas();

  updateProgress();

});
