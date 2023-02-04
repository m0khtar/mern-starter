import React from "react";

interface Props {
  inverted?: boolean;
  content?: string;
}

const ErrorComponent = ({ inverted = true, content = "Error..." }: Props) => {
  return <h1>error</h1>;
};

export default ErrorComponent;
