/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // console.log("App");
  const [num, setNum] = useState(0);
  const [face, setFace] = useState("");

  const increment = () => {
    if (num >= 41) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  const decrement = () => {
    if (num <= 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };
  const resetNum = () => setNum(0);
  const switchAhoFaceShowFlg = () => {
    if (face === "(´◓q◔｀)") {
      setFace("( • ̀ω•́ )");
    } else {
      setFace("(´◓q◔｀)");
    }
  };

  const judgeContain3 = () => {
    return num.toString().includes("3");
  };

  useEffect(() => {
    if (num === 0 || num >= 40) {
      setFace("( ◠‿◠ )");
    } else if (num % 3 !== 0 && !judgeContain3()) {
      setFace("( • ̀ω•́ )");
    } else {
      setFace("(´◓q◔｀)");
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
