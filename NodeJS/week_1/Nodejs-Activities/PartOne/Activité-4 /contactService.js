const contacts = [];

function ajouterContact(nom, telephone) {
    contacts.push({nom, telephone});
}
function listerContact() {
    return contacts;
}

module.exports = {ajouterContact, listerContact};
