export interface RandomExperienceProps {
  handlePage: (page: string) => void;
};

export interface Adventure {
  title: string;
  description: string;
};

// 🏞️ Adventures with detailed descriptions, locations, and fun facts
export const randomAdventures: Adventure[] = [
{
  title: "Sign up for an ATV ride",
  description: "Feel the adrenaline as you navigate rugged terrain on an all-terrain vehicle. Popular spots include Moab (USA), Whistler (Canada), and Andalusia (Spain). Fun fact: Moab hosts the famous Jeep Safari every year, attracting off-road enthusiasts from around the world."
},
{
  title: "Take part in a white-water rafting adventure",
  description: "Experience thrilling rapids and teamwork as you conquer fast-flowing rivers. Famous rafting destinations are Colorado River (USA), Zambezi River (Zimbabwe), and Futaleufú River (Chile). Fun fact: The Zambezi River has some of the most intense Class V rapids, perfect for thrill-seekers."
},
{
  title: "Join a Halloween night run",
  description: "Run among spooky decorations and costumed participants for a fun fitness challenge. Examples include Salem (USA), London (UK), and Tokyo (Japan). Fun fact: Salem hosts a month-long celebration for Halloween due to its historic witch trials."
},
{
  title: "Go on a sunrise hike in the mountains",
  description: "Catch breathtaking views as the sun rises over peaks. Great spots include Mount Fuji (Japan), Rocky Mountains (USA/Canada), and the Alps (Switzerland). Fun fact: Early morning hikes provide the best chance to see wildlife in their natural habitat."
},
{
  title: "Try kayaking on a nearby lake",
  description: "Paddle peacefully on calm waters, taking in the scenery. Top lakes include Lake Tahoe (USA), Lake Bled (Slovenia), and Loch Ness (Scotland). Fun fact: Lake Bled features a small island with a historic church, accessible only by rowboat."
},
{
  title: "Camp overnight under the stars",
  description: "Reconnect with nature and enjoy a night under a sparkling sky. Ideal locations are Joshua Tree (USA), Lapland (Finland), and Atacama Desert (Chile). Fun fact: The Atacama Desert is one of the best places on Earth for stargazing due to its dry climate and high altitude."
},
{
  title: "Explore a local cave",
  description: "Discover hidden wonders beneath the earth's surface. Famous caves include Carlsbad Caverns (USA), Postojna Cave (Slovenia), and Waitomo Glowworm Caves (New Zealand). Fun fact: Waitomo is famous for its glowing worms that light up the cave ceilings like stars."
},
{
  title: "Go zip-lining through a forest",
  description: "Soar over treetops for an exhilarating experience with amazing views. Notable locations are Monteverde (Costa Rica), Whistler (Canada), and Chiang Mai (Thailand). Fun fact: Monteverde is home to a vast cloud forest, teeming with exotic birds and wildlife."
},
{
  title: "Take a scenic bike ride along a trail",
  description: "Enjoy a leisurely or challenging ride while soaking in beautiful landscapes. Recommended trails are Pacific Coast Highway (USA), Danube Cycle Path (Europe), and Munda Biddi Trail (Australia). Fun fact: The Danube Cycle Path passes through ten different countries, offering diverse cultural experiences."
},
{
  title: "Go paddleboarding on a river",
  description: "Combine balance and relaxation while gliding across calm rivers. Try the Thames (UK), Mekong River (Vietnam), or Colorado River (USA). Fun fact: Paddleboarding originated in Hawaii in the 1940s as a way for surfers to practice balance off the waves."
},
{
  title: "Attend a small-town autumn festival",
  description: "Celebrate local culture, food, and crafts in a cozy atmosphere. Notable festivals include Woodstock (USA), Rothenburg ob der Tauber (Germany), and Nara (Japan). Fun fact: Rothenburg transforms into a medieval wonderland with candlelit streets and festive markets."
},
{
  title: "Try ice skating outdoors",
  description: "Enjoy gliding on natural ice surrounded by winter scenery. Popular spots are Central Park (USA), Lake Louise (Canada), and Amsterdam Canals (Netherlands). Fun fact: The Amsterdam canals freeze only in very cold winters, providing a unique skating experience."
},
{
  title: "Take a road trip to a random town",
  description: "Discover hidden gems, local foods, and charming streets. Inspiring towns include Carmel-by-the-Sea (USA), Sintra (Portugal), and Hallstatt (Austria). Fun fact: Hallstatt is considered one of the most picturesque villages in the world and is a UNESCO World Heritage Site."
},
{
  title: "Try to catch a glimpse of a sasquatch in the woods",
  description: "Add a bit of mystery to your adventure by exploring forests with legends of cryptids. Places with tales include Pacific Northwest (USA), British Columbia (Canada), and Scottish Highlands (UK). Fun fact: Many hikers report strange footprints, adding to the lore of Bigfoot sightings."
},
{
  title: "Go for a spontaneous trail run",
  description: "Boost your fitness and explore new paths without planning ahead. Excellent locations are Yosemite (USA), Blue Mountains (Australia), and Dolomites (Italy). Fun fact: Early morning trail runs can reward you with misty views and the sounds of nature waking up."
},
{
  title: "Attend a local cooking class",
  description: "Learn regional dishes from experienced chefs. Great places include Tuscany (Italy), Bangkok (Thailand), and Oaxaca (Mexico). Fun fact: Cooking classes often include market tours to select fresh, local ingredients."
},
{
  title: "Explore hidden waterfalls",
  description: "Hike to secret waterfalls tucked away in forests or mountains. Popular destinations are Plitvice Lakes (Croatia), Havasu Falls (USA), and Iguazu Falls (Argentina/Brazil). Fun fact: Havasu Falls features turquoise waters due to its high mineral content."
},
{
  title: "Visit a local farmer’s market",
  description: "Sample fresh produce, artisanal goods, and connect with local vendors. Recommended spots include Portland (USA), Lyon (France), and Kyoto (Japan). Fun fact: Portland’s farmers markets are known for unique food trucks and live music."
},
{
  title: "Go snorkeling in crystal-clear waters",
  description: "Discover vibrant marine life and coral reefs. Best locations include Great Barrier Reef (Australia), Maldives, and Bonaire (Caribbean). Fun fact: Bonaire is often called the 'shore diving capital of the world.'"
},
{
  title: "Try hot air ballooning at sunrise",
  description: "Float gently over scenic landscapes as the sun rises. Iconic locations include Cappadocia (Turkey), Serengeti (Tanzania), and Albuquerque (USA). Fun fact: Cappadocia’s balloon rides pass over surreal rock formations called fairy chimneys."
},
{
  title: "Go horseback riding along a beach",
  description: "Feel the wind in your hair as you trot along sandy shores. Top spots include Costa Rica, Iceland, and California (USA). Fun fact: Riding on Icelandic beaches often allows you to spot wild horses running freely."
},
{
  title: "Explore ancient ruins",
  description: "Step back in time as you wander through historic ruins. Must-see sites include Machu Picchu (Peru), Petra (Jordan), and Angkor Wat (Cambodia). Fun fact: Machu Picchu is often shrouded in mist, giving it a mystical aura during early mornings."
},
{
  title: "Take a photography tour",
  description: "Capture stunning landscapes and cityscapes guided by local photographers. Locations: Iceland, Venice (Italy), and Banff (Canada). Fun fact: Some photography tours focus on night skies and auroras for incredible shots."
},
{
  title: "Go on a wine-tasting tour",
  description: "Sip regional wines while learning about the winemaking process. Great regions: Napa Valley (USA), Bordeaux (France), and Barossa Valley (Australia). Fun fact: Bordeaux has been producing wine for over 2,000 years!"
},
{
  title: "Participate in a cultural dance workshop",
  description: "Learn traditional dances and immerse yourself in local culture. Notable locations: Cuba, Bali (Indonesia), and Buenos Aires (Argentina). Fun fact: Argentine tango workshops often include a night of social dancing called milonga."
},
{
  title: "Take a guided ghost tour",
  description: "Explore haunted sites and hear eerie stories. Popular destinations: Edinburgh (UK), Savannah (USA), and Prague (Czech Republic). Fun fact: Edinburgh Castle has a long history of paranormal sightings."
},
{
  title: "Go whale watching",
  description: "See majestic whales in their natural habitat. Recommended spots: Alaska (USA), Hermanus (South Africa), and Iceland. Fun fact: Hermanus is famous for land-based whale watching along its cliffside paths."
},
{
  title: "Learn to surf at the beach",
  description: "Catch waves and improve your balance on the water. Top surfing spots: Gold Coast (Australia), Hawaii (USA), and Biarritz (France). Fun fact: Hawaii’s waves are legendary for advanced surfers, while beginner-friendly beaches abound in Bali."
},
{
  title: "Go on a scenic train journey",
  description: "Experience landscapes while relaxing on a train ride. Must-do routes: Glacier Express (Switzerland), Rocky Mountaineer (Canada), and Trans-Siberian Railway (Russia). Fun fact: The Glacier Express crosses 291 bridges and 91 tunnels over 8 hours!"
},
{
  title: "Visit a local artisan workshop",
  description: "Watch craftspeople create unique items and try your hand at making your own. Locations: Marrakesh (Morocco), Florence (Italy), and Jaipur (India). Fun fact: Florence workshops often specialize in leather, gold, and paper marbling crafts."
},
{
  title: "Go stargazing in a dark sky reserve",
  description: "Marvel at the night sky far from city lights. Best reserves: Aoraki Mackenzie (New Zealand), NamibRand (Namibia), and Kerry Dark Sky Reserve (Ireland). Fun fact: Aoraki Mackenzie is home to the International Dark Sky Reserve, one of the darkest places on Earth."
},
{
  title: "Take a culinary walking tour",
  description: "Sample street food and local specialties on foot. Notable cities: Bangkok (Thailand), Oaxaca (Mexico), and Barcelona (Spain). Fun fact: Bangkok’s street food culture has been recognized globally for its quality and variety."
},
{
  title: "Go rock climbing outdoors",
  description: "Challenge yourself on natural rock formations. Top locations: Yosemite (USA), Railay Beach (Thailand), and Kalymnos (Greece). Fun fact: Kalymnos is known as a world-class climbing destination with over 3,000 routes."
},
{
  title: "Try paragliding over mountains",
  description: "Feel the freedom of flight above scenic landscapes. Great spots: Interlaken (Switzerland), Pokhara (Nepal), and Medellín (Colombia). Fun fact: Interlaken offers tandem flights over lakes and the Eiger, Mönch, and Jungfrau peaks."
},
{
  title: "Take a pottery class",
  description: "Learn to shape clay and create your own pottery pieces. Recommended locations: Oaxaca (Mexico), Kyoto (Japan), and Florence (Italy). Fun fact: Kyoto has been producing delicate ceramics for over 1,000 years."
},
{
  title: "Go birdwatching in a nature reserve",
  description: "Spot rare and exotic birds in their natural habitats. Top spots: Costa Rica, Danum Valley (Malaysia), and Everglades (USA). Fun fact: Danum Valley Rainforest is home to over 300 bird species, including hornbills and trogons."
},
{
  title: "Try scuba diving in a coral reef",
  description: "Explore underwater worlds filled with colorful marine life. Locations: Great Barrier Reef (Australia), Palawan (Philippines), and Red Sea (Egypt). Fun fact: Palawan’s Tubbataha Reef is a UNESCO World Heritage Site, renowned for biodiversity."
},
{
  title: "Go horseback trekking in the mountains",
  description: "Combine adventure and nature while exploring trails on horseback. Spots: Patagonia (Argentina/Chile), Dolomites (Italy), and Scottish Highlands (UK). Fun fact: Scottish Highlands often allow you to ride past ancient castles and misty lochs."
},
{
  title: "Attend a local music festival",
  description: "Experience live music and local vibes. Recommended festivals: Glastonbury (UK), Coachella (USA), and Tomorrowland (Belgium). Fun fact: Coachella attracts thousands of international visitors and artists every year."
},
{
  title: "Take a hot springs bath",
  description: "Relax in natural thermal waters surrounded by scenic landscapes. Great locations: Iceland, Beppu (Japan), and Rotorua (New Zealand). Fun fact: Beppu has over 2,000 hot springs and is known as Japan’s spa capital."
},
{
  title: "Go on a scenic coastal drive",
  description: "Enjoy breathtaking ocean views while driving. Recommended routes: Pacific Coast Highway (USA), Great Ocean Road (Australia), and Amalfi Coast (Italy). Fun fact: The Great Ocean Road features the famous Twelve Apostles, dramatic limestone stacks rising from the sea."
},
{
  title: "Try sandboarding in the desert",
  description: "Experience thrilling rides down sand dunes. Top spots: Huacachina (Peru), Dubai (UAE), and Namib Desert (Namibia). Fun fact: Huacachina is an oasis surrounded by massive dunes, ideal for sandboarding at sunset."
},
{
  title: "Join a local wildlife conservation project",
  description: "Help protect endangered species and their habitats. Locations: Borneo (Malaysia), Galapagos Islands (Ecuador), and South Africa. Fun fact: Volunteers in Borneo often help with orangutan rehabilitation programs."
},
{
  title: "Take a river cruise",
  description: "Relax on a boat and explore cities or natural landscapes from the water. Recommended rivers: Danube (Europe), Amazon (South America), and Nile (Egypt). Fun fact: The Amazon River cruise offers a chance to see pink river dolphins."
},
{
  title: "Go canyoning in wild rivers",
  description: "Descend waterfalls, jump into pools, and explore gorges. Best locations: Alps (France/Switzerland), Costa Rica, and Norway. Fun fact: Norway’s fjords are ideal for combining canyoning with breathtaking views of cliffs and waterfalls."
},
{
  title: "Explore a national park on horseback",
  description: "Ride through protected landscapes and spot wildlife. Great parks: Yellowstone (USA), Banff (Canada), and Torres del Paine (Chile). Fun fact: Yellowstone was the first national park in the world, established in 1872."
},
{
  title: "Try a night-time city photography walk",
  description: "Capture city lights and nocturnal scenes with guidance. Top cities: Tokyo (Japan), New York (USA), and Paris (France). Fun fact: Paris at night is often called 'La Ville Lumière' (The City of Light) due to its iconic illuminated monuments."
}
];
