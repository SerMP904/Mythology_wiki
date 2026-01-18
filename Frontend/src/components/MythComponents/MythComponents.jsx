import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyths } from "../../core/services/mythFetch";
import { loadMythAction } from "./MythComponentAction";
import { useNavigate } from "react-router-dom";

const MythComponents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { myths, mythsSelected } = useSelector(
    (state) => state.mythComponentReducer
  );
  const loadMyths = async () => {
    const auxData = await getAllMyths();
    dispatch(loadMythAction(auxData));
  };


  const pantheonClick = (pantheon) => {
      console.log(pantheon)
      navigate(`${pantheon}`)
    }

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
        <div className="total-myth-grid">
          {myths.map((m, idx) => {
            return (
              <div key={idx} className="myth-display" onClick={() => pantheonClick(m.pantheon)}>
                <div className="myth-name">
                  <p>{m.pantheon}</p>
                </div>
                <div className="myth-major-god">
                  <p>Dios Mayor: {m.majorGod.name}</p>
                  {m.majorGod.symbols.length > 0 && (
                    <>
                    <p>Símbolos asociados: </p>
                    <div className="myth-symbols-display">
                    {m.majorGod.symbols.map((s, majorIdx) => {
                      return (
                        <div key={majorIdx} className="myth-symbols-display-individual">
                          <p>{s}</p>
                        </div>
                      );
                    })}
                    </div>
                    </>
                    )}
                  <div>
                    <p>{m.majorGod.description}</p>
                  </div>
                </div>
                    <div className="myth-manuscript-div">
                      <p>Manuscrito principal: <span className="myth-manuscript-name">{m.manuscript.name}</span></p>
                    </div> 
                    <div className="myth-representation">
                      <img className="myth-representation-img"
                    src={m.representation}
                    alt={m.majorGod.name}
                  />
                    </div>
              </div>
            );
          })}
          </div>
        </>
      )}
    </div>
  );
};

export default MythComponents;
