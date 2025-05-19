import { Link } from "react-router-dom"


const PageLayout = (props) => {
    return(
        <>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
        <p>{props.paragraph}</p>
        <div className="w-lvh">
          <img
            src={props.url}
            alt={props.alt}
          />
        </div>
        <div className="flex gap-4">
          <Link to={props.toLink1}>{props.link1}</Link>
          <Link to={props.toLink2}>{props.link2}</Link>
          <Link to={props.toLink3}>{props.link3}</Link>
        </div>
      </div>
    </>
    )
}

export default PageLayout