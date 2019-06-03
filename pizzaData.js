const pizzaData = [
    {
        name: '4 сыра',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: 495,
        layout: {
            desktop: {
                position: ['7vw','0vw'],
                size: 13,
            },
            mobile: {
                position: ['3vw','94vw'],
                size: 29,
            }
        },
        position: ['7vw','0vw'],
        size: 13,
        img: '/art/4cheese.jpg',
        animationDelay: '0.2s', 
        type:'veg',
    },

    {
        name: 'Frutti di mare',
        composition: ['cливочный соус', 'моцарелла', 'кальмары', 'мидии', 'креветки', 'осьминоги', 'соус песто', 'орегано'],
        price: 565,
        layout: {
            desktop: {
                position: ['77vw','0vw'],
                size: 18,
            },
            mobile: {
                position: ['66vw','16vw'],
                size: 32,
            }
        },
        position: ['77vw','0vw'],
        size: 18,
        img: '/art/frutti.jpg',
        animationDelay: '1.1s', 
        type:'fish',
    },

    {
        name: 'Ветчина Грибы',
        composition: ['красный соус', 'моцарелла', 'ветчина', 'грибы', 'орегано'],
        price: 440,
        layout: {
            desktop: {
                position: ['24vw','8vw'],
                size: 12,
            },
            mobile: {
                position: ['64vw','54vw'],
                size: 35,
            }
        },
        position: ['24vw','8vw'],
        size: 12,
        img: '/art/ham.jpg',
        animationDelay: '0.5s', 
        type:'meat',
    },

    {
        name: 'Гавайская',
        composition: ['красный соус', 'моцарелла', 'куриная грудка', 'ветчина', 'ананас'],
        price: 440,
        layout: {
            desktop: {
                position: ['3vw','22vw'],
                size: 20,
            },
            mobile: {
                position: ['36vw','193vw'],
                size: 33,
            }
        },
        position: ['3vw','22vw'],
        size: 20,
        img: '/art/hawai.jpg',
        animationDelay: '2.5s', 
        type:'meat',
    },

    {
        name: 'Горгонзола',
        composition: ['cливочный соус', 'моцарелла', 'горгонзола', 'груша', 'мёд'],
        price: 495,
        layout: {
            desktop: {
                position: ['67vw','22vw'],
                size: 22,
            },
            mobile: {
                position: ['70vw','174vw'],
                size: 33,
            }
        },
        position: ['67vw','22vw'],
        size: 22,
        img: '/art/gorgonzola.jpg',
        animationDelay: '3.15s', 
        type:'veg',
    },

    {
        name: 'Марго',
        composition: ['красный соус', 'моцарелла', 'базилик', 'орегано'],
        price: 320,
        layout: {
            desktop: {
                position: ['62vw','11vw'],
                size: 12,
            },
            mobile: {
                position: ['3vw','16vw'],
                size: 32,
            }
        },
        position: ['62vw','11vw'],
        size: 12,
        img: '/art/margo.jpg',
        animationDelay: '0.7s', 
        type:'veg',
    },

    {
        name: 'Марсиано',
        composition: ['красный соус', 'моцарелла', 'ветчина', 'салями', 'куриная грудка', 'бекон', 'соленые огурчики', 'лук красный'],
        price: 565,
        layout: {
            desktop: {
                position: ['50vw','30vw'],
                size: 11,
            },
            mobile: {
                position: ['65vw','129vw'],
                size: 35,
            }
        },
        position: ['50vw','30vw'],
        size: 11,
        img: '/art/marsiano.jpg',
        animationDelay: '1.45s', 
        type:'meat',
    },

    {
        name: 'Охотничья',
        composition: ['красный соус', 'моцарелла', 'охотничьи колбаски', 'болгарский перец', 'маринованные огурчики', 'красный лук'],
        price: 495,
        layout: {
            desktop: {
                position: ['28vw','24vw'],
                size: 14,
            },
            mobile: {
                position: ['8vw','209vw'],
                size: 27,
            }
        },
        position: ['28vw','24vw'],
        size: 14,
        img: '/art/hunter.jpg',
        animationDelay: '2.35s', 
        type:'meat',
    },

    {
        name: 'Пепперони',
        composition: ['красный соус', 'моцарелла', 'перец чили', 'пепперони'],
        price: 440,
        layout: {
            desktop: {
                position: ['57vw','48vw'],
                size: 18,
            },
            mobile: {
                position: ['2vw','136vw'],
                size: 31,
            }
        },
        position: ['57vw','48vw'],
        size: 18,
        img: '/art/pepperoni.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'Сэлмон',
        composition: ['красный соус', 'моцарелла', 'лосось', 'сливочный сыр креметте'],
        price: 565,
        layout: {
            desktop: {
                position: ['17vw','43vw'],
                size: 19,
            },
            mobile: {
                position: ['27vw','70vw'],
                size: 33,
            }
        },
        position: ['37vw','13vw'],
        size: 19,
        img: '/art/salmon.jpg',
        animationDelay: '0.2s', 
        type:'fish',
    },

    {
        name: 'Grow pizza',
        composition: ['красный соус', 'моцарелла', 'кабачки', 'помидоры', 'баклажаны', 'болгарский перчик', 'грибы', 'маслины', 'оливки', 'сливочный сыр креметте'],
        price: 440,
        layout: {
            desktop: {
                position: ['41vw','43vw'],
                size: 13,
            },
            mobile: {
                position: ['31vw','109vw'],
                size: 36,
            }
        },
        position: ['41vw','43vw'],
        size: 13,
        img: '/art/grow.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'BBQPizza',
        composition: ['НЕТ СОСТАВА ПОКА'],
        price: 495,
        layout: {
            desktop: {
                position: ['84vw','46vw'],
                size: 12,
            },
            mobile: {
                position: ['5vw','55vw'],
                size: 26,
            }
        },
        position: ['84vw','46vw'],
        size: 12,
        img: '/art/bbq.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'Тот самый Цезарь',
        composition: ['сливочный соус', 'моцарелла', 'курица', 'помидоры', 'салат айсберг', 'соус цезарь', 'пармезан'],
        price: 495,
        layout: {
            desktop: {
                position: ['22vw','67vw'],
                size: 10,
            },
            mobile: {
                position: ['5vw','172vw'],
                size: 34,
            }
        },
        position: ['22vw','67vw'],
        size: 10,
        img: '/art/cezar.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'А-ля UFIQ',
        composition: ['красный соус', 'моцарелла', 'пепперони', 'грибы', 'соус песто', 'руккола'],
        price: 565,
        layout: {
            desktop: {
                position: ['2vw','57vw'],
                size: 16,
            },
            mobile: {
                position: ['35vw','33vw'],
                size: 31,
            }
        },
        position: ['2vw','57vw'],
        size: 16,
        img: '/art/ufiq.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'Немного салями & сыра',
        composition: ['красный соус', 'моцарелла', 'салями', 'моцарелла bonfesto', 'шпинат'],
        price: 495,
        layout: {
            desktop: {
                position: ['38vw','62vw'],
                size: 19,
            },
            mobile: {
                position: ['68vw','92vw'],
                size: 28,
            }
        },
        position: ['38vw','62vw'],
        size: 19,
        img: '/art/salyami.jpg',
        animationDelay: '0.2s', 
        type:'meat',
    },

    {
        name: 'Вялый томат & гриб',
        composition: ['красный соус', 'моцарелла', 'вяленые томаты', 'соус песто', 'руккола'],
        price: 565,
        layout: {
            desktop: {
                position: ['75vw','61vw'],
                size: 17,
            },
            mobile: {
                position: ['36vw','152vw'],
                size: 33,
            }
        },
        position: ['75vw','61vw'],
        size: 17,
        img: '/art/tomat.jpg',
        animationDelay: '0.2s', 
        type:'veg',
    },
]

export default pizzaData