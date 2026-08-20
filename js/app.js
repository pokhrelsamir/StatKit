/**
 * StatKit
 * Main Application
 *
 * Handles:
 * - Dataset input
 * - Validation
 * - Statistical calculations
 * - Dataset analysis
 * - Frequency distribution
 * - Frequency chart
 * - Five-number summary
 * - Outlier detection
 * - Calculation history
 * - UI interactions
 */


/* =========================
   DOM Elements
========================= */

const dataInput =
    document.getElementById("dataInput");

const varianceType =
    document.getElementById("varianceType");

const calculateBtn =
    document.getElementById("calculateBtn");

const clearBtn =
    document.getElementById("clearBtn");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

const errorMessage =
    document.getElementById("errorMessage");

const resultsSection =
    document.getElementById("resultsSection");

const analysisSection =
    document.getElementById("analysisSection");

const summarySection =
    document.getElementById("summarySection");

const outlierSection =
    document.getElementById("outlierSection");

const historyList =
    document.getElementById("historyList");

const datasetCount =
    document.getElementById("datasetCount");


/* =========================
   Result Elements
========================= */

const countElement =
    document.getElementById("count");

const sumElement =
    document.getElementById("sum");

const meanElement =
    document.getElementById("mean");

const medianElement =
    document.getElementById("median");

const modeElement =
    document.getElementById("mode");

const minimumElement =
    document.getElementById("minimum");

const maximumElement =
    document.getElementById("maximum");

const rangeElement =
    document.getElementById("range");

const varianceElement =
    document.getElementById("variance");

const standardDeviationElement =
    document.getElementById("standardDeviation");


/* =========================
   Analysis Elements
========================= */

const sortedDataElement =
    document.getElementById("sortedData");

const uniqueValuesElement =
    document.getElementById("uniqueValues");

const q1Element =
    document.getElementById("q1");

const q3Element =
    document.getElementById("q3");

const iqrElement =
    document.getElementById("iqr");

const frequencyTable =
    document.getElementById("frequencyTable");

const frequencyChart =
    document.getElementById("frequencyChart");


/* =========================
   Five-Number Summary
========================= */

const summaryMinimum =
    document.getElementById("summaryMinimum");

const summaryQ1 =
    document.getElementById("summaryQ1");

const summaryMedian =
    document.getElementById("summaryMedian");

const summaryQ3 =
    document.getElementById("summaryQ3");

const summaryMaximum =
    document.getElementById("summaryMaximum");


/* =========================
   Summary Scale
========================= */

const scaleMinimum =
    document.getElementById("scaleMinimum");

const scaleQ1 =
    document.getElementById("scaleQ1");

const scaleMedian =
    document.getElementById("scaleMedian");

const scaleQ3 =
    document.getElementById("scaleQ3");

const scaleMaximum =
    document.getElementById("scaleMaximum");


/* =========================
   Outlier Elements
========================= */

const lowerBoundElement =
    document.getElementById("lowerBound");

const upperBoundElement =
    document.getElementById("upperBound");

const outlierCountElement =
    document.getElementById("outlierCount");

const outlierValuesElement =
    document.getElementById("outlierValues");

const outlierStatusElement =
    document.getElementById("outlierStatus");


/* =========================
   Parse Dataset
========================= */

/**
 * Convert user input into an array of numbers.
 *
 * Supports:
 * - Commas
 * - Spaces
 * - New lines
 *
 * Example:
 *
 * 10, 20, 30
 *
 * becomes:
 *
 * [10, 20, 30]
 */
function parseInput(input) {

    return input
        .split(/[\s,]+/)
        .map(value => value.trim())
        .filter(Boolean)
        .map(Number);
}


/* =========================
   Validate Dataset
========================= */

/**
 * Validate dataset values.
 */
function validateValues(values) {

    if (!values.length) {

        return "Please enter at least one number.";
    }


    if (
        values.some(
            value => !Number.isFinite(value)
        )
    ) {

        return "Please enter valid numbers only.";
    }


    return null;
}


/* =========================
   Format Numbers
========================= */

/**
 * Format numbers for clean display.
 *
 * Maximum of 4 decimal places.
 */
