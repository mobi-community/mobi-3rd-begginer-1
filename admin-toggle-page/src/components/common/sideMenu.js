import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const [active, setActive] = useState(sessionStorage.getItem("activeMenu"));
    const [open, setOpen] = useState(sessionStorage.getItem("openMenu"));

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.setItem("openMenu", open);
    }, [open]);

    useEffect(() => {
        sessionStorage.setItem("activeMenu", active);
    }, [active]);

    const toggleMenu = [
        {
            name: "Users",
            title: "회원관리",
            items: [
                { title: "회원목록", url: "userList" },
                { title: "회원등록", url: "addUser" },
            ],
        },
        {
            name: "Products",
            title: "상품관리",
            items: [
                { title: "상품목록", url: "productList" },
                { title: "상품등록", url: "addProduct" },
            ],
        },
    ];
    const handleNavigate = (url) => {
        navigate(`${url}`);
        setActive(url);
    };
    return (
        <>
            {toggleMenu.map((item, index) => (
                <div key={index}>
                    <div>{item?.title}</div>
                    {open === item.name}
                </div>
            ))}
            <div>sideMenu</div>
        </>
    );
};
export default SideMenu;
