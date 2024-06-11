export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        console.log('Game created');
        this.initializeStack();
        this.shuffleArray(this.stack);
    }

    private initializeStack() {
        const suits = ['ace', 'clubs', 'diamonds', 'hearts'];
        for (let i = 1; i <= 13; i++) {
            for (let suit of suits) {
                this.stack.push(`${suit}_${i}`);
            }
        }
    }

    private shuffleArray(array: string[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
