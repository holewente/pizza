import React from 'react'
import {Card,CardBody,CardText,CardTitle,Button} from 'reactstrap'

export const MyCard=({id,name,img_url,setSelProduct})=> {
  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="name"
    src={img_url}
  />
  <CardBody>
    <CardTitle tag="h5">
      {name}
    </CardTitle>
    
    <CardText>
      
    </CardText>
    <Button onClick={()=>setSelProduct({id,name,img_url})}>
      Részletek
    </Button>
  </CardBody>
</Card>
  )
}
