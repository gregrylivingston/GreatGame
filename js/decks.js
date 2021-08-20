scenarios[0].policyDecks = [
    {
      title:"Nationhood",
      cards:[
        {id:6,qty:4}, //Invest in Infrastructure
        {id:7,qty:4}, //Sign Armys Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:4}, //Build Factories
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:4}, //Develop the arts
        {id:20,qty:4}, //An ancient past
        {id:22,qty:2}, //Speculative Valuations
        {id:23,qty:2}, //Welcome Immigrants
        {id:25,qty:2}, //Regatta
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
      ]
    },
    {//formerly communism
      title:"Isolationism",
      cards:[
        {id:0,qty:4}, //direct  foreign investment
        {id:4,qty:2}, //Arm Insurgents
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:2}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:2}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:2}, //Construction contraacts
        {id:19,qty:2}, //Develop the arts
        {id:21,qty:2}, //Ambush
        {id:23,qty:2}, //Welcome Immigrants
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
      ]
    },
    { //formerly facism
      title:"Divine Empire",
      cards:[
          {id:4,qty:2}, //Arm Insurgents
          {id:5,qty:2}, //Fund Insurgency
          {id:6,qty:2}, //Invest in Infrastructure
          {id:7,qty:4}, //Sign Armys Contract
          {id:8,qty:2}, //Invest in Healthcare
          {id:11,qty:1}, //Banking Reform
          {id:14,qty:2}, //Institution Building
          {id:16,qty:4}, //Build Factories
          {id:17,qty:1}, //Local Contacts
          {id:18,qty:4}, //Construction contraacts
          {id:19,qty:2}, //Develop the arts
          {id:20,qty:4}, //An ancient past
          {id:21,qty:4}, //Ambush
          {id:26,qty:4}, //National Infrastructure
          {id:27,qty:4}, //National Events
          {id:28,qty:4}, //Local Officials
          {id:30,qty:2}, //Spy
        ]
    },
    { //formerly democracy
      title:"International Order",
      desc:"A slow but powerful deck focusing on quality over quantity.",
      cards:[
        {id:0,qty:2}, //direct  foreign investment
        {id:1,qty:4}, //indirect  foreign investment
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:4}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:2}, //Banking Reform
        {id:12,qty:1}, //Ease Tensions
        {id:13,qty:1}, //Road to the Sea
        {id:14,qty:4}, //Institution Building
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:2}, //Develop the arts
        {id:22,qty:4}, //Speculative Valuations
        {id:23,qty:4}, //Welcome Immigrants
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
        {id:31,qty:2}, //Westerrn Alliance
      ]
    },
    {
      title:"Colonialism",
      desc:"A Powerful and versatile policy deck available only to colonial powers.  Gets an extra card each year.",
      cards:[

        {id:0,qty:4}, //direct  foreign investment
        {id:1,qty:4}, //indirect  foreign investment
        {id:2,qty:4}, //blockade port
        {id:3,qty:2}, //blockade region
        {id:4,qty:2}, //Arm Insurgents
        {id:5,qty:2}, //Fund Insurgency
        {id:6,qty:2}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:2}, //Invest in Healthcare
        {id:9,qty:2}, //Invest in Education
        {id:11,qty:1}, //Banking Reform
        {id:12,qty:2}, //Ease Tensions
        {id:13,qty:2}, //Road to the Sea
        {id:14,qty:2}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:2}, //Build Factories
        {id:17,qty:4}, //Local Contacts
        {id:18,qty:2}, //Construction contraacts
        {id:21,qty:2}, //Ambush
        {id:22,qty:4}, //Speculative Valuations
        {id:23,qty:2}, //Welcome Immigrants
        {id:24,qty:4}, //Colonial Vanguard
        {id:25,qty:2}, //Regatta
        {id:26,qty:2}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
      ]
    }
];

/*
generalize decks and just give them titles
restrict based on country (maybe have a default for each scenario then a list of what's available for each country...)

Defaults....

--1900 --- top countries have about 10 pts in top areas

1900 - Nationalism (independent default)
  -Isolationism
  -Divine Empire
  -International Order
  -Colonialism
  -Long Live the King (dependent default)

  --1914 --- top countries have about 25 pts in top areas


1914 - Rights of the Nation (independent default)
  -Will to Power
  -Internationalism
  -The Sun Never Sets
  -For King and Country (dependent default)
  -Rights of Man ??? (what does this mean)

  --1900 --- top countries have about 35 pts in top areas

1925 - Self Determination (independent default)
  -Rise of Communism
  -Rise of Fascism

  --1936 --- top countries have about 45 pts in top areas

1936 - Neutrality
  -Total War
  -New World Order
  -Desperate Measures


*/

