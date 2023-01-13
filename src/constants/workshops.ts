export const WORKSHOPS: {
    id: string,
    image: string,
    number: number,
    name: string,
    description: string,
    moreDescription: string,
    customUrl?: string,
    startDate?: string,
    endDate?: string,
    completed: boolean
}[] = [
        {
            "id": "meme_generator_live",
            "image": `https://i.ibb.co/mT90SwH/meme-generator.png`,
            "number": 6,
            "name": "Meme Generator Live",
            "description": "Resources for the live Meme Generator workshop!",
            "moreDescription": "Resources for the live Meme Generator workshop!",
            "startDate": "12/2/2022",
            "completed": false
        },
        {
            "id": "meme_generator",
            "image": `https://i.ibb.co/Kbtnb45/0image.png`,
            "number": 5,
            "name": "Meme Generator",
            "description": "Create your own meme generator with HTML, CSS, and JavaScript!",
            "moreDescription": "Create your own meme generator with HTML, CSS, and JavaScript!",
            customUrl: "https://workshops.hackclub.com/meme_generator/",
            "startDate": "12/2/2022",
            "completed": false
        },
        {
            "id": "stuff_finder",
            "image": `https://i.ibb.co/6RDgwmP/Screen-Shot-2022-11-22-at-11-18-57-PM.png`,
            "number": 3,
            "name": "Stuff Finder",
            "description": "Build an ice cream finder with APIs, then customize it to find anything! Basic HTML/CSS knowledge needed.",
            "moreDescription": "Build an ice cream finder with APIs, then customize it to find anything! Stocks, movies, pokemon, etc",
            "startDate": "12/2/2022",
            "completed": true
        },
        {
            "id": "stuff_finder_basics",
            "image": `/images/Screen_Shot_2022-11-27_at_10.56.04_AM_(1).png`,
            "number": 2,
            "name": "Stuff Finder Basics",
            "description": "Build an ice cream finder, then customize it to find anything! Zero experience needed!",
            "moreDescription": "Build an ice cream finder with HTML and CSS, then customize it to find anything! Movies, stocks, pokemon -- you name it! No experience needed!",
            "startDate": "12/2/2022",
            "completed": true
        },
        {
            "id": "personal-website",
            "image": "https://i.ibb.co/RhFKcpZ/megasite-2.jpg",
            "number": 1,
            "name": "Personal Website",
            "description": "Start with a basic template & then build a custom personal website!",
            "moreDescription": "",
            "customUrl": "https://workshops.hackclub.com/personal_website/",
            "endDate": "10/1/2022",
            "completed": true
        },
    ]
