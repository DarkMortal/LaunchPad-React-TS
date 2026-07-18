import { MapPinCheck, Fuel, Gauge, CircleDollarSign } from "lucide-react";
import CarModel from "../../../entities/Car";
import { Image, ImageSize } from "../../atoms/image/Image";
import { Button, ButtonTypes, ButtonSize } from "../../atoms/button/Button";
import {
  FlexColumnContainer,
  FlexRowContainer,
  FlexWrap,
} from "../../atoms/flex-container/flexContainer";
import ErrorBoundary from "../../atoms/error-boundary/ErrorBoundary";
import "./cardcard.scss";
import { useState } from "react";
import FallbackCard from "./FallbackCard";
import { Badge } from "../../atoms/badge/Badge";

export function CarCard({
  carImgUrl,
  carName,
  location,
  fuelType,
  mileage,
  price,
  year,
  id,
  checks,
}: CarModel) {
  const [isCarBooked, updateBooking] = useState(false);

  return (
    <ErrorBoundary
      fallback={
        <FallbackCard
          key={id}
          errorMessage={`There was some error rendering car component ${id}`}
        />
      }
    >
      <FlexColumnContainer
        key={id}
        classNames_="carCard"
        paddingLeft_={11}
        paddingRight_={11}
        paddingTop_={11}
        paddingBottom_={11}
      >
        <Image imgUrl={carImgUrl} size={ImageSize.LARGEST} onHoverZoom={true} />
        <strong>
          {carName}, {year}
        </strong>

        <FlexRowContainer columnGap_={5} flexWrap_={FlexWrap.WRAP_FLEX}>
          {checks.map((check, index) => (
            <Badge key={`car-${id} ${index}`} type={check} />
          ))}
        </FlexRowContainer>

        <FlexRowContainer columnGap_={10}>
          <FlexRowContainer columnGap_={5}>
            <MapPinCheck /> {location}
          </FlexRowContainer>
          <FlexRowContainer columnGap_={5}>
            <Fuel /> {fuelType}
          </FlexRowContainer>
        </FlexRowContainer>

        <FlexRowContainer columnGap_={10}>
          <FlexRowContainer columnGap_={5}>
            <Gauge /> {mileage}
          </FlexRowContainer>
          <FlexRowContainer columnGap_={5}>
            <CircleDollarSign /> {price.toLocaleString("en-IN")}
          </FlexRowContainer>
        </FlexRowContainer>

        <FlexRowContainer takeFullWidth={true}>
          <Button
            text={isCarBooked ? "Car booked" : "Book a ride"}
            onClickHandler={(_: any) => {
              updateBooking(true);
              alert(`Your ride is booked with ${carName}`);
            }}
            type={ButtonTypes.SUCCESS}
            size={ButtonSize.SMALL}
            takeFullWidth={true}
            isDisabled={isCarBooked}
          />
          <Button
            text="Know more"
            onClickHandler={(_: any) =>
              alert(
                `${carName} is a nice car, manufactured in the year ${year}`
              )
            }
            type={ButtonTypes.PRIMARY}
            size={ButtonSize.SMALL}
            takeFullWidth={true}
          />
        </FlexRowContainer>
      </FlexColumnContainer>
    </ErrorBoundary>
  );
}
