
// Objet Contact
var Contact = {
	// Initilisation du contact
	init: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
};

// Création des contacts
var carole = Object.create(Contact);
carole.init("Lévisse", "Carole");

var melodie = Object.create(Contact);
melodie.init("Nelsone", "Mélodie");


var ajoutContact = Object.create(Contact); // Création du prochain contact

// Tableau des options
var listeOptions = ["Quitter", "Lister les contacts", "Ajouter un contact"];

// Création du tableau des contacts
var contacts = [carole, melodie];

console.log("Bienvenue dans le gestionnaire de contacts !"); // Début du Programme:

// Début de la boucle
while (true) {
	// Les choix disponibles
	console.log("1 : " + listeOptions[1]);
	console.log("2 : " + listeOptions[2]);
	console.log("0 : " + listeOptions[0]);

	// Demande le choix a l'utlisateur
	var option = Number(prompt("Choisissez une option"));

	if (option == 0) { // Quitter le programme

		break; // Quitte la boucle While
	}
	if (option == 1) { // Affiche la liste de contact
		console.log("\nVoici la liste de tous vos contacts :")

		contacts.forEach(function (contact) { // Affiche la liste du tableau 'contacts'
			console.log("Nom : " + contact.nom + " Prénom : " + contact.prenom)
		});

		console.log('\n'); // Placer un espace après la liste des contacts pour la lisibilité

	} else if (option == 2) { // Ajouter un nouveau contact 
		console.log("Saisissez le nom ensuite le prénom du nouveau contact:")
		var nom = prompt("Entrez le nom du nouveau contact.");
		var prenom = prompt("Entrez le prénom du nouveau contact.");

		ajoutContact.init(nom, prenom); // Initialisation du contact avec les valeurs saisies
		contacts.push(ajoutContact); // Ajout du contact au tableau contacts
		console.log("\nLe contact a bien été ajouté !");

	} else { // Si l'utilisateur saisit un autre nombre que 0, 1 ou 2 - ou des lettres le programme demande choix options

		console.log("Vous devez saisir un nombre valide.");
	}
}


console.log("\nAu revoir."); // Fin du programme
