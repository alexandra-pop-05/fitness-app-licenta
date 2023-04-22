// images
import Logo from "../src/assets/img/header/logo2.png";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
import AuthImage from "../src/assets/img/auth/authImage.jpg";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
  btnLogoutText: "Log out",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about_me" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Community", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Take your dreams seriously",
  titlePart2: "– stand out.",
  subtitle:
    "I’ve put all my experience into practical programs because I want you to have a direction and achieve your goals.",
  textBtn: "Join Now",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "My misson",
  subtitle1:
    "I am a fitness coach with a passion for helping people achieve their fitness goals and create a balanced lifestyle.",
  subtitle2:
    "I’m here to empower, inspire and help you become a better version of yourself. I’m here to help you grow.",
  link: "Join Now",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Training programs",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
        { name: "50% off drinks" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "How do I use a training program?",
      answer:
        "Simple. You use it as your guidance on your fitness journey. You have the plan, you have the instructions, all you need to do is take action. You have all the steps in your program.",
    },
    {
      question: "How do I know if the program fits me?",
      answer:
        "It is important for you to know what are your goals - losing weight, getting in better shape, learning more about fitness, learning how to structure a workout plan, etc. According to what your goals are, read the description and benefits of each program and see which one matches your interest.",
    },
    {
      question: "What age do I need to be to join?",
      answer:
        "You can join the programs at any age. These programs are designed for all ages and fitness levels. You can start at any time. You can start with the beginner program and then move on to the intermediate and advanced programs.",
    },
    {
      question: "What are the benefits of a training program?",
      answer:
        "1. You have very clearSinstructions so you don’t have to waste your time thinking about what you should do in the gym (or at home) when training.\n2. Your workout schedule doesn't depend on anyone else. You can train whenever you want.\n3. You can train at home or at the gym.\n4. All training programs and workout plans can be adjusted to your fitness level.",
    },
    {
      question:
        "What is the difference between a training program and a workout plan?",
      answer:
        "A training program is a set of workouts that are designed to help you achieve a specific goal. A workout plan is a set of exercises that you can do in the gym or at home.",
    },
    {
      question: "How do I adjust the workouts to my own needs?",
      answer: `Always set the weights based on your own limits.\nIf at some point a workout is too difficult, feel free to take longer breaks, to fewer reps.\nTake your time to learn the exercises.\nYou can repeat on week of training for more weeks before stepping to the next level of difficulty.\n If it is getting too easy feel free to increase your weights or your reps. `,
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.",
  btnText: "Join now",
};

export const login = {
  image: AuthImage,
  title: "Login",
  subtitle: "Sign in to access your account",
  btnText: "Sign In",
};

export const footer = {
  logo: Logo,
  copyrightText: "All rights reserved. All fit 2023.",
};
