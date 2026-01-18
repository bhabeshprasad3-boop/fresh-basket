// Fruits
import Banana from '../../image/banana.png'
import FreshFruits from '../../image/fresh-fruits.png'
import Grapes from '../../image/grapes.png'
import Kiwi from '../../image/kiwi.png'
import Pineapple from '../../image/pineapple.png'
import Strawberry from '../../image/strawberry.png'

// Vegetables
import BasketFullVegetables from '../../image/basket-full-vegetables.png'
import Broccoli from '../../image/broccoli.png'
import Cabbage from '../../image/cabbage.png'
import Capsicum from '../../image/capsicum.png'
import Eggplant from '../../image/eggplant.png'
import Kale from '../../image/kale.png'
import Lettuce from '../../image/lettuce.png'
import Tofu from '../../image/tofu.png'

// Dairy
import Butter from '../../image/butter.png'
import Cheese from '../../image/cheese.png'
import CondensedMilk from '../../image/condensed-milk.png'
import DairyAndEggs from '../../image/dairy-and-eggs.png'
import Eggs from '../../image/eggs.png'
import Milk from '../../image/milk.png'
import RicottaCheese from '../../image/ricotta-cheese.png'
import SliceCheese from '../../image/slice-cheese.png'
import Yogurt from '../../image/yogurt.png'

// SeaFood
import Salmon from '../../image/salmon.png'
import Shrimp from '../../image/shrimp.png'
import Tilapia from '../../image/tilapia.png'

//Meat

import chickenbreast from '../../image/chicken-breast.png'
import beef from '../../image/beef.png'


const products = [
    // --- FRUITS ---
    {
        id: 1,
        name: 'Organic Banana',
        category: 'Fruits',
        image: Banana,
        price: 1.50,
        rating: 4.5
    },
    
    {
        id: 2,
        name: 'Green Grapes',
        category: 'Fruits',
        image: Grapes,
        price: 3.20,
        rating: 4.2
    },
    {
        id: 3,
        name: 'Fresh Kiwi',
        category: 'Fruits',
        image: Kiwi,
        price: 2.50,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Whole Pineapple',
        category: 'Fruits',
        image: Pineapple,
        price: 4.00,
        rating: 4.6
    },
    {
        id: 5,
        name: 'Strawberry',
        category: 'Fruits',
        image: Strawberry,
        price: 4.99,
        rating: 5
    },

    // --- VEGETABLES ---
    {
        id: 6,
        name: 'Mixed Veg Basket',
        category: 'Vegetables',
        image: BasketFullVegetables,
        price: 8.50,
        rating: 4.9
    },
    {
        id: 7,
        name: 'Broccoli',
        category: 'Vegetables',
        image: Broccoli,
        price: 2.99,
        rating: 4.8
    },
    {
        id: 8,
        name: 'Fresh Cabbage',
        category: 'Vegetables',
        image: Cabbage,
        price: 1.80,
        rating: 4.3
    },
    {
        id: 9,
        name: 'Red Capsicum',
        category: 'Vegetables',
        image: Capsicum,
        price: 2.40,
        rating: 4.4
    },
    {
        id: 10,
        name: 'Eggplant',
        category: 'Vegetables',
        image: Eggplant,
        price: 2.10,
        rating: 4.1
    },
    {
        id: 11,
        name: 'Organic Kale',
        category: 'Vegetables',
        image: Kale,
        price: 3.50,
        rating: 4.7
    },
    {
        id: 12,
        name: 'Lettuce Leaf',
        category: 'Vegetables',
        image: Lettuce,
        price: 1.99,
        rating: 4.2
    },
    {
        id: 13,
        name: 'Organic Tofu',
        category: 'Dairy',
        image: Tofu,
        price: 3.00,
        rating: 4.6
    },

    // --- DAIRY ---
    {
        id: 14,
        name: 'Salted Butter',
        category: 'Dairy',
        image: Butter,
        price: 4.10,
        rating: 4.6
    },
    {
        id: 15,
        name: 'Cheddar Block',
        category: 'Dairy',
        image: Cheese,
        price: 5.20,
        rating: 4.7
    },
    {
        id: 16,
        name: 'Condensed Milk',
        category: 'Dairy',
        image: CondensedMilk,
        price: 3.80,
        rating: 4.5
    },
    {
        id: 17,
        name: 'Dairy Combo',
        category: 'Dairy',
        image: DairyAndEggs,
        price: 12.00,
        rating: 4.9
    },
    {
        id: 18,
        name: 'Farm Eggs (6pcs)',
        category: 'Dairy',
        image: Eggs,
        price: 3.99,
        rating: 4.8
    },
    {
        id: 19,
        name: 'Fresh Milk',
        category: 'Dairy',
        image: Milk,
        price: 3.50,
        rating: 4.9
    },
    {
        id: 20,
        name: 'Ricotta Cheese',
        category: 'Dairy',
        image: RicottaCheese,
        price: 6.50,
        rating: 4.7
    },
    {
        id: 21,
        name: 'Sliced Cheese',
        category: 'Dairy',
        image: SliceCheese,
        price: 4.50,
        rating: 4.4
    },
    {
        id: 22,
        name: 'Natural Yogurt',
        category: 'Dairy',
        image: Yogurt,
        price: 2.80,
        rating: 4.8
    },

    // --- SEAFOOD ---
    {
        id: 23,
        name: 'Atlantic Salmon',
        category: 'SeaFood',
        image: Salmon,
        price: 12.99,
        rating: 4.9
    },
    {
        id: 24,
        name: 'Fresh Shrimp',
        category: 'SeaFood',
        image: Shrimp,
        price: 10.50,
        rating: 4.7
    },
    {
        id: 25,
        name: 'Tilapia Fillet',
        category: 'SeaFood',
        image: Tilapia,
        price: 8.99,
        rating: 4.5
    },
    {
        id: 26,
        name: 'Beef',
        category: 'meat',
        image: beef,
        price: 1.50,
        rating: 3.5
    },
    {
        id: 27,
        name: 'Chicken Breast',
        category: 'meat',
        image: chickenbreast,
        price: 1.50,
        rating: 2.5
    }
];

export default products;