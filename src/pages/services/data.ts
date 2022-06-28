import consultation from "./assets/images/consultation.svg";
import metering from "./assets/images/metering.svg";
import sketch from "./assets/images/sketch.svg";
import selection from "./assets/images/selection.svg";
import escort from "./assets/images/escort.svg";
import sewing from "./assets/images/sewing.svg";
import complete from "./assets/images/complete.svg";
import service from '../main/assets/images/IMG_3.jpg'
import service1 from '../main/assets/images/IMG_26.jpg'

export const cardsStage=[
    {
        id: 1,
        imgUrl:consultation,
        imgName: 'consultation',
        description:'Консультация'
    },
    {
        id:2,
        imgUrl:metering,
        imgName:'metering',
        description:'Выезд на замеры'
    },
    {
        id:3,
        imgUrl:sketch,
        imgName:'sketch',
        description:'Разработка эксизов'
    },
    {
        id:4,
        imgUrl:selection,
        imgName:'selection',
        description:'Подбор материалов'
    },
    {
        id:5,
        imgUrl:escort,
        imgName:'escort',
        description:'Сопровождение заказа'
    },
    {
        id:6,
        imgUrl:sewing,
        imgName:'sewing',
        description:'Пошив'
    },
    {
        id:7,
        imgUrl:complete,
        imgName:'complete',
        description:'Установка и монтаж'
    },
];

export const cardsService=[
    {
        id:1,
        exampleLink:'/decor',
        imgUrl:service,
        imgName:'materials',
        description:'материалы, отделка, цвет'
    },
    {
        id:2,
        exampleLink:'/interiordesign',
        imgUrl:service1,
        imgName:'details',
        description:'детали'
    },
    {
        id:3,
        exampleLink:'/portfolio',
        imgUrl:service,
        imgName:'action',
        description:'вписываем в ваш интерьер'
    },
]