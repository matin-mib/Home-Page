import { Card, Col, Container, Row } from 'react-bootstrap'
import './globalBusiness.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faFileAlt, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const GlobalBusiness = () => {
    return (
        <Container className="global-business__container">
            <h2 className="global-business__title">Qlobal İş İmkanları</h2>
            <Row>
                <Col md={6} className="global-business__column">
                    <Card className="global-business__card">
                        <div className="global-business__item">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <p className="global-business__text global-business__text--top">
                                Təhlükəsiz Ödənişlər: Uğurlu Əməkdaşlıqlar Bizimlə Başlayır.
                            </p>
                        </div>
                        <span className="global-business__separator"></span>
                        <div className="global-business__item">
                            <FontAwesomeIcon icon={faHandshake} />
                            <p className="global-business__text global-business__text--bottom">
                                Siz ödənişlərdə tam təhlükəsizliyin və şəffaflığın təmin ediodiyindən əmin ola bilərsiniz.
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col md={6} className="global-business__column">
                    <Card className="global-business__card">
                        <div className="global-business__item">
                            <FontAwesomeIcon icon={faFileAlt} />
                            <p className="global-business__text global-business__text--top">
                                İşəgötürənlər Üçün: Layihələrinizi Qlobal İstedadlarla Həll Edin.
                            </p>
                        </div>
                        <span className="global-business__separator"></span>
                        <div className="global-business__item">
                            <FontAwesomeIcon icon={faGlobe} />
                            <p className="global-business__text global-business__text--bottom">
                                Siz layihənizi yalnız yerli istedadlarla deyil, qlobal mütəxəssilərlə də həyata keçirə bilərsiniz.
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default GlobalBusiness