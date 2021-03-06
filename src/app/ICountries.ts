export type Region = 'europe' | 'asia';

export interface Country {
    name: NameDetails,
    "cca2": string,
    "cca3": string,
    "cioc": string,
    "status": string,
    "unMember": false,
    "currencies": Map<string, Currency>,
    "idd": {
      "root": "+3",
      "suffixes": [
        "83"
      ]
    },
    "capital": [
      "Pristina"
    ],
    "altSpellings": [
      "XK",
      "Република Косово"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "languages": {
      "sqi": "Albanian",
      "srp": "Serbian"
    },
    "translations": {
      "ara": {
        "official": "جمهورية كوسوفو",
        "common": "كوسوفو"
      },
      "ces": {
        "official": "Kosovská republika",
        "common": "Kosovo"
      },
      "cym": {
        "official": "Republic of Kosovo",
        "common": "Kosovo"
      },
      "deu": {
        "official": "Republik Kosovo",
        "common": "Kosovo"
      },
      "est": {
        "official": "Kosovo Vabariik",
        "common": "Kosovo"
      },
      "fin": {
        "official": "Kosovon tasavalta",
        "common": "Kosovo"
      },
      "fra": {
        "official": "République du Kosovo",
        "common": "Kosovo"
      },
      "hrv": {
        "official": "Republika Kosovo",
        "common": "Kosovo"
      },
      "hun": {
        "official": "Koszovó",
        "common": "Koszovó"
      },
      "ita": {
        "official": "Repubblica del Kosovo",
        "common": "Kosovo"
      },
      "kor": {
        "official": "코소보 공화국",
        "common": "코소보"
      },
      "nld": {
        "official": "Republiek Kosovo",
        "common": "Kosovo"
      },
      "per": {
        "official": "جمهوری کوزوو",
        "common": "کوزوو"
      },
      "pol": {
        "official": "Republika Kosowa",
        "common": "Kosowo"
      },
      "por": {
        "official": "República do Kosovo",
        "common": "Kosovo"
      },
      "rus": {
        "official": "Республика Косово",
        "common": "Республика Косово"
      },
      "slk": {
        "official": "Republika Kosovo",
        "common": "Kosovo"
      },
      "spa": {
        "official": "República de Kosovo",
        "common": "Kosovo"
      },
      "swe": {
        "official": "Republiken Kosovo",
        "common": "Kosovo"
      },
      "urd": {
        "official": "جمہوریہ کوسووہ",
        "common": "کوسووہ"
      },
      "zho": {
        "official": "科索沃共和国",
        "common": "科索沃"
      }
    },
    "latlng": [
      42.666667,
      21.166667
    ],
    "landlocked": true,
    "borders": [
      "ALB",
      "MKD",
      "MNE",
      "SRB"
    ],
    "area": 10908,
    "demonyms": {
      "eng": {
        "f": "Kosovar",
        "m": "Kosovar"
      },
      "fra": {
        "f": "Kosovare",
        "m": "Kosovar"
      }
    },
    "flag": "🇽🇰",
    "maps": {
      "googleMaps": "https://goo.gl/maps/CSC4Yc8SWPgburuD9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/2088990"
    },
    "population": 1775378,
    "gini": {
      "2017": 29
    },
    "fifa": "KVX",
    "car": {
      "signs": [
        "CS"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC+01:00"
    ],
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/xk.png",
      "svg": "https://flagcdn.com/xk.svg"
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/xk.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/xk.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [
        42.67,
        21.17
      ]
    }
  }

export interface NameDetails {
    common: string,
    official: string,
    nativeName: NativeName
}

export interface NativeName {
    "sqi": SQI,
    "srp": SQI
}

export interface SQI {
    "official": string,
    "common": string
}

export interface Currency {
    name: string;
    symbol: string;
}