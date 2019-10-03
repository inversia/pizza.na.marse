const x = 1.07

const noodlesData = [
    {
        name: 'Ветчина & гриб',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"23vw",
        width:"23vw",
        layout: {
            desktop: {
                position: ['67vw','7vw'],
                size: 23,
            },
            mobile: {
                position: ['14.4vw','106.68vw'],
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
        infoImage:"url(/art/ham-mushrooms.svg)",
        infoTop:"5vw",
        infoLeft:"-21vw",
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
                position: ['31.8vw','27.5vw'],
                size: 23,
            },
            mobile: {
                position: ['9.54vw','45.05vw'],
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
        infoImage:"url(/art/arabyata.svg)",
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
                position: ['69vw','30vw'],
                size: 19,
            },
            mobile: {
                position: ['34.16vw','79.92vw'],
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
        infoImage:"url(/art/ham-mushrooms.svg)",
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "fish",

    },

    {
        name: 'паста4',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [500],
        height:"18vw", 
        width:"18vw", 
        layout: {
            desktop: {
                position: ['53vw','21.5vw'],
                size: 18,
            },
            mobile: {
                position: ['42.1vw','141.39vw'],
                size: 24.67 * x,
            }
        },
        left:"53vw", 
        top:"21.5vw", 
        animationDelay:"0.85s",
        backgroundImage:"url(/art/alanorma.jpg)",
        rotateOffset: '200deg',
        itemType:'decoractive',
        rotationDirection: 'normal',
        infoImage:"url(/art/ham-mushrooms.svg)",
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
                position: ['16vw','21vw'],
                size: 18,
            },
            mobile: {
                position: ['64.16vw','45.04vw'],
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
        infoImage:"url(/art/alanorma.svg)",
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
                position: ['16vw','39vw'],
                size: 18,
            },
            mobile: {
                position: ['54.43vw','104.27vw'],
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
        infoImage:"url(/art/carbonara.svg)",
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
                position: ['11vw','17.5vw'],
                size: 8,
            },
            mobile: {
                position: ['70.78vw','83.2vw'],
                size: 12.15 * x,
            }
        }, 
        left:"11vw", 
        top:"17.5vw", 
        animationDelay:"3.6s",
        backgroundColor:"rgb(130, 116, 90, 0.75)",
        itemType:'decoration',
        rotationDirection: 'reverse',
        infoImage:"url(/art/ham-mushrooms.svg)",
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
                position: ['57.5vw','44vw'],
                size: 9,
            },
            mobile: {
                position: ['77.91vw','71.32vw'],
                size: 12.15 * x,
            }
        },  
        left:"57.5vw", 
        top:"44vw",
        backgroundColor:"#ffc400",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoImage:"url(/art/ham-mushrooms.svg)",
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
                position: ['65.8vw','49vw'],
                size: 9,
            },
            mobile: {
                position: ['41.82vw','39.32vw'],
                size: 12.15 * x,
            }
        }, 
        left:"65.8vw", 
        top:"49vw",
        backgroundColor:"#f0c000", 
        itemType:"decoration",
        rotationDirection: 'normal',
        infoImage:"url(/art/ham-mushrooms.svg)",
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
                position: ['57.5vw','44vw'],
                size: 9,
            },
            mobile: {
                position: ['69.29vw','151.15vw'],
                size: 12.15 * x,
            }
        },  
        left:"57.5vw", 
        top:"44vw",
        backgroundColor:"#ffc400",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoImage:"url(/art/ham-mushrooms.svg)",
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
                position: ['65.8vw','49vw'],
                size: 9,
            },
            mobile: {
                position: ['42.02vw','167.42vw'],
                size: 12.15 * x,
            }
        }, 
        left:"65.8vw", 
        top:"49vw",
        backgroundColor:"#ff9100",
        itemType:"decoration",
        rotationDirection: 'normal',
        infoImage:"url(/art/ham-mushrooms.svg)",
        infoTop:"5vw",
        infoLeft:"-18vw",
        type: "",
    }, 
]

export default noodlesData