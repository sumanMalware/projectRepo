
//declaring the interface for the objects inside the array
interface androidData{
    version:number,
    name:string,
    releaseDate:Date,
    bugs:any[],
    bugFixed ?:string
    features:string[],
    author:string,
    updateType:string,
    

}
//putting the objects under the main array(putting every version details)
let androidVersion:androidData[]= [
    {
        version: 1.0,
        name: "Android 1.0",
        releaseDate: new Date("2008-09-23"),
        bugs: [
            {
                id: 864646,
                bugDescription: "some apps are not stable",
            },
        ],
        bugFixed:"yes",
        features: [
            "Android Market, allowing application downloads and updates through the Market application.",
            "Web browser to show, zoom and pan full HTML and XHTML web pages – multiple pages show as windows (cards)",
            "Camera support  however, this version lacked the option to change the camera's resolution, white balance, quality, etc",
            "Folders allowing the grouping of a number of application icons into a single folder icon on the Home screen.",
            "Access to web email servers, supporting POP3, IMAP4, and SMTP",
        ],
        author: "Sergey Brin",
        updateType: "Major",
        
    },
    {
        version: 1.1,
        name: "Android 1.1",
        releaseDate: new Date("2009-02-09"),
        bugs: [
            {
                id: 864785,
                bugDescription: "latency in app opening",
            },
        ],
        features: [
            "Details and reviews available when a user searches for businesses on Maps.",
            "Longer in-call screen timeout by default when using the speakerphone, plus the ability to show/hide the dialpad.",
            "Ability to save attachments in messages.",
            "Support added for marquee in system layouts.",
        ],
        author: "Rahul Patel",
        updateType: "patch",
    },
    {
        version: 1.6,
        name: "Android Donut",
        releaseDate: new Date('2009-09-15'),
        bugs: [
            {
                id: 864835,
                bugDescription: "automatically shut down the phone",
            },
        ],
        features: [
            "Voice and text entry search enhanced to include bookmark history, contacts, and the web.",
            "Ability for developers to include their content in search results.",
            "Ability to save attachments in messages.",
            "Multi-lingual speech synthesis engine to allow any Android application to 'speak' a string of text.",
        ],
        author: "Sergey Brin",
        updateType: "Enhancement",
    },
    {
        version: 2.0,
        name: "Android Eclair",
        releaseDate: new Date("2009-10-27"),
        bugs: [
            {
                id: 865231,
                bugDescription: "dial pad stuck",
            },
        ],
        bugFixed:"yes",
        features: [
            "Expanded Account sync, allowing users to add multiple accounts to a device for synchronization of an email and contacts.",
            "Microsoft Exchange email support, with a combined inbox to browse an email from multiple accounts in one page.",
            "Bluetooth 2.1 support.",
            "Ability to tap a Contacts photo and select to call, SMS, or email the person.",
        ],
        author: "Apritam Sarkar",
        updateType: "Major",
        
    },
];

//pinting the questions 
console.log("How many release in year 2009?")
let count=0
for(let i in androidVersion){
    if (androidVersion[i].releaseDate.getFullYear()==2009){ 
        count++         
    }
}
console.log(`${count} Releases in year 2009`)
console.log("in which release, we have the bug #864785")
for(let i in androidVersion){
    if(androidVersion[i].bugs[0].id==864785){
        console.log(androidVersion[i])
    }
}
console.log("who is the Author who worked on maximum numbers releasd ")

// console.log("How many releases where patch releases ")
// console.log("How many releases where major releases ")
// console.log("How many releases where enhancement releases ")

androidVersion.forEach((data,index)=>console.log(data))