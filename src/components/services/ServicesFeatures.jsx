import { GlobalIcon } from "../global/GlobalIcon";


export const ServicesFeatures = () => {
    const features = [
        "Virtual Vehicle Tours",
        "Live Chat Assitance",
        "Online Financing Application",
      ];

  return (
    <ul>
        {features.map((feature)=>(
            <ServicesFeature feature={feature} key={feature}/>
        ))}
    </ul>
  )
}

const ServicesFeature = ({feature}) => {
    return (
        <li>
            <div>
                <GlobalIcon type="check"/>
            </div>
        </li>
    )
}