import { Card, Col, Container, Image, Row } from "react-bootstrap"
import './customersReviews.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLaptop, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons/faInternetExplorer";

const CustomersReviews = () => {
    return (
        <div className="customer-reviews">
            <Container className="customer-reviews__container">
                <h2 className="customer-reviews__title">Müştəri Rəylərimiz</h2>
                <Row className="customer-reviews__row">
                    <Col md={12} lg={6} xl={6}>
                        <Card className="customers-reviews__card">
                            <Card.Body>
                                <Card.Title>İşəgötürən:</Card.Title>
                                <Card.Subtitle className="customer-reviews__employer">Cavid Əliyev</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        <li>Platforma mənə ən yaxşı freelancerləri təqdim etdi. Layihəm çox uğurlu oldu.</li>
                                        <li>Ən yaxşı işçiləri tapmaq və peşəkar əməkdaşlıq qurmaq çox asandır.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={6} xl={6}>
                        <div className="customers-reviews__image-wrapper">
                            <Image src="./image1.png" className="customers-reviews__image" />
                        </div>
                    </Col>
                </Row>
                <Row className="customer-reviews__row">
                    <Col md={12} lg={6} xl={6}>
                        <div className="customers-reviews__image-wrapper">
                            <Image src="./image.png" className="customers-reviews__image" />
                        </div>
                    </Col>
                    <Col md={12} lg={6} xl={6}>
                        <Card className="customers-reviews__card">
                            <Card.Body>
                                <Card.Subtitle className="customer-reviews__role">UI/UX Dizayner</Card.Subtitle>
                                <Card.Title>Freelanser işçi:</Card.Title>
                                <Card.Subtitle className="customer-reviews__employer">Səbinə Muradlı</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        <li>İşimə görə yüksək qiyməy alır və hər zaman ödənişlər vaxtında həyata keçirilir. Freelance həyatımı çox asanlaşdırır.</li>
                                        <li>Ən yaxşı müştərilər və layihələr burada tapılır Bu platforma ilə çalışmaq mənim üçün peşəkar inkişafımda mühüm addım oldu.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="customer-reviews__row">
                    <Col md={12} lg={6} xl={6}>
                        <Card className="customers-reviews__card">
                            <Card.Body>
                                <Card.Subtitle className="customer-reviews__role">Maliyyə və Hesabatlıq</Card.Subtitle>
                                <Card.Title>Freelanser işçi:</Card.Title>
                                <Card.Subtitle className="customer-reviews__employer">Sadiq Kərimov</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        <li>Freelancer kimi bu platformada iştirak etmək çox rahatdır. Layihə seçimi genişdir və hər zaman şəffaf bir əlaqə saxlanılır.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={6} xl={6}>
                        <div className="solar-system">
                            <div className="solar-system__sun"></div>

                            <div className="solar-system__orbit solar-system__orbit--wifi">
                                <div className="solar-system__icon solar-system__icon--wifi">
                                    <FontAwesomeIcon icon={faWifi} />
                                </div>
                            </div>

                            <div className="solar-system__orbit solar-system__orbit--internet">
                                <div className="solar-system__icon solar-system__icon--internet">
                                    <FontAwesomeIcon icon={faInternetExplorer} />
                                </div>
                            </div>

                            <div className="solar-system__orbit solar-system__orbit--laptop">
                                <div className="solar-system__icon solar-system__icon--laptop">
                                    <FontAwesomeIcon icon={faLaptop} />
                                </div>
                            </div>

                            <div className="solar-system__orbit solar-system__orbit--user">
                                <div className="solar-system__icon solar-system__icon--user">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default CustomersReviews