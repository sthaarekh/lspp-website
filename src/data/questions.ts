interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Why Student Partnership Program?',
    answer:
      'Over the years, we have onboarded thousands of students into our fellowship programs and hired them as designers, engineers, managers, and more. We have seen the challenges students and colleges in Nepal face in preparing graduates for professional work. The Student Partnership Program bridges the gap between academics and industry by providing real-world experience and helping students build the confidence to excel in their careers.',
  },
  {
    id: 2,
    question: 'What are the key dates for application?',
    answer:
      'The application for 2026 is now open. The application deadline is February 27, 2026.',
  },
  {
    id: 3,
    question: 'Who can participate?',
    answer:
      'Any undergraduate student from Nepal who wants to grow their career in technology or is enrolled in a related degree program can participate.',
  },
  {
    id: 4,
    question: 'What are the traits we value?',
    answer:
      'We value: Embracing openness, Active engagement, Solution-oriented thinking, Teamwork, and the Pursuit of excellence.',
  },
  {
    id: 5,
    question: 'What is the cost of participation?',
    answer:
      'There is no cost to join the program. Participation is completely free.',
  },
];