import { Fragment } from "react";

interface NoBreakWordsProps {
  text: string;
}

const NoBreakWords = ({ text }: NoBreakWordsProps) => (
  <span>
    {text.split(" ").map((word, index) => (
      <Fragment key={word}>
        {index > 0 ? " " : null}
        <span className="whitespace-nowrap">{word}</span>
      </Fragment>
    ))}
  </span>
);

export default NoBreakWords;
