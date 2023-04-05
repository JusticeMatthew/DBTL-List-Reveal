import { BIANCA_ASUKA, BROCK_OMOS, CHARLOTTE_RHEA, EDGE_FINN, IC, MYSTERIOS, ROLLINS_PAUL, ROMAN_CODY, SIX_WOMEN_TAG, THEORY_CENA, USOS_SAMI_KO } from "./art";

export const data = {
    name:  'Matts List',
    fightOne: {
        title: "Roman Reigns (c) vs. Cody Rhodes",
        img: ROMAN_CODY,
    },
    fightTwo: {
        title: "Austin Theory (c) vs. John Cena",
        img: THEORY_CENA,
    },
    fightThree: {
        title: "Seth Rollins vs. Logan Paul",
        img: ROLLINS_PAUL,
    },
    fightFour: {
        title: "Charlotte Flair (c) vs. Rhea Ripley",
        img: CHARLOTTE_RHEA,
    },
    fightFive: {
        title: "Bianca Belair (c) vs. Asuka",
        img: BIANCA_ASUKA,
    },
    fightSix: {
        title: "Becky Lynch, Lita & Trish Stratus vs. Damage CTRL",
        img: SIX_WOMEN_TAG,
    },
    fightSeven: {
        title: "Brock Lesnar vs. Omos",
        img: BROCK_OMOS,
    },
    fightEight: {
        title: "Edge vs. Finn Bálor",
        img: EDGE_FINN,
    },
    fightNine: {
        title: "Gunther (c) vs. Drew McIntyre vs. Sheamus",
        img: IC,
    },
    fightTen: {
        title: "The Usos (c) vs. Sami Zayn & Kevin Owens",
        img: USOS_SAMI_KO,
    },
    fightEleven: {
        title: "Rey Mysterio vs. Dominik Mysterio",
        img: MYSTERIOS,
    },
    
}

export const picks = [
    data.fightOne, 
    data.fightNine, 
    data.fightEleven, 
    data.fightTen, 
    data.fightFour
]
