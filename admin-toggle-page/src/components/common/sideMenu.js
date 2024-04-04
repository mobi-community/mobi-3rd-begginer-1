import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideMenu = () => {
    //세션스토리지에 activeMenu 를 가져오고 active 상태로 관리, 메뉴가 클릭되었는지 여부 확인
    const [active, setActive] = useState(sessionStorage.getItem("activeMenu")); //null값
    //세션스토리지에 openMenu를 가져오고 open 상태로 관리. 메뉴가 오픈되어있는지 여부 확인
    const [open, setOpen] = useState(sessionStorage.getItem("openMenu")); //null값

    const navigate = useNavigate();

    //오픈상태 변경시, 변경된 open상태를 세션스토리지의 openMenu에 저장, 초기엔 null값
    useEffect(() => {
        sessionStorage.setItem("openMenu", open);
    }, [open]);

    //active 상태 변경시 , 변경된 active상태를 세션스토리지의 activeMenu에 저장
    useEffect(() => {
        sessionStorage.setItem("activeMenu", active);
    }, [active]);

    //선택할수 있는 메뉴들 배열로 선언
    const menus = [
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

    //초기값은 무조건 null , null 과 클릭한 name값이 같지 X  => setOpen에 클릭한 name값으로 세션스토리지 저장.
    //->세션스토리지에 클릭한 name 저장되고 다시 한번 더 같은거 누르면 닫혀야하니까 null 값을 반환.
    //현재 저장된 세션스토리지의 값과 내가 현재 선택한 타이틀의 값을 비교하여 새로 세션스토리지에 저장하기위해 사용
    const toggleMenu = (name) => {
        setOpen(open === name ? null : name);
    };

    //클릭시 페이지 이동하는 함수
    const handleNavigate = (url) => {
        navigate(`${url}`);
        setActive(url);
    };

    return (
        <Container>
            {menus.map((item, index) => (
                <div key={index}>
                    <div onClick={() => toggleMenu(item.name)}>
                        {item?.title}
                    </div>
                    {open === item.name && (
                        <div>
                            {item.items.map((data, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigate(data.url)}
                                >
                                    {data.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </Container>
    );
};
export default SideMenu;
const Container = styled.div`
    background-color: aliceblue;
`;
