import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMythsFromPantheon } from '../../core/services/mythFetch';

const PantheonComponent = () => {
    const { pantheon } = useParams();
    const [myths, setMyths] = useState([]);

    const loadMythsByPantheon = async () => {
        const mythsData = await getMythsFromPantheon(pantheon);
        setMyths(mythsData)
    }

    useEffect(() => {
        loadMythsByPantheon();
    }, [pantheon])
  return (
    <div>
      <h1>Mitos {pantheon}:</h1>
      <div>
        {myths.length === 0 ? (
          <p>No hay</p>
        ) : (
          myths.map((myth, idx) => (
            <div key={idx}>
              <div>
                <p>Dios mayor</p>
                <p>{myth.majorGod.name}</p>
                <p>{myth.majorGod.description}</p>
              </div>
              <div>
                {myth.otherGods.length > 0 && (
                  <>
                <p>Otros dioses:</p>
                {myth.otherGods.map((god, idx) => {
                  return(
                  <div key={idx}>
                    <p>{god.name}: {god.description}</p>
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
                  </div>
                  )
                })}
                </>
              )}
              </div>
              <div>
                      {myth.monsters.length > 0 && (
                        <>
                        <p>Monstruos: </p>
                        {myth.monsters.map((monster, monsterIdx) => {
                          return (
                            <div key={monsterIdx}>
                              <p>{monster.name}: {monster.description}</p>
                            </div>
                          )
                        })}
                        </>
                      )}
                    </div>
                    <div>
                      {myth.tales.length > 0 && (
                        <>
                        <p>Mitos: </p>
                        {myth.tales.map((tale, taleIdx) => {
                          return (
                            <div key={taleIdx}>
                              <p>{tale.name}: {tale.description}</p>
                            </div>
                          )
                        })}
                        </>
                      )}
                    </div>
                    <div>
                      <p>{myth.manuscript.name}</p>
                      <p>{myth.manuscript.description}</p>
                    </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default PantheonComponent
