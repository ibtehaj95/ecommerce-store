import Image from "../components/Image";
import {getClass} from "../utils";
import React from "react";
import {Context} from "../Context";

function Photos(){

    const {allPhotos} = React.useContext(Context);
    // console.log(allPhotos);

    const imgElems = allPhotos.map((photo, i) => (
        <Image
            key={photo.id}
            img={photo}
            className={getClass(i)}
        ></Image>
    ));

    return(
        <main className="photos">
            {imgElems}
        </main>
    );
}

export default Photos;