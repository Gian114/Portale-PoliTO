import { CreditCard, Heart, Book, JournalAlbum, Globe, PeopleFill } from 'react-bootstrap-icons';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyCard(icon, title, description) {
    return (
        <Card border='primary' style={{ width: '18rem', height: '12rem' }}>
            <Card.Body>
                <Card.Title style={{ color: '#1d3b55' }}>{icon} {title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href="#">Accedi</Card.Link>
            </Card.Body>
        </Card>
    );

}

export default function Servizi() {

    //href changed according to specific service and we should use Link 

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'Tasse', 'Utilizza questo servizio per effettuare il pagamento delle tasse')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<Heart></Heart>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {MyCard(<Book></Book>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<JournalAlbum></JournalAlbum>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<Globe></Globe>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {MyCard(<PeopleFill></PeopleFill>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>

            </Container>
        </>
    );
}