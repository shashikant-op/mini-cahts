const mongoose=require("mongoose");
const chat = require("./models/chat");
main().then(()=>{
    console.log("connected sucessfully ")
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchat=[{
    from:"neha",
    to:"priya",
    msg:"hii what are you doing right now baby",
    createdat:new Date(),
    },
    {
        from: "rahul",
        to: "ankit",
        msg: "Let's catch up sometime this week.",
        createdat: new Date()
    },
    {
        from: "alex",
        to: "sam",
        msg: "Did you finish the project?",
        createdat: new Date()
    },
    {
        from: "maria",
        to: "john",
        msg: "Happy Birthday, John!",
        createdat: new Date()
    },
    {
        from: "lisa",
        to: "mike",
        msg: "Can you send me the report by EOD?",
        createdat: new Date()
    },
    {
        from: "emma",
        to: "olivia",
        msg: "Are we still on for dinner tonight?",
        createdat: new Date()
    },
    {
        from: "liam",
        to: "noah",
        msg: "Don't forget our meeting tomorrow.",
        createdat: new Date()
    },
    {
        from: "ava",
        to: "sophia",
        msg: "I'll be a bit late today.",
        createdat: new Date()
    },
    {
        from: "isabella",
        to: "mia",
        msg: "Can you help me with the assignment?",
        createdat: new Date()
    },
    {
        from: "ethan",
        to: "logan",
        msg: "See you at the gym.",
        createdat: new Date()
    },
    {
        from: "sophia",
        to: "jackson",
        msg: "How was your weekend?",
        createdat: new Date()
    },
    {
        from: "oliver",
        to: "lucas",
        msg: "Let's plan for the trip.",
        createdat: new Date()
    },
    {
        from: "amelia",
        to: "harper",
        msg: "Congrats on your promotion!",
        createdat: new Date()
    },
    {
        from: "charlotte",
        to: "evelyn",
        msg: "Do you have the notes from class?",
        createdat: new Date()
    },
    {
        from: "james",
        to: "aiden",
        msg: "I'll call you in an hour.",
        createdat: new Date()
    },
    {
        from: "scarlett",
        to: "abigail",
        msg: "Are you free this weekend?",
        createdat: new Date()
    },
    {
        from: "daniel",
        to: "joshua",
        msg: "Can we reschedule our meeting?",
        createdat: new Date()
    },
    {
        from: "ella",
        to: "grace",
        msg: "I'll send you the files soon.",
        createdat: new Date()
    },
    {
        from: "matthew",
        to: "henry",
        msg: "Do you have any updates?",
        createdat: new Date()
    },
    {
        from: "chloe",
        to: "penelope",
        msg: "Let's go for a coffee break.",
        createdat: new Date()
    },
    {
        from: "sebastian",
        to: "leo",
        msg: "Can you review this document?",
        createdat: new Date()
    },
    {
        from: "victoria",
        to: "riley",
        msg: "How's your project going?",
        createdat: new Date()
    },
    {
        from: "grace",
        to: "lyla",
        msg: "Can we talk later?",
        createdat: new Date()
    },
    {
        from: "jackson",
        to: "owen",
        msg: "Are you joining the meeting?",
        createdat: new Date()
    },
    {
        from: "mila",
        to: "sofia",
        msg: "Let's have lunch together.",
        createdat: new Date()
    },
    {
        from: "aiden",
        to: "elijah",
        msg: "Can you help me with this task?",
        createdat: new Date()
    },
    {
        from: "levi",
        to: "wyatt",
        msg: "I'll be there in 10 minutes.",
        createdat: new Date()
    },
    {
        from: "zoe",
        to: "stella",
        msg: "Have you seen this movie?",
        createdat: new Date()
    },
];
chat.insertMany(allchat);