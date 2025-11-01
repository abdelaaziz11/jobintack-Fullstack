class CashRegister {
    constructor() {
        // Catalogue des produits disponibles
        this.itemsForSale = {
            "Phone": 300,
            "Smart TV": 220,
            "Gaming Console": 150
        };
        this.shoppingCart = []; // panier vide au départ
    }

    // Méthode pour ajouter un article au panier
    addItem(itemName) {
        if (this.itemsForSale[itemName]) {
            this.shoppingCart.push(itemName);
            console.log(`${itemName} a été ajouté au panier.`);
        } else {
            console.log(`Désolé, nous ne vendons pas ${itemName}.`);
        }
    }

    // Méthode pour calculer le prix total
    calculateTotalPrice() {
        let total = 0;
        this.shoppingCart.forEach(item => {
            total += this.itemsForSale[item];
        });

        // Réduction si total > 400
        if (total > 400) {
            console.log("Une réduction de 10% est appliquée !");
            total *= 0.9;
        }

        console.log(`Total à payer : ${total}`);
        return total;
    }

    // Méthode pour payer
    pay(paymentAmount) {
        let totalPrice = this.calculateTotalPrice();

        if (paymentAmount >= totalPrice) {
            let change = paymentAmount - totalPrice;
            console.log("Merci pour votre achat !");
            if (change > 0) {
                console.log(`Votre monnaie est : ${change}`);
            }
        } else {
            console.log(
                `Paiement insuffisant. Il manque ${totalPrice - paymentAmount} pour compléter l'achat.`
            );
        }
    }
}

// Exemple d'utilisation
const register = new CashRegister();

register.addItem("Phone");
register.addItem("Smart TV");
register.addItem("Laptop");

register.pay(600);  // Paie avec réduction et rendu de monnaie
