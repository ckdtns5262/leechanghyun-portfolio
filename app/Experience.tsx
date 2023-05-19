const Experience = () => {
  return (
    <div> 
      <div className="flex flex-col">
        <div className=" lg:ml-96 lg:mr-96">
          <div className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <div className="flex flex-row">
              <div className="w-2/5">
                <h2>Todo List</h2>
                <p className="text-gray-400">2023.03</p>
                <p className="text-gray-400">
                  <a href="https://github.com/ckdtns5262/Next.js-todolist-">
                    (깃허브링크)
                  </a>
                </p>
              </div>
              <div className="w-10 lg:w-28"/>
              <div className="dev-list">
                <ul className="ml-11 list-disc space-y-2">
                  <li>
                    Next.js 13버젼을 활용하여 FullStack 웹개발 진행하였습니다.{" "}
                  </li>
                  <li>
                    Next-Auth를 활용하여 Google,GitHub,Never 등 <br/>Social 로그인
                    구현하였습니다.
                  </li>
                  <li>
                    MongoDB를 사용하여 Next.js에서 DB활용하는 부분
                    학습하였습니다.
                  </li>
                  <li>
                    팀프로젝트가 아닌 처음으로 개인프로젝트를 시작부터 끝까지
                    구현하였습니다.
                  </li>
                  <li className="text-gray-400">
                  <a href="https://next-js-todolist-orpin.vercel.app/">https://next-js-todolist-orpin.vercel.app/</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apple clone */}
      <div className="flex flex-col">
        <div className="lg:ml-96 lg:mr-96">
          <div className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
            <div className="flex flex-row">
              <div className="w-2/5">
                <h2>Apple Clone</h2>
                <p className="text-gray-400">2023.03</p>
                <p className="text-gray-400">
                  <a href="https://github.com/ckdtns5262/Apple">(깃허브링크)</a>
                </p>
              </div>
              <div className="w-4 lg:w-24" />
              <div className="dev-list">
                <ul className="ml-11 list-disc space-y-2">
                  <li>퍼블리싱 능력향상을 위해 애플페이지 클론</li>
                  <li>Tailwind css를 활용하여 제작하였습니다.</li>
                  <li>
                    MongoDB를 사용하여 Next.js에서 DB활용하는 부분
                    학습하였습니다.
                  </li>
                  <li className="text-gray-400">
                    <a href="https://ckdtns5262.github.io/Apple/">
                      https://ckdtns5262.github.io/Apple/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
