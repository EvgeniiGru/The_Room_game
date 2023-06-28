export const pathRoot = {
    Root() {
        return '';
    },
    FirstDay() {
        return `${this.Root()}/first_day`
    },
    Kitchen() {
        return `${this.FirstDay()}/kitchen`
    },
    Hall() {
        return `${this.FirstDay()}/hall`
    },
    Hallway() {
        return `${this.FirstDay()}/hallway`
    },
    Bedroom() {
        return `${this.FirstDay()}/bedroom`
    }

}
