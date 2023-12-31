import React, { useState, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function Searchbar(props) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const handleChange = (event) => {
        const word = event.target.value;
        setSearchWord(word);

        const newFilter = props.services.filter((service) => {
            return service.pageName.toLowerCase().includes(word.toLowerCase());
        });

        setFilteredData(newFilter);
    };

    const handleClickOutside = (event) => {
        const isSearchbar = event.target.closest('.w-100');
        if (!isSearchbar) {
            setSearchWord('');
            setFilteredData([]);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Form className="d-flex me-3 w-100" style={{ maxWidth: '400px' }}>
            <InputGroup className="flex-nowrap w-100">
                <Form.Control
                    className='truncated'
                    type="search"
                    placeholder="Ricerca nel portale..."
                    aria-label="Search"
                    size="md"
                    style={{
                        height: '40px',
                        backgroundColor: '#F0F3F5',
                        color: '#002B49',
                        borderRadius: '8px',
                    }}
                    value={searchWord}
                    onChange={handleChange}
                />
                <Search
                    style={{
                        position: 'relative',
                        zIndex: '3',
                        right: '28',
                        top: '12',
                    }}
                />
            </InputGroup>
            {searchWord !== "" && (
                <ListGroup
                    className="w-100"
                    style={{
                        position: 'absolute',
                        maxWidth: '370px',
                        marginTop: '40px',
                    }}
                >
                    {filteredData.slice(0, 3).map((service) => (
                        <ListGroup.Item
                            action
                            as={Link}
                            to={service.link}
                            key={service.id}
                            variant="light"
                            onClick={() => {setFilteredData([]); setSearchWord('')}}
                            style={{fontSize: '12px', fontWeight:'500'}}
                        >
                            {service.pageName}
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item
                        action
                        as={Link}
                        to={"https://www.polito.it/en/search?q=+" + searchWord + "&lang=it"}
                        target='_blank'
                        variant="light"
                        onClick={() => {setSearchWord('')}}
                        style={{ fontSize: '12px'}}
                    >
                        Cerca <span style={{fontWeight:'500'}}>{searchWord}</span> su polito.it...
                    </ListGroup.Item>               
                </ListGroup>
                
                
            )}
        </Form>
    );
}

