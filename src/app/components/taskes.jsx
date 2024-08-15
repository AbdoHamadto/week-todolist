import MapTaskesClient from "../client/tasks";

const MapTaskes = () => {

  return(
    <div className="grid grid-cols-4 gap-5 w-11/12 mx-auto">
      <MapTaskesClient />
    </div>
  )
}

export default MapTaskes;