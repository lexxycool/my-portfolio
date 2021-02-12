import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import image from './images/steven-binotto-hEPKA9-1KRk-unsplash.jpg';
import styles from './styles';


function Home() {
    return (
       
        
        <Card className="bg-dark text-danger my-auto" style={styles.cardImage} fluid>
            <Card.Img src={image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title style={styles.cardTitle}>
                    FRONT-END WEB DEVELOPER
                    </Card.Title>
                <Card.Text style={styles.cardDesc}>
                    HELLO WORLD,
                </Card.Text>
                <Card.Text style={styles.cardName}>
                    <span style={styles.cardDesc}>I'm </span>Obinna Mokwe
                </Card.Text>
                
                <Link to='/aboutMe'>
                    <Button variant="outline-light" style={styles.cardButton}>
                       Know more
                   </Button>
                </Link>

            </Card.ImgOverlay>
        </Card>
     
    )
}

export default Home
