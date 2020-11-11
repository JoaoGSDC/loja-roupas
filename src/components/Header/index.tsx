import React, { useState } from 'react';
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { Nav, OptionBar, Sidebar, SubOptionsBar, UserIcon } from './styles';

function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenClothes, setIsOpenClothes] = useState<boolean>(false);
    const [isOpenAccessory, setIsOpenAccessory] = useState<boolean>(false);

    function onSetSidebarOpen(open: any) {
        setIsOpen(open);
        document.body.style.marginLeft = open ? '250px' : '0px';
        document.body.style.transition = '0.2s';
    }

    function onSetSidebarOpenClothes(open: any) {
        setIsOpenClothes(open);
    }

    function onSetSidebarOpenAccessory(open: any) {
        setIsOpenAccessory(open);
    }

    return (
        <>
            <Sidebar style={{ width: isOpen ? '250px' : '0px' }}>
                <OptionBar>
                    <UserIcon><FiUser /></UserIcon>
                    <label>Perfil</label>
                </OptionBar>
                <div>
                    <div>
                        <OptionBar onClick={() => onSetSidebarOpenClothes(isOpenClothes ? false : true)}><label>Roupas</label></OptionBar>
                        <SubOptionsBar style={{ display: isOpenClothes ? 'block' : 'none', transition: '0.2s' }}>
                            <div><label>Vestidos</label></div>
                            <div><label>Camisas</label></div>
                            <div><label>Blusas</label></div>
                            <div><label>Calças</label></div>
                            <div><label>Saias</label></div>
                        </SubOptionsBar>
                    </div>
                    <div>
                        <OptionBar onClick={() => onSetSidebarOpenAccessory(isOpenAccessory ? false : true)}><label>Acessórios</label></OptionBar>
                        <SubOptionsBar style={{ display: isOpenAccessory ? 'block' : 'none', transition: '0.2s' }}>
                            <div><label>Colar</label></div>
                            <div><label>Pulseiras</label></div>
                            <div><label>Bolsas</label></div>
                        </SubOptionsBar>
                    </div>
                </div>
            </Sidebar>
            <Nav>
                <button onClick={() => onSetSidebarOpen(isOpen ? false : true)}>
                    <FiMenu size={35} />
                </button>

                <label><Link to={'/'}>Violetta</Link></label>

                <Link to={'/cart'}><FiShoppingCart size={25} /></Link>
            </Nav>
        </>
    )
}

export default Header;