import styles from "./Test.module.scss";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { useState } from "react";

export default function Test() {
  const [animationText, setAnimationText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  console.log(submittedText);
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={animationText}
        onChange={(e) => setAnimationText(e.target.value)}
      />
      <button onClick={() => setSubmittedText(animationText)}>Submit</button>
      <SplitText
        text={submittedText}
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
