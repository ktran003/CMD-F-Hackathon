import axios from 'axios';
import './CohereSummary.css'
import React, { useEffect, useState } from 'react';

let options = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/summarize',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
    },
    data: {
        length: 'medium',
        format: 'paragraph',
        model: 'summarize-xlarge',
        extractiveness: 'low',
        temperature: 0.3,
        text: null
        // text: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.\n\nThe meaning of the name "ice cream" varies from one country to another. In some countries, such as the United States, "ice cream" applies only to a specific variety, and most governments regulate the commercial use of the various terms according to the relative quantities of the main ingredients, notably the amount of cream. Products that do not meet the criteria to be called ice cream are sometimes labelled "frozen dairy dessert" instead. In other countries, such as Italy and Argentina, one word is used fo\r all variants. Analogues made from dairy alternatives, such as goat\'s or sheep\'s milk, or milk substitutes (e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are lactose intolerant, allergic to dairy protein or vegan.'
    }
};

// async function fetchSummaryData() {
//     const summaryData = await axios
//             .request(options)
//             .then(function (response) {
//                 console.log(response.data);
//                 return response.data;
//             })
//             .catch(function (error) {
//                 console.error(error);
//                 return;
//             });
//     return summaryData;
// }

export default function CohereSummary(textToSummarize) {
    console.log(textToSummarize)
    // const [summaryData, setSummaryData] = useState(null);
    // console.log(summaryData);
    // const replaced = setTextInOptions(textToSummarize);

    let out = '';

    axios
            .request(setTextInOptions(textToSummarize))
            .then(function (response) {
                console.log(response.data);
                out = response.data
            })
            .catch(function (error) {
                console.error(error);
            });

    // useEffect(() => {
    //     console.log("isnull?" + summaryData == null)
    //     console.log("notnull" + summaryData !== null)

    //     let options = {
    //         method: 'POST',
    //         url: 'https://api.cohere.ai/v1/summarize',
    //         headers: {
    //             accept: 'application/json',
    //             'content-type': 'application/json',
    //             authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
    //         },
    //         data: {
    //             length: 'medium',
    //             format: 'paragraph',
    //             model: 'summarize-xlarge',
    //             extractiveness: 'low',
    //             temperature: 0.3,
    //             text: textToSummarize
    //             // text: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.\n\nThe meaning of the name "ice cream" varies from one country to another. In some countries, such as the United States, "ice cream" applies only to a specific variety, and most governments regulate the commercial use of the various terms according to the relative quantities of the main ingredients, notably the amount of cream. Products that do not meet the criteria to be called ice cream are sometimes labelled "frozen dairy dessert" instead. In other countries, such as Italy and Argentina, one word is used fo\r all variants. Analogues made from dairy alternatives, such as goat\'s or sheep\'s milk, or milk substitutes (e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are lactose intolerant, allergic to dairy protein or vegan.'
    //         }
    //     };

    //     if (!summaryData) {
    //         axios
    //         .request(options)
    //         .then(function (response) {
    //             console.log(response.data);
    //             setSummaryData(response.data)
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    //     }
    // }, [])

    // console.log(summaryData?.summary);
    console.log(out.summary)
    return (
        <div className="cohere-div">
            {out.summary}
        </div>
    )
}

export function setTextInOptions(textToSummarize) {
    options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/summarize',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
        },
        data: {
            length: 'medium',
            format: 'paragraph',
            model: 'summarize-xlarge',
            extractiveness: 'low',
            temperature: 0.3,
            text: textToSummarize
            // text: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.\n\nThe meaning of the name "ice cream" varies from one country to another. In some countries, such as the United States, "ice cream" applies only to a specific variety, and most governments regulate the commercial use of the various terms according to the relative quantities of the main ingredients, notably the amount of cream. Products that do not meet the criteria to be called ice cream are sometimes labelled "frozen dairy dessert" instead. In other countries, such as Italy and Argentina, one word is used fo\r all variants. Analogues made from dairy alternatives, such as goat\'s or sheep\'s milk, or milk substitutes (e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are lactose intolerant, allergic to dairy protein or vegan.'
        }
    };
    return options
}