# Unicode Typing
Returns the mapped unicode key based.

## Usuage

1. Install Unicode typing
- npm i unicode-typing

2. Create ENT Unicode Mapping, in following structure

```
let nepaliKeyMapping = {
    "K0_223_BT": {
        "n": "ञ",
        "c": "0",
        "s": "",
        "c_a": "",
        "c_a_s": ""
    },
    "K1_49_1": {
        "n": "ज्ञ",
        "c": "0",
        "s": "१",
        "c_a": "1",
        "c_a_s": ""
    },
    "K2_50_2": {
        "n": "द्द",
        "c": "0",
        "s": "ू",
        "c_a": "2",
        "c_a_s": ""
    },
    "K3_51_3": {
        "n": "घ",
        "c": "0",
        "s": "घ्",
        "c_a": "3",
        "c_a_s": ""
    },
    "K4_52_4": {
        "n": "द्ध",
        "c": "0",
        "s": "४",
        "c_a": "4",
        "c_a_s": ""
    },
    "K5_53_5": {
        "n": "छ",
        "c": "0",
        "s": "५",
        "c_a": "5",
        "c_a_s": ""
    },
    "K6_54_6": {
        "n": "ट",
        "c": "0",
        "s": "६",
        "c_a": "6",
        "c_a_s": ""
    },
    "K7_55_7": {
        "n": "ठ",
        "c": "0",
        "s": "७",
        "c_a": "7",
        "c_a_s": ""
    },
    "K8_56_8": {
        "n": "ड",
        "c": "0",
        "s": "८",
        "c_a": "8",
        "c_a_s": ""
    },
    "K9_57_9": {
        "n": "ढ",
        "c": "0",
        "s": "९",
        "c_a": "9",
        "c_a_s": ""
    },
    "K10_48_0": {
        "n": "ण",
        "c": "0",
        "s": "०",
        "c_a": "0",
        "c_a_s": ""
    },
    "K11_189_HY": {
        "n": "(",
        "c": "0",
        "s": ")",
        "c_a": "",
        "c_a_s": ""
    },
    "K12_189_EQ": {
        "n": ".",
        "c": "0",
        "s": "ं",
        "c_a": "+",
        "c_a_s": ""
    },
    "K13_81_Q": {
        "n": "त्र",
        "c": "0",
        "s": "त्त",
        "c_a": "",
        "c_a_s": ""
    },
    "K14_87_W": {
        "n": "ध",
        "c": "0",
        "s": "ध्",
        "c_a": "",
        "c_a_s": ""
    },
    "K15_69_E": {
        "n": "भ",
        "c": "0",
        "s": "भ्",
        "c_a": "",
        "c_a_s": ""
    },
    "K16_82_R": {
        "n": "च",
        "c": "0",
        "s": "च्",
        "c_a": "",
        "c_a_s": ""
    },
    "K17_84_T": {
        "n": "त",
        "c": "0",
        "s": "त्",
        "c_a": "",
        "c_a_s": ""
    },
    "K18_89_Y": {
        "n": "थ",
        "c": "0",
        "s": "थ्",
        "c_a": "",
        "c_a_s": ""
    },
    "K19_85_U": {
        "n": "ग",
        "c": "0",
        "s": "ग्",
        "c_a": "",
        "c_a_s": ""
    },
    "K20_73_I": {
        "n": "ष",
        "c": "0",
        "s": "क्ष्",
        "c_a": "",
        "c_a_s": ""
    },
    "K21_79_O": {
        "n": "य",
        "c": "0",
        "s": "इ",
        "c_a": "",
        "c_a_s": ""
    },
    "K22_80_P": {
        "n": "उ",
        "c": "0",
        "s": "ए",
        "c_a": "ऊ",
        "c_a_s": ""
    },
    "K23_219_SBO": {
        "n": "ृ",
        "c": "0",
        "s": "",
        "c_a": "",
        "c_a_s": ""
    },
    "K24_221_SBC": {
        "n": "े",
        "c": "0",
        "s": "ै",
        "c_a": "औ",
        "c_a_s": ""
    },
    "K25_220_BS": {
        "n": "",
        "c": "0",
        "s": "्",
        "c_a": "",
        "c_a_s": ""
    },
    "K26_65_A": {
        "n": "ब",
        "c": "0",
        "s": "ब्",
        "c_a": "",
        "c_a_s": ""
    },
    "K27_83_S": {
        "n": "क",
        "c": "0",
        "s": "क्",
        "c_a": "",
        "c_a_s": ""
    },
    "K28_68_D": {
        "n": "म",
        "c": "0",
        "s": "म्",
        "c_a": "",
        "c_a_s": ""
    },
    "K29_70_F": {
        "n": "ा",
        "c": "0",
        "s": "ँ",
        "c_a": "",
        "c_a_s": ""
    },
    "K30_71_G": {
        "n": "न",
        "c": "0",
        "s": "न्",
        "c_a": "",
        "c_a_s": ""
    },
    "K31_72_H": {
        "n": "ज",
        "c": "0",
        "s": "ज्",
        "c_a": "",
        "c_a_s": ""
    },
    "K32_74_J": {
        "n": "व",
        "c": "0",
        "s": "व्",
        "c_a": "",
        "c_a_s": ""
    },
    "K33_75_K": {
        "n": "प",
        "c": "0",
        "s": "प्",
        "c_a": "",
        "c_a_s": ""
    },
    "K34_76_L": {
        "n": "ि",
        "c": "0",
        "s": "ी",
        "c_a": "",
        "c_a_s": ""
    },
    "K35_186_CO": {
        "n": "स",
        "c": "0",
        "s": "स्",
        "c_a": "",
        "c_a_s": ""
    },
    "K36_192_AP": {
        "n": "ु",
        "c": "0",
        "s": "ू",
        "c_a": "",
        "c_a_s": ""
    },
    "K36_1_222_HA": {
        "n": "३",
        "c": "0",
        "s": "ञ्",
        "c_a": "",
        "c_a_s": ""
    },
    "K37_90_Z": {
        "n": "श",
        "c": "0",
        "s": "श्",
        "c_a": "",
        "c_a_s": ""
    },
    "K38_88_X": {
        "n": "ह",
        "c": "0",
        "s": "ह्",
        "c_a": "",
        "c_a_s": ""
    },
    "K39_67_C": {
        "n": "अ",
        "c": "0",
        "s": "ऋ",
        "c_a": "आ",
        "c_a_s": ""
    },
    "K40_86_V": {
        "n": "ख",
        "c": "0",
        "s": "ख्",
        "c_a": "",
        "c_a_s": ""
    },
    "K41_66_B": {
        "n": "द",
        "c": "0",
        "s": "द्य",
        "c_a": "",
        "c_a_s": ""
    },
    "K42_78_N": {
        "n": "ल",
        "c": "0",
        "s": "ल्",
        "c_a": "",
        "c_a_s": ""
    },
    "K43_77_M": {
        "n": "फ्",
        "c": "0",
        "s": "ः",
        "c_a": "",
        "c_a_s": ""
    },
    "K44_188_CO": {
        "n": ",",
        "c": "0",
        "s": "?",
        "c_a": "",
        "c_a_s": ""
    },
    "K45_190_FS": {
        "n": "।",
        "c": "0",
        "s": "श्र",
        "c_a": "",
        "c_a_s": ""
    },
    "K46_191_FS": {
        "n": "र",
        "c": "0",
        "s": "रु",
        "c_a": "",
        "c_a_s": ""
    },
    "k47": {
        "n": "",
        "c": "0",
        "s": "्",
        "c_a": "",
        "c_a_s": ""
    }
}   
```

