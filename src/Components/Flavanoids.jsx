import React, { useEffect, useState } from 'react'
import './utils.css';
import * as WineData from './Wine-Data.json';
import { median, mode } from './helper/util';
// import { json } from 'react-router-dom'; 


const Flavanoids = () => {

    const [processedData, setProcessedData] = useState({
        mean: [],
        median: [],
        mode: []
    });

    function calculateMean(el) {
        let sum = 0;
        el.forEach((value) => {
            sum += Number(value);
        })
        return sum / el.length;

    }

    function calculateMedian(sortedArray) {
        //let median= el[0];
        if (sortedArray.length % 2 === 0) {
            return (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2;
        }
        return sortedArray[(sortedArray.length - 1) / 2];
    }

    //for Mode
    function calculateMode(sortedArray) {
        let mode = 0;
        let max = 0;
        let count = 0;
        for (let i = 0; i < sortedArray.length - 1; i++) {
            var current = sortedArray[i];
            var next = sortedArray[i + 1];
            if (current === next) {
                count++;
            } else {
                if (max < count) {
                    max = count;
                    mode = current;
                }
                count = 0;
            }
        }
        return mode;
    }

    const getClass = () => {
        let classData = {};
        Object.values(WineData).forEach((el) => {
            const alcoholClass = el?.Alcohol;
            if (typeof alcoholClass != 'undefined') {
                if ( !classData[alcoholClass]) {
                    classData[alcoholClass] = []
                }
                classData[alcoholClass].push(el.Flavanoids);
            }
        })
        return classData;
    };

    const dataProcessing = (classData) => {
        let obj = {
            FlavanoidsMean: [],
            FlavanoidsMedian: [],
            FlavanoidsMode: [],
        };

        // setProcessedData(JSON.stringify(stats));
        // console.log(el)

        Object.values(classData).forEach((el) => {
            let sortedArray = el.sort((a, b) => a - b);
            obj.FlavanoidsMean.push(calculateMean(el));
            obj.FlavanoidsMedian.push(calculateMedian(sortedArray));
            obj.FlavanoidsMode.push(calculateMode(sortedArray));
        });
        setProcessedData(obj);
    }

    useEffect(() => {
        const classData = getClass();
        // console.log(classData[3])
        dataProcessing(classData)
    }, []);

    return (
        <div>
            <table className='table'>
                <tbody>
                    <tr>
                        <th className='tableHeading'>Measures</th>
                        <th>Class 1</th>
                        <th>Class 2</th>
                        <th>Class 3</th>
                    </tr>
                    {Object.keys(processedData).map((data, index) => (
                        <tr key={index}>
                            <th>{data}</th>
                            {processedData[data].map((value, index) => (
                                <td key={index}>{value.toFixed(3)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Flavanoids;