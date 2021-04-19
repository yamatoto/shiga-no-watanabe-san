/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const AHO_FACE = "(´◓q◔｀)";
const COUNT_FACE = "( • ̀ω•́ )";
const START_END_FACE = "( ◠‿◠ )";

const App = () => {
  // console.log("App");
  const [num, setNum] = useState(0);
  const [face, setFace] = useState("");

  const increment = () => (num >= 41 ? setNum(0) : setNum(num + 1));
  const decrement = () => (num <= 0 ? setNum(0) : setNum(num - 1));
  const resetNum = () => setNum(0);
  const switchAhoFaceShowFlg = () =>
    face === AHO_FACE ? setFace(COUNT_FACE) : setFace(AHO_FACE);
  const judgeContain3 = () => num.toString().includes("3");

  useEffect(() => {
    if (num === 0 || num >= 40) {
      setFace(START_END_FACE);
    } else if (num % 3 !== 0 && !judgeContain3()) {
      setFace(COUNT_FACE);
    } else {
      setFace(AHO_FACE);
    }
  }, [num]);

  return (
    <>
      <h1>滋賀の渡辺さん</h1>
      <ColorfulMessage color="red">
        <span>===============================</span>
      </ColorfulMessage>
      <div style={{ marginBottom: "8px" }}>
        <button
          disabled={num >= 41}
          style={{
            padding: "6px 10px",
            borderRadius: "50%",
            border: "none",
            marginRight: "4px"
          }}
          onClick={increment}
        >
          ＋
        </button>
        <button
          disabled={num <= 0}
          style={{
            padding: "6px 10px",
            borderRadius: "50%",
            border: "none",
            marginRight: "20px"
          }}
          onClick={decrement}
        >
          ー
        </button>
        <button
          style={{ width: "100px", height: "30px", marginRight: "5px" }}
          onClick={resetNum}
        >
          リセット
        </button>
        <button
          style={{ width: "100px", height: "30px", marginBottom: "8px" }}
          onClick={switchAhoFaceShowFlg}
        >
          on/off アホ
        </button>
      </div>
      <div>
        {num <= 41 && face}
        {num !== 0 && num < 40 && (
          <span style={{ marginRight: "12px" }}>＜{num}</span>
        )}
        {num === 41 && <span>＜オモロー！！</span>}
      </div>
    </>
  );
};

export default App;
