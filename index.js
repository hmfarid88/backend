const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors());
const port = 8000

const data = [
    {
        "ID": "70",
        "BRAND": "SAMSUNG",
        "MODEL": "A03(4-64)",
        "IMEI": "357567590680101",
        "PRICE": "16999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "96",
        "BRAND": "REALME",
        "MODEL": "C31 - 4\/64",
        "IMEI": "860401062221493",
        "PRICE": "14990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "113",
        "BRAND": "TECNO",
        "MODEL": "spark 8c(3\/64)",
        "IMEI": "359633871256942",
        "PRICE": "14200",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "120",
        "BRAND": "REALME",
        "MODEL": "C30 (2\/32)",
        "IMEI": "860381060782433",
        "PRICE": "10499",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "124",
        "BRAND": "INFINIX",
        "MODEL": "Hot 12 Play",
        "IMEI": "354734750320588",
        "PRICE": "14499",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "127",
        "BRAND": "REALME",
        "MODEL": "Dizob  * 400",
        "IMEI": "860362061828615",
        "PRICE": "2550",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "128",
        "BRAND": "REALME",
        "MODEL": "Dizob  * 400",
        "IMEI": "860362061692888",
        "PRICE": "2550",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "134",
        "BRAND": "TECNO",
        "MODEL": "POP 5 LITE",
        "IMEI": "353566651746961",
        "PRICE": "10999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "135",
        "BRAND": "TECNO",
        "MODEL": "POP 5 LITE",
        "IMEI": "353566651754429",
        "PRICE": "10999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "154",
        "BRAND": "TECNO",
        "MODEL": "SPARK 8 C 6\/64",
        "IMEI": "357916221195320",
        "PRICE": "15990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "164",
        "BRAND": "SAMSUNG",
        "MODEL": "A03core-new",
        "IMEI": "351465072222813",
        "PRICE": "11899",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "165",
        "BRAND": "INFINIX",
        "MODEL": "Smart 6 HD ",
        "IMEI": "354719760259223",
        "PRICE": "9499",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "170",
        "BRAND": "VIVO",
        "MODEL": "y33s 8\/128",
        "IMEI": "861730068580174",
        "PRICE": "22999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "195",
        "BRAND": "TECNO",
        "MODEL": "SPARK 9T 4\/128",
        "IMEI": "353032421422565",
        "PRICE": "13990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "196",
        "BRAND": "TECNO",
        "MODEL": "SPARK 8 C 4\/128",
        "IMEI": "359633870745689",
        "PRICE": "13490",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "216",
        "BRAND": "INFINIX",
        "MODEL": "hot 12 6\/128",
        "IMEI": "358036870881861",
        "PRICE": "16499",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "224",
        "BRAND": "VIVO",
        "MODEL": "Y21T 4\/128",
        "IMEI": "866766058574939",
        "PRICE": "19999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "226",
        "BRAND": "VIVO",
        "MODEL": "y33s 8\/128",
        "IMEI": "861730068535731",
        "PRICE": "23999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "230",
        "BRAND": "TECNO",
        "MODEL": "Spsrk GO 2023 4\/64",
        "IMEI": "354336960189025",
        "PRICE": "11999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "249",
        "BRAND": "TECNO",
        "MODEL": "CAMON 19 NEW",
        "IMEI": "358277450294543",
        "PRICE": "17990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "255",
        "BRAND": "VIVO",
        "MODEL": "Y02   ( 2\/32)",
        "IMEI": "864377066647659",
        "PRICE": "9990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "268",
        "BRAND": "INFINIX",
        "MODEL": "Hot 12 Play 4\/64",
        "IMEI": "354761410944846",
        "PRICE": "13500",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "289",
        "BRAND": "VIVO",
        "MODEL": "Y22 4\/128",
        "IMEI": "868182069824115",
        "PRICE": "19999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "292",
        "BRAND": "OPPO",
        "MODEL": "Reno8T(8\/128)",
        "IMEI": "862619060067976",
        "PRICE": "32990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "294",
        "BRAND": "SAMSUNG",
        "MODEL": "A03s(4\/64)",
        "IMEI": "354551896230087",
        "PRICE": "18599",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "305",
        "BRAND": "SAMSUNG",
        "MODEL": "A03S(4\/64)",
        "IMEI": "354551895225955",
        "PRICE": "18599",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "306",
        "BRAND": "SAMSUNG",
        "MODEL": "A03S(4\/64)",
        "IMEI": "354551895542557",
        "PRICE": "18599",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "307",
        "BRAND": "SAMSUNG",
        "MODEL": "A03S(4\/64)",
        "IMEI": "354551895225724",
        "PRICE": "18599",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "308",
        "BRAND": "SAMSUNG",
        "MODEL": "A13(4\/64)",
        "IMEI": "355895960129793",
        "PRICE": "20999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "310",
        "BRAND": "SAMSUNG",
        "MODEL": "A13(6\/128)",
        "IMEI": "359251900256245",
        "PRICE": "23999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "312",
        "BRAND": "SAMSUNG",
        "MODEL": "A03(3\/32)",
        "IMEI": "357567591309130",
        "PRICE": "14999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "313",
        "BRAND": "SAMSUNG",
        "MODEL": "A03(3\/32)",
        "IMEI": "357567591325797",
        "PRICE": "16999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "314",
        "BRAND": "SAMSUNG",
        "MODEL": "A03(4\/64)",
        "IMEI": "357567590930662",
        "PRICE": "16999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "315",
        "BRAND": "SAMSUNG",
        "MODEL": "A03-core(2\/32)",
        "IMEI": "351465070281803",
        "PRICE": "11899",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "316",
        "BRAND": "SAMSUNG",
        "MODEL": "A03-core(2\/32)",
        "IMEI": "351465070674650",
        "PRICE": "10999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "318",
        "BRAND": "SAMSUNG",
        "MODEL": "A03-core(2\/32)",
        "IMEI": "351465070598313",
        "PRICE": "11899",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "320",
        "BRAND": "SAMSUNG",
        "MODEL": "A03core-(2\/32)",
        "IMEI": "351465071674824",
        "PRICE": "11899",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "322",
        "BRAND": "SAMSUNG",
        "MODEL": "A04s(4\/64)",
        "IMEI": "353598490633761",
        "PRICE": "17999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "323",
        "BRAND": "SAMSUNG",
        "MODEL": "A04(3-32)",
        "IMEI": "350317670406382",
        "PRICE": "12999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "325",
        "BRAND": "SAMSUNG",
        "MODEL": "M12(6\/128)",
        "IMEI": "357484291262223",
        "PRICE": "23499",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "328",
        "BRAND": "OPPO",
        "MODEL": "F21Pro(8\/128)5g",
        "IMEI": "866889050309052",
        "PRICE": "37990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "332",
        "BRAND": "OPPO",
        "MODEL": "A-16e(4\/64)",
        "IMEI": "086275942354032",
        "PRICE": "13990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "333",
        "BRAND": "OPPO",
        "MODEL": "A-16e(4\/64)",
        "IMEI": "086275959523402",
        "PRICE": "13990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "334",
        "BRAND": "TECNO",
        "MODEL": "Pop6 pro (2\/32)",
        "IMEI": "353963811294067",
        "PRICE": "9490",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "335",
        "BRAND": "TECNO",
        "MODEL": "Pop5 lte (3\/32)",
        "IMEI": "353566650974028",
        "PRICE": "12490",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "336",
        "BRAND": "TECNO",
        "MODEL": "POP 5 LITE(3\/32)",
        "IMEI": "353566651746284",
        "PRICE": "10999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "337",
        "BRAND": "TECNO",
        "MODEL": "SPARK 8 pro(6\/64)",
        "IMEI": "357916221114941",
        "PRICE": "15999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "338",
        "BRAND": "TECNO",
        "MODEL": "SPARK 8 C( 4\/128)",
        "IMEI": "359633871370768",
        "PRICE": "14999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "341",
        "BRAND": "INFINIX",
        "MODEL": "SMART 6 PLUS(2\/64)",
        "IMEI": "352882220681469",
        "PRICE": "10500",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "343",
        "BRAND": "REALME",
        "MODEL": "C30(2\/32)",
        "IMEI": "860381060224972",
        "PRICE": "9999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "348",
        "BRAND": "OPPO",
        "MODEL": "A17(4\/64)",
        "IMEI": "868192064155852",
        "PRICE": "15990",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "349",
        "BRAND": "TECNO",
        "MODEL": "POP 6 PRO 2\/32",
        "IMEI": "353963812006122",
        "PRICE": "9490",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "394",
        "BRAND": "SAMSUNG",
        "MODEL": "F13",
        "IMEI": "353828955104739",
        "PRICE": "23999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "397",
        "BRAND": "INFINIX",
        "MODEL": "Hot 20",
        "IMEI": "353655970316760",
        "PRICE": "14999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    },
    {
        "ID": "399",
        "BRAND": "INFINIX",
        "MODEL": " Hot 12 I (4\/64)",
        "IMEI": "354470200217344",
        "PRICE": "12999",
        "IMG": "https://w7.pngwing.com/pngs/879/858/png-transparent-smartphone-iphone-mobile-marketing-telecommunication-computer-smartphone-gadget-electronics-service-thumbnail.png"
    }

]

app.get('/', (req, res) => {
    res.send("server is running")
})
app.get("/product", (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})