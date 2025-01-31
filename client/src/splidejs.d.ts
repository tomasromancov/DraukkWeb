declare module "@splidejs/react-splide" {
  import { ComponentProps, ReactNode } from "react";

  export interface SplideProps {
    children?: ReactNode;
    options?: Options;
    className?: string;
    // Add other props you use
  }

  export interface Options {
    type?: string;
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    arrows?: boolean;
    pagination?: boolean;
    // Add other options you use
  }

  export function Splide(props: SplideProps): JSX.Element;
  export function SplideSlide(props: ComponentProps<"div">): JSX.Element;
}
