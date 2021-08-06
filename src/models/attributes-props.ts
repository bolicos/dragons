export interface TitleProps extends React.HTMLAttributes<HTMLTitleElement> {
  name: string;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string;
  alt: string;
}
