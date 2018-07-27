type props = {
  .
  "input": Js.Nullable.t(string),
  "b": Js.Nullable.t(bool),
};

module ReactComponent = {
  [@bs.module "react-component"]
  external reactComponent : ReasonReact.reactClass = "ReactComponent";
  let make = (~input=?, ~b=?, children) => {
    let props: props = {
      "input": Js.Nullable.from_opt(input),
      "b": Js.Nullable.from_opt(b),
    };
    ReasonReact.wrapJsForReason(~reactClass=reactComponent, ~props, children);
  };
};