function formatNumber(value) {

    if (typeof value !== "number") {

        return value;
    }


    if (!Number.isFinite(value)) {

        return "—";
    }


    return Number.isInteger(value)
        ? value.toString()
        : value
            .toFixed(4)
            .replace(/0+$/, "")
            .replace(/\.$/, "");
}


/* =========================
   Display Results
========================= */

/**
 * Display main statistical results.
 */
function displayResults(results) {

    countElement.textContent =
        formatNumber(results.count);


    sumElement.textContent =
        formatNumber(results.sum);


    meanElement.textContent =
        formatNumber(results.mean);


    medianElement.textContent =
        formatNumber(results.median);


    modeElement.textContent =
        results.mode.length
            ? results.mode
                .map(formatNumber)
                .join(", ")
            : "No mode";


    minimumElement.textContent =
        formatNumber(results.minimum);


    maximumElement.textContent =
        formatNumber(results.maximum);


    rangeElement.textContent =
        formatNumber(results.range);


    varianceElement.textContent =
        formatNumber(results.variance);


    standardDeviationElement.textContent =
        formatNumber(
            results.standardDeviation
        );
}


/* =========================
   Display Dataset Analysis
========================= */

/**
 * Display additional dataset information.
 */
function displayAnalysis(values) {

    /* Sorted values */

    const sorted =
        getSortedValues(values);


    /* Unique values */

    const unique =
        getUniqueValues(values);


    /* Quartiles */

    const firstQuartile =
        getQ1(values);

    const thirdQuartile =
        getQ3(values);

    const interquartileRange =
        getIQR(values);


    /* =========================
       Sorted Data
    ========================== */

    sortedDataElement.textContent =
        sorted
            .map(formatNumber)
            .join(", ");


    /* =========================
       Unique Values
    ========================== */

    uniqueValuesElement.textContent =
        unique.length;


    /* =========================
       Quartiles
    ========================== */

    q1Element.textContent =
        formatNumber(firstQuartile);


    q3Element.textContent =
        formatNumber(thirdQuartile);


    iqrElement.textContent =
        formatNumber(
            interquartileRange
        );


    /* =========================
       Frequency Distribution
    ========================== */

    const frequencies =
        getFrequencyDistribution(values);


    frequencyTable.innerHTML =
        frequencies
            .map(item => `
                <tr>
                    <td>
                        ${formatNumber(item.value)}
                    </td>

                    <td>
                        ${item.frequency}
                    </td>
                </tr>
            `)
            .join("");


    /* =========================
       Frequency Chart
    ========================== */

    renderFrequencyChart(values);
}


/* =========================
   Frequency Chart
========================= */

/**
 * Render visual frequency distribution.
 */
function renderFrequencyChart(values) {

    const frequencies =
        getFrequencyDistribution(values);


    /* Empty dataset */

    if (!frequencies.length) {

        frequencyChart.innerHTML = "";

        return;
    }


    /* Find highest frequency */

    const maxFrequency =
        Math.max(
            ...frequencies.map(
                item => item.frequency
            )
        );


    /* Generate chart */

    frequencyChart.innerHTML =
        frequencies
            .map(item => {

                const width =
                    maxFrequency > 0
                        ? (
                            item.frequency /
                            maxFrequency
                        ) * 100
                        : 0;


                return `
                    <div class="chart-row">

                        <div class="chart-label">
                            ${formatNumber(item.value)}
                        </div>


                        <div class="chart-track">

                            <div
                                class="chart-bar"
                                style="width: ${width}%"
                            ></div>

                        </div>


                        <div class="chart-value">
                            ${item.frequency}
                        </div>

                    </div>
                `;

            })
            .join("");
}


/* =========================
   Five-Number Summary
========================= */

/**
 * Display the five-number summary:
 *
 * Minimum
 * Q1
 * Median
 * Q3
 * Maximum
 */
