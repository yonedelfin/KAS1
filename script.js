// Labeling each variable
const conceptNameDisplay = document.getElementById('conceptNameDisplay');
const conceptInfoDisplay = document.getElementById('conceptInfoDisplay');

// Selecting all images
const iconContainer = document.querySelector('.icon-container');

const icons = document.querySelectorAll('.icon > img');



// function for when images are clicked, applicable to all images
iconContainer.addEventListener("mouseover", (e) => {
    // Selects the closes ancestor of icon, in this case it is img
    const img = e.target.closest(".icon > a> img");
    if (!img) return;

    conceptNameDisplay.innerHTML = img.alt;
    displayInfo(img.id);
});


// function to display respective information for each icon
function displayInfo(id) {
    const selectedIcon = [...icons].find((icon) => icon.id === id);

    // Each icon
    if (id === 'whatIsSociologyIcon') {
        conceptInfoDisplay.innerHTML = "The earliest known inhabitants of the Philippines are from the genus Homo. These include the Callao Man, Tabon Man, and Homo luzonensis which were found across the archipelago.";
    } else if (id === "socioTheoriesIcon") {
        conceptInfoDisplay.innerHTML =
          "According to anthropologist Henry Otley Beyer, the early prehistoric Philippines was populated by migrants including the Dawn Man, Aetas, Indonesians, and Malaysians.";

    } else if (id === "interactionistIcon") {
        conceptInfoDisplay.innerHTML = "Although the precolonial Philippines did not have an organized society and a united language, they had similar aspects of culture.";
      } else if (id === 'conflictIcon') {
          conceptInfoDisplay.innerHTML = 'The Maginoo class was considered the elite class during the pre-colonial period. Their power was inherited and datuship also entitled military, judicial, religious, and entrepreneurial roles. They were supported and served by the Timawa or warrior class. The masses spent most of their lives in servitude with some being Aliping namamahay or Alipin sa gigilid.';
      } else if (id === 'functionalistIcon') {
        conceptInfoDisplay.innerHTML = 'Prior to the Spanish era, there was no concept of a single Philippines, we only had different chiefdoms without central unity.';
        } else if (id === 'socialization') {
        conceptInfoDisplay.innerHTML = 'On March 16, 1521, Ferdinand Magellan and his fleet arrived at Cebu where he was eventually killed by a local chief named Lapu-Lapu. After three failed expeditions from King Philip II, Miguel López de Legazpi established the first permanent Spanish settlement in Cebu.';
    } else if (id === 'formsSocializationIcon') {
        conceptInfoDisplay.innerHTML = 'Manila-Acapulco Galleon Trade was considered to be the economic lifeline of the colony in the 16th century. The Galleon Trade route allowed Spain to trade with Asia via Mexico. It brought exotic goods like porcelain, silk, and spices from China to Mexico.';
    } else if (id === 'exchangeIcon') {
        conceptInfoDisplay.innerHTML = 'The Spaniards also faced numerous challenges in the 17th century which were mainly caused by resistance from the Filipinos. In 1621, there was a religious uprising against the Spanish led by Bankaw. Other local uprisings were a result of the unjust Bandala system, the establishment of pueblos, and the abuse of polo y servicio.';
    } else if (id === 'learningIcon') {
        conceptInfoDisplay.innerHTML = 'As a result of reorganizing the pueblos and the continued Galleon Trade, the local elites emerged and Manila was prospering. Mestizos profited from taxes (rentas estancadas) and the Tobacco Monopoly.';
    } else if (id === 'labelingIcon') {
        conceptInfoDisplay.innerHTML = 'There have been many local uprisings throughout the Spanish colonial era but it was only in the 19th century that a group of Ilustrados emerged and fought for Philippine Independence. This emergence of nationalism was sparked by the Cavite Mutiny and the execution of José Burgos, Mariano Gómez, and Jacinto Zamora (GomBurZa).';
    } else if (id === 'feminismIcon') {
        conceptInfoDisplay.innerHTML = 'The United States government outlined its motivations and policies for occupying the Philippines in the Benevolent Assimilation Proclamation.';
    } else if (id === 'criticalIcon') {
        conceptInfoDisplay.innerHTML = "The Americans' main contributions to the Philippines are education, government systems, public health, urban planning, and culture";
    } else if (id === 'strainIcon') {
        conceptInfoDisplay.innerHTML = "The Japanese invasion of the Philippines started on the 8th of December 1941, approximately 17 hours after the attack on Pearl Harbor.";
    } else if (id === 'rationalIcon') {
        conceptInfoDisplay.innerHTML = "Life in the Philippines was difficult during the Japanese occupation. Only one political party was allowed during the occupation which was the Japanese-organized KALIBAPI.";
    } else if (id === 'gameIcon') {
        conceptInfoDisplay.innerHTML = 'In 1944, General Douglas MacArthur successfully returned to the Philippines equipped with men, weapons, and information. Fighting between the two countries would not end until Japan’s formal surrender on 2 September 1945 and by that time, the Philippines had suffered a great deal of loss and destruction.';
    } else if (id === 'sociobiologyIcon') {
        conceptInfoDisplay.innerHTML = 'Sociobiology investigates social behaviors such as mating patterns, territorial fights, pack hunting, and the hive society of social insects. It argues that just as selection pressure led to animals evolving useful ways of interacting with the natural environment, so also it led to the genetic evolution of advantageous social behavior.';
    } else if (id === 'chaosIcon') {
        conceptInfoDisplay.innerHTML = 'Chaos theory aims to find the general order of social systems and particularly social systems that are similar to each other. The assumption here is that the unpredictability in a system can be represented as overall behavior, which gives some amount of predictability, even when the system is unstable.';
    } else if (id === 'phenomonologyIcon') {
        conceptInfoDisplay.innerHTML = 'Social phenomenology is an approach within the field of sociology that aims to reveal what role human awareness plays in the production of social action, social situations and social worlds. In essence, phenomenology is the belief that society is a human construction.';
    } else if (id === 'disengagementIcon') {
        conceptInfoDisplay.innerHTML = 'The disengagement theory of ageing states that "aging is an inevitable, mutual withdrawal or disengagement, resulting in decreased interaction between the aging person and others in the social system he belongs to". The theory claims that it is natural and acceptable for older adults to withdraw from society.';
    } else if (id === 'macroIcon') {
        conceptInfoDisplay.innerHTML = 'Macro theories are large scale theories – what postmodernists call grand narratives – about society. They are structural theories such as functionalism and Marxism. They contrast with micro theories (action theories).';
    } else if (id === 'comteIcon') {
        conceptInfoDisplay.innerHTML = 'Auguste Comte was one of the founders of sociology and coined the term sociology. Comte believed sociology could unite all sciences and improve society. Comte was a positivist who argued that sociology must have a scientific base and be objective. Comte theorized a three-stage development of society.';
    } else if (id === 'marxIcon') {
        conceptInfoDisplay.innerHTML = "Marx's theories formed a sociological perspective called conflict theory, which stated that capitalist societies were built on conflicts between the workers and the rulers. In this theory, society relies on class conflict in order to keep the wealthy in power and the poor as subjects to the government.";
    } else if (id === 'durkheimIcon') {
        conceptInfoDisplay.innerHTML = 'Durkheim is often considered a conservative within the field of sociology, being concerned primarily with order, consensus, solidarity, social morality, and systems of religion. His theoretical analysis helped provide a basis for relatively conservative structural functional models of society.';
    } else if (id === 'weberIcon') {
        conceptInfoDisplay.innerHTML = 'The German philosopher and sociologist Max Weber is one of the founding fathers of sociology. He is regarded as the proponent of anti-positivism thought and argued that society can be understood by studying social actions through interpretive meaning the actors (individual) attach to their own actions.';
    } else if (id === 'spencerIcon') {
        conceptInfoDisplay.innerHTML = 'Spencer believed that the fundamental sociological classification was between military societies, in which cooperation was secured by force, and industrial societies, in which cooperation was voluntary and spontaneous.';
    }
};

