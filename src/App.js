import {Route, Routes} from "react-router-dom";
import NavElements, {navigationElementsList} from "./components/navigationRail";
import CustomSelect from "./components/select";
import GigaChatComponent from './components/gigaChat';
import React from "react";
import bigLogo from "./assets/bigLogo.svg";
import workIcon from "./assets/workIcon.svg";
import categoryIcon from "./assets/categoryIcon.svg";
import {devWorkTypes, designWorkTypes, industriesTypes} from "./assets/selectOptions";

function App() {
  return (
      <div className="App">
        <NavElements posts={navigationElementsList}/>
          <div className="main">
              <div className="mainLogo">
                  <img src={bigLogo} alt="Logo"/>
                  ТвоёПортфолио
              </div>
              <p className="text-center">
                  Генератор случайных заданий для портфолио <span>Дизайнерам</span> и <span>Разработчикам</span>
              </p>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="design" element={<About/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
          </div>
      </div>
  );
}

export const Home = () => {
    return (
        <div>
            {/*<form action="" className="form-default">
                <CustomSelect selectedIcon={workIcon} label={'Тип работы'} options={devWorkTypes}/>
                <CustomSelect selectedIcon={categoryIcon} label={'Отрасль'} options={industriesTypes} />
                <button>Создать</button>
                <handleSendMessage />
          </form>*/}
            <GigaChatComponent/>
      </div>
  )
}
export const About = () => {
  return <div>
      This is the page where you put details about yourself
      <CustomSelect selectedIcon={workIcon} label={'Тип работы'} options={designWorkTypes}/>
      <CustomSelect selectedIcon={categoryIcon} label={'Отрасль'} options={industriesTypes}/>
  </div>
}
export const NotFound = () => {
    return <div>This is a 404 page</div>
}

export default App;