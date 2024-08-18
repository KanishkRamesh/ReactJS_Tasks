import React from 'react'
import '../Style.css';

import { Card, Col, Row } from 'antd';

export function Task6() {
  return (
    <>
    <div className='t6bg'>
        <h1>ReactJS Task 6</h1>
    <div className='t6bg1'>
        <h1> Learn 4.0 Technologies</h1>
    <div className='t6bg2'>
        <h5>Get trained by alumni of IIT's and top companies like Amazon , Microsoft , Intel ,<br/>Nvidia , Qualcomm ,etc . Learn directly from professionals involved in Product Development.</h5>   
        <Row gutter={16}>
        <Col className='six1' span={8}>
            <Card title="Data Scientist" bordered={false}>
            Data Scientist gather and analysis large sets of structured and unstructured data.<br/>
            <img className='img61' src='https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg?t=st=1724006405~exp=1724010005~hmac=bd56f2f61eaf1b1c7da3db41504d24eef77cca32d0e0a6190a0aedee3a7045f7&w=996' alt='noimg'/>
            </Card>
        </Col>
        <Col className='six2' span={8}>
            <Card title="IOT Developer" bordered={false}>
             IOT Developers are professionals who can develop , manage ,and monitor IOT devices.<be/>
             <img className='img62' src='https://img.freepik.com/free-vector/man-with-business-coins-chat-bubbles_24877-53502.jpg?t=st=1724005397~exp=1724008997~hmac=af6341d95dc70efe3cdddfda17ded2269b77ee61f2cfda430547448cb4c50725&w=740' alt='noimg'/>
            </Card>
        </Col>
        </Row>

        <Row gutter={16}>
        <Col className='six3' span={8}>
            <Card title="VR Developer" bordered={false}>
            A VR developer creates completelynew digital environment that people can use.<br/>
            <img  className='img63' src='https://img.freepik.com/free-vector/virtual-reality-illustration-concept_114360-888.jpg?t=st=1724005848~exp=1724009448~hmac=028bf88db96fd54e9de30f02984882682d59a8be2301c43558025fd66a880037&w=740' alt='noimg'/>
            </Card>
        </Col>
        <Col className='six4' span={8}>
            <Card title="ML Engineer" bordered={false}>
             Machine learning engineers feed data into models defined by data Scientists.<br/>
             <img className='img64' src='https://img.freepik.com/free-vector/science-partners-working-together-lab_23-2148492800.jpg?t=st=1724005953~exp=1724009553~hmac=5c8b98765fabe81b511843f860c1675fa811be996d2fedf43c193b63ccbbe4a4&w=740' alt='noimg'/>
            </Card>
        </Col>
        </Row>
    </div>
    </div>
    </div>
    </>
  )
}
