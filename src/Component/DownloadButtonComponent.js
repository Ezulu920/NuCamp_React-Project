import React from 'react';
import { Button } from 'reactstrap';

const DownloadBtn = (props) => {
    return (
        <div>
            <Button className="downloadbtn1" color="primary">primary</Button>{' '}
            <Button color="warning">primary</Button>{' '}
            
        </div>
    );
}

export default DownloadBtn;