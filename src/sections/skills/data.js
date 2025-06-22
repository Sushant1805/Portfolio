import {SiAdobexd} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'
import BugReportIcon from '@mui/icons-material/BugReport';
import LanguageIcon from '@mui/icons-material/Language';


const data = [
    {
        id: 1, icon: <BugReportIcon/>, title: 'Problem Solving',
    desc: "I excel in problem solving, tackling complex algorithms and data structure challenges efficiently."
    },
    {
        id: 2, icon: <LanguageIcon/>, title: 'Programming Languages',
    desc: "Proficient in C++, HTML, CSS, and JavaScript, allowing for versatile and robust programming solutions."
    },
    {
        id: 3, icon: <FaServer/>, 
 title: 'Frontend Technologies',
  desc: 'Building interactive, responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Vue.'
    },
    {
        id: 4, icon: <AiFillAppstore/>, 
        title: "DevOps and Cloud Technologies",
  desc: "Automating infrastructure, continuous integration and delivery, and managing scalable cloud environments using tools like Docker, Kubernetes, AWS."
  

    }
]


export default data