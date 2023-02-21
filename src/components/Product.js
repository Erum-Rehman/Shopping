import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function GridExample() {
  return (
    <>
    <div className="card_div">
        <Row xs={1} md={6} className="g-4">
      {Array.from({ length: 30 }).map((_, idx) => (
        <Col>
          <Card style={{ width: '13rem', marginBottom: '6%', border: 'none' }}>
            <img src='../../../public/assets/custCase.png' style={{width: '100%', height: '185px'}}/>
           
              <p style={{fontSize: '14px'}}>This is a longer card with supporting text below as  natural</p>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '2%'}}>
                  <h5 style={{color: '#3B62AB', fontWeight: '700'}}>$760.00</h5>
                  <p style={{color: '#999999', fontSize: '12px', fontWeight: '600'}}>155oldPrice</p>
                </div>
                
                
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
   
  );
}

export default GridExample;