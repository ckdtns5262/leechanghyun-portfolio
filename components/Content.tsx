import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};
const Content = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      " 프론트엔드 개발자를 희망하고 있습니다.",
      " 항상 클라이언트 시선으로 고민하며 생각하며.",
      "꾸준함의 중요성을 잘 알기에 항상 실천하려고 노력합니다.",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <div
      className="flex justify-center items-center text-center lg:relative"
      id="/"
    >
      <div className="mt-36 space-y-10 font-semibold relative">
        <span className="text-3xl lg:text-5xl">새로움과 노력을 좋아하는</span>
        <br />
        <p className="text-4xl lg:text-8xl">
          이창현<span className="text-3xl lg:text-5xl">입니다.</span>
        </p>
        <div className="flex justify-center items-center">
          <p className="text-1xl lg:text-2xl text-center">
            {text}
            <Cursor
              cursorColor="#c54e7e"
              cursorStyle="|"
              cursorBlinking={true}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
