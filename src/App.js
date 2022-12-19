import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';

import PrivateRouter from './components/PrivateRouter';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';


import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" />
                    <MenuItem icon="/assets/order.png" link="/orders" />
                    <MenuItem icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRouter path="/orders">
                            <div>Tela de Pedidos</div>
                        </PrivateRouter>
                        <PrivateRouter path="/profile">
                            <div>Tela de perfil</div>
                        </PrivateRouter>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart>

                </Cart>
            </Container>
        </BrowserRouter>
    );
}