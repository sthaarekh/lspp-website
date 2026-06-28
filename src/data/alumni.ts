import aakashImg from "../assets/aakash.png";
import aashraImg from "../assets/aashra.jpg";
import purnaImg from "../assets/purna.jpg";

export interface AlumniItem {
  id: number;
  name: string;
  college: string;
  quote: string;
  image: string;
}

export const alumniData: AlumniItem[] = [
  {
    id: 1,
    name: "Aakash Rana",
    college: "Kantipur Engineering College",
    quote: "LSPP was a turning point that transformed not just my skills, but me as a person. It bridged every gap I had, from communication to confidence, from being a learner to becoming a mentor. What I love most about this program is the people and environment— a community that constantly pushes you to grow, where everyone celebrates your wins and supports you through challenges. LSPP didn’t just make me a better engineer, it made me a confident leader ready to take on the world.",
    image: aakashImg
  },
  {
    id: 2,
    name: "Aashra Pradhan",
    college: "St. Xavier's College, Maitighar",
    quote: "LSPP gave me the chance to learn from industry seasoned professionals, build confidence, and develop my skills in leadership and professionalism. I felt the growth firsthand—it was practical and meaningful. One of the highlights was being able to share what I learnt, by leading sessions for thousands of peers, which felt incredible. It wasn’t just about personal growth but also contributing to Nepal’s tech ecosystem.",
    image: aashraImg
  },
  {
    id: 3,
    name: "Purna Shrestha",
    college: "Kathmandu BernHardt College",
    quote: "From day one, I felt like I'd found my tribe—a community buzzing with growth, laughter, growth, and the occasional tech-related pun. LSPP sharpened my skills, boosted my confidence, and ultimately paved the way for me to become an Associate Software Engineer at Leapfrog. Working alongside such talented people, so early in my career, is both humbling and inspiring—reminding me that growth is a continuous process.",
    image: purnaImg
  }
];