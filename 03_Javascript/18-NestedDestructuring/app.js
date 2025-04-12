// Nested destructring in JS -> Destructuring inside destructuring
const songs = [
    {name: "Seven", singer: "Jungkook", duration: 3.27},
    {name: "Change", singer: "RM", duration: 4.34},
    {name: "Hope World", singer: "J-Hope", duration: 2.54},
    {name: "Friends", singer: "V", duration: 1.43},
    {name: "Song Request", singer: "SUGA", duration: 5.23},
    {name: "Super Tuna", singer: "Jin", duration: 2.35},
    {name: "With You", singer: "Jimin", duration: 3.05}
];

const [, , {singer}] = songs;
console.log(singer)     // J-Hope


// ------------ DESTRUCTURING MIXTURE -------------------
const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };
  
  // Extracting data using object destructuring
  const {
    user: {
      name,
      age,
      address: { city, country },
      hobbies,
      scores: { math, science, history },
      email,
    },
    products: [product1, product2, product3],
    settings: {
      darkMode,
      notifications: {
        email: emailNotifications,
        sms: smsNotifications,
        push: pushNotifications,
      },
      language,
    },
  } = data;

  // Logging to the console
  console.log(`Name: ${name}`)
  console.log(`Age: ${age}`)
  console.log(`Address: ${city}, ${country}`)
  console.log(`Hobbies: ${hobbies.join(',')}`)
  console.log(`Math Score: ${math}`)
  console.log(`Science Score: ${science}`)
  console.log(`History Score: ${history}`)
  console.log(`Email: ${email}`)
  console.log(`Product 1: ${product1.name} - $${product1.price}`)
  console.log(`Product 2: ${product2.name} - $${product2.price}`)
  console.log(`Product 3: ${product3.name} - $${product3.price}`)
  console.log(`Dark Mode: ${darkMode}`)
  console.log(`Email Notification: ${emailNotifications}`)
  console.log(`SMS Notification: ${smsNotifications}`)
  console.log(`Push Notification: ${pushNotifications}`)
  console.log(`Language: ${language}`)