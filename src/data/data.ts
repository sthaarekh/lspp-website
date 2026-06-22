import {
  SquareArrowOutUpRight,
  GraduationCap,
  Users,
  Presentation,
  Rocket,
  BadgeCheck,
} from "lucide-react";

export const roadmapData = [
  {
    month: "Month 1",
    title: "Onboarding",
    description: "Deep dive into program values and culture.",
    icon: SquareArrowOutUpRight,
    active: true,
  },
  {
    month: "Month 2",
    title: "Training",
    description: "Technical workshops and soft skills sessions.",
    icon: GraduationCap,
  },
  {
    month: "Month 3",
    title: "Community",
    description: "Organizing campus events and meetups.",
    icon: Users,
  },
  {
    month: "Month 4",
    title: "Workshops",
    description: "Hands-on coding and design sprints.",
    icon: Presentation,
  },
  {
    month: "Month 5",
    title: "Impact",
    description: "Launching major campus initiatives.",
    icon: Rocket,
  },
  {
    month: "Month 6",
    title: "Graduation",
    description: "Certification and internship referrals.",
    icon: BadgeCheck,
    completed: true,
  },
];