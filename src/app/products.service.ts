import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return this.getConsoles().concat(this.getGames());
  }

  getConsoles(){
    return [
      new Product("101","Playstation 5",2000,"Consoles","The PlayStation 5's main features include a solid-state drive customized for high-speed data streaming to enable significant improvements in storage performance, an AMD GPU capable of 4K resolution display at up to 120 frames per second, hardware-accelerated ray tracing for realistic lighting and reflections, the Tempest Engine allowing for 3D audio effects, and backward compatibility with most PlayStation 4 and PlayStation VR games.","https://cdn.mos.cms.futurecdn.net/EzvyUp3JuzUc47ae7kotHk.jpg"),
      new Product("102","Playstation 4 Pro",1850,"Consoles","The most advanced PlayStation system ever. PS4 Pro is designed to take your favorite PS4 games and add to them with more power for graphics, performance, or features for your 4K HDR TV, or 1080p HD TV. ... For HD TV Enhanced games, players can benefit from increased image clarity, faster frame rates, or more.","https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$native--t$"),
      new Product("103","XBOX One X",1950,"Consoles","The Xbox One X's headlining features, though, are its support for 4K and its HDR gaming at up to 60 frames per second. If a given game supports all of that, it should be sharper (via 4K), look more lifelike (via HDR10), and run smoother (via the higher frame rate) than it does on other consoles.","https://www.downloadclipart.net/large/console-png-background-image.png"),
      new Product("104","XBOX One S",1200,"Consoles","The good The Xbox One S is a slick looking game console that's 40 percent smaller than the original and ditches the infamously gigantic power brick. It can display 4K video from streaming services and Ultra HD Blu-rays, and supports HDR contrast on video and games.","https://d2skuhm0vrry40.cloudfront.net/2015/articles/1/8/3/7/5/3/4/xbox-one-s-everything-you-need-to-know-about-the-slim-console-1465927049068.jpg/EG11/resize/1200x-1/xbox-one-s-everything-you-need-to-know-about-the-slim-console-1465927049068.jpg"),
      new Product("105","Nintendo Switch",1450,"Consoles","The Nintendo Switch system transforms from home console to handheld, letting you play your favorite games at home or on the go. It includes a dock for connecting to your TV, as well as removable Joy-Con™ controllers that you can share with a friend for two-player fun.","https://upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg")
    ];
  }

  getGames(){
    return this.getPSGames().concat(this.getXBOXGames()).concat(this.getPCGames()).concat(this.getNintendoGames());
  }

  getPSGames(){
    return [
      new Product("201","FIFA 21",250,"PS Games","FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series, and was released 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One.","https://www.fifplay.com/img/public/fifa-21-cover-standard-edition.jpg"),
      new Product("202","DEATH STRANDING",180,"PS Games","Death Stranding is an action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015. The game is set in the United States following a cataclysmic event which caused destructive creatures to begin roaming the Earth.","https://images-na.ssl-images-amazon.com/images/I/61L0yZsbzxL._SX385_.jpg"),
      new Product("203","Ghost of Tsushima",220,"PS Games","Ghost of Tsushima is an action-adventure stealth game played from a third-person perspective. The game features a large open world, without waypoints, which can be explored without guidance. Players can travel to different parts of the world on horseback.","https://cdn11.bigcommerce.com/s-boldppk8jp/images/stencil/1280x1280/products/1418/1185/Ghost-of-tsushima-PS4-Cover_Compressed__34495.1595229890.jpg?c=1"),
      new Product("204","Bloodborne",150,"PS Games","Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment, which released for the PlayStation 4 in March 2015.","https://static.raru.co.za/cover/2015/10/13/3132923-l.jpg?v=1444822107"),
      new Product("205","God of War",120,"PS Games","Based in ancient mythology, the story follows Kratos, a Spartan warrior who was tricked into killing his family by his former master, the Greek God of War Ares.","https://images-na.ssl-images-amazon.com/images/I/711lrrvzt%2BL._SL1496_.jpg")
    ];
  }

  getPCGames(){
    return [
      new Product("301","Crusader Kings 3",200,"PC Games","Crusader Kings III is the heir to a long legacy of historical grand strategy experiences and arrives with a host of new ways to ensure the success of your royal house. Choose a royal or noble house from a number of realms on a map that stretches from Iceland to India, from the Arctic Circle to Central Africa.","https://static2.raru.co.za/cover/2020/07/29/8167758-l.jpg?v=1596007461"),
      new Product("302","Cyberpunk 2077",180,"PC Games","Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. ... You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.","https://www.exongames.co.il/wp-content/uploads/2019/07/cyberpunk-2077-box-art-01-ps4-06jun19-en-us.jpg"),
      new Product("303","Divinity: Original Sin II",220,"PC Games","The game is set on the fantasy world of Rivellon, centuries after Divinity: Original Sin. Living beings on Rivellon have a form of energy known as Source, and individuals called Sourcerers can manipulate Source to cast spells or enhance their combat abilities.","https://cdn-prod.scalefast.com/public/assets/user/6562614/image/fc0fea76b4a2f75dc282d0dba05a31a1.jpg"),
      new Product("304","Diablo 3",120,"PC Games","Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise.","https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Diablo_III_cover.png/220px-Diablo_III_cover.png"),
      new Product("305","Bioshock Infinite",80,"PC Games","BioShock Infinite is set in 1912 and takes place in a fictional steampunk city-state called \"Columbia\"—named in homage to the female personification of the United States—which is suspended in the air through a combination of giant blimps, balloons, reactors, propellers, and \"quantum levitation\".","https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg")
    ];
  }

  getXBOXGames(){
    return [
      new Product("401","TESV Skyrim Remastered",150,"XBOX Games","The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.","https://media.gamestop.com/i/gamestop/10131511/The-Elder-Scrolls-V-Skyrim-Special-Edition"),
      new Product("402","Halo Collection ",200,"XBOX Games","Halo: The Master Chief Collection is a compilation of first-person shooter video games in the Halo series.","https://www.yambalu.com/img/juegos/portadas/6781_2_halo_the_master_chief_collection_xbox_one_xxxl.jpg"),
      new Product("403","Forza Horizon 4",230,"XBOX Games","Live the Horizon Life when you play Forza Horizon 4. Experience a shared world with dynamic seasons.","https://cdn-products.eneba.com/resized-products/6cuhdDBs7iBJ1bJXuR7iVuLC-RkTlh4oBtNSmDijbJQ_350x200_2x-0.jpeg"),
      new Product("404","Minecraft",120,"XBOX Games","In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items.","https://images.g2a.com/newlayout/323x433/1x1x0/9959c6b29917/5c3f3e82ae653a48c1748ee5"),
      new Product("405","DOOM Eternal",180,"XBOX Games","Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. ... Set some time after the events of the 2016 game, the story follows the Doom Slayer once again, on a mission to end Hell's consumption of Earth and foil the alien Maykrs' plans to exterminate humanity.","https://images-na.ssl-images-amazon.com/images/I/81zVNA8JzhL._SL1500_.jpg")
    ];
  }

  getNintendoGames(){
    return [
      new Product("501","Dark Souls Remastered",180,"Nintendo Games","DARK SOULS: REMASTERED includes the main game plus the Artorias of the Abyss DLC. ... Gameplay Richness and Possibilities— Use hundreds of unique weapon, armor, magic, and crafting combinations to create your own playstyle and gaming experience.","https://cashcow-cdn.azureedge.net/images/5e78a686-61ab-42f9-8c6b-0d14cf62e21e.jpg"),
      new Product("502","Breath of the Wild",220,"Nintendo Games","Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link. ... Link can procure items from the environment, including weapons, food, and other resources. Unlike previous Zelda games, weapons and shields degrade through use.","https://i.pinimg.com/originals/2e/69/1b/2e691b07b0bee775e10423ced9adc3c6.jpg"),
      new Product("503","Mario Odyssey",150,"Nintendo Games","Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as \"Kingdoms\" within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.","https://vgs.co.il/wp-content/uploads/2017/01/super-mario-odyssey-switch-cover.jpg"),
      new Product("504","Pokemon Sword",220,"Nintendo Games","Pokémon Sword is one of the two latest Pokémon adventures. It takes place in the Galar region, which is inspired by the UK, and features three new starters, and brings back gym battles. Older Pokémon seem to make an appearance as well, so you'll see some of your favorites.","https://vgs.co.il/wp-content/uploads/2019/02/pokemon-sword-cover.jpg"),
      new Product("505","Mario Kart",120,"Nintendo Games","Mario Kart is a series of go-kart-style racing video games developed and published by Nintendo as spin-offs from its trademark Super Mario series. The games feature characters from the Mario franchise and other game series competing in races while using various items to gain advantage.","https://static2.raru.co.za/cover/2017/01/14/5390386-l.jpg?v=1500110779")
    ]
  }

  getDiscounted(){
    let res = [];
    let arr = this.getProducts();
    res.push(arr[20]);
    res.push(arr[7]);
    res.push(arr[10]);
    res.push(arr[3]);
    res.push(arr[6]);
    return res;
  }
  getNew(){
    let res = [];
    let arr = this.getProducts();
    res.push(arr[0]);
    res.push(arr[12]);
    res.push(arr[15]);
    res.push(arr[5]);
    res.push(arr[17]);
    return res;
  }

  getBySerial(num){
    let arr = this.getProducts();
    for (let tmp of arr)
      if (tmp.serialNumber==num)
        return tmp;
    return null;
  }
}

class Product{
  serialNumber:string;
  name:string;
  price:number;
  category:string;
  description:string;
  img:string;

  constructor(serialNumber:string,name:string,price:number,category:string,description:string,img:string){
    this.serialNumber=serialNumber;
    this.name=name;
    this.price=price;
    this.category=category;
    this.description=description;
    this.img=img;
  }
} 