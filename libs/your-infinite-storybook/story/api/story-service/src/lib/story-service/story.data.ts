import { Gender } from './story.types';

export const storyLessons = [
    'honesty is the best policy',
    "don't judge a book by its cover",
    'friendship is valuable',
    'be careful what you wish for',
    "it's okay to ask for help",
    'hard work pays off',
    'believe in yourself',
    'sharing is caring',
    'being greedy leads to trouble',
    'teamwork makes the dream work',
    "don't be afraid to be yourself",
    "it's important to listen",
    'helping others brings happiness',
    'never give up',
    'patience is a virtue',
    "respect others' belongings",
    'gratitude is important',
    'be resourceful',
    'the value of family',
    "treat others as you'd like to be treated",
    "stand up for what's right",
    "it's never too late to change",
    'the power of forgiveness',
    'persistence pays off'
];

export const getRandomStoryLessons = (n: number) => {
    return getRandomFromArray(storyLessons, n);
};

export const storySettings = [
    `Enchanted forest`,
    `Magical kingdom`,
    `Underwater realm`,
    `Floating island`,
    `Hidden village in the mountains`,
    `Dream world`,
    `Desert oasis`,
    `Ancient castle`,
    `Giant's lair`,
    `Fairy glen`,
    `Haunted mansion`,
    `Secret garden`,
    `Parallel universe`,
    `Mystical cave`,
    `Space colony`,
    `Pirate ship`,
    `Time-traveling adventure`,
    `Snowy tundra`,
    `Lush jungle`,
    `Steampunk city`,
    `Tower in the clouds`,
    `Labyrinth`,
    `Dragon's den`,
    `Volcano island`,
    `Moonlit grove`,
    `Gnome village`,
    `Abandoned amusement park`,
    `Crystal cavern`,
    `Whimsical woodland`,
    `Elven city`
];

export const getRandomStorySetting = () => {
    return getRandomFromArray(storyLessons, 1);
};

export const storyTypes = [
    { name: 'Tale', minAge: 3, maxAge: 12 },
    { name: 'Bedtime story', minAge: 1, maxAge: 10 },
    { name: 'Fable', minAge: 4, maxAge: 12 },
    { name: 'Fantasy', minAge: 5, maxAge: 12, gender: 'M' },
    { name: 'Legend', minAge: 6, maxAge: 12, gender: 'M' },
    { name: 'Myth', minAge: 6, maxAge: 12, gender: 'M' },
    { name: 'Folklore', minAge: 6, maxAge: 12 },
    { name: 'Parable', minAge: 6, maxAge: 12 },
    { name: 'Enchanting story', minAge: 3, maxAge: 12 },
    { name: 'Magical adventure', minAge: 4, maxAge: 12 },
    { name: 'Folk tale', minAge: 4, maxAge: 12 },
    { name: 'Allegory', minAge: 7, maxAge: 12 },
    { name: 'Traditional story', minAge: 4, maxAge: 12 },
    { name: 'Classic tale', minAge: 4, maxAge: 12 },
    { name: 'Fairytale', minAge: 1, maxAge: 12 },
    { name: 'Whimsical tale', minAge: 3, maxAge: 12 },
    { name: 'Imaginary story', minAge: 4, maxAge: 12 },
    { name: "Children's story", minAge: 1, maxAge: 12 },
    { name: 'Wonder tale', minAge: 3, maxAge: 12 },
    { name: 'Enchanted tale', minAge: 3, maxAge: 12 },
    { name: 'Spellbinding story', minAge: 4, maxAge: 12 },
    { name: 'Fantastical journey', minAge: 5, maxAge: 12 },
    { name: 'Bedtime fable', minAge: 4, maxAge: 10 },
    { name: 'Romantic tale', minAge: 6, maxAge: 12, gender: 'F' },
    { name: 'Imaginative story', minAge: 4, maxAge: 12 }
];

export const getRandomStoryType = (kidAge: number, kidGender?: Gender) => {
    const filteredByAge = storyTypes.filter(({ minAge, gender }) => {
        const ageCheck = minAge > kidAge;

        if (minAge > kidAge) {
            return false;
        }

        if (gender && kidGender && kidGender !== gender) {
            return false;
        }

        return true;
    });

    return getRandomFromArray(filteredByAge, 1);
};

const getRandomFromArray = (arr: any[], n: number) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, n);
};
