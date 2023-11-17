import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function Searchbar(props) {

    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event) => {
        const searchWord = event.target.value;

        const newFilter = props.services.filter(service => {
            return service.pageName.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    }

    return (
        <Form className="d-flex me-3">
            <InputGroup>
                <Form.Control
                    type="search"
                    placeholder="Ricerca attravreso parole chiave"
                    aria-label="Search"
                    size="md"
                    style={{ width: '400px', height: '40px' }}
                    onChange={handleChange}

                />
                <InputGroup.Text>
                    <Search />
                </InputGroup.Text>
            </InputGroup>
            {
                filteredData.length !== 0 &&
                <ListGroup style={{ position: 'absolute', width: '300px', marginTop: '40px' }}>
                    {filteredData.slice(0, 3).map(service => {
                        return (
                            <ListGroup.Item action as={Link} to={service.link} key={service.id}
                                variant="light"
                                onClick={() => setFilteredData([])}
                                style={{ fontSize: '12px', color: '#1d3b55' }}>
                                {service.pageName}
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            }
        </Form>
    );
}