function displaySummary(values, results) {

    const sorted =
        getSortedValues(values);


    const minimum =
        sorted[0];


    const maximum =
        sorted[sorted.length - 1];


    const q1 =
        getQ1(values);


    const median =
        results.median;


    const q3 =
        getQ3(values);


    /* =========================
       Summary Cards
    ========================== */

    summaryMinimum.textContent =
        formatNumber(minimum);


    summaryQ1.textContent =
        formatNumber(q1);


    summaryMedian.textContent =
        formatNumber(median);


    summaryQ3.textContent =
        formatNumber(q3);


    summaryMaximum.textContent =
        formatNumber(maximum);


    /* =========================
       Scale Values
    ========================== */

    scaleMinimum.textContent =
        formatNumber(minimum);


    scaleQ1.textContent =
        formatNumber(q1);


    scaleMedian.textContent =
        formatNumber(median);


    scaleQ3.textContent =
        formatNumber(q3);


    scaleMaximum.textContent =
        formatNumber(maximum);


    /* =========================
       Scale Data Attributes
    ========================== */

    const points = [

        [scaleMinimum, minimum],

        [scaleQ1, q1],

        [scaleMedian, median],

        [scaleQ3, q3],

        [scaleMaximum, maximum]

    ];


    points.forEach(
        ([element, value]) => {

            element.setAttribute(
                "data-value",
                formatNumber(value)
            );

        }
    );
}


/* =========================
   Outlier Detection
========================= */

/**
 * Detect outliers using the IQR method.
 *
 * IQR = Q3 - Q1
 *
 * Lower Bound = Q1 - 1.5 × IQR
 *
 * Upper Bound = Q3 + 1.5 × IQR
 */
function displayOutliers(values) {

    const q1 =
        getQ1(values);


    const q3 =
        getQ3(values);


    const iqr =
        q3 - q1;


    const lowerBound =
        q1 - (1.5 * iqr);


    const upperBound =
        q3 + (1.5 * iqr);


    /* =========================
       Find Outliers
    ========================== */

    const outliers =
        values.filter(
            value =>
                value < lowerBound ||
                value > upperBound
        );


    /* =========================
       Display Bounds
    ========================== */

    lowerBoundElement.textContent =
        formatNumber(lowerBound);


    upperBoundElement.textContent =
        formatNumber(upperBound);


    /* =========================
       Display Count
    ========================== */

    outlierCountElement.textContent =
        outliers.length;


    /* =========================
       Display Values
    ========================== */

    if (!outliers.length) {

        outlierValuesElement.textContent =
            "No outliers detected.";

    } else {

        outlierValuesElement.textContent =
            outliers
                .map(formatNumber)
                .join(", ");
    }


    /* =========================
       Status
    ========================== */

    if (!outliers.length) {

        outlierStatusElement.textContent =
            "✓ No outliers detected.";

        outlierStatusElement.classList.remove(
            "has-outliers"
        );

    } else {

        outlierStatusElement.textContent =
            `⚠ ${outliers.length} outlier${
                outliers.length !== 1
                    ? "s"
                    : ""
            } detected.`;

        outlierStatusElement.classList.add(
            "has-outliers"
        );
    }
}


/* =========================
   Show Results
========================= */

/**
 * Display all calculation sections.
 */
function showResults() {

    resultsSection.classList.remove(
        "hidden"
    );

    analysisSection.classList.remove(
        "hidden"
    );

    summarySection.classList.remove(
        "hidden"
    );

    outlierSection.classList.remove(
        "hidden"
    );
}


/* =========================
   Hide Results
========================= */

/**
 * Hide all calculation sections.
 */
function hideResults() {

    resultsSection.classList.add(
        "hidden"
    );

    analysisSection.classList.add(
        "hidden"
    );

    summarySection.classList.add(
        "hidden"
    );

    outlierSection.classList.add(
        "hidden"
    );
}


/* =========================
   Calculate Dataset
========================= */

/**
 * Perform complete statistical calculation.
 */
function calculateDataset() {

    /* Clear previous error */

    errorMessage.textContent = "";


    /* Parse dataset */

    const values =
        parseInput(dataInput.value);


    /* Validate dataset */

    const error =
        validateValues(values);


    if (error) {

        errorMessage.textContent =
            error;

        hideResults();

        return;
    }


    /* Get variance type */

    const type =
        varianceType.value;


    /* Calculate statistics */

    const results =
        calculateStatistics(
            values,
            type
        );


    /* =========================
       Display Results
    ========================== */

    displayResults(results);


    displayAnalysis(values);


    displaySummary(
        values,
        results
    );


    displayOutliers(values);
    renderBoxPlot(values);


    /* =========================
       Show Sections
    ========================== */

    showResults();


    /* =========================
       Dataset Count
    ========================== */

    datasetCount.textContent =
        `${values.length} value${
            values.length !== 1
                ? "s"
                : ""
        }`;


    /* =========================
       Save History
    ========================== */

    saveHistory(
        values,
        results,
        type
    );


    /* =========================
       Refresh History
    ========================== */

    renderHistory();
}


