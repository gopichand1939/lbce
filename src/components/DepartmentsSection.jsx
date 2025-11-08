import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Target, 
  BookOpen, 
  Award, 
  Building2,
  X,
  ChevronRight,
  FileText,
  FlaskConical
} from 'lucide-react';

const DepartmentsSection = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const departments = [
    {
      id: 'cse',
      name: 'COMPUTER SCIENCE ENGINEERING',
      shortName: 'CSE',
      icon: GraduationCap,
    },
    {
      id: 'ece',
      name: 'ELECTRONICS & COMMUNICATION ENGINEERING',
      shortName: 'ECE',
      icon: Award,
    },
    {
      id: 'eee',
      name: 'ELECTRICAL & ELECTRONIC ENGINEERING',
      shortName: 'EEE',
      icon: FlaskConical,
    },
    {
      id: 'civil',
      name: 'CIVIL ENGINEERING',
      shortName: 'CE',
      icon: Building2,
    },
    {
      id: 'bsh',
      name: 'BASIC SCIENCES & HUMANITIES',
      shortName: 'BSH',
      icon: BookOpen,
    },
  ];

  const departmentData = {
    cse: {
      profile: `The department of computer science and engineering was started in the year 2010 with the aim of equipping the students sufficiently with the required theoretical foundation and practical skills needed to make them active participants in the highly rewarding field of Computer Science and Information Technology. State-of-the-art infrastructure combined with a team of highly qualified and committed teachers who strive unceasingly to enable students achieve their goals characterize the academic environment. In accordance with the vision of the institution which aims to use education as a tool to create value added citizens, the department provides adequate opportunities for students to acquire knowledge from various sources such as Massively Online Open Courseware, NDL lectures from IITs in addition to the regular classroom teaching. The department which has a student branch of Computer Society of India conducts regular technical events such as workshops and seminars that bring awareness among the students regarding the latest trends and developments in the ever changing IT field.

Most importantly the department facilitates the conduct of training classes to the students in domain skills and soft skills in association with the Skill Development Centre of the college which immensely helps the students in fine tuning their skills in performing well in various placement drives conducted in the college campus or elsewhere. The department takes pride in empowering the hard working community of students and strongly reiterates its commitment to ensuring that each student who gains admission realizes her true potential and gains the needed technical and life skills needed to a successful life and career after graduation.`,
      vision: `To instill a spirit of technical excellence and inquiry by which students are motivated to enhance their Skills, Research aptitude and Ethical values meeting ever evolving challenges in Computer Science Engineering, to create computational solutions for a sustainable society`,
      mission: [
        `To build core competencies in the students utilizing Student-centric methods and Value-added programs for curriculum delivery and knowledge up gradation with moral values which match industry requirements.`,
        `To guide, monitor and mentor students to self-evolve towards successful careers in IT industry or higher education.`,
        `To foster Leadership through research, innovation, entrepreneurship and encourage lifelong learning among students.`,
        `To build a culture of ethical responsibility, Social Awareness and Environmental Sustainability that contributes to National Development.`,
      ],
      hod: {
        name: 'Prof. D.MADHAVI',
        designation: 'Professor & HOD',
        qualification: 'M.Tech., Ph.D, LMCSI',
        image: 'https://lbce.edu.in/media/jrcolleg/faculty/principal_3.jpg',
        bio: `Dr D.Madhavi has completed M.Tech (CST) from Dept. of CSSE, College of Engineering, Andhra University, Visakhapatnam India in 2001. She completed Ph.D from Acharya Nagarjuna University in September 2011. She has been working as faculty member in different Engineering colleges of Andhra Pradesh in different capacities since 1998. She was awarded "Best Teacher Award" by JNTUK. Currently she is working as a Professor of CSE Department, BOS member, Dept of CSSE, AUCOE(A), Staff Nominee-Governing Body, ICC Convenor, Dr Lankapalli Bullayya College of Engineering, Visakhapatnam, Andhra Pradesh state, India. She is acting as SPOC for NPTEL local chapter. She is recognized as Research supervisor-TDR-Hub Andhra University and guiding Research scholars. One of her Ph.D scholars was awarded Ph.D successfully in 2022. Her fields of interest are Human computer Interface, Automated Reasoning, Artificial Intelligence, Machine Learning, Software Engineering.`,
        email: 'dmadhavi@lbce.edu.in',
      },
      teachingFaculty: [
        { name: 'Prof. D.MADHAVI', designation: 'Professor & HOD', qualification: 'M.Tech., Ph.D, LMCSI', resume: '' },
      { name: 'Prof. D. Raja Kishor', designation: 'Professor', qualification: 'M.Tech., Ph.D', resume: '' },
      { name: 'Mr. Syed Mujib Rahaman', designation: 'Associate Professor', qualification: 'M.Tech (IT), MCA, MBA(HR), M.Phil(CS)(Ph.D.)', resume: '' },
      { name: 'Dr. G.Vamsi Krishna', designation: 'Associate Professor & Assistant HOD', qualification: 'B.Tech., M.Tech., Ph.D', resume: '' },
      { name: 'Mr. Md. Farhatullah', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Dr. K. Anuradha', designation: 'Assistant Professor', qualification: 'AMIE(CS),M.Tech,Ph.D(Stat),(Ph.D-CSE)', resume: '' },
      { name: 'Mrs. P. RajyaLakshmi', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech, (Ph.D)', resume: '' },
      { name: 'Mrs. G. Kavya', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech., (Ph.D)', resume: '' },
      { name: 'Mrs. T. Aruna', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech., (Ph.D)', resume: '' },
      { name: 'Mr.B.SANTOS KUMAR', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech., (Ph.D)', resume: '' },
      { name: 'Mrs. V. Sarada', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Mrs.G.Sandhya', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Ms. S. Sravani', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Ms. NAF. Namratha', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Ms. K. Jaya Naga Ramya', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Ms. G. Lakshmi Yasaswini', designation: 'Assistant Professor', qualification: 'B.Tech., M.Tech', resume: '' },
      { name: 'Ms. Y. Sree Chithra', designation: 'Teaching Assistant', qualification: 'B.Tech., (M.Tech)', resume: '' },
      { name: 'Ms. Mary Immaculata Twinkle', designation: 'Teaching Assistant', qualification: 'B.Tech., (M.Tech)', resume: '' },
    ],
    nonTeachingStaff: [
      { name: 'Mr. B. APPALANARASAYA', designation: 'System Administrator' },
      { name: 'Mr. B. BHASKARA RAO', designation: 'Lab Assistant' },
      { name: 'Mr. D. SUDHAKARA RAO', designation: 'Programmer' },
    ],
    peos: [
      `Explore available opportunities in the field of Computer Science Engineering, identify potential strengths in the domain area of their choice, and undergo training and refinement essential to achieve the goals of gainful employment or higher education by providing sustainable solutions which match societal expectations.`,
      `Commit themselves to a path of lifelong learning and self-discovery by utilizing the time, space, opportunity for interaction and knowledge exchange provided by the college environment.`,
      `Imbibe, inculcate and refine the skills necessary for ethically managing their self and the team in a collaborative setup.`,
    ],
    pso: [
      `To be able to apply fundamental concepts, design patterns, and implementation practices of various algorithms used in Software Design and Development.`,
      `To be able to create sustainable solutions to complex computational problems for individual and societal benefit and demonstrate the same experimentally.`,
    ],
    pos: [
      { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
      { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
      { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
      { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
      { id: 'PO5', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice' },
      { id: 'PO6', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.' },
      { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
      { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
      { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
      { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
      { id: 'PO11', title: 'Project management and finance', desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
    ],
      professionalBodies: ['CSI (Computer Society of India)'],
      labImages: [
        'https://lbce.edu.in/media/lab/lab1_1.png',
        'https://lbce.edu.in/media/lab/lab2_2.jpg',
        'https://lbce.edu.in/media/lab/image_1.png',
        'https://lbce.edu.in/media/lab/PHOTO-2024-06-12-13-26-21_F2oI93X.jpg',
        'https://lbce.edu.in/media/lab/PHOTO-2024-06-12-13-43-35_w37NLCh.jpg',
        'https://lbce.edu.in/media/lab/PHOTO-2024-06-12-13-49-39_sBwF2kx.jpg',
      ],
    },
    ece: {
      profile: `The Department of Electronics and Communication Engineering was established simultaneously with the genesis of the Dr. Lankapalli Bulllaya College of Engineering in 2010 with an annual intake of 120 students. The department offers an undergraduate course of four-year duration in Electronics & Communication Engineering. The proficient faculty members in the department impart High Quality Technical Education to inquisitive students of technical education. Each faculty member is actively involved in research work in his/her respective fields of specialization.

The laboratories are well equipped with modern facilities that cater to the requirements of the university syllabus. They are useful for conducting experiments in Basic & Advanced Electronics. The department encourages the budding engineers to undertake several Projects and gain practical knowledge. The goal of the department is to inculcate students with strong foundation in Analytical and Technical Skills. An incubation centre has been setup with four wings (Electronics, Antennas, Signal Processing and Communication Systems) to encourage the students and develop their creative abilities in the field. And it also motivates them to undertake Mini Projects for making them employable to become prolific technocrats in industry.

The department has active interaction with reputed Technical Education institutes. It also endeavors to create Promising Electronic and Communication Engineers who can fulfill the perennial needs of our modern society and become instrumental in strengthening the economy of our nation. The faculty members are actively involved in research in the areas such as Mobile Communications, Digital Communications, Antennas, Phased Array Radars, Signal processing & high frequency communications, Fiber optic Communications, Instrumentation, VLSI and Microprocessors. In order to improve and update their technical knowledge, the students are encouraged to associate themselves with other Professional Technical Associations and Societies. It also suggests them take part in several Technical Events, Competitions, Seminars and Quizzes.

Alongside the curricular activities, students are motivated to take part in various co-curricular and extra-curricular activities. The mentors in our Skill Development Centre mold their personalities with Soft Skills Training. The department also provides proper guidance to the students to take up Graduate Aptitude Test for Engineers (GATE) and Graduate Record Examination (GRE) during their final year study. The department aims at 100% employability and campus placement for all eligible candidates. Every year our students secure placements in top companies like TCS, AMAZON, TECH MAHINDRA, MEDHA SERVO etc.`,
      vision: `To initiate, cultivate and contribute to the development of the society by empowering students by making them self-explore with latest tools and techniques in the field of Electronics and Communication Engineering.`,
      mission: [
        `Strengthen the basics and impart the ethical and technical skills blended to the current trends in the field of Electronics and Communication Engineering.`,
        `Impress propensity to research and involvement in industrial work environment.`,
        `Inculcate teamwork, lifelong learning and technical properties to meet the expectations of industry and at large the society.`,
      ],
      hod: {
        name: 'Dr. J. BABU',
        designation: 'Professor & HOD',
        qualification: 'B.Tech, M.Tech, PhD',
        image: 'https://pbs.twimg.com/profile_images/849666887415873537/YjJbHHPh_400x400.jpg',
        bio: `Dr J.BABU has completed B.Tech ECE from JNTU College of Engineering, Anantapur in 1996 and M.Tech from Cochin University of Science and Technology, Cochin, Kerala state in 1998. He has completed Ph.D from Andhra University, Visakhapatnam in February 2013. He has been working as faculty member in different Engineering colleges of Andhra Pradesh in different capacities since July 1999. Currently he is working as a Professor and HOD of ECE Department, Dr Lankapalli Bullayya College of Engineering, Visakhapatnam, Andhra Pradesh state, India. His fields of interest are Antennas, Microwaves, Radar, RF ICs, Signal Processing.`,
        email: 'ecehod@lbce.edu.in',
      },
      teachingFaculty: [
        { name: 'Dr. J. BABU', designation: 'Professor & HOD', qualification: 'B.Tech, M.Tech, PhD', resume: '' },
        { name: 'Dr. K.V. RAMANA RAO', designation: 'Associate Professor & Assistant HOD', qualification: 'B.E, M.Tech, PhD', resume: '' },
        { name: 'M. SRAVANI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech, (PhD)', resume: '' },
        { name: 'K. LALITHA', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech, (PhD)', resume: '' },
        { name: 'R. SANTOSH SAI', designation: 'Assistant Professor', qualification: 'B.E, M.Tech, (PhD)', resume: '' },
        { name: 'K. RAJESH KUMAR', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech, (PhD)', resume: '' },
        { name: 'K.V. JAYALAKSHMI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech, (PhD)', resume: '' },
        { name: 'N. SAILAKSHMI', designation: 'Assistant Professor', qualification: 'B.E, M.Tech, (PhD)', resume: '' },
        { name: 'RAZIA BEGUM', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'R. SHARON FRAGRANCE', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'V. YOJANA RUPA KALPANA', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'M. SHILPA RAJ', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech, M.Sc', resume: '' },
        { name: 'P. SAHITYA KIRAN', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'B. SANGEETH KUMAR', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'S. SRAVANI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'O. U CH S BHAGYASRI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'KUNA DHILLI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'Y. MANASA', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
        { name: 'A. VIJAYA SRI', designation: 'Assistant Professor', qualification: 'B.Tech, M.Tech', resume: '' },
      ],
      nonTeachingStaff: [
        { name: 'Mrs. P. LAKSHMI DEVI', designation: 'lab Technician' },
        { name: 'Mr. P. UMA MAHESHWAR RAO', designation: 'lab Technician' },
        { name: 'Mrs. B. UMA MAHESWARI', designation: 'lab Technician' },
      ],
      peos: [
        `Impart analytic and thinking skills to solve problems using fundamentals of mathematics in EC engineering.`,
        `Provide useful practical foundation of ECE to enable students to design, develop, and evaluate ECE.`,
        `Inculcate qualities of teamwork, good social, interpersonal, and leadership skills.`,
        `Collaborate in designing, planning, and implementing solutions for practical problems and facilitate networking with national research and industrial organizations.`,
      ],
      pso: [
        `Apply engineering principles to analyze and design applications that solve problems related to communications and Signal Processing. (Problem Solving Skills)`,
        `Use advanced tools to design, simulate, and evaluate problems in Embedded Systems. (Professional Career)`,
      ],
      pos: [
        { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems' },
        { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
        { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: 'PO5', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations' },
        { id: 'PO6', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice' },
        { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: 'PO11', title: 'Project management and finance', desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
      ],
      professionalBodies: [
        'IETE (INSTITUTE OF ELECTRONICS AND TELECOMMUNICATION ENGINEERS)-STUDENT FORUM - Established in January 2020 with total number of 139 students.',
        'IEEE Student Branch - The department of ECE having initiated IEEE student branch in the year 2023.',
      ],
      labImages: [
        'https://lbce.edu.in/media/lab/MPMC_LAB.JPG',
        'https://lbce.edu.in/media/lab/AC_LAB.JPG',
        'https://lbce.edu.in/media/lab/MWE_LAB.jpg',
        'https://lbce.edu.in/media/lab/DC_LAB.JPG',
        'https://lbce.edu.in/media/lab/dsp_LAB.JPG',
        'https://lbce.edu.in/media/lab/EDC_LAB.JPG',
        'https://lbce.edu.in/media/lab/LICA_LAB_jN1xeBW.JPG',
      ],
    },
    civil: {
      profile: `Department of Civil Engineering, Dr. Lankapalli Bullayya College of Engineering, was established in 2010 and can accommodate up to 60 students. The institute is situated in the city's core. The department offers a four-year program leading to a bachelor's degree in civil engineering. Civil Engineering is considered one of the most flexible branches among all the engineering branches.

Civil Engineering deals with the design, construction, and maintenance of the physical and naturally built environment and focuses on the infrastructure of the world, which includes structural components of buildings, waterworks, dams, railways, highways, bridges, tunnels, irrigation canals, airport runways, industrial plant buildings, skyscrapers, etc. Among these, there are subdivisions in this field like structural engineering, environmental engineering, construction engineering, transportation engineering, soils and foundation engineering, hydraulic engineering, and remote sensing & GIS.

The advanced academic structure of the Department of Civil Engineering includes essential courses and a wide range of electives aimed at enhancing students' expertise in core and related fields. The department has established several laboratories to provide students with an improved learning atmosphere. The Civil Department is well-equipped with spacious laboratories and experienced technicians. Apart from academics, the students indulge in laboratory experiments with various project works. Students are also imparted training on various value-added courses like AutoCAD, STAAD, Total Station Surveying, Tekla, Revit, and Sketch-up technologies. A refreshing phase of learning is provided by the department's periodic industry trips and seminars.

The department has a mix of both experienced and young faculty. The majority of the faculty members have completed their Ph.D., while the remaining faculty are actively involved in improving their educational qualifications and research works. Faculty and students are encouraged to attend and participate in various seminars, workshops, and training programs conducted by reputed organizations to enhance their knowledge.`,
      vision: `To become excellence in the field of civil engineering by providing quality education and promote high-end research to serve the public consistently with competitive spirit and professional ethics.`,
      mission: [
        `Provide quality knowledge and advance skills to the students in order to expertise theoretically and practically in the areas of civil engineering.`,
        `Inculcate healthy competitive spirit towards the higher education and successful career in the field of civil engineering to serve the nation ethically.`,
        `Provide students and faculty with opportunities to create, and apply knowledge by maintaining a state-of-the-art research.`,
        `Improve the professional potentiality of the students and staff through educational programs to expand the knowledge in the field of civil engineering.`,
      ],
      hod: {
        name: 'Dr.G.TIRUPATHI NAIDU',
        designation: 'Professor & HOD',
        qualification: 'B.E, M. Tech, Ph.D. FIE, MISTE',
        image: 'https://lbce.edu.in/media/jrcolleg/faculty/Civil_HOD_owYt6xQ.PNG',
        bio: `Dr.G.TIRUPATHI NAIDU is a distinguished Professor and Head of the Department of Civil Engineering at Dr. Lankapalli Bullayya College of Engineering. With extensive qualifications including B.E, M. Tech, and Ph.D., he is a Fellow of the Institution of Engineers (FIE) and a member of the Indian Society for Technical Education (MISTE). His leadership and expertise contribute significantly to the department's academic excellence and research initiatives.`,
        email: 'principal@lbce.edu.in',
      },
      teachingFaculty: [
        { name: 'Dr.G.TIRUPATHI NAIDU', designation: 'Professor & HOD', qualification: 'B.E, M. Tech, Ph.D. FIE, MISTE', resume: '' },
        { name: 'Dr. ARUNIMA MAHAPATRA', designation: 'Sr. Assistant Professor', qualification: 'B.E, M. Tech, Ph.D. MISH, MISG, MIE, MISTE', resume: '' },
        { name: 'Dr. M. AMARESWARI REDDY', designation: 'Sr. Assistant Professor', qualification: 'B.E, M.E, Ph.D. AMIE, MIAENG, MIRED, MISTE', resume: '' },
        { name: 'Mrs. M.HIMANGESWARI', designation: 'Assistant Professor', qualification: 'B.E, M. E', resume: '' },
        { name: 'Mrs. P.SRIDEVI', designation: 'Assistant Professor', qualification: 'B.E, M. Tech(CSE), M. Tech (Civil)', resume: '' },
        { name: 'Ms. D V VARA MANASA', designation: 'Assistant Professor', qualification: 'B. Tech, M. Tech', resume: '' },
        { name: 'Mr. G.GIRIDHAR', designation: 'Assistant Professor', qualification: 'B.E, M.E (Ph.D.)', resume: '' },
        { name: 'Mrs. B. RAMYA', designation: 'Assistant Professor', qualification: 'B. Tech, M. E', resume: '' },
        { name: 'Mr.D.V.V SATYANARAYANA MURTY', designation: 'Assistant Professor', qualification: 'B. Tech, M. Tech', resume: '' },
      ],
      nonTeachingStaff: [
        { name: 'Mr. P.V. PRASADA REDDY', designation: 'lab Technician' },
        { name: 'Mr. I. GURU MURTHY', designation: 'lab Technician' },
      ],
      peos: [
        `To possess the knowledge to employ as a practicing civil engineer in construction, design, testing, and allied fields.`,
        `Engage in self-directed learning to undertake higher studies and research in the rapidly changing civil engineering environment.`,
        `Create new methods/processes to meet the needs of society with their civil engineering knowledge.`,
        `Develop themselves as ethical and responsible professionals with good communication skills and demonstrate leadership abilities.`,
      ],
      pso: [
        `To be able to use concepts of Civil Engineering to perform Geotechnical Investigation, Survey and subsequent analysis, design, estimation, and execution of Civil Engineering Structures.`,
        `To be able to apply Civil Engineering concepts to the Environment, Water Resources, and Transportation Systems.`,
        `To use modern software tools for the analysis and design of Civil Engineering Structures as well as Geomatic applications including Hydraulics and Remote Sensing.`,
      ],
      pos: [
        { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.' },
        { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: 'PO5', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.' },
        { id: 'PO6', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.' },
        { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: 'PO11', title: 'Project management and finance', desc: "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
      ],
      professionalBodies: ['FSAI (Fire and Safety Association of India)'],
      labImages: [
        'https://lbce.edu.in/media/lab/DigitalVibratingMachine_1.jpg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_10.50.17_AM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_10.59.09_AM.jpeg',
        'https://lbce.edu.in/media/lab/UniversalTestingMachine.jpg',
        'https://lbce.edu.in/media/lab/ImpactTestingMachine.jpg',
        'https://lbce.edu.in/media/lab/HardnessTestingMachine.jpg',
        'https://lbce.edu.in/media/lab/lab1_2_8vMN3T0.jpg',
        'https://lbce.edu.in/media/lab/TransitTheodolite.jpg',
        'https://lbce.edu.in/media/lab/surveylab1.jpg',
        'https://lbce.edu.in/media/lab/surveylab2.jpg',
        'https://lbce.edu.in/media/lab/Dumpylevel.jpg',
        'https://lbce.edu.in/media/lab/TotalStation.jpg',
        'https://lbce.edu.in/media/lab/TriaxialTestApparatus_1.jpg',
        'https://lbce.edu.in/media/lab/Hydrometer.jpg',
        'https://lbce.edu.in/media/lab/GeoTechLab1.jpg',
        'https://lbce.edu.in/media/lab/UnconfinedCompressionTester.jpg',
        'https://lbce.edu.in/media/lab/DirectShearApparatus.jpg',
        'https://lbce.edu.in/media/lab/Notches.jpg',
        'https://lbce.edu.in/media/lab/pipeFractionAndLosses.jpg',
        'https://lbce.edu.in/media/lab/FMlab1.jpg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_12.25.08_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_12.25.08_PM_1.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_12.25.07_PM_1.jpeg',
        'https://lbce.edu.in/media/lab/MarshallApparatus_Po7CJRe.jpg',
        'https://lbce.edu.in/media/lab/LosAngelsAbrasionMachine.jpg',
        'https://lbce.edu.in/media/lab/RingBallTestApparuts.jpg',
        'https://lbce.edu.in/media/lab/Digitalspectrophotometer.jpg',
        'https://lbce.edu.in/media/lab/DigitalNepheloTurbidymeter.jpg',
        'https://lbce.edu.in/media/lab/EElab1.jpg',
        'https://lbce.edu.in/media/lab/MuffleFurnace.jpg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_10.59.30_AM.jpeg',
        'https://lbce.edu.in/media/lab/ComputerLab1.jpg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_3.36.15_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_3.36.15_PM_1.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_3.36.41_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_3.36.42_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_3.36.42_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_3.39.25_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_3.40.05_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_3.40.32_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-31_at_3.40.32_PM.jpeg',
      ],
    },
    eee: {
      profile: `The Department of Electrical & Electronics Engineering was established in 2010-2011. The department offers a four year degree program. Admission process is through state-wide entrance examination i.e EAMCET. The department is resourceful in terms of infrastructure and state-of-the-art facilities to pursue academic education and research in niche areas of technology. Liberal funding from the college management has enabled the Department to acquire specialized research facilities. The highly qualified and experienced faculty in adequate strength with zero attrition rates is one of the most significant features of the department. Electrical & Electronics Engineering is an enlightening branch which requires overall peripheral knowledge about all other branches and in-depth knowledge of Electrical & Electronics Engineering.

The Department of Electrical & Electronics Engineering was established in 2010-2011. The department is resourceful in terms of infrastructure and state-of-the-art facilities to pursue academic education and research in niche areas of technology. The highly qualified and experienced faculty in adequate strength with zero attrition rates is one of the most significant features of the department. Electrical & Electronics Engineering is an enlightening branch which requires overall peripheral knowledge about all other branches and in-depth knowledge of Electrical & Electronics Engineering.`,
      vision: `To become a pacesetter in bringing out globally competent electrical and electronics engineers, innovators, researchers and thereby contribute the value to the knowledge-based economy and society.`,
      mission: [
        `To offer good quality Under-Graduate in Electrical and Electronics Engineering.`,
        `To provide state-of-the-art resources that contribute to achieve excellence in teaching-learning, research and development activities.`,
        `To bridge the gap between industry and academia by framing curricula and syllabi based on industrial and societal needs.`,
        `To provide suitable forums to enhance the creative talents of students and faculty members.`,
        `To enable students to develop skills to solve complex technological problems of current times and also provide a framework for promoting collaborative and multidisciplinary activities.`,
        `To inculcate moral and ethical values among the faculty and students.`,
      ],
      hod: {
        name: 'Dr. Anand Gondesi',
        designation: 'Associate Professor & HOD',
        qualification: 'B.Tech., M.E., M.I.E., MISTE., MIAENG., Ph.D',
        image: 'https://media.licdn.com/dms/image/v2/C5603AQEPgh2rsHNUug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1608824811227?e=1764201600&v=beta&t=-xLA2EPmLVLA3K0YvkxnHEnzN9xoETFQaZ2xI__pHPI',
        bio: `Dr Anand Gondesi has completed B.Tech (EEE) from JNTUH, in 2008 and M.E from Andhra University, in 2010. He has completed Ph.D from Andhra University, Visakhapatnam in February 2019. He is working as a Associate Professor of EEE Department and Head of the department, Dr Lankapalli Bullayya College of Engineering, Visakhapatnam, Andhra Pradesh state, India. His fields of interest are Power systems, Control Systems, Fuzzy, Soft Computing Techniques, Artificial Intelligence, Machine Learning.`,
        email: 'anandg@lbce.edu.in',
      },
      teachingFaculty: [
        { name: 'Dr. D. Deepak Chowdary', designation: 'PROFESSOR & PRINCIPAL', qualification: 'B.E., M.Tech., F.I.E., MISTE., MIAENG., Ph.D.', resume: '' },
        { name: 'Dr. Anand Gondesi', designation: 'ASSOCIATE PROFESSOR & HOD', qualification: 'B.Tech., M.E., M.I.E., MISTE., MIAENG., Ph.D', resume: '' },
        { name: 'Mr. B.Satish Naidu', designation: 'Assistant Professor', qualification: 'B. Tech., M.E., MISTE., MIAENG., (Ph.D)', resume: '' },
        { name: 'Mr. Ch.Arun Kumar', designation: 'ASSISTANT PROFESSOR', qualification: 'B. Tech., M.E., MISTE., (Ph.D)', resume: '' },
        { name: 'Mrs. S. Hema', designation: 'Assistant Professor', qualification: 'B. Tech., M.Tech, MISTE', resume: '' },
        { name: 'Mrs. S.Varalakshmi', designation: 'Assistant Professor', qualification: 'B. Tech., M.Tech., (Ph.D)', resume: '' },
        { name: 'Mr. Ch.Ravi Kumar', designation: 'Assistant Professor', qualification: 'B. Tech., M.E., MIAENG, (Ph.D)', resume: '' },
        { name: 'Mrs. D. GOWRAMMA', designation: 'ASSISTANT PROFESSOR', qualification: 'B.Tech., M.Tech', resume: '' },
        { name: 'Mr.Ch.Vinodh', designation: 'ASSISTANT PROFESSOR', qualification: 'B. Tech., M.Tech', resume: '' },
        { name: 'Dr J. ADI GANESWARI', designation: 'Assistant Professor', qualification: 'B. Tech, M.E., Ph.D', resume: '' },
        { name: 'Mrs. K. LEELAPADMINI', designation: 'ASSISTANT PROFESSOR', qualification: 'B.E., M.Tech', resume: '' },
      ],
      nonTeachingStaff: [
        { name: 'Mr. K. RAJA SEKHAR', designation: 'Lab Assistant' },
        { name: 'Mr. N. MANMADHA RAO', designation: 'Lab Assistant' },
      ],
      peos: [
        `Build a solid foundation in mathematics, science, engineering and soft skills for diverse career and lifelong learning.`,
        `Function ethically in multidisciplinary teams to develop sustainable solutions for global, environmental and social issues.`,
        `Model, design and develop a system, component or process to meet the needs of the society and industry within realistic constraints.`,
      ],
      pso: [
        `To apply knowledge of Electrical Engineering to solve problems corresponding to Electrical circuits and Electrical Machines.`,
        `To apply modern software tools for analysis, design and simulation of Electrical and Electronic Systems including Power Electronics, Power Systems and Control systems etc.`,
      ],
      pos: [
        { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.' },
        { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
        { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: 'PO5', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations' },
        { id: 'PO6', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice' },
        { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: 'PO11', title: 'Project management and finance', desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
      ],
      professionalBodies: [
        'ISTE (Indian Society for Technical Education) - The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System.',
        'Green9 Energy Saving Club - EnSAV (Energy Saving Awareness) Club focuses on bringing about a first-hand realization of the energy crisis and scarcity of natural resources in the country. With the increasing demand for energy, effective management and conservation of the same has become the need of the hour. Recognizing the immense value the Professional Students can bring to the initiative and taking due consideration of this urgent need, GREEN9 started Energy Saving Awareness Club (EnSAv Club), to propagate efficient usage of energy and to educate the society on climate change issues in the forecoming years.',
      ],
      labImages: [
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.29_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.29_PM_1.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.30_PM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.29_PM_1_YZcEfhX.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.29_PM_1_siIH0HC.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.29_PM_bUXQEOy.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-08-30_at_12.22.32_PM.jpeg',
      ],
    },
    bsh: {
      profile: `The Department of Basic Sciences & Humanities at Dr. Lankapalli Bullayya College of Engineering stands as the cornerstone of engineering education, fostering fundamental principles and understanding of science to enhance students' foundational knowledge. Our department is strategically designed to build a strong academic foundation that empowers budding engineers to excel in their specialized fields.

Our primary objective is to inculcate comprehensive knowledge in Mathematics, Physics, Chemistry, and English - the essential pillars of engineering education. Beyond traditional academics, we are passionately committed to the holistic development of students' personalities, communication skills, and professional competencies that prepare them for the modern, globally competitive environment.

The department boasts state-of-the-art laboratories including Chemistry Lab, Physics Lab, and English Communication Lab, all equipped with the latest equipment and cutting-edge technology. Our English Communication Lab features an E-Classroom with LCD Projector, Desktop Computer, Audio Visual Systems, and Microphones, providing students with immersive learning experiences.

We recognize that English language proficiency is pervasive and essential in today's global job market. Our comprehensive English communication skills program enables students to acquire exceptional proficiency in the English Language, empowering them to thrive in the competitive job market and excel in their professional careers.

Mathematics serves as the universal language and foundation for all branches of Engineering and Technology. Our expert faculty ensures that students master the art of expressing complex ideas logically through equations and formulae, building analytical thinking and problem-solving capabilities.

Chemistry education is crucial in understanding manufacturing processes and material transformations. We emphasize Environmental Science and Green Chemistry principles, equipping students with knowledge to save our planet from pollution and contribute to creating an eco-friendly, sustainable environment.

Physics education unlocks the mysteries of nature through the comprehensive study of matter's properties. Our well-equipped Physics Lab with Melde's Experiment setup and Dark Room facilities provides hands-on learning experiences that bridge theory and practical application.

The Department of Basic Sciences is exceptionally well-staffed with highly qualified, experienced faculty members and equipped with modern facilities to meet academic requirements to the best possible extent. We are committed to nurturing the next generation of engineers who will lead innovation and contribute to nation-building.`,
      vision: `The department works with a vision of imparting basic theorems, laws, theories and concepts in Engineering Mathematics, Engineering Physics, Engineering Chemistry, Environmental Studies, English Language Skills and Physical Education to the budding Engineers. The broad objective of the institution is to provide the right opportunities to the students of Engineering and Technology for the higher skills in new technologies and building their extraordinary careers in industry and research organizations. It strives to mold the promising engineers and technologists who can contribute their creative skills for Nation Building.`,
      mission: [
        `In order to materialize the ideals mentioned in the Vision Statement, The department sets a big mission of disseminating engineering education to budding Engineers and making them proficient technocrats.`,
        `It endeavors to provide quality professional and value based academic instruction for the overall development of our proud Nation.`,
        `It offers useful and relevant study programmes and also creates the perfect academic environment and formulates useful curriculum which places emphasis on basic topics in engineering sciences, design and experimental methods.`,
        `The faculty and staff in the department strive hard with their limitless potential and technical expertise to create resourceful Engineers.`,
      ],
      hod: {
        name: 'Prof. V. Radha Devi',
        designation: 'Professor & HOD',
        qualification: 'M.A, B.Ed, M.A, APSET, M.Phil., Ph.D.',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQEroBlQXWjK4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690876233841?e=1764201600&v=beta&t=mkBAoaxKXK3fvm0ZNjSnO6-YEUT9elKOMxePi1tnQC8',
        bio: `Dr. V Radha Devi is a Professor of English and Head of the Department of Humanities and Basic Sciences, at Dr. Lankapalli Bullayya College of Engineering, Visakhapatnam. She has 25 years of teaching experience. She is guiding 7 PhD scholars. She is the recipient of SIDVI's Excellence in Pedagogy Award 2023, Nari Samman Award 2021 & 2022, IMRF Achievers Award 2021 in English Language and Literature, Rashtriya Shiksha Ratna Award 2020 for Empowerment of Teachers & IWDA 2022 Award in the area of Education. She has been serving as a resource person for various workshops and seminars. International Certified Career Coach by Mindler, August 2020. She served as Vice Chairwoman of CII IWN AP 2023-24, she is the executive member of CII IWN Andhra Pradesh and member of ELTAI.`,
        email: 'principal@lbce.edu.in',
      },
      teachingFaculty: [
        { name: 'Prof. G. LOKESWARA REDDY', designation: 'Professor', qualification: 'M.Sc., M.Phil., Ph.D, FICC', resume: '' },
        { name: 'Major.T.Brahmananda Reddy', designation: 'Assistant Professor', qualification: 'M.Sc., (Ph.D)', resume: '' },
        { name: 'Dr.N.Swathi', designation: 'Sr. Assistant Professor', qualification: 'M.Sc., B.Ed., Ph.D., (PGDIPR)', resume: '' },
        { name: 'Prof.V.Radha Devi', designation: 'Professor & HOD', qualification: 'M.A, B.Ed, M.A, APSET, M.Phil., Ph.D.', resume: '' },
        { name: 'Prof.K.Kishore Varma', designation: 'Professor', qualification: 'M.A., M.A, M.Phil, Ph.D', resume: '' },
        { name: 'Mr. G.Srinivas Kumar', designation: 'Assistant Professor', qualification: 'M.A, M.Sc.(IT), M.Phil., UGC - NET', resume: '' },
        { name: 'Dr.B.PardhaSaradhi', designation: 'Associate Professor', qualification: 'M.Sc,M.Phil, Ph.D', resume: '' },
        { name: 'Dr.G.Satyanarayana', designation: 'Associate Professor', qualification: 'M.Sc, B.Ed., APSET, Ph.D', resume: '' },
        { name: 'Dr.G.V.Vijayalakshmi', designation: 'Sr. Assistant Professor', qualification: 'M.Sc, Ph.D', resume: '' },
        { name: 'Prof.B.Rama Rao', designation: 'Professor', qualification: 'M.Sc, Ph.D', resume: '' },
        { name: 'Dr.D.DeenaBandhu', designation: 'Associate Professor', qualification: 'M.Sc, Ph.D, B.Ed, DTA', resume: '' },
        { name: 'Mrs. S.SivaJyothi', designation: 'Assistant Professor', qualification: 'M.Sc, APSET, (Ph.D)', resume: '' },
        { name: 'Ms.U.GangaBhavani', designation: 'Assistant Professor', qualification: 'M.A., M.P.Ed, APSET, (PhD)', resume: '' },
        { name: 'Dr. P. Sowjanya Kiranmayi', designation: 'Assistant Librarian', qualification: 'M.A, LL.B, M.L.I.Sc, PhD', resume: '' },
      ],
      nonTeachingStaff: [
        { name: 'Mr. K. MURALI BABU', designation: 'Lab Technician' },
        { name: 'Mr. M.V. RAMANA', designation: 'Lab Technician' },
      ],
      peos: [
        `Acquire, Apply and exhibit the skills required to design, develop and implement solutions for real life problems.`,
        `Excel in professional career, higher education and research.`,
        `Demonstrate professionalism, entrepreneurship, ethical behavior, communication skills and collaborative team work to adapt the emerging trends by engaging in lifelong learning.`,
      ],
      pso: [
        `The main educational objective of the Program is to help the aspirants of technical education understand and develop the necessary skills to equip them for whatever career path they choose.`,
        `The objective of the programs is to provide students an excellent academic experience.`,
      ],
      pos: [
        { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
        { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: 'PO5', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice' },
        { id: 'PO6', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.' },
        { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: 'PO11', title: 'Project management and finance', desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
      ],
      professionalBodies: [
        'ELTAI (English Language Teachers Association Of India) - A premier professional body dedicated to the advancement of English language teaching and learning in India.',
        'British Council - A leading international organization for cultural relations and educational opportunities, providing resources and support for English language education.',
      ],
      labImages: [
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-09-03_at_10.34.51_AM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-09-03_at_10.37.30_AM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-09-03_at_10.37.31_AM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-09-03_at_10.40.11_AM.jpeg',
        'https://lbce.edu.in/media/lab/WhatsApp_Image_2024-09-03_at_10.40.48_AM.jpeg',
      ],
    },
  };

  const getTabs = (deptId) => {
    const deptNameMap = {
      'cse': 'CSE',
      'ece': 'ECE',
      'civil': 'CE',
      'eee': 'EEE',
      'bsh': 'BSH',
    };
    const deptName = deptNameMap[deptId] || deptId.toUpperCase();
    return [
      { id: 'profile', label: `About ${deptName}`, icon: FileText },
      { id: 'faculty', label: 'Faculty', icon: Users },
      { id: 'vision', label: 'Vision & Mission', icon: Target },
      { id: 'peos', label: "PEO's", icon: Award },
      { id: 'pos', label: "PO's", icon: BookOpen },
      { id: 'professional', label: 'Professional Bodies', icon: Building2 },
      { id: 'labs', label: 'Laboratories', icon: FlaskConical },
    ];
  };

  const handleDeptClick = (dept) => {
    setSelectedDept(dept);
    setActiveTab('profile');
  };

  const closeDeptView = () => {
    setSelectedDept(null);
  };

  if (selectedDept) {
    const deptData = departmentData[selectedDept.id] || departmentData.cse;
    const tabs = getTabs(selectedDept.id);
    return (
      <DepartmentDetailView
        department={selectedDept}
        data={deptData}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={closeDeptView}
      />
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Departments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our diverse range of engineering departments
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleDeptClick(dept)}
                className="group relative glass rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Department Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:gradient-text transition-all duration-300">
                    {dept.name}
                  </h3>

                  {/* Short Name */}
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {dept.shortName}
                  </p>

                  {/* View More */}
                  <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    <span className="text-sm">View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DepartmentDetailView = ({ department, data, tabs, activeTab, setActiveTab, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:20px_20px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {department.name}
                    </h2>
                    <p className="text-blue-100 text-lg">
                      Dr. Lankapalli Bullayya College of Engineering
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose max-w-none"
                >
                  {/* HOD Section - First */}
                  {data.hod && (
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold gradient-text mb-8">Head of Department</h3>
                      <div className="glass rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200/50 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                          {/* HOD Image */}
                          <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                              <img
                                src={data.hod.image}
                                alt={`${data.hod.name} - HOD`}
                                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/400x500/0ea5e9/ffffff?text=HOD';
                                  e.target.onerror = null;
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>

                          {/* HOD Details */}
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {data.hod.name}
                              </h4>
                              <p className="text-xl font-semibold text-gray-700 mb-3">
                                {data.hod.designation}
                              </p>
                              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4">
                                {data.hod.qualification}
                              </div>
                            </div>

                            <div className="space-y-3 text-gray-700 leading-relaxed">
                              {data.hod.bio.split('. ').filter(s => s.trim()).map((sentence, idx) => (
                                <p key={idx} className="text-base md:text-lg">
                                  {sentence.trim()}
                                  {idx < data.hod.bio.split('. ').filter(s => s.trim()).length - 1 && '.'}
                                </p>
                              ))}
                              <div className="pt-4">
                                <p className="text-base md:text-lg">
                                  <span className="font-semibold">Contact:</span>{' '}
                                  <a 
                                    href={`mailto:${data.hod.email}`}
                                    className="text-blue-600 hover:text-purple-600 font-semibold transition-colors"
                                  >
                                    {data.hod.email}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Department Profile - Second */}
                  <div className="pt-12 border-t border-gray-200">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Department Profile</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      {data.profile.split('\n\n').map((para, idx) => (
                        <p key={idx} className="text-base md:text-lg">{para}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'faculty' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-6">Teaching Faculty</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          <th className="p-4 text-left border border-white/20">Name</th>
                          <th className="p-4 text-left border border-white/20">Designation</th>
                          <th className="p-4 text-left border border-white/20">Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.teachingFaculty.map((faculty, idx) => (
                          <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
                            <td className="p-4 font-semibold text-gray-900">{faculty.name}</td>
                            <td className="p-4 text-gray-700">{faculty.designation}</td>
                            <td className="p-4 text-gray-600">{faculty.qualification}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold gradient-text mb-6 mt-12">Non-Teaching Staff</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          <th className="p-4 text-left border border-white/20">Name</th>
                          <th className="p-4 text-left border border-white/20">Designation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.nonTeachingStaff.map((staff, idx) => (
                          <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
                            <td className="p-4 font-semibold text-gray-900">{staff.name}</td>
                            <td className="p-4 text-gray-700">{staff.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">Department Vision</h3>
                    <p className="text-gray-700 leading-relaxed text-lg bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                      {data.vision}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">Department Mission</h3>
                    <ul className="space-y-4">
                      {data.mission.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'peos' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-6">Program Educational Objectives (PEO's)</h3>
                  <div className="space-y-4">
                    {data.peos.map((peo, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl font-bold gradient-text">{idx + 1}.</span>
                          <p className="text-gray-700 leading-relaxed text-lg flex-1">{peo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'pos' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-6">Program Specific Outcomes (PSO)</h3>
                  <div className="space-y-4 mb-12">
                    {data.pso.map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                        <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold gradient-text mb-6">Program Objectives (PO's)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.pos.map((po) => (
                      <div key={po.id} className="glass p-6 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all">
                        <div className="flex items-start space-x-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold">
                            {po.id}
                          </span>
                          <h4 className="font-bold text-gray-900">{po.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{po.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'professional' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-6">Professional Bodies</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {department.id === 'ece' 
                      ? 'Department Students are having membership through professional bodies and conduct events like Workshops, Seminars, Guest Lectures, etc.'
                      : 'Department Faculty and Students are having membership through professional bodies and conduct events like Workshops, Seminars, Guest Lectures, FDP\'s etc.'}
                  </p>
                  <div className="space-y-4">
                    {data.professionalBodies.map((body, idx) => (
                      <div key={idx} className="glass p-6 rounded-xl border border-gray-200/50">
                        <h4 className="font-bold text-lg gradient-text mb-2">{body.split(' - ')[0]}</h4>
                        {body.includes(' - ') && (
                          <p className="text-gray-700 text-sm mt-2">{body.split(' - ')[1]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'labs' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-6">Laboratories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.labImages.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                      >
                        <img
                          src={img}
                          alt={`Lab ${idx + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Laboratory';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsSection;

