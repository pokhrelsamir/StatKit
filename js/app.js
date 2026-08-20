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
 * - Percentile analysis
 * - Z-score analysis
 * - Outlier detection
 * - Box Plot
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

const percentileSection =
    document.getElementById("percentileSection");

const zScoreSection =
    document.getElementById("zScoreSection");

const outlierSection =
    document.getElementById("outlierSection");

const boxPlotSection =
    document.getElementById("boxPlotSection");

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
   Percentile Elements
========================= */

const p10Element =
    document.getElementById("p10");

const p25Element =
    document.getElementById("p25");

const p50Element =
    document.getElementById("p50");

const p75Element =
    document.getElementById("p75");

const p90Element =
    document.getElementById("p90");

const p95Element =
    document.getElementById("p95");


/* =========================
   Z-Score Elements
========================= */

const lowestZScoreElement =
    document.getElementById("lowestZScore");

const highestZScoreElement =
    document.getElementById("highestZScore");

const meanZScoreElement =
    document.getElementById("meanZScore");

const zScoreTable =
    document.getElementById("zScoreTable");


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
   Box Plot Elements
========================= */

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
   Parse Dataset
========================= */

/**
 * Convert user input into an array
 * of numbers.
 *
 * Supports:
 * - Commas
 * - Spaces
 * - New lines
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
   Display Main Results
========================= */

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

function displayAnalysis(values) {

    const sorted =
        getSortedValues(values);

    const unique =
        getUniqueValues(values);

    const firstQuartile =
        getQ1(values);

    const thirdQuartile =
        getQ3(values);

    const interquartileRange =
        getIQR(values);


    sortedDataElement.textContent =
        sorted
            .map(formatNumber)
            .join(", ");

    uniqueValuesElement.textContent =
        unique.length;

    q1Element.textContent =
        formatNumber(firstQuartile);

    q3Element.textContent =
        formatNumber(thirdQuartile);

    iqrElement.textContent =
        formatNumber(interquartileRange);


    /* =========================
       Frequency Distribution
    ========================== */

    const frequencies =
        getFrequencyDistribution(values);

    frequencyTable.innerHTML = `

        <div class="frequency-line">

            <div class="frequency-title">
                Value
            </div>

            <div class="frequency-data">

                ${frequencies
                    .map(item => `
                        <span>
                            ${formatNumber(item.value)}
                        </span>
                    `)
                    .join("")}

            </div>

        </div>


        <div class="frequency-line">

            <div class="frequency-title">
                Frequency
            </div>

            <div class="frequency-data">

                ${frequencies
                    .map(item => `
                        <span>
                            ${item.frequency}
                        </span>
                    `)
                    .join("")}

            </div>

        </div>

    `;

    renderFrequencyChart(values);
}


/* =========================
   Frequency Chart
========================= */

function renderFrequencyChart(values) {

    const frequencies =
        getFrequencyDistribution(values);

    if (!frequencies.length) {

        frequencyChart.innerHTML = "";

        return;
    }

    const maxFrequency =
        Math.max(
            ...frequencies.map(
                item => item.frequency
            )
        );

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


    const points = [

        [scaleMinimum, minimum],
        [scaleQ1, q1],
        [scaleMedian, median],
        [scaleQ3, q3],
        [scaleMaximum, maximum]

    ];


    points.forEach(
        ([element, value]) => {

            if (!element) {
                return;
            }

            element.setAttribute(
                "data-value",
                formatNumber(value)
            );

        }
    );
}


/* =========================
   Percentile Analysis
========================= */

function displayPercentiles(values) {

    const percentiles =
        getPercentileSummary(values);


    if (p10Element) {
        p10Element.textContent =
            formatNumber(percentiles.p10);
    }

    if (p25Element) {
        p25Element.textContent =
            formatNumber(percentiles.p25);
    }

    if (p50Element) {
        p50Element.textContent =
            formatNumber(percentiles.p50);
    }

    if (p75Element) {
        p75Element.textContent =
            formatNumber(percentiles.p75);
    }

    if (p90Element) {
        p90Element.textContent =
            formatNumber(percentiles.p90);
    }

    if (p95Element) {
        p95Element.textContent =
            formatNumber(percentiles.p95);
    }
}


/* =========================
   Z-Score Analysis
========================= */

function displayZScores(values, type) {

    const zScoreData =
        getZScoreData(
            values,
            type
        );

    const summary =
        getZScoreSummary(
            values,
            type
        );


    if (lowestZScoreElement) {

        lowestZScoreElement.textContent =
            formatNumber(summary.lowest);
    }


    if (highestZScoreElement) {

        highestZScoreElement.textContent =
            formatNumber(summary.highest);
    }


    if (meanZScoreElement) {

        meanZScoreElement.textContent =
            formatNumber(summary.mean);
    }


    if (!zScoreTable) {
        return;
    }


    zScoreTable.innerHTML =
        zScoreData
            .map(item => `

                <tr>

                    <td>
                        ${item.index}
                    </td>

                    <td>
                        ${formatNumber(item.value)}
                    </td>

                    <td>
                        ${formatNumber(item.zScore)}
                    </td>

                    <td>
                        ${item.interpretation}
                    </td>

                </tr>

            `)
            .join("");
}


/* =========================
   Outlier Detection
========================= */

