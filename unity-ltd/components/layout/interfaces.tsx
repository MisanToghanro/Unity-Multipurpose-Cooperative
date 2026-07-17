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
  icon?: React.ReactNode
  title: string;
  description: string;
}

export interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  image: string;

  type: string;

  verified: boolean;
  installment: boolean;

  status: "coming-soon" | "available";

  price?: string;

  href: string;
}