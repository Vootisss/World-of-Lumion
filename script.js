// Arrays for randomized traits
const genders = ["Female", "Male"];
const elements = ["Flora", "Fire", "Light", "Water", "Earth", "Air", "Ice", "Dark"];
const earGenes = ["Middle-point", "Up-turned", "Down-turned"];
const hairColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White", "Gray", "Black", "Brown", "Blonde", "Azure", "Lavender", "Silver", "Salmon", "Crimson", "Gold", "Sienna", "Maroon", "Chartreuse", "Lime", "Aquamarine", "Turquoise", "Violet", "Indigo", "Magenta"];
const hairShades = ["Very light", "Light", "Medium", "Dark", "Very dark"];
const hairTextures = ["Curly", "Wavy", "Straight", "Neat", "Messy", "Afro"];
const hairLengths = ["Long", "Medium", "Short"];
const eyeColors = [...hairColors];
const skinColors = ["Dark tan", "Tan", "Dark", "Black", "Brown", "Olive", "Pale", "Fair", "Rosy", "White"];
const heights = ["4'10", "4'11", "5'0", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "6'0", "6'1", "6'2", "6'3"];
const ethnicities = ["From Norrtoppen/Has ancestors from Norrtoppen", "From Lumenspe/Has ancestors from Lumenspe", "From Unclassified/Has ancestors from Unclassified", "From Cruor/Has ancestors from Cruor", "From Kaharian ng Kundiman/Has ancestors from Kaharian ng Kundiman", "From Seapikk/Has ancestors from Seapikk", "From Wynara/Has ancestors from Wynara", "From Valentia/Has ancestors from Valentia", "From Belrynne/Has ancestors from Belrynne"];
const quirks = [
    "Speaks extremely properly/formally at all times", "Bites nails", "Stutters a lot", "Can't sit still", "Refuses to make eye contact", "Constantly hums",
    "Always wears mismatched socks", "Collects random objects", "Tilts their head to the side when listening", "Apologizes excessively, even when not at fault",
    "Corrects other people’s grammar", "Tends to over-explain", "Cracks knuckles loudly and often", "Compliments people in a backhanded way",
    "Is always cold, no matter the temperature", "Is always warm, no matter the temperature", "Avoids stepping on cracks or lines on the ground",
    "Has an intense dislike for certain textures (like velvet or chalk)", "Twirls hair around their finger a lot", "Taps their foot rhythmically when thinking"
];

// Helper function to pick a random trait
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random Lumara
function generateLumara() {
    const gender = getRandom(genders);
    const element = getRandom(elements);
    const earGene = getRandom(earGenes);
    const hairColor = `${getRandom(hairShades)} ${getRandom(hairColors)}`;
    const hairTexture = getRandom(hairTextures);
    const hairLength = getRandom(hairLengths);
    const eyeColor = `${getRandom(hairShades)} ${getRandom(eyeColors)}`;
    const skinColor = getRandom(skinColors);
    const height = getRandom(heights);
    const ethnicity = getRandom(ethnicities);
    const quirk = getRandom(quirks);

    return `
        Gender: ${gender}<br><br>
        Element: ${element}<br><br>
        Ear-gene: ${earGene}<br><br>
        Hair color: ${hairColor}<br><br>
        Hair texture: ${hairTexture}<br><br>
        Hair length: ${hairLength}<br><br>
        Eye color: ${eyeColor}<br><br>
        Skin color: ${skinColor}<br><br>
        Height: ${height}<br><br>
        Ethnicity: ${ethnicity}<br><br>
        Quirk: ${quirk}
    `;
}

// DOM elements
const generateButton = document.getElementById("generate");
const lumaraOutput = document.getElementById("lumara-output");
const nameSection = document.getElementById("name-section");
const nameInput = document.getElementById("lumara-name");
const saveNameButton = document.getElementById("save-name");
const nameOutput = document.getElementById("name-output");

// Event listeners
generateButton.addEventListener("click", () => {
    const lumaraTraits = generateLumara();
    lumaraOutput.innerHTML = lumaraTraits;
    nameSection.style.display = "block";
});

saveNameButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        nameOutput.textContent = `Your Lumara is named: ${name}`;
    } else {
        nameOutput.textContent = "Please enter a name.";
    }
});
