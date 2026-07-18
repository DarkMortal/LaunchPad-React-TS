import {
  FlexColumnContainer,
  COLUMN_MAIN_AXIS_ALIGNMENT,
  COLUMN_CROSS_AXIS_ALIGNMENT,
} from "../../components/atoms/flex-container/flexContainer";

export default function Page404() {
  return (
    <div className="cover-content">
      <FlexColumnContainer
        takeFullHeight={true}
        crossAxisAlignment={COLUMN_CROSS_AXIS_ALIGNMENT.CENTER}
        mainAxisAlignment={COLUMN_MAIN_AXIS_ALIGNMENT.CENTER}
      >
        <h3>404 | Page not found</h3>
      </FlexColumnContainer>
    </div>
  );
}
