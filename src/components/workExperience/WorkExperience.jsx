
import { Card, Container } from 'react-bootstrap';
import './workExperience.css';

const WorkExperience = () => {
    return (
        <Container className="work-experience__container">
            <h2 className="work-experience__title">İdeal İş Təcrübəsi</h2>
            <div className="work-experience__list">
                <Card className="work-experience__card">
                    <Card.Img variant="top" src="./image3.png" className="work-experience__image" />
                    <Card.Title className="work-experience__card-title">
                        Daha Rahat Əlaqə
                    </Card.Title>
                </Card>
                <Card className="work-experience__card">
                    <Card.Img variant="top" src="./image5.png" className="work-experience__image" />
                    <Card.Title className="work-experience__card-title">
                        Daha Rahat Proseslər
                    </Card.Title>
                </Card>
                <Card className="work-experience__card">
                    <Card.Img variant="top" src="./image2.png" className="work-experience__image" />
                    <Card.Title className="work-experience__card-title">
                        Məmnun Müştərilər
                    </Card.Title>
                </Card>
            </div>
        </Container>
    )
}

export default WorkExperience