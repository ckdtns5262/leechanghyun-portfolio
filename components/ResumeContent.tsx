import React from "react";
import Skill from "./Skill";
import ProjectContent from "./project/ProjectContent";


const ResumeContent = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96">
        Introduce
      </h1>
      <div className="flex flex-col">
        <div className="m-auto lg:ml-96 lg:mr-96">
          <div contentEditable="false" className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <p>학습에서 즐거움을 찾는 개발자 이창현입니다.</p>
            <p>
              사람들과 함꼐 학습하며 성장하자 라는 모토를 갖고 웹 개발과 관련된
              다양한 분야를 학습 중입니다
            </p>
            <p>
              다양한 학습 환경을 만드는 것을 좋아하며 성장하는 습관을 만들어
              가고 있습니다
            </p>
            <p>
              사람들과 함께 학습하며 성장하기 위해 지난 1년간 개발교육
              프로그램에 참여하여 동료들과 학습을 공유하
            </p>
            <p>고 함께 프로젝트를 진행하며 개발역량을 쌓아왔습니다</p>
            <p>dfdafdfasdf</p>
            <p>asdfasdfsdfsdf</p>
            <p>asdfasdfasdfasd</p>
            <hr></hr>
          </div>
        </div>
      </div>
      <span className="h-6" />

      {/* Dev Experience */}
      <div>
        <h1 className="text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96">
          Dev Experience
        </h1>
        <div className="flex flex-col">
          <div className="m-auto lg:ml-96 lg:mr-96">
            <div contentEditable="false" className="space-y-4 mt-4">
              <hr className="border border-black mb-8"></hr>
              <div className="flex flex-row">
                <div className="w-2/5">
                  <h2>K-Digital 풀스텍 웹서비스 SW 개발자 과정</h2>
                  <p className="text-gray-400">2022.09 ~ 2023.03</p>
                </div>
                <div className="w-24" />
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
      {/*Project */}
      <ProjectContent/>
      <Skill/>
      </>

  );
};

export default ResumeContent;
