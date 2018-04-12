import { notification  } from 'antd';



export function addTag() {
    notification.open({
        message: 'Notification Title',
        description: '123',
        duration: 2
    });
}