export interface ITestimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export const testimonials: ITestimonial[] = [
  {
    name: "John Smith",
    role: "CEO at Company",
    message: `Rekon's AI-driven transaction matching has transformed how we approach financial reconciliation. It's an invaluable resource in the modern financial landscape.`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Jane Doe",
    role: "CTO at Startup",
    message: `As a CTO, I'm impressed by Rekon's robust security measures and seamless integrations. It's rare to find an app that balances user-friendliness with such advanced technology.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    message: `Rekon is revolutionizing transaction reconciliation. Its intuitive design and powerful features make it an indispensable tool for anyone serious about financial accuracy.`,
    avatar: "/images/testimonial-3.webp",
  },
];
