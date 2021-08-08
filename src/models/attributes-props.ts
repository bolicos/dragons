export interface TableColumn {
  title: string;
  function: string;
}

export interface TitleProps extends React.HTMLAttributes<HTMLTitleElement> {
  name: string;
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  contents: any[];
  columns: TableColumn[];
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLHtmlElement> {}

export interface LoaderProps extends React.HTMLAttributes<HTMLHtmlElement> {
  color?: string;
}

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string;
  alt: string;
}
