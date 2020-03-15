const pizzaData = [
    {
        name: 'Сэлмон',
        composition: ['cливочный соус', 'чеддер', 'пармезан', 'моцарелла', 'горгонзола'],
        price: [495, 400],
        layout: {
            desktop: {
                position: ['7vw','0vw'],
                size: 13,
            },
            mobile: {
                position: ['2vw','87vw'],
                size: 31,
            }
        },
        position: ['7vw','0vw'],
        size: 13,
        backgroundImage: 'salmon',
        animationDelay: '0.2s',
        type:'veg',
    },

    {
        name: '4 сыра',
        composition: ['cливочный соус', 'моцарелла', 'кальмары', 'мидии', 'креветки', 'осьминоги', 'соус песто', 'орегано'],
        price: [565, 400],
        layout: {
            desktop: {
                position: ['77vw','0vw'],
                size: 18,
            },
            mobile: {
                position: ['73vw','9vw'],
                size: 26,
            }
        },
        position: ['77vw','0vw'],
        size: 18,
        backgroundImage: '4cheese',
        animationDelay: '1.1s',
        type:'fish',
    },

    {
        name: 'Салями & сыр',
        composition: ['красный соус', 'моцарелла', 'ветчина', 'грибы', 'орегано'],
        price: [440, 400],
        layout: {
            desktop: {
                position: ['24vw','8vw'],
                size: 12,
            },
            mobile: {
                position: ['64vw','41vw'],
                size: 34,
            }
        },
        position: ['24vw','8vw'],
        size: 12,
        backgroundImage: 'salyami',
        animationDelay: '0.5s',
        type:'meat',
    },

    {
        name: 'Пепперони',
        composition: ['красный соус', 'моцарелла', 'куриная грудка', 'ветчина', 'ананас'],
        price: [440,400],
        layout: {
            desktop: {
                position: ['3vw','22vw'],
                size: 20,
            },
            mobile: {
                position: ['62vw','220vw'],
                size: 32,
            }
        },
        position: ['3vw','22vw'],
        size: 20,
        backgroundImage: 'pepperoni',
        animationDelay: '2.5s',
        type:'meat',
    },

    {
        name: 'Гавайская',
        composition: ['красный соус', 'моцарелла', 'базилик', 'орегано'],
        price: [320, 300],
        layout: {
            desktop: {
                position: ['62vw','11vw'],
                size: 12,
            },
            mobile: {
                position: ['3vw','9vw'],
                size: 32,
            }
        },
        position: ['62vw','11vw'],
        size: 12,
        backgroundImage: 'hawai',
        animationDelay: '0.7s',
        type:'veg',
    },

    {
        name: 'Grow pizza',
        composition: ['cливочный соус', 'моцарелла', 'горгонзола', 'груша', 'мёд'],
        price: [495,400],
        layout: {
            desktop: {
                position: ['67vw','22vw'],
                size: 22,
            },
            mobile: {
                position: ['3vw','150vw'],
                size: 46,
            }
        },
        position: ['67vw','22vw'],
        size: 22,
        backgroundImage: 'grow',
        animationDelay: '3.15s',
        type:'veg',
    },

    {
        name: 'Ветчина Грибы',
        composition: ['красный соус', 'моцарелла', 'ветчина', 'салями', 'куриная грудка', 'бекон', 'соленые огурчики', 'лук красный'],
        price: [565,400],
        layout: {
            desktop: {
                position: ['50vw','30vw'],
                size: 11,
            },
            mobile: {
                position: ['69vw','147vw'],
                size: 29,
            }
        },
        position: ['50vw','30vw'],
        size: 11,
        backgroundImage: 'ham',
        animationDelay: '1.45s',
        type:'meat',
    },

    {
        name: 'Охотничья',
        composition: ['красный соус', 'моцарелла', 'охотничьи колбаски', 'болгарский перец', 'маринованные огурчики', 'красный лук'],
        price: [495, 400],
        layout: {
            desktop: {
                position: ['28vw','24vw'],
                size: 14,
            },
            mobile: {
                position: ['6vw','200vw'],
                size: 42,
            }
        },
        position: ['28vw','24vw'],
        size: 14,
        backgroundImage: 'hunter',
        animationDelay: '2.35s',
        type:'meat',
    },

    {
        name: 'Марго',
        composition: ['красный соус', 'моцарелла', 'перец чили', 'пепперони'],
        price: [440, 400],
        layout: {
            desktop: {
                position: ['57vw','48vw'],
                size: 18,
            },
            mobile: {
                position: ['16vw','121vw'],
                size: 25,
            }
        },
        position: ['57vw','48vw'],
        size: 18,
        backgroundImage: 'margo',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'BBQ пицца',
        composition: ['красный соус', 'моцарелла', 'лосось', 'сливочный сыр креметте'],
        price: [565, 400],
        layout: {
            desktop: {
                position: ['17vw','43vw'],
                size: 19,
            },
            mobile: {
                position: ['45vw','74vw'],
                size: 26,
            }
        },
        position: ['37vw','13vw'],
        size: 19,
        backgroundImage: 'bbq',
        animationDelay: '0.2s',
        type:'fish',
    },

    {
        name: 'А-ля UFIQ',
        composition: ['красный соус', 'моцарелла', 'кабачки', 'помидоры', 'баклажаны', 'болгарский перчик', 'грибы', 'маслины', 'оливки', 'сливочный сыр креметте'],
        price: [440, 400],
        layout: {
            desktop: {
                position: ['41vw','43vw'],
                size: 13,
            },
            mobile: {
                position: ['47vw','106vw'],
                size: 40,
            }
        },
        position: ['41vw','43vw'],
        size: 13,
        backgroundImage: 'ufiq',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'Марсиано',
        composition: ['НЕТ СОСТАВА ПОКА'],
        price: [495, 400],
        layout: {
            desktop: {
                position: ['84vw','46vw'],
                size: 12,
            },
            mobile: {
                position: ['10vw','45vw'],
                size: 37,
            }
        },
        position: ['84vw','46vw'],
        size: 12,
        backgroundImage: 'marsiano',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'Тот самый Цезарь',
        composition: ['сливочный соус', 'моцарелла', 'курица', 'помидоры', 'салат айсберг', 'соус цезарь', 'пармезан'],
        price: [495, 400],
        layout: {
            desktop: {
                position: ['22vw','67vw'],
                size: 10,
            },
            mobile: {
                position: ['52vw','180vw'],
                size: 33,
            }
        },
        position: ['22vw','67vw'],
        size: 10,
        backgroundImage: 'cezar',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'Frutti di mare',
        composition: ['красный соус', 'моцарелла', 'пепперони', 'грибы', 'соус песто', 'руккола'],
        price: [565, 400],
        layout: {
            desktop: {
                position: ['2vw','57vw'],
                size: 16,
            },
            mobile: {
                position: ['41vw','20vw'],
                size: 25,
            }
        },
        position: ['2vw','57vw'],
        size: 16,
        backgroundImage: 'frutti',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'Горгонзола',
        composition: ['красный соус', 'моцарелла', 'салями', 'моцарелла bonfesto', 'шпинат'],
        price: [495, 400],
        layout: {
            desktop: {
                position: ['38vw','62vw'],
                size: 19,
            },
            mobile: {
                position: ['77vw','88vw'],
                size: 20,
            }
        },
        position: ['38vw','62vw'],
        size: 19,
        backgroundImage: 'gorgonzola',
        animationDelay: '0.2s',
        type:'meat',
    },

    {
        name: 'Вялый томат & гриб',
        composition: ['красный соус', 'моцарелла', 'вяленые томаты', 'соус песто', 'руккола'],
        price: [565, 400],
        layout: {
            desktop: {
                position: ['75vw','61vw'],
                size: 17,
            },
            mobile: {
                position: ['37vw','243vw'],
                size: 24,
            }
        },
        position: ['75vw','61vw'],
        size: 17,
        backgroundImage: 'tomat',
        animationDelay: '0.2s',
        type:'veg',
    },
]

export default pizzaData