3. Textarea: <textarea id="languageTextarea" rows="20" cols="50"></textarea>


4. Bind keymapping to unicode typing

```
let targArea = document.getElementById('FontTypingTextarea');
targArea.addEventListener('keydown', reportKeyEvent);

let keyEvent = {
    altKey: false,
    shiftKey: false,
    ctrlKey: false,
    keyCode: '',
    key: '',
    keyShortName: ''
};

let keyShortName = {
    //Numeric Row
    223 : 'K0_223_BT', //Back Tick
    49 : 'K1_49_1',
    50 : 'K2_50_2',
    51 : 'K3_51_3',
    52 : 'K4_52_4',
    53 : 'K5_53_5',
    54 : 'K6_54_6',
    55 : 'K7_55_7',
    56 : 'K8_56_8',
    57 : 'K9_57_9',
    48 : 'K10_48_0',
    189 : 'K11_189_HY', //Hypen
    187 : 'K12_189_EQ', //Equal

    //First Alphabetical Row
    81 : 'K13_81_Q',
    87 : 'K14_87_W',
    69 : 'K15_69_E',
    82 : 'K16_82_R',
    84 : 'K17_84_T',
    89 : 'K18_89_Y',
    85 : 'K19_85_U',
    73 : 'K20_73_I',
    79 : 'K21_79_O',
    80 : 'K22_80_P',
    219 : 'K23_219_SBO', //Square Bracket Open
    221 : 'K24_221_SBC', //Square Bracket Close
    220 : 'K25_220_BS', //Back Slash

    //Second Alphabetical Row
    65 : 'K26_65_A',
    83 : 'K27_83_S',
    68 : 'K28_68_D',
    70 : 'K29_70_F',
    71 : 'K30_71_G',
    72 : 'K31_72_H',
    74 : 'K32_74_J',
    75 : 'K33_75_K',
    76 : 'K34_76_L',
    186 : 'K35_186_CO', //COLON
    192 : 'K36_192_AP', //Apostrophe
    222: 'K36_1_222_HA', //Hash 

    //Third Alphabetical Row
    90 : 'K37_90_Z',
    88 : 'K38_88_X',
    67 : 'K39_67_C',
    86 : 'K40_86_V',
    66 : 'K41_66_B',
    78 : 'K42_78_N',
    77 : 'K43_77_M',
    188 : 'K44_188_CO',//COMMA
    190 : 'K45_190_FS',//FULL STOP
    191 : 'K46_191_FS',//FOWARD Slash
}

function reportKeyEvent(event) {
    keyEvent.ctrlKey = (event.ctrlKey) ? true : false;
    keyEvent.shiftKey = (event.shiftKey) ? true : false;
    keyEvent.altKey = (event.altKey) ? true : false;
    keyEvent.keyCode = event.keyCode; //Use mapping to get k1, k2, k3 or ascii key value
    keyEvent.key = event.key;
    keyEvent.keyShortName = (keyShortName[event.keyCode]) ? keyShortName[event.keyCode] : '';          

    let unicodeTyping = new UnicodeTyping(keyEvent, {keyMapping: nepaliKeyMapping});

    if (unicodeTyping.getUnicodeKey() !== false) {
        this.value += unicodeTyping.getUnicodeKey();

        /*
         * This prevents actual text for e.g. a, b, c from being entered on the textarea. 
         */
        event.preventDefault();
    }            
}
```

## Compiling and Publishing

1. Local: On local environment run `npm run compile`. This will convert ES6 code in src directory to lib directory.

2. Publishing: On `npm publish`, script *prepublish* defined in package.json will be automatically called.

## Compiling and Publishing description

1. "compile": "babel --source-maps -d lib/ src/"

Running `npm run compile`: Bable will scan all files in the src directory, transpile your ES6 code to ES5, and store the result in the lib directory

The --source-map flag is added to generate source maps which help you with debugging code.

2. "prepublish": "npm run compile"
This tells NPM to compile our code before it is published to the repository.

prepublish: is a special script that is executed automatically when you publish a package to the NPM repository. In this script we define all the steps that have to be executed before we can publish our package. In our case, this is simple:


######Source:
https://www.wouterbulten.nl/blog/tech/publishing-es6-package-to-npm/

https://www.npmjs.com/package/es2015-packages-best-practices-t
