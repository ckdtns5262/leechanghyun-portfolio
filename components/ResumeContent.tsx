import React from "react";
import Skill from "./Skill";
import ProjectContent from "./project/ProjectContent";
import Experience from "@/app/Experience";


const ResumeContent = () => {
  return (
    <div className="">
      <h1 className="mt-8 text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96">
        Introduce
      </h1>
      <div className="flex flex-col">
        <div className="m-auto lg:ml-96 lg:mr-96">
          <div className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <p>끊임없이 고민하며 성장하는 개발자 이창현입니다.</p>
            <p>
              저는 책임감이 강하며 문제를 파악하고 해결하기 위해 노력합니다.
            </p>
            <p>
              지속적인 학습과 발전을 추구하여 새로운 트렌드에 맞춰 나아가려합니다.
            </p>
            <p>
              다양한 학습 환경을 만드는 것을 좋아하며 성장하는 습관을 만들어
              가고 있습니다
            </p>
            <p>
              사람들과 함께 학습하며 성장하기 위해 지난 6개월간 개발교육
              프로그램에 참여하여 동료들과 학습을 공유하고 함께 프로젝트를 진행하며
              개발역량을 쌓아왔습니다.
            </p>
            <p>
              오늘에 만족하지 않고 더 나은 내일을 위해 항상 스스로를 계발하는 개발자가 되고 싶습니다.
            </p>

            <hr></hr>
          </div>
        </div>
      </div>
      <span className="h-6" />

      {/* Dev Experience */}
      <div>
        <h1 className="mt-8 text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96">
          Dev Experience
        </h1>
        <div className="flex flex-col">
          <div className="lg:ml-96 lg:mr-96">
            <div className="space-y-4 mt-4">
              <hr className="border border-black mb-8"></hr>
              <div className="flex flex-row">
                <div className="w-2/5">
                  <h2>K-Digital 풀스텍 웹서비스 SW <br/>개발자 과정</h2>
                  <p className="text-gray-400">2022.09 ~ 2023.03</p>
                </div>
                <div className="w-6 lg:w-24"/>
                <div className="dev-list">
                  <ul className="ml-11 list-disc space-y-2">
                    <li>HTML,CSS,JavaScript를 학습하고 활용하였습니다.</li>
                    <li>
                      React와 관련된 훅, 라이브러리들을 학습하고 프로젝트를
                      진행하였습니다.
                    </li>
                    <li>
                      DB에 대한 개념을 MySQL을 이용하여 확립하고 학습하였습니다.
                    </li>
                    <li>
                      R을 활용한 데이터 처리에 대한 개념확립하였고
                      학습하였습니다.
                    </li>
                    <li>Java,Spring을 학습하여 백엔드개발 학습하였습니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience */}
      <Experience/>
      {/*Project */}
      <ProjectContent/>
      <Skill/>
      </div>

  );
};

export default ResumeContent;
