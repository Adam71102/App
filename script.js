document.addEventListener('DOMContentLoaded', function () {
    // Lire le fichier chiffre.txt
    fetch('chiffre.txt')
        .then(response => response.text())
        .then(data => {
            // Divisez les chiffres en tableau et triez-les
            const chiffres = data.split('\n').map(Number).filter(Number.isInteger);
            chiffres.sort((a, b) => a - b);

            // Sélectionnez l'élément UL pour afficher la liste triée
            const chiffreList = document.getElementById('chiffre-list');

            // Créez des éléments LI pour chaque chiffre et ajoutez-les à la liste
            chiffres.forEach(chiffre => {
                const listItem = document.createElement('li');
                listItem.textContent = chiffre;
                chiffreList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

});

