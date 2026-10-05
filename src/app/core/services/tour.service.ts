import { Injectable } from '@angular/core';
import { Tour, Destination, Package, Activity, FeaturedCard } from '../models/tour.model';

@Injectable({ providedIn: 'root' })
export class TourService {

  private tours: Tour[] = [
    { name: 'Astore Valley',            slug: 'astore-valley',      tags: ['astore','valley','gilgit','baltistan','trekking','nature'],     img: '/assets/pics/Astore-valley.webp',                  duration: '5–7 Days',   type: 'Destination' },
    { name: 'Fairy Meadows',            slug: 'fairy-meadows',      tags: ['fairy','meadows','nanga parbat','basecamp','trekking'],          img: '/assets/pics/Fairy Meadows Hunza Tour.webp',       duration: '4–6 Days',   type: 'Destination' },
    { name: 'Hunza Valley',             slug: 'hunza-valley',       tags: ['hunza','valley','gilgit','karimabad','rakaposhi'],               img: '/assets/pics/Fairy Meadows Hunza Tour.webp',       duration: '6–8 Days',   type: 'Destination' },
    { name: 'K2 Base Camp',             slug: 'k2',                 tags: ['k2','base camp','trek','mountaineering','skardu','baltoro'],     img: '/assets/pics/Fairy Meadows Skardu Excursion.webp', duration: '14–18 Days', type: 'Trekking'     },
    { name: 'Kumrat Valley',            slug: 'kumrat-valley',      tags: ['kumrat','valley','kpk','dir','waterfall','camping'],             img: '/assets/pics/kumrat-valley.webp',                  duration: '3–5 Days',   type: 'Destination' },
    { name: 'Kalash Valley Chitral',    slug: 'kalash-valley',      tags: ['kalash','valley','chitral','culture','festival','kpk'],          img: '/assets/pics/kalash-valley.webp',                  duration: '4–6 Days',   type: 'Culture'      },
    { name: 'Naran Kaghan',             slug: 'naran-kaghan',       tags: ['naran','kaghan','valley','lake','saif ul malook','kpk'],         img: '/assets/pics/naran-kaghan.webp',                   duration: '3–5 Days',   type: 'Destination' },
    { name: 'Neelum Valley',            slug: 'neelum-valley',      tags: ['neelum','valley','azad kashmir','river','green','kashmir'],      img: '/assets/pics/neelum-valley.webp',                  duration: '4–6 Days',   type: 'Destination' },
    { name: 'Skardu Valley',            slug: 'skardu-valley',      tags: ['skardu','valley','gilgit','baltistan','lake','desert','cold'],   img: '/assets/pics/skardu-valley.webp',                  duration: '6–8 Days',   type: 'Destination' },
    { name: 'Shogran Valley',           slug: 'shogran-valley',     tags: ['shogran','valley','kpk','hill station','pine','forest'],         img: '/assets/pics/shogran-valley.webp',                 duration: '2–4 Days',   type: 'Destination' },
    { name: 'Swat Valley',              slug: 'swat-valley',        tags: ['swat','valley','kpk','mingora','history','culture','green'],     img: '/assets/pics/swat-valley.webp',                    duration: '4–6 Days',   type: 'Destination' },
    { name: 'Umbrella Waterfall',       slug: 'umbrella-waterfall', tags: ['umbrella','waterfall','murree','hike','nature'],                 img: '/assets/pics/umbrella-waterfall.webp',             duration: '1 Day Trip', type: 'Day Trip'     },
    { name: 'Hunza Autumn Tour — 7 Days',        slug: 'hunza-autumn',       tags: ['hunza','autumn','7 days','tour','package','gilgit'],    img: '/assets/pics/Fairy Meadows Hunza Tour.webp',       duration: '7 Days',     type: 'Package'      },
    { name: 'Fairy Meadows Adventure — 5 Days',  slug: 'fairy-meadows-5d',   tags: ['fairy','meadows','adventure','5 days','package'],       img: '/assets/pics/Fairy Meadows 5Days Tour.webp',       duration: '5 Days',     type: 'Package'      },
    { name: 'Skardu Expedition — 8 Days',        slug: 'skardu-expedition',  tags: ['skardu','expedition','8 days','package','gilgit'],      img: '/assets/pics/skardu-valley.webp',                  duration: '8 Days',     type: 'Package'      },
    { name: 'Swat Summer Retreat — 4 Days',      slug: 'swat-retreat',       tags: ['swat','summer','retreat','4 days','package','kpk'],     img: '/assets/pics/swat-valley.webp',                    duration: '4 Days',     type: 'Package'      },
    { name: 'Neelum Valley Escapade — 5 Days',   slug: 'neelum-escapade',    tags: ['neelum','escapade','5 days','package','kashmir'],       img: '/assets/pics/neelum-valley.webp',                  duration: '5 Days',     type: 'Package'      },
    { name: 'Naran Kaghan Classic — 3 Days',     slug: 'naran-classic',      tags: ['naran','kaghan','classic','3 days','package','kpk'],    img: '/assets/pics/naran-kaghan.webp',                   duration: '3 Days',     type: 'Package'      },
    { name: 'Fairy Meadows Skardu Excursion',    slug: 'fairy-skardu',       tags: ['fairy','meadows','skardu','excursion','gilgit'],        img: '/assets/pics/Fairy Meadows Skardu Excursion.webp', duration: '10 Days',    type: 'Package'      },
    { name: '15 Days Chitral Hindukush',         slug: 'chitral-hindukush',  tags: ['chitral','hindukush','15 days','kpk','culture','trek'],  img: '/assets/pics/15 Days Chitral Hindukush.webp',      duration: '15 Days',    type: 'Package'      },
    { name: 'Camping in Kaghan Valley',          slug: 'camping-kaghan',     tags: ['camping','kaghan','nature','adventure','kpk','outdoor'], img: '/assets/pics/camping.webp',                        duration: '4 Days',     type: 'Adventure'    },
    { name: 'Winter Sports Malam Jabba',         slug: 'winter-malam',       tags: ['winter','sports','malam jabba','skiing','swat','kpk'],   img: '/assets/pics/wintersports.webp',                   duration: '6 Days',     type: 'Adventure'    },
  ];

