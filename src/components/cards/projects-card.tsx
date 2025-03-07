import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";

// Define the type for the project object
type Project = {
  title: string;
  date: string;
  details: string[];
  techStack: string;
};

const projectsData: Project[] = [
  {
    title:
      "Network Intrusion Detection System using Multi Model Decision Trees and Phishing Detection using ML",
    date: "Aug 2023 - Dec 2023",
    details: [
      "Developed an IDS using Decision Tree Classifier with 99% accuracy on the NSL-KDD dataset, enhancing cyber-attack detection.",
      "Reduced false positives in cyber-attack detection, improving system reliability and efficiency.",
      "Addressed phishing threats by implementing Logistic Regression and Multinomial Naive Bayes for URL analysis, boosting user protection and cybersecurity.",
    ],
    techStack:
      "Python, Pandas, NumPy, Machine Learning Algorithms, API Deployment, Data Visualization",
  },
  {
    title:
      "Twitter Analysis Using MapReduce and comparison with Serial Execution",
    date: "Jan 2023 - Apr 2023",
    details: [
      "Leveraged MapReduce for parallel processing to efficiently analyze and cluster health-related tweets, improving big data handling.",
      "Implemented document clustering using Term Frequency tables and optimized performance through comparison with serial execution.",
      "Created a visualization dashboard to present the analysis results, enabling stakeholders to easily interpret trends and insights from the clustered data.",
    ],
    techStack:
      "Python, MapReduce, Apache Spark, RESTful APIs, Pandas, Scikit-learn",
  },
  {
    title:
      "Medical Application for Leukemia Patients using Deep Learning and Steganography",
    date: "Jan 2023 - Apr 2023",
    details: [
      "Created a web-based medical application using deep learning and steganography for leukemia diagnosis.",
      "Developed a model for classifying leukemia from blood cell images, concealing prediction probabilities through steganography for doctor decryption.",
      "Established user authentication and data security measures to protect sensitive patient information, ensuring compliance with medical data privacy standards.",
    ],
    techStack:
      "Python, Django, HTML, CSS, TensorFlow, Keras, Pandas, NumPy, OpenCV",
  },
];

const ProjectItem = ({ project }: { project: Project }) => {
  const { title, date, details, techStack } = project;

  return (
    <div className="flex flex-col gap-3 py-4">
      {/* Project Title and Date */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-medium dark:text-black text-black opacity-90">
          {title}
        </h1>
        <h5 className="text-xs md:text-sm font-medium dark:text-black text-black opacity-65">
          {date}
        </h5>
      </div>

      {/* Project Details */}
      <ul className="list-disc list-inside text-sm md:text-md dark:text-black text-black opacity-80 space-y-2">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      {/* Technical Stack */}
      <div className="text-sm md:text-md font-medium dark:text-black text-black opacity-90">
        <strong>Technical Stack:</strong> {techStack}
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        {/* Section Title */}
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            Academic Projects
          </h4>
          <h1 className="text-2xl font-medium dark:text-black text-black uppercase opacity-90">
            Experience
          </h1>
        </div>

        {/* Projects List */}
        <div className="flex flex-col relative z-10 lg:justify-around">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
