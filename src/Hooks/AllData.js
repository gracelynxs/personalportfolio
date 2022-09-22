import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/blog.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/blog copy.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
//import img4 from "../assets/images/slider/brand-1.png";
//import img5 from "../assets/images/slider/brand-2.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import {BiNews} from "react-icons/bi"
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Deep Learning",
      title: "Classification of Breast Cancer Histopathology Images",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      project: "https://designday.jhu.edu/wp-content/uploads/formidable/6/Research-Poster-Template.pdf",
      projectText: "Research Poster", 
      client: "https://github.com/krutalp/Gateway-Data-Science-Project",
      clientText: "Github Repo", 
      langages: "sklearn, PyTorch",
      link: "https://livejohnshopkins-my.sharepoint.com/:p:/g/personal/kpate111_jh_edu/ERJKh-a9SDhGr_H6SNA_2mkB0_Q8EchB6HhaNNi_YPBVGQ?rtime=7W6ORIt82kg",
      linkText: "Presentation",
      description:
        "Classified breast cancer images using a logistic regression model trained on features extracted from a ResNet with a team of data science students at Johns Hopkins University. ",
    },
    {
      id: "2",
      tag: "Machine Learning",
      title: "Predicting Bike Sharing Demand using AutoGluon",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      project: "https://github.com/gracelynxs/predict-bike-share-udacity-proj/blob/master/project-report.md",
      projectText: "Project Report", 
      client: "https://github.com/gracelynxs/predict-bike-share-udacity-proj/blob/master/project_notebook.ipynb",
      clientText: "Github Repo", 
      langages: "AutoGluon",
      link: "https://www.kaggle.com/competitions/bike-sharing-demand/overview",
      linkText: "Project Description",
      description:
        "Trained AutoGluon to evaluate tabular data of time-series bike sharing data with weather and other related factors. Obtained MSE of 0.5 after feature engineering and hyperparameter tuning",
    },
    {
      id: "3",
      tag: "Other",
      title: "Bioinformatics Research",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      project: "",
      projectText: "Research", 
      client: "",
      clientText: "N/A", 
      langages: "seaborn, sklearn, matplotlib",
      link: "https://docs.google.com/presentation/d/1tkIwXqi5SZ3NQ7KxDbs-fRPdTuA6fWpJAhYOMp4Nw1U/edit#slide=id.g90367807e7_0_0",
      linkText: "Presentation",
      description:
        "Predicting homologous recombination deficiency based on copy number variants for breast cancer tumours. Performed exploratory data analysis on genomic sequences.",
    },
    
    
    
    
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "June 30, 2022",
      category: "Project",
      title: "Undergraduate students investigate breast cancer images",
      titlelink: "https://engineering.jhu.edu/ams/news/undergraduate-students-investigate-breast-cancer-images/", 
      bg: "#FCF4FF",
      description:
        "A team of undergraduate students in the Department of Applied Mathematics and Statistics developed and used a machine learning algorithm to images from the Breast Cancer Histopathological Database and classified the image labels as malignant or benign with an average 97% accuracy rate. Click title to see article.",
    }
   
    
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/home/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/homeTwo/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/homeTwo/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Projects",
      link: "/homeTwo/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Media",
      link: "/homeTwo/blogs",
      icon: <BiNews />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/homeTwo/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    
    img1,
    img2,
    img3,
    
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: icon,
      title: "Languages",
      des: "Python, Java, C/C++, HTML/CSS, Git",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Tools",
      des: "XGBoost, AutoGluon, PyTorch, Tensorflow, AWS",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    
    //{
      //id: "3",
      //icon: icon2,
      //title: "ESG + Climate Tech",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      //color: "#8774FF",
      //bg: "#FCF4FF",
    //},
    //{
      //id: "4",
      //icon: icon3,
      //title: "Public Speaking",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      //color: "#FF6080",
      //bg: "#FFF4F4",
    //},
    
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "Education",
      icon: MdOutlineSchool,
      id: "01",
      date: "2022-",
      title: "B.A. Computer Science and Data Science",
      place: "Northwestern University",
      bg: "#FFF4F4",

      id1: "02",
      date1: "2022-",
      title1: "AWS Machine Learning Nanodegree",
      place1: "Udacity",
      bg1: "#FFF1FB",

      id2: "03",
      date2: "2021-2022",
      title2: "B.S. Computer Science and Economics",
      place2: "Johns Hopkins University (tranferred)",
      bg2: "#FFF4F4",
    },
    {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "2022-",
      title: "Head of Computer Science",
      place: "Acorn Genetics",
      bg: "#EEF5FA",

      id1: "05",
      date1: "2022-",
      title1: "ESG and Data Visualization Intern",
      place1: "Responsible Alpha",
      bg1: "#F2F4FF",

      id2: "06",
      date2: "2022",
      title2: "Bioinformatics Intern",
      place2: "Alexandrov Lab (Remote)",
      bg2: "#EEF5FA",
    },
    {
      type: "Awards",
      icon: FaAward,
      id: "07",
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",

      id1: "08",
      date1: "2014 - 2015",
      title1: "Jr. Web Developer",
      place1: "Creative Gigs.",
      bg1: "#FCF9F2",

      id2: "09",
      date2: "2015-2017",
      title2: "Best Freelancer",
      place2: "Fiver & Upwork Level 2 & Top Rated",
      bg2: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      //id: "01",
      //color: "#FF6464",
      //name: "Web Design",
      //number: "80",
    },
    {
      //id: "02",
      //color: "#9272D4",
      //name: "Mobile App ",
      //number: "95",
    },
    {
      //id: "03",
      //color: "#5185D4",
      //name: "Illustrator",
      //number: "65",
    },
    {
      //id: "03",
      //color: "#CA56F2",
      //name: "Photoshope",
      //number: "75",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+452 666 386",
      item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
