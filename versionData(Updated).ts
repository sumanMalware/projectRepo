//declaring the interface for the objects inside the array

interface androidData {
    version: number;
    name: string;
    date: string;
    bugs: string[] | string;
    bugFixed?: string;
    features: string[] | string;
    author: string[];
    updateType: ReleaseType;
}
interface Bug {
    id: string;
    bugDescription: string;
}

interface Feature {
    id: string;
    description: string;
}
enum ReleaseType {
    Major,
    Enhancement,
    Patch,
}

//putting the objects under the main array(putting every version details)

let androidVersion: androidData[] = [
    {
        version: 1.0,
        name: "Android 1.0",
        date: "23-09-2008",
        bugs: "864646",
        bugFixed: "yes",
        features: [
            "Android Market, allowing application downloads and updates through the Market application.",
            "Web browser to show, zoom and pan full HTML and XHTML web pages  multiple pages show as windows (cards)",
            "Camera support  however, this version lacked the option to change the camera's resolution, white balance, quality, etc",
        ],
        author: ["sergey Brin"],
        updateType: ReleaseType.Major,
    },
    {
        version: 1.1,
        name: "Android 1.1",
        date: "09-02-2009",
        bugs: "864785",
        features: [
            "Details and reviews available when a user searches for businesses on Maps.",
            "Longer in-call screen timeout by default when using the speakerphone, plus the ability to show/hide the dialpad.",
            "Ability to save attachments in messages.",
            "Support added for marquee in system layouts.",
        ],
        author: ["rahul patel"],
        updateType: ReleaseType.Patch,
    },
    {
        version: 1.6,
        name: "Android Donut",
        date: "15-09-2009",
        bugs: "864835",
        features: [
            "Voice and text entry search enhanced to include bookmark history, contacts, and the web.",
            "Ability for developers to include their content in search results.",
            "Ability to save attachments in messages.",
            "Multi-lingual speech synthesis engine to allow any Android application to 'speak' a string of text.",
        ],
        author: ["Apritam Sarkar"],
        updateType: ReleaseType.Enhancement,
    },
    {
        version: 2.0,
        name: "Android Eclair",
        date: "27-10-2009",
        bugs: "865231",
        bugFixed: "yes",
        features: [
            "Expanded Account sync, allowing users to add multiple accounts to a device for synchronization of an email and contacts.",
            "Microsoft Exchange email support, with a combined inbox to browse an email from multiple accounts in one page.",

            "Bluetooth 2.1 support.",

            "Ability to save attachments in messages.",
        ],
        author: ["Apritam Sarkar"],
        updateType: ReleaseType.Patch,
    },
];

const bugList = [
    {
        bugs: "864646",
        bug: ["some apps are not stable"],
    },
    {
        bugs: "864785",
        bug: ["latency in app opening."],
    },
    {
        bugs: "864835",
        bug: ["automatically shut down the phone"],
    },
    {
        bugs: "865231",
        bug: ["dial pad stuck"],
    },
];

//function for how many release in a specific year

function findByReleaseYear(year: string) {
    let filteredYear = androidVersion.filter((n) =>
        n.date.toString().includes(year)
    );
    console.log(`How many releases in year ${year}.`);
    console.log(`${filteredYear.length} versions were released in Year ${year}?`);
    console.log(filteredYear);
}
findByReleaseYear("2009");

function findByBugID(str: string) {
    bugList.forEach((element) => {
        if (element.bugs == str) {
            console.log(element.bugs);
        }
    });
    let findBug = androidVersion.filter((n) => n.bugs.includes(str));
    console.log(`In which year we have the bug ${str}`);
    console.log(`The version which have "${str}" ID...`);
    console.log(findBug);
}
findByBugID("864646");

function findByFeatures(feature: string) {
    let count = 0;
    androidVersion.forEach((element) => {
        for (let i of element.features) {
            if (i.includes(feature)) {
                console.log(element);
                count++;
            }
        }
    });
    console.log(`How many versions have the feature ${feature}?`);
    console.log(`${count} versions includes "${feature}" feature...`);
}
findByFeatures(
    "Ability for developers to include their content in search results."
);

function findByType(type: ReleaseType) {
    let findType = androidVersion.filter((n) => n.updateType == type);
    console.log(`${findType.length} versions have ${ReleaseType[type]} type...`);
    console.log(findType);
}
findByType(ReleaseType.Major);

//function for get a specific author input in an update

function findAuthorMostContribution() {
    let sampleArr: any = [];

    androidVersion.forEach((data) => {
        sampleArr.push(data.author); //pushing every author contribution in an array
    });
    var counts: any = {}; //counting the contribution of each author
    for (var i = 0; i < sampleArr.length; i++) {
        counts[sampleArr[i]] = counts[sampleArr[i]] + 1 || 1;
    }
    const sortingForObject = (object1: any) => {
        //sorting the object of Author
        let object2: any = {};
        let array1: any = [];
        for (let i in object1) {
            array1.push(object1[i]);
            function sert(a: any, b: any) {
                return a - b;
            }
            array1.sort(sert);
            array1.reverse(sert);
        }
        for (let j of array1) {
            for (let k in object1) {
                if (j == object1[k]) {
                    object2[k] = object1[k];
                }
            }
        }
        return object2;
    };

    for (let i in sortingForObject(counts)) {
        console.log(`3. who is the Author who worked on maximum numbers releasd?`);
        console.log(
            `${i} is the Author who is contrubuting most in releases, with ${sortingForObject(counts)[i]
            } times`
        );
        break;
    }
}
findAuthorMostContribution();