function displayOutliers(values) {

    const q1 =
        getQ1(values);

    const q3 =
        getQ3(values);

    const iqr =
        getIQR(values);

    const lowerBound =
        q1 - (1.5 * iqr);

    const upperBound =
        q3 + (1.5 * iqr);

    const outliers =
        values.filter(
            value =>
                value < lowerBound ||
                value > upperBound
        );


    lowerBoundElement.textContent =
        formatNumber(lowerBound);

    upperBoundElement.textContent =
        formatNumber(upperBound);

    outlierCountElement.textContent =
        outliers.length;


    if (!outliers.length) {

        outlierValuesElement.textContent =
            "No outliers detected.";

        outlierStatusElement.textContent =
            "✓ No outliers detected.";

        outlierStatusElement.classList.remove(
            "has-outliers"
        );

    } else {

        outlierValuesElement.textContent =
            outliers
                .map(formatNumber)
                .join(", ");

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
   Box Plot Median
========================= */

function getMedianForBoxPlot(values) {

    return getMedian(values);
}


/* =========================
   Render Box Plot
========================= */

function renderBoxPlot(values) {

    if (
        !boxPlotSection ||
        !boxPlot
    ) {
        return;
    }


    if (!values.length) {

        boxPlot.innerHTML = "";

        boxPlotSection.classList.add(
            "hidden"
        );

        return;
    }


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
        getIQR(values);


    const lowerBound =
        q1 - (1.5 * iqr);

    const upperBound =
        q3 + (1.5 * iqr);


    const outliers =
        values.filter(
            value =>
                value < lowerBound ||
                value > upperBound
        );


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
       Constant Dataset
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


    function getPosition(value) {

        return (
            (value - plotMinimum) /
            plotRange
        ) * 100;
    }


    const minimumPosition =
        getPosition(minimum);

    const q1Position =
        getPosition(q1);

    const medianPosition =
        getPosition(median);

    const q3Position =
        getPosition(q3);

    const maximumPosition =
        getPosition(maximum);


    const boxWidth =
        q3Position - q1Position;

    const safeBoxWidth =
        Math.max(boxWidth, 0.8);


    let medianInsideBox = 50;

    if (q3 !== q1) {

        medianInsideBox =
            (
                (median - q1) /
                (q3 - q1)
            ) * 100;
    }


    medianInsideBox =
        Math.max(
            0,
            Math.min(
                100,
                medianInsideBox
            )
        );


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
                        aria-label="Outlier ${formatNumber(value)}"
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


            <div
                class="box-whisker-cap"
                style="
                    left: ${minimumPosition}%;
                "
            ></div>


            <div
                class="box-whisker-cap"
                style="
                    left: ${maximumPosition}%;
                "
            ></div>


            <div
                class="box-plot-box"
                style="
                    left: ${q1Position}%;
                    width: ${safeBoxWidth}%;
                "
            >

                <div
                    class="box-median"
                    style="
                        left: ${medianInsideBox}%;
                    "
                ></div>

            </div>


            ${outlierMarkup}

        </div>


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


    boxPlotSection.classList.remove(
        "hidden"
    );
}


/* =========================
   Show Results
========================= */

function showResults() {

    resultsSection.classList.remove("hidden");

    analysisSection.classList.remove("hidden");

    summarySection.classList.remove("hidden");

    if (percentileSection) {
        percentileSection.classList.remove("hidden");
    }

    if (zScoreSection) {
        zScoreSection.classList.remove("hidden");
    }

    outlierSection.classList.remove("hidden");

    if (boxPlotSection) {
        boxPlotSection.classList.remove("hidden");
    }
}


/* =========================
   Hide Results
========================= */

function hideResults() {

    resultsSection.classList.add("hidden");

    analysisSection.classList.add("hidden");

    summarySection.classList.add("hidden");

    if (percentileSection) {
        percentileSection.classList.add("hidden");
    }

    if (zScoreSection) {
        zScoreSection.classList.add("hidden");
    }

    outlierSection.classList.add("hidden");

    if (boxPlotSection) {
        boxPlotSection.classList.add("hidden");
    }
}


/* =========================
   Calculate Dataset
========================= */

function calculateDataset() {

    errorMessage.textContent = "";


    const values =
        parseInput(
            dataInput.value
        );


    const error =
        validateValues(values);


    if (error) {

        errorMessage.textContent =
            error;

        hideResults();

        return;
    }


    const type =
        varianceType.value;


    const results =
        calculateStatistics(
            values,
            type
        );


    displayResults(results);

    displayAnalysis(values);

    displaySummary(
        values,
        results
    );

    displayPercentiles(values);

    displayZScores(
        values,
        type
    );

    displayOutliers(values);

    renderBoxPlot(values);


    showResults();


    datasetCount.textContent =
        `${values.length} value${
            values.length !== 1
                ? "s"
                : ""
        }`;


    saveHistory(
        values,
        results,
        type
    );


    renderHistory();
}


/* =========================
   Clear Dataset
========================= */

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

function renderHistory() {

    const history =
        getHistory();


    if (!history.length) {

        historyList.innerHTML = `

            <div class="empty-history">
                No calculations yet.
            </div>

        `;

        return;
    }


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


    document
        .querySelectorAll(".delete-history")
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

calculateBtn.addEventListener(
    "click",
    calculateDataset
);


clearBtn.addEventListener(
    "click",
    clearDataset
);


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