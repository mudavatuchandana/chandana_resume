import Image from "next/image";
import Marquee from "react-fast-marquee";
import CardWrapper from "@/components/cards/card-wrapper";

const MyTechCard = () => {
  const stack = [
    { name: "Python", icon: "/tech-icons/python.png" },
    { name: "SQL", icon: "/tech-icons/sql.png" },
    // { name: "Scikit-learn", icon: "/tech-icons/scikit-learn.svg" },
    { name: "Pandas", icon: "/tech-icons/panda.png" },
    { name: "NumPy", icon: "/tech-icons/numpy.png" },
    { name: "Flask", icon: "/tech-icons/python.png" },
    // { name: "Generative AI", icon: "/tech-icons/generative-ai.svg" },
    // { name: "Machine Learning", icon: "/tech-icons/machine-learning.svg" },
    { name: "Docker", icon: "/tech-icons/docker.png" },
    { name: "Azure", icon: "/tech-icons/azure.png" },
    { name: "Spark", icon: "/tech-icons/spark.svg" },
    { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
    { name: "Git", icon: "/tech-icons/git.svg" },
    { name: "Jupyter", icon: "/tech-icons/jupyter.svg" },
    { name: "VS Code", icon: "/tech-icons/vscode.svg" },
    { name: "PyCharm", icon: "/tech-icons/pycharm.png" },
    { name: "TensorFlow", icon: "/tech-icons/tensorflow.svg" },
    { name: "Keras", icon: "/tech-icons/keras.svg" },
    { name: "OpenCV", icon: "/tech-icons/opencv.svg" },
    { name: "Django", icon: "/tech-icons/django.svg" },
    { name: "HTML5", icon: "/tech-icons/html5.svg" },
    { name: "CSS3", icon: "/tech-icons/css3.svg" },
    { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    { name: "Java", icon: "/tech-icons/java.svg" },
    { name: "C/C++", icon: "/tech-icons/cpp.svg" },
    { name: "Microsoft Office", icon: "/tech-icons/office.svg" },
    // { name: "MapReduce", icon: "/tech-icons/mapreduce.svg" },
    // { name: "RESTful APIs", icon: "/tech-icons/api.svg" },

    // { name: "LLMs", icon: "/tech-icons/llm.svg" },
    // { name: "Data Visualization", icon: "/tech-icons/data-visualization.svg" },
    // { name: "Figma", icon: "/tech-icons/figma.svg" },
    { name: "Github", icon: "/tech-icons/github.svg" },
    { name: "Jira", icon: "/tech-icons/jira.svg" },
  ];

  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-8 p-8 justify-between">
        <Marquee
          speed={30}
          style={{
            // maskImage:
            //   "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
            margin: "auto",
          }}
        >
          {stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 aspect-square w-[72px] rounded-2xl mx-2 my-0"
              style={{
                background: "#ffffff",
                boxShadow: "0px 0px 12px rgba(0,0,0,0.115)",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              <Image src={tech.icon} alt={tech.name} width={36} height={36} />
            </div>
          ))}
        </Marquee>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            Also has experience
          </h4>
          <h1 className="text-2xl font-medium dark:text-black text-black uppercase opacity-90 ">
            Generative AI, Data Visualization
          </h1>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MyTechCard;
