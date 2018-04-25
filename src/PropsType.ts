export interface PropsType​​ {
  options: any[];
  defaultIndex?: number;
  isLoading?: boolean;
  selectedIndex?: number;
  show?: boolean;
  changeIndex?: () => void;
  className?: string;
  style?: React.CSSProperties;
  font: string;
}