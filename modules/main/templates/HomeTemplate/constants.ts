export const TEMPLATE_CONTENT = {
  titleSection: {
    title: "А вдруг СМА?",
  },
  cardsSection: {
    title: "Выберите, кто Ваш пациент:",
    cards: [
      {
        title: "Взрослый",
        image: {
          src: "/img/adult.png",
          alt: "adult",
          width: 300,
          height: 300,
        },
        texts: [
          "Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.",
          "По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.",
          "По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.",
        ],
      },
      {
        title: "Ребенок",
        image: {
          src: "/img/child.png",
          alt: "child",
          width: 300,
          height: 300,
        },
        texts: [
          "Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.",
          "Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания",
        ],
      },
    ],
  },
  symptonsSection: {
    title: "Сообщает ли один из ваших пациентов о следующих симптомах? ",
    subTitle: "(нажмите на любую иконку и узнайте больше)",
    diagram: {
      badgeImg: {
        src: "/img/plus.svg",
        alt: "Scoliosis",
        width: 82,
        height: 82,
      },
      mainImg: {
        text: "Взрослый",
        image: {
          src: "/img/adultCircle.png",
          alt: "adultCircle",
          width: 315,
          height: 315,
        },
      },
      subImg: [
        {
          text: "Сколиоз",
          imageSympton: {
            src: "/img/sympton1.svg",
            alt: "sympton1",
            width: 115,
            height: 117,
          },
        },
        {
          text: "Ограниченная способность поднимать руки и переносить предметы",
          imageSympton: {
            src: "/img/sympton2.svg",
            alt: "sympton2",
            width: 130,
            height: 131,
          },
        },
        {
          text: "Нарушения жевания и глотания",
          imageSympton: {
            src: "/img/sympton3.svg",
            alt: "sympton3",
            width: 110,
            height: 107,
          },
        },
        {
          text: "Дыхательная недостаточность/ респираторная дисфункция",
          imageSympton: {
            src: "/img/sympton4.svg",
            alt: "sympton4",
            width: 110,
            height: 106,
          },
        },
        {
          text: "Неспособность бегать, изменение походки",
          imageSympton: {
            src: "/img/sympton5.svg",
            alt: "sympton5",
            width: 110,
            height: 106,
          },
        },
        {
          text: "Контрактура суставов",
          imageSympton: {
            src: "/img/sympton6.svg",
            alt: "sympton6",
            width: 110,
            height: 106,
          },
        },
        {
          text: "Вывих бедра",
          imageSympton: {
            src: "/img/sympton7.svg",
            alt: "sympton7",
            width: 110,
            height: 106,
          },
        },
        {
          text: "Утомляемость",
          imageSympton: {
            src: "/img/sympton8.svg",
            alt: "sympton8",
            width: 111,
            height: 107,
          },
        },
      ],
    },
  },
};
