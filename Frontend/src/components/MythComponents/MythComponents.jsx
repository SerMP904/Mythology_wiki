import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyths } from "../../core/services/mythFetch";
import { loadMythAction } from "./MythComponentAction";

const MythComponents = () => {
  const dispatch = useDispatch();
  const { myths, mythsSelected } = useSelector(
    (state) => state.mythComponentReducer
  );
  const loadMyths = async () => {
    const auxData = await getAllMyths();
    dispatch(loadMythAction(auxData));
  };

  useEffect(() => {
    loadMyths();
    console.log(loadMyths());
  }, [dispatch]);

  return (
    <div>
      {!myths || myths.length === 0 ? (
        <h2>cargando datos</h2>
      ) : (
        <>
          {myths.map((m, idx) => {
            return(
            <div key={idx}>
              <p>
                {m.pantheon}, {m.manuscript}, {m.majorGods[0].name} y {m.monsters[0].name}: {m.monsters[0].description}
              </p>
            </div>);
          })}
        </>
      )}
    </div>
  );
};

export default MythComponents;
