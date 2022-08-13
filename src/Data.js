
const categories = ["Rice","ugali","chapati","snacks"]

const recipes = [
    {
        id: 1,
        category:"rice",
        name: "Pilau (Spiced Rice)",
        description: "Pilau  is the king of traditional rice cuisine among the Swahili community. Culturally, it is a must cook dishon Friday particularly during lunch. It is enjoyed by the entire family and often served with tomatoes, onions and chillies salad commonly known as (“kachumbari” or salsa) and accompanied with a ripe banana.This tastefully spiced dish is characterized by whole potatoes and meat chunks as key ingredients.",
        picture: "https://www.malindikenya.net/images/uploads/articoli/1163_l.jpg",
        ingredients: [
            { "raw white rice": [595, "3 1/3 cups"] },
            { "beef": [500, "1/2kg"] },
            { "cardamom, whole": [1, "10 seeds"] },
            { "cinnamon, whole": [3, "5 sticks"] },
            { "black pepper, whole": [1, "5 seeds"] },
            { "cloves, whole": [1, "5 seeds"] },
            { "salt, iodized": [30, "6 tsp"] },
            { "cumin": [11, "2 tsp"] },
            { "potatoes unpeeled raw": [840, "4"] },
            { "red skinned onions, unpeeled raw": [387, "3"] },
            { "Garlic, whole": [17, "5 cloves"] },
            { "Ginger": [23, "1 root"] },
            { "green capsicum": [115, "1/2"] },
            { "Coriander": [62, "fresh"] },
            { "water": [1788, "8 1/4 cups"] },
            { "cooking oil": [200, "1/2 cup"] }
        ],
        instructions: [
            "Cut meat into medium size chunks.",
            "Boil the meat in a large cooking pot with all the water for 30 minutes, drain the water and set both meat and water aside",
            "Prepare and chop onions and potatoes, grate capsicum, pound coriander, crush garlic and ginger.",
            "Place each prepared ingredient in small separate bowls",
            "Toast cumin seeds under medium heat on a dry pan until they start to brown. Remove from the heat and grind",
            "Toast cardamom, cinnamon, cloves and black pepper together until they produce an aroma. Grind them.",
            "Put oil into the pan used to boil the meat",
            "Add onions into the hot oil and cook for 5 minutes until they brown (a golden-brown colour)",
            "Add ginger and garlic. Stir.",
            "Add all browned spices; cumin, black pepper, cloves, cinnamon, cardamom after 3 minutes.",
            "Add capsicum, coriander and potatoes after 1 minute and stir. Meanwhile, wash the rice",
            "Add rice and salt after 3 minutes and stir in to properly mix the ingredients",
            "Add water drained from boiling the meat, stir the rice and bring the mixture to boil for 25 minutes.",
            "Add the cooked meat to the boiling mixture. Cook for 30 minutes and serve"
        ],
        preparation:20,
        cooking:60,
        serves:4
    },
    {
        id:2,
        category:"rice",
        name:"Swahili Biryani Rice",
        description:"This dish is common among the Swahili community in Kenya. The cuisine is also meat based and special emphasis is given to finding the right kinds of rice, spices, meat and herbs. It is simply steamed rice eaten with Biryani stew. It is particularly made using the fragrant species of rice. This colourful dish can be served for lunch, dinner or during wedding occasions.",
        picture:"https://i.pinimg.com/564x/d8/3a/06/d83a0696cb9a7d2437f36a9e999b97ac.jpg",
        ingredients:[
            {"raw white rice":[1000,"5 3/4 cups"]},
            {"water":[1874,"8 2/3 cups"]},
            {"salt":[10,"2 tsp"]},
            {"cooking oil":[85,"7 tsp"]}
        ],
        instructions:[
            "Take out 2 tablespoons of water and put the rest ofthe water into a cooking pot, add salt and bring to a boil.",
            "Wash the rice and add into the boiling water. Cover to cook for 10 minutes",
            "Meanwhile mix the food colour in the 2 tablespoons of water.",
            "Add oil and cook for another 2 minutes.",
            "Add the food colour and simmer for 13 minutes.",
            "Remove from heat.",
            "Serve with biryani stew"
        ],
        preparation:5,
        cooking:25,
        serves:4
    }
]
export {categories,recipes}