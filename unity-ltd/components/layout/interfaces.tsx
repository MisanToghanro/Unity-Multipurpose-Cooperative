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