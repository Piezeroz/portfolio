import moment from "moment";
import "./App.css";
import ImageProfiles from "./components/ImageProfiles";
import Title from "./components/Title";
import TitleLeft from "./components/TitleLeft";
import  axios  from 'axios';

import { useState,useEffect } from "react";


const enpoint = 'https://sheetdb.io/api/v1/nzmdjyd9gtuvr';

function App() {
  const [hide, setHide] = useState(true);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfiles images="/src/assets/profile.png" />

          <Title title="อาริฟ เงาะ">
            <p>3D modeler </p>
          </Title>

          <Title title="Contract">
            <p>{moment("2002/10/17").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? "none" : "block" }}>
              tel: +660971879007
            </p>
            <button onClick={() => setHide(!hide)}>
              {hide ? "เเสดงเบอร์โทร" : "ซ่อนเบอร์โทร"}
            </button>
            <p>Email: piezaro4@gmail.com</p>
            <p style={{ display: hide ? "none" : "block" }}>
              ที่อยู่ : 109/8 ถ. สิรินธร แขวงบางบําหรุ เขตบางพลัด กรุงเทพมหานคร
              10700, Bang Phlat , Bangkok 10700
            </p>
            <button onClick={() => setHide(!hide)}>
              {hide ? "เเสดงที่อยู่" : "ซ่อนที่อยู่"}
            </button>
          </Title>

          <Title  title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ </p>
            <p>มหาลัยราชภัฏ สวนสุนันทา</p>
          </Title>
        </div>


        <div className="rightPort">
          <TitleLeft titleleft="Profile">
            <p style={{width: '800px'}}>
              ปัจจุบันศึกษาช้ันปีที่ จากมหาวิทยาลัยราชภัฏสวนสุนันทา
              คณะเทคโนโลยีสารสนเทศ
              ผมสนใจเก่ียวกับการทําโมเดลสามมิติ อยาก
              เรียนรูปจากงานเพื่อเพิ่มประสบการณเกี่ยวกับการทำโมเดลสามมิติ
              อยากลองทำโมเดลสินค้าหรือโฆษณาสินค้า โมเดลตัวละคร ฉาก
              สิ่ง ของประกอบ มีความสนใจอยากศึกษาด้านการใช้โปรแกรม
              Blender และ Zbrush เพื่อสร้างโมเดลให้มีคุณภาพยิ่งขึ้น
              จะได้นำความรูปไป ใช้นการเป็น 3D modeler ที่ดี
            </p>
          </TitleLeft>


          <TitleLeft titleleft="skill">
          <p className="titles-slikk">Communication:</p>
            <ul>
              <li>English</li>
              <li>Thai</li>
              
            </ul>

            <p className="titles-slikk">Computer Skills</p>
              <ul>
                <li>MS Word</li>
                <li>MS Excel</li>
                <li>MS Powerpoint</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>

              <p className="titles-slikk">Soft Skills</p>
              <ul>
                <li>Fast Learner</li>
                <li>Can work under pressure</li>
                <li>Team worker</li>
                <li>Adaptibility</li>
              </ul>
            
          </TitleLeft>
        </div>
      </div>



      <div >
        <h2>ข้อมูลคนในห้อง</h2>
          {data.map((record) => 
          <div key={record.code}>
          รหัสนักศึกษา: {record.code} <br /> ชื่อนักศึกษา: {record.name}
                    <hr />
           </div>
           )}
      </div>
    </>
  );
}

export default App;
