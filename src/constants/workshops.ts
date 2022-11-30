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
            "id": "stuff_finder",
            "image": `https://i.ibb.co/6RDgwmP/Screen-Shot-2022-11-22-at-11-18-57-PM.png`,
            "number": 4,
            "name": "Stuff Finder",
            "description": "Start with a template then build a website to find stuff! Ice cream, stocks, pokemon -- you name it!",
            "moreDescription": "Start with a template, then build a website to find stuff! Ice cream, stocks, pokemon -- you name it!",
            "startDate": "12/2/2022",
            "completed": true
        }
    ]
