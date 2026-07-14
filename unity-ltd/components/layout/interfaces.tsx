export interface HeroSlide {
  id: number;
  title: string[];
  description: string;
  image: string;

  primaryBtn: {
    text: string;
    href: string;
  };

  secondaryBtn: {
    text: string;
    href: string;
  };

  highlights: string[];
}

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}


export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
   href?: string;
}