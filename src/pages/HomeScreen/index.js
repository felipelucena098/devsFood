import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Header from '../../components/Header';

import api from '../../api';

export default () => {
    const history = useHistory();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.categories();
        };
        getCategories();
    }, []);

    const [headerSearch, setHeaderSearch] = useState('');

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}
