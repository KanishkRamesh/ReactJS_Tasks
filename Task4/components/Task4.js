
import ButtonGroup from 'antd/es/button/button-group'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import '../Style.css';

import { InfoCircleOutlined , TrophyOutlined , BellOutlined , WarningOutlined } from '@ant-design/icons'

import { Button, notification } from 'antd';



export function Task4() {

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'TASK 4 MSG ___ KANISHK R , CS-A , 2222KA25',
      placement,
    });
  };

  return (
    <>
    <div className='bg1'>
      <h1 className='task4'>ReactJS Task 4</h1>
    <div className='bg2'>
      <h1 className='n1'>NOTIFICATIONS</h1>

      {contextHolder}
          
        <Button className="b1"  onClick={() => openNotification('top')} >
        <InfoCircleOutlined  twoToneColor="	#FFFFFF" />Information Message
        </Button>

        <Button className="b2"  onClick={() => openNotification('top')} >
        <TrophyOutlined  twoToneColor="	#FFFFFF" />Information Message
        </Button>

        <Button className="b3"  onClick={() => openNotification('top')} >
        <BellOutlined  twoToneColor="	#FFFFFF" />Warning Message
        </Button>

        <Button className="b4"  onClick={() => openNotification('top')} >
        <WarningOutlined   twoToneColor="	#FFFFFF" />Error Message
        </Button>
        </div>
        </div>
        
    </>
  )
}



