import React, { useEffect, useState } from 'react'
import './utils.css';
import * as WineData from './Wine-Data.json';
import { median, mode } from './helper/util';
// import { json } from 'react-router-dom'; 

const Gamma = () => {

    const [processedData, setProcessedData] = useState({
        mean: [],
        median: [],
        mode: []
    });

    function calculateMean(el) {
        // console.log(el)
        let sum = 0;
        el.forEach((value) => {
            sum += value;
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
        let count = 1; // Initialize count to 1 for the first element
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] === sortedArray[i + 1]) {
                count++;
            } else {
                if (count > max) {
                    max = count;
                    mode = sortedArray[i];
                }
                count = 1; // Reset count for the next element
            }

        }
        return mode;
    }

    const calculateGamma = (el) => {
        return (el.Ash * el.Hue) / el.Magnesium;
    }

    const getClass = () => {
        let classData = {};
        Object.values(WineData).forEach((el) => {
            let alcoholClass = el?.Alcohol;
            if (typeof alcoholClass != 'undefined') {
                if (!classData[alcoholClass]) {
                    classData[alcoholClass] = [];
                }
                const gammaReading = calculateGamma(el);
                classData[alcoholClass].push(gammaReading);
            }
        })
        return classData;
    };

    const dataProcessing = (classData) => {

        let obj = {
            GammaMean: [],
            GammaMedian: [],
            GammaMode: [],
        };

        Object.values(classData).forEach((el) => {
            // console.log(el)
            let sortedArray = el.sort((a, b) => a - b);
            obj.GammaMean.push(calculateMean(el));
            obj.GammaMedian.push(calculateMedian(sortedArray));
            obj.GammaMode.push(calculateMode(sortedArray));
        });
        setProcessedData(obj);
    }

    useEffect(() => {
        const classData = getClass();
        dataProcessing(classData)
        // console.log(JSON.stringify(getClass()));

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


export default Gamma;