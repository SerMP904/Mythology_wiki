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
        <div className="total-myth-grid">
          {myths.map((m, idx) => {
            return (
              <div key={idx} className="pantheon-display">
                <div>
                  <p>Panteón: {m.pantheon}</p>
                </div>
                <div>
                  <p>Dios Mayor: {m.majorGod.name}</p>
                  {m.majorGod.symbols.length > 0 && (
                    <>
                    <p>Símbolos: </p>
                    {m.majorGod.symbols.map((s, majorIdx) => {
                      return (
                        <div key={majorIdx} className="symbols-display">
                          <p> {s} {idx < m.majorGod.symbols.length - 1 && ", "} </p>
                        </div>
                      );
                    })}
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
                          <p>{god.name}: </p>
                          {god.symbols.length > 0 && (
                            <>
                            <div>
                            <p>Simbolos:</p>
                            {god.symbols.map((s, godIdx) => {
                              return (
                                <div key={godIdx}>
                                  <p>{s} {godIdx < god.symbols.length - 1 && ", "}</p>
                                </div>
                              )
                            })}
                            </div>
                            </>
                          )}
                          <div>
                            <p>{god.description} </p>
                          </div>
                        </div>
                      )
                    })}
                    <div>
                      <p>Manuscrito principal: {m.manuscript}</p>
                    </div>
                    <div>
                      {m.monsters.length > 0 && (
                        <>
                        <p>Monstruos: </p>
                        {m.monsters.map((monster, monsterIdx) => {
                          return (
                            <div key={monsterIdx}>
                              <p>{monster.name}: {monster.description}</p>
                            </div>
                          )
                        })}
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
