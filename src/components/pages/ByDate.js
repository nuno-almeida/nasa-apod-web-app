import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import APODContainer from "../utils/APODContainer";
import useQuery, { QueryType } from "../../hooks/useQuery";

const ByDate = () => {
  const [urlParams, setUrlParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const date = urlParams.get("d");

  const { isLoading, error, image } = useQuery({
    type: QueryType.ByDate,
    date,
  });

  const onSelectHandler = (date) => {
    setUrlParams((params) => ({...params, d: new Date(date).toISOString().split("T")[0]}));
    setOpen(false);
  };

  return (
    <APODContainer
      isLoading={isLoading}
      error={error}
      image={image}
      showMainContent={!!date}
      renderAtTop={
        <DatePicker
          dateFormat="yyyy-MM-dd"
          maxDate={new Date()}
          minDate={new Date("1995-06-16")}
          placeholderText="Select date ..."
          selected={date && new Date(date)}
          onSelect={(d) => onSelectHandler(d)}
          showIcon
          showYearDropdown
          showMonthDropdown
          showPopperArrow={false}
          readOnly={true}
          open={open}
          onInputClick={() => setOpen(true)}
        />
      }
    />
  );
};

export default ByDate;
