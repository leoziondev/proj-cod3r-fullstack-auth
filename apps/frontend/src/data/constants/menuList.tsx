import { BsBox } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { TbReport } from "react-icons/tb"

export const menuList = [
    {
        icon: <FiUser/>,
        label: 'Gerenciar',
        route: '/gerenciar'
    },
    {
        icon: <BsBox />,
        label: 'Visualizar',
        route: '/'
    },
    {
        icon: <TbReport />,
        label: 'Relatório',
        route: '/relatorio'
    },
]