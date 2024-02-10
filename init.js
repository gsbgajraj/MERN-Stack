const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful")
})
.catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats= [
  {
    from: "raj",
    to: "preetam",
    msg: "send your exam sheets",
    created_at: new Date(),
  },
  {
    from: "alice",
    to: "bob",
    msg: "meeting at 2 PM",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "mary",
    msg: "don't forget the groceries",
    created_at: new Date(),
  },
  {
    from: "sara",
    to: "david",
    msg: "review the project proposal",
    created_at: new Date(),
  },
  {
    from: "alex",
    to: "emma",
    msg: "happy birthday!",
    created_at: new Date(),
  },
  {
    from: "michael",
    to: "jessica",
    msg: "let's grab coffee tomorrow",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);