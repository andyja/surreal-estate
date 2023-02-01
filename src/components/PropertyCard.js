import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faSterlingSign,
    faHouse,
    faEnvelope,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const PropertyCard = ({
    _id,
    title,
    type,
    bathrooms,
    price,
    city,
    email,

}) => {

    const [savedIcon, setSavedIcon] = useState(emptyHeart)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/Favourite")
        .then(resp) => 
    console.log(resp)  

})
}

export default PropertyCard;
