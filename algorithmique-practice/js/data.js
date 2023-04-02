const students = [
    { nom: "Dupont", prenom: "Alice", cours: ["Maths", "Anglais", "Histoire"], notes: [14, 16, 18] },
    { nom: "Martin", prenom: "Bob", cours: ["Physique", "Espagnol", "Géographie"], notes: [12, 13, 15] },
    { nom: "Lefebvre", prenom: "Claire", cours: ["Chimie", "Allemand", "SVT"], notes: [9, 10, 11] },
    { nom: "Girard", prenom: "David", cours: ["Français", "Arts plastiques", "Philosophie"], notes: [17, 19, 14] },
    { nom: "Petit", prenom: "Emma", cours: ["Latin", "Musique", "Sciences économiques"], notes: [16, 11, 12] },
    { nom: "Moreau", prenom: "François", cours: ["Sport", "Théâtre", "Informatique"], notes: [11, 13, 15] },
    { nom: "Dubois", prenom: "Marc", cours: ["Géométrie", "Latin", "Marketing"], notes: [15, 12, 10] },
    { nom: "Garcia", prenom: "Hugo", cours: ["Littérature", "Musique", "Droit"], notes: [14, 17, 18] },
    { nom: "Roux", prenom: "Inès", cours: ["Sociologie", "Japonais", "Chimie"], notes: [10, 9, 12] },
    { nom: "Berger", prenom: "Jules", cours: ["Géographie", "Théâtre", "Espagnol"], notes: [13, 16, 14] },
    { nom: "Moulin", prenom: "Karine", cours: ["Histoire de l'art", "Anglais", "Physique"], notes: [17, 15, 18] },
    { nom: "David", prenom: "Lucie", cours: ["Chinois", "Marketing", "SVT"], notes: [12, 11, 9] },
    { nom: "Mercier", prenom: "Marc", cours: ["Philosophie", "Sport", "Français"], notes: [18, 13, 16] },
    { nom: "Fournier", prenom: "Nina", cours: ["Informatique", "Littérature", "Musique"], notes: [15, 14, 17] },
    { nom: "Morel", prenom: "Olivier", cours: ["Espagnol", "Chimie", "Théâtre"], notes: [13, 11, 16] }
];

console.log(students)

students.forEach(function (student) {
    let moyenne = 0
    for (let i = 0; i < student.notes.length; i++) {
        moyenne += student.notes[i]
    }
    moyenne = parseInt(moyenne / student.notes.length)

    if (student.prenom == 'Marc') {
        console.log(student.nom, moyenne)
    }
})


let rachid='rachid'

const person = {
    name: rachid
}

console.log(person.name)