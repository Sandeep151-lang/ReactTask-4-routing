
import { AiFillSetting, AiFillFolderOpen } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { BiBarChartSquare } from 'react-icons/bi'
import { BsFillCalendarFill } from 'react-icons/bs'
import { FaChild, FaTools, FaFlickr } from "react-icons/fa";
import { BiBook } from "react-icons/bi";

const data = [{


    id: 1,
    icon: <AiFillSetting />,
    type: 'Components',
    link: "/card"


},
{
    id: 2,
    icon: <VscTools />,
    type: 'Utilities',
    link: "/card"

},
{
    id: 3,
    icon: <AiFillFolderOpen />,
    type: 'Pages',
    link: "/card"

},
{
    id: 4,
    icon: <BiBarChartSquare />,
    type: 'Charts',
    link: "/card"

},
{
    id: 5,
    icon: <BsFillCalendarFill />,
    type: 'Tables',
    link: "/card"

},
{
    id: 5,
    icon: <FaChild />,
    type: 'Zen',
    link: "/card"

},
{
    id: 5,
    icon: <BiBook />,
    type: 'Courses',
    link: "/card"

},
{
    id: 5,
    icon: <FaTools />,
    type: 'Codekata',
    link: "/card"

}, {
    id: 5,
    icon: <FaFlickr />,
    type: 'Project',
    link: "/card"

}
]

export default data;