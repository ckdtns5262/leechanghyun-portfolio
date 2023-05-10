import GrayText from "../GrayText";

const Project2 = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="m-auto lg:ml-96 lg:mr-96">
          <div contentEditable="false" className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <h1 className="text-2xl">💻 Predict Bit(K-Digital 2차 프로젝트)</h1>
            <div className="flex border-2 border-gray-200 h-12 items-center">
              <p className="ml-2">
                💰 비트코인을 대상으로 과거 데이터를 분석하여 방향성을 예측하는
                서비스
              </p>
            </div>

            <div className="flex flex-row">
              <div className="w-2/5">
                <h2>팀프로젝트</h2>
              </div>
              <div className="w-24" />
              <div className="dev-list">
                <ul className="list-disc space-y-2">
                  <li>프론트엔드 1명 / 백엔드 2명 / 데이터분석 1명</li>
                  <li>프론트엔드 개발 담당</li>
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row">
            <div className="w-2/5">
              <h2>프로젝트 결과물</h2>
            </div>
            <div className="w-24" />
            <div className="dev-list">
              <ul className="list-disc space-y-2">
                <li className="text-gray-500">
                  <a href="https://github.com/K-Digital-Coin">
                    https://github.com/K-Digital-Coin
                  </a>
                </li>
                <li className="text-gray-500">
                  <a href="https://catkin-pan-0d8.notion.site/149c55beb012418b924fd3d47fb3ff10">
                    https://www.notion.so/PredictBit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row">
            <div className="w-2/5">
              <h2>활용한 기술스텍</h2>
            </div>
            <div className="w-24" />
            <div className="dev-list">
              <ul className="list-disc space-y-2">
                <li className="space-x-2">
                  <GrayText label="JavaScript" color="purple" />
                  <GrayText label="React" color="purple" />
                  <GrayText label="TailwindCSS" color="purple" />
                </li>
                <li className="space-x-2">
                  <GrayText label="GoogleMap API" color="purple" />
                  <GrayText label="Axios" color="purple" />
                  <GrayText label="Styled-component" color="purple" />
                </li>
                <li className="space-x-2">
                  <GrayText label="Recoil" color="purple" />
                  <GrayText label="Context" color="purple" />
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row">
            <div className="w-2/5">
              <h2>
                프론트엔드
                <br />
                구현한 기능
              </h2>
            </div>
            <div className="w-24" />
            <div className="dev-list">
              <ul className="list-disc space-y-2">
                <li>
                  <GrayText label="Apex Chart" color="purple" />를 활용하여
                  코인차트 구현
                </li>
                <li>유저관련 페이지(회원가입, 로그인, 회원탈퇴)</li>
                <li>
                  <GrayText label="Context" color="purple" />와
                  <GrayText label="Recoil" color="purple" />을 활용한 코인데이터
                  상태관리
                </li>
                <li>예측데이터 받아와 코인시세 예측부분 그래프 구현</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project2;
