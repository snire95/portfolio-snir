
import"./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState ,useEffect } from "react";
import {
  webPortfolio,designPortfolio,wixPortfolio
} from "../../data"


export default function Protfolio() {
  const [selected, setSelected] = useState("web")
  const [data , setData] = useState([])

  const list=[
    {
      id:"web",
      title:"Web App"
    },
    {
      id:"disign",
      title:"Disign"
    },
    {
      id:"Wix",
      title:"Wix App"
    },
  ];
useEffect(() => {
  switch(selected){
    case "web":
      setData(webPortfolio)
      break
    case "disign":
      setData(designPortfolio)
      break    
    case "Wix":
      setData(wixPortfolio)
      break
    default:  
      setData(webPortfolio)

  }

}, [selected])
  return (
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      {list.map(item => (
        <PortfolioList 
        title={item.title} 
        active ={selected === item.id}
        setSelected={setSelected}
        id = {item.id}
        />
      ))}

    </ul>
    <div className="container">
      {data.map((d) => (
        <a href={d.url} target="_blank" rel="noreferrer">
        <div className="item">
          <img src={d.img} alt=" "/>
          <h3>{d.title}</h3>
        </div> 
      </a> 

      ))}
      

    </div>
  </div>
  )
}
