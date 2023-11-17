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
    bgColor?: string,
    completed: boolean
}[] = [
    {
        "id": "weather_app_live_2",
        "image": "https://i.ibb.co/jkvgwgY/hacker-weather.png",
        "number": 11,
        "name": "Weather App Live",
        "description": "Resources for the Weather App workshop",
        "moreDescription": "Resources for the Weather App workshop",
        "completed": false
    },
    {
        "id": "weather_app",
        "image": `https://cloud-fw0yxvsf2.vercel.app/0screenshot_from_2020-10-23_19-26-13.png`,
        "number": 10,
        "name": "Weather App",
        "description": "Build a Weather App using HTML, CSS, and JS!",
        "moreDescription": "Build a Weather App using HTML, CSS, and JS!",
        customUrl: "https://workshops.hackclub.com/weather_app/",
        "startDate": "12/2/2022",
        "completed": false
    },
    {
        "id": "monkey_live_2",
        "image": "https://i.ibb.co/zncr2J1/hctype.gif",
        "number": 11,
        "name": "HackClubType Live",
        "description": `Build a custom MonkeyType clone, HackClubType, using HTML, CSS, and JS!`,
        "moreDescription": `Build a custom MonkeyType clone using HTML, CSS, and JS!`,
        "completed": true
    },
    {
        "id": "",
        "image": "https://cloud-gny03pu07.vercel.app/0javascript_typing_test_cover.png",
        "number": 11,
        "customUrl": "https://workshops.hackclub.com/javascript_typing_test/",
        "name": "Typing Test Self-Guided",
        "description": "Build a Typing Test with HTML, CSS, and JS!",
        "moreDescription": "Build a Typing Test with HTML, CSS, and JS!",
        "completed": true
    },
    {
        "id": "particle_physics_live_2",
        "image": "https://i.ibb.co/jGG6sLY/satisfying-1.gif",
        "number": 11,
        "name": "Particle Physics Live",
        "description": "Resources for the live particle physics workshop!",
        "moreDescription": "Build a custom particle physics simulation using HTML and P5.JS!",
        "completed": true
    },
    {
        "id": "",
        "image": "https://i.ibb.co/TWyYVmy/particlephysics.gif",
        "number": 11,
        "customUrl": "https://workshops.hackclub.com/particle_physics/",
        "name": "Particle Physics Self-Guided",
        "description": "Build a particle physics simulation website using HTML and JS!",
        "moreDescription": "Build a particle physics simulation website using HTML and JS!",
        "completed": true
    },
    {
        "id": "soundboard_live_2",
        "image": "https://i.ibb.co/VQs95sc/spooky.gif",
        "number": 17,
        "name": "Spooky Sound Board 🎃",
        "description": "Build a spooktacular soundboard in preparation for 10/31 with HTML, CSS, and JS!",
        "moreDescription": "Build a spooktacular soundboard in preparation for 10/31 with HTML, CSS, and JS!",
        "completed": true
    },
    {
        "id": "tunes_on_js_live",
        "image": `https://i.ibb.co/QXLY6bv/piano-web.gif`,
        "number": 16,
        "name": "Tunes on JS Live",
        "description": "Resources for the Live Tunes on JS workshop",
        "moreDescription": "Resources for the Live Tunes on JS workshop",
        "completed": true
    },
    {
        "id": "tunes_on_js",
        "image": `https://i.ibb.co/sqYD7Rh/pianos-on-web-2.gif`,
        "number": 16,
        "name": "Tunes on JS Self-Guided",
        "description": "Resources for the Tunes on JS self-guided workshop",
        "moreDescription": "Resources for the Tunes on JS self-guided workshop",
        "completed": true,
        customUrl: "https://workshops.hackclub.com/tunes/"
    },
    {
        "id": "password_generator_live_2",
        "image": `https://i.ibb.co/txH0TKQ/passwordgen.png`,
        "number": 15,
        "name": "Password Generator Live (v2)",
        "description": "Resources for the Live Password Generator workshop",
        "moreDescription": "Resources for the Live Password Generator workshop",
        "completed": true
    },
    {
        "id": "password_generator",
        "image": `https://cloud-nu1ftbbxy.vercel.app/0sample-demo.png`,
        "number": 15,
        "name": "Password Generator Self-Guided",
        "description": "Generate passwords for your internet needs with HTML, CSS, and JS!",
        "moreDescription": "Generate passwords for your internet needs with HTML, CSS, and JS!",
        customUrl: "https://workshops.hackclub.com/password_generator/",
        "completed": true
    },
    {
        "id": "aitripplanner",
        "image": "https://i.ibb.co/tY1H21H/Slide-1aitripplanner.jpg",
        "number": 15,
        "name": "AI Trip Planner",
        "description": "Create a custom trip planner using HTML and OpenAI's GPT API!",
        "moreDescription": "Using HTML and OpenAI's GPT API, create a custom trip planner! You can do this jam live or self-paced!",
        "completed": true
    },
    {
        "id": "discord_bot_live",
        "image": "https://externlabs.com/blogs/wp-content/uploads/2023/04/discord-bot-1.jpg",
        "number": 15,
        "name": "Discord Bot Live (If Notion doesn't work)",
        "description": "Resources for the Live Discord Bot workshop",
        "moreDescription": "Resources for the Live Discord Bot workshop",
        "completed": true
    },
    {
        "id": "clubvillage",
        "image": "https://i.ibb.co/ZK53y41/0image.png",
        "customUrl": "https://jams.hackclub.com/jam/3d-club-village",
        "number": 14,
        "name": "Custom 3D Club Village",
        "description": "Create a custom 3D club village using Spline! You can do this jam self-paced or live.",
        "moreDescription": "Using Spline, create a Custom, 3D club village! You can do this jam live or self-paced!",
        "completed": true
    },
    {
        "id": "personalos",
        "image": "https://i.ibb.co/b138jyn/hackclub-os.gif",
        "customUrl": "https://jams.hackclub.com/batch/webOS",
        "number": 13,
        "name": "Personal Web-Based Operating System",
        "description": "Build a custom, web-based operating system! You can do this Jam live or self-paced!",
        "moreDescription": "Build a custom, web-based operating system. Zero experience needed!",
        "completed": true
    },
    {
        "id": "monkey_live",
        "image": "https://i.ibb.co/zncr2J1/hctype.gif",
        "number": 11,
        "name": "MonkeyType 2.0 Live",
        "description": "Resources for the live MonkeyType 2.0 workshop!",
        "moreDescription": "Build a custom MonkeyType clone with HTML, CSS, and JS!",
        "completed": true
    },
    {
        "id": "",
        "image": "https://cloud-gny03pu07.vercel.app/0javascript_typing_test_cover.png",
        "number": 11,
        "customUrl": "https://workshops.hackclub.com/javascript_typing_test/",
        "name": "Typing Test Self-Guided",
        "description": "Build a Typing Test with HTML, CSS, and JS!",
        "moreDescription": "Build a Typing Test with HTML, CSS, and JS!",
        "completed": true
    },
    {
        "id": "particle_physics_live",
        "image": "https://i.ibb.co/jGG6sLY/satisfying-1.gif",
        "number": 11,
        "name": "Particle Physics Live",
        "description": "Resources for the live particle physics workshop!",
        "moreDescription": "Build a custom particle physics simulation using HTML and P5.JS!",
        "completed": true
    },
    {
        "id": "",
        "image": "https://i.ibb.co/TWyYVmy/particlephysics.gif",
        "number": 11,
        "customUrl": "https://workshops.hackclub.com/particle_physics/",
        "name": "Particle Physics",
        "description": "Build a particle physics simulation website using HTML and JS!",
        "moreDescription": "Build a particle physics simulation website using HTML and JS!",
        "completed": true
    },
    {
        "id": "vr_live",
        "image": "https://i.ibb.co/ct1Bcgm/hcvr-demo.gif",
        "number": 11,
        "name": "VR World Live",
        "description": "Resources for the live VR world workshop!",
        "moreDescription": "Build a custom VR world in Replit using AFrame and HTML!",
        "completed": true
    },
    {
        "id": "vr",
        "image": "https://i.ibb.co/ct1Bcgm/hcvr-demo.gif",
        "number": 11,
        "name": "VR World",
        "description": "Build a custom VR world in Replit using AFrame and HTML!",
        "moreDescription": "Build a custom VR world in Replit using AFrame and HTML!",
        "completed": true
    },
    {
        "id": "soundboard_live",
        "image": "https://i.ibb.co/L0T57MR/gaming-sb.gif",
        "number": 11,
        "name": "Sound Board Live",
        "description": "Build a custom soundboard using HTML, CSS, and JS!",
        "moreDescription": "Build a custom soundboard using HTML, CSS, and JS!",
        "completed": true
    },
    {
        "id": "soundboard",
        "image": "https://i.ibb.co/7y9rwKh/clash-sb.png",
        "number": 11,
        "name": "Sound Board",
        "description": "Build a custom soundboard using HTML, CSS, and JS!",
        "moreDescription": "Build a custom soundboard using HTML, CSS, and JS!",
        "completed": true,
    },
    {
        "id": "pixel_pad_live",
        "image": "https://i.ibb.co/c8YHYJD/live-banner.png",
        "number": 11,
        "name": "Pixel Pad Live",
        "description": "Build your own Pixel Pad using HTML and Java!",
        "moreDescription": "Build your own Pixel Pad using HTML and Java!",
        "completed": true
    },
    {
        "id": "pixel_pad",
        "image": "https://i.ibb.co/hXqYmVx/self-guided-banner.png",
        "number": 11,
        "name": "Pixel Pad",
        "description": "Build your own Pixel Pad using HTML and Java!",
        "moreDescription": "Build your own Pixel Pad using HTML and Java!",
        "completed": true,
        "customUrl": "https://workshops.hackclub.com/pixel_art_pad/"
    },
    {
        "id": "personal_website_v2_live",
        "image": "https://i.ibb.co/Lk1NcyN/sam-poder.png",
        "number": 11,
        "name": "Personal Website V2 Live",
        "description": "Build your own personal website live, V2!",
        "moreDescription": "Build your own personal website live, V2!",
        "completed": true
    },
    {
        "id": "personal_website_v2",
        "image": "https://i.ibb.co/fqLCHq3/kat-h.png",
        "number": 11,
        "name": "Personal Website V2",
        "description": "Build your own personal website, V2!",
        "moreDescription": "Build your own personal website, V2!",
        "completed": true
    },
    {
        "id": "speak_colors_live",
        "image": "https://i.ibb.co/2YPVjgD/cool-colors.gif",
        "number": 11,
        "name": "Speak Colors Live",
        "description": "Resources for the Speak Colors workshop",
        "moreDescription": "Resources for the Speak Colors live workshop",
        "completed": true
    },
    {
        "id": "speak_colors",
        "image": `https://i.ibb.co/2YPVjgD/cool-colors.gif`,
        "number": 10,
        "name": "Speak Colors",
        "description": "Build a website that changes colors with your voice using HTML, CSS, and JS!",
        "moreDescription": "Build a website that changes colors with your voice using HTML, CSS, and JS!",
        customUrl: "https://workshops.hackclub.com/speak_colors/",
        "startDate": "12/2/2022",
        "completed": true
    },
    {
        "id": "weather_app_live",
        "image": "https://i.ibb.co/jkvgwgY/hacker-weather.png",
        "number": 11,
        "name": "Weather App Live",
        "description": "Resources for the Weather App workshop",
        "moreDescription": "Resources for the Weather App workshop",
        "completed": true
    },
    {
        "id": "weather_app",
        "image": `https://cloud-fw0yxvsf2.vercel.app/0screenshot_from_2020-10-23_19-26-13.png`,
        "number": 10,
        "name": "Weather App",
        "description": "Build a Weather App using HTML, CSS, and JS!",
        "moreDescription": "Build a Weather App using HTML, CSS, and JS!",
        customUrl: "https://workshops.hackclub.com/weather_app/",
        "startDate": "12/2/2022",
        "completed": true
    },
    {
        "id": "sound_galaxy_live",
        "image": `https://i.ibb.co/BCxhmkm/sound-gal.gif`,
        "number": 11,
        "name": "Sound Galaxy Live",
        "description": "Resources for the Sound Galaxy workshop",
        "moreDescription": "Resources for the Sound Galaxy workshop",
        "completed": true
    },
    {
        "id": "sound_galaxy",
        "image": `https://i.ibb.co/dfyfdHN/sound-galaxy-1.gif`,
        "number": 10,
        "name": "Sound Galaxy",
        "description": "Build a sound visualizer using HTML, JS, and P5!",
        "moreDescription": "Build a sound visualizer using HTML, JS, and P5!",
        customUrl: "https://workshops.hackclub.com/sound_galaxy/",
        "startDate": "12/2/2022",
        "completed": true
    },
    {
        "id": "teachable_machine_live",
        "image": `https://i.ibb.co/sbhXjr4/Ice-Cream-Finder.gif`,
        "number": 9,
        "name": "Teachable Machine Live",
        "description": "Resources for the Live Teachable Machine workshop",
        "moreDescription": "Resources for the Live Teachable Machine workshop",
        "completed": true
    },
    {
        "id": "teachable_machine",
        "image": `https://i.ibb.co/sbhXjr4/Ice-Cream-Finder.gif`,
        "number": 8,
        "name": "Teachable Machine",
        "description": "Build a website that uses AI to recognize objects using Teachable Machine and HTML!",
        "moreDescription": "Build a website that uses AI to recognize objects using Teachable Machine and HTML!",
        customUrl: "https://workshops.hackclub.com/teachable_machine/",
        "startDate": "12/2/2022",
        "completed": true
    },
    {
        "id": "password_generator_live",
        "image": `https://i.ibb.co/txH0TKQ/passwordgen.png`,
        "number": 7,
        "name": "Password Generator Live",
        "description": "Resources for the Live Password Generator workshop",
        "moreDescription": "Resources for the Live Password Generator workshop",
        "startDate": "12/2/2022",
        "completed": true
    },
    {
        "id": "password_generator",
        "image": `https://cloud-nu1ftbbxy.vercel.app/0sample-demo.png`,
        "number": 6,
        "name": "Password Generator",
        "description": "Generate passwords for your internet needs with HTML, CSS, and JS!",
        "moreDescription": "Generate passwords for your internet needs with HTML, CSS, and JS!",
        customUrl: "https://workshops.hackclub.com/password_generator/",
        "startDate": "12/2/2022",
        "completed": true
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
        "completed": true
    },
    {
        "id": "meme_generator_live",
        "image": `https://i.ibb.co/mT90SwH/meme-generator.png`,
        "number": 4,
        "name": "Meme Generator Live",
        "description": "Resources for the live Meme Generator workshop!",
        "moreDescription": "Resources for the live Meme Generator workshop!",
        "startDate": "12/2/2022",
        "completed": true
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
].map((value, i) => {
    value.number = i
    return value
})