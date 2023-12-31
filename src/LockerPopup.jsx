// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Popup } from "react-map-gl/maplibre";

// A popup containing locker details
export default ({ locker: { latitude, longitude }, onClose }) => (
  // See https://visgl.github.io/react-map-gl/docs/api-reference/popup
  <Popup
    latitude={latitude}
    longitude={longitude}
    // offset the popup so that it attaches to the top of the pushpin
    offset={[0, -36]}
    closeButton
    closeOnClick
    onClose={onClose}
    anchor="bottom"
  >
    <>
    <h3 style={{ color: 'black' }}> On Route: {latitude.toFixed(2)}, {longitude.toFixed(2)} </h3>
    </>
  </Popup>
);
