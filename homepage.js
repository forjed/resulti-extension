// Définissez l'URL de la page d'accueil souhaitée
const homepage = 'https://www.example.com/';

// Utilisez l'API `browser.startup.set` pour définir la page d'accueil
browser.startup.set({ homepage });

// Affichez un message pour indiquer que la page d'accueil a été mise à jour
console.log('Homepage set to:', homepage);