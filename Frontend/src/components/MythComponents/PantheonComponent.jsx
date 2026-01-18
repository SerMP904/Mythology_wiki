import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMythsFromPantheon } from "../../core/services/mythFetch";

const PantheonComponent = () => {
  const { pantheon } = useParams();
  const [myths, setMyths] = useState([]);

  const loadMythsByPantheon = async () => {
    const mythsData = await getMythsFromPantheon(pantheon);
    setMyths(mythsData);
    console.log(mythsData);
  };

  useEffect(() => {
    loadMythsByPantheon();
  }, [pantheon]);

  return (
    <div className="pantheon-main">
      <h1 className="pantheon-main-title">Mitos {pantheon}:</h1>
      <div>
        {myths.length === 0 ? (
          <p>No hay</p>
        ) : (
          myths.map((myth, idx) => (
            <div key={idx} className="pantheon-display">
              <div className="pantheon-major-god">
                <h2 className="pantheon-major-god-title">
                  Dios mayor: {myth.majorGod.name}
                </h2>
                <div className="pantheon-major-god-info">
                  <p className="pantheon-major-god-desc">
                    {myth.majorGod.description}
                  </p>
                  <img
                    className="pantheon-major-god-portrait"
                    src={myth.majorGod.portrait}
                    alt={myth.majorGod.name}
                  />
                </div>
              </div>
              <div className="pantheon-other-gods-display">
                {myth.otherGods.length > 0 && (
                  <>
                    {myth.otherGods.map((god, idx) => {
                      return (
                        <div
                          key={idx}
                          className="pantheon-other-god-presentation"
                        >
                          <div className="pantheon-other-god-presentation-visual">
                            <h3 className="pantheon-other-god-name">
                              {god.name}
                            </h3>
                            <img
                              src={god.portrait}
                              alt={god.name}
                              className="pantheon-other-god-portrait"
                            />
                          </div>
                          <div className="pantheon-other-god-info">
                            <p className="pantheon-other-god-desc">
                              {god.description}
                            </p>
                            <p className="pantheon-other-god-symbol-title">
                              Algunos símbolos a los que se le asocia:
                            </p>
                            <div className="pantheon-symbols-display">
                              {god.symbols.map((s, godIdx) => {
                                return (
                                  <div
                                    key={godIdx}
                                    className="pantheon-symbols-display-individual"
                                  >
                                    <p>{s}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
              <div className="pantheon-manuscript-display">
                <p className="pantheon-manuscript-name">{myth.manuscript.name}</p>
                <p className="pantheon-manuscript-desc">{myth.manuscript.description}</p>
              </div>
              <div className="pantheon-facts">
              <div className="pantheon-monsters-div">
                {myth.monsters.length > 0 && (
                  <>
                    <p>Monstruos: </p>
                    {myth.monsters.map((monster, monsterIdx) => {
                      return (
                        <div key={monsterIdx}>
                          <p>
                            {monster.name}: {monster.description}
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
              <div>
                {myth.tales.length > 0 && (
                  <>
                    <div className="pantheon-tales-div">
                      <p>Mitos: </p>
                      {myth.tales.map((tale, taleIdx) => {
                        return (
                          <div key={taleIdx}>
                            <p>
                              {tale.name}: {tale.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PantheonComponent;
