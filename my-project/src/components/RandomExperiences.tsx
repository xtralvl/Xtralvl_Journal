export interface RandomExperienceProps {
    handlePage: (page: string) => void;
};

export interface Adventure {
    title: string;
    description: string;
};

// 🏞️ Adventures with descriptions
export const randomAdventures: Adventure[] = [
  {
    title: "Sign up for an ATV ride",
    description: "Feel the adrenaline as you navigate rugged terrain on an all-terrain vehicle. Popular spots include Moab (USA), Whistler (Canada), and Andalusia (Spain)."
  },
  {
    title: "Take part in a white-water rafting adventure",
    description: "Experience thrilling rapids and teamwork as you conquer fast-flowing rivers. Famous rafting destinations are Colorado River (USA), Zambezi River (Zimbabwe), and Futaleufú River (Chile)."
  },
  {
    title: "Join a Halloween night run",
    description: "Run among spooky decorations and fellow costumed participants for a fun fitness challenge. Examples include Salem (USA), London (UK), and Tokyo (Japan)."
  },
  {
    title: "Go on a sunrise hike in the mountains",
    description: "Catch breathtaking views as the sun rises over the peaks. Great spots include Mount Fuji (Japan), Rocky Mountains (USA/Canada), and the Alps (Switzerland)."
  },
  {
    title: "Try kayaking on a nearby lake",
    description: "Paddle peacefully on calm waters, taking in the scenery around you. Top lakes include Lake Tahoe (USA), Lake Bled (Slovenia), and Loch Ness (Scotland)."
  },
  {
    title: "Camp overnight under the stars",
    description: "Reconnect with nature and enjoy a night under a sparkling sky. Ideal locations are Joshua Tree (USA), Lapland (Finland), and Atacama Desert (Chile)."
  },
  {
    title: "Explore a local cave",
    description: "Discover the hidden wonders beneath the earth's surface. Famous caves include Carlsbad Caverns (USA), Postojna Cave (Slovenia), and Waitomo Glowworm Caves (New Zealand)."
  },
  {
    title: "Go zip-lining through a forest",
    description: "Soar over treetops for an exhilarating experience with amazing views. Notable locations are Monteverde (Costa Rica), Whistler (Canada), and Chiang Mai (Thailand)."
  },
  {
    title: "Take a scenic bike ride along a trail",
    description: "Enjoy a leisurely or challenging ride while soaking in beautiful landscapes. Recommended trails are Pacific Coast Highway (USA), Danube Cycle Path (Europe), and Munda Biddi Trail (Australia)."
  },
  {
    title: "Go paddleboarding on a river",
    description: "Combine balance and relaxation while gliding across calm rivers. Try the Thames (UK), Mekong River (Vietnam), or Colorado River (USA)."
  },
  {
    title: "Attend a small-town autumn festival",
    description: "Celebrate local culture, food, and crafts in a cozy atmosphere. Notable festivals include Woodstock (USA), Rothenburg ob der Tauber (Germany), and Nara (Japan)."
  },
  {
    title: "Try ice skating outdoors",
    description: "Enjoy gliding on natural ice surrounded by winter scenery. Popular spots are Central Park (USA), Lake Louise (Canada), and Amsterdam Canals (Netherlands)."
  },
  {
    title: "Take a road trip to a random town",
    description: "Discover hidden gems, local foods, and charming streets. Inspiring towns include Carmel-by-the-Sea (USA), Sintra (Portugal), and Hallstatt (Austria)."
  },
  {
    title: "Try to catch a glimpse of a sasquatch in the woods",
    description: "Add a bit of mystery to your adventure by exploring forests with legends of cryptids. Places with tales include Pacific Northwest (USA), British Columbia (Canada), and Scottish Highlands (UK)."
  },
  {
    title: "Go for a spontaneous trail run",
    description: "Boost your fitness and explore new paths without planning ahead. Excellent locations are Yosemite (USA), Blue Mountains (Australia), and Dolomites (Italy)."
  }
];