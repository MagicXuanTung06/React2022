import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from './comnponent/Alert';
import StudentInfoComponent from './comnponent/StudentInfoComponent';


//Alert
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />);

//StudentInfoComponent
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentInfoComponent />);