scenarios[1].policyDecks =  scenarios[0].policyDecks;
scenarios[2].policyDecks = [
    {
      title:"Rights of the Nation",
      cards:[
        {id:6,qty:4}, //Invest in Infrastructure
        {id:7,qty:4}, //Sign Armys Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:4}, //Build Factories
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:4}, //Develop the arts
        {id:20,qty:4}, //An ancient past
        {id:22,qty:2}, //Speculative Valuations
        {id:23,qty:2}, //Welcome Immigrants
        {id:25,qty:2}, //Regatta
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
      ]
    },
    {//ok maybe not quite...
      title:"Rights of Man",
      cards:[
        {id:0,qty:4}, //direct  foreign investment
        {id:4,qty:2}, //Arm Insurgents
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:2}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:2}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:2}, //Construction contraacts
        {id:19,qty:2}, //Develop the arts
        {id:21,qty:2}, //Ambush
        {id:23,qty:2}, //Welcome Immigrants
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
      ]
    },
    {title:"Will to Power",
      cards:[
          {id:4,qty:2}, //Arm Insurgents
          {id:5,qty:2}, //Fund Insurgency
          {id:6,qty:2}, //Invest in Infrastructure
          {id:7,qty:4}, //Sign Armys Contract
          {id:8,qty:2}, //Invest in Healthcare
          {id:11,qty:1}, //Banking Reform
          {id:14,qty:2}, //Institution Building
          {id:16,qty:4}, //Build Factories
          {id:17,qty:1}, //Local Contacts
          {id:18,qty:4}, //Construction contraacts
          {id:19,qty:2}, //Develop the arts
          {id:20,qty:4}, //An ancient past
          {id:21,qty:4}, //Ambush
          {id:26,qty:4}, //National Infrastructure
          {id:27,qty:4}, //National Events
          {id:28,qty:4}, //Local Officials
          {id:30,qty:2}, //Spy
        ]
    },
    {
      title:"Internationalism",
      desc:"A slow but powerful deck focusing on quality over quantity.",
      cards:[
        {id:0,qty:2}, //direct  foreign investment
        {id:1,qty:4}, //indirect  foreign investment
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:4}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:11,qty:2}, //Banking Reform
        {id:12,qty:1}, //Ease Tensions
        {id:13,qty:1}, //Road to the Sea
        {id:14,qty:4}, //Institution Building
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:2}, //Develop the arts
        {id:22,qty:4}, //Speculative Valuations
        {id:23,qty:4}, //Welcome Immigrants
        {id:26,qty:4}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
        {id:31,qty:2}, //Westerrn Alliance
      ]
    },
    {
      title:"The Sun Never Sets",
      desc:"A Powerful and versatile policy deck available only to global powers.  Leverage the vast reaches of the globe in defense of your Empire.",
      cards:[

        {id:0,qty:4}, //direct  foreign investment
        {id:1,qty:4}, //indirect  foreign investment
        {id:2,qty:4}, //blockade port
        {id:3,qty:2}, //blockade region
        {id:4,qty:2}, //Arm Insurgents
        {id:5,qty:2}, //Fund Insurgency
        {id:6,qty:2}, //Invest in Infrastructure
        {id:7,qty:2}, //Sign Armys Contract
        {id:8,qty:2}, //Invest in Healthcare
        {id:9,qty:2}, //Invest in Education
        {id:11,qty:1}, //Banking Reform
        {id:12,qty:2}, //Ease Tensions
        {id:13,qty:2}, //Road to the Sea
        {id:14,qty:2}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:2}, //Build Factories
        {id:17,qty:4}, //Local Contacts
        {id:18,qty:2}, //Construction contraacts
        {id:21,qty:2}, //Ambush
        {id:22,qty:4}, //Speculative Valuations
        {id:23,qty:2}, //Welcome Immigrants
        {id:24,qty:4}, //Colonial Vanguard
        {id:25,qty:2}, //Regatta
        {id:26,qty:2}, //National Infrastructure
        {id:27,qty:4}, //National Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
      ]
    }
];



scenarios[3].policyDecks =  scenarios[0].policyDecks;
scenarios[4].policyDecks =  scenarios[0].policyDecks;

/*

unused - world effects ?
29 tropical diseases

unused - country specific ?
32 the Bersaglieri

*/
