// import images
import Logo from "../src/assets/img/header/logo2.png";
import Resistance from "../src/assets/img/workouts/resistance.png";
import Boxing from "../src/assets/img/workouts/boxing.png";
import BodyPump from "../src/assets/img/workouts/body-pump.png";
import Yoga from "../src/assets/img/workouts/yoga.png";
import FullBody from "../src/assets/img/workouts/full-body.png";
import Fitness from "../src/assets/img/workouts/fitness.png";
import BattleRope from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import ShopBanner1 from "../src/assets/img/shop/banner/bannerShop.jpg";
import Bundle1 from "../src/assets/img/shop/bundles/basic.jpg";
import Bundle2 from "../src/assets/img/shop/bundles/premium.jpg";
import Bundle3 from "../src/assets/img/shop/bundles/motivation.jpg";
import JoinImg from "../src/assets/img/join/joinImg.jpg";
import AuthImage from "../src/assets/img/auth/authImage.jpg";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcon from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const header = {
  logo: Logo,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
  btnLogoutText: "Log out",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about_me" },
  { name: "Shop", href: "/shop" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "My Products", href: "/myProducts" },
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

export const aboutMe = {
  icon: UsersIcn,
  title: "About me",
  subtitle1:
    "Welcome to my fitness world! I am excited to be your companion on your journey to a healthier and more balanced lifestyle. My name is Alexandra, and I am a passionate fitness coach dedicated to helping individuals like you achieve their fitness goals and unlock their full potential.",
  subtitle2:
    "With a deep-rooted love for fitness and personal growth, I have spent the past eight years immersing myself in the gym culture, constantly expanding my knowledge and refining my skills. Through my own personal experiences and continuous learning, I have gained valuable insights into the transformative power of fitness and its profound impact on both the body and mind.",
  subtitle3:
    "My approach to coaching is rooted in empathy, encouragement, and a belief in the untapped capabilities within each individual. I am here to provide you with unwavering support and guidance as we navigate the intricacies of your fitness journey together.",
  link: "Join Now",
};

export const workouts = {
  icon: CalendarIcon,
  title: "Training programs",
  programs: [
    {
      image: Resistance,
      name: "Resistance",
    },
    {
      image: Boxing,
      name: "Fun cardio",
    },
    {
      image: BodyPump,
      name: "Body pump",
    },
    {
      image: Yoga,
      name: "Yoga",
    },
    {
      image: FullBody,
      name: "Full Body",
    },
    {
      image: Fitness,
      name: "Weight lifting",
    },
    {
      image: BattleRope,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Bundles prices",
};

export const shopBanner = {
  titlePart1: "Buy programs that help you achieve your goals.",
  titlePart2: "– stay consistent.",
  subtitle: "Achieve long term results with BALANCE & LOVE for your body.",
  image: ShopBanner1,
};

export const shop = {
  icon: PriceIcn,
  title: "Shop more",
};

export const bundles = {
  icon: PriceIcn,

  btn: "Add to cart",
};

export const products = {
  icon: PriceIcn,

  btn: "Add to cart",
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
};

export const qa = {
  icon: QuestionMarkIcn,
  title: "Q&A",
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
    "Join my community and get access to all the training programs and workout plans.",
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
  socials: [
    {
      icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
    {
      icon: TwitterIcon,
      link: "https://twitter.com/",
    },
    {
      icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
    {
      icon: YouTubeIcon,
      link: "https://www.youtube.com/",
    },
  ],
};
