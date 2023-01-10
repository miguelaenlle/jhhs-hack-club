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
        {
            "id": "hack_kahoot",
            "image": `https://i.ibb.co/pnRFgqv/kahoot-hack.png`,
            "number": 5,
            "name": "Hacking Kahoot",
            "description": "Hack Kahoot to make it do whatever you want! 🐱‍💻",
            "moreDescription": "Hack Kahoot to make it do whatever you want!",
            "startDate": "12/2/2022",
            "completed": true
        },
        {
            "id": "stuff_finder",
            "image": `https://i.ibb.co/6RDgwmP/Screen-Shot-2022-11-22-at-11-18-57-PM.png`,
            "number": 4,
            "name": "Stuff Finder",
            "description": "Build an ice cream finder with APIs, then customize it to find anything! Basic HTML/CSS knowledge needed.",
            "moreDescription": "Build an ice cream finder with APIs, then customize it to find anything! Stocks, movies, pokemon, etc",
            "startDate": "12/2/2022",
            "completed": true
        },
        {
            "id": "stuff_finder_basics",
            "image": `/images/Screen_Shot_2022-11-27_at_10.56.04_AM_(1).png`,
            "number": 4,
            "name": "Stuff Finder Basics",
            "description": "Build an ice cream finder, then customize it to find anything! Zero experience needed!",
            "moreDescription": "Build an ice cream finder with HTML and CSS, then customize it to find anything! Movies, stocks, pokemon -- you name it! No experience needed!",
            "startDate": "12/2/2022",
            "completed": true
        }
    ]
