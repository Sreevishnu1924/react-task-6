import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";
function ExperienceCards() 
{ 
        return <div>
          <Card className = 'card-border'>
          <Card.Body>
          <Card.Title> <h2>Feature Selction Method</h2> </Card.Title>
          <Card.Text>
            <p>
            Weighted Correlation Firefly based Machine Learnign Algorithm  to extract the best set of features. 
            Implemented this algorithm on CICDDoS-2019 DataSet. In this project, many ML classifiers like KNN classifier,
            Random Forest, XGB Classifer, and LGBM classiers are used to make the classification and analyse the results.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title> <h2>MultiUser TaskManager</h2> </Card.Title>
          <Card.Text>
            <p>
                This project is built using Flask framework. This project also includes Signup and Login pages.
                 Used SQL databse to store the data.
             </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title> <h2>Synthetic Data Generation</h2> </Card.Title>
          <Card.Text>
            <p>
                To implement any Machine Learning Algorithm, we need suffienct amount of data to train the models.
                Some of the application areas, data available is very less. Smotified_Gan is a model to generate synthetic data.
                
           </p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
}
export default ExperienceCards;