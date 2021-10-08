const mockData = [
  {
    id: "1",
    name: "Thomas HD",
    price: "1500",
    description:
      "Låter för mycket för min smak, funderar på att skaffa en honda istället",
    imageUri:
      "https://www.hdforums.com/wp-content/uploads/2013/09/HarleyDavidsonCrashed.jpg",
    category: "Motorcycles",
    userId: "1",
    city: "Tranemo",
    phone: "0738159927",
    email: "timmythomson@gmail.com",
    latitude: 57.485569,
    longitude: 13.35241,
  },
  {
    id: "2",
    name: "Begagnad öl",
    price: "10",
    description: "Halvdrucken då jag måste tänka på figuren",
    imageUri:
      "https://c8.alamy.com/comp/XB44P9/half-full-beer-glass-with-beer-XB44P9.jpg",
    category: "Food",
    userId: "3",
    city: "Edinburgh",
    phone: "0700666666",
    email: "DisasterD@outlook.com",
    latitude: 55.94918,
    longitude: -3.209806,
  },
  {
    id: "3",
    name: "Kalle Anka tidningar",
    price: "200",
    description: "Min samling av Kalle Anka tidningar",
    imageUri:
      "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4310115.jpg",
    category: "Comics",
    userId: "2",
    city: "Jakobsberg",
    phone: "0700123456",
    email: "Jonna@gmail.com",
    latitude: 59.422571,
    longitude: 17.833131,
  },
  {
    id: "4",
    name: "Acer Laptop",
    price: "3500",
    description:
      "Bytte till Apple och säljer nu windows spyware packeterat i ett aluminium skal. VS Code finns förinstallerat",
    imageUri:
      "https://images.idgesg.net/images/article/2019/07/aspire5slim-100806682-large.jpg",
    category: "Electronics",
    userId: "5",
    city: "Karlstad",
    phone: "0709876543",
    email: "HiYaaa@icloud.com",
    latitude: 59.402181,
    longitude: 13.511498,
  },
  {
    id: "5",
    name: "Jaktgevär",
    price: "3.5",
    description:
      "säljer nu min gala pangare. Bra skick om man bortser från att Polisen pluggat den",
    imageUri:
      "http://svartkrutskallaren.com/mainsite/wp-content/uploads/2015/05/Custom-rifle-RH.jpg",
    category: "Hunting",
    userId: "4",
    city: "Jockmock",
    phone: "0705111222",
    email: "BigJ@yahoo.com",
    latitude: 66.606961,
    longitude: 19.822921,
  },
  {
    id: "6",
    name: "Tidsrese-plugin",
    price: "3700",
    description:
      "installera i valfri bil för att kunna resa framåt i tiden i normal hastighet",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk91P88LTtmAf5MDjIctvmNtxZMLIr1wQ_RQ&usqp=CAU",
    category: "Car Parts",
    userId: "3",
    city: "Edinburgh",
    phone: "0700666666",
    email: "DisasterD@outlook.com",
    latitude: 55.94918,
    longitude: -3.209806,
  },
  {
    id: "7",
    name: "Hemmagjort Pajskal",
    price: "15",
    description: "fyll med goda bär o strösocker eller kanske ost & skinka?",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveHUNvMAe2hSbl5ZOXQrmAzvHzP8UN5zmmA&usqp=CAU",
    category: "Food",
    userId: "2",
    city: "Jakobsberg",
    phone: "0700123456",
    email: "Jonna@gmail.com",
    latitude: 59.422571,
    longitude: 17.833131,
  },
  {
    id: "8",
    name: "Fin båt",
    price: "8000",
    description:
      "Köpte på fyllan, måste sälja snabbt för att betala tillbaka SMS-lånet",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnaEvq-hx7Y7mU5u3jammwcdNHxNe-Mg-NA&usqp=CAU",
    category: "Boats",
    userId: "1",
    city: "Tranemo",
    phone: "0738159045",
    email: "timmythomson@gmail.com",
    latitude: 57.485569,
    longitude: 13.35241,
  },
  {
    id: "9",
    name: "Båtgrej",
    price: "35",
    description:
      "denna kan man använda som en omvänd båthake",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3OjFVKpykXc3c84WgKHmbaBU7eVG1IRvqg&usqp=CAU",
    category: "Boat Parts",
    userId: "4",
    city: "Jockmock",
    phone: "0705111222",
    email: "BigJ@yahoo.com",
    latitude: 66.606961,
    longitude: 19.822921,
  },
  {
    id: "10",
    name: "Nice vita skor",
    price: "200",
    description: "Köpte fel storlek :(",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytgkAtpygIplWWDw9hFIDY6G2TcrQmTjvyA&usqp=CAU",
    category: "Shoes",
    userId: "2",
    city: "Jakobsberg",
    phone: "0700123456",
    email: "Jonna@gmail.com",
    latitude: 59.422571,
    longitude: 17.833131,
  },
  {
    id: "11",
    name: "Ponny för små barn",
    price: "1000",
    description: "Passar åldrar 2-3 år (höjdmässigt)",
    imageUri:
      "https://5.imimg.com/data5/ANDROID/Default/2020/11/UH/DP/FD/44916828/product-jpeg-500x500.jpg",
    category: "Animals",
    userId: "3",
    city: "Edinburgh",
    phone: "0700666666",
    email: "DisasterD@outlook.com",
    latitude: 55.94918,
    longitude: -3.209806,
  },
];

export default mockData;