/* =========================
   Clear Dataset
========================= */

/**
 * Clear current dataset and results.
 */
function clearDataset() {

    dataInput.value = "";

    errorMessage.textContent = "";

    datasetCount.textContent = "";

    hideResults();

    dataInput.focus();
}


/* =========================
   Render History
========================= */

/**
 * Render saved calculations.
 */
function renderHistory() {

    const history =
        getHistory();


    /* Empty state */

    if (!history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                No calculations yet.
            </div>
        `;

        return;
    }


    /* Generate history */

    historyList.innerHTML =
        history
            .map(item => {

                const date =
                    new Date(
                        item.createdAt
                    );


                const preview =
                    item.values
                        .slice(0, 8)
                        .map(formatNumber)
                        .join(", ");


                return `
                    <div class="history-item">

                        <div class="history-info">

                            <strong>
                                ${preview}
                                ${
                                    item.values.length > 8
                                        ? "..."
                                        : ""
                                }
                            </strong>


                            <span>
                                ${item.type} •
                                ${date.toLocaleString()}
                            </span>

                        </div>


                        <button
                            class="delete-history"
                            data-id="${item.id}"
                            type="button"
                        >
                            Delete
                        </button>

                    </div>
                `;

            })
            .join("");


    /* =========================
       Delete Buttons
    ========================== */

    document
        .querySelectorAll(
            ".delete-history"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );


                    deleteHistory(id);


                    renderHistory();
                }
            );

        });
}


/* =========================
   Clear History
========================= */

/**
 * Delete all saved calculations.
 */
function handleClearHistory() {

    const history =
        getHistory();


    if (!history.length) {

        return;
    }


    clearHistory();

    renderHistory();
}


/* =========================
   Event Listeners
========================= */


/* Calculate */

calculateBtn.addEventListener(
    "click",
    calculateDataset
);


/* Clear Dataset */

clearBtn.addEventListener(
    "click",
    clearDataset
);


/* Clear History */

clearHistoryBtn.addEventListener(
    "click",
    handleClearHistory
);


/* =========================
   Ctrl + Enter
========================= */

dataInput.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            calculateDataset();
        }

    }
);


/* =========================
   Initialize Application
========================= */

renderHistory();



/* =========================
   Box Plot Elements
========================= */

const boxPlotSection =
    document.getElementById("boxPlotSection");

const boxPlot =
    document.getElementById("boxPlot");

const boxMinimum =
    document.getElementById("boxMinimum");

const boxQ1 =
    document.getElementById("boxQ1");

const boxMedian =
    document.getElementById("boxMedian");

const boxQ3 =
    document.getElementById("boxQ3");

const boxMaximum =
    document.getElementById("boxMaximum");

const boxIQR =
    document.getElementById("boxIQR");


    /* =========================
   Box Plot
========================= */

/**
 * Render a visual box plot.
 *
 * Uses:
 * - Minimum
 * - Q1
 * - Median
 * - Q3
 * - Maximum
 *
 * Outliers are displayed separately.
 */
function renderBoxPlot(values) {

    if (!values.length) {

        boxPlot.innerHTML = "";

        boxPlotSection.classList.add(
            "hidden"
        );

        return;
    }


    /* =========================
       Calculate Values
    ========================== */

    const sorted =
        getSortedValues(values);


    const minimum =
        sorted[0];


    const maximum =
        sorted[sorted.length - 1];


    const q1 =
        getQ1(values);


    const median =
        getMedianForBoxPlot(values);


    const q3 =
        getQ3(values);


    const iqr =
        q3 - q1;


    /* =========================
       Outlier Bounds
    ========================== */

    const lowerBound =
        q1 - (1.5 * iqr);


    const upperBound =
        q3 + (1.5 * iqr);


    /* =========================
       Find Outliers
    ========================== */

    const outliers =
        values.filter(
            value =>
                value < lowerBound ||
                value > upperBound
        );


    /* =========================
       Display Values
    ========================== */

    boxMinimum.textContent =
        formatNumber(minimum);


    boxQ1.textContent =
        formatNumber(q1);


    boxMedian.textContent =
        formatNumber(median);


    boxQ3.textContent =
        formatNumber(q3);


    boxMaximum.textContent =
        formatNumber(maximum);


    boxIQR.textContent =
        formatNumber(iqr);


    /* =========================
       Handle Constant Dataset
    ========================== */

    if (minimum === maximum) {

        boxPlot.innerHTML = `
            <div class="box-plot-constant">

                <span class="box-plot-point">
                    ${formatNumber(minimum)}
                </span>

                <span>
                    All values are identical.
                </span>

            </div>
        `;

        boxPlotSection.classList.remove(
            "hidden"
        );

        return;
    }


    /* =========================
       Plot Range
    ========================== */

    const range =
        maximum - minimum;


    const padding =
        range * 0.05;


    const plotMinimum =
        minimum - padding;


    const plotMaximum =
        maximum + padding;


    const plotRange =
        plotMaximum - plotMinimum;


    /* =========================
       Convert Value → Position
    ========================== */

    function getPosition(value) {

        return (
            (value - plotMinimum) /
            plotRange
        ) * 100;
    }


    const q1Position =
        getPosition(q1);


    const medianPosition =
        getPosition(median);


    const q3Position =
        getPosition(q3);


    const minimumPosition =
        getPosition(minimum);


    const maximumPosition =
        getPosition(maximum);


    /* =========================
       Outlier Markers
    ========================== */

    const outlierMarkup =
        outliers
            .map(value => {

                const position =
                    getPosition(value);

                return `
                    <div
                        class="box-outlier"
                        style="left: ${position}%"
                        title="Outlier: ${formatNumber(value)}"
                    >
                        ●
                    </div>
                `;

            })
            .join("");


    /* =========================
       Render Plot
    ========================== */

    boxPlot.innerHTML = `

        <div class="box-plot-axis">

            <!-- Whisker -->

            <div
                class="box-whisker"
                style="
                    left: ${minimumPosition}%;
                    width: ${
                        maximumPosition -
                        minimumPosition
                    }%;
                "
            ></div>


            <!-- Minimum Whisker -->

            <div
                class="box-whisker-cap"
                style="
                    left: ${minimumPosition}%;
                "
            ></div>


            <!-- Maximum Whisker -->

            <div
                class="box-whisker-cap"
                style="
                    left: ${maximumPosition}%;
                "
            ></div>


            <!-- Box -->

            <div
                class="box-plot-box"
                style="
                    left: ${q1Position}%;
                    width: ${
                        q3Position -
                        q1Position
                    }%;
                "
            >

                <!-- Median -->

                <div
                    class="box-median"
                    style="
                        left: ${
                            (
                                (
                                    median -
                                    q1
                                ) /
                                (
                                    q3 -
                                    q1
                                )
                            ) * 100
                        }%;
                    "
                ></div>

            </div>


            <!-- Outliers -->

            ${outlierMarkup}

        </div>


        <!-- Axis Labels -->

        <div class="box-plot-labels">

            <span
                style="
                    left: ${minimumPosition}%;
                "
            >
                ${formatNumber(minimum)}
            </span>


            <span
                style="
                    left: ${q1Position}%;
                "
            >
                ${formatNumber(q1)}
            </span>


            <span
                style="
                    left: ${medianPosition}%;
                "
            >
                ${formatNumber(median)}
            </span>


            <span
                style="
                    left: ${q3Position}%;
                "
            >
                ${formatNumber(q3)}
            </span>


            <span
                style="
                    left: ${maximumPosition}%;
                "
            >
                ${formatNumber(maximum)}
            </span>

        </div>

    `;


    /* =========================
       Show Section
    ========================== */

    boxPlotSection.classList.remove(
        "hidden"
    );
}



/* =========================
   Box Plot Median
========================= */

function getMedianForBoxPlot(values) {

    const sorted =
        getSortedValues(values);

    const length =
        sorted.length;


    const middle =
        Math.floor(length / 2);


    if (length % 2 === 0) {

        return (
            sorted[middle - 1] +
            sorted[middle]
        ) / 2;
    }


    return sorted[middle];
}