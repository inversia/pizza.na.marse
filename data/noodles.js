const x = 1.07
const y = 0.9
const height = 1.05;

const noodlesData = [
    {
        name: 'Ветчина & гриб',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"23vw",
        width:"23vw",
        layout: {
            desktop: {
                position: [67, 7],
                size: 23 * y,
            },
            mobile: {
                position: [12.7, 75.2],
                size: 38.11 * x,
            }
        }, 
        left:"67vw", 
        top:"7vw", 
        animationDelay:"1.5s",
        backgroundImage:"url(/art/ham-mushrooms.jpg)",
        rotateOffset: '100deg',
        itemType:'interactive',
        rotationDirection: 'reverse',
        // infoImage:"url(/art/ham-mushrooms.svg)",
        infoLayout: {
            desktop: {
                position: [-21, 5],
                size: 23 * y,
            },
            mobile: {
                position: [50, 10],
                size: 38.11 * x,
            }
        },
        type: "meat",
    },

    {
        name: 'Арабьята',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"23vw", 
        width:"23vw", 
        layout: {
            desktop: {
                position: [34.0, 25.5],
                size: 23 * y,
            },
            mobile: {
                position: [10.8, 10.55],
                size: 38.11 * x,
            }
        }, 
        left:"31.8vw", 
        top:"27.5vw", 
        animationDelay:"0.5s",
        backgroundImage:"url(/art/arabyata.jpg)",
        rotateOffset: '180deg',
        itemType:'interactive',
        rotationDirection: 'normal',
        // infoImage:"url(/art/arabyata.svg)",
        infoLayout: {
            desktop: {
                position: [2, 23],
                size: 23 * y,
            },
            mobile: {
                position: [-10, 10],
                size: 28.11 * x,
            }
        },
        infoTop:"23vw",
        infoLeft:"2vw",
        type: "veg",
    },

    {
        name: 'Паста с лососем',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"19vw", 
        width:"19vw", 
        layout: {
            desktop: {
                position: [67, 28],
                size: 19 * y,
            },
            mobile: {
                position: [34.16, 47.2],
                size: 28 * x,
            }
        }, 
        left:"69vw", 
        top:"30vw", 
        animationDelay:"2.3s",
        backgroundImage:"url(/art/losospasta.jpg)",
        rotateOffset: '10deg',
        itemType:'interactive',
        rotationDirection: 'normal',
        // infoImage:"url(/art/ham-mushrooms.svg)",
        infoLayout: {
            desktop: {
                position: [-18, 5],
                size: 23 * y,
            },
            mobile: {
                position: [0, 20],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "fish",

    },

    {
        name: 'Гречневая',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"18vw", 
        width:"18vw", 
        layout: {
            desktop: {
                position: [53, 19],
                size: 18 * y,
            },
            mobile: {
                position: [40.3, 110.0],
                size: 24.67 * x,
            }
        },
        left:"53vw", 
        top:"21.5vw", 
        animationDelay:"0.85s",
        backgroundImage:"url(/art/margo.jpg)",
        rotateOffset: '200deg',
        itemType:'decoractive',
        rotationDirection: 'normal',
        // infoImage:"url(/art/ham-mushrooms.svg)",
        infoLayout: {
            desktop: {
                position: [-18, 5],
                size: 23 * y,
            },
            mobile: {
                position: [-20, 70],
                size: 12.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",

    },

    {
        name: 'А-ля норма',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"18vw", 
        width:"18vw",
        layout: {
            desktop: {
                position: [19.3, 19.3],
                size: 18 * y,
            },
            mobile: {
                position: [63.16, 13.8],
                size: 24.67 * x,
            }
        }, 
        left:"16vw", 
        top:"21vw", 
        animationDelay:"1.9s",
        backgroundImage:"url(/art/alanorma.jpg)",
        rotateOffset: '300deg',
        itemType:'interactive',
        rotationDirection: 'reverse',
        // infoImage:"url(/art/alanorma.svg)",
        infoLayout: {
            desktop: {
                position: [9, -4],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"-4vw",
        infoLeft:"9vw",
        type: "veg",

    },

    {
        name: 'Карбонара',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"18vw", 
        width:"18vw",
        layout: {
            desktop: {
                position: [19.3, 36.1],
                size: 18 * y,
            },
            mobile: {
                position: [54.1, 72.8],
                size: 24.67 * x,
            }
        }, 
        left:"16vw", 
        top:"39vw", 
        animationDelay:"5.2s",
        backgroundImage:"url(/art/carbonara.jpg)",
        rotateOffset: '0deg',
        itemType:'interactive',
        rotationDirection: 'normal',
        // infoImage:"url(/art/carbonara.svg)",
        infoLayout: {
            desktop: {
                position: [-11, 0],
                size: 23 * y,
            },
            mobile: {
                position: [20, 50],
                size: 28.11 * x,
            }
        },
        infoTop:"0vw",
        infoLeft:"-11vw",
        type: "meat",
        
    },

    {
        name: 'hex1',
        height:"8vw", 
        width:"8vw", 
        layout: {
            desktop: {
                position: [13.7, 16.2],
                size: 8 * y,
            },
            mobile: {
                position: [70.5, 51.5],
                size: 12.15 * x,
            }
        }, 
        left:"11vw", 
        top:"17.5vw", 
        animationDelay:"3.6s",
        backgroundColor:"#ffb100",
        
        itemType:'decoration',
        rotationDirection: 'reverse',
        infoLayout: {
            desktop: {
                position: [5, -18],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",
    },
    
    {
        name: 'hex2',
        height:"9vw", 
        width:"9vw",
        layout: {
            desktop: {
                position: [88.5, 17.5],
                size: 9 * y,
            },
            mobile: {
                position: [77.65, 39.32],
                size: 12.15 * x,
            }
        },  
        left:"57.5vw", 
        top:"44vw",
        backgroundColor:"rgb(130, 116, 90, 0.75)",
        backgroundColor:"#ffc400",
        // backgroundColor:"red",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoLayout: {
            desktop: {
                position: [5, -18],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",

    },

    {
        name: 'hex3',
        height:"9vw", 
        width:"9vw", 
        layout: {
            desktop: {
                // position: [6.5, 20],
                position: [35.0, 17.5],
                size: 8 * y,
            },
            mobile: {
                position: [43.5, 3.815],
                size: 12.15 * x,
            }
        }, 
        left:"65.8vw", 
        top:"49vw",
        backgroundColor:"#241a0ca6",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoLayout: {
            desktop: {
                position: [5, -18],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",
    }, 

    {
        name: 'hex4',
        height:"9vw", 
        width:"9vw",
        layout: {
            desktop: {
                position: [57, 40],
                size: 9 * y,
            },
            mobile: {
                position: [68.0, 119.5],
                size: 12.15 * x,
            }
        },  
        left:"57.5vw", 
        top:"44vw",
        backgroundColor:"rgb(255, 177, 0)",
        // backgroundColor:"green",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoLayout: {
            desktop: {
                position: [5, -18],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",

    },

    {
        name: 'hex5',
        height:"9vw", 
        width:"9vw", 
        layout: {
            desktop: {
                position: [64.8, 45],
                size: 9 * y,
            },
            mobile: {
                position: [39.3, 136.41],
                size: 12.15 * x,
            }
        }, 
        left:"65.8vw", 
        top:"49vw",
        backgroundColor:"#ff9100",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoLayout: {
            desktop: {
                position: [5, -18],
                size: 23 * y,
            },
            mobile: {
                position: [0, 0],
                size: 28.11 * x,
            }
        },
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",
    }, 
]

export default noodlesData