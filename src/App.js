import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardImg } from 'reactstrap';

// import { Landex } from '@jsancs/landex-contracts';
import './App.css';
import Map from './components/Map';
import { arrayToURILatLng } from './utils/functions';

function App() {
  const [data, setData] = useState([]);
  const [center, setCenter] = useState(undefined);
  const [zoom, setZoom] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [buildingType, setBuildingType] = useState('plot');
  const [propertyType, setPropertyType] = useState('residential');

  const handleSaveButtonOnClick = async e => {
    e.preventDefault();
    console.log(arrayToURILatLng(data));
    const img = `https://maps.googleapis.com/maps/api/staticmap?size=512x512&center=${center}&zoom=${zoom}&maptype=terrain&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&sensor=false&path=color:0x00000000|weight:5|fillcolor:0xFFFF0033|${arrayToURILatLng(data)}`;
    const metadata = {
      name, description,
      external_url: 'url to site will go here, so going to this url will open the map of the current token',
      image: img,
      attributes: [
        {
          trait_type: 'Building', 
          value: buildingType
        },
        {
          trait_type: 'Property', 
          value: propertyType
        },
      ],
      map: data,
    };

    setImage(img);
    console.log(metadata);
  };

  const transformAndSetData = latlngs => {
    const t = latlngs.map(ll => ({ lat: ll.lat(), lng: ll.lng() }));
    setData(t);
  };

  return (
    <Container fluid>
      <Map transformAndSetData={transformAndSetData} setCenter={setCenter} setZoom={setZoom} />
      <Row>
        <Col>
          <Form>
            <FormGroup row>
              <Label for='name' sm={2}>Name</Label>
              <Col>
                <Input type='text' id="name" name='name' value={name} onChange={e => setName(e.target.value)} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='building-type' sm={2}>Building Type</Label>
              <Col>
                <Input type='select' id="building-type" name='building-type' value={buildingType} onChange={e => setBuildingType(e.target.value)}>
                  <option>plot</option>
                  <option>house</option>
                  <option>apartment building</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='property-type' sm={2}>Property Type</Label>
              <Col>
                <Input type='select' id="property-type" name='property-type' value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                  <option>residential</option>
                  <option>commercial</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='description' sm={2}>Description</Label>
              <Col>
                <Input type='textarea' id="description" name='description' value={description} onChange={e => setDescription(e.target.value)} />
              </Col>
            </FormGroup>

            <FormGroup row check style={{ paddingLeft: 0 }}>
              <Col sm={{ offset: 2, size: 10 }}>
                <Button color="primary" size='lg' onClick={handleSaveButtonOnClick}>Save</Button>
              </Col>
            </FormGroup>

          </Form>
        </Col>
      </Row>
      {image && 
        <Row className='gy-5'>
          <Col sm={{ offset: 2, size: 5 }}>
            <Card>
              <CardImg src={image} width='90%' />
            </Card>
          </Col>
          <Col >
            <Button color="success" size='lg' onClick={null}>Mint</Button>
          </Col>
          
        </Row>
      }
    </Container>
  );
}

export default App;