  private destinations: Destination[] = [
    {
      slug: 'astore-valley',
      name: 'Astore Valley',
      subtitle: 'A pristine paradise in Gilgit-Baltistan — sweeping meadows, glacial rivers, and Himalayan peaks that take your breath away.',
      img: '/assets/pics/Astore-valley.webp',
      tags: ['Gilgit-Baltistan', 'Trekking', 'Nature', 'Himalaya'],
      infoGrid: [
        { label: 'Region', value: 'Gilgit-Baltistan' },
        { label: 'Best Season', value: 'May – Sep' },
        { label: 'Famous For', value: 'Rama Meadows, Nanga Parbat Views' },
        { label: 'Distance', value: '~130 km from Gilgit' }
      ],
      description: 'Astore Valley is a pristine and less-visited gem in Gilgit-Baltistan, Pakistan. Located south of Gilgit city, the valley is famous for its majestic landscapes, including lush green meadows, glacial rivers, dense forests, and the stunning views of Nanga Parbat — the ninth highest mountain in the world.',
      description2: 'Rama Meadows, situated at around 3,500 meters, is the crown jewel of Astore. The area offers unparalleled trekking opportunities, including trails to the Nanga Parbat Base Camp, Rama Lake, and beyond.',
      thingsToDo: ['Trek to Rama Meadows (3,500 m)', 'Visit Nanga Parbat Base Camp', 'Explore Rama Lake', 'Photography of Himalayan peaks', 'Camping under clear skies'],
      ctaTitle: 'Book Your Astore Valley Adventure',
      ctaText: 'Let us take you to one of Pakistan\'s most unspoiled valleys. Contact us for latest packages and pricing.'
    },
    {
      slug: 'fairy-meadows',
      name: 'Fairy Meadows',
      subtitle: 'A paradise at the foot of Nanga Parbat — lush meadows, wildflowers, and starlit skies at 3,300m above sea level in the heart of the Himalayas.',
      img: '/assets/pics/Fairy Meadows Hunza Tour.webp',
      tags: ['Gilgit-Baltistan', 'Camping', 'Himalayas', 'Nanga Parbat'],
      infoGrid: [
        { label: 'Height', value: '3,300 m / 10,800 ft' },
        { label: 'Best Season', value: 'May – Sep' },
        { label: 'Summer Temp', value: '15°C – 25°C' },
        { label: 'From Islamabad', value: '~340 km (8–10 hrs)' }
      ],
      description: 'Fairy Meadows is located in the northern region of Pakistan, situated at the base of Nanga Parbat — the ninth highest mountain in the world. The meadows, with their lush green carpets, wildflowers, and grazing sheep, create a serene and picturesque landscape. The area is often referred to as "Heaven on Earth" due to its stunning vistas and tranquil ambiance.',
      description2: 'The journey to Fairy Meadows itself is an adventure, involving a jeep ride through winding mountain roads and a trek through dense pine forests. The reward, however, is worth it — a paradise-like setting that feels like stepping into a storybook.',
      thingsToDo: ['Trek to Nanga Parbat Base Camp (Bayal Camp)', 'Camping under a sky full of stars', 'Hiking through alpine meadows and pine forests', 'Wildlife watching — Himalayan ibex, markhor', 'Visit the nearby Tattu village and experience local culture'],
      ctaTitle: 'Book Your Fairy Meadows Adventure',
      ctaText: 'Let us handle all the planning — transport, guides, tents, and more. Book now and experience Pakistan\'s most magical meadow.'
    },
    {
      slug: 'hunza-valley',
      name: 'Hunza Valley',
      subtitle: 'Pakistan\'s most iconic valley — home to ancient forts, turquoise Attabad Lake, towering Rakaposhi, and the legendary hospitality of the Hunzai people.',
      img: '/assets/pics/Fairy Meadows Hunza Tour.webp',
      tags: ['Gilgit-Baltistan', 'Culture', 'Scenic', 'Karakoram'],
      infoGrid: [
        { label: 'Region', value: 'Gilgit-Baltistan' },
        { label: 'Best Season', value: 'Apr – Oct' },
        { label: 'Main Route', value: 'Karakoram Highway' },
        { label: 'Famous For', value: 'Attabad Lake, Baltit Fort' }
      ],
      description: 'Hunza Valley is a popular tourist destination in Pakistan known for its stunning natural beauty and rich cultural heritage. The valley is located in the Gilgit-Baltistan territory and is surrounded by snow-capped mountains, lush green valleys, glaciers, and crystal-clear streams.',
      description2: 'The Hunza people have a distinct culture shaped by their history, geography, and religion. The valley is home to several historical sites, including the Altit and Baltit forts, which provide insight into the region\'s rich cultural heritage spanning over 2,000 years.',
      attractions: [
        { title: 'Attabad Lake', desc: 'A stunning turquoise lake formed by a 2010 landslide' },
        { title: 'Baltit Fort', desc: '700-year-old fort overlooking the valley' },
        { title: 'Altit Fort', desc: 'One of Pakistan\'s oldest forts' },
        { title: 'Khunjerab Pass', desc: 'World\'s highest paved international border crossing' },
        { title: 'Rush Lake', desc: 'One of the highest lakes in the world, for trekkers' },
        { title: 'Borith Lake', desc: 'Serene lake near Gulmit village' }
      ],
      ctaTitle: 'Plan Your Hunza Valley Trip Today',
      ctaText: 'From Lahore to Hunza — we handle everything. Contact us for the latest tour packages and pricing.'
    },
    {
      slug: 'k2',
      name: 'K2 Base Camp',
      subtitle: 'The ultimate mountaineer\'s pilgrimage — trek through the Baltoro Glacier to the base of the world\'s second highest and most dangerous peak.',
      img: '/assets/pics/Fairy Meadows Skardu Excursion.webp',
      tags: ['Karakoram', 'Adventure', 'Trekking', 'Mountaineering'],
      infoGrid: [
        { label: 'Altitude', value: '5,150 m / 16,900 ft' },
        { label: 'Best Season', value: 'Jun – Aug' },
        { label: 'Trek Duration', value: '14–18 Days' },
        { label: 'Region', value: 'Gilgit-Baltistan' }
      ],
      description: 'K2, the world\'s second highest peak at 8,611 meters, stands as the crown of the Karakoram Range. The K2 Base Camp trek is one of the most challenging and rewarding trekking experiences in the world, passing through the magnificent Baltoro Glacier — one of the longest glaciers outside the polar regions.',
      thingsToDo: ['Trek the Baltoro Glacier', 'View Concordia — the "Throne Room of the Gods"', 'Marvel at Broad Peak, Gasherbrum I & II', 'Camp at K2 Base Camp (5,150m)', 'Photography of the Karakoram giants'],
      ctaTitle: 'Conquer K2 Base Camp',
      ctaText: 'Our expert guides will take you safely to the base of the world\'s most formidable peak. Limited spots available per season.'
    },
    {
      slug: 'kumrat-valley',
      name: 'Kumrat Valley',
      subtitle: 'A hidden gem in Dir Kohistan — dense pine forests, crystal-clear rivers, roaring waterfalls, and warm Kohistani hospitality await you.',
      img: '/assets/pics/kumrat-valley.webp',
      tags: ['KPK', 'Hidden Gem', 'Forest', 'River'],
      infoGrid: [
        { label: 'Region', value: 'Dir Kohistan, KPK' },
        { label: 'Best Season', value: 'May – Oct' },
        { label: 'Famous For', value: 'Do Kona, Jahaz Banda' },
        { label: 'From Islamabad', value: '~350 km' }
      ],
      description: 'Kumrat Valley is a breathtakingly beautiful valley in Dir Kohistan district of Khyber Pakhtunkhwa. Known for its dense pine and deodar forests, crystal-clear Panjkora River, and stunning meadows like Jahaz Banda, Kumrat is often called the "Switzerland of KPK".',
      thingsToDo: ['Explore Jahaz Banda meadow', 'Trek to Do Kona waterfall', 'Jeep safari through dense forests', 'Fishing in Panjkora River', 'Camping in alpine meadows'],
      ctaTitle: 'Discover Hidden Kumrat Valley',
      ctaText: 'Experience the untouched beauty of KPK\'s best-kept secret. Book your Kumrat package today.'
    },
    {
      slug: 'kalash-valley',
      name: 'Kalash Valley Chitral',
      subtitle: 'Home to the ancient Kalash tribe — colorful festivals, unique traditions, wooden temples, and stunning Hindukush scenery.',
      img: '/assets/pics/kalash-valley.webp',
      tags: ['Chitral', 'Culture', 'Festivals', 'KPK'],
      infoGrid: [
        { label: 'Region', value: 'Chitral, KPK' },
        { label: 'Best Season', value: 'May – Oct' },
        { label: 'Famous For', value: 'Kalash Festival, Chitral Fort' },
        { label: 'Tribe', value: 'Kalash People' }
      ],
      description: 'Kalash Valley in Chitral is home to the Kalash people — an ancient tribe with a unique language, religion, and culture. With only about 3,000–4,000 members remaining, the Kalash are considered one of the last indigenous peoples of the Hindu Kush.',
      thingsToDo: ['Attend the Chilam Joshi Spring Festival', 'Visit Kalash wooden temples (Bashali)', 'Explore traditional Kalash villages', 'Photography of colorful Kalash costumes', 'Trek in the Hindukush mountains'],
      ctaTitle: 'Experience the Ancient Kalash Culture',
      ctaText: 'Join us for an unforgettable cultural immersion with Pakistan\'s most unique indigenous tribe.'
    },
    {
      slug: 'naran-kaghan',
      name: 'Naran Kaghan Valley',
      subtitle: 'Pakistan\'s most beloved summer retreat — crystal-clear lakes, towering peaks, and the magical Saiful Muluk Lake that inspired legends.',
      img: '/assets/pics/naran-kaghan.webp',
      tags: ['KPK', 'Lakes', 'Mountains', 'Summer Retreat'],
      infoGrid: [
        { label: 'Region', value: 'Mansehra, KPK' },
        { label: 'Best Season', value: 'May – Sep' },
        { label: 'Famous For', value: 'Lake Saiful Muluk' },
        { label: 'From Islamabad', value: '~240 km' }
      ],
      description: 'Naran Kaghan Valley is one of Pakistan\'s most popular tourist destinations, famous for the legendary Lake Saiful Mulook — a high-altitude glacial lake at 3,224 meters surrounded by snow-capped peaks. According to Sufi legend, a prince fell in love with a fairy princess at this lake.',
      thingsToDo: ['Visit Lake Saiful Mulook at dawn', 'Trek to Ansoo Lake', 'Explore Lalazar Plateau', 'Jeep safari to Babusar Top', 'White-water rafting on Kunhar River'],
      ctaTitle: 'Book Your Naran Kaghan Getaway',
      ctaText: 'Let us take you to the land of legends and emerald lakes. Family, couples, and group packages available.'
    },
    {
      slug: 'neelum-valley',
      name: 'Neelum Valley',
      subtitle: 'Azad Kashmir\'s crown jewel — 200 km of turquoise rivers, dense forests, roaring waterfalls, and charming villages untouched by time.',
      img: '/assets/pics/neelum-valley.webp',
      tags: ['AJK', 'River', 'Forests', 'Kashmir'],
      infoGrid: [
        { label: 'Region', value: 'Azad Kashmir' },
        { label: 'Best Season', value: 'Apr – Oct' },
        { label: 'Famous For', value: 'Neelum River, Shounter Lake' },
        { label: 'From Muzaffarabad', value: '~18 km start of valley' }
      ],
      description: 'Neelum Valley stretches 200 km along the Neelum River, which flows from the Line of Control toward Muzaffarabad. Named after the turquoise (neelum) color of the river, the valley is known for its spectacular waterfalls, alpine lakes, dense forests, and beautiful villages.',
      thingsToDo: ['Visit Shounter Lake', 'Explore Ratti Gali Lake', 'See the Katika Waterfall', 'Trek through Dhani Waterfall forests', 'Experience local Kashmiri culture'],
      ctaTitle: 'Escape to Neelum Valley',
      ctaText: 'Discover Kashmir\'s most beautiful valley. We offer complete Neelum packages from Lahore, Islamabad, and beyond.'
    },
    {
      slug: 'skardu-valley',
      name: 'Skardu Valley',
      subtitle: 'Gateway to the world\'s highest peaks — Shangrila Resort, Deosai Plains, Kachura Lake, and the ancient Skardu Fort await.',
      img: '/assets/pics/skardu-valley.webp',
      tags: ['Gilgit-Baltistan', 'Lakes', 'Desert', 'Adventure'],
      infoGrid: [
        { label: 'Region', value: 'Gilgit-Baltistan' },
        { label: 'Best Season', value: 'Apr – Oct' },
        { label: 'Famous For', value: 'Shangrila, Deosai, Kachura' },
        { label: 'Altitude', value: '2,228 m / 7,310 ft' }
      ],
      description: 'Skardu is the capital of Skardu District in Gilgit-Baltistan and serves as the gateway to the world\'s greatest mountain ranges. The Skardu valley is uniquely home to the famous cold desert — the Katpana Desert — alongside lush green fields, crystal-clear lakes, and towering peaks.',
      attractions: [
        { title: 'Shangrila Resort', desc: 'The famous "Heaven on Earth" resort on Lower Kachura Lake' },
        { title: 'Deosai National Park', desc: 'Second-highest plateau in the world, home to brown bears' },
        { title: 'Upper Kachura Lake', desc: 'Stunning turquoise lake surrounded by mountains' },
        { title: 'Skardu Fort', desc: 'Ancient fort with panoramic views of the valley' },
        { title: 'Satpara Lake', desc: 'Beautiful freshwater lake 8 km from Skardu city' }
      ],
      ctaTitle: 'Book Your Skardu Expedition',
      ctaText: 'Experience Pakistan\'s most dramatic landscapes. Our Skardu packages include flights, jeep safaris, and hotel stays.'
    },
    {
      slug: 'shogran-valley',
      name: 'Shogran Valley',
      subtitle: 'A Himalayan plateau paradise — 360° mountain views, dense pine forests, and cool summer breezes just hours from Islamabad.',
      img: '/assets/pics/shogran-valley.webp',
      tags: ['KPK', 'Meadows', 'Family', 'Hill Station'],
      infoGrid: [
        { label: 'Region', value: 'Mansehra, KPK' },
        { label: 'Best Season', value: 'Apr – Oct' },
        { label: 'Altitude', value: '2,362 m / 7,749 ft' },
        { label: 'From Islamabad', value: '~170 km' }
      ],
      description: 'Shogran is a hill station located in Kaghan Valley at an altitude of 2,362 meters. It is known for its beautiful meadows, panoramic views of Himalayan peaks including Makra (3,885 m), dense pine and fir forests, and its pleasant summer climate. It serves as a base for trekking to SIRI paye meadow.',
      thingsToDo: ['Trek to SIRI Paye meadow', 'Horse riding on the plateau', 'Photography of Himalayan peaks', 'Stay in wooden cottages', 'Nature walks through pine forests'],
      ctaTitle: 'Plan Your Shogran Escape',
      ctaText: 'Perfect for families, couples, and photography enthusiasts. Shogran packages from major cities available.'
    },
    {
      slug: 'swat-valley',
      name: 'Swat Valley',
      subtitle: 'The Switzerland of the East — lush green valleys, Buddhist ruins, crystal rivers, and a rich history stretching back to Alexander the Great.',
      img: '/assets/pics/swat-valley.webp',
      tags: ['KPK', 'Switzerland of East', 'History', 'Culture'],
      infoGrid: [
        { label: 'Region', value: 'Swat, KPK' },
        { label: 'Best Season', value: 'Apr – Oct' },
        { label: 'Famous For', value: 'Malam Jabba, Kalam, Buddhist Sites' },
        { label: 'From Islamabad', value: '~260 km' }
      ],
      description: 'Swat Valley, often called the "Switzerland of the East," is one of Pakistan\'s most beautiful regions. The valley is known for its stunning green landscapes, snow-covered mountains, rivers, and rich history dating back to the Buddhist era. Alexander the Great is said to have passed through this region in 327 BC.',
      thingsToDo: ['Visit Malam Jabba Ski Resort', 'Explore Kalam Valley', 'See Buddhist ruins at Butkara & Udegram', 'White-water rafting on Swat River', 'Trout fishing in mountain streams'],
      ctaTitle: 'Explore the Switzerland of the East',
      ctaText: 'From skiing in winter to trekking in summer — Swat has something for every season. Book your Swat tour today.'
    },
    {
      slug: 'umbrella-waterfall',
      name: 'Umbrella Waterfall',
      subtitle: 'A unique natural wonder near Islamabad — the Saidpur Waterfall cascades in a perfect umbrella shape through lush green Murree hills.',
      img: '/assets/pics/umbrella-waterfall.webp',
      tags: ['Islamabad', 'Day Trip', 'Waterfall', 'Nature'],
      infoGrid: [
        { label: 'Location', value: 'Near Islamabad / Murree' },
        { label: 'Best Season', value: 'Jul – Sep (monsoon)' },
        { label: 'Trip Type', value: 'Day Trip / Overnight' },
        { label: 'From Islamabad', value: '~50 km' }
      ],
      description: 'The Umbrella Waterfall (also known as Saidpur Waterfall) is a stunning natural attraction located in the lush hills near Islamabad and Murree. The waterfall gets its unique name from the way it cascades and spreads out like an umbrella before hitting the rocks below.',
      thingsToDo: ['Hike to the waterfall through forest trails', 'Photography of the unique umbrella cascade', 'Picnic by the waterfall', 'Explore nearby Saidpur Village', 'Trek along the Murree hills'],
      ctaTitle: 'Visit the Umbrella Waterfall',
      ctaText: 'A perfect day trip from Islamabad or Rawalpindi. We organize day trips and overnight packages to this hidden gem.'
    }
  ];

  private packages: Package[] = [
    { name: 'Fairy Meadows Skardu Excursion', duration: '10 days / 09 nights', price: '₨15,500', img: '/assets/pics/Fairy Meadows Skardu Excursion.webp', highlights: ['Nanga Parbat Base Camp', 'Skardu City Tour', 'Shangrila Resort', 'Jeep Safari'], category: 'Adventure' },
    { name: 'Fairy Meadows Hunza Tour', duration: '8 Days / 7 Nights', price: '₨15,500', img: '/assets/pics/Fairy Meadows Hunza Tour.webp', highlights: ['Fairy Meadows Trek', 'Attabad Lake', 'Baltit Fort', 'Khunjerab Pass'], category: 'Sightseeing' },
    { name: 'Fairy Meadows 5Days Tour', duration: '5 Days', price: '₨15,500', img: '/assets/pics/Fairy Meadows 5Days Tour.webp', highlights: ['Fairy Meadows Camp', 'Nanga Parbat Views', 'Bayal Base Camp', 'Pine Forest Hike'], category: 'Adventure' },
    { name: '15 Days Chitral Hindukush', duration: '15 Days', price: '₨15,500', img: '/assets/pics/15 Days Chitral Hindukush.webp', highlights: ['Kalash Valley', 'Shandur Pass', 'Tirich Mir Views', 'Polo Festival'], category: 'Culture' },
    { name: 'Camping in Kaghan Valley', duration: '4 Days / 3 Nights', price: '₨9,500', img: '/assets/pics/camping.webp', highlights: ['Saiful Mulook Lake', 'Camping Under Stars', 'Kunhar River Rafting', 'Lalazar Plateau'], category: 'Adventure' },
    { name: 'Winter Sports Malam Jabba', duration: '6 Days / 5 Nights', price: '₨12,000', img: '/assets/pics/wintersports.webp', highlights: ['Skiing & Snowboarding', 'Chair Lift Ride', 'Swat Sightseeing', 'Snow Jeep Safari'], category: 'Sports' },
  ];

  private activities: Activity[] = [
    { name: 'Trekking & Hiking', img: '/assets/pics/tracking.webp', locations: 'Fairy Meadows, Rakaposhi, Naltar', detail: 'Adventure Level: ★★★★☆' },
    { name: 'Sightseeing', img: '/assets/pics/sightseeing.webp', locations: 'Hunza, Skardu, Khunjerab Pass', detail: 'Beauty Level: ★★★★★' },
    { name: 'Camping', img: '/assets/pics/camping.webp', locations: 'Sharan Forest, Fairy Meadows', detail: 'Night Under Stars' },
    { name: 'Horse Riding', img: '/assets/pics/wintersports.webp', locations: 'Malam Jabba, Naltar Ski Resort', detail: 'Best Time: Oct – Mar' },
    { name: 'Boating & Lakes', img: '/assets/pics/boating.webp', locations: 'Attabad, Sheosar, Saif-ul-Malook', detail: 'Fun for Everyone' },
    { name: 'Cultural Tours', img: '/assets/pics/culture.webp', locations: 'Hunza, Kalash, Baltit Fort', detail: 'Explore Traditions' },
  ];

  private featuredCards: FeaturedCard[] = [
    { name: 'Fairy Meadows Skardu Excursion', duration: '10 days / 09 nights', price: '₨15,500.00', img: '/assets/pics/Fairy Meadows Skardu Excursion.webp' },
    { name: 'Fairy Meadows Hunza Tour', duration: '8 Days / 7 Nights', price: '₨15,500.00', img: '/assets/pics/Fairy Meadows Hunza Tour.webp' },
    { name: 'Fairy Meadows 5Days Tour', duration: '5 Days', price: '₨15,500.00', img: '/assets/pics/Fairy Meadows 5Days Tour.webp' },
    { name: '15 Days Chitral Hindukush', duration: '15 Days', price: '₨15,500.00', img: '/assets/pics/15 Days Chitral Hindukush.webp' },
    { name: 'Camping in Kaghan Valley', duration: '4 Days / 3 Nights', price: '₨9,500.00', img: '/assets/pics/camping.webp' },
    { name: 'Winter Sports Malam Jabba', duration: '6 Days / 5 Nights', price: '₨12,000.00', img: '/assets/pics/wintersports.webp' },
  ];

  getAllTours(): Tour[] { return this.tours; }

  searchTours(query: string): Tour[] {
    if (!query) return [];
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return this.tours
      .map(t => {
        const haystack = (t.name + ' ' + t.tags.join(' ')).toLowerCase();
        const score = words.reduce((s, w) => s + (haystack.includes(w) ? 1 : 0), 0);
        return { ...t, score };
      })
      .filter((t: any) => t.score > 0)
      .sort((a: any, b: any) => b.score - a.score);
  }

  getAllDestinations(): Destination[] { return this.destinations; }

  getDestinationBySlug(slug: string): Destination | undefined {
    return this.destinations.find(d => d.slug === slug);
  }

  getAllPackages(): Package[] { return this.packages; }
  getAllActivities(): Activity[] { return this.activities; }
  getFeaturedCards(): FeaturedCard[] { return this.featuredCards; }
}
