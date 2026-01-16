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
              <div key={idx} className="pantheon-display" onClick={() => pantheonClick(m.pantheon)}>
                <div className="pantheon-name">
                  <p>{m.pantheon}</p>
                </div>
                <div className="pantheon-major-god">
                  <p>Dios Mayor: {m.majorGod.name}</p>
                  {m.majorGod.symbols.length > 0 && (
                    <>
                    <p>Símbolos: </p>
                    <div className="symbols-display">
                    {m.majorGod.symbols.map((s, majorIdx) => {
                      return (
                        <div key={majorIdx} className="symbols-display-individual">
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
                <div>
                  {m.otherGods.length > 0 && (
                    <>
                    <p>Otros dioses: </p>
                    {m.otherGods.map((god, idx) => {
                      return (
                        <div key={idx} className="other-gods-display">
                          <div>
                          <p>{god.name}: </p>
                          </div>
                          {god.symbols.length > 0 && (
                            <>
                            <p>Simbolos:</p>
                            <div className="symbols-display">
                            {god.symbols.map((s, godIdx) => {
                              return (
                                <div key={godIdx} className="symbols-display-individual">
                                  <p>{s}</p>
                                </div>
                              )
                            })}
                            </div>
                            </>
                          )}
                        </div>
                      )
                    })}
                    <div className="manuscript-div">
                      <p>Manuscrito principal: <span className="manuscript-name">{m.manuscript.name}</span></p>
                    </div>
                    <div className="monsters-div">
                      {m.monsters.length > 0 && (
                        <>
                        <p>Monstruos: </p>
                        <div className="monsters-grid">
                        {m.monsters.map((monster, monsterIdx) => {
                          return (
                            <div key={monsterIdx} className="monsters-cell">
                              <p>{monster.name}</p>
                            </div>
                          )
                        })}
                        </div>
                        </>
                      )}
                    </div>
                    </>
                  )}
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
