/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compornents/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  //第一引数はstateとして使用する変数名、第2引数はそのstateを更新するための関数
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1); //この中でnumに設定したい値の処理を行う
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]); //第2引数に配列がもてる
  //中で使っている変数を書いてあげないとエラー出る

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <ColorfulMessage color={"blue"} message={"お元気ですか?"} />
      <ColorfulMessage color={"pink"} message={"元気です"} /> */}
      <ColorfulMessage color={"blue"}>お元気ですか？</ColorfulMessage>
      <ColorfulMessage color={"pink"}>元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};
