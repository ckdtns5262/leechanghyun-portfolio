import GrayText from "../GrayText";

const Project1 = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="m-auto lg:ml-96 lg:mr-96 space-y-2">
          <div className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <h1 className="text-2xl">
              💻 ShipTraffic Live(K-Digital 1차 프로젝트)
            </h1>
            <div className="flex border-2 border-gray-200 h-12 items-center">
              <p className="ml-2">
                🚢 AIS 신호를 활용하여 국내 선박들의 위치 정보를 파악 및 목적지
                도착예정 시각을 예측하여 알려주는 서비스
              </p>
            </div>

            <div className="flex flex-row">
              <div className="w-2/5">
                <h2>팀프로젝트</h2>
              </div>
              <div className="w-24" />
              <div className="dev-list">
                <ul className="list-disc space-y-2">
                  <li>프론트엔드 2명 / 백엔드 2명 / 데이터분석 1명</li>
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
                  <a href="https://github.com/K-Digital-Two">
                    https://github.com/K-Digital-Two
                  </a>
                </li>
                <li className="text-gray-500">
                  <a href="https://catkin-pan-0d8.notion.site/5664475126884a0b9f33bc9121848817">
                    https://www.notion.so/shipTrafficlive
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
              <ul className="list-disc space-y-2 ml-6">
                <li>
                  <GrayText label="GoogleMap API" color="purple" />를 활용하여
                  선박의 위치 표시
                </li>
                <li>Input 창에서 선박명 검색하면 list에 해당하는 선박 찾기</li>
                <li>웹 템플릿(Home, Navbar, Container) 개발</li>
                <li>실시간 서비스 구현위해 도착한 선박의 상태구분</li>
                <li>좌표데이터를 활용해 선박의 이동경로표시 개발</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
