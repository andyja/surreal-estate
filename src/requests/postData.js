import axios from "axios";

const postData = (fields, setAlert) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", fields)
    .then((resp) => {
      console.log(resp);
      setAlert({
        message: "Property Added",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Error, please try again later.",
        isSuccess: false,
      });
    });
};

export default postData;
