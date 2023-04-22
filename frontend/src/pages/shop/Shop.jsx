import React from "react";

import Pricing from "./Pricing";
import { pricing } from "../../data";


export const Shop = () => {
    // destructure pricing
  const { icon, title, plans } = pricing;
    return (
        <Pricing pricing={pricing} />
    );
};