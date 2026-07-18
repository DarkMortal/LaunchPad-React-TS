import { CarCard } from "../../molecules/CarCard/CarCard";
import {
  FlexRowContainer,
  FlexWrap,
  ROW_MAIN_AXIS_ALIGNMENT,
} from "../../atoms/flex-container/flexContainer";
import cars from "../../../cars.json";
import "./carlist.scss";

function CarCardList() {
  return (
    <div className="cover-content" style={{ width: "100%" }}>
      <FlexRowContainer
        classNames_="carList"
        columnGap_={12}
        flexWrap_={FlexWrap.WRAP_FLEX}
        mainAxisAlignment={ROW_MAIN_AXIS_ALIGNMENT.CENTER}
      >
        {cars.map((car) => (
          <CarCard
            id={car.id}
            carImgUrl={car.carImgUrl}
            carName={car.carName}
            location={car.location}
            fuelType={car.fuelType}
            mileage={car.mileage}
            price={car.price}
            year={car.year}
            checks={car.checks}
          />
        ))}
      </FlexRowContainer>
    </div>
  );
}
export default CarCardList;
