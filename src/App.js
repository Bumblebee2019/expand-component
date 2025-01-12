import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <TextExpander>
        Call me Ishmael. Some years ago—never mind how long precisely—having
        little or no money in my purse, and nothing particular to interest me on
        shore, I thought I would sail about a little and see the watery part of
        the world. It is a way I have of driving off the spleen and regulating
        the circulation.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        In that pleasant district of merry England which is watered by the river
        Don, there extended in ancient times a large forest, covering the
        greater part of the beautiful hills and valleys which lie between
        Sheffield and the pleasant town of Doncaster. The remains of this
        extensive wood are still to be seen at the noble seats of Wentworth, of
        Warncliffe Park, and around Rotherham. Here haunted of yore the fabulous
        Dragon of Wantley; here were fought many of the most desperate battles
        during the Civil Wars of the Roses; and here also flourished in ancient
        times those bands of gallant outlaws, whose deeds have been rendered so
        popular in English song.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Sing, O goddess, the anger of Achilles son of Peleus, that brought
        countless ills upon the Achaeans. Many a brave soul did it send hurrying
        down to Hades, and many a hero did it yield a prey to dogs and vultures,
        for so were the counsels of Jove fulfilled from the day on which the son
        of Atreus, king of men, and great Achilles, first fell out with one
        another.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(expanded);
  const text = isShowMoreClicked
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      {text}
      <button
        style={buttonStyle}
        onClick={() =>
          setIsShowMoreClicked((isShowMoreClicked) => !isShowMoreClicked)
        }
      >
        {isShowMoreClicked ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default App;
