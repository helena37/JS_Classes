class Rat {
    name;
    unitedRats;


    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return [...this.unitedRats];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    toString() {
        return `${this.name}\n${this.unitedRats.map(r => `##${r}`).join('\n')}`;
    }
}