import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';

const CastList = ({casts,title}) => {

    const filter=casts?.filter((cast)=>cast.profile_path).slice(0,10);
  return (
    <div className="w-10/12 mx-auto text-white">
      {filter && (
        <>
        <p className="p-2 m-2 text-2xl  font-bold">{filter.lengh!==0 ? title :""}</p>
        <div className=" flex w-full flex-row flex-wrap">
          {filter.map((cast) => {
            return (
              <Link to={"/person/"+cast.id } key={cast.id}>
                <div className="mx-auto w-44 p-1 m-2">
                  <img
                    className="rounded-lg"
                    src={IMG_CDN + cast.profile_path}
                    alt="cast"
                  />
                  <p className="text-center hover:underline">{cast.name}</p>
                  <p className="text-center text-sm">{cast.character}</p>
                </div>
                </Link>
            );
          }
          )}
        </div>
        </>
      )}
    </div>
  )
}

export default CastList
