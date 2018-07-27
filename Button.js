  declare type ButtonType = "primary" | "secondary" | "ternary" | "ghost";

  declare type ButtonSize = "tiny" | "small" | "default";

  declare type Props = {
    innerRef?: ElementRef<any>,
    htmlType?: "submit" | "button",
    text: React$Node,
    type: ButtonType,
    onClick?: (SyntheticEvent<any>) => void | Promise<any>,
    className?: string,
    loading?: boolean,
    disabled: boolean,
    size: ButtonSize,
    style?: Object
  };

  declare type State = {
    loading: boolean
  };

  // declare class Button extends React$Component<Props, State> { }
