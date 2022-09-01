//declaring the interface for the objects inside the array

interface androidData {
    version: number,
    name: string,
    releaseDate: Date,
    bugs: any[],
    bugFixed?: string
    features: string[],
    author: string,
    updateType: string,
}

//putting the objects under the main array(putting every version details)

let androidVersion: androidData[] = [
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
        bugFixed: "yes",
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
            "Support added for marquee in system layouts."
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
        author: "Apritam Sarkar",
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
        bugFixed: "yes",
        features: [
            "Expanded Account sync, allowing users to add multiple accounts to a device for synchronization of an email and contacts.",
            "Microsoft Exchange email support, with a combined inbox to browse an email from multiple accounts in one page.",
            "Bluetooth 2.1 support.",
            "Ability to tap a Contacts photo and select to call, SMS, or email the person.", "Ability to save attachments in messages."
        ],
        author: "Apritam Sarkar",
        updateType: "patch",

    },
];

//pinting the questions 

//function for how many release in a specific year

function specificYear(year: any) {

    let count: any = []
    year.forEach((data: any) => {
        if (data.releaseDate.getFullYear() == 2009) {
            count.push(data.name)
        }
    })
    return count
}
console.log(`1. How many release in year 2009? \n Ans= ${specificYear(androidVersion).length} Releases in year 2009,they are ${specificYear(androidVersion)} `)

//function for get a version release based on bug ID

androidVersion.forEach(function (data) {

    if (data.bugs[0].id == 864785) {
        console.log(`2. In which release, we have the bug #864785? \n Ans= In ${data.name} we have bug ${data.bugs[0].id} `)
    }
})

//function for get a specific author input in an update

let thisArr: any = []

androidVersion.forEach((data) => {
    thisArr.push(data.author)
})
var counts: any = {};
for (var i = 0; i < thisArr.length; i++) {
    counts[thisArr[i]] = (counts[thisArr[i]] + 1) || 1;

}
const sortingForObject = (ob1: any) => {
    let ob2: any = {};
    let arr1: any = [];
    for (let i in ob1) {
        arr1.push(ob1[i]);
        function sert(a: any, b: any) {
            return a - b;
        }
        arr1.sort(sert);
        arr1.reverse(sert);
    }
    for (let j of arr1) {
        for (let k in ob1) {
            if (j == ob1[k]) {
                ob2[k] = ob1[k];
            }
        }
    }
    return ob2;
};

for (let i in sortingForObject(counts)) {
    console.log(`3. who is the Author who worked on maximum numbers releasd?\n ${i} is the Author who is contrubuting most is releases with ${sortingForObject(counts)[i]} times`)
    break
}

//function for get how many patch, major, enhancement type update done in which version

function specificUpdate(update: any) {
    let tempArr: any = []
    update.forEach((data: any) => {
        if (data.updateType.includes("patch")) {
            tempArr.push(data.name)
        }
    })
    return tempArr
}
console.log(`4. How many releases where patch releases? \n Ans= ${specificUpdate(androidVersion).length} patch release, that are ${specificUpdate(androidVersion)}`)

//function for get specific feature

function specificFeature(feature: any) {
    feature.forEach((data: any) => {
        if (data.author) {
        }
    })
    let tempArr: any = []
    feature.forEach((data: any) => {
        if (data.features.includes("Ability to save attachments in messages.")) {
            tempArr.push(data.name)
        }
    })
    return tempArr
}
console.log(`5. How many versions have the specific feature name ?\n Ans= ${specificFeature(androidVersion).length} have the Ability to save attachments in messages, those are ${specificFeature(androidVersion)}`)
