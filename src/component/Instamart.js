import { useState } from "react";

const Section = ({ heading, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="inline mr-2">{heading}</h1>
      {isVisible ? (
        <div>
          <button
            onClick={() => setIsVisible(null)}
            className="border rounded bg-slate-200 inline"
          >
            Hide
          </button>
          <p>{desc}</p>
        </div>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="border rounded bg-slate-200"
        >
          Show
        </button>
      )}

      {/* {isVisible && } */}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        isVisible={visibleSection === "about"}
        heading={"About"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setIsVisible={(about = "about") => {
          setVisibleSection(about);
        }}
      />
      <Section
        isVisible={visibleSection === "team"}
        heading={"Team"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setIsVisible={(team = "team") => setVisibleSection(team)}
      />
      <Section
        isVisible={visibleSection === "career"}
        heading={"career"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        setIsVisible={(career = "career") => setVisibleSection(career)}
      />
    </>
  );
};
export default Instamart;
