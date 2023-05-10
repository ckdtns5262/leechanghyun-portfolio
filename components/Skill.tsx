import GrayText from "./GrayText";

const Skill = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96">
        Skill
      </h1>
      <div className="flex flex-col">
        <div className="m-auto lg:ml-96 lg:mr-96">
          <div contentEditable="false" className="space-y-4 mt-4">
            <hr className="border border-black mb-8"></hr>
          </div>
          <ul className="space-y-2">
            <li className="space-x-2">
              <GrayText label="JavaScript" color="purple" />
              <GrayText label="TypeScript" color="purple" />
              <GrayText label="React" color="purple" />
            </li>
            <li className="space-x-2">
              <GrayText label="HTML" color="blue" />
              <GrayText label="CSS" color="blue" />
              <GrayText label="TailwindCSS" color="blue" />
              <GrayText label="Styled-component" color="blue" />
            </li>
            <li className="space-x-2">
              <GrayText label="NodeJS" color="green" />
              <GrayText label="Express" color="green" />
              <GrayText label="MongoDB" color="green" />
              <GrayText label="MySQL" color="green" />
            </li>
            <li className="space-x-2">
              <GrayText label="Git" color="yellow" />
              <GrayText label="GitHub" color="yellow" />
              <GrayText label="Miro" color="yellow" />
              <GrayText label="Figma" color="yellow" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Skill;
