// Your web app's Firebase configuration 
var config = {
    apiKey: "AIzaSyAIvXIb2D2krBRrb-mO8mj-0tAC-lueoBg",
    authDomain: "blog-2e2c8.firebaseapp.com",
    databaseURL: "https://blog-2e2c8.firebaseio.com",
    projectId: "blog-2e2c8",
    storageBucket: "",
    messagingSenderId: "761326378419",
    appId: "1:761326378419:web:1c263470209b34e339bfc6",
    measurementId: "G-XHPJ24DN8F"
};

// Initialize Firebase
firebase.initializeApp(config);
var db = firebase.database();

// variables
const box = document.getElementById("input");
const titleb = document.getElementById("title");
const overviewb = document.getElementById("overview");
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const preview = document.getElementById("preview");
const make = document.getElementById("makeContent");
const previewTitle = document.getElementById("previewTitle");
const previewDate = document.getElementById("date");
const content = document.getElementById("content");

async function showPreview() {
    preview.classList.remove("gone");
    make.classList.add("gone");

    var d = new Date();
    var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + (d.getYear() + 1900)
    var text = box.value;
    var title = titleb.value;



    console.log(title)

    previewTitle.innerText = title;
    previewDate.innerText = date;
    content.innerHTML = text;

}

function showMaker() {
    preview.classList.add("gone");
    make.classList.remove("gone");
}

async function pushData() {

    var d = new Date();
    var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + (d.getYear() + 1900)
    var text = box.value;
    var title = titleb.value;
    var overview = overviewb.value;
    var arr = [title, date, overview, text]
    var currentList = []
    var tempArr = []


    db.ref('Data/value').once('value').then(function(snapshot) {
        tempArr.push(snapshot.val());
    })

    const sleep = await pause(500)
    console.log('before' + currentList)
    console.log(currentList)
    
    if (tempArr[0] != null) {
        currentList = tempArr[0]
        currentList.unshift(arr)
        console.log("has items")
    } else {
        currentList = [arr]
        console.log("empty")        
    }

    console.log(currentList)

    db.ref('Data').update({
        value: currentList
    })
}

